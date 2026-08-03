import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';

type Detection = {
    class: string;
    confidence: number;
    bbox: [number, number, number, number]; // [x1, y1, x2, y2]
};

export default function BallHoopScreen() {
    const [permission, requestPermission] = useCameraPermissions();
    const [detections, setDetections] = useState<Detection[]>([]);

    useEffect(() => {
        if (permission && !permission.granted) {
            requestPermission();
        }
    }, [permission]);

    if (!permission) {
        return <View style={styles.container} />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Waiting for camera permission...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} facing="back" zoom={0.5} />

            {/* Overlay sits ON TOP of the camera, drawing each detection as a box */}
            <View style={StyleSheet.absoluteFill} pointerEvents="none">
                {detections.map((det, index) => {
                    const [x1, y1, x2, y2] = det.bbox;
                    return (
                        <View
                            key={index}
                            style={[
                                styles.box,
                                {
                                    left: x1,
                                    top: y1,
                                    width: x2 - x1,
                                    height: y2 - y1,
                                },
                            ]}
                        >
                            <Text style={styles.label}>
                                {det.class} {(det.confidence * 100).toFixed(0)}%
                            </Text>
                        </View>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0d0d0d',
    },
    camera: {
        flex: 1,
        width: '100%',
    },
    text: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    box: {
        position: 'absolute',
        borderWidth: 2,
        borderColor: '#00ff00',
    },
    label: {
        position: 'absolute',
        top: -20,
        left: 0,
        color: '#00ff00',
        fontSize: 12,
        fontWeight: 'bold',
        backgroundColor: 'rgba(0,0,0,0.6)',
        paddingHorizontal: 4,
    },
});
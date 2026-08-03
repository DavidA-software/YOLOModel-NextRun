import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function DashboardScreen({ navigation }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>NextRun</Text>

            <TouchableOpacity
                style={styles.tile}
                onPress={() => navigation.navigate('BallHoop')}
            >
                <Text style={styles.tileText}>Ball & Hoop Detection</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 20,
        backgroundColor: '#0d0d0d',
    },
    header: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 30,
    },
    tile: {
        backgroundColor: '#1a1a1a',
        borderRadius: 12,
        padding: 20,
        marginBottom: 16,
        borderWidth: 1,
        borderColor: '#2a2a2a',
    },
    tileText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '600',
    },
});
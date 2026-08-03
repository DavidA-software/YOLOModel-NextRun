import {StyleSheet, Text, View} from 'react-native';

import DashboardScreen from './src/screens/DashboardScreen';
import AppNavigator from "./src/navigation/AppNavigator";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function App() {
    return (
        <AppNavigator/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

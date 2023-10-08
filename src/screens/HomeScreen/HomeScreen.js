import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import colors from '../../utils/colors';
import RouteName from '../../routes/RouteName';

const HomeScreen = () => {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.background} barStyle={'dark-content'} />
            <Text style={styles.topText}>HomeScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: colors.width * 0.05,
        paddingVertical: colors.width * 0.05
    },
});

export default HomeScreen;
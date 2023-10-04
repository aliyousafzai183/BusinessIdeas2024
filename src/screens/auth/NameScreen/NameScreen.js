import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';
import colors from '../../../utils/colors';
import RouteName from '../../../routes/RouteName';

const NameScreen = () => {

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.primary} />
            <Text style={styles.topText}>NameScreen</Text>
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

export default NameScreen;
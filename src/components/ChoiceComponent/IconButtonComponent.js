import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const IconButtonComponent = ({ icon, label, index, selectedIndex }) => {
    return (
        <View style={styles.container}>
            <View style={[
                styles.iconContainer,
                selectedIndex === index && styles.activeIcon
            ]}>
                <FontAwesome5 name={icon} color={selectedIndex === index ? colors.secondary : colors.textBlack} size={23} />
            </View>
            <Text style={styles.actionText}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: 95,
        justifyContent: 'space-between',
        marginHorizontal: 10,
    },
    iconContainer: {
        width: 70,
        height: 70,
        borderRadius: 100,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.background,

        elevation: 2,
        shadowColor: colors.blackTransparent
    },
    activeIcon: {
        borderWidth: 2,
        borderColor: colors.secondary,
        elevation: 10,
        shadowColor: colors.secondary
    },
    actionText: {
        fontSize: 13,
        color: colors.textBlack,
    },
});

export default IconButtonComponent;
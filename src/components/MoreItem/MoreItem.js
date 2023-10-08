import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6'; // Import FontAwesome6 for vector icons
import colors from '../../utils/colors'; // Import your color styles

const MoreItem = ({ title, iconName, onPress }) => {
    return (
        <Pressable style={styles.itemContainer} onPress={() => onPress(title)}>
            <FontAwesome6 name={iconName} color={colors.primary} size={20} style={styles.icon} />
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 100,
        borderColor: colors.blackTransparent
    },
    icon: {
        marginRight: 10,
    },
    title: {
        fontSize: 16,
        color: colors.textBlack, // Add your text color
    },
});

export default MoreItem;
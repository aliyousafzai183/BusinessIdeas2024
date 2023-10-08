import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../utils/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const IdeaComponent = ({ item }) => {
    const [isExtended, setIsExtended] = useState(false);

    const handlePress = () => {
        setIsExtended(!isExtended);
    }

    return (
        <TouchableOpacity style={styles.ideaContainer} onPress={handlePress} >
            <View style={styles.headingContainer} >
                <Text style={styles.ideaTitle}>{item.title}</Text>
                <MaterialCommunityIcons name={isExtended ? 'arrow-expand-up' : 'arrow-expand-down'} size={23} color={colors.primary} />
            </View>
            {
                isExtended && (
                    <View style={styles.ideaInfo}>
                        {/* <Text style={styles.ideaCategory}>{item.category}</Text> */}
                        <Text style={styles.ideaDescription}>{item.description}</Text>
                    </View>
                )
            }
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    ideaContainer: {
        backgroundColor: colors.white,
        borderRadius: 20,
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: colors.blackTransparent
    },
    headingContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    ideaImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginRight: 10,
    },
    ideaInfo: {
        flex: 1,
    },
    ideaTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: colors.textInactive
    },
    ideaCategory: {
        fontSize: 16,
        color: colors.primary,
        marginTop: 5,
    },
    ideaDescription: {
        fontSize: 14,
        marginTop: 5,
        color: colors.textInactive
    },
});

export default IdeaComponent;
import React from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';
import colors from '../../utils/colors';
import IconButtonComponent from './IconButtonComponent';

const ChoiceComponent = ({ selectedIndex, setSelectedIndex }) => {
    const buttons = [
        {
            category: 'All',
            icon: 'align-justify', // You can use FontAwesome6 icons for simplicity
        },
        {
            category: 'Tech Services',
            icon: 'laptop-code', // You can use FontAwesome6 icons for simplicity
        },
        {
            category: 'Online Retail',
            icon: 'shopping-cart',
        },
        {
            category: 'Food & Bev',
            icon: 'utensils',
        },
        {
            category: 'Wellness',
            icon: 'heart',
        },
        {
            category: 'Real Estate',
            icon: 'building',
        },
        {
            category: 'Education',
            icon: 'graduation-cap',
        },
        {
            category: 'Home Improvement',
            icon: 'hammer',
        },
        {
            category: 'Fashion',
            icon: 'tshirt',
        },
        {
            category: 'Sustainability',
            icon: 'leaf',
        },
        {
            category: 'Entertainment',
            icon: 'music',
        },
    ];

    return (
        <ScrollView
            contentContainerStyle={styles.container}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
        >
            {buttons.map((button, index) => (
                <Pressable
                    key={index}
                    onPress={() => setSelectedIndex(index)}
                >
                    <IconButtonComponent icon={button.icon} label={button.category} index={index} selectedIndex={selectedIndex} />
                </Pressable>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 95,
        backgroundColor: colors.background,
        borderRadius: 16,
        marginTop: 25,
        marginBottom: 120,
    },
});

export default ChoiceComponent;
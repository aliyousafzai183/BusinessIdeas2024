import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, StatusBar, ScrollView, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../utils/colors';
import RouteName from '../../routes/RouteName';
import { ChoiceComponent, IdeaComponent } from '../../components/index';
import BusinessIdeas from '../../database/BusinessIdeas';

const HomeScreen = ({ navigation }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    // Define category buttons with icons
    const buttons = [
        {
            category: 'All',
            icon: 'align-justify',
        },
        {
            category: 'Tech Services',
            icon: 'laptop-code',
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

    // Filter business ideas based on the selected category index
    const filteredIdeas = selectedIndex === 0 ? BusinessIdeas : BusinessIdeas.filter(idea => idea.category === buttons[selectedIndex].category);

    const handleSearch = () => {
        navigation.navigate(RouteName.SEARCH_SCREEN);
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.background} barStyle={'dark-content'} />
            <Image source={require('../../images/Banner.png')} style={styles.banner} />

            {/* Search Button */}
            <TouchableOpacity style={styles.searchButton} onPress={handleSearch} >
                <Feather name="search" color={colors.blackTransparent} size={23} style={styles.searchIcon} />
                <Text style={styles.searchLabel}>Search Ideas</Text>
            </TouchableOpacity>

            {/* Category Component */}
            <ChoiceComponent selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} buttons={buttons} />

            {/* Display Business Ideas */}
            <Text style={styles.heading} >{buttons[selectedIndex].category}:</Text>
            <FlatList
                data={filteredIdeas}
                keyExtractor={(item, index) => index.toString()}
                initialNumToRender={20}
                renderItem={({ item }) => (
                    <IdeaComponent item={item} />
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: colors.width * 0.05,
        paddingTop: colors.width * 0.1,
    },
    banner: {
        width: '100%',
        resizeMode: 'cover',
    },
    searchButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 100,
        paddingHorizontal: 16,
        paddingVertical: 10,
        marginTop: 20,
        borderWidth: 1,
        width: '90%',
        alignSelf: 'center',
        borderColor: colors.blackTransparent,
    },
    searchIcon: {
        marginRight: 10,
    },
    searchLabel: {
        fontSize: 16,
        color: colors.blackTransparent,
    },
    heading: {
        fontSize: 20,
        color: colors.primary,
        marginTop: 20,
        marginBottom: 10,
        fontWeight: "600"
    },
});

export default HomeScreen;
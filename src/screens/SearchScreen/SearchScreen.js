import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, FlatList, StyleSheet, StatusBar, Linking } from 'react-native';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../utils/colors';
import BusinessIdeas from '../../database/BusinessIdeas';
import { IdeaComponent } from '../../components';

const SearchScreen = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        // Implement search logic here
        const filteredIdeas = BusinessIdeas.filter((idea) =>
            idea.title.toLowerCase().includes(searchText.toLowerCase()) ||
            idea.description.toLowerCase().includes(searchText.toLowerCase())
        );
        setSearchResults(filteredIdeas);
    }, [searchText]);

    const handleSuggestIdea = () => {
        Linking.openURL(`mailto:warisallah923@gmail.com?subject=${'Suggest a Business Idea'}`);
    }

    const handleGoBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.background} barStyle={'dark-content'} />

            <View style={styles.searchWrapper}>
                <TouchableOpacity onPress={handleGoBack}>
                    <FontAwesome6 name="arrow-left" color={colors.textInactive} size={25} style={styles.searchIcon} />
                </TouchableOpacity>
                <View style={styles.searchContainer}>
                    <Feather name="search" color={colors.textInactive} size={23} style={styles.searchIcon} />
                    <TextInput
                        style={styles.input}
                        placeholder="Search Ideas"
                        placeholderTextColor={colors.textInactive}
                        value={searchText}
                        onChangeText={(text) => setSearchText(text)}
                    />
                    {searchText.length > 0 && (
                        <TouchableOpacity onPress={() => setSearchText('')} style={styles.clearButton}>
                            <AntDesign name="closecircle" color={colors.blackTransparent} size={20} />
                        </TouchableOpacity>
                    )}
                </View>
            </View>

            <FlatList
                data={searchResults}
                keyExtractor={(item, index) => index.toString()}
                initialNumToRender={10}
                renderItem={({ item }) => (
                    <IdeaComponent item={item} />
                )}
            />

            {searchText.length > 0 && searchResults.length === 0 && (
                <View style={styles.noResultsContainer}>
                    <Text style={styles.noResultText} >The idea you searched for was not found.</Text>
                    <TouchableOpacity style={styles.itemContainer} onPress={handleSuggestIdea}>
                        <FontAwesome6 name={'business-time'} color={colors.primary} size={20} style={styles.icon} />
                        <Text style={styles.title}>Suggest a Business Idea</Text>
                    </TouchableOpacity>
                </View>
            )}
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
    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginBottom: 30
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 100,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: colors.blackTransparent,
        width: '90%'
    },
    searchIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: colors.textBlack,
    },
    clearButton: {
        padding: 10,
    },
    ideaItem: {
        marginVertical: 10,
    },
    noResultsContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    noResultText: {
        fontSize: 16,
        color: colors.primary,
        marginBottom: 20
    },
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

export default SearchScreen;
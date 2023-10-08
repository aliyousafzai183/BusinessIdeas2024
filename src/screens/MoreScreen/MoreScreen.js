import React from 'react';
import { View, FlatList, Image, StyleSheet, StatusBar, Linking } from 'react-native';
import colors from '../../utils/colors';
import moreItems from '../../database/moreItems';
import { MoreItem } from '../../components';

const MoreScreen = () => {

    // Define the function to handle button press based on item name
    const handleItemPress = async (itemName) => {
        switch (itemName) {
            case 'Privacy Policy':
                await Linking.openURL('https://www.freeprivacypolicy.com/live/0456341d-e989-433a-8348-ac232d0fbca5');
                break;
            case 'Terms of Service':
                await Linking.openURL('https://www.freeprivacypolicy.com/live/16c2795f-c079-4259-87c3-0b9e95f02cfd');
                break;
            case 'Suggest a Business idea':
                sendEmail('Suggest a Business idea');
                break;
            case 'Suggest a Quote':
                sendEmail('Suggest a Quote');
                break;
            case 'Contact Us':
                sendEmail('Contact Us');
                break;
            case 'Report a Problem':
                sendEmail('Report a Problem');
                break;
            default:
                break;
        }
    };

    // Function to send an email
    const sendEmail = (subject) => {
        Linking.openURL(`mailto:warisallah923@gmail.com?subject=${subject}`);
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.background} barStyle={'dark-content'} />
            <Image source={require('../../images/bannerMore.png')} style={styles.banner} />
            <FlatList
                data={moreItems}
                keyExtractor={(item) => item.title}
                contentContainerStyle={styles.flatlist}
                renderItem={({ item }) => (
                    <MoreItem
                        title={item.title}
                        iconName={item.iconName}
                        onPress={handleItemPress}
                    />
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
    flatlist: {
        marginTop: 50,
    },
});

export default MoreScreen;
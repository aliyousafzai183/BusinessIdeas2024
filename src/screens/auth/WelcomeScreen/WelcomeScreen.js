import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, StatusBar } from 'react-native';
import RouteName from '../../../routes/RouteName';
import colors from '../../../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

const WelcomeScreen = ({ navigation }) => {

    const handleContinue = () => {
        AsyncStorage.setItem('welcome', 'true');
        navigation.navigate(RouteName.BOTTOM_TAB);
    }

    return (
        // <ImageBackground source={require('../../../images/welcome.jpg')} style={styles.background} resizeMode='cover'  >

        <View style={styles.innerWrapper}>
            <StatusBar backgroundColor='transparent' barStyle={'dark-content'} translucent={true} />
            <View style={styles.textContainer}>
                <View style={styles.innerTextContainer}>
                    <Text style={styles.welcomeText}>Welcome </Text>
                    <Text style={styles.welcomeText}>to </Text>
                </View>
                <Text style={styles.specialWelcomeText}>Business Ideas 2024</Text>
                <Text style={styles.descriptionText}>Pick an Idea, Grow Now!</Text>
            </View>


            <TouchableOpacity style={styles.otherSignUpButton} onPress={handleContinue} >
                <Text style={styles.otherButtonText}>Continue</Text>
            </TouchableOpacity>
        </View>

        // </ImageBackground>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    innerWrapper: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingTop: '10%',
        paddingHorizontal: '5%',
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
    },
    innerTextContainer: {
        alignItems: 'flex-start',
        alignSelf: 'flex-start',
        flexDirection: 'row',
    },
    specialWelcomeText: {
        fontSize: 53,
        fontWeight: 'bold',
        marginBottom: 10,
        color: colors.secondary,
    },
    welcomeText: {
        fontSize: 53,
        fontWeight: '700',
        color: colors.textBlack,
    },
    descriptionText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        fontWeight: '400'
    },
    otherSignUpButton: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        height: 55,
        backgroundColor: colors.secondary,
        alignSelf: 'flex-end'
    },
    otherButtonText: {
        fontSize: 17,
        fontWeight: '600',
        color: colors.textBlack
    },
});

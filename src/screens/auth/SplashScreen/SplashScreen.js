import React, { useEffect } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, ImageBackground } from 'react-native';
import colors from '../../../utils/colors';
import RouteName from '../../../routes/RouteName';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        const checkStatus = async () => {
            const welcome = await AsyncStorage.getItem('welcome');
            if (welcome === 'true') {
                navigation.replace(RouteName.BOTTOM_TAB);
            } else {
                navigation.replace(RouteName.WELCOME_SCREEN);
            }

        }

        checkStatus();
    }, []);

    return (
        // <ImageBackground source={require('../../../images/splashwalpaper.jpg')} style={styles.container} resizeMode='cover'  >
        <View style={styles.innerWrapper} >
            <StatusBar hidden={true} />
            <Text style={styles.topText}></Text>
            <Image source={require('../../../images/LogoTransparent.png')} style={styles.logo} />
            <Text style={styles.topText}>Business Ideas 2024</Text>
        </View>
        // </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerWrapper: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: colors.background,
    },
    topText: {
        fontSize: 24,
        marginBottom: 20,
        color: colors.textBlack,
        fontWeight: '700'
    },
    logo: {
        width: 200,
        height: 200,
    },
});

export default SplashScreen;
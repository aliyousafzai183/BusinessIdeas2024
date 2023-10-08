import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import colors from '../../utils/colors';
import axios from 'axios';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Share from 'react-native-share';

const QuoteScreen = () => {
    const [quote, setQuote] = useState('');
    const [loading, setLoading] = useState(true);

    // Function to fetch a new random quote
    const fetchRandomQuote = async () => {
        setLoading(true);

        try {
            // Replace 'YOUR_API_KEY' with your actual API key
            const apiKey = 'aV3D0fNcLDiqY2zYAEwm4Q==05RgX2jTMjQNwbnT';
            const category = 'business';

            const response = await axios.get(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
                headers: { 'X-Api-Key': apiKey },
            });

            // Extract the quote from the response (adjust according to your API)
            const newQuote = response.data[0];

            // Set the new quote in the state
            setQuote(newQuote);
        } catch (error) {
            console.error('Error fetching quote:', error);
        }

        setLoading(false);
    };

    // Fetch a random quote when the component mounts
    useEffect(() => {
        fetchRandomQuote();
    }, []);

    // Function to share the quote and author
    const shareQuote = async () => {
        try {
            const shareOptions = {
                message: `"${quote.quote}" - ${quote.author}`,
            };

            await Share.open(shareOptions);
        } catch (error) {
            console.error('Error sharing quote:', error);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={colors.background} barStyle={'dark-content'} />
            <Image source={require('../../images/bannerQuotes.png')} style={styles.banner} />

            {/* Display the quote */}
            <View style={styles.quoteContainer}>
                <Text style={styles.quoteText}><FontAwesome6 name="quote-left" color={colors.primary} size={24} style={styles.quoteIconStart} /> {quote.quote} <FontAwesome6 name="quote-right" color={colors.primary} size={24} style={styles.quoteIconEnd} /></Text>

                <Text style={styles.authorText}>- {quote.author}</Text>
            </View>

            {/* Next button to fetch a new quote */}
            <View style={styles.buttonsContainer}>
                <TouchableOpacity
                    style={styles.shareButton}
                    onPress={shareQuote}
                    disabled={loading}
                >
                    <FontAwesome6 name="share-nodes" color={colors.white} size={16} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.nextButton}
                    onPress={fetchRandomQuote}
                    disabled={loading}
                >
                    <Text style={styles.nextButtonText}>
                        {loading ? 'Loading...' : 'Next Quote'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: colors.width * 0.05,
        paddingTop: colors.width * 0.1,
        alignItems: 'center',
    },
    banner: {
        width: '100%',
        resizeMode: 'cover',
    },
    quoteContainer: {
        alignSelf: 'center',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    quoteIconStart: {
        alignSelf: 'flex-start'
    },
    quoteIconEnd: {
        alignSelf: 'flex-end'
    },
    quoteText: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 20,
        color: colors.textBlack
    },
    authorText: {
        fontSize: 17,
        color: colors.primary,
        fontWeight: '600'
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
    },
    nextButton: {
        backgroundColor: colors.secondary,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 100,
        alignSelf: 'flex-end'
    },
    nextButtonText: {
        fontSize: 16,
        color: colors.textInactive,
        fontWeight: '700'
    },
    shareButton: {
        backgroundColor: colors.secondary,
        borderRadius: 100,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40
    },
    shareButtonText: {
        fontSize: 16,
        color: colors.white,
        fontWeight: '700',
    },
});

export default QuoteScreen;
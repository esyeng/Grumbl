import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Button from '../components/Button';
import TextLarge from '../components/TextLarge';
import theme from '../../theme/theme'; // Assuming theme is in the same directory

interface InfoProps {
    image: string;
    alt: string;
    svgClass: string;
    svgPath: string;
    infoText: string;
    btnText: string;
}

export const Info = ({
    image,
    alt,
    svgClass,
    svgPath,
    infoText,
    btnText,
}: InfoProps): JSX.Element => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: image }}
                    style={styles.image}
                    alt={alt}
                />
                <View style={styles.svgContainer}>
                    <Image style={styles[svgClass]} alt="Vector" source={{ uri: svgPath }} />
                    <TextLarge
                        text={infoText}
                    />
                </View>
                <Button
                    text={btnText}
                    size='large'
                    state='primary'
                />
                <TextLarge
                    text="Skip"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: theme.colors.background,
        flex: 1,
        justifyContent: 'center',
        width: '100%',
    },
    imageContainer: {
        backgroundColor: theme.colors.background,
        width: 360,
        height: 800,
        position: 'relative',
    },
    image: {
        position: 'absolute',
        width: 342,
        height: 342,
        top: 113,
        left: 9,
        resizeMode: 'cover', // Equivalent to object-cover
    },
    svgContainer: {
        position: 'absolute',
        width: 249,
        height: 179,
        top: 465,
        left: 56,
    },
    // Add other styles and svgClass styles here
});

export default Info;

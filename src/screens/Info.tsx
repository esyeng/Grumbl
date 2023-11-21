import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Button from '../components/Button';
import TextLarge from '../components/TextLarge';
import theme from '../../theme/theme';
import * as infoGlyph from '../../assets/info_one_graphic.png';

interface InfoProps {
    // image: "*.png" | string | any;
    alt: string;
    svg?: any;
    infoText: string;
    btnText: string;
}

export const Info = ({
    // image,
    alt,
    svg,
    infoText,
    btnText,
}: InfoProps): JSX.Element => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.imageContainer}>
                <Image
                    source={infoGlyph}
                    style={styles.image}
                    alt={alt}
                />
                <View >

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
        display: 'flex',
        alignItems: 'center',
        height: '100%',

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
        resizeMode: 'contain',
    },
    svgContainer: {
        position: 'absolute',
        width: 249,
        height: 179,
        top: 465,
        left: 56,
    },
});

export default Info;

import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../../theme/theme';

interface TextLargeProps {
    text: string;
}

const TextLarge = ({ text }: TextLargeProps): JSX.Element => {
    return <Text style={styles.text}>{text}</Text>;
};

const styles = StyleSheet.create({
    text: {
        fontFamily: theme.fonts.header1.fontFamily,
        fontSize: theme.fonts.header1.fontSize,
        color: theme.colors.textPrimary,
        textAlign: 'center',
    },
});

export default TextLarge;

import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import theme from '../../theme/theme';

interface Props {
    size: "large" | "medium" | "small";
    state: "primary" | "secondary" | "tertiary";
    text: string;
}

const Button = ({ size, state, text = "Label" }: Props): JSX.Element => {
    return (
        <TouchableOpacity
            style={[styles.buttonBase, styles[size], styles[state]]}
        >
            <Text
                style={[styles.textBase, styles[`text${size.charAt(0).toUpperCase() + size.slice(1)}`], styles[`text${state.charAt(0).toUpperCase() + state.slice(1)}`]]}
            >
                {text}
            </Text>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonBase: {
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 8,
    },
    large: {
        paddingHorizontal: 20,
        paddingVertical: 16,
        borderRadius: 16,
    },
    medium: {
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderRadius: 12,
    },
    small: {
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 8,
    },
    primary: {
        backgroundColor: theme.colors.primary,
    },
    secondary: {
        backgroundColor: theme.colors.secondary,
    },
    tertiary: {
        backgroundColor: theme.colors.background,
    },
    textBase: {
        fontFamily: theme.fonts.button.fontFamily,
        fontSize: theme.fonts.button.fontSize,
    },
    textLarge: theme.fonts.button.large,
    textMedium: theme.fonts.button.medium,
    textSmall: theme.fonts.button.small,
    textPrimary: {
        color: theme.colors.textPrimary,
    },
    textSecondary: {
        color: theme.colors.textSecondary,
    },

});

export default Button;

// theme.ts
import {TextStyle, ViewStyle} from 'react-native';

export interface Theme {
colors: {
    primary: string;
    secondary: string;
    background: string;
    complementary: string;
    rose: string;
    text: string;
    accent: string;
    lightShade: string;
    darkShade: string;
    textPrimary?: string;
    textSecondary?: string;
    error: string;
    success: string;
    warning: string;
    info: string;
};
fonts: {
    header1: {
        fontFamily: any;
        fontSize: number;
    };
    header2: {
        fontFamily: any;
        fontSize: number;
    };
    header3: {
        fontFamily: any;
        fontSize: number;
    };
    body1: TextStyle;
    body2: TextStyle;
    caption: TextStyle;
    button:{
        large: ViewStyle;
        medium: ViewStyle;
        small: ViewStyle;
        fontFamily: any;
        fontSize: number;
        flexDirection: any;
        alignItems: any;
        justifyContent: any;
        overflow: any;
    }
};
    components: {
    container: ViewStyle;
    card: ViewStyle;
    input: ViewStyle;
    buttonPrimary: ViewStyle;
    buttonSecondary: ViewStyle;
    header: ViewStyle;
    link: TextStyle;
    errorText: TextStyle;
    successText: TextStyle;
    warningText: TextStyle;
    infoText: TextStyle;
    };
}

export const theme: Theme = { // Change these to our colors
colors: {
    primary: '#FFB8DE',
    background: '#3A015C',
    secondary: '#97DFFC',
    complementary: '#F1E8B8',
    rose: '#FF36AB',
    text: '#ffffff',
    textSecondary: '#ffffff',
    textPrimary: '#E1BBC9',
    accent: '#C974D9',
    lightShade: '#B14AED',
    darkShade: '#1a001a',
    error: '#B00020',
    success: '#00C853',
    warning: '#FFAB00',
    info: '#2196F3',
},
fonts: { // Change these to our fonts
    header1: {
        fontFamily: 'Agbalumo-Regular',
        fontSize: 88,
    },
    header2: {
        fontFamily: 'Abgalumo-Regular',
        fontSize: 36,
    },
    header3: {
        fontFamily: 'Acme-Regular',
        fontSize: 22,
    },
    body1: {
        fontFamily: 'Acme-Regular',
        fontSize: 16,
    },
    body2: {
        fontFamily: 'Acme-Regular',
        fontSize: 14,
    },
    caption: {
        fontFamily: 'Zapfino',
        fontSize: 12,
    },
    button: {
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
        fontFamily: 'Georgia-Bold',
        fontSize: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
    },
},
components: {
    container: {
        padding: 16,
        backgroundColor: '#F2F2F2',
    },
    card: {
        borderRadius: 18,
        backgroundColor: '#FFFFFF',
        padding: 16,
        margin: 16,
        elevation: 2,
    },
    input: {
        height: 40,
        borderColor: '#CCC',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        margin: 16,
    },
    buttonPrimary: {
        backgroundColor: '#6200EE',
        padding: 12,
        borderRadius: 4,
    },
    buttonSecondary: {
    backgroundColor: '#03DAC6',
    padding: 12,
    borderRadius: 4,
    },
    header: {
    backgroundColor: '#6200EE',
    padding: 16,
    },
    link: {
    color: '#6200EE',
    textDecorationLine: 'underline',
    },
    errorText: {
        color: '#B00020',
    },
    successText: {
        color: '#00C853',
    },
    warningText: {
        color: '#FFAB00',
    },
    infoText: {
        color: '#2196F3',
    },
    },
};

export default theme;

import React, { createContext, useContext } from 'react';
import theme, { Theme } from './theme';

interface ThemeContextProps {
    theme: Theme;
}

interface ChildProps {
    children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextProps>({ theme });

export const ThemeProvider: React.FC<ChildProps> = ({ children }) => {
    return (
        <ThemeContext.Provider value={{ theme }}>{children}</ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context.theme;
};

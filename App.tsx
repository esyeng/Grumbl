import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from './theme/ThemeContext';
import { Info } from './src/screens/Info';


export default function App() {
  return (
    <View style={styles.container}>
        <Info
            image={'../../assets/info_one_graphic.png'}
            alt='info one'
            infoText='Craving something but not sure what?'
            btnText='Next'
        />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

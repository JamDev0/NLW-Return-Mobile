import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { theme } from './source/theme';
import { Widget } from './source/components/Widget'
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';





export default function App() {

  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
  })

  
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background,
    }}>

      <Widget/>
      <StatusBar
       style="light"
       backgroundColor='transparent'
       translucent
      />
    </View>
  );
}
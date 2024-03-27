import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Apresentation1 from './apresentation1.js'; 
import Apresentation2 from './apresentation2.js';
import Apresentation3 from './apresentation3.js';
import Login from './login.js';
import Cadastrate from './cadastrate.js';
import ForgotPassword from './forgotpassword.js';

const Stack = createStackNavigator();

const LoadingScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('apresentation1');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 450,
    height: 450,
    resizeMode: 'contain',
  },
});

const App = () => {
  // Carregar a fonte Nunito Sans
  let [fontsLoaded] = useFonts({
    NunitoSans: NunitoSans_400Regular,
    NunitoSansBold: NunitoSans_700Bold,
  });

  if (!fontsLoaded) {
    return null; // Renderizar algo enquanto as fontes estão sendo carregadas
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading" headerMode="none">
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="apresentation1" component={Apresentation1} />
        <Stack.Screen name="apresentation2" component={Apresentation2} />
        <Stack.Screen name="apresentation3" component={Apresentation3} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="cadastrate" component={Cadastrate} />
        <Stack.Screen name="forgotpassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

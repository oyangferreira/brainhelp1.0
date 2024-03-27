import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginScreen = ( {navigation} ) => {
  const forgotpassword = () => {
    navigation.navigate('forgotpassword'); 
} 
const cadastrate = () => {
    navigation.navigate('cadastrate'); 
} 
const login = () => {
    navigation.navigate('login'); 
} 

  return (
    <View style={styles.background}>
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/logob.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Bem Vindo!</Text>
      <Text style={styles.descriptionText}>Entre ou crie uma nova conta para ter acesso ao aplicativo.</Text>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#BEBEBE"
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#BEBEBE"
          secureTextEntry={true}
          style={styles.input}
        />
        <TouchableOpacity onPress={forgotpassword} style={styles.forgotPasswordButton}>
          <Text style={styles.forgotPasswordText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={login} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.orText}>Ou entre usando:</Text>
      <View style={styles.socialLoginContainer}>
        <TouchableOpacity onPress={cadastrate}>
        <Image source={require('./assets/google.png')} style={styles.socialIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={cadastrate}>
        <Image source={require('./assets/apple.png')} style={styles.socialIcon} />
        </TouchableOpacity>

        <TouchableOpacity onPress={cadastrate}>
        <Image source={require('./assets/facebook.png')} style={styles.socialIcon} />
        </TouchableOpacity>

      </View>
      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Não possui uma conta? </Text>
        <TouchableOpacity onPress={cadastrate}>
          <Text style={styles.bolder}>Crie agora</Text>
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    width: '80%',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 90,
  },
  logo: {
    resizeMode: 'contain',
  },
  title: {
    fontSize: 26,
    fontWeight: '500', 
    color: '#1D1E1D',
    marginTop: 10,
    fontFamily: 'NunitoSansBold',
  },
  descriptionText: {
    fontSize: 18,
    textAlign: 'left',
    marginBottom: 35,
    marginTop: 10,
    color: '#6E6E6E',
    fontFamily: 'NunitoSans',
  },
  formContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7E7',
    marginBottom: 10,
    paddingTop: 30,
    paddingVertical: 5,
    paddingHorizontal: 5,
    fontSize: 16,
    color: '#ABB0AF',
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    fontSize: 14,
    color: '#4ED5F9',
    fontFamily: 'NunitoSansBold',
  },
  loginButton: {
    backgroundColor: '#4ED5F9',
    width: '100%',
    paddingVertical: 9,
    borderRadius: 18,
    marginTop: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: 600,
    padding: 1,
  },
  orText: {
    color: '#6E6E6E',
    fontSize: 16,
    marginBottom: 20,
    fontFamily: 'NunitoSans',
    marginTop: 40,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  socialIcon: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },
  signupContainer: {
    alignItems: 'center',
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'row'
  },
  signupText: {
    color: '#7A7A7A',
    fontSize: 16,
    fontWeight: '600',
    padding: 1,
    marginTop: 20,
    fontFamily: 'NunitoSans',
  },
  bolder: {
    fontFamily: 'NunitoSansBold',
    color: '#6E6E6E',
    fontSize: 16,
    marginTop: 18,
  },
});

export default LoginScreen;


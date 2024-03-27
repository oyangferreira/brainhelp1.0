import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements'; // Importando o CheckBox

const RegisterScreen = ({ navigation }) => {
  const termsOfUse = () => {
    navigation.navigate('login');
  };

  const privacyPolicy = () => {
    navigation.navigate('login');
  };

  const signIn = () => {
    navigation.navigate('login');
  };

  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.background}>
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('./assets/logob.png')} style={styles.logo} />
      </View>
      <Text style={styles.title}>Crie uma conta</Text>
      <Text style={styles.subTitle}>Registre-se para começar</Text>
      <View style={styles.formContainer}>
        <TextInput
          placeholder="Nome" 
          placeholderTextColor="#BEBEBE"
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          placeholderTextColor="#BEBEBE"
          style={styles.input}
        />
        <TextInput
          placeholder="Celular"
          placeholderTextColor="#BEBEBE"
          style={styles.input}
        />
        <TextInput
          placeholder="Senha"
          placeholderTextColor="#BEBEBE"
          secureTextEntry={true}
          style={styles.input}
        />
        <TextInput
          placeholder="Repetir Senha"
          placeholderTextColor="#BEBEBE"
          secureTextEntry={true}
          style={styles.input}
        />
        <View style={styles.checkboxContainer}>
          <CheckBox
            title={
              <Text style={styles.termsText}>
                Ao se cadastrar, você concorda com nossos{' '}
                <Text
                  style={[styles.link, styles.underline]}
                  onPress={(event) => {
                    event.stopPropagation();
                    termsOfUse();
                  }}
                >
                  Termos de Uso
                </Text>{' '}
                e{' '}
                <Text
                  style={[styles.link, styles.underline]}
                  onPress={(event) => {
                    event.stopPropagation();
                    privacyPolicy();
                  }}
                >
                  Política de Privacidade
                </Text>
              </Text>
            }
            checked={isChecked}
            onPress={() => setIsChecked(!isChecked)}
            containerStyle={styles.checkbox}
            checkedColor="#4ED5F9"
          />
        </View>
        <TouchableOpacity onPress={signIn} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Registrar-se</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomContainer}>
        <Text style={styles.accountText}>Já possui uma conta?</Text>
        <TouchableOpacity onPress={signIn}>
          <Text style={styles.signInLink}>Entre Agora</Text>
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
  subTitle: {
    fontSize: 18,
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -40, 
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    paddingHorizontal: 0,
  },
  termsText: {
    fontSize: 18,
    color: '#7A7A7A',
    fontFamily: 'NunitoSans',
    paddingTop: 40,
  },
  link: {
    color: '#4ED5F9',
  },
  underline: {
    textDecorationLine: 'underline',
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
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    alignSelf: 'center',
  },
  accountText: {
    color: '#6E6E6E',
    fontSize: 16,
    marginRight: 5,
    fontFamily: 'NunitoSans',
  },
  signInLink: {
    color: '#4ED5F9',
    fontSize: 16,
    textDecorationLine: 'underline',
    fontFamily: 'NunitoSans',
  },
});

export default RegisterScreen;

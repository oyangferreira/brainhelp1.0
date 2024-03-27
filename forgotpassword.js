import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const ForgotPasswordScreen = ({ navigation }) => {
  const handleBack = () => {
    navigation.navigate('login')
  };

  const handleNext = () => {
    // Lógica para avançar para a próxima tela
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Image source={require('./assets/voltar.png')} style={styles.backIcon} />
      </TouchableOpacity>
      <Text style={styles.title}>Esqueceu sua senha</Text>
      <Text style={styles.description}>
        Para sua segurança, enviaremos um código para validar sua redefinição de senha. 
      </Text>
      <TextInput
        placeholder="Email"
        placeholderTextColor="#BEBEBE"
        style={styles.input}
      />
      <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
        <Text style={styles.nextButtonText}>Próximo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 30,
  },
  backButton: {
    position: 'absolute',
    top: 90,
    left: 30,
  },
  backIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontFamily: 'NunitoSansBold',
  },
  description: {
    fontSize: 16,
    color: '#6E6E6E',
    fontFamily: 'NunitoSans',
    marginLeft: 10,
    marginTop: 40,
    marginBottom: 40,
  },
  input: {
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 50,
    width: '95%',
    alignSelf: 'center',
    fontSize: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 3,
  },
  nextButton: {
    backgroundColor: '#4ED5F9',
    borderRadius: 18,
    paddingVertical: 9,
    paddingHorizontal: 32,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '600',
    padding: 1,
  },
});

export default ForgotPasswordScreen;

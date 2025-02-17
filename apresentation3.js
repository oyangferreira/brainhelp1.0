import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Apresentation3 = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('login'); 
}
const handleSkip = () => {
    navigation.navigate('login'); 
}
const handleBack = () => {
    navigation.goBack();
  };
 
  return ( 
    <View style={styles.background}>
    <View style={styles.container}>
      <TouchableOpacity onPress={handleBack} style={styles.backButton}>
        <Image source={require('./assets/voltar.png')} style={styles.backIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
        <Text style={styles.skipText}>Pular</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Crie sua conta</Text>
      <Image source={require('./assets/img3.png')} style={styles.image} />
      <View style={styles.content}>  
        <Text style={styles.description}> 
          Não perca esta oportunidade de{"\n"}  conversar à qualquer momento com{"\n"}  profissionais qualificados da área de{"\n"}  saúde mental. Crie sua conta para{"\n"}  acessar todos os recursos do nosso{"\n"}  aplicativo de apoio emocional.
        </Text> 
        <Image source={require('./assets/carrosel3.png')} style={styles.imageCarrosel}/>
        <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
          <Text style={styles.nextButtonText}>Começar</Text>
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
    alignSelf: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }, 
  backButton: {
    position: 'absolute',
    top: 60,
    left: 0,
  },
  backIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    left: -5,
  },
  skipButton: {
    position: 'absolute',
    top: 60,
    right: 0,
  },
  skipText: {
    fontSize: 16,
    color: '#6E6E6E',
    fontFamily: 'NunitoSans',
  },
  title: {
    fontSize: 20,
    alignSelf: 'flex-start',
    color: '#000000BF',
    marginTop: 50, 
    fontFamily: 'NunitoSansBold',
  }, 
  image: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginTop: 30, 
  }, 
  imageCarrosel: {
    position: 'fixed',
    marginTop: 50, 
    marginBottom: 40,
  },
  content: { 
    alignItems: 'center',
  }, 
  description: {
    fontSize: 18,
    textAlign: 'center',
    color: '#6E6E6E',
    lineHeight: 25, 
    fontFamily: 'NunitoSans',
  },
  nextButton: {
    backgroundColor: '#4ED5F9',
    width: 330,
    paddingVertical: 9, 
    borderRadius: 18,
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
    fontWeight: 600,
    padding: 1,
  },
});

export default Apresentation3;

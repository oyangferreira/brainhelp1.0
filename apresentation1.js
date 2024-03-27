import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const Apresentation1 = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('apresentation2'); 
  }

  const handleSkip = () => {
    navigation.navigate('cadastrate'); 
  }

  return ( 
    <View style={styles.background}>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
          <Text style={styles.skipText}>Pular</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Boas vindas!</Text>
        <Image source={require('./assets/img1.png')} style={styles.image} />
        <View style={styles.content}>  
          <Text style={styles.description}>
            Seja bem-vindo(a) ao Brain Help!{"\n"}
            O aplicativo revolucionário da área da{"\n"} saúde mental! Criado para oferecer o{"\n"} apoio emocional que você precisa.
          </Text>
          <Image source={require('./assets/carrosel1.png')} style={styles.imageCarrosel}/>
          <TouchableOpacity onPress={handleNext} style={styles.nextButton}>
            <Text style={styles.nextButtonText}>Próximo</Text>
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
    marginTop: 60,
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
    marginTop: 70,
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

export default Apresentation1;

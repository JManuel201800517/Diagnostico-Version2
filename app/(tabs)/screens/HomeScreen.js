import React, { useState } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import { Player } from '@lottiefiles/react-lottie-player';

const { width, height } = Dimensions.get('window');

export default function HomeScreen({ navigation }) {
  const [coins, setCoins] = useState('0000');

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../../../assets/Elementos estáticos/Fondo_RutaIterg_720x1600px_ExploraxV2-0.png')} // Imagen de fondo
        style={styles.background}
        imageStyle={styles.backgroundImage}
      >
        <Image
          source={require('../../../assets/Elementos estáticos/PlanetaAritmética.png')} // Imagen del planeta en la esquina superior izquierda
          style={styles.planet}
        />
        <View style={styles.coinContainer}>
          <Image 
            source={require('../../../assets/Elementos estáticos/moneda.png')} // Imagen de moneda
            style={styles.coinImage}
          />
          <Text style={styles.coinText}> {coins}</Text>
        </View>
        <View style={styles.instructionsContainer}>
          <View style={styles.animationContainer}>
            {Platform.OS === 'web' ? (
              <Player
                autoplay
                loop
                src={require('../../../assets/Animaciones (.json)/D con fuego.json')} // Animación de la "D" en formato .json
                style={styles.animation}
              />
            ) : (
              <LottieView
                source={require('../../../assets/Animaciones (.json)/D con fuego.json')} // Animación de la "D" en formato .json
                autoPlay
                loop
                style={styles.animation}
              />
            )}
          </View>
          <Text style={styles.title}>¡Desafíate!</Text>
          <Image 
            source={require('../../../assets/Elementos estáticos/Línea_título.png')} // Imagen del subrayado morado
            style={styles.underlineImage}
          />
          <Text style={styles.instructions}>
            Bienvenido a la misión <Text style={styles.bold}>Explorax</Text>. Prepárate para desafiar tus conocimientos y habilidades.
          </Text>
          <Text style={styles.instructions}>
            Supera estos desafíos y empieza a completar la misión de: <Text style={styles.bold}>Jerarquía de Operaciones</Text>
          </Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Transition', { nextScreen: 'Quiz' })}
          >
            <Text style={styles.buttonText}>Iniciar Misión</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require('../../../assets/Elementos estáticos/pers_Chanín_PoseBase.png')} // Imagen de una persona en el lado derecho
          style={styles.person}
        />
        <Image
            source={require('../../../assets/Elementos estáticos/LogoParaFondosOscuros_ExploraxV2-0.png')} // Logo dentro del contenedor circular azul
            style={styles.logo}
          />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  planet: {
    position: 'absolute',
    top: 10, // Subimos la posición del planeta
    left: 20,
    width: 100,
    height: 100,
  },
  coinContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinText: {
    fontSize: 18,
    color: '#fff',
    marginLeft: 5,
  },
  coinImage: {
    width: 30,
    height: 30,
  },
  animationContainer: {
    position: 'absolute',
    top: -150,
    left: 10,
    width: 300,
    height: 300,
    zIndex: 1,
  },
  animation: {
    width: '100%',
    height: '100%',
  },
  instructionsContainer: {
    top: 30,
    backgroundColor: '#204D8D',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    position: 'relative',
    zIndex: 0,
  },
  title: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  underlineImage: {
    width: '100%',
    height: 10, // Ajusta según el tamaño de la imagen del subrayado
    marginBottom: 20, // Ajuste para el espaciado del texto
  },
  instructions: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  bold: {
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#204D8D',
    fontWeight: 'bold',
  },
  person: {
    position: 'absolute',
    bottom: 20,
    right: 50,
    width: 150,
    height: 400,
  },
  logoContainer: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{ translateX: -50 }],
    backgroundColor: '#204D8D',
    borderRadius: 50,
    borderWidth: 5,
    borderColor: '#6AB1B5',
    width: width * 0.2,
    height: width * 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    top:65,
    width: '10%',
    height: '15%',
  },
});

import React, { useContext , useRef, useState, useEffect} from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Dimensions, Animated, Easing } from 'react-native';
import { ScoreContext } from './ScoreContext';
import LottieView from 'lottie-react-native';
import { Player } from '@lottiefiles/react-lottie-player';

const { width, height } = Dimensions.get('window');



export default function ScoreScreen({ navigation }) {
  const { correctAnswers, incorrectAnswers, resetScore1, resetScore2} = useContext(ScoreContext);
  const coinAnimation = useRef(new Animated.Value(0)).current;

  const handleRestartQuiz = () => {
    resetScore1
    resetScore2
    navigation.navigate('TransitionInicio', { nextScreen: 'Home' });
  };

  // Función para iniciar la animación de la moneda
  const animateCoin = () => {
    Animated.timing(coinAnimation, {
      toValue: 5,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  // Llamar a la función para iniciar la animación cuando el componente se monte o actualice
  useEffect(() => {
    animateCoin(); // Llamar a la función al cargar el componente
  }, []);

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
          <Text style={styles.coinText}>{correctAnswers * 10}</Text>
        </View>
        <View style={styles.challengeContainer}>
          <Text style={styles.challengeText}>Desafíate</Text>
          <Image 
            source={require('../../../assets/Elementos estáticos/Línea_título.png')} // Imagen de subrayado
            style={styles.underlineImage}
          />
        </View>
        <View style={styles.progressContainer}>
          <Image 
            source={require('../../../assets/Elementos estáticos/BarraProgresoNaranja.png')} // Imagen de la barra de progreso
            style={styles.progressImage}
          />
        </View>
        <View style={styles.scoreContainer}>
        <View style={styles.animationContainer}>
            {Platform.OS === 'web' ? (
              <Player
                autoplay
                loop
                src={require('../../../assets/Animaciones (.json)/D con fuego 02.json')} // Animación de la "D" en formato .json
                style={styles.animation}
              />
            ) : (
              <LottieView
                source={require('../../../assets/Animaciones (.json)/D con fuego 02.json')} // Animación de la "D" en formato .json
                autoPlay
                loop
                style={styles.animation}
              />
            )}
          </View>
          <Text style={styles.title}>¡Buen Trabajo!</Text>
          <View style={styles.row}>
            <View style={styles.boxContainer}>
              <Image
                source={require('../../../assets/Elementos estáticos/pantalla_puntos/estrella_preguntas.png')} // Imagen de estrella 1
                style={styles.starImage}
              />
              <ImageBackground 
                source={require('../../../assets/Elementos estáticos/pantalla_puntos/background_conteo_preguntas.png')} // Imagen del cuadro
                style={styles.box}
              >
                <Text style={styles.boxText}>10  Preguntas</Text>
              </ImageBackground>
            </View>
            <View style={styles.boxContainer}>
              <Image
                source={require('../../../assets/Elementos estáticos/pantalla_puntos/estrella_correctas.png')} // Imagen de estrella 2
                style={styles.starImage}
              />
              <ImageBackground 
                source={require('../../../assets/Elementos estáticos/pantalla_puntos/background_conteo_preguntas.png')} // Imagen del cuadro
                style={styles.box}
              >
                <Text style={styles.boxText}>{correctAnswers}    Correctas</Text>
              </ImageBackground>
            </View>
            <View style={styles.boxContainer}>
              <Image
                source={require('../../../assets/Elementos estáticos/pantalla_puntos/estrella_incorrectas.png')} // Imagen de estrella 3
                style={styles.starImage}
              />
              <ImageBackground
                source={require('../../../assets/Elementos estáticos/pantalla_puntos/background_conteo_preguntas.png')} // Imagen del cuadro
                style={styles.box}
              >
                <Text style={styles.boxText}>{incorrectAnswers}    Incorrectas</Text>
              </ImageBackground>
            </View>
          </View>
          <Text style={styles.boxText2}>Monedas Obtenidas</Text>
          <View style={styles.newBoxContainer}>
            <Image
              source={require('../../../assets/Elementos estáticos/pantalla_puntos/Moneda.png')} // Imagen de moneda
              style={styles.newCoinImage}
            />
            <ImageBackground 
              source={require('../../../assets/Elementos estáticos/pantalla_puntos/background_conteomonedas.png')} // Imagen del nuevo cuadro
              style={styles.newBox}
            >
              <Text style={styles.newBoxText}>{correctAnswers * 10}</Text>
            </ImageBackground>
            <Animated.Image
  source={require('../../../assets/Elementos estáticos/moneda.png')}
  style={[
    styles.coinImage,
    {
      transform: [
        {
          translateY: coinAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -200], // Animación vertical hacia arriba
          }),
        },
        {
          translateX: coinAnimation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 200], // Animación horizontal hacia la derecha
          }),
        },
      ],
    },
  ]}
/>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleRestartQuiz}>
            <Text style={styles.buttonText}>Volver al Inicio</Text>
          </TouchableOpacity>
        </View>
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
    width: width,
    height: height,
  },
  backgroundImage: {
    resizeMode: 'cover',
  },
  planet: {
    position: 'absolute',
    top: 10,
    left: 20,
    width: 100,
    height: 100,
  },
  animationContainer: {
    position: 'absolute',
    top: -60,
    width: 250,
    height: 250,
    zIndex: 1,
  },
  coinContainer: {
    position: 'absolute',
    top: 10,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
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
  challengeContainer: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  challengeText: {
    fontSize: 50,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  underlineImage: {
    marginTop: -10,
    width: "100%",
    height: 10,
    resizeMode: 'contain',
  },
  progressContainer: {
    position: 'absolute',
    top: 180,
  },
  progressImage: {
    width: "100%",
    height: 10,
    resizeMode: 'contain',
  },
  title: {
    marginTop: 70,
    fontSize: 40,
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scoreContainer: {
    backgroundColor: '#204D8D',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    shadowColor: '#8D8D8D',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginTop: 20,
  },
  scoreText: {
    fontSize: 24,
    color: '#FFFFFF',
    textAlign: 'center',
    marginVertical: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '100%',
  },
  boxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  starImage: {
    width: 50,
    height: 50,
    marginBottom: -25, // Superponer la estrella encima del cuadro
    zIndex: 1,
  },
  box: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#204D8D',
    textAlign: 'center',
  },
  boxText2: {
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: 'center',
  },
  newBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
    justifyContent: 'center',
  },
  newCoinImage: {
    width: 90,
    height: 100,
    marginRight: -20, // Superponer la moneda sobre el cuadro
    zIndex: 1,
  },
  newBox: {
    width: 150,
    height: 75,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -15, // Ajustar para la superposición de la moneda
  },
  newBoxText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#204D8D',
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    width: '60%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#204D8D',
    fontWeight: 'bold',
  },
});

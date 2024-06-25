import React, { useContext,useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Dimensions, Animated } from 'react-native';
import LottieView from 'lottie-react-native';
import { Player } from '@lottiefiles/react-lottie-player';
import { ScoreContext } from './ScoreContext'; // Importar ScoreContext

const { width, height } = Dimensions.get('window');

const questions = [
  {
    question: "a × b + c − d = ",
    options: ["a + c", "c – d", "b + c", "a x b"],
    correctAnswer: "a x b",
    hasImage: true,
  },
  // Puedes agregar más preguntas aquí
];

export default function QuizScreen10({ navigation }) {
  const { incrementCorrect, incrementIncorrect } = useContext(ScoreContext); // Usar ScoreContext
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [coins, setCoins] = useState(0);
  const [progress, setProgress] = useState(new Animated.Value(0));
  const [showStars, setShowStars] = useState(false);
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const [timer1Finished, setTimer1Finished] = useState(false);

  useEffect(() => {
    Animated.timing(progress, {
      toValue: (currentQuestionIndex + 1) / questions.length,
      duration: 500,
      useNativeDriver: false
    }).start();
  }, [currentQuestionIndex]);

  const handleAnswerPress = (answer) => {
    if (!answerSubmitted) {
      setSelectedAnswer(answer);
      setAnswerSubmitted(true);

      if (answer === questions[currentQuestionIndex].correctAnswer) {
        incrementCorrect(); // Incrementar respuestas correctas
        setCoins(coins);
        setShowStars(true);
        setTimeout(() => {
          setShowStars(false);
          setTimeout(() => {
            //setTimer1Finished(true);
            //setTimeout(10000); // 10 segundos para el segundo timer
          }, 10000); // 10 segundos para el primer timer
        }, 1000);
      } else {
        incrementIncorrect(); // Incrementar respuestas incorrectas
        setTimeout(() => {
          //setTimer1Finished(true);
          //setTimeout(10000); // 10 segundos para el segundo timer
        }, 1000);
      }
    }
  };

  const goToNextQuestion = () => {
    setSelectedAnswer(null);
    setAnswerSubmitted(false); // Habilitar nuevamente los botones
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate('Score', { coins });
    }
  };

  const renderQuestionText = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.hasImage) {
      return (
        <Text style={styles.questionText}>{questions[currentQuestionIndex].question}
        <Image
          source={require('../../../assets/Elementos estáticos/QuestionMark.png')} // Imagen del signo de interrogación
          style={styles.questionImage}
        />
        </Text>
      );
    } else {
      return (
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
      );
    }
  };

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
        {!timer1Finished && (
          <Player
            src={require('../../../assets/Animaciones (.json)/timer_amarillo.json')} // Animación del primer timer
            autoplay
            loop={false}
            style={styles.timerAnimation}
            speed={1}
            onAnimationFinish={() => navigation.navigate('Transition2', { nextScreen: 'Score'})}
          />
        )}
        <View style={styles.coinContainer}>
          <Image 
            source={require('../../../assets/Elementos estáticos/moneda.png')} // Imagen de moneda
            style={styles.coinImage}
          />
          <Text style={styles.coinText}>{coins}</Text>
        </View>
        <View style={styles.challengeContainer}>
          <Text style={styles.challengeText}>Desafíate</Text>
          <Image 
            source={require('../../../assets/Elementos estáticos/Línea_título.png')} // Imagen de subrayado
            style={styles.underlineImage}
          />
        </View>
        <View style={styles.progressContainer}>
        <Text style={styles.optionText}>Pregunta 1/20 <Image 
          source={require('../../../assets/Elementos estáticos/BarraProgresoNaranja.png')} // Imagen de la barra de progreso
          style={styles.progressImage}
        /></Text>
        
        </View>
        <View style={styles.questionContainer}>
          {renderQuestionText()}
        </View>
        <View style={styles.optionsContainer}>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.optionButton,
                selectedAnswer === option && option !== questions[currentQuestionIndex].correctAnswer ? styles.incorrectOption : null,
                selectedAnswer === option && option === questions[currentQuestionIndex].correctAnswer ? styles.selectedCorrectOption : null,
                answerSubmitted ? { opacity: 0.5 } : null, // Deshabilitar botones después de responder
              ]}
              onPress={() => handleAnswerPress(option)}
              disabled={answerSubmitted}
            >
              <Text style={styles.optionText}>{option} {selectedAnswer && option === questions[currentQuestionIndex].correctAnswer && selectedAnswer !== option && (
                <Image
                source={require('../../../assets/Elementos estáticos/check.png')} // Imagen de checkmark para la respuesta correcta
                style={styles.checkmark}
              />
              )}</Text>
              
            </TouchableOpacity>
          ))}
        </View>
          <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Transition11', { nextScreen: 'Score'})}
          >
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
        {showStars && (
          <Player
            src={require('../../../assets/Animaciones (.json)/Estrellitas.json')} // Animación de estrellas
            autoplay
            loop={false}
            style={styles.starsAnimation}
          />
        )}
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
    top: 10, // Subimos la posición del planeta
    left: 20,
    width: 100,
    height: 100,
  },
  coinContainer: {
    position: 'absolute',
    top: 10, // Subimos la posición del contenedor de monedas
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  coinText: {
    fontSize: 18,
    color: '#fff',
    marginRight: 5,
  },
  coinImage: {
    width: 30,
    height: 30,
  },
  challengeContainer: {
    position: 'absolute',
    top: 150, // Subimos la posición del contenedor del título
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
    top: 230, // Subimos la posición del contenedor del progreso

  },
  progressBar: {
    height: '100%',
    backgroundColor: '#6AB1B5',
    borderRadius: 10,
  },
  timer: {
    position: 'absolute',
    top: 210, // Subimos la posición del temporizador
    left: 20,
    fontSize: 24,
    color: '#133362',
  },
  questionContainer: {
    top: 70, // Subimos la posición del contenedor de la pregunta
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    shadowColor: '#8D8D8D',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    marginBottom: 20,
    marginTop: 60, // Ajustar la distancia de los elementos
  },
  questionText: {
    fontSize: 24,
    color: '#133362',
    textAlign: 'center',
  },
  questionImage: {
    width: 20,
    height: 29,
  },
  optionsContainer: {
    top: 70, // Subimos la posición del contenedor de las opciones
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap', // Aseguramos que los botones se envuelvan
    justifyContent: 'space-between', // Espaciado uniforme entre botones
  },
  optionButton: {
    backgroundColor: '#6AB1B5',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    shadowColor: '#448B8C',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    width: '48%', // Cada botón ocupa el 48% del ancho del contenedor
  },
  optionText: {
    fontSize: 18,
    color: '#fff',
  },
  selectedCorrectOption: {
    backgroundColor: '#4CAF50', // Verde para la opción correcta seleccionada
    shadowColor: '#388E3C',
  },
  correctOption: {
    backgroundColor: '#6FBA3B',
    shadowColor: '#4F9C2F',
  },
  incorrectOption: {
    backgroundColor: '#E6333C',
    shadowColor: '#B52C41',
  },
  checkmark: {
    fontSize: 24,
    color: '#6FBA3B',
    marginLeft: 10,
    width: 30,
    height: 30,
  },
  starsAnimation: {
    position: 'absolute',
    top: '25%',
    left: '25%',
    width: 600, // Aumentar tamaño
    height: 600, // Aumentar tamaño
    transform: [{ translateX: -200 }, { translateY: -200 }],
  },
  button: {
    marginTop: 80,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
  },
  buttonText: {
    color: '#204D8D',
    fontWeight: 'bold',
  }
});

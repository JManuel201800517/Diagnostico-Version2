import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Image, Dimensions, Animated } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function TransitionScreen({ navigation, route }) {
  const { nextScreen } = route.params;
  const scale1 = useRef(new Animated.Value(0)).current;
  const scale2 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(scale1, {
        toValue: 8,
        duration: 3000,
        useNativeDriver: true,
      }),
      Animated.timing(scale2, {
        toValue: 6,
        duration: 2500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setTimeout(() => {
        navigation.navigate(nextScreen);
      }, 1000);
    });
  }, [navigation, nextScreen, scale1, scale2]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.circle,
          styles.circle1,
          { transform: [{ scale: scale1 }] },
        ]}
      />
      <Animated.View
        style={[
          styles.circle,
          styles.circle2,
          { transform: [{ scale: scale2 }] },
        ]}
      />
      <Image
        source={require('../../../assets/Elementos estáticos/logo_blanco_transicion.png')} // Logo de Explorax
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  circle: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  circle1: {
    backgroundColor: '#204D8D',
  },
  circle2: {
    backgroundColor: '#123051',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
});

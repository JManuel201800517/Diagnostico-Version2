import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ScoreProvider } from './screens/ScoreContext';
import HomeScreen from './screens/HomeScreen';
import QuizScreen from './screens/QuizScreen';
import QuizScreen2 from './screens/QuizScreen2';
import QuizScreen3 from './screens/QuizScreen3';
import QuizScreen4 from './screens/QuizScreen4';
import QuizScreen5 from './screens/QuizScreen5';
import QuizScreen6 from './screens/QuizScreen6';
import QuizScreen7 from './screens/QuizScreen7';
import QuizScreen8 from './screens/QuizScreen8';
import QuizScreen9 from './screens/QuizScreen9';
import QuizScreen10 from './screens/QuizScreen10';
import ScoreScreen from './screens/ScoreScreen';
import TransitionScreen from './screens/Transicion';
import TransitionScreen2 from './screens/Transicion';
import TransitionScreen3 from './screens/Transicion';
import TransitionScreen4 from './screens/Transicion';
import TransitionScreen5 from './screens/Transicion';
import TransitionScreen6 from './screens/Transicion';
import TransitionScreen7 from './screens/Transicion';
import TransitionScreen8 from './screens/Transicion';
import TransitionScreen9 from './screens/Transicion';
import TransitionScreen10 from './screens/Transicion';
import TransitionScreenInicio from './screens/Transicion';

const Stack = createStackNavigator();

export default function App() {
  return (
    <ScoreProvider>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Quiz" component={QuizScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Quiz2" component={QuizScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Quiz3" component={QuizScreen3} options={{ headerShown: false }} />
        <Stack.Screen name="Quiz4" component={QuizScreen4} options={{ headerShown: false }} />
        <Stack.Screen name="Quiz5" component={QuizScreen5} options={{ headerShown: false }} />
        <Stack.Screen name="Quiz6" component={QuizScreen6} options={{ headerShown: false }} />
        <Stack.Screen name="Quiz7" component={QuizScreen7} options={{ headerShown: false }} />
        <Stack.Screen name="Quiz8" component={QuizScreen8} options={{ headerShown: false }} />
        <Stack.Screen name="Quiz9" component={QuizScreen9} options={{ headerShown: false }} />
        <Stack.Screen name="Quiz10" component={QuizScreen10} options={{ headerShown: false }} />
        <Stack.Screen name="Score" component={ScoreScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Transition" component={TransitionScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Transition2" component={TransitionScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Transition3" component={TransitionScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Transition4" component={TransitionScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Transition5" component={TransitionScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Transition6" component={TransitionScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Transition7" component={TransitionScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Transition8" component={TransitionScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Transition9" component={TransitionScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Transition10" component={TransitionScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Transition11" component={TransitionScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Transition12" component={TransitionScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Transition13" component={TransitionScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Transition14" component={TransitionScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Transition15" component={TransitionScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Transition16" component={TransitionScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Transition17" component={TransitionScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Transition18" component={TransitionScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Transition19" component={TransitionScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="Transition20" component={TransitionScreen2} options={{ headerShown: false }} />
        <Stack.Screen name="TransitionInicio" component={TransitionScreenInicio} options={{ headerShown: false }} />
      </Stack.Navigator>
    </ScoreProvider>
  );
}

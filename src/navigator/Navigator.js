import 'react-native-gesture-handler';

import React, {useState} from 'react';

/* React Navigation */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from '../utils/RootNavigation';

/* Screens */
import LandingScreen from '../screens/Landing';
import LoginScreen from '../screens/Login';
import MenuScreen from '../screens/Menu';
import RegisterStudentScreen from '../screens/RegisterStudent';
import StudentsListScreen from '../screens/StudentsList';
import GamesMenuScreen from '../screens/GamesMenu';
import GameOneScreen from '../screens/GameOne';
import SplashScreen from '../screens/Splash';

const Stack = createStackNavigator();

const App = props => {
  const [showSplash, setShowSplash] = useState(true);
  setTimeout(() => {
    setShowSplash(false);
  }, 5000);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer ref={navigationRef}>
      {/* NavigationRef es para tener acceso a las funciones del Navigation en
      componentes que no estén en el Router. */}
      <Stack.Navigator>
        {!props.isLoggedIn ? (
          // https://reactnavigation.org/docs/auth-flow/
          <>
            <Stack.Screen
              name="Landing"
              options={{headerShown: false}}
              component={LandingScreen}
            />
            <Stack.Screen
              name="Login"
              options={{headerShown: false}}
              component={LoginScreen}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Menu"
              options={{headerShown: false}}
              component={MenuScreen}
            />
            <Stack.Screen
              name="RegisterStudent"
              options={{headerShown: false}}
              component={RegisterStudentScreen}
            />
            <Stack.Screen
              name="GamesMenu"
              options={{headerShown: false}}
              component={GamesMenuScreen}
            />
            <Stack.Screen
              name="StudentsList"
              options={{headerShown: false}}
              component={StudentsListScreen}
            />
            <Stack.Screen
              name="GameOne"
              options={{headerShown: false}}
              component={GameOneScreen}
            />
            <Stack.Screen
              name="Login2"
              options={{headerShown: false}}
              component={LoginScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

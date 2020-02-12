/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyCartScreen from './src/screens/MyCart';
import InitialScreen from './src/screens/Initial';



class App extends React.Component {

  render() {
    const Stack = createStackNavigator();
    return (

      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            initialParams={{ type: null }}
            options={{

              headerTitleAlign: 'center',
              title: "Inicio",
            }}
            name="InitialScreen"
            component={InitialScreen} />
          <Stack.Screen
            options={{

              headerTitleAlign: 'center',
              title: "Meu carrinho",
            }}
            name="MyCartScreen"
            component={MyCartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}



export default App;

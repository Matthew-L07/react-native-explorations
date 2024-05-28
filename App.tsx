import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet} from 'react-native';
import {ScreenA, ScreenA1, ScreenA2, ScreenA3} from './src/ScreenA';
import {ScreenB, ScreenB1, ScreenB2, ScreenB3} from './src/ScreenB';
import {ScreenC, ScreenC1, ScreenC2, ScreenC3} from './src/ScreenC';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Screen A" component={ScreenA} />
        <Stack.Screen name="Screen A1" component={ScreenA1} />
        <Stack.Screen name="Screen A2" component={ScreenA2} />
        <Stack.Screen name="Screen A3" component={ScreenA3} />
        <Stack.Screen name="Screen B" component={ScreenB} />
        <Stack.Screen name="Screen B1" component={ScreenB1} />
        <Stack.Screen name="Screen B2" component={ScreenB2} />
        <Stack.Screen name="Screen B3" component={ScreenB3} />
        <Stack.Screen name="Screen C" component={ScreenC} />
        <Stack.Screen name="Screen C1" component={ScreenC1} />
        <Stack.Screen name="Screen C2" component={ScreenC2} />
        <Stack.Screen name="Screen C3" component={ScreenC3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    margin: 10,
  },
});

export default App;

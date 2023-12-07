import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import store from './src/app/store';
import HomeScreen from './src/components/HomeScreen';
import ListScreen from './src/components/ListScreen';
import DetailScreen from './src/components/DetailScreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
          <Stack.Screen name="List" component={ListScreen} options={{headerShown:false}}/>
          <Stack.Screen name="Detail" component={DetailScreen} options={{headerShown:false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;

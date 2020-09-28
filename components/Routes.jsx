import React, {Component, Fragment} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './Menu';
import HomeView from './HomeView';
import { Text } from 'react-native';

const Stack = createStackNavigator();

export default class Routes extends Component{

    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="TacoManiaco" component={HomeView} />
                    <Stack.Screen name="Menu" component={Menu} />
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

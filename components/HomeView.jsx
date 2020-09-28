import React, {Component, Fragment} from 'react';
import { Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Container from './Container';

export default class HomeView extends Component{

    styles = StyleSheet.create({
        title: {
            fontWeight: 'bold',
            fontSize: 100,
            color: 'purple'
        },
        buttMenu:{
            backgroundColor: 'black',
            marginTop: 20,
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 10
        },
        text: {
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold'
        }
    });

    menuHandle = ()=> this.props.navigation.push('Menu');

    render() {
        return (
            <Container>
                <Text style={this.styles.title}>Tacos Js</Text>
                <TouchableOpacity style={this.styles.buttMenu} onPress={this.menuHandle}>
                    <Text style={this.styles.text}>Ver menú</Text>
                </TouchableOpacity>
            </Container>
        );
    }
}
import React from "react";
import {Image, StyleSheet, View, Text, TouchableOpacity, } from "react-native";
import { createStore } from 'redux';

export default class listItem extends React.Component {
    render() {

        let counter = (state = 0, action) => {
            switch (action.type) {
            case 'INCREMENT':
                return state + 1
            case 'DECREMENT':
                return state - 1
            default:
                return state
            }
        };
    
        let store = createStore(counter);
    
        store.subscribe(() => console.log(store.getState()))
        store.dispatch({ type: 'INCREMENT' })
        // 1
        store.dispatch({ type: 'INCREMENT' })
        // 2
        store.dispatch({ type: 'DECREMENT' })
        
        return(
            <View style={styles.container}>
                <Text>{this.props.sign}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 75,
        width: 75,
        borderColor: 'black',
        borderWidth: 1,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2%'
    }
});
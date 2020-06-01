import React from "react";
import {Image, StyleSheet, View, Text, TouchableOpacity, } from "react-native";

export default class listItem extends React.Component {
    render() {
        return(
            <View style={styles.container}>
                <Text>1</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 125,
        width: 125,
        borderColor: 'black',
        borderWidth: 1,
        borderRadius: 125/2,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '2%'
    }
});
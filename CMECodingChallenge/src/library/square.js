import React from "react";
import {Image, StyleSheet, View, Text, TouchableOpacity, } from "react-native";

export default class listItem extends React.Component {
    render() {
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
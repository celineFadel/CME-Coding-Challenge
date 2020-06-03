import React from "react";
import {Image, StyleSheet, View, Text, TouchableOpacity, } from "react-native";

export default class listItem extends React.Component {
  render() {

    
    return (
      <TouchableOpacity style={styles.mainContainer} onPress={()=>this.props.onPress(this.props.name, this.props.content, this.props.imagePath)}>
        <View style={styles.imageContainer}>
          <Image style={styles.picture} source={this.props.imagePath} defaultSource={require('../assets/logo.png')} />
        </View>
        <View style = {styles.textContainer}>
          <Text style={styles.title}>{this.props.name}</Text>
          <Text style={styles.paragraph}>{this.props.content}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    mainContainer: {
      height: '20%',
      width: '85%',
      borderWidth: 1,
      borderColor: 'black',
      margin: '2%',
      flex: 1,
      flexDirection: 'row',
      maxHeight: 200,
      minHeight: 150
    },
    imageContainer: {
      height: '100%',
      margin: '2%',
      width: '35%',
      maxHeight: '100%'
    },
    picture: {
      height: '90%',
      width: '90%'
    },
    textContainer: {
      height: '100%',
      width: '60%',
      margin: '2%',
      maxHeight: '100%',
      flex: 1,
      flexDirection: 'column'
    },
    title: {
      height: '10%',
      width: '100%'
    },
    paragraph: {
      height: '70%',
      width: '100%',
      padding: '1%',
      marginTop: '10%'
    }
});

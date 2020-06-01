import React from "react";
import {Image, StyleSheet, View, Text, TouchableOpacity, } from "react-native";

export default class listItem extends React.Component {
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.imageContainer}>
          <Image style={styles.picture} source={require('../assets/logo.png')} />
        </View>
        <View style = {styles.textContainer}>
          <Text style={styles.title}>name</Text>
          <Text style={styles.paragraph}>
              Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called 
              placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. 
              Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to 
              deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually 
              has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic 
              appearence of European languages, as are digraphs not to be found in the original.
          </Text>
        </View>
      </View>
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

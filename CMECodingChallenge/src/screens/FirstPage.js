import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import ListItem from '../library/listItem';

export default class FirstPage extends React.Component {
  state = {
    search: '',
    items: [],
  };

  componentWillMount = () => {
    let name = "Name";
    let content = "Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It's also called placeholder (or filler) text. It's a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout. Lorem ipsum is mostly a part of a Latin text by the classical author and philosopher Cicero. Its words and letters have been changed by addition or removal, so to deliberately render its content nonsensical; it's not genuine, correct, or comprehensible Latin anymore. While lorem ipsum's still resembles classical Latin, it actually has no meaning whatsoever. As Cicero's text doesn't contain the letters K, W, or Z, alien to latin, these, and others are often inserted randomly to mimic the typographic appearence of European languages, as are digraphs not to be found in the original.In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that's filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet. The are likely to focus on the text, disregarding the layout and its elements. Besides, random text risks to be unintendedly humorous or offensive, an unacceptable risk in corporate environments. Lorem ipsum and its many variants have been employed since the early 1960ies, and quite likely since the sixteenth century.";
    let imagePath = require('../assets/logo.png');

    let arr = [];
    for(let i=0; i<20; i++) {
      arr.push(<ListItem name={name} content={content} imagePath={imagePath} />)
    }

    this.setState({items: arr});
  }

  // updateSearch = search => { 
  //   this.setState({ search });
  // };

  render() {
    updateSearch = search => {
      this.setState({ search });
    };

    search = text => {
      console.log(text);
    };

    clear = () => {
      this.search.clear();
    };

    SearchFilterFunction = (text) => {
      //passing the inserted text in textinput
      // let arr = this.state.orders;
      // let searchedTables = [];
      // let searchedTableNumbers = [];
      // for(let i=0; i< arr.length; i++) {
      //   const newData = arr[i].orderItems.filter((item) => {
      //     //applying filter for the inserted text in search bar
      //     const itemData = item.food.nameE ? item.food.nameE.toUpperCase() : ''.toUpperCase();
      //     const textData = text.toUpperCase();
      //     if(itemData.indexOf(textData) > -1 && searchedTableNumbers.indexOf(arr[i].tableNumber) == -1) {
      //       searchedTableNumbers.push(arr[i].tableNumber);
      //       searchedTables.push(<OrderedTables number={arr[i].tableNumber} key={i} onPress={() => {this.showOrder(arr[i].orderItems, arr[i].tableNumber, arr[i]._id, arr[i].discount)}} />);
      //     }
      //     return itemData.indexOf(textData) > -1;
      //   });
      // }
      
  
      // this.setState({
      //   //setting the filtered newData on datasource
      //   //After setting the data it will automatically re-render the view
      //   tables: searchedTables,
      //   search: text,
      // });
    }

    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={text => this.SearchFilterFunction(text)}
          value={this.state.text}
          underlineColorAndroid="transparent"
          placeholder="Search Here"
        />
        <ScrollView style={styles.scroller} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
          {this.state.items}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '95%',
    width: '100%', 
    marginBottom: '5%'
  },
  logo: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  form: {
    flex: 1,
    width: "80%",
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: 'white',
    height: '60%',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginTop: 0
  },
  textInputStyle: {
    height: 50,
    backgroundColor: 'white',
    marginTop: 10,
    marginLeft: '6%',
    marginRight: '5%',
    width: '88%',
    paddingLeft: '5%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25
  },
  scroller: {
    height: '100%',
    width: '100%',
  }
});
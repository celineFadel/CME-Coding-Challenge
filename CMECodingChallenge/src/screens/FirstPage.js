import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import ListItem from '../library/listItem';

export default class FirstPage extends React.Component {
  state = {
    search: '',
  };

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
      <ScrollView style={styles.container} contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%', 
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
    width: '80%',
    paddingLeft: '5%',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 25
  },
  scroller: {
    height: '100%',
    width: '100%'
  }
});
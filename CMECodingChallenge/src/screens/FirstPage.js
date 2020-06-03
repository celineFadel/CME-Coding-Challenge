import React from 'react';
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';
import ListItem from '../library/listItem';

import { Actions } from 'react-native-router-flux';

export default class FirstPage extends React.Component {
  constructor(props){
    super(props);
  }

  state = {
    search: '',
    items: [],
    unitTestObj: {items:[
      {
        snippet: {
          title: 'this is the title',
          description: 'this is the description',
          thumbnails: {
            default: {
              url:
                'https://www.likecool.com/Gear/Pic/Thumbnails/Thumbnails-1.jpg',
              width: 50,
              height: 50,
            },
          },
        },
      },
    ]},
    unitTest: false,
    limit: 6,
    key: 'AIzaSyAxitFZFnBYVi8YSt2KKxq7Vcd28YVZlO4',
    isLoading: true
  };

  componentWillMount = () => {
    this.searchFilterFunction();
  };

  hideTab = () => {
    
  };

  checkDetails = (title, description, url) => {
    this.hideTab();
    Actions.Details({title: title, description: description, imagePath: url});
  };

  getListElements = (object) => {
    let arr = object.items;

    let list = arr.map((e) => {
      let {title, description} = e.snippet;
      let {url, width, height} = e.snippet.thumbnails.default;

      if (!url) url = require('../assets/logo.png');
      else url = {uri: url};

      return <ListItem key={url} name={title} content={description} imagePath={url} onPress={this.checkDetails} />;
    });

    return list;
  };

  updateSearch = (search) => {
    this.setState({search});
  };

  activateUnitTest = () => {
    this.setState({unitTest: true});
    this.searchFilterFunction();
  }

  handleError = (err) => {
    let msg = "We will now activate the unit test!";
    Alert.alert(
      "An error was detected!",
      msg,
      [
        { text: "OK", onPress: () => this.activateUnitTest() }
      ],
      { cancelable: false }
    );
  };

  searchFilterFunction = (text) => {
    let search = '';
    if (text) search = `&q=${encodeURI(text)}`;
    if (this.state.unitTest) {
      let items = this.getListElements(this.state.unitTestObj);
      this.setState({items});
    }
    else {
      fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${this.state.limit}&key=${this.state.key}${search}`,
    )
      .then((i) => i.json())
      .then((obj) => {
        let items = this.getListElements(obj);
        this.setState({items});
      })
      .catch((err) => {
        //handle the error
        this.handleError(err);
      })
      .finally(() => this.setState({isLoading: false}));
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.isLoading ? <ActivityIndicator style={styles.loader} /> : (
         <ScrollView
         style={styles.scroller}
         contentContainerStyle={{
           justifyContent: 'center',
           alignItems: 'center',
         }}>

       <TextInput
         style={styles.textInputStyle}
         onChangeText={(text) => this.updateSearch(text)}
         value={this.state.text}
         underlineColorAndroid="transparent"
         placeholder="Search Here"
         returnKeyType="search"
       />
       <Button
         title="Submit"
         onPress={() => this.searchFilterFunction(this.state.search)}
       />
         {this.state.items}
       </ScrollView>
      )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '95%',
    width: '100%',
    marginBottom: '5%',
  },
  logo: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  form: {
    flex: 1,
    width: '80%',
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: 'white',
    height: '60%',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    marginTop: 0,
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
    borderRadius: 25,
  },
  scroller: {
    height: '100%',
    width: '100%',
    marginTop: '2%'
  },
  loader: {
    marginTop: '50%'
  }
});

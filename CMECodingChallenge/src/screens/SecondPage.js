import React from 'react';
import { AsyncStorage, Image, ScrollView, StyleSheet, View } from 'react-native';

export default class FirstPage extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleEmailChange = (email) => {
    this.setState({ email: email });
  };

  handlePasswordChange = (password) => {
    this.setState({ password: password });
  };

  handleLoginPress = () => {
    return fetch('/waiter/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: {
        email: this.state.email,
        password: this.state.password,
      },
    }).then(async (responseJson) => {
      const value = await AsyncStorage.getItem('statusCode');
        if(responseJson.error == false) {
          let token = responseJson.token + "";
          await AsyncStorage.setItem('token', token);
          this.props.navigation.navigate('order');
        }
      })
      .catch((error) =>{
        console.error(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
        <View style={styles.form}>
          <View style={styles.innerContainer}>
              {/* <FormTextInput
                value={this.state.email}
                onChangeText={this.handleEmailChange}
                placeholder='Email'
                secureTextEntry={false}
              />
              <FormTextInput
                value={this.state.password}
                onChangeText={this.handlePasswordChange}
                placeholder='Password'
                secureTextEntry={true}
              /> */}
              {/* <Button label='LOGIN' onPress={this.handleLoginPress} /> */}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 153, 51, 0.3)',
    alignItems: "center",
    justifyContent: "space-between",
    height: '100%'
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
  }
});
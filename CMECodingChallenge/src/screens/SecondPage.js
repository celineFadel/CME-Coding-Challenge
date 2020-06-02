import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createAddValue} from '../actions';
import {connect} from 'react-redux';

class FirstPage extends React.Component {
  render() {
    onPressMinus = () => {
      this.props.createAddValue(-1);
    };

    onPressPlus = () => {
      this.props.createAddValue(1);
    };

    return (
      <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
          {/* The decrement button */}
          <TouchableOpacity style={styles.square} onPress={onPressMinus}>
            <Text>-</Text>
          </TouchableOpacity>

          {/* The current number */}
          <View style={styles.circle}>
            <Text>{this.props.counter}</Text>
          </View>

          {/* The increment button */}
          <TouchableOpacity style={styles.square} onPress={onPressPlus}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  innerContainer: {
    height: '100%',
    width: '100%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    marginTop: '40%',
    height: 150,
    width: '100%',
  },
  square: {
    height: 75,
    width: 75,
    borderColor: 'black',
    borderWidth: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2%',
  },
  circle: {
    height: 125,
    width: 125,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 125 / 2,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '2%',
  },
});

const mapStateToProps = (state) => {
  return {counter: state.counter};
};

export default connect(mapStateToProps, {
  createAddValue,
})(FirstPage);

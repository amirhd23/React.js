/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {increment, decrement, zero} from './Actions';
import TallyStore from './TallyStore';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class Countly extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      tally: TallyStore.getTally()
    }
    this.updateState = this.updateState.bind(this);
  }

  componentDidMount() {
    TallyStore.addChangeListener(this.updateState);
  }

  componentWillUnmount() {
    TallyStore.removeChangeListener(this.updateState);
  }

  updateState() {
    this.setState({
      tally: TallyStore.getTally()
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.appName}>Countly</Text>
        <Text style={styles.tally}>Tally: {this.state.tally.count}</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={increment}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={decrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button}
          onPress={zero}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  appName: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  tally: {
    textAlign: 'center',
    color: '#333',
    marginBottom: 20,
    fontSize: 25
  },
  button: {
    backgroundColor: 'blue',
    width: 100,
    marginBottom: 20,
    padding: 20
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  }
});

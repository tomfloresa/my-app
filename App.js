import React, { Component } from 'react';
import { 
  SafeAreaView, 
  View, 
  StyleSheet, 
  TextInput,
  Button } from 'react-native';

export default class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  render() {
    return (
      <View style={styles.safeArea}>
        <View>
          <TextInput style={ searchBar.searchBar } 
                     keyboardAppearance={ 'dark' }
                     returnKeyType={ 'done' } />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#4667F1',
    padding: 20,
    paddingTop: 40,
  }
});

const searchBar =  StyleSheet.create({
  searchBar: {
    borderRadius: 50,
    backgroundColor: '#ffff',
    height: 42,
    paddingLeft: 16,
    paddingRight: 16,
    fontSize: 22,
    shadowColor: 'rgb(25, 25, 25)',
    shadowOffset: { width: 1,height: 1 },
    shadowOpacity: .1,
    shadowRadius: 2
  }
});
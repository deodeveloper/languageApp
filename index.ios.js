// @flow
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
function foo(x: string, y: number): number {
  return x.length * y;
}
import Realm from 'realm';

export default class languageApp extends Component {
 render() {
   let realm = new Realm({
     schema: [{name: 'Dog', properties: {name: 'string'}}]
   });

   realm.write(() => {
     realm.create('Dog', {name: 'Rex'});
   });

   return (
     <View style={styles.container}>
       <Text style={styles.welcome}>
           Count of Dogs in Realm: {realm.objects('Dog').length}
       </Text>
       <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
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
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('languageApp', () => languageApp);

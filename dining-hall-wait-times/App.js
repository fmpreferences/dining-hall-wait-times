import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import DiningList from './DiningList'
const courtTimes = [{name:'Earhart'},
{name:'Ford'},
{name:'Hillenbrand'},
{name:'Wiley'},
{name:'Windsor'}]

export default function App() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
          <Text>Start Timer</Text>
      </TouchableOpacity>
      <DiningList></DiningList>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

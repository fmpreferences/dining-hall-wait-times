import React from 'react';
import { Text, TouchableOpacity,View,FlatList } from 'react-native';


const courtTimes = [{name:'Earhart'},
{name:'Ford'},
{name:'Hillenbrand'},
{name:'Wiley'},
{name:'Windsor'}]

export default function DiningList() {
    return (
      <FlatList data={courtTimes}
      renderItem = {({ item, index, separators }) =>
      <View>
        <Text>
          {item.name}
        </Text>
      </View>} 
      ></FlatList>
    );
  }
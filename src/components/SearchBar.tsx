import {Pressable, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SearchBar() {
  return (
    <View className=" rounded-lg  m-4 flex flex-row items-center bg-slate-300 pr-2">
      <TextInput
        className="p-4 w-11/12 text-black"
        keyboardType="default"
        placeholder="Search for Restaurants"
      />
      <Pressable>
        <Icon name="search" size={25} color="#777" className="" />
      </Pressable>
    </View>
  );
}

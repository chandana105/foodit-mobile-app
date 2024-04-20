import {Pressable, TextInput, View} from 'react-native';
import React, {PropsWithChildren, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

type SearchBarProps = PropsWithChildren<{
  resList: RestaurantItem[];
  filteredResList: RestaurantItem[];
  setFilteredResList: (filteredResList: RestaurantItem[]) => void;
}>;

export default function SearchBar({
  resList,
  // filteredResList,
  setFilteredResList,
}: SearchBarProps) {
  const [userInput, setUserInput] = useState('');

  const handleFilter = (text: string) => {
    if (text) {
      const filteredRestaurants = resList.filter(res =>
        res.info.name.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredResList(filteredRestaurants);
    } else {
      setFilteredResList(resList);
    }
  };

  // console.log('filteredResList before filtering:', filteredResList);
  // console.log('userInput:', userInput);

  return (
    <View className=" rounded-lg  m-4 flex flex-row items-center bg-slate-300 pr-2">
      <TextInput
        className="p-4 w-11/12 text-black"
        keyboardType="default"
        placeholder="Search for Restaurants"
        onChangeText={text => {
          setUserInput(text);
          handleFilter(text);
        }}
        value={userInput}
        clearButtonMode="always"
      />
      <Pressable>
        <Icon name="search" size={25} color="#777" className="" />
      </Pressable>
    </View>
  );
}

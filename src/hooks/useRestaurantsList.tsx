import {useEffect, useState} from 'react';
import {RESTAURANTS_LIST_URL} from '../utils/constants';
import {Platform} from 'react-native';

const useRestaurantsList = () => {
  const [resList, setResList] = useState<RestaurantItem[]>([]);
  const [filteredResList, setFilteredResList] = useState<RestaurantItem[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(RESTAURANTS_LIST_URL);

      const json = await response.json();

      let cardsIndex = 0;
      if (Platform.OS === 'android') {
        cardsIndex = 4;
      } else if (Platform.OS === 'ios') {
        cardsIndex = 2;
      }

      const restaurants =
        json?.data?.cards[cardsIndex]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (restaurants) {
        setResList(restaurants);
        setFilteredResList(restaurants);
      }
    } catch (error) {
      console.log({error});
    }
  };

  return {resList, filteredResList, setFilteredResList};
};

export default useRestaurantsList;

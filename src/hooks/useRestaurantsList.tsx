import {useEffect, useState} from 'react';
import {RESTAURANTS_LIST_URL} from '../utils/constants';
import {Platform} from 'react-native';

const useRestaurantsList = () => {
  const [resList, setResList] = useState<RestaurantItem[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
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
    }
  };

  return {resList};
};

export default useRestaurantsList;

/**it s just that they have used diff ui for android and ios , thats why cards[2] and cards[4] differs jsut here to render based on the platform  */

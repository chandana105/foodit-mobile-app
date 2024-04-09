import {useEffect, useState} from 'react';
import {RESTAURANTS_LIST_URL} from '../utils/constants';

const useRestaurantsList = () => {
  const [resList, setResList] = useState<RestaurantItem[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(RESTAURANTS_LIST_URL);

    const json = await response.json();

    // console.log(json?.data?.cards[2]?.card);

    setResList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );

    // console.log(
    //   json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
    //     ?.restaurants,
    //   'here',
    // );
  };

  return {resList};
};

export default useRestaurantsList;

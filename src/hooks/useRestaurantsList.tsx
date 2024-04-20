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
  };

  return {resList, filteredResList, setFilteredResList};
};

export default useRestaurantsList;

/**it s just that they have used diff ui for android and ios , thats why cards[2] and cards[4] differs jsut here to render based on the platform  */

/** here, i wnat filtered list to be same as that of ereslist , as we need to do filters from them ain list
 * so if we started doing maniuputaing main list then next time we ll do filters or button pressed again it ll d o filters from reslist which ll be haivng resutls of currelty fiktered ites
 *
 * eg:- sreach :- piz = it ll give pizza related items -> rslist will be haivg [pizza related items]
 * so next time agian if a person does removing pizza searches burgers, at that pont of ttime from pizzas it ll not gett anythign related to burgers
 * but infact from main list :- there are biurgers already there so thats why we lldo all filterations from  fitlered list
 */

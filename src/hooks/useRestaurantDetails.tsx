import {useEffect, useState} from 'react';
import {Platform} from 'react-native';

const useRestaurantDetails = (resInfo: any, navigation: any) => {
  const cardsIndex = Platform.OS === 'android' ? 4 : 5;

  const [openCategories, setOpenCategories] = useState<any>([]);
  const [categories, setCategories] = useState<any>([]);

  useEffect(() => {
    if (resInfo) {
      const {cloudinaryImageId} = resInfo?.cards[2]?.card?.card?.info;
      navigation.setParams({cloudinaryImageId});

      const allCategories = resInfo?.cards[
        cardsIndex
      ]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (category: any) =>
          category?.card?.card?.['@type'] ===
          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
      );

      setCategories(allCategories);
      setOpenCategories(new Array(allCategories.length).fill(true));
    }
  }, [resInfo, navigation, cardsIndex]);

  const handleToggle = (index: any) => {
    setOpenCategories((prev: any) =>
      prev.map((isOpen: any, i: any) => (i === index ? !isOpen : isOpen)),
    );
  };

  return {openCategories, categories, handleToggle};
};

export default useRestaurantDetails;

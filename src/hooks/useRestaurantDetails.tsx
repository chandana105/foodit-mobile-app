import {useEffect, useRef, useState} from 'react';
import {Platform} from 'react-native';

const useRestaurantDetails = (resInfo: any, navigation: any) => {
  let cardsIndex = 0;
  if (Platform.OS === 'android') {
    cardsIndex = 4;
  } else if (Platform.OS === 'ios') {
    cardsIndex = 5;
  }

  const categoryListRef = useRef<any[]>([]);

  const [activeIndex, setActiveIndex] = useState<number[]>([]);

  useEffect(() => {
    if (resInfo !== null) {
      const {cloudinaryImageId} = resInfo?.cards[2]?.card?.card?.info;

      navigation.setParams({
        cloudinaryImageId: cloudinaryImageId,
      });

      if (
        categoryListRef.current.length !==
        resInfo?.cards[cardsIndex]?.groupedCard?.cardGroupMap?.REGULAR?.cards
          ?.length
      ) {
        categoryListRef.current = resInfo?.cards[
          cardsIndex
        ]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
          (category: any) =>
            category?.card?.card?.['@type'] ===
            'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory',
        );

        setActiveIndex(
          Array.from({length: categoryListRef.current.length}, (_, i) => i),
        );
      }
    }
  }, [navigation, resInfo, cardsIndex]);

  const setActiveIndexProps = (index: number) => {
    if (activeIndex.includes(index)) {
      setActiveIndex(activeIndex.filter(i => i !== index));
    } else {
      setActiveIndex([...activeIndex, index]);
    }
  };

  return {categoryListRef, activeIndex, setActiveIndexProps};
};

export default useRestaurantDetails;

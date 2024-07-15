import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {clearCart} from '../store/cartSlice';

const useHomeScreen = (resList: any, setFilteredResList: any) => {
  const dispatch = useDispatch();

  const [isModalVisible, setModalVisible] = useState(false);
  const [isFilterOn, setIsFilterOn] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleFilterTopRatedRestaurants = () => {
    setIsFilterOn(true);
    const filteredList = resList.filter(
      (list: any) => list.info.avgRating > 4.4,
    );
    setFilteredResList(filteredList);
  };

  const handleCloseFilter = () => {
    setIsFilterOn(false);
    setFilteredResList(resList);
  };

  const handleConfirmReplace = () => {
    dispatch(clearCart());
    setModalVisible(false);
  };

  const handleCancelReplace = () => {
    setModalVisible(false);
  };

  const handleFilter = (text: string) => {
    if (text) {
      const filteredRestaurants = resList.filter((res: any) =>
        res.info.name.toLowerCase().includes(text.toLowerCase()),
      );
      setFilteredResList(filteredRestaurants);
    } else {
      setFilteredResList(resList);
    }
  };

  return {
    isFilterOn,
    isModalVisible,
    handleFilter,
    handleFilterTopRatedRestaurants,
    handleCloseFilter,
    toggleModal,
    handleCancelReplace,
    handleConfirmReplace,
  };
};

export default useHomeScreen;

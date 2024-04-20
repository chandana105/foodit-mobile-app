import {useState, useEffect} from 'react';
import {MENU_API_END_URL, MENU_API_START_URL} from '../utils/constants';

const useRestaurantMenu = (resId: string) => {
  const [resInfo, setResInfo] = useState<any>(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const url = `${MENU_API_START_URL}${resId}${MENU_API_END_URL}`;

  const fetchMenu = async () => {
    const response = await fetch(url);

    const json = await response.json();

    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;

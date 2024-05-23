import {View, SafeAreaView, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootState} from '../store/appStore';
import CartHeader from '../components/CartScreen/CartHeader';
import CartFooter from '../components/CartScreen/CartFooter';
import CartItems from '../components/CartScreen/CartItems';
import {RootStackParamList} from '../App';

const ItemSeperator = () => {
  return <View className="h-[0.5] bg-gray-300" />;
};

export default function Cart() {
  const cart = useSelector((state: RootState) => state.cart);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (!cart.items.length) {
      navigation.goBack();
    }
  }, [cart.items.length, navigation]);

  if (!cart.items.length) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100 space-y-4">
        <CartHeader />

        <FlatList
          data={cart.items}
          keyExtractor={item => item.item.card.info.id}
          className="my-4"
          ItemSeparatorComponent={() => ItemSeperator()}
          renderItem={({item}) => <CartItems item={item} />}
        />

        <CartFooter />
      </View>
    </SafeAreaView>
  );
}

import {View, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../store/appStore';
import CartHeader from '../components/CartScreen/CartHeader';
import CartFooter from '../components/CartScreen/CartFooter';
import CartItems from '../components/CartScreen/CartItems';

const ItemSeperator = () => {
  return <View className="h-[0.5] bg-gray-300" />;
};

export default function Cart() {
  const cart = useSelector((state: RootState) => state?.cart);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100 space-y-4">
        <CartHeader />

        <FlatList
          data={cart?.items}
          keyExtractor={item => item?.card?.info.id}
          className="my-4"
          ItemSeparatorComponent={() => ItemSeperator()}
          renderItem={({item}) => <CartItems item={item} />}
        />

        <CartFooter />
      </View>
    </SafeAreaView>
  );
}

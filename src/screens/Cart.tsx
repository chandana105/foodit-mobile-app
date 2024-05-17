import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {CDN_URL} from '../utils/constants';

export default function Cart() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 bg-gray-100 space-y-4">
        <View className="p-5 border-b border-red-100 bg-white shadow-xs">
          <View>
            <Text className="text-lg font-bold text-center text-black">
              Cart
            </Text>
            <Text className="text-center text-gray-400">Yummies</Text>
          </View>
          <TouchableOpacity
            className="rounded-full bg-gray-100 absolute top-3 right-5"
            onPress={() => navigation.goBack()}>
            <Icon name="close-circle" size={32} color="#B5B7BA" />
          </TouchableOpacity>
        </View>

        {/* list items */}
        <ScrollView className="divide-y divide-gray-200">
          <View className="flex-row items-center space-x-3 bg-white py-3 px-5">
            <Image
              source={{
                uri: `${CDN_URL}RX_THUMBNAIL/IMAGES/VENDOR/20`,
              }}
              className="w-10 h-10 rounded-full"
            />
            <Text className="flex-1">
              Cheese Chilli Cheese Chilli Cheese Chilli Cheese Chilli
            </Text>
            <View className="flex-row items-center justify-between  py-2 bg-white rounded-md border border-gray-200 border-solid ">
              <TouchableOpacity className="px-4">
                <Text className="text-green-600 text-lg uppercase font-bold">
                  -
                </Text>
              </TouchableOpacity>
              <Text className="text-green-600 text-lg uppercase font-bold">
                1
              </Text>
              <TouchableOpacity className="px-4">
                <Text className="text-green-600 text-lg uppercase font-bold">
                  +
                </Text>
              </TouchableOpacity>
            </View>
            <Text className="">₹200</Text>
          </View>
        </ScrollView>

        {/* place order view */}
        <View className="p-5 bg-white mt-5  space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">₹200</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery fee</Text>
            <Text className="text-gray-400">₹20</Text>
          </View>

          <View className="flex-row justify-between">
            <Text className="text-black">Order Total</Text>
            <Text className="text-black font-extrabold">₹220</Text>
          </View>

          <TouchableOpacity className="rounded-lg bg-green-600 p-4">
            <Text className="text-center text-white text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

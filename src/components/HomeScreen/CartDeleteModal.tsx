import {View, Text, TouchableOpacity, Pressable} from 'react-native';
import React, {PropsWithChildren} from 'react';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {RootState} from '../../store/appStore';

type ModalProps = PropsWithChildren<{
  isModalVisible: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}>;

export default function CartDeleteModal({
  isModalVisible,
  onCancel,
  onConfirm,
}: ModalProps) {
  const cart = useSelector((state: RootState) => state?.cart);

  return (
    <Modal isVisible={isModalVisible}>
      <View className="flex-1 p-5 mx-auto  my-72  rounded-xl  bg-white">
        {/* Modal header */}
        <Pressable className="self-end " onPress={onCancel}>
          <Icon name="close-circle" size={32} color="#B5B7BA" />
        </Pressable>
        {/* Modal body */}
        <View className="gap-1 -mt-3">
          <Text className="text-black font-bold text-xl">Clear cart?</Text>
          <Text className="text-gray-600 text-lg leading-6">
            Are you sure you want to clear your cart from {cart?.restaurantName}
            ?
          </Text>
        </View>
        {/* Modal footer */}
        <View className="my-12 flex-row items-center justify-between">
          <View>
            <TouchableOpacity
              className="flex items-center justify-center mx-auto px-[52] py-2 bg-red-50  rounded-lg  border-solid shadow-sm"
              onPress={onCancel}>
              <Text className="text-orange-600 text-lg  font-bold">No</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              className=" flex items-center justify-center mx-auto px-[52] py-2 bg-orange-600 rounded-lg  border-solid shadow-sm"
              onPress={onConfirm}>
              <Text className="text-white text-lg  font-bold">Yes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

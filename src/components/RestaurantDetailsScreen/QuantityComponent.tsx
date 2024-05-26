import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const QuantityComponent = ({
  handleDecrement,
  handleIncrement,
  quantity,
}: any) => {
  return (
    <>
      <TouchableOpacity className="px-4" onPress={handleDecrement}>
        <Text className="text-green-600 text-lg uppercase font-bold">-</Text>
      </TouchableOpacity>
      <Text className="text-green-600 text-lg uppercase font-bold">
        {quantity}
      </Text>
      <TouchableOpacity className="px-4" onPress={handleIncrement}>
        <Text className="text-green-600 text-lg uppercase font-bold">+</Text>
      </TouchableOpacity>
    </>
  );
};

export default QuantityComponent;

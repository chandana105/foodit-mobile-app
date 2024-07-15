import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import RestaurantDetails from './screens/RestaurantDetails';
import {Image, StatusBar} from 'react-native';
import {CDN_URL, LOGO_URL} from './utils/constants';
import Cart from './screens/Cart';
import {Provider} from 'react-redux';
import {store} from './store/appStore';

export type RootStackParamList = {
  Home: undefined;
  RestaurantDetails: {resId: string; cloudinaryImageId: string};
  Cart: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Logo = () => <Image source={LOGO_URL} className="w-10 h-10" />;

const RestaurantLogo = (cloudinaryImageId: string) => (
  <Image
    source={{
      uri: `${CDN_URL}${cloudinaryImageId}`,
    }}
    className="w-10 h-10 rounded-full items-center "
  />
);

export default function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar />
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: '',
              headerLeft: Logo,
            }}
          />
          <Stack.Screen
            name="RestaurantDetails"
            component={RestaurantDetails}
            options={({route}) => ({
              headerTitle: () => RestaurantLogo(route.params.cloudinaryImageId),
              headerTitleAlign: 'center',
            })}
          />
          <Stack.Screen
            name="Cart"
            component={Cart}
            options={{presentation: 'modal', headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

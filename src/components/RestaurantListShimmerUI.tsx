import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const shimmerColors = ['#e2e8f0', '#cbd5e1', '#cbd5e9'];

export default function RestaurantListShimmerUI() {
  return (
    <>
      {/* // Searchbar Shimmer */}
      <ShimmerPlaceHolder
        shimmerColors={shimmerColors}
        style={styles.searchBar}
        // className="rounded-lg  m-4 flex flex-row items-center bg-slate-200 pr-2 p-4 w-11/12"
      />

      {/* // Top Rated Restaurants Shimmer UI */}
      <ShimmerPlaceHolder
        shimmerColors={shimmerColors}
        style={styles.filterButton}
        // className="bg-slate-200 m-auto rounded-lg p-3 w-2/4"
      />

      {/* RESTAURNAT CARD SHIMMER UI */}
      <FlatList
        data={Array.from({length: 3})}
        renderItem={({index}) => (
          <View
            className="m-4 p-1 py-2  flex-row h-48 rounded-lg border-[0.5px] border-slate-200 shadow-sm bg-white "
            // style={styles.cardContainer}
            key={index}>
            <ShimmerPlaceHolder
              shimmerColors={shimmerColors}
              //   className="rounded-lg bg-slate-200"
              style={styles.cardImageContainer}
            />

            <View className="rounded-md px-2 gap-1 flex flex-col">
              <ShimmerPlaceHolder
                shimmerColors={shimmerColors}
                // className="rounded-md p-3 w-44 bg-slate-200"
                style={styles.cardInfo}
              />
              <ShimmerPlaceHolder
                shimmerColors={shimmerColors}
                // className="rounded-md p-3 w-44 bg-slate-200"
                style={[styles.cardInfo, styles.cardDescription]}
              />
              <ShimmerPlaceHolder
                shimmerColors={shimmerColors}
                // className="rounded-md mt-4 p-7 w-44 bg-slate-200"
                style={styles.cardInfo}
              />
              <ShimmerPlaceHolder
                shimmerColors={shimmerColors}
                // className="rounded-md p-3 w-44 bg-slate-200"
                style={styles.cardInfo}
              />
            </View>
          </View>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    width: '80%',
    borderRadius: 8,
    marginHorizontal: 40,
    marginVertical: 15,
    height: '4%',
  },
  filterButton: {
    width: '40%',
    borderRadius: 8,
    height: '4%',
    marginHorizontal: 115,
    marginBottom: 15,
  },
  cardImageContainer: {
    borderRadius: 8,
    width: 160,
    height: '100%',
  },
  cardInfo: {
    borderRadius: 8,
    width: 176,
    height: '15%',
  },
  cardDescription: {
    height: '25%',
  },
  cardCuisines: {},
  cardPrice: {},
});

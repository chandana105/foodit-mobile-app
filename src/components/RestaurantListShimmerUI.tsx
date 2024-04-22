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
      />

      {/* // Top Rated Restaurants Shimmer UI */}
      <ShimmerPlaceHolder
        shimmerColors={shimmerColors}
        style={styles.filterButton}
      />

      {/* RESTAURNAT CARD SHIMMER UI */}
      <FlatList
        data={Array.from({length: 3})}
        renderItem={({index}) => (
          <View
            className="m-4 p-1 py-2  flex-row h-48 rounded-lg border-[0.5px] border-slate-200 shadow-sm bg-white "
            key={index}>
            <ShimmerPlaceHolder
              shimmerColors={shimmerColors}
              style={styles.cardImageContainer}
            />

            <View className="rounded-md px-2 gap-1 flex flex-col">
              <ShimmerPlaceHolder
                shimmerColors={shimmerColors}
                style={styles.cardInfo}
              />
              <ShimmerPlaceHolder
                shimmerColors={shimmerColors}
                style={[styles.cardInfo, styles.cardDescription]}
              />
              <ShimmerPlaceHolder
                shimmerColors={shimmerColors}
                style={styles.cardInfo}
              />
              <ShimmerPlaceHolder
                shimmerColors={shimmerColors}
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
});

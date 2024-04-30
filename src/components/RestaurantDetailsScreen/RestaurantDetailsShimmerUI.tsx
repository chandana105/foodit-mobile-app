import {FlatList, StyleSheet, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

const shimmerColors = ['#e2e8f0', '#cbd5e1', '#cbd5e9'];
const shimmerColors1 = ['#e2e8f0', '#cbd5e1', '#ccd5e9'];

export default function RestaurantDetailsShimmerUI() {
  return (
    <>
      {/* // header */}
      <ShimmerPlaceHolder
        shimmerColors={shimmerColors}
        style={styles.descriptionHeader}
      />
      {/* menu categories list */}
      <View className="my-2 px-3 py-4 flex-col justify-between rounded-md bg-white  ">
        <ShimmerPlaceHolder
          shimmerColors={shimmerColors}
          style={styles.categoryTitleHeader}
        />
        <FlatList
          data={Array.from({length: 3})}
          renderItem={({index}) => (
            <View
              className="flex-row my-4 p-1 py-2     h-48 rounded-lg border-[0.5px] border-slate-200  bg-white "
              key={index}>
              <View className="rounded-md px-2 gap-1 flex flex-col">
                <ShimmerPlaceHolder
                  shimmerColors={shimmerColors}
                  style={styles.cardInfo}
                />
                <ShimmerPlaceHolder
                  shimmerColors={shimmerColors}
                  style={styles.cardInfo}
                />
                <ShimmerPlaceHolder
                  shimmerColors={shimmerColors}
                  style={styles.cardInfo}
                />
                <ShimmerPlaceHolder
                  shimmerColors={shimmerColors}
                  style={[styles.cardInfo, styles.cardDescription]}
                />
              </View>
              <View>
                <ShimmerPlaceHolder
                  shimmerColors={shimmerColors}
                  style={styles.cardImageContainer}
                />
                <ShimmerPlaceHolder
                  shimmerColors={shimmerColors1}
                  style={styles.cardButton}
                />
              </View>
            </View>
          )}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  descriptionHeader: {
    width: '92%',
    borderRadius: 8,
    marginHorizontal: 17,
    marginVertical: 15,
    height: '4%',
  },
  categoryTitleHeader: {
    width: '100%',
    borderRadius: 8,
    marginHorizontal: 1,
    marginVertical: 10,
    height: '5%',
  },
  cardInfo: {
    borderRadius: 8,
    width: 176,
    height: '15%',
  },
  cardDescription: {
    height: '45%',
  },
  cardImageContainer: {
    borderRadius: 8,
    width: 160,
    height: '80%',
  },
  cardButton: {
    marginTop: -18,
    marginHorizontal: 30,
    borderRadius: 8,
    height: '20%',
    width: '40%',
  },
});

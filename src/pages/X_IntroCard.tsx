import React, {useCallback, useState} from 'react';
import {Text, View, StyleSheet, Dimensions, Image, Alert} from 'react-native';

interface IPage {
  item: {num: number; src: string; header: string; content: string};
  itemWidth: number;
  itemMarginHorizontal: number;
}

function Page({item, itemWidth, itemMarginHorizontal}: IPage) {
  return (
    <View
      style={[
        {
          width: itemWidth,
          marginHorizontal: itemMarginHorizontal,
        },
        styles.pageItem,
      ]}>
      <Image style={styles.cardImage} source={item.src} />
      <View style={styles.cardTextWrapper}>
        <Text style={styles.cardHeader}>{item.header}</Text>
        <Text style={styles.cardContent}>{item.content}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    resizeMode: 'cover',
    width: Dimensions.get('window').width - 150,
    height: Dimensions.get('window').height - 300,
    borderRadius: 20,
    top: -20,
  },
  cardTextWrapper: {
    paddingHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#A0B5FF',
    paddingVertical: 10,
  },
  cardContent: {
    color: '#323755',
  },
});
export default Page;

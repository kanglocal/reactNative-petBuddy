import React, {useCallback, useState} from 'react';
import {
  Text,
  View,
  Pressable,
  StyleSheet,
  Dimensions,
  FlatList,
  Alert,
} from 'react-native';
import Page from '../pages/X_IntroCard';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface ICarousel {
  gap: number;
  offset: number;
  pages: any[];
  pageWidth: number;
}

function Carousel_test({pages, pageWidth, gap, offset}: ICarousel) {
  const [page, setPage] = useState(1);
  function renderItem({item}: any) {
    return (
      <Page item={item} itemWidth={pageWidth} itemMarginHorizontal={gap / 2} />
    );
  }
  const onScroll = (e: any) => {
    const newPage = Math.round(
      e.nativeEvent.contentOffset.x / (pageWidth + gap),
    );
    setPage(newPage);
  };

  return (
    <View style={styles.container}>
      <FlatList
        automaticallyAdjustContentInsets={false}
        contentContainerStyle={{paddingHorizontal: offset + gap / 2}}
        data={pages}
        decelerationRate="fast"
        horizontal
        keyExtractor={(item: any) => `page__${item.color}`}
        onScroll={onScroll}
        pagingEnabled
        renderItem={renderItem}
        snapToInterval={pageWidth + gap}
        snapToAlignment="start"
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.indicatorWrapper}>
        {Array.from({length: pages.length}, (_, i) => i).map(i => (
          <View
            style={styles.indicator}
            key={`indicator_${i}`}
            focused={i === page}>
            <Text>
              <MaterialCommunityIcons
                name="circle"
                size={10}
                style={{color: i === page ? '#A0B5FF' : '#E6E6E6'}}
              />
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicator: {
    marginVertical: 0,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  indicatorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    top: -20,
    // marginTop: 16,
  },
});
export default Carousel_test;

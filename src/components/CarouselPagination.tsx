import React, {useCallback} from 'react';
import {Text, View, Alert} from 'react-native';
import {Pagination} from 'react-native-snap-carousel';

interface IPage {
  dataLength: number;
  activeSlide: number;
}

function CarouselPagination({dataLength, activeSlide}: IPage) {
  return (
    <Pagination
      dotsLength={dataLength}
      activeDotIndex={activeSlide}
      dotStyle={{
        width: 8,
        height: 8,
        borderRadius: 5,
        marginHorizontal: -5,
        backgroundColor: '#A0B5FF',
      }}
      inactiveDotStyle={{
        backgroundColor: '#E6E6E6',
      }}
      inactiveDotOpacity={1}
      inactiveDotScale={1}
    />
  );
}

export default CarouselPagination;

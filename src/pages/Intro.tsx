import React, {useRef, useState, useEffect, useCallback} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import CarouselPagination from '../components/CarouselPagination';

import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert,
  Animated,
} from 'react-native';

const data = [
  {
    title: 'Algorithm',
    content:
      'Users going throgh a vetting process to ensure you never match with bots.',
    imageSource: require('../assets/images/dog_example_1.jpg'),
  },
  {
    title: 'Matches',
    content: 'We match you with people that have a large of similar interests.',
    imageSource: require('../assets/images/dog_example_2.jpg'),
  },
  {
    title: 'Premium',
    content:
      'Sign up today and enjoy the first month of premium benefits on us.',
    imageSource: require('../assets/images/dog_example_3.jpg'),
  },
];
const {width: screenWidth, height: secreenHeight} = Dimensions.get('window');

function Intro() {
  const [activeSlide, setActiveSlide] = useState(0);
  const prevSlideRef = useRef(activeSlide);
  const carouselRef = useRef(null);

  const activeOpacity = 1;
  const inactiveOpacity = 0;
  // const goForward = () => {
  //   carouselRef.current.snapToNext();
  // };

  const renderItem = ({item, index}, parallaxProps) => {
    const opacity = animation(index);

    return (
      <View style={styles.item}>
        <ParallaxImage
          source={item.imageSource}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.2}
          {...parallaxProps}
        />
        <Animated.View
          style={[
            styles.textWrapper,
            {
              opacity: opacity,
            },
          ]}>
          <Text style={styles.title} numberOfLines={2}>
            {item.title}
          </Text>
          <Text style={styles.content} numberOfLines={2}>
            {item.content}
          </Text>
        </Animated.View>
      </View>
    );
  };

  const animation = (index: number) => {
    const prevOpacity =
      prevSlideRef.current === index ? activeOpacity : inactiveOpacity;

    const opacity = new Animated.Value(
      activeSlide === index ? inactiveOpacity : prevOpacity,
    );

    Animated.timing(opacity, {
      toValue: activeSlide === index ? activeOpacity : inactiveOpacity,
      duration: 300,
      useNativeDriver: true,
    }).start();

    return opacity;
  };

  const onSnapToItem = (index: number) => {
    prevSlideRef.current = activeSlide;
    setActiveSlide(index);
  };

  return (
    <View style={styles.container}>
      {/* <Text>MyCarousel</Text>
      <TouchableOpacity onPress={goForward}>
        <Text>go to next slide</Text>
      </TouchableOpacity> */}
      <Carousel
        ref={carouselRef}
        sliderWidth={screenWidth}
        sliderHeight={screenWidth}
        itemWidth={screenWidth - 130}
        data={data}
        renderItem={renderItem}
        hasParallaxImages={true}
        onSnapToItem={onSnapToItem}
      />
      <CarouselPagination dataLength={data.length} activeSlide={activeSlide} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  item: {
    width: screenWidth - 130,
    height: secreenHeight - 250,
  },
  imageContainer: {
    flex: 1,
    marginBottom: Platform.select({ios: 0, android: 1}),
    backgroundColor: 'white',
    borderRadius: 8,
    marginHorizontal: 5,
  },
  image: {
    resizeMode: 'cover',
  },
  textWrapper: {
    paddingHorizontal: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#A0B5FF',
    paddingTop: 20,
    paddingBottom: 10,
  },
  content: {
    color: '#323755',
  },
});
export default Intro;

import React, {useCallback} from 'react';
import {Text, View, StyleSheet, Dimensions} from 'react-native';

const {width: screenWidth, height: secreenHeight} = Dimensions.get('window');

function HorizontalLine() {
  return <View style={styles.lineStyle} />;
}

const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 0.3,
    borderColor: '#A6A6A6',
    margin: 10,
    width: 95,
  },
});

export default HorizontalLine;

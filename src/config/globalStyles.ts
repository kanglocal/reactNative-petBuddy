import {Dimensions, Platform, StyleSheet} from 'react-native';

export const colors = {
  //   primary: '#EC8B57',
  //   black: '#191919',
  //   red: '#FF3636',
  //   lightBlue: '#36D2FF',
  //   green: '#8FEF73',
  //   grey: '#767676',
  //   borderGrey: '#C9C9C9',
  //   statusGrey: '#666666',
  //   textGrey: '#A2A2A2',
  //   darkBlue: '#83abeb',
  skyBlue: '#A0B5FF',
  coral: '#F68F8F',
  borderGray: '#E8E6EA',
  lightPurple: '#BA90EF',
  white: '#FFFFFF',
  black: '#000000',
  red: '#E94057',
  orange: '#F27121',
  purple: '#8A2387',
  pink: '#FDECEF',
};

export const fonts = {
  //   SpoqaHanSansNeo: 'SpoqaHanSansNeo',
  //   SpoqaHanSansNeo_Thin: 'SpoqaHanSansNeo-Thin',
  //   SpoqaHanSansNeo_Light: 'SpoqaHanSansNeo-Light',
  //   SpoqaHanSansNeo_Medium: 'SpoqaHanSansNeo-Medium',
  //   SpoqaHanSansNeo_Regular: 'SpoqaHanSansNeo-Regular',
  //   SpoqaHanSansNeo_Bold: 'SpoqaHanSansNeo-Bold',
};

export const basicDimensions = {
  // 디자이너가 작업하고 있는 XD파일 스크린의 세로,가로
  height: 812,
  width: 375,
};

export const height = // 높이 변환 작업
  (Dimensions.get('screen').height * (1 / basicDimensions.height)).toFixed(2);

export const width = // 가로 변환 작업
  (Dimensions.get('screen').width * (1 / basicDimensions.width)).toFixed(2);

export const {width: screenWidth, height: secreenHeight} =
  Dimensions.get('window');

export const globalStyles = StyleSheet.create({
  keyboardView: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ciImageWrapper: {
    flex: 2,
    paddingTop: 10,
    marginBottom: Platform.select({ios: 0, android: 1}),
    borderRadius: 8,
    marginHorizontal: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  ciImgae: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputText: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: colors.borderGray,
    marginVertical: 8,
    width: screenWidth - 70,
  },
  skyBlueButton: {
    backgroundColor: colors.skyBlue,
    paddingVertical: 15,
    marginBottom: 10,
    borderRadius: 10,
    width: screenWidth - 70,
  },
  skyBlueButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  whiteButton: {
    backgroundColor: colors.white,
    paddingVertical: 15,
    marginBottom: 10,
    borderRadius: 10,
    // borderColor: '#F3F3F3',
    borderColor: colors.borderGray,
    borderWidth: 1,
    width: screenWidth - 70,
  },
  whiteButtonText: {
    color: colors.skyBlue,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoText: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    paddingHorizontal: 60,
  },
  textButtonContainer: {
    flexDirection: 'row',
  },
  textButton: {
    paddingHorizontal: 20,
  },
  textButtonText: {
    color: colors.skyBlue,
    fontSize: 13,
  },
});

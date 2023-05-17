import React, {useCallback} from 'react';
import {
  Alert,
  Dimensions,
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HorizontalLine from '../../components/HorizontalLine';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../AppInner';
// import KakaoSignUp from './KakaoSignUp';
// import GoogleSignUp from './GoogleSignUp';
// import AppleSignUp from './AppleSignUp';
// import NaverSignUp from './NaverSignUp';

type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;
const {width: screenWidth, height: secreenHeight} = Dimensions.get('window');

function SignUp({navigation}: MainScreenProps) {
  const toEmailSignUp = useCallback(() => {
    navigation.navigate('EmailSignUp');
  }, [navigation]);
  const toPhoneSignUp = useCallback(() => {
    navigation.navigate('PhoneSignUp');
  }, [navigation]);
  const toKakaoSignUp = useCallback(() => {
    navigation.navigate('KakaoSignUp');
  }, [navigation]);
  const toGoogleSignUp = useCallback(() => {
    navigation.navigate('GoogleSignUp');
  }, [navigation]);
  const toAppleSignUp = useCallback(() => {
    navigation.navigate('AppleSignUp');
  }, [navigation]);
  const toNaverSignUp = useCallback(() => {
    navigation.navigate('NaverSignUp');
  }, [navigation]);

  const openTermsOfUse = () => {
    Alert.alert('test', 'openTermsOfUse');
  };
  const openPrivacyPolicy = () => {
    Alert.alert('test', 'openPrivacyPolicy');
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          style={styles.imgae}
          source={require('../../assets/images/dog_illust_circle_1.png')}
        />
      </View>
      <View style={styles.basicButtonZone}>
        <Text style={styles.basicButtonText}>Sign up to continue</Text>
        <Pressable onPress={toEmailSignUp} style={styles.signUpWithEmailButton}>
          <Text style={styles.signUpWithEmailText}>Continue with email</Text>
        </Pressable>
        <Pressable onPress={toPhoneSignUp} style={styles.signUpWithPhoneButton}>
          <Text style={styles.signUpWithPhoneText}>Use phone number</Text>
        </Pressable>
      </View>
      <View style={styles.socialButtonZone}>
        <View style={styles.socialTextContainer}>
          <HorizontalLine />
          <Text style={styles.socialText}>or sign up with</Text>
          <HorizontalLine />
        </View>
        <View style={styles.socialButtonContainer}>
          <Pressable onPress={toKakaoSignUp} style={styles.socialButtonWrapper}>
            <MaterialCommunityIcons
              name="chat"
              size={30}
              style={[styles.socialButton, styles.kakaoIcon]}
            />
          </Pressable>
          <Pressable
            onPress={toGoogleSignUp}
            style={styles.socialButtonWrapper}>
            <FontAwesome5
              name="google"
              size={30}
              style={[styles.socialButton, styles.googleIcon]}
            />
          </Pressable>
          <Pressable onPress={toAppleSignUp} style={styles.socialButtonWrapper}>
            <FontAwesome5
              name="apple"
              size={30}
              style={[styles.socialButton, styles.appleIcon]}
            />
          </Pressable>
          <Pressable onPress={toNaverSignUp} style={styles.socialButtonWrapper}>
            <FontAwesome5
              name="line"
              size={30}
              style={[styles.socialButton, styles.naverIcon]}
            />
          </Pressable>
        </View>
      </View>
      <View style={styles.policyZone}>
        <Pressable onPress={openTermsOfUse} style={styles.termsOfUseButton}>
          <Text style={styles.termsOfUseText}>Terms of use</Text>
        </Pressable>
        <Pressable
          onPress={openPrivacyPolicy}
          style={styles.privacyPolicyButton}>
          <Text style={styles.privacyPolicyText}>Privacy Policy</Text>
        </Pressable>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imageWrapper: {
    flex: 2,
    marginBottom: Platform.select({ios: 0, android: 1}),
    borderRadius: 8,
    marginHorizontal: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  imgae: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  basicButtonZone: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  basicButtonText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 18,
    marginBottom: 20,
  },
  signUpWithEmailButton: {
    backgroundColor: '#A0B5FF',
    // paddingHorizontal: 80,
    paddingVertical: 15,
    marginBottom: 10,
    borderRadius: 10,
    width: screenWidth - 70,
  },
  signUpWithEmailText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signUpWithPhoneButton: {
    backgroundColor: 'white',
    // paddingHorizontal: 80,
    paddingVertical: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: '#F3F3F3',
    borderWidth: 1,
    width: screenWidth - 70,
  },
  signUpWithPhoneText: {
    color: '#A0B5FF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  socialButtonZone: {
    flex: 1,
  },
  socialTextContainer: {
    flexDirection: 'row',
  },
  socialText: {
    color: 'black',
    fontSize: 12,
  },
  socialButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  socialButtonWrapper: {
    marginHorizontal: 10,
  },
  socialButton: {
    color: '#A0B5FF',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    borderColor: '#E8E6EA',
  },
  kakaoSignUpButton: {},
  googleSignUpButton: {},
  appleSignUpButton: {},
  naverSignUpButton: {},
  kakaoIcon: {},
  googleIcon: {},
  appleIcon: {},
  naverIcon: {},
  policyZone: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingBottom: 30,
    paddingVertical: 50,
  },
  termsOfUseButton: {
    paddingHorizontal: 20,
  },
  termsOfUseText: {
    color: '#A0B5FF',
  },
  privacyPolicyButton: {
    paddingHorizontal: 20,
  },
  privacyPolicyText: {
    color: '#A0B5FF',
  },
});
export default SignUp;

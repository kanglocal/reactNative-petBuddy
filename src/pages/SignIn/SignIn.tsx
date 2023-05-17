import React, {useCallback, useEffect, useState, useRef} from 'react';
import {
  Text,
  View,
  Dimensions,
  TextInput,
  StyleSheet,
  Platform,
  Image,
  Pressable,
  Alert,
} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList, LoggedInParamList} from '../../../AppInner';
import HorizontalLine from '../../components/HorizontalLine';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import DismissKeyboardView from '../../components/DismissKeyboardView';
import {useAppDispatch} from '../../store';
import userSlice from '../../slices/user';

const {width: screenWidth, height: secreenHeight} = Dimensions.get('window');

function SignIn() {
  const dispatch = useAppDispatch();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const idRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);

  // TODO: 1. 먼저, 자동로그인설정 O = 해당계정으로 로그인을 API에 요청한다.
  // TODO: 2. 지금 접속한 사용자의 기기가 맞는지, 기기에 sns로그인이 되어있는지 확인하기.
  // TODO: 3. 사용자의 기기 X = 로그인화면을 보여준다.
  // TODO: 4. 사용자의 기기 O & sns로그인 X = 해당 sns로그인 창 열기

  // TODO: 5. 자동로그인 설정 X = 로그인화면 보여주기

  const toSearchId = useCallback(() => {
    navigation.navigate('SearchId');
  }, [navigation]);
  const toSearchPassword = useCallback(() => {
    navigation.navigate('SearchPassword');
  }, [navigation]);
  const toKakaoSignIn = useCallback(() => {
    navigation.navigate('KakaoSignIn');
  }, [navigation]);
  const toGoogleSignIn = useCallback(() => {
    navigation.navigate('GoogleSignIn');
  }, [navigation]);
  const toAppleSignIn = useCallback(() => {
    navigation.navigate('AppleSignIn');
  }, [navigation]);
  const toNaverSignIn = useCallback(() => {
    navigation.navigate('NaverSignIn');
  }, [navigation]);

  const onChangeId = useCallback((text: String) => {
    setId(text.trim());
  }, []);

  const onChangePassword = useCallback((text: String) => {
    setPassword(text.trim());
  }, []);

  const onSubmit = useCallback(async () => {
    if (loading) {
      return;
    }
    if (!id || !id.trim()) {
      return Alert.alert('알림', 'Email 또는 휴대폰번호를 입력해주세요.');
    }
    if (!password || !password.trim()) {
      return Alert.alert('알림', '비밀번호를 입력해주세요.');
    }

    setLoading(true);

    // TODO: 로그인 로직
    const testData = {
      name: '강현지',
      email: 'test@test.com',
      phoneNumber: '12312341234',
    };
    Alert.alert('알림', '로그인 되었습니다.');

    dispatch(
      userSlice.actions.setUser({
        name: testData.name,
        email: testData.email,
        phoneNumber: testData.phoneNumber,
      }),
    );
    setLoading(false);
    navigation.navigate('SignIn');
  }, [loading, dispatch, id, password]);
  const typed = id && password;

  return (
    // <View>
    //   <Text> 로그인화면</Text>
    // </View>
    <DismissKeyboardView style={styles.keyboardView}>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            style={styles.imgae}
            source={require('../../assets/images/dog_illust_circle_1.png')}
          />
        </View>
        <View style={styles.inputZone}>
          <Text style={styles.infoText}>
            PetBuddy 회원 서비스 이용을 위해 로그인해주세요.
          </Text>
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeId}
            placeholder="Email 또는 휴대폰번호"
            value={id}
            ref={idRef}
            blurOnSubmit={false}
            clearButtonMode="while-editing"
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
          <TextInput
            style={styles.textInput}
            onChangeText={onChangePassword}
            placeholder="비밀번호"
            value={password}
            ref={passwordRef}
            autoComplete="password"
            textContentType="password"
            secureTextEntry
            returnKeyType="send"
            clearButtonMode="while-editing"
            onSubmitEditing={onSubmit}
          />
        </View>

        <View style={styles.searchZone}>
          <Pressable onPress={toSearchId} style={styles.searchButton}>
            <Text style={styles.searchButtonText}>아이디 찾기</Text>
          </Pressable>
          <Pressable onPress={toSearchPassword} style={styles.searchButton}>
            <Text style={styles.searchButtonText}>비밀번호 찾기</Text>
          </Pressable>
        </View>

        <View style={styles.loginButtonZone}>
          <Pressable
            onPress={onSubmit}
            style={
              typed
                ? [styles.loginButton, styles.loginButtonActive]
                : styles.loginButton
            }>
            <Text style={styles.loginButtonText}>로그인 하기</Text>
          </Pressable>
        </View>

        <View style={styles.socialButtonZone}>
          <View style={styles.socialTextContainer}>
            <HorizontalLine />
            <Text style={styles.socialText}>or sign in with</Text>
            <HorizontalLine />
          </View>
          <View style={styles.socialButtonContainer}>
            <Pressable
              onPress={toKakaoSignIn}
              style={styles.socialButtonWrapper}>
              <MaterialCommunityIcons
                name="chat"
                size={30}
                style={[styles.socialButton, styles.kakaoIcon]}
              />
            </Pressable>
            <Pressable
              onPress={toGoogleSignIn}
              style={styles.socialButtonWrapper}>
              <FontAwesome5
                name="google"
                size={30}
                style={[styles.socialButton, styles.googleIcon]}
              />
            </Pressable>
            <Pressable
              onPress={toAppleSignIn}
              style={styles.socialButtonWrapper}>
              <FontAwesome5
                name="apple"
                size={30}
                style={[styles.socialButton, styles.appleIcon]}
              />
            </Pressable>
            <Pressable
              onPress={toNaverSignIn}
              style={styles.socialButtonWrapper}>
              <FontAwesome5
                name="line"
                size={30}
                style={[styles.socialButton, styles.naverIcon]}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </DismissKeyboardView>
  );
}
const styles = StyleSheet.create({
  keyboardView: {
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    // height: secreenHeight,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'pink',
  },
  imageWrapper: {
    flex: 2,
    paddingTop: 10,
    marginBottom: Platform.select({ios: 0, android: 1}),
    borderRadius: 8,
    marginHorizontal: 5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  imgae: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
  },
  inputZone: {
    flex: 2,
    // backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    paddingHorizontal: 60,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#E8E6EA',
    marginVertical: 8,
    width: screenWidth - 70,
  },
  searchZone: {
    flexDirection: 'row',
    // alignItems: 'flex-end',
    // paddingBottom: 10,
    // paddingVertical: 10,
    // backgroundColor: 'orange',
  },
  searchButton: {
    paddingHorizontal: 20,
  },
  searchButtonText: {
    color: '#A0B5FF',
    fontSize: 13,
  },
  loginButtonZone: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  loginButton: {
    backgroundColor: 'gray',
    // paddingHorizontal: 80,
    paddingVertical: 15,
    marginBottom: 10,
    borderRadius: 10,
    width: screenWidth - 70,
  },
  loginButtonActive: {
    backgroundColor: '#A0B5FF',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  socialButtonZone: {
    // backgroundColor: 'blue',
    flex: 1,
    marginBottom: 10,
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
  kakaoSignInButton: {},
  googleSignInButton: {},
  appleSignInButton: {},
  naverSignInButton: {},
  kakaoIcon: {},
  googleIcon: {},
  appleIcon: {},
  naverIcon: {},
});
export default SignIn;

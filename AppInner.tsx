import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Discover from './src/pages/Discover';
import Matches from './src/pages/Matches';
import Messages from './src/pages/Messages';
import Account from './src/pages/Account';
import Main from './src/pages/Main';
import SignIn from './src/pages/SignIn/SignIn';
import SignUp from './src/pages/SignUp/SignUp';
import EmailSignUp from './src/pages/SignUp/EmailSignUp';
import PhoneSignUp from './src/pages/SignUp/PhoneSignUp';
import PhoneSignUpVerification from './src/pages/SignUp/PhoneSignUpVerification';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchId from './src/pages/SignIn/SearchId';
import SearchPassword from './src/pages/SignIn/SearchPassword';
import KakaoSignIn from './src/pages/SignIn/KakaoSignIn';
import GoogleSignIn from './src/pages/SignIn/GoogleSignIn';
import AppleSignIn from './src/pages/SignIn/AppleSignIn';
import NaverSignIn from './src/pages/SignIn/NaverSignIn';
import KakaoSignUp from './src/pages/SignUp/KakaoSignUp';
import GoogleSignUp from './src/pages/SignUp/GoogleSignUp';
import AppleSignUp from './src/pages/SignUp/AppleSignUp';
import NaverSignUp from './src/pages/SignUp/NaverSignUp';
import UserProfile from './src/pages/UserProfile';
import DogProfile from './src/pages/DogProfile';
import {useSelector} from 'react-redux';
import {RootState} from './src/store/reducer';

import {Pressable, Text} from 'react-native';
import {useEffect} from 'react';
import userSlice from './src/slices/user';
import {useAppDispatch} from './src/store';

export type RootStackParamList = {
  SignIn: undefined; // 로그인 화면.
  SignUp: undefined; // 회원가입 화면.
  Main: undefined; // 비로그인시 메인화면

  // 로그인 관련
  KakaoSignIn: undefined;
  GoogleSignIn: undefined;
  AppleSignIn: undefined;
  NaverSignIn: undefined;

  // 계정찾기 관련
  SearchId: undefined;
  SearchPassword: undefined;

  // 회원가입 관련
  EmailSignUp: undefined;
  PhoneSignUp: undefined;
  PhoneSignUpVerification: undefined;
  KakaoSignUp: undefined;
  GoogleSignUp: undefined;
  AppleSignUp: undefined;
  NaverSignUp: undefined;
};
export type LoggedInParamList = {
  UserProfile: undefined;
  DogProfile: undefined;
  Discover: undefined;
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator<RootStackParamList>();
const SettingStack = createNativeStackNavigator<RootStackParamList>();

const testData = {
  name: '강현지',
  email: 'test@test.com',
  phoneNumber: '12312341234',
};

function AppInner() {
  const dispatch = useAppDispatch();
  const isLoggedIn = useSelector((state: RootState) => !!state.user.email);
  // const isLoggedIn = false;
  const isProfileSettingComplete = false;

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        // 로그인 되었을 때 볼 수 있는 화면
        isProfileSettingComplete ? (
          // 로그인 되었고, 프로필 설정이 완료되었을 때 볼 수 있는 화면
          <Tab.Navigator>
            <Tab.Screen
              name="Discover"
              component={Discover}
              options={{
                title: 'Discover',
                tabBarIcon: ({color}) => (
                  <MaterialCommunityIcons
                    name="cards"
                    size={20}
                    style={{color}}
                  />
                ),
                tabBarActiveTintColor: '#E94057',
              }}
            />
            <Tab.Screen
              name="Matches"
              component={Matches}
              options={{
                title: 'Matches',
                tabBarIcon: ({color}) => (
                  <MaterialCommunityIcons
                    name="cards-heart"
                    size={20}
                    style={{color}}
                  />
                ),
                tabBarActiveTintColor: '#E94057',
                tabBarBadge: '',
                tabBarBadgeStyle: {
                  maxWidth: 5,
                  maxHeight: 10,
                  top: 7,
                  borderColor: 'white',
                  borderWidth: 1,
                },
              }}
            />
            <Tab.Screen
              name="Messages"
              component={Messages}
              options={{
                title: 'Messages',
                unmountOnBlur: true,
                tabBarIcon: ({color}) => (
                  <MaterialCommunityIcons
                    name="chat-processing"
                    size={22}
                    style={{color}}
                  />
                ),
                tabBarActiveTintColor: '#E94057',
              }}
            />
            <Tab.Screen
              name="Account"
              component={Account}
              options={{
                title: 'Account',
                unmountOnBlur: true,
                tabBarIcon: ({color}) => (
                  <FontAwesome5 name="user-alt" size={17} style={{color}} />
                ),
                tabBarActiveTintColor: '#E94057',
              }}
            />
          </Tab.Navigator>
        ) : (
          // 로그인 되었고, 프로필 설정이 완료되지 않았을 때 볼 수 있는 화면
          <SettingStack.Navigator>
            <SettingStack.Screen
              name="UserProfile"
              component={UserProfile}
              options={{title: 'UserProfile', headerShown: false}}
            />
            <SettingStack.Screen
              name="DogProfile"
              component={DogProfile}
              options={{title: 'UserProfile', headerShown: false}}
            />
          </SettingStack.Navigator>
        )
      ) : (
        // 로그인되지 않았을 때 볼 수 있는 화면
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={Main}
            options={{title: 'Main', headerShown: false}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{title: '로그인', headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{title: '회원가입', headerShown: false}}
          />
          <Stack.Screen
            name="EmailSignUp"
            component={EmailSignUp}
            options={{title: '이메일회원가입', headerShown: false}}
          />
          <Stack.Screen
            name="PhoneSignUp"
            component={PhoneSignUp}
            options={{
              title: '휴대폰회원가입',
              headerShown: false,
              headerBackVisible: true,
            }}
          />
          <Stack.Screen
            name="PhoneSignUpVerification"
            component={PhoneSignUpVerification}
            options={{
              title: '휴대폰검증',
              headerShown: false,
              headerBackVisible: true,
            }}
          />
          <Stack.Screen
            name="SearchId"
            component={SearchId}
            options={{title: '아이디찾기', headerShown: false}}
          />
          <Stack.Screen
            name="SearchPassword"
            component={SearchPassword}
            options={{title: '비밀번호찾기', headerShown: false}}
          />
          <Stack.Screen
            name="KakaoSignIn"
            component={KakaoSignIn}
            options={{title: '카카오로그인', headerShown: false}}
          />
          <Stack.Screen
            name="GoogleSignIn"
            component={GoogleSignIn}
            options={{title: '구글로그인', headerShown: false}}
          />
          <Stack.Screen
            name="AppleSignIn"
            component={AppleSignIn}
            options={{title: '애플로그인', headerShown: false}}
          />
          <Stack.Screen
            name="NaverSignIn"
            component={NaverSignIn}
            options={{title: '네이버로그인', headerShown: false}}
          />
          <Stack.Screen
            name="KakaoSignUp"
            component={KakaoSignUp}
            options={{title: '카카오회원가입', headerShown: false}}
          />
          <Stack.Screen
            name="GoogleSignUp"
            component={GoogleSignUp}
            options={{title: '구글회원가입', headerShown: false}}
          />
          <Stack.Screen
            name="AppleSignUp"
            component={AppleSignUp}
            options={{title: '애플회원가입', headerShown: false}}
          />
          <Stack.Screen
            name="NaverSignUp"
            component={NaverSignUp}
            options={{title: '네이버회원가입', headerShown: false}}
          />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default AppInner;

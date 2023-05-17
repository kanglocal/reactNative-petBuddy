import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../../AppInner';
import {useAppDispatch} from '../../store';
import userSlice from '../../slices/user';

const {width: screenWidth, height: secreenHeight} = Dimensions.get('window');

function PhoneSignUpVerification() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const firstNumberInputRef = useRef<TextInput | null>(null);
  const secondNumberInputRef = useRef<TextInput | null>(null);
  const thirdNumberInputRef = useRef<TextInput | null>(null);
  const fourthNumberInputRef = useRef<TextInput | null>(null);

  const [firstNumber, setFirstNumber] = useState<undefined | string>(undefined);
  const [secondNumber, setSecondNumber] = useState<undefined | string>(
    undefined,
  );
  const [thirdNumber, setThirdNumber] = useState<undefined | string>(undefined);
  const [fourthNumber, setFourthNumber] = useState<undefined | string>(
    undefined,
  );

  const dispatch = useAppDispatch();

  const goBack = () => {
    navigation.goBack();
  };

  const resetTimer = () => {
    Alert.alert('test', '타이머,NumberInput초기화');
  };
  const testData = {
    name: '강현지',
    email: 'test@test.com',
    phoneNumber: '12312341234',
  };

  const onSubmit = useCallback(() => {
    // TODO: 코드 검증 로직

    // 검증완료시 navigate, 검증 실패시 Alert
    // TODO: verificationComplete 변수에 검증 결과 담기.
    let verificationComplete = false;
    verificationComplete = true;

    if (verificationComplete) {
      //TODO: test용 : useSelector로 slice에 있는 전역변수 User 를 세팅한다.(=로그인처리한다.)
      // TODO: 이건 나중에 accessToken으로 대체되어야함.
      // reducer의 액션.
      dispatch(
        userSlice.actions.setUser({
          name: testData.name,
          email: testData.email,
          phoneNumber: testData.phoneNumber,
        }),
      );
      navigation.navigate('SignIn');
    } else {
      Alert.alert('알림', '코드가 일치하지 않습니다.');
    }
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Pressable onPress={goBack} style={styles.backButton}>
        <FontAwesome5 style={styles.backIcon} name="chevron-left" size={17} />
      </Pressable>
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>00:42</Text>
        <Text style={styles.timerInforText}>
          Type the verification code we've sent you
        </Text>
      </View>
      <View style={styles.numberInputContainer}>
        <TextInput
          style={[
            styles.numberInput,
            firstNumber !== undefined
              ? styles.activeNumberInput
              : styles.inActiveNumberInput,
          ]}
          placeholder="0"
          placeholderTextColor="#A0B5FF"
          keyboardType="number-pad"
          autoFocus={true}
          ref={firstNumberInputRef}
          onChange={event => {
            const {eventCount, target, text} = event.nativeEvent;
            setFirstNumber(text);
            secondNumberInputRef.current?.focus();
          }}
          value={firstNumber}
        />
        <TextInput
          style={[
            styles.numberInput,
            secondNumber !== undefined
              ? styles.activeNumberInput
              : styles.inActiveNumberInput,
          ]}
          placeholder="0"
          placeholderTextColor="#A0B5FF"
          keyboardType="number-pad"
          ref={secondNumberInputRef}
          onChange={event => {
            const {eventCount, target, text} = event.nativeEvent;
            setSecondNumber(text);
            thirdNumberInputRef.current?.focus();
          }}
          value={secondNumber}
        />
        <TextInput
          style={[
            styles.numberInput,
            thirdNumber !== undefined
              ? styles.activeNumberInput
              : styles.inActiveNumberInput,
          ]}
          placeholder="0"
          placeholderTextColor="#A0B5FF"
          keyboardType="number-pad"
          ref={thirdNumberInputRef}
          onChange={event => {
            const {eventCount, target, text} = event.nativeEvent;
            setThirdNumber(text);
            fourthNumberInputRef.current?.focus();
          }}
          value={thirdNumber}
        />
        <TextInput
          style={[
            styles.numberInput,
            fourthNumber !== undefined
              ? styles.activeNumberInput
              : styles.inActiveNumberInput,
          ]}
          placeholder="0"
          placeholderTextColor="#A0B5FF"
          keyboardType="number-pad"
          ref={fourthNumberInputRef}
          onChange={event => {
            const {eventCount, target, text} = event.nativeEvent;
            setFourthNumber(text);
          }}
          value={fourthNumber}
        />
      </View>
      <View style={styles.footer}>
        <Pressable onPress={resetTimer}>
          <Text style={styles.footerText}>Send again</Text>
        </Pressable>
        <Pressable onPress={onSubmit}>
          <Text style={styles.footerText}>Submit</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backButton: {
    width: 50,
    paddingVertical: 15,
    marginBottom: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E8E6EA',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  backIcon: {
    color: '#A0B5FF',
  },
  timerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  timerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 40,
    marginBottom: 10,
  },
  timerInforText: {
    color: '#4D4D4D',
    fontSize: 15,
    width: screenWidth - 150,
    textAlign: 'center',
    marginBottom: 20,
  },
  numberInputContainer: {
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  numberInput: {
    fontWeight: 'bold',
    fontSize: 30,
    marginHorizontal: 4,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 15,
  },
  activeNumberInput: {
    backgroundColor: '#A0B5FF',
    color: 'white',
  },
  inActiveNumberInput: {
    backgroundColor: 'white',
    color: '#A0B5FF',
    borderWidth: 1,
    borderColor: '#A0B5FF',
  },
  footer: {
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  footerText: {
    color: '#A0B5FF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginHorizontal: 40,
  },
});

// import React, {useCallback, useEffect, useRef, useState} from 'react';
// import {View, Text} from 'react-native';
// function PhoneSignUpVerification() {
//   return (
//     <View>
//       <Text>핸드폰검증</Text>
//     </View>
//   );
// }

export default PhoneSignUpVerification;

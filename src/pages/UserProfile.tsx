import React, {useCallback, useRef, useState} from 'react';
import {
  Alert,
  Dimensions,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import DismissKeyboardView from '../components/DismissKeyboardView';
import {useAppDispatch} from '../store';
import userSlice from '../slices/user';

const {width: screenWidth, height: secreenHeight} = Dimensions.get('window');

function UserProfile() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const firstNameRef = useRef<TextInput | null>(null);
  const lasetNameRef = useRef<TextInput | null>(null);

  const onSubmit = useCallback(async () => {
    if (loading) {
      return;
    }
    if (!firstName || !firstName.trim()) {
      return Alert.alert('알림', 'First name을 입력해주세요.');
    }
    if (!lastName || !lastName.trim()) {
      return Alert.alert('알림', 'Last name을 입력해주세요.');
    }

    setLoading(true);
    // TODO: 사용자 프로필 등록 로직
    const testData = {
      name: '강현지',
      email: 'test@test.com',
      phoneNumber: '12312341234',
    };

    dispatch(
      userSlice.actions.setUser({
        name: testData.name,
        email: testData.email,
        phoneNumber: testData.phoneNumber,
      }),
    );
    setLoading(false);
  }, [loading, dispatch, firstName, lastName]);

  const onChangeFirstName = useCallback((text: String) => {
    setFirstName(text.trim());
  }, []);

  const onChangeLastName = useCallback((text: String) => {
    setLastName(text.trim());
  }, []);

  const typed = firstName && lastName;

  return (
    <DismissKeyboardView style={styles.keyboardView}>
      <View style={styles.container}>
        <View style={styles.skipZone}>
          <Pressable style={styles.skipButton}>
            <Text style={styles.skipButtonText}>Skip</Text>
          </Pressable>
        </View>
        <View style={styles.headerZone}>
          <Text style={styles.headerText}>Profile details</Text>
        </View>
        <View style={styles.contentContainer}>
          <View>
            <Text>이미지 선택</Text>
          </View>
          <View style={styles.inputZone}>
            <TextInput
              style={styles.textInput}
              onChangeText={onChangeFirstName}
              placeholder="First name"
              value={firstName}
              ref={firstNameRef}
              blurOnSubmit={false}
              clearButtonMode="while-editing"
              onSubmitEditing={() => lasetNameRef.current?.focus()}
            />
            <TextInput
              style={styles.textInput}
              onChangeText={onChangeLastName}
              placeholder="Last name"
              value={lastName}
              ref={lasetNameRef}
              blurOnSubmit={false}
              clearButtonMode="while-editing"
              // onSubmitEditing={() => passwordRef.current?.focus()}
            />
            <Text>choose birthday date</Text>
            <Text>옵션</Text>
          </View>

          <View style={styles.submitButtomZone}>
            <Pressable
              onPress={onSubmit}
              style={
                typed
                  ? [styles.submitButton, styles.submitButtonActive]
                  : styles.submitButton
              }>
              <Text style={styles.submitButtonText}>Confirm</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </DismissKeyboardView>
  );
}
const styles = StyleSheet.create({
  keyboardView: {
    // backgroundColor: 'purple',
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 30,
    // alignItems: 'center',
    // backgroundColor: 'pink',
  },
  skipZone: {
    alignItems: 'flex-end',
  },
  skipButton: {
    paddingVertical: 10,
  },
  skipButtonText: {
    color: '#A0B5FF',
    fontWeight: 'bold',
    fontSize: 15,
  },
  headerZone: {},
  headerText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  contentContainer: {
    alignItems: 'center',
  },
  inputZone: {},
  textInput: {
    borderWidth: 1,
    borderRadius: 15,
    borderColor: '#E8E6EA',
    marginVertical: 8,
    width: screenWidth - 70,
  },
  submitButtomZone: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  submitButton: {
    backgroundColor: 'gray',
    // paddingHorizontal: 80,
    paddingVertical: 15,
    marginBottom: 10,
    borderRadius: 10,
    width: screenWidth - 70,
  },
  submitButtonActive: {
    backgroundColor: '#A0B5FF',
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default UserProfile;

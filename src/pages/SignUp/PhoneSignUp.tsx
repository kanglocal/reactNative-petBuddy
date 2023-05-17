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
import {NativeStackScreenProps} from '@react-navigation/native-stack';

const {width: screenWidth, height: secreenHeight} = Dimensions.get('window');
type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

function PhoneSignUp({navigation}: MainScreenProps) {
  const toVerification = useCallback(() => {
    navigation.navigate('PhoneSignUpVerification');
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>My mobile</Text>
      <Text style={styles.infoText}>
        Please enter your valid phone number. We will send you a 4-digit code to
        verify your account.
      </Text>
      <View>
        <TextInput style={styles.phoneNumberInput} autoFocus={true} />
      </View>
      <Pressable onPress={toVerification} style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 30,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 70,
    marginBottom: 10,
  },
  infoText: {
    color: '#4D4D4D',
  },
  phoneNumberInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#A0B5FF',
    marginVertical: 20,
  },
  continueButton: {
    backgroundColor: '#A0B5FF',
    paddingHorizontal: 80,
    paddingVertical: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  continueButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default PhoneSignUp;

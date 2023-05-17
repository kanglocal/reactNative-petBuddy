import React, {useCallback} from 'react';
import {Text, View, Pressable, StyleSheet, Dimensions} from 'react-native';
import Intro from './Intro';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../AppInner';

type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

function Main({navigation}: MainScreenProps) {
  const toSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);
  const toSignIn = useCallback(() => {
    navigation.navigate('SignIn');
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.cardZone}>
        <Intro />
      </View>
      <View style={styles.buttonZone}>
        <Pressable onPress={toSignUp} style={styles.signUpButton}>
          <Text style={styles.signUpButtonText}>Create an account</Text>
        </Pressable>
        <View style={styles.signInWrapper}>
          <Text style={styles.signInInformText}>Already have an account?</Text>
          <Pressable onPress={toSignIn}>
            <Text style={styles.signInButtonText}>Sign In</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardZone: {
    marginBottom: 10,
    marginTop: 50,
    // height: Dimensions.get('window').height - 90,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4,
  },

  buttonZone: {
    alignItems: 'center',
    flex: 1,
  },

  signUpButton: {
    backgroundColor: '#A0B5FF',
    paddingHorizontal: 80,
    paddingVertical: 15,
    marginBottom: 10,
    borderRadius: 10,
  },
  signUpButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signInWrapper: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  signInInformText: {
    paddingRight: 5,
    color: '#000000',
  },
  signInButtonText: {
    fontWeight: 'bold',
    color: '#A0B5FF',
  },
});
export default Main;

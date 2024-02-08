import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
  Button,
  Alert,
  Image
} from 'react-native';
import { LinearGradient } from "react-native-linear-gradient"; 

const LoginScreen = ({navigation}) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onLoginPress = () => {
  }

  return (
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.mainView}>
            <Text style={styles.maintitle}>Welcome,</Text>
            <Text style={styles.maintitle1}>Sign in to continue!</Text>

            <TextInput  style={styles.textInput} placeholder="Email ID" placeholderTextColor="#899499" onChangeText={(text) => setEmail(text)} value={email}>
            </TextInput>
            <TextInput  style={styles.textInput} placeholder="Password" placeholderTextColor="#899499" onChangeText={(text) => setPassword(text)} value={password}>
            </TextInput>
            <LinearGradient
            colors= {['#008000', '#4CBB17', '#B4C424']}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={styles.buttonClickMe}
            ><Text style={styles.buttonText}>Login</Text>
            </LinearGradient>

            <View style={styles.signup}>
                <View><Text style={styles.subText}>I'm a new user.</Text>
                </View>
                <TouchableOpacity><Text style={styles.subText1}  onPress={() => navigation.navigate('Registration Screen')}>Sign up</Text></TouchableOpacity>
            </View>
            
        </View>
      </ScrollView>

  );
}

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        paddingVertical:40,
      },
      maintitle:{
        paddingHorizontal: 25,
        fontSize:25,
        color: "black",
        fontWeight: "bold"
      },
      maintitle1:{
        paddingHorizontal: 25,
        fontSize:25,
        paddingBottom: 175,
        color: "#899499",
      },
      textInput:{
        borderWidth:1,
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 25,
        marginRight: 25,
        borderRadius: 8,
        color: '#899499'
      },
      buttonClickMe: {
        backgroundColor: '#2980B9',
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 10,
        marginTop: 10,
        padding: 15,
        borderRadius: 8,
      },
      buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontSize: 18
      },
      subText: {
        color: 'black',
        fontSize: 16
      },
      subText1: {
        color: '#008000',
        fontSize: 16
      },
      signup:{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: 28
      }
});

export default LoginScreen;
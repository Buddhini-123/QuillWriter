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
import { firebase, auth } from '../firebase';

const onRegisterPress = () => {
    
    firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then((response) => {
            const uid = response.user.uid
            const data = {
                id: uid,
                email,
                fullName,
            };
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .set(data)
                .then(() => {
                    navigation.navigate('Home', {user: data})
                })
                .catch((error) => {
                    Alert(error)
                });
        })
        .catch((error) => {
            Alert(error)
    });
}

const RegistrationScreen = ({navigation}) => {

    const [userData,setUserData] = useState({
        name:'',
        email:'',
        password: ''
      })
    
      const handleInputFields=(name,value)=>{
        console.log([name,value]);
        setUserData({...userData,[name]:value})
      }

  return (
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.mainView}>
            <Text style={styles.maintitle}>Create Account,</Text>
            <Text style={styles.maintitle1}>Sign up to get started!</Text>

            <TextInput  style={styles.textInput} onChangeText={value=>handleInputFields("name",value)} placeholder="Fullname" placeholderTextColor="#899499" >
            </TextInput> 
            <TextInput  style={styles.textInput} onChangeText={value=>handleInputFields("email",value)} placeholder="Email ID" placeholderTextColor="#899499">
            </TextInput>
            <TextInput  style={styles.textInput} onChangeText={value=>handleInputFields("password",value)} placeholder="Password" secureTextEntry={true} placeholderTextColor="#899499" >
            </TextInput>
            <TouchableOpacity onPress={() => onRegisterPress()}>
                <LinearGradient
                colors= {['#008000', '#4CBB17', '#B4C424']}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.buttonClickMe}
                ><Text style={styles.buttonText}>Sign Up</Text>
                </LinearGradient>
            </TouchableOpacity>
            

            <View style={styles.signup}>
                <View><Text style={styles.subText}>I'm already a member.</Text>
                </View>
                <TouchableOpacity><Text style={styles.subText1} onPress={() => navigation.navigate('Login Screen')}>Sign in</Text></TouchableOpacity>
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

export default RegistrationScreen;
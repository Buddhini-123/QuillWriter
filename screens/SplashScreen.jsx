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



const SplashScreen = ({navigation}) => {

  return (
      <ScrollView showsVerticalScrollIndicator={true}>
        <Text style={styles.label}>hhhh</Text>
      </ScrollView>

  );
}

const styles = StyleSheet.create({
    label: {
        color: 'black'
      },
});



export default SplashScreen;
import React from 'react'
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native'
import Form from '../../components/Form/Index'
import Title from '../../components/Title'
import { useIsFocused } from '@react-navigation/native';

function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
  
    return isFocused ? <StatusBar {...props} /> : null;
  }

export default function Imc(){
    return(
        <SafeAreaView style={styles.container}>
            <FocusAwareStatusBar barStyle="light-content" backgroundColor="" />
            <Title></Title>
            <Form></Form>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e0e5e5',
      paddingTop:80,
    },
    headerStyle: {
        height: 80, // Specify the height of your custom header
      }
  });
  <SafeAreaView style={styles.container}>

  </SafeAreaView>
  
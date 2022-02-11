import React from 'react'
import FormBf from '../../components/FormBf/index'
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native'

export default function BodyFat(){
    return(
        <SafeAreaView style={styles.container}>
            <FormBf></FormBf>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e0e5e5',
    },
  });

  
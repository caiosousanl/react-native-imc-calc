import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Title from './src/components/Title';
import Form from './src/components/Form/Index';

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <Title/>
      <Form/>
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e5e5',
    paddingTop:80,
  },
});

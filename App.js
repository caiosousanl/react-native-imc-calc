import { StatusBar, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from '@expo/vector-icons/Ionicons'
import Imc from './src/pages/Imc/'
import BodyFat from './src/pages/BodyFat/'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      
      
      screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Imc') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'BodyFat') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={'bar-chart-outline'} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen 
        name="Imc" 
        component={Imc}
        options={{
          headerStyle:{
              backgroundColor:"#c0c5c5",
              height:0
          }
          
        }}/>
        <Tab.Screen name="BodyFat" component={BodyFat}/>
      </Tab.Navigator>
    </NavigationContainer>
    
  );
}



{/* 
      <Title/>
      <Form/>
      
    </SafeAreaView> */}
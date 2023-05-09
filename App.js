import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Display from './components/displayTask';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Input, Card, ListItem, Button, Icon } from 'react-native-elements';

const Contact = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Hello, please contact me at the following...</Text>
      <Card>
          <Card.Title>
              Contact Info
          </Card.Title>
          <Card.Divider />
          <Text>jskate@gmail.com</Text>
      </Card>
  </View>
  )
};

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Icon
        name='sc-telegram'
        type='evilicon'
        color='#517fa4'
        size={130}
        onPress={() => console.log('hello')}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={Display} />
        <Stack.Screen name='Contact' component={Contact} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'tan',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

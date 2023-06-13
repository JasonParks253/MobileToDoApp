import { Input, Card, ListItem, Button, Icon } from 'react-native-elements';
import { StyleSheet, Text, View, Image } from 'react-native';
import React, {useState} from 'react';

export const HomeScreen = ({ navigation }) => {
    const [titleText, setTitleText] = useState("Task Manager");

    const onPressTitle = () => {
        if(titleText === "Task Manager") {
            setTitleText("Task-inator");
        } else if (titleText === "Task-inator") {
            setTitleText("Gotcha!")
        } else {
            setTitleText("Task Manager")
        }
      };

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#085F9B' }}>
        <Text style={styles.title} onPress={onPressTitle}>{titleText}</Text>
        <Image 
           style={styles.logo}
           source={require('../assets/clockglicth.png')}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    logo: {
        width: 500,
        height: 500,
        borderRadius: 5,
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',

    }
  });
import { Input, Card, ListItem, Button, Icon } from 'react-native-elements';
import { StyleSheet, Text, View, Image } from 'react-native';

export const HomeScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hello</Text>
        <Image 
           style={styles.logo}
           source={require('../assets/cats.png')}
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
        
    },
  });
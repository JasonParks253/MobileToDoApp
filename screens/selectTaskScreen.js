import { Input, Card, ListItem, Button, Icon } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';

export const Details = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Icon
          name='sc-telegram'
          type='evilicon'
          color='#517fa4'
          size={130}
          onPress={() => console.log('hello')}
        />
        <Text>Hello, please contact me at the following...</Text>
        <Card style={styles.card}>
            <Card.Title>
                Contact Info
            </Card.Title>
            <Card.Divider />
            <Text>jskate.parks@gmail.com</Text>
        </Card>
      </View>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'tan',
        alignItems: 'center',
        justifyContent: 'center',
    },
    card: {
        flex: 1,
        backgroundColor: 'gray',
        color: 'white',
    }
});

export default Details;
import { Input, Card, ListItem, Button, Icon } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';

export const Contact = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#085F9B' }}>
        <Text>Hello, please contact me at the following...</Text>
        <Card style={styles.card}>
            <Card.Title>
                Contact Info
            </Card.Title>
            <Card.Divider />
            <Text>jskate.parks@gmail.com</Text>
        </Card>
    </View>
    )
  };

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

export default Contact;
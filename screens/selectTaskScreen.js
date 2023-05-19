import { Input, Card, ListItem, Button, Icon } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';

export const Details = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: 'center',backgroundColor: '#12C6B5' }}>
        <View style={{ alignItems: 'center', marginTop: 30, paddingTop: 30 }}>
            <Icon
            name='sc-telegram'
            type='evilicon'
            color='#517fa4'
            size={130}
            onPress={() => console.log('hello')}
            />
        </View>
       <View  style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}>
            <Card style={styles.card}>
                <Card.Title>
                    Contact Info
                </Card.Title>
                <Card.Divider />
                <Text>Hello, please contact me at the following...</Text>
                <Text>Email: jskate.parks@gmail.com</Text>
                <Text></Text>
            </Card>
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}>
            <Card style={styles.card}>
                <Card.Title>
                    About this App
                </Card.Title>
                <Card.Divider />
                <Text>This application was design to be a task to do app. The key features are a input that allows the user to 
                    enter a task and than submit it. The screen will populate with the new task displaying below the task input. 
                    The user can interact with the tasks with additional features like editing the task, deleting the task, and mark 
                    that it is complete. When the task complete icon is push the icon will fill in with a check mark. Swiping left on the 
                    task will bring up the delete button. Clicking on the penicl icon will let the user edit the task. Other features and 
                    display options will be added on later. This is a beta project for learning react-native. 
                </Text>
            </Card>
        </View>
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
        justifyContent: 'center'
    }
});

export default Details;
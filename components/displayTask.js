import { Input, Card, ListItem, Button, Icon } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const onSubmitTask = () => {
    const dispatch = useDispatch();

    const newTask = {
        task
    };
    dispatch(onSubmitTask(newTask))
    console.log('Button pushed');
};


export const Display = ({ navigation }) => {
    const [task, setTask] = useState('');

    return (
        <View>
            <Card>
                <View style={{margin: 10}}>
                    <Icon 
                        type='font-awesome'
                        name='group'
                        size={50}
                        onPress={() => navigation.navigate('Contact')}
                    />
                </View>
                <View style={{margin: 10}}>
                    <Icon 
                        type='font-awesome'
                        name='cube'
                        size={50}
                        onPress={() => navigation.navigate('Details')}
                    />
                </View>
            </Card>
            <Card style={styles.cardRow}>
                <Card.Title>Orginize yourself...</Card.Title>
                <Card.Divider />
                <Text>Add Your Task:</Text>
                <Input 
                    placeholder='Enter Task'
                    leftIcon={{ 
                        type: 'font-awesome',
                        name: 'pencil'
                    }}
                />
                <Button style={styles.Button}
                    title={'Click to Submit'}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    icon={{
                        name: 'arrow-right',
                        type: 'font-awesome',
                        size: 15,
                        color: 'white',
                    }}
                    iconRight
                    iconContainerStyle={{
                        marginLeft: 10,
                        marginRight: -10
                    }}
                    raised
                    onPress={() => {
                        onSubmitTask(task);
                        console.log('button pushed')
                    }}
                />
            </Card>
            
        </View>
    )
};

const styles = StyleSheet.create({
    Button: {
        backgroundColor: 'green',
        color: 'green'
    },
    cardRow: {
        backgroundColor: 'tan'
    }
})
export default Display;
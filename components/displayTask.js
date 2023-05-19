import { Input, Card, ListItem, Button, Icon } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


export const Display = ({ navigation }) => {
    const [task, setTask] = useState('');

    const onSubmitTask = () => {
        setTask('hello')
        return (
            <Card>
                {setTask}
            </Card>
        )
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#12C6B5' }}>
            <Card style={styles.cardRow}>
                <Card.Title>Orginize yourself...</Card.Title>
                <Card.Divider />
                <Text>Add Your Task:</Text>
                <Input 
                    placeholder='Enter Task...'
                    leftIcon={{ 
                        type: 'font-awesome',
                        name: 'pencil',
                        marginRight: 10,
                        color: 'orange'
                    }}
                    
                />
                <Button 
                    title={'Add'}
                    containerStyle={{
                        width: 200,
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    icon={{
                        name: 'plus',
                        type: 'font-awesome',
                        size: 15,
                        color: 'white',
                    }}
                    iconLeft
                    iconContainerStyle={{
                        marginLeft: -10,
                        marginRight: 10
                    }}
                    raised
                    onPress={() => {
                        onSubmitTask();
                        console.log('button pushed')
                    }}
                />
            </Card>
            <Text>{task}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    Button: {
        color: 'green'
    },
    cardRow: {
        backgroundColor: 'tan'
    }
})
export default Display;
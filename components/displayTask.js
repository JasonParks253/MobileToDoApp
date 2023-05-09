import { Input, Card, ListItem, Button, Icon } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import onSubmitTask from './onSubmitTask';

export const Display = () => {
    const [task, setTask] = useState('');

    return (
        <View>
            <Card>
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
                <Button 
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
                        onSubmitTask();
                        console.log('button pushed')
                    }}
                />
            </Card>
            <Button
                title='Contact'
                onPress={() => navigation.navigate('Contact')}
            />
             <Button
                title='Details'
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    )
};


export default Display;
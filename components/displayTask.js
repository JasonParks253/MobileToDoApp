import { Input, Card, ListItem, Button, Icon } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';



export const Display = ({ navigation }) => {
    const [task, setTask] = useState('');
    const [list, setList] = useState([]);

    const onSubmitTask = (value) => {
        setList([...list, value])
        return (
            <Text>
                {setList}
            </Text>
        )
    };

    const Update = () => {
        return (
            <View style={{padding: 10}}>
                <Input
                    style={{height: 40}}
                    placeholder='Enter Task here...'
                    onChangeText={newItem => setTask(newItem)}
                    defaultValue={task}
                    keyboardAppearance="dark"
                />
                <Text style={{padding: 10, fontSize: 30}}>
                    {task}
                </Text>
            </View>
        );
    };

    const taskButton = () => {
        return (
            <Button
                title={'Add'}
                containerStyle={{
                    width: 200,
                    marginHorizontal: 50,
                    marginVertical: 10,
                }}
                buttonStyle={{ backgroundColor: 'darkred' }}
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
                    onSubmitTask(task);
                    console.log('button pushed');
                    console.log(task);
                }}
            />
        )
    }
    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#085F9B' }}>
            <Card style={styles.cardRow}>
                <Card.Title>Orginize yourself...</Card.Title>
                <Card.Divider />
                <Text>Add Your Task:</Text>
                {Update()}
                {taskButton()}
            </Card>
            <View>
                {list.map((item, index) => (
                    <Text style={{ padding: 10, fontSize: 30 }} key={index}>{item}</Text>
                ))}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    cardRow: {
        backgroundColor: 'tan'
    }
})
export default Display;



/* <Input
        placeholder='Enter Task...'
        leftIcon={{
            type: 'font-awesome',
            name: 'pencil',
            marginRight: 10,
            color: 'orange'
        }}
        value={Input}
        onChangeText={(Input) => {
                const update = this.setState(Input)
                console.log(Input)
                return(update)
            }
        }
    /> 
    
    
    #054775*/
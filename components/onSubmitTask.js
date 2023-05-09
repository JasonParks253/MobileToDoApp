import { Input, Card, ListItem, Button, Icon } from 'react-native-elements';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { submitTask } from './submitTask';

const onSubmitTask = () => {
    const dispatch = useDispatch();

    const newTask = {
        task
    };
    dispatch(submitTask(newTask))
    console.log('Button pushed');
};

export default onSubmitTask;
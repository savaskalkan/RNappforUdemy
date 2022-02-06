import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { useDispatch, useSelector } from "react-redux";
import { SetName } from "../redux/action";

export default HomeScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const {GeneralResponse} = useSelector(state=>state)
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'lightgray',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Welcome Home Screen</Text>
      <Text>Name: {GeneralResponse.name} Age: {GeneralResponse.age}</Text>
      <TextInput
        style={{
          width: 200,
          height: 50,
          borderWidth: 1,
          borderColor: 'white',
          padding: 7,
        }}
        placeholder="What is your Name?"
        value={GeneralResponse.name}
        onChangeText={(text)=> dispatch(SetName(text))}
      />
      <Button
        title="Go to Details Screen"
        onPress={() => navigation.navigate('DetailsScreen')}
      />
    </View>
  );
};

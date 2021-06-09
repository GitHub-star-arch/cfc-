import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default class WelcomeScreen extends React.Component {

    render() {
        return (
            <View>
                <Text>
                    Sign Up
                </Text>
                <TextInput placeholder="Name" />
                <TextInput placeholder="Email" />
                <TextInput placeholder="UserName" />
                <TextInput placeholder="Password" />
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AppTabNavigator')}} ><Text>Sign In</Text></TouchableOpacity>
                <Text>
                    Log In
                </Text>
                <TextInput placeholder="UserName" />
                <TextInput placeholder="Password" />
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('AppTabNavigator')}} ><Text>Sign In</Text></TouchableOpacity>
            </View>
        );
      }

}
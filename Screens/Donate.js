import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class DonateScreen extends React.Component {

    render() {
        return (
            <View>
                <Text>
                    Donate
                </Text>
                <TextInput placeholder="Email" />
                <TextInput placeholder="Amount" />
                <TextInput placeholder="Note" />
            </View>
        );
      }

}
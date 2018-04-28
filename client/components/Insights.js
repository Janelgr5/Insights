import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button, FlatList } from 'react-native';

export default class Navbar extends Component {
    constructor(props){
        super(props);
        this.state = {
            topic: "Topic:",
        }
    }
    render(){
        return (
            <View>
                <Text>My Insights</Text>
                <Text>Love/Like/Okay/Dislike/Hate</Text>
                <TextInput
                    onChangeText={topic => this.setState({topic})}
                    value={this.state.topic}
                />
                <FlatList
                    data={[{key: "hello"}, {key: "world"}, {key: "goodbye"}]} 
                    renderItem={item => <Text>{item.key}</Text>}
                />
            </View>
        )
    }
}

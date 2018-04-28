import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'Email',
            password: 'Password'
        }
    }
    
    render(){
        return (
            <View>
                <Text>Analyze</Text>
                <Button 
                    onPress={() => console.log("text button pressed")}    
                    title="Text"
                />
                <Button 
                    onPress={() => console.log("picture button pressed")}    
                    title="Picture"
                />
                <Button 
                    onPress={() => console.log("video button pressed")}    
                    title="Video"
                />
                <Button 
                    onPress={() => console.log("audio button pressed")}    
                    title="Audio"
                />
                <Button 
                    onPress={() => console.log("all insights button pressed")}    
                    title="My Insights"
                />
            </View>
        )
    }
}
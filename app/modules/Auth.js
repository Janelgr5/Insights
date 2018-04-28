import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet, Button } from 'react-native';

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
                <Image
                    style={{width: 100, height: 50}}
                    source={{uri: "https://www.insights.uca.org.au/wp-content/uploads/2016/02/logo_2016.png"}} 
                />
                <TextInput 
                    onChangeText={email => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput 
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                />
                <Button 
                    onPress={() => console.log("button pressed")}    
                    title="Login"
                />
            </View>
        )
    }
}

import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Octicons'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    
    render(){
        return (
            <View>
                <TextInput 
                    placeholder="Email"
                    onChangeText={email => this.setState({email})}
                    value={this.state.email}
                />
                <TextInput 
                    placeholder="Password"
                    onChangeText={password => this.setState({password})}
                    value={this.state.password}
                />
                <Button 
                    title="Login"
                    onPress={() => console.log("login button pressed")}
                    iconRight={
                        <Icon 
                            name='sign-in'
                            size={15}
                        />
                    }
                    buttonStyle={{
                        backgroundColor: 'purple'
                    }}
                />
            </View>
        )
    }
}

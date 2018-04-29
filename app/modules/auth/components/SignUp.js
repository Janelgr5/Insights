import React, { Component } from 'react';
import { View, Image, StyleSheet, TextInput } from 'react-native';
import { Button, Icon } from 'react-native-elements';

export default class SignUp extends Component {
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
                    title="Sign-up"
                    onPress={() => console.log("sign-up button pressed")}
                    iconLeft={
                        <Icon 
                            name="email"
                            type="material-community"
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
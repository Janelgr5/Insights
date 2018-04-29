import React, { Component } from 'react';
import { View, Image, TextInput, StyleSheet } from 'react-native';
import Login from './auth/components/Login'
import SignUp from './auth/components/SignUp'

export default class Auth extends Component {
    render(){
        return (
            <View>
                <Image
                    style={{width: 100, height: 50}}
                    source={{uri: "https://www.insights.uca.org.au/wp-content/uploads/2016/02/logo_2016.png"}} 
                />
                <Login />
                <SignUp />
            </View>
        )
    }
}

//BASIC FUNCTIONALITY:
    //render login
    //redirect user to home screen

//If user exists, render signup page. otherwise render login page.
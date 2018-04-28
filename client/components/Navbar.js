import React, { Component } from 'react';
import { View, Image, StyleSheet, Button } from 'react-native';

export default class Navbar extends Component {
    
    render(){
        return (
            <View>
                <Image
                    style={{width: 100, height: 50}}
                    source={{uri: "https://www.insights.uca.org.au/wp-content/uploads/2016/02/logo_2016.png"}} 
                />
                <Button 
                    onPress={() => console.log("logout button pressed")}    
                    title="Logout"
                />
            </View>
        )
    }
}

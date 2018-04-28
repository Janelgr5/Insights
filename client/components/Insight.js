import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, Button } from 'react-native';

export default class Insight extends Component {
    
    render(){
        return (
            <ScrollView>
                <Text>My Insights</Text>
                <Text>Love:</Text>
                <Text>Like:</Text>
                <Text>Okay:</Text>
                <Text>Dislike:</Text>
                <Text>Hate:</Text>
                <Text>Topics:</Text>
                <Button 
                    onPress={() => console.log("save button pressed")}    
                    title="Save"
                />
                <Button 
                    onPress={() => console.log("delete button pressed")}    
                    title="Delete"
                />
                <Button 
                    onPress={() => console.log("all insights button pressed")}    
                    title="All Insights"
                />
            </ScrollView>
        )
    }
}

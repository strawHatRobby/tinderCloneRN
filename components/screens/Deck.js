import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, View, Animated, TouchableOpacity } from 'react-native';


export default class Deck extends Component {
    
    constructor(props){
    super(props);
 
      
    this.state = {
        
    }

   
  }

  renderCards = () => {
    return this.props.data.map((item) => {
       return this.props.renderCard(item);
    }); 
}
  
	render(){
          
		return(
			<ScrollView style={{flex:1, height: "100%", width:"100%"}}>
                {this.renderCards()}
			</ScrollView>
			)
	}
}

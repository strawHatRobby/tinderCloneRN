import React, { Component } from 'react';
import { Animated, TouchableWithoutFeedback, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Home extends Component {
    
    constructor(props){
    super(props);
    toggle = false;
    this.state = {
        
    }
  }

  componentWillMount(){
    this.position = new Animated.ValueXY(0,0);
  }
 
  moveDown = () => {
    if(this.toggle){
    this.toggle = !this.toggle
    Animated.spring(this.position,{
        toValue: {x:200, y:500}
    }).start();
    }
    else{
        this.toggle = !this.toggle
        Animated.spring(this.position,{
            toValue: {x:0, y:0}
        }).start();
    }
  }
	render(){
		return(
    <Animated.View style={this.position.getLayout()}>
    <TouchableWithoutFeedback onPress={this.moveDown}>
     <View  style={{ backgroundColor:"#f00", height: 100, width: 100, justifyContent: "center", alignItems: "center", borderRadius:100}}>
     
            <Text style={{color:"#fff"}}>Hello</Text>
    
     </View>
     </TouchableWithoutFeedback>
     </Animated.View>

			)
	}
}

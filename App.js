import React from 'react';
import { StyleSheet, Image, ScrollView, Text, View } from 'react-native';
import Home from './components/screens/Main';
import Login from './components/screens/Login';
import Deck from './components/screens/Deck';
import { Button, Card } from 'react-native-elements';

const DATA = [
  { id: 1, text: 'Gretchen', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'TJ', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Spineley', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Mikey', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Guss', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Vince', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Randall', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Grotque', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];


export default class App extends React.Component {
  renderCard = (item) => {
    return(
      <Card key={item.id} 
        title={item.text}
        image={{uri: item.uri}}
      >
     <Button icon={{name: 'bookmark'}} title={"Follow"} backgroundColor="#03A9F4" />
      </Card>
    )
  }
  render() {
    return (
      <View style={styles.container}>
        <Deck data={DATA} renderCard={this.renderCard}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:"10%",
    marginLeft: "5%",
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});

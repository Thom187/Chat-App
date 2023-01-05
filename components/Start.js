import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' }
  }
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/background-image.png')}
          style={[styles.container, styles.image]}
        >
          <Text style={styles.title}>App Title</Text>
          <TextInput
            style={{ height: 40, margin: 1, borderColor: 'grey', borderWidth: 1 }}
            onChangeText={(name) => this.setState({ name })}
            value={this.state.name}
            placeholder='Choose your Username' />
          <Button
            title="Start Chat"
            onPress={() => this.props.navigation.navigate('Chat', { name: this.state.name })} />
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  title: {
    fontSize: 45,
    fontWeight: '600',
    color: '#fff'
  }
})
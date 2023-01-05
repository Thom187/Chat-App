import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class Start extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '' }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>App Title!</Text>
        <TextInput
          style={{ height: 40, margin: 1, borderColor: 'grey', borderWidth: 1 }}
          onChangeText={(name) => this.setState({ name })}
          value={this.state.name}
          placeholder='Choose your Username' />
        <Button
          title="Start Chat"
          onPress={() => this.props.navigation.navigate('Chat', { name: this.state.name })} />
      </View>
    )
  }
}
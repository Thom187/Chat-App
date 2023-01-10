import React from 'react';
import { View, Text, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat, Bubble } from 'react-native-gifted-chat';

const firebase = require('firebase');
require('firebase/firestore');

export default class Chat extends React.Component {

  constructor() {
    super();
    this.state = {
      messages: [],
    }

    // Firebase configuration to connect to Firestore
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: 'AIzaSyBmkpq7GKVxbHFwM8YO0yxXmvhXLyJ8WKs',
        authDomain: 'chat-app-c714a.firebaseapp.com',
        projectId: 'chat-app-c714a',
        storageBucket: 'chat-app-c714a.appspot.com',
        messagingSenderId: '586303774193',
        appId: '1:586303774193:web:364d2d0b05aa71cad73850'
      });
    }

    // Create a reference to 'messages' collection in firebase
    this.referenceChatMessages = firebase.firestore().collection('messages');
  }

  componentDidMount() {
    let name = this.props.route.params.name;
    this.props.navigation.setOptions({ title: name });

    // set messages state with a static message to see UI elements
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hey developer',
          // Add a timestamp
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
        {
          _id: 2,
          text: 'You have entered the chat',
          createdAt: new Date(),
          // Define message as system message
          system: true,
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  // Define style of message bubbles 
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        // Set message bubble colour
        wrapperStyle={{
          left: {
            backgroundColor: '#fff'
          },
          right: {
            backgroundColor: '#dcf8c6'
          },
        }}
        // Set text colour
        textStyle={{
          right: {
            color: '#000'
          }
        }}
        // Set Timestamp text colour
        timeTextStyle={{
          right: {
            color: '#000'
          }
        }}
      />
    )
  }

  render() {
    let color = this.props.route.params.color;
    return (
      <View style={[styles.container, { backgroundColor: color }]}>
        <GiftedChat
          renderBubble={this.renderBubble.bind(this)}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
          accessible={true}
          accessibilityLabel='Text message input field'
          accessibilityHint='You can type your message in here. Once ready you can send your message by pressing the button on the right.'
        />
        {
          Platform.OS === 'android' ? <KeyboardAvoidingView behavior='height' /> : null
        }

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

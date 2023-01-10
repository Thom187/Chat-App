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
      uid: 0,
      user: {
        _id: '',
        avatar: '',
        name: ''
      }
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

    this.authUnsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
      this.setState({
        uid: user.uid,
        messages: [],
      });
      this.unsubscribe = this.referenceChatMessages
        .orderBy('createdAt', 'desc')
        .onSnapshot(this.onCollectionUpdate);
    });

    this.setState({
      messages: [
        {
          _id: 2,
          text: `${name} has entered the chat`,
          createdAt: new Date(),
          // Defines message as system message
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

  onCollectionUpdate = (querySnapshot) => {
    const messages = [];
    // Go through each document
    querySnapshot.forEach((doc) => {
      // Get the QUeryDocumentSnapshot's data
      let data = doc.data();
      messages.push({
        _id: data._id,
        text: data.text,
        createdAt: data.createdAt.toDate(),
        user: {
          _id: data.user._id,
          name: data.user.name,
          avatar: data.user.avatar || ''
        },
      });
    });
    this.setState({
      messages,
    });
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

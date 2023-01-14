# Chat App

A chat app for mobile devices using React Native. The app will
provide users with a chat interface and options to share images and their
location.

## Built With

- JavaScript
- React Native
- Expo
- Google Firestore Database

## Links

[GitHub repository Link](https://github.com/Thom187/chat-app)


## My Role

Full-Stack Web Developer


## User Stories

- As a new user, I want to be able to easily enter a chat room so I can quickly start talking to my
friends and family

- As a user, I want to be able to send messages to my friends and family members to exchange
the latest news.

- As a user, I want to send images to my friends to show them what I’m currently doing.

- As a user, I want to share my location with my friends to show them where I am.

- As a user, I want to be able 
to read my messages offline so I can reread conversations at any
time.

- As a user with a visual impairment, I want to use a chat app that is compatible with a screen
reader so that I can engage with a chat interface.


## Features

- A page where users can enter their name and choose a background color for the chat screen
before joining the chat.

- A page displaying the conversation, as well as an input field and submit button.

- The chat must provide users with two additional communication features: sending images
and location data.

- Data gets stored online and offline.

## Setting up development environment

- Install [Expo CLI](https://expo.io): `npm install expo-cli -g` <br> and login with your Expo account using `expo login`

- Use `npm i`to install necessary project dependencies

- Install the Expo App from your mobile devices App-/Playstore for testing or


- Install <br> [Android Studio](https://developer.android.com/studio) or <br> [XCode](https://developer.apple.com/xcode/) <br> to emulate mobile devices for testing

## Setting up your Database

- Sign in at [Google Firebase](https://firebase.google.com/).

- Create a new project (you can use start in test mode)

- In your project run `npm install firebase` to install Firestore/Firebase, then import it in your project 
```javascript
const firebase = require('firebase');
require('firebase/firestore');
```

- In Firestore generate your configuration object. Click 'Settings' -> 'General' -> 'Your apps' -> 'Firestore for Web' <br> and copy your configuration to your project


## Dependencies

```json
    "@expo/react-native-action-sheet": "^4.0.1",
    "@react-native-async-storage/async-storage": "~1.17.3",
    "@react-native-community/masked-view": "^0.1.11",
    "@react-native-community/netinfo": "9.3.5",
    "@react-navigation/native": "^6.1.1",
    "@react-navigation/stack": "^6.3.10",
    "expo": "~47.0.9",
    "expo-permissions": "^14.0.0",
    "expo-status-bar": "~1.4.2",
    "firebase": "^8.10.1",
    "react": "18.1.0",
    "react-native": "0.70.5",
    "react-native-gesture-handler": "~2.8.0",
    "react-native-gifted-chat": "^1.1.0",
    "react-native-maps": "^1.3.2",
    "react-native-reanimated": "~2.12.0",
    "react-native-safe-area-context": "4.4.1",
    "react-native-screens": "~3.18.0",
    "react-navigation": "^4.4.4",
    "expo-image-picker": "~14.0.2",
    "expo-location": "~15.0.1"
```
        
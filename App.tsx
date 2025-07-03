/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import React, { useEffect, useRef, useState } from 'react';
import { Animated, StatusBar, StyleSheet, useColorScheme, View, TextInput, useAnimatedValue } from 'react-native';

function App() {
  const [text, setText] = React.useState('제목 없는 설문지');
  const [content, setContent] = React.useState('');
  const [a, setA] = useState(true);

  const [activeBorder, setActiveBorder] = React.useState({
    titleBorder: false,
    contentBorder: false,
  });

  const { titleBorder, contentBorder } = activeBorder;

  const titlebortherAnim = useRef<Animated.Value>(new Animated.Value(0));
  const contentborderAnim = useRef<Animated.Value>(new Animated.Value(0));

  const handleUnderLine = (border: string) => {
    setActiveBorder({
      ...activeBorder,
      [border]: true,
    });
  };

  const titleBorderIncrease = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(titlebortherAnim.current, {
      toValue: 1,
      duration: 200,
      // true might not work with the all properties that you need to animate. true might improve animation performance
      useNativeDriver: false,
    }).start();
  };

  const contentBorderIncrease = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(contentborderAnim.current, {
      toValue: 1,
      duration: 200,
      // true might not work with the all properties that you need to animate. true might improve animation performance
      useNativeDriver: false,
    }).start();
  };

  const resetAnimation = () => {
    titlebortherAnim.current.setValue(0);
    contentborderAnim.current.setValue(0);
  };

  const handleFocus = () => {
    contentBorderIncrease();
    handleUnderLine('contentBorder');
  };

  return (
    <View style={styles.container}>
      <View style={{ backgroundColor: 'white', flex: 0.1 }} />

      <View style={{ backgroundColor: '#e0dbef', flex: 0.9 }}>
        <View style={styles.inputBox}>
          <TextInput
            style={[styles.input]}
            onChangeText={setText}
            value={text}
            keyboardType="default"
            textAlign="left"
            onFocus={() => [titleBorderIncrease(), handleUnderLine('titleBorder')]}
            onBlur={() => resetAnimation()}
          />
          <View style={[styles.borderContainer, { position: 'absolute', top: titleBorder ? 58 : 57 }]} />
          <Animated.View
            style={[
              styles.borderContainer,
              {
                width: titlebortherAnim.current.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', '90%'],
                }),
                backgroundColor: titleBorder ? '#8b00ff' : 'black',
                position: 'absolute',
                top: 57,
                height: titleBorder ? 3 : 1,
              },
            ]}
          />
          <TextInput
            style={[styles.input, { fontSize: 10 }]}
            onChangeText={setContent}
            value={content}
            placeholder="설문지 설명"
            keyboardType="default"
            textAlign="left"
            onFocus={handleFocus}
            onBlur={() => resetAnimation()}
          />
          <View style={[styles.borderContainer, { position: 'absolute', top: contentBorder ? 138 : 137 }]} />
          <Animated.View
            style={[
              styles.borderContainer,
              {
                width: contentborderAnim.current.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0%', '90%'],
                }),
                backgroundColor: contentBorder ? '#8b00ff' : 'black',
                position: 'absolute',
                top: 137,
                height: contentBorder ? 3 : 1,
              },
            ]}
          />
        </View>
      </View>

      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <NewAppScreen templateFileName="App.tsx" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 55,
    margin: 12,
    padding: 10,
    fontSize: 25,
  },
  inputBox: {
    flex: 0.2,
    borderLeftWidth: 10,
    margin: 12,
    backgroundColor: 'white',
    borderLeftColor: 'blue',
    borderTopWidth: 10,
    borderTopColor: '#8b00ff',
    borderRadius: 10,
  },
  borderContainer: {
    bottom: 23,
    backgroundColor: '#000',
    height: 1,
    width: '90%',
    alignSelf: 'center',
  },
});

export default App;

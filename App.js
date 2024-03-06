/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={styles.sectionContainer}>
          <Text 
            style={styles.title}
          >
            {'Welcome to NFC App'}
          </Text>
          <Image
            style={styles.brandLogo}
            source={require('./images/brand-logo.jpeg')}
          />
          <Image
            style={styles.chipIcon}
            source={require('./images/chip-icon.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    // marginTop: 32,
    backgroundColor: 'white',
    paddingHorizontal: 24,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 50,
    fontSize: 44,
    fontWeight: '600',
    margin: 'auto',
    left: 0,
    right: 0,
    textAlign: 'center'
  },
  brandLogo: {
    marginTop: 100,
    width: 150,
    height: 150,
  },
  chipIcon: {
    marginTop: 100,
    width: 100,
    height: 100,
  },
});

export default App;

import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

export default function HomeScreen() {
return (
<View style={styles.container}>
<ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/1cat.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.welcomeImage}
          />
        </View>
	
	<View style={styles.titleContainer}>
          <Image
            source={
              __DEV__
                ? require('../assets/images/4catal.png')
                : require('../assets/images/robot-prod.png')
            }
            style={styles.tileImage}
          />
        </View>

        <View style={styles.getStartedContainer}>
          <DevelopmentModeNotice />
          <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
          </View>

          <Text style={styles.getStartedText}>
	The information in this game has no intended relation to real individuals, groups, areas, incidents, or ideas.
	</Text>
        </View>

        <View style={styles.helpContainer}>
          <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
            <Text style={styles.helpLinkText}>@DOSS ENTERTAINMENT</Text> 
	</TouchableOpacity>
        </View>
      </ScrollView>
     </View>

  );
}


function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
	<Text style={styles.developmentModeText}>
         Development mode is enabled: your app will be slower but you can use useful development
         tools. {learnMoreButton}
       </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7a3',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 40,
  },
  welcomeImage: {
    width: 150,
    height: 120,
    resizeMode: 'contain',
    marginTop: 5,
  },
  titleContainer:{
    alignItems: 'center',
    marginTop: 15, 
  },
  titleImage: {
    width: 100,
    height: 30, 
    resizeMode: 'contain', 
    marginTop: 10, 
  }, 
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    marginTop: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 12,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 16,
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 25,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

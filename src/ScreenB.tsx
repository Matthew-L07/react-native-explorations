import React, {useEffect, useState} from 'react';
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {createApi} from 'unsplash-js';

const unsplash = createApi({
  accessKey: 'DSz2mZ12deBwjN_Kl3Fytl_-M96QiOjmvEjFJ7BqVkg',
});

export function ScreenB({navigation}) {
  const [backgroundImage, setBackgroundImage] = useState(null);

  useEffect(() => {
    unsplash.photos.getRandom({count: 1}).then(result => {
      if (result.errors) {
        console.error('Error fetching background image:', result.errors[0]);
      } else {
        setBackgroundImage(result.response[0].urls.regular);
      }
    });
  }, []);

  const goNextScreen = () => {
    navigation.navigate('Screen C');
  };
  const goScreen1 = () => {
    navigation.navigate('Screen B1');
  };
  const goScreen2 = () => {
    navigation.navigate('Screen B2');
  };
  const goScreen3 = () => {
    navigation.navigate('Screen B3');
  };
  return (
    <ImageBackground source={{uri: backgroundImage}} style={styles.screen}>
      <View style={styles.body}>
        <Button onPress={goNextScreen} title={'Go to Screen C'} />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity style={styles.button1} onPress={goScreen1}>
          <Text> Button 1 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button2} onPress={goScreen2}>
          <Text> Button 2 </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button3} onPress={goScreen3}>
          <Text> Button 3 </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export const ScreenB1 = () => {
  return (
    <View style={styles.body}>
      <Text>Screen B1</Text>
    </View>
  );
};

export const ScreenB2 = () => {
  return (
    <View style={styles.body}>
      <Text>Screen B2 </Text>
    </View>
  );
};

export const ScreenB3 = () => {
  return (
    <View style={styles.body}>
      <Text>Screen B3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flexDirection: 'row',
    marginBottom: 10,
    height: 30,
  },
  button1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff0000',
  },
  button2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00ff00',
  },
  button3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0000ff',
  },
});

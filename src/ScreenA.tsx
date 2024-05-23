import React, {useEffect, useRef, useState} from 'react';
import {
  Button,
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import {createApi} from 'unsplash-js';

const {width, height} = Dimensions.get('screen');

const unsplash = createApi({
  accessKey: 'DSz2mZ12deBwjN_Kl3Fytl_-M96QiOjmvEjFJ7BqVkg',
});

export function ScreenA({navigation}) {
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
    navigation.navigate('Screen B');
  };
  const goScreen1 = () => {
    navigation.navigate('Screen A1');
  };
  const goScreen2 = () => {
    navigation.navigate('Screen A2');
  };
  const goScreen3 = () => {
    navigation.navigate('Screen A3');
  };
  return (
    <ImageBackground source={{uri: backgroundImage}} style={styles.screen}>
      <View style={styles.body}>
        <Button onPress={goNextScreen} title={'Go to Screen B'} />
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

export const ScreenA1 = () => {
  return (
    <View style={styles.body}>
      <Text>Screen A1</Text>
    </View>
  );
};

export const ScreenA2 = () => {
  return (
    <View style={styles.body}>
      <Text>Screen A2</Text>
    </View>
  );
};

export const ScreenA3 = () => {
  const [images, setImages] = useState([]);
  const [currIndex, setCurrIndex] = useState(1);
  const ref = useRef(null);

  useEffect(() => {
    unsplash.photos.list({perPage: 10}).then(result => {
      if (result.errors) {
        console.error('Error fetching images:', result.errors[0]);
      } else {
        setImages(result.response.results.map(photo => photo.urls.regular));
      }
    });
  }, []);

  const onPressGoPage = index => {
    ref.current?.scrollTo({count: index - currIndex, animated: true});
    setCurrIndex(index);
  };

  const onPressNext = () => {
    if (ref.current != 9) {
      ref.current?.scrollTo({count: 1, animated: true});
      setCurrIndex(currIndex + 1);
    } else {
      ref.current?.scrollTo({count: -9, animated: true});
      setCurrIndex(1);
    }
  };

  return (
    <View style={styles.container}>
      <Carousel
        width={width}
        height={300}
        ref={ref}
        style={{flex: 1}}
        data={images}
        renderItem={({item, index}) => (
          <TouchableOpacity key={index} onPress={onPressNext}>
            <Image source={{uri: item}} style={styles.image} />
          </TouchableOpacity>
        )}
      />
      <ScrollView
        horizontal
        contentContainerStyle={styles.thumbnailContainer}
        showsHorizontalScrollIndicator={false}>
        {images.map((image, index) => (
          <TouchableOpacity key={index} onPress={() => onPressGoPage(index)}>
            <Image source={{uri: image}} style={styles.thumbnail} />
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  container: {
    flex: 1,
  },
  image: {
    width: width,
    height: height / 2,
    resizeMode: 'cover',
  },
  thumbnailContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  thumbnail: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
});

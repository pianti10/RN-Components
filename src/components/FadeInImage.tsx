import React from 'react';
import {useAnimation} from '../hooks/useAnimation';
import {Animated, View, ActivityIndicator} from 'react-native';
import {useState} from 'react';

interface Props {
  uri: string;
}

export const FadeInImage = ({uri}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          color="#5856D6"
          size={30}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={finishLoading}
        style={{
          width: '100%',
          height: 400,
          opacity,
        }}
      />
    </View>
  );
};
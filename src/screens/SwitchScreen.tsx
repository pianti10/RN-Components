import React, {useState} from 'react';
import {Platform, View} from 'react-native';
import {Switch} from 'react-native-gesture-handler';
import {HeaderTitle} from '../components/HeaderTitle';

export const SwitchScreen = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);

  return (
    <View style={{marginHorizontal: 20}}>
      <HeaderTitle title="Switches"/>

      <Switch
        trackColor={{false: '#D9D9DB', true: '#5856D6'}}
        thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};

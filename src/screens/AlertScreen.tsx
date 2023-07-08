import React from 'react';
import {View, Button, Alert} from 'react-native';
import {HeaderTitle} from '../components/HeaderTitle';
import {styles} from '../theme/appTheme';

const showAlert = () => {
  Alert.alert(
    'Titulo',
    'Este es el mensaje de la alerta',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'destructive',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {
      cancelable: true,
      onDismiss: () => console.log('onDismiss'),
    },
  );
};

export const AlertScreen = () => {
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Mostar alerta" onPress={showAlert} />
    </View>
  );
};

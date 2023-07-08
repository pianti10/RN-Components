import React from 'react';
import {View, Button, Modal, Text} from 'react-native';
import {styles} from '../theme/appTheme';
import {HeaderTitle} from '../components/HeaderTitle';
import {useState} from 'react';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal Screen" />

      <Button title="Abrir modal" onPress={() => setIsVisible(true)} />
      <Modal animationType="fade" visible={isVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            // width: 100,
            // height: 100,
            backgroundColor: 'rgba(0,0,0,0.3)',
          }}>
          <View
            style={{
              backgroundColor: 'white',
            }}>
            <HeaderTitle title="Modal" />
          </View>
          <Text>Cuerpo del modal</Text>
          <Button title="Cerrar" onPress={() => setIsVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

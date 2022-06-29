import React, {useState} from 'react';
import {StyleSheet, View, Button} from 'react-native';
import AnimatedLoader from 'react-native-animated-loader';

const Loader = () => {
  const [visible, setVisible] = useState(false);

  const handlePress = () => {
    setTimeout(() => {
      setVisible(!visible);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <AnimatedLoader
        visible={visible}
        overlayColor="#6cd2bc"
        animationStyle={styles.lottie}
        speed={1}
        source={require('../constants/photo.json')} 
      />
      <Button title="press" onPress={handlePress} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lottie: {
    width: 500,
    height: 500,
  },
});

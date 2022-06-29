import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ActivityScreen = () => {
  return (
    <View style={styles.likeContainer}>
      <Ionicons name="md-file-tray-outline" size={50} color={'#6cd2bc'}/>
      <Text style={styles.contentText}>Hey! It's empty here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  likeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#000'
  },
});

export default ActivityScreen;

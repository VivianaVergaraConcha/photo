import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Photo = ({post}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Post', {post});
      }}
      style={styles.item}>
      <Image
        source={{uri: post.image}}
        style={styles.item}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    aspectRatio: 1,
    width: '100%',
    flex: 1,
  },
});

export default Photo;

import {FlatList, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';
import Photo from '../components/Photo';

const Gallery = ({posts, fetchMoreData}) => {
  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        style={styles.list}
        numColumns={3}
        onEndReached={fetchMoreData}
        renderItem={({item}) => <Photo key={item.id} post={item}/>}
      />
    </SafeAreaView>
  );
};

export default Gallery;

const styles = StyleSheet.create({
  list: {
    width: '100%',
    backgroundColor: '#000',
  },
});

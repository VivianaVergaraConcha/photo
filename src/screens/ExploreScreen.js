import {View, Text, ScrollView, FlatList, StyleSheet,SafeAreaView, Image} from 'react-native';
import React, {useContext, useEffect} from 'react';
import Gallery from '../components/Gallery';
import {PostContext} from '../context/PostContext';

const ExploreScreen = () => {
  const {posts, fetchMoreData} = useContext(PostContext);
  
  return (
   <Gallery posts={posts} fetchMoreData={fetchMoreData}/>
  );
};

export default ExploreScreen;

import {SafeAreaView, FlatList} from 'react-native';
import React, {useContext} from 'react';
import {PostContext} from '../context/PostContext';

import Card from '../components/Card';

const FeedScreen = () => {
  const {posts, fetchMoreData} = useContext(PostContext);
  return (
    <SafeAreaView>
      <FlatList
        data={posts}
        numColumns={3}
        onEndReached={fetchMoreData}
        renderItem={({item}) => (
          <Card
            code={item.id}
            image={item.image}
            text={item.text}
            likes={item.likes}
            publishDate={item.publishDate}
            owner={item.owner}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default FeedScreen;

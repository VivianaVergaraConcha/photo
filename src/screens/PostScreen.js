import {View, ScrollView} from 'react-native';
import React from 'react';
import {useRoute} from '@react-navigation/native';
import Card from '../components/Card';

const Post = () => {
  const route = useRoute();
  const post = route.params.post;
  return (
    <ScrollView>
      <View>
        <Card
          key={post.id}
          code={post.id}
          image={post.image}
          text={post.text}
          likes={post.likes}
          publishDate={post.publishDate}
          owner={post.owner}
        />
      </View>
    </ScrollView>
  );
};

export default Post;

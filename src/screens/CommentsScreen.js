import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';

const CommentsScreen = () => {
  const [inputComment, setInputComment] = useState("");

  const inputHandler = (comment) => {
    setInputComment(comment);
  };

  const submitComment = () => {
    setInputComment("");
    Keyboard.dismiss();
  };

  return (
    <View style={{flex: 1}}>
      <ScrollView>
        <View style={{flex: 1}}>
          <Text>Comments!</Text>
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: '#e3e6e8',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom:50
        }}>
        <TextInput style={{width: '84%',}} value={inputComment}
        onChangeText={inputHandler} autoFocus={true} placeholder="Type here!"/>
        <TouchableWithoutFeedback onPress={submitComment}>
          <Text style={{color:'#FFF', backgroundColor:'#000', padding:15, borderRadius:5}}>Public</Text>
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default CommentsScreen;

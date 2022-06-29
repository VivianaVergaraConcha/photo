import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Card = ({
  code,
  image,
  text,
  likes,
  publishDate,
  owner
}) => {
  const [heartImage, setHeartImage] = useState('heart-outline');
  const [likesNumber, setLikesNumber] = useState(likes);
  const navigation = useNavigation();

  const likeHandler = () => {
    if (heartImage === 'heart-outline') {
      setHeartImage('heart-sharp');
      setLikesNumber(likesNumber + 1);
    } else {
      setHeartImage('heart-outline');
      setLikesNumber(likesNumber - 1);
    }
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.userContainer}>
        <Image source={{uri: owner.picture}} style={styles.photoPerfil} />
        <Text style={styles.namePerfil}>
          {owner.firstName.toLowerCase()}{owner.lastName.toLowerCase()}
        </Text>
      </View>
      <Image source={{uri: image}} style={styles.imagePost} />
      <View style={styles.containerButton}>
        <Ionicons
          name={heartImage}
          color={heartImage === 'heart-outline' ? '#000' : '#6cd2bc'}
          size={30}
          onPress={() => {
            likeHandler();
          }}
          style={styles.sizeIcon}
        />
        <Text style={styles.text}>{likesNumber}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Comments');
          }}
          style={styles.containerComment}>
          <Ionicons
            name="chatbubble-outline"
            color={'#000'}
            size={27}
            style={styles.sizeIcon}
          />
          <Text style={styles.text}>Comments</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.textPostContainer}>
        <Text style={styles.text}>{text}</Text>
        <Text style={styles.textDate}>
          {new Date(publishDate).toDateString()}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    alignItems: 'center',
    paddingTop: 5,
    paddingBottom: 15,
    margin: 5,
    backgroundColor: '#FFF',
    borderRadius: 5,
  },
  userContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
  },
  photoPerfil: {
    width: 35,
    height: 35,
    borderRadius: 20,
    marginRight: 5,
  },
  namePerfil: {
    fontWeight: 'bold',
    color: '#000'
  },
  imagePost: {
    width: 400,
    height: 400,
  },
  containerButton: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 5,
  },
  sizeIcon: {
    margin: 5,
  },
  containerComment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textPostContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    paddingRight: 10,
  },
  text:{
    color: '#000',
  },
  textDate:{
    fontSize: 11,
    color: '#a3a3a3',
  }
});

export default Card;

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import React, {useContext} from 'react';
import {ProfileContext} from '../context/ProfileContext';
import {useNavigation} from '@react-navigation/native';

const ProfileScreen = () => {
  const {user, posts} = useContext(ProfileContext);
  const navigation = useNavigation();

  return (
    <ScrollView style={{marginBottom: 26}}>
      <View style={styles.userContainer}>
        <Image source={{uri: user.picture}} style={styles.imageUser} />
        <View style={styles.infoContainer}>
          <Text style={styles.nameUser}>
            {user?.firstName} {user?.lastName}
          </Text>
          <Text style={styles.locationUser}>
            {user?.location?.city}, {user?.location?.country}
          </Text>
        </View>
      </View>
      <View style={styles.totalsContainer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalNumber}>{posts.total}</Text>
          <Text style={styles.totalName}>Posts</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalNumber}>132</Text>
          <Text style={styles.totalName}>Followers</Text>
        </View>
        <View style={styles.totalContainer}>
          <Text style={styles.totalNumber}>52</Text>
          <Text style={styles.totalName}>Following</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.textButton}>Edit profile</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.postsContainer}>
        {posts.data?.map(post => {
          return (
            <TouchableOpacity
              key={post.id}
              onPress={() => {
                navigation.navigate('Post', {post});
              }}>
              <Image
                source={{uri: post.image}}
                style={{width: 130, height: 130}}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  userContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  imageUser: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  infoContainer: {
    flexDirection: 'column',
    padding: 20,
  },
  nameUser: {fontWeight: 'bold', fontSize: 18, color: '#000'},
  locationUser: {color: '#a3a3a3'},
  totalsContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-around',
  },
  totalContainer: {
    alignItems: 'center',
  },
  totalNumber: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000',
  },
  totalName: {
    color: '#a3a3a3',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    padding: 15,
    backgroundColor: '#000',
    borderRadius: 5,
    width: '60%',
    alignItems: 'center',
  },
  textButton: {
    color: '#FFF',
  },
  postsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});

export default ProfileScreen;

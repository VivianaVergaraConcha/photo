import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useRef, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Camera, useCameraDevices} from 'react-native-vision-camera';
import {useNavigation} from '@react-navigation/native';

const CameraScreen = () => {
  const navigation = useNavigation();
  const cameraPermission = Camera.getCameraPermissionStatus();
  const microphonePermission = Camera.getMicrophonePermissionStatus();
  const newCameraPermission = Camera.requestCameraPermission();
  const newMicrophonePermission = Camera.requestMicrophonePermission();

  const camera = useRef();
  const [photo, setPhoto] = useState('');
  const [showBackCamera, setShowBackCamera] = useState(true);
  const devices = useCameraDevices();
  
  const device = showBackCamera === true ? devices.back : devices.front;

  if (device == null) return <View style={{backgroundColor: '#000'}}><Text style={{color:'#FFF', fontWeight:'bold'}}>Loading...</Text></View>;

  const doPhoto = async () => {
    const photoLocal = await camera.current.takeSnapshot({});
    setPhoto(photoLocal);
  };

  const changeCamera = async () => {
    setShowBackCamera(!showBackCamera);
  };

  return (
    <>
      {photo ? (
        <>
          <View
            style={{
              width: '100%',
              height: '90%',
              flexDirection: 'column',
            }}>
            <Image
              source={{uri: `file://, ${photo.path}`}}
              style={{height: '100%', width: '100%'}}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
                padding:10
              }}>
              <TouchableOpacity onPress={() => setPhoto('')}>
                <Ionicons
                  name="chevron-back"
                  size={50}
                  color={'#6cd2bc'}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ padding: 15,
                backgroundColor: '#000',
                borderRadius:10}}>
                <Text style={{color:'#FFF'}}>Post!</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : (
        <>
          <Camera
            ref={camera}
            photo={true}
            style={StyleSheet.absoluteFill}
            device={device}
            isActive={true}
          />
          <TouchableOpacity
            style={{
              height: '95%',
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignContent: 'center',
              alignItems: 'flex-end',
            }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                width: 90,
                height: 90,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
              }}>
              <Ionicons name="chevron-back" size={50} color={'#6cd2bc'} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={doPhoto}
              style={{
                width: 90,
                height: 90,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                borderRadius: 100,
                borderWidth: 9,
                borderColor: '#6cd2bc',
              }}></TouchableOpacity>

            <TouchableOpacity
              onPress={changeCamera}
              style={{
                width: 90,
                height: 90,
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
              }}>
              <Ionicons
                name="camera-reverse-outline"
                size={40}
                color={'#6cd2bc'}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </>
      )}
    </>
  );
};

export default CameraScreen;

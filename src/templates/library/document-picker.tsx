import React from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';

const MediaPicker = () => {
  const [media, setMedia] = React.useState(null);

  const handlePickMedia = () => {
    launchImageLibrary(
      {
        mediaType: 'mixed', // Para permitir imagens e vídeos
        selectionLimit: 1, // Limitar a seleção a um arquivo
      },
      (response) => {
        if (response.didCancel) {
          console.log('User cancelled image picker');
        } else if (response.errorCode) {
          console.log('ImagePicker Error: ', response.errorCode);
        } else {
          const selectedMedia = response.assets[0];
          setMedia(selectedMedia);
        }
      }
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Escolher Mídia" onPress={handlePickMedia} />
      {media && media.uri && (
        <View style={styles.mediaContainer}>
          {media.type.startsWith('image') ? (
            <Image source={{ uri: media.uri }} style={styles.image} />
          ) : media.type.startsWith('video') ? (
            <Text>Vídeo selecionado: {media.fileName}</Text>
          ) : (
            <Text>Arquivo selecionado: {media.fileName}</Text>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mediaContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});

export default MediaPicker;

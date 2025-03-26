import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { useState } from 'react';

import * as ImagePicker from 'expo-image-picker';

export default function HomeScreen() {
  const [mediaObject, setMediaObject] = useState<any>(null);

  const pickImage = async () => {
    const {assets} = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      preferredAssetRepresentationMode: ImagePicker.UIImagePickerPreferredAssetRepresentationMode.Current
    })

    if (!assets || assets.length === 0) {
      return;
    }

    console.log(assets[0])
    setMediaObject(assets[0])
  }
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Media Object</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Picked Asset</ThemedText>
        <ThemedText>
          {JSON.stringify(mediaObject)}
        </ThemedText>
      </ThemedView>
      <TouchableOpacity onPress={pickImage}>
        <ThemedView style={[styles.stepContainer, styles.button]}>
          <ThemedText type="subtitle" suppressHighlighting>Pick Image (Click Me)</ThemedText>
        </ThemedView>
      </TouchableOpacity>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  button: {
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#A1CEDC',
    alignItems: 'center',
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

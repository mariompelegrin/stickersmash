import { Text, View, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

const PlaceholderImage = require('@/assets/images/about-image.jpeg');

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.imageContainer} />
        <Text style={styles.text}>"Hey it's me!..... MARIO"</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#00ff66',
    position: 'absolute',
    top: '94%',
    left: '38%',
    transform: [{ translateX: -50 }, { translateY: -50 }],
    textAlign: 'center',
    fontSize: 26, 
  },
  imageContainer: {
    position: 'relative',
    width: 320,
    height: 440,
    overflow: 'hidden',
    borderRadius: 30,

  },
});

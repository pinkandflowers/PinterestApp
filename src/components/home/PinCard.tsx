import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { router } from 'expo-router';

type Pin = {
  id: string;
  title: string;
  image: string;
  height: number;
  author: string;
};

type PinCardProps = {
  pin: Pin;
};

export default function PinCard({ pin }: PinCardProps) {
  const openPin = () => {
    router.push(`/pin/${pin.id}`);
  };

  return (
    <Pressable onPress={openPin} style={styles.card}>
      <Image
        source={{ uri: pin.image }}
        style={[styles.image, { height: pin.height }]}
        resizeMode="cover"
      />

      <View style={styles.info}>
        <Text
          style={styles.title} numberOfLines={2}>
          {pin.title}
        </Text>

        <Text
          style={styles.author} numberOfLines={1}>
          {pin.author}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 10,
  },

  image: {
    width: '100%',
    borderRadius: 12,
  },

  info: {
    paddingTop: 7,
    paddingHorizontal: 3,
    paddingBottom: 4,
  },

  title: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111111',
  },

  author: {
    fontSize: 12,
    color: '#767676',
    marginTop: 3,
  },
});
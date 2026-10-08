import { Image, StyleSheet, View } from 'react-native';

import { COLORS } from '@/constants/colors';

type BoardPreviewProps = {
  largeImage: string;
  topImage: string;
  bottomImage: string;
};

export default function BoardPreview({
  largeImage,
  topImage,
  bottomImage,
}: BoardPreviewProps) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: largeImage }}
        style={styles.largeImage}
      />

      <View style={styles.smallColumn}>
        <Image
          source={{ uri: topImage }}
          style={styles.smallImage}
        />

        <Image
          source={{ uri: bottomImage }}
          style={styles.smallImage}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 150,
    flexDirection: 'row',
    gap: 3,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: COLORS.lightGray,
  },

  largeImage: {
    width: '66%',
    height: '100%',
  },

  smallColumn: {
    width: '34%',
    height: '100%',
    gap: 3,
  },

  smallImage: {
    width: '100%',
    height: '50%',
  },
});
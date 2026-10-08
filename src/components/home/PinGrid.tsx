import { StyleSheet, View } from 'react-native';
import PinCard from './PinCard';

type Pin = {
  id: string;
  title: string;
  image: string;
  height: number;
  author: string;
};

type PinGridProps = {
  pins: Pin[];
};

export default function PinGrid({ pins }: PinGridProps) {
  const leftColumn: Pin[] = [];
  const rightColumn: Pin[] = [];

  pins.forEach((pin, index) => {
    if
      (index % 2 === 0) {
        leftColumn.push(pin);
    }
    else {
      rightColumn.push(pin);
    }
  });

  return (
    <View style={styles.container}>
      <View
        style={styles.column}>
        {leftColumn.map((pin) => (
          <PinCard key={pin.id} pin={pin} />
        ))}
      </View>

      <View
        style={styles.column}>
        {rightColumn.map((pin) => (
          <PinCard key={pin.id} pin={pin} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
  },

  column: {
    flex: 1,
    gap: 10,
  },
});
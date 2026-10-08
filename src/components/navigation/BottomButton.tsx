import { Pressable, StyleSheet, Text } from 'react-native';

type BottomButtonProps = {
  title: string;
  onPress: () => void;
};

export default function BottomButton({
  title,
  onPress,
}:
  
BottomButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#E60023',
    paddingVertical: 13,
    paddingHorizontal: 25,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  pressed: {
    opacity: 0.7,
  },

  text: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
});
import { StyleSheet, TextInput, View, Text } from 'react-native';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function SearchBar({
  value,
  onChangeText,
}: SearchBarProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>⌕</Text>

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder="Search Pinterest"
        placeholderTextColor="#767676"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#F1F1F1',
    borderRadius: 25,
    paddingHorizontal: 16,
  },

  icon: {
    fontSize: 25,
    color: '#111111',
    marginRight: 8,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#111111',
  },
});
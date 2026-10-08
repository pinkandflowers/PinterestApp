import {
    Pressable,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  
  import { SymbolView } from 'expo-symbols';
  
  import { COLORS } from '@/constants/colors';
  
  export default function ProfileFilters() {
    return (
      <View style={styles.container}>
  
        {/* Sort */}
        <Pressable style={styles.button}>
  
          <SymbolView
            name="arrow.up.arrow.down"
            tintColor={COLORS.text}
            size={16}
          />
  
        </Pressable>
  
        {/* Group */}
        <Pressable style={styles.button}>
  
          <Text style={styles.text}>
            Group
          </Text>
  
        </Pressable>
  
        {/* Archived */}
        <Pressable style={styles.button}>
  
          <Text style={styles.text}>
            Archived
          </Text>
  
        </Pressable>
  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 22,
    },
  
    button: {
      height: 38,
      paddingHorizontal: 14,
      borderRadius: 20,
      backgroundColor: COLORS.lightGray,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 10,
    },
  
    text: {
      fontSize: 13,
      fontWeight: '600',
      color: COLORS.text,
    },
  });
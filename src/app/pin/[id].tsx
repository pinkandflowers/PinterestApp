import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  import { router, useLocalSearchParams } from 'expo-router';
  
  import BottomButton from '@/components/navigation/BottomButton';
  import { PINS } from '@/constants/pins';
  
  export default function PinDetailsScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
  
    const pin = PINS.find((item) => item.id === id);
  
    if (!pin) {
      return (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Pin not found.</Text>
  
          <BottomButton
            title="Go Back"
            onPress={() => router.back()}
          />
        </View>
      );
    }
  
    return (
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Back button */}
        <Pressable
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>‹</Text>
        </Pressable>
  
        {/* Pin image */}
        <Image
          source={{ uri: pin.image }}
          style={styles.image}
          resizeMode="cover"
        />
  
        {/* Pin information */}
        <View style={styles.content}>
          <Text style={styles.title}>{pin.title}</Text>
  
          <Text style={styles.author}>
            Saved from {pin.author}
          </Text>
  
          <Text style={styles.description}>
            Get inspired by this idea and discover more Pins like it.
          </Text>
  
          <BottomButton
            title="Save Pin"
            onPress={() => {}}
          />
        </View>
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
  
    image: {
      width: '100%',
      height: 450,
    },
  
    backButton: {
      position: 'absolute',
      top: 50,
      left: 15,
      zIndex: 10,
      width: 42,
      height: 42,
      borderRadius: 21,
      backgroundColor: '#FFFFFF',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    backText: {
      fontSize: 35,
      color: '#111111',
      lineHeight: 38,
    },
  
    content: {
      padding: 20,
    },
  
    title: {
      fontSize: 25,
      fontWeight: '700',
      color: '#111111',
      marginBottom: 8,
    },
  
    author: {
      fontSize: 14,
      color: '#767676',
      marginBottom: 15,
    },
  
    description: {
      fontSize: 16,
      color: '#111111',
      lineHeight: 23,
      marginBottom: 20,
    },
  
    errorContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
  
    errorText: {
      fontSize: 18,
      color: '#111111',
      marginBottom: 20,
    },
  });
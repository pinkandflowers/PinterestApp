import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
  } from 'react-native';
  
  import { COLORS } from '@/constants/colors';
  
  const featuredBoards = [
    {
      title: 'Home Inspiration',
      pins: '124 Pins',
      image:
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0',
    },
    {
      title: 'Fashion Ideas',
      pins: '86 Pins',
      image:
        'https://images.unsplash.com/photo-1496747611176-843222e1e57c',
    },
    {
      title: 'Travel Dreams',
      pins: '93 Pins',
      image:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
    },
    {
      title: 'Food & Recipes',
      pins: '157 Pins',
      image:
        'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
    },
  ];
  
  export default function FeaturedBoards() {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carousel}
      >
        {featuredBoards.map((board) => (
          <Pressable
            key={board.title}
            style={styles.card}
          >
            <Image
              source={{ uri: board.image }}
              style={styles.image}
            />
  
            <Text style={styles.title}>
              {board.title}
            </Text>
  
            <Text style={styles.pins}>
              {board.pins}
            </Text>
          </Pressable>
        ))}
      </ScrollView>
    );
  }
  
  const styles = StyleSheet.create({
    carousel: {
      gap: 12,
      paddingRight: 12,
    },
  
    card: {
      width: 180,
    },
  
    image: {
      width: 180,
      height: 150,
      borderRadius: 15,
      backgroundColor: COLORS.lightGray,
    },
  
    title: {
      fontSize: 15,
      fontWeight: '700',
      color: COLORS.text,
      marginTop: 8,
    },
  
    pins: {
      fontSize: 13,
      color: COLORS.secondaryText,
      marginTop: 3,
    },
  });
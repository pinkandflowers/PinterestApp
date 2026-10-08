import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  
  import { COLORS } from '@/constants/colors';
  
  const trendingSearches = [
    {
      title: 'wimsigoth',
      image:
        'https://images.unsplash.com/photo-1518709268805-4e9042af9f23',
    },
    {
      title: 'cozy bedroom',
      image:
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
    },
    {
      title: 'fall outfits',
      image:
        'https://images.unsplash.com/photo-1483985988355-763728e1935b',
    },
    {
      title: 'dream travel',
      image:
        'https://images.unsplash.com/photo-1500534623283-312aade485b7',
    },
    {
      title: 'coffee aesthetic',
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    },
  ];
  
  export default function TrendingCarousel() {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.carousel}
      >
        {trendingSearches.map((item) => (
          <Pressable
            key={item.title}
            style={styles.card}
          >
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />
  
            <View style={styles.overlay}>
              <Text style={styles.title}>
                {item.title}
              </Text>
            </View>
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
      height: 210,
      borderRadius: 16,
      overflow: 'hidden',
      backgroundColor: COLORS.lightGray,
    },
  
    image: {
      width: '100%',
      height: '100%',
    },
  
    overlay: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      padding: 15,
      paddingTop: 45,
      backgroundColor: 'rgba(0, 0, 0, 0.35)',
    },
  
    title: {
      color: COLORS.background,
      fontSize: 17,
      fontWeight: '700',
    },
  });
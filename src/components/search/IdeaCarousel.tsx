import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  
  import { COLORS } from '@/constants/colors';
  
  type Idea = {
    id: string;
    title: string;
    image: string;
  };
  
  type IdeaCarouselProps = {
    category: string;
    ideas: Idea[];
  };
  
  export default function IdeaCarousel({
    category,
    ideas,
  }: IdeaCarouselProps) {
    return (
      <View style={styles.container}>
        <Text style={styles.category}>
          {category}
        </Text>
  
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.carousel}
        >
          {ideas.map((idea) => (
            <Pressable
              key={idea.id}
              style={styles.card}
            >
              <Image
                source={{ uri: idea.image }}
                style={styles.image}
              />
  
              <Text
                style={styles.title}
                numberOfLines={2}
              >
                {idea.title}
              </Text>
            </Pressable>
          ))}
        </ScrollView>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 28,
    },
  
    category: {
      fontSize: 20,
      fontWeight: '700',
      color: COLORS.text,
      marginBottom: 12,
    },
  
    carousel: {
      gap: 12,
      paddingRight: 12,
    },
  
    card: {
      width: 145,
    },
  
    image: {
      width: 145,
      height: 185,
      borderRadius: 14,
      backgroundColor: COLORS.lightGray,
    },
  
    title: {
      fontSize: 13,
      fontWeight: '600',
      color: COLORS.text,
      marginTop: 7,
    },
  });
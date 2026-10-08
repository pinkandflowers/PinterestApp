import { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import FeaturedBoards from '@/components/search/FeaturedBoards';
import IdeaCarousel from '@/components/search/IdeaCarousel';
import SearchBar from '@/components/search/SearchBar';
import TrendingCarousel from '@/components/search/TrendingCarousel';

import { COLORS } from '@/constants/colors';
import { PINS } from '@/constants/pins';

const categories = [
  'Christmas Baking',
  'Cozy Fall',
  'Vintage Halloween',
  'Movies to Watch',
  'Cozy Bedroom',
];

export default function SearchScreen() {
  const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Page title */}

        <Text style={styles.title}>
          Search
        </Text>

        {/* Search bar */}

        <SearchBar
          value={searchText}
          onChangeText={setSearchText}
        />

        {/* Trending searches */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Trending searches
          </Text>
        </View>

        <TrendingCarousel />

        {/* Featured boards */}

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>
            Explore featured boards
          </Text>

          <Text style={styles.seeAll}>
            See all
          </Text>
        </View>

        <FeaturedBoards />

        {/* Ideas for you */}

        <Text style={styles.ideasTitle}>
          Ideas for you
        </Text>

        {categories.map((category) => (
          <IdeaCarousel
            key={category}
            category={category}
            ideas={PINS.filter(
              (PINS) => PINS.category === category
            )}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    paddingTop: 55,
    paddingHorizontal: 12,
    paddingBottom: 100,
  },

  title: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 20,
  },

  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 28,
    marginBottom: 15,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: COLORS.text,
  },

  seeAll: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.text,
  },

  ideasTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
    marginTop: 30,
  },
});
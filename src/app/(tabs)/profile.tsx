import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import ProfileSearch from '@/components/profile/ProfileSearch';
import ProfileFilters from '@/components/profile/ProfileFilters';
import ProfileBoard from '@/components/profile/ProfileBoard';

import { COLORS } from '@/constants/colors';
import { PINS } from '@/constants/pins';
import { boards } from '@/constants/boards';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >

        <ProfileSearch />

        <ProfileFilters />

        <View style={styles.boardGrid}>

          {boards.map((board) => {

            const boardPins = PINS.filter(
              (PINS) =>
                PINS.category === board.category
            );

            return (
              <ProfileBoard
                key={board.title}
                board={board}
                pins={boardPins}
              />
            );
          })}

        </View>

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
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 120,
  },

  boardGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
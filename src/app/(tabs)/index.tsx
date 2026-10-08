import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import PinGrid from '@/components/home/PinGrid';

import { COLORS } from '@/constants/colors';
import { PINS } from '@/constants/pins';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Pinterest title */}

        <Text style={styles.logo}>
          Pinterest
        </Text>

        {/* Home feed tabs */}

        <View style={styles.tabs}>
          <View style={styles.activeTabContainer}>
            <Text style={styles.activeTab}>
              For you
            </Text>
          </View>

          <Text style={styles.inactiveTab}>
            Following
          </Text>
        </View>

        {/* Pin feed */}

        <PinGrid pins={PINS} />
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

  logo: {
    fontSize: 28,
    fontWeight: '700',
    color: COLORS.primary,
    textAlign: 'center',
    marginBottom: 20,
  },

  tabs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    marginBottom: 20,
  },

  activeTabContainer: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.text,
    paddingBottom: 8,
  },

  activeTab: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
  },

  inactiveTab: {
    fontSize: 16,
    color: COLORS.secondaryText,
    paddingBottom: 8,
  },
});
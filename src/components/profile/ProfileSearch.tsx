import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  
  import { COLORS } from '@/constants/colors';
  
  export default function ProfileTopBar() {
    return (
      <View style={styles.container}>
  
        <View style={styles.profileIcon}>
          <Text style={styles.profileInitial}>
            R
          </Text>
        </View>
  
        <View style={styles.tabs}>
  
          <Text style={styles.tab}>
            Pins
          </Text>
  
          <Text
            style={[
              styles.tab,
              styles.activeTab,
            ]}
          >
            Boards
          </Text>
  
          <Text style={styles.tab}>
            Collages
          </Text>
  
        </View>
  
        <View style={styles.spacer} />
  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
  
    profileIcon: {
      width: 38,
      height: 38,
      borderRadius: 19,
      backgroundColor: COLORS.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    profileInitial: {
      color: COLORS.background,
      fontSize: 16,
      fontWeight: '700',
    },
  
    tabs: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    tab: {
      fontSize: 15,
      fontWeight: '600',
      color: COLORS.secondaryText,
      marginHorizontal: 11,
    },
  
    activeTab: {
      color: COLORS.text,
      fontWeight: '700',
    },
  
    spacer: {
      width: 38,
    },
  });
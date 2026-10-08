import { Tabs } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { StyleSheet, View } from 'react-native';

import { COLORS } from '@/constants/colors';

type NavIconProps = {
  name: 'house.fill' | 'magnifyingglass' | 'person.fill';
  focused: boolean;
};

function NavIcon({ name, focused }: NavIconProps) {
  return (
    <View
      style={[
        styles.iconBox,
        {
          backgroundColor: focused
            ? COLORS.text
            : COLORS.lightGray,
        },
      ]}
    >
      <SymbolView
        name={name}
        tintColor={
          focused
            ? COLORS.background
            : COLORS.text
        }
        size={16}
      />
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,

        tabBarStyle: {
          position: 'absolute',
          bottom: 18,
          height: 55,
          backgroundColor: 'transparent',
          borderTopWidth: 0,
          alignItems: 'center',
          
        },

        tabBarItemStyle: {
          flex: 0,
          width: 52,
          height: 52,
          marginHorizontal: 4,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused }) => (
            <NavIcon
              name="house.fill"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          title: 'Search',
          tabBarIcon: ({ focused }) => (
            <NavIcon
              name="magnifyingglass"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => (
            <NavIcon
              name="person.fill"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
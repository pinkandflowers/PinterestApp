import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';
  
  import BoardPreview from './BoardPreview';
  
  import { COLORS } from '@/constants/colors';
  import { Pin } from '@/constants/pins';
  
  import { Board } from '@/constants/boards';
  
  type ProfileBoardProps = {
    board: Board;
    pins: Pin[];
  };
  
  export default function ProfileBoard({
    board,
    pins,
  }: ProfileBoardProps) {
    return (
      <View style={styles.container}>
  
        <BoardPreview
          largeImage={pins[0]?.image}
          topImage={pins[1]?.image}
          bottomImage={pins[2]?.image}
        />
  
        <Text style={styles.title}>
          {board.title}
        </Text>
  
        <Text style={styles.count}>
          {board.count}
        </Text>
  
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      width: '48%',
      marginBottom: 25,
    },
  
    title: {
      fontSize: 15,
      fontWeight: '700',
      color: COLORS.text,
      marginTop: 8,
    },
  
    count: {
      fontSize: 13,
      color: COLORS.secondaryText,
      marginTop: 3,
    },
  });
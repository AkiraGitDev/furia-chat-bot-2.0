import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
  import { Colors } from '@/constants/Colors';
  
  interface PlayerInfoProps {
    name: string;
    nickname: string;
    role: string;
    imageUrl: string;
    onPress?: () => void;
  }
  
  export default function PlayerInfo({ 
    name, 
    nickname, 
    role, 
    imageUrl,
    onPress 
  }: PlayerInfoProps) {
    return (
      <TouchableOpacity 
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.8}
      >
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: imageUrl }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        
        <View style={styles.infoContainer}>
          <Text style={styles.nickname}>{nickname}</Text>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.roleContainer}>
            <Text style={styles.role}>{role}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#111',
      borderRadius: 12,
      margin: 8,
      padding: 16,
      elevation: 3,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    imageContainer: {
      alignItems: 'center',
      marginBottom: 12,
    },
    image: {
      width: 120,
      height: 120,
      borderRadius: 60,
      borderWidth: 2,
      borderColor: Colors.primary,
    },
    infoContainer: {
      alignItems: 'center',
    },
    nickname: {
      color: Colors.primary,
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    name: {
      color: Colors.text,
      fontSize: 16,
      marginBottom: 8,
    },
    roleContainer: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      paddingHorizontal: 12,
      paddingVertical: 4,
      borderRadius: 12,
    },
    role: {
      color: '#666',
      fontSize: 14,
    },
  });
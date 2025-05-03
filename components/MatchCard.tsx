import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import { Colors } from '@/constants/Colors';
  
  interface MatchCardProps {
    matchId: string;
    team1: string;
    team2: string;
    date: string;
    onPress?: () => void;
  }
  
  export default function MatchCard({ 
    matchId, 
    team1, 
    team2, 
    date,
    onPress 
  }: MatchCardProps) {
    return (
      <TouchableOpacity 
        style={styles.container}
        onPress={onPress}
        activeOpacity={0.7}
      >
        <View style={styles.content}>
          <View style={styles.teamsContainer}>
            <View style={styles.teamInfo}>
              <Text style={styles.teamName}>{team1}</Text>
            </View>
            
            <Text style={styles.versus}>VS</Text>
            
            <View style={styles.teamInfo}>
              <Text style={styles.teamName}>{team2}</Text>
            </View>
          </View>
          
          <Text style={styles.date}>{date}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#111',
      borderRadius: 10,
      marginVertical: 8,
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    content: {
      padding: 16,
    },
    teamsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 8,
    },
    teamInfo: {
      flex: 1,
      alignItems: 'center',
    },
    teamName: {
      color: Colors.text,
      fontSize: 16,
      fontWeight: 'bold',
    },
    versus: {
      color: Colors.text,
      fontSize: 14,
      marginHorizontal: 12,
      opacity: 0.7,
    },
    date: {
      color: '#666',
      fontSize: 14,
      textAlign: 'center',
      marginTop: 8,
    },
  });
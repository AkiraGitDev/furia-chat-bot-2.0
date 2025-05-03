import {
  View,
  StyleSheet,
} from 'react-native';
import { Colors } from '@/constants/Colors';
import ChatRoom from '@/components/ChatRoom';

export default function ChatScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ChatRoom 
          roomId="general"
          userId="temp-user"
          username="Usuário"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  content: {
    flex: 1,
  },
});
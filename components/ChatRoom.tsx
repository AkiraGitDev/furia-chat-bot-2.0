import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Colors } from '@/constants/Colors';

interface ChatRoomProps {
  roomId: string;
  userId: string;
  username: string;
}

interface Message {
  id: string;
  text: string;
  userId: string;
  username: string;
  timestamp: number;
}

export default function ChatRoom({ roomId, userId, username }: ChatRoomProps) {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  
  const renderMessage = ({ item }: { item: Message }) => (
    <View style={styles.messageContainer}>
      <Text style={styles.username}>{item.username}</Text>
      <View style={styles.messageBubble}>
        <Text style={styles.messageText}>{item.text}</Text>
      </View>
    </View>
  );

  const handleSend = () => {
    if (message.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        text: message,
        userId,
        username,
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, newMessage]);
      setMessage('');
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={item => item.id}
        style={styles.chatArea}
        inverted
      />
      
      <View style={styles.inputArea}>
        <TextInput
          style={styles.input}
          value={message}
          onChangeText={setMessage}
          placeholder="Digite sua mensagem..."
          placeholderTextColor="#666"
          multiline
        />
        <TouchableOpacity 
          style={styles.sendButton}
          onPress={handleSend}
        >
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  chatArea: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    marginBottom: 10,
  },
  username: {
    color: Colors.text,
    fontSize: 12,
    marginBottom: 4,
    opacity: 0.7,
  },
  messageBubble: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 12,
    borderRadius: 16,
    maxWidth: '80%',
  },
  messageText: {
    color: Colors.text,
    fontSize: 16,
  },
  inputArea: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#111',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#222',
    color: Colors.text,
    padding: 12,
    marginRight: 10,
    borderRadius: 20,
    maxHeight: 100,
  },
  sendButton: {
    backgroundColor: Colors.primary || '#007AFF',
    padding: 12,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
  },
});
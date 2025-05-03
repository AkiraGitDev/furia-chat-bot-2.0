import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '@/constants/Colors';

export default function EntrarScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.subtitle}>Acesse sua conta ou registre-se para começar.</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push('/(auth)/login')}
      >
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.secondaryButton]}
        onPress={() => router.push('/(auth)/register')}
      >
        <Text style={styles.buttonText}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.text,
    opacity: 0.7,
    marginBottom: 32,
    textAlign: 'center',
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: "#444",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  secondaryButton: {
    backgroundColor: '#444',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
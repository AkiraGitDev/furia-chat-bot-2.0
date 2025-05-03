import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const router = useRouter();

  const handleRegistro = () => {
    // Implementar lógica de registro aqui
    console.log('Registro:', { nome, email, senha, confirmarSenha });
    router.push('/(tabs)/home');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.content}>
            <Text style={styles.title}>Registro</Text>

            <TextInput
              style={styles.input}
              placeholder="Nome completo"
              placeholderTextColor={Colors.text}
              value={nome}
              onChangeText={setNome}
            />

            <TextInput
              style={styles.input}
              placeholder="E-mail"
              placeholderTextColor={Colors.text}
              keyboardType="email-address"
              autoCapitalize="none"
              value={email}
              onChangeText={setEmail}
            />

            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor={Colors.text}
              secureTextEntry
              value={senha}
              onChangeText={setSenha}
            />

            <TextInput
              style={styles.input}
              placeholder="Confirmar senha"
              placeholderTextColor={Colors.text}
              secureTextEntry
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
            />

            <TouchableOpacity style={styles.button} onPress={handleRegistro}>
              <Text style={styles.buttonText}>Criar Conta</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#444',
    borderRadius: 8,
    paddingHorizontal: 16,
    color: Colors.text,
    marginBottom: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: Colors.primary || '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: Colors.secondary,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter, useSegments } from 'expo-router';

// Definindo o tipo de usuário
interface User {
  id: string;
  name: string;
  email: string;
}

// Definindo o tipo do contexto
interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<boolean>;
  signUp: (name: string, email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
}

// Criando o contexto
const AuthContext = createContext<AuthContextType>({} as AuthContextType);

// Hook para usar o contexto
export const useAuth = () => useContext(AuthContext);

// Chaves para o AsyncStorage
const USER_KEY = '@furia_chat:user';
const USERS_KEY = '@furia_chat:users';

// Provedor do contexto
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const segments = useSegments();

  // Efeito para redirecionar com base no estado de autenticação
  useEffect(() => {
    if (!isLoading) {
      const inAuthGroup = segments[0] === '(auth)';
      
      if (!user && !inAuthGroup) {
        // Redireciona para a tela de login se não estiver autenticado
        router.replace('/(auth)/entrar');
      } else if (user && inAuthGroup) {
        // Redireciona para a tela inicial se estiver autenticado
        router.replace('/(tabs)/home');
      }
    }
  }, [user, segments, isLoading]);

  // Efeito para carregar o usuário do AsyncStorage
  useEffect(() => {
    async function loadUser() {
      try {
        const storedUser = await AsyncStorage.getItem(USER_KEY);
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Erro ao carregar usuário:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadUser();
  }, []);

  // Função para fazer login
  const signIn = async (email: string, password: string): Promise<boolean> => {
    try {
      // Busca os usuários cadastrados
      const storedUsers = await AsyncStorage.getItem(USERS_KEY);
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      
      // Verifica se o usuário existe e a senha está correta
      const foundUser = users.find((u: any) => 
        u.email === email && u.password === password
      );
      
      if (foundUser) {
        // Remove a senha antes de armazenar no estado
        const { password, ...userWithoutPassword } = foundUser;
        
        // Salva o usuário no AsyncStorage e no estado
        await AsyncStorage.setItem(USER_KEY, JSON.stringify(userWithoutPassword));
        setUser(userWithoutPassword);
        return true;
      }
      
      return false;
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return false;
    }
  };

  // Função para cadastrar um novo usuário
  const signUp = async (name: string, email: string, password: string): Promise<boolean> => {
    try {
      // Busca os usuários cadastrados
      const storedUsers = await AsyncStorage.getItem(USERS_KEY);
      const users = storedUsers ? JSON.parse(storedUsers) : [];
      
      // Verifica se o email já está em uso
      if (users.some((u: any) => u.email === email)) {
        return false;
      }
      
      // Cria um novo usuário
      const newUser = {
        id: Date.now().toString(),
        name,
        email,
        password
      };
      
      // Adiciona o novo usuário à lista
      const updatedUsers = [...users, newUser];
      await AsyncStorage.setItem(USERS_KEY, JSON.stringify(updatedUsers));
      
      // Remove a senha antes de armazenar no estado
      const { password: _, ...userWithoutPassword } = newUser;
      
      // Salva o usuário no AsyncStorage e no estado
      await AsyncStorage.setItem(USER_KEY, JSON.stringify(userWithoutPassword));
      setUser(userWithoutPassword);
      
      return true;
    } catch (error) {
      console.error('Erro ao cadastrar:', error);
      return false;
    }
  };

  // Função para fazer logout
  const signOut = async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem(USER_KEY);
      setUser(null);
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}
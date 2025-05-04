import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Image
            source={require('@/assets/images/Furia_Esports_logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>FURIA Chat</Text>
          <Text style={styles.subtitle}>Bem-vindo ao chat oficial da FURIA!</Text>
        </View>

        <View style={styles.content}>
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/matches')}
          >
            <Text style={styles.cardTitle}>Próximas Partidas</Text>
            <Text style={styles.cardText}>Confira os próximos jogos da FURIA</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push('/chat')}
          >
            <Text style={styles.cardTitle}>Chat da Comunidade</Text>
            <Text style={styles.cardText}>Interaja com outros fãs da FURIA</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: Colors.text,
    textAlign: 'center',
    opacity: 0.8,
  },
  content: {
    padding: 20,
    alignItems: "center",
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.text,
    marginBottom: 8,
    textAlign: 'center',
    width: '100%',
  },
  cardText: {
    fontSize: 16,
    color: Colors.text,
    opacity: 0.8,
    textAlign: 'center',
    width: '100%',
  },
});
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from 'react-native';
import { Colors } from '@/constants/Colors';

interface Partida {
  id: string;
  titulo: string;
  data: string;
  horario: string;
}

export default function MatchesScreen() {
  const partidas: Partida[] = [
    { id: '1', titulo: 'FURIA vs MIBR', data: '2024-01-20', horario: '15:00' },
    { id: '2', titulo: 'FURIA vs Imperial', data: '2024-01-22', horario: '18:00' },
  ];

  const renderPartida = ({ item }: { item: Partida }) => (
    <View style={styles.partidaCard}>
      <Text style={styles.partidaTitulo}>{item.titulo}</Text>
      <Text style={styles.partidaInfo}>{item.data} - {item.horario}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Partidas</Text>
      <FlatList
        data={partidas}
        renderItem={renderPartida}
        keyExtractor={item => item.id}
        style={styles.lista}
        contentContainerStyle={styles.listaContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  title: {
    fontSize: 24,
    color: Colors.text,
    fontWeight: 'bold',
    padding: 16,
  },
  lista: {
    flex: 1,
  },
  listaContent: {
    padding: 16,
  },
  partidaCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  partidaTitulo: {
    fontSize: 18,
    color: Colors.text,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  partidaInfo: {
    fontSize: 14,
    color: Colors.text,
    opacity: 0.8,
  },
});
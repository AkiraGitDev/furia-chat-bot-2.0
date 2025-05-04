import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { Colors } from '@/constants/Colors';
import { getFuriaUpcomingMatches } from '@/app/(tabs)/matches/services';

interface Partida {
  id: string;
  titulo: string;
  data: string;
  horario: string;
}

export default function MatchesScreen() {
  const [partidas, setPartidas] = useState<Partida[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPartidas() {
      const apiMatches = await getFuriaUpcomingMatches();

      const partidasFormatadas = apiMatches.map((match: any) => {
        const date = new Date(match.begin_at);
        return {
          id: match.id.toString(),
          titulo: match.name,
          data: date.toLocaleDateString(),
          horario: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        };
      });

      setPartidas(partidasFormatadas);
      setLoading(false);
    }

    fetchPartidas();
  }, []);

  const renderPartida = ({ item }: { item: Partida }) => (
    <View style={styles.partidaCard}>
      <Text style={styles.partidaTitulo}>{item.titulo}</Text>
      <Text style={styles.partidaInfo}>{item.data} - {item.horario}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }

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

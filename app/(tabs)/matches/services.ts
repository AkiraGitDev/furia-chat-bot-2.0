import axios from 'axios';
import Constants from 'expo-constants';

const API_URL = 'https://api.pandascore.co/csgo/matches/upcoming';
const TOKEN = Constants.expoConfig?.extra?.pandascoreToken || '';

export async function getFuriaUpcomingMatches() {
  try {
    const response = await axios.get(API_URL, {
      params: {
        filter: {
          opponent_id: 129384, // ID da FURIA no PandaScore
          videogame_title: 'cs-2' // Filtro específico para CS2
        },
        sort: 'begin_at',
        per_page: 10
      },
      headers: {
        'Authorization': `Bearer ${TOKEN}`
      }
    });
    
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar partidas da FURIA:', error);
    return [];
  }
}

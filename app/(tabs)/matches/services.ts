import axios from 'axios';

const API_URL = 'https://api.pandascore.co/csgo/matches/upcoming';
const TOKEN = 'pObNGE9YhXTZMZGnFeTnFn2W-dUIa3vy6dW_2Ee6TepuKLByRgg'; // depois você pode mover para .env

export async function getFuriaUpcomingMatches() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      params: {
        'filter[opponents]': 128, // ID da FURIA
        sort: 'begin_at',
      },
    });

    return response.data;
  } catch (error) {
    console.error('Erro ao buscar partidas da FURIA:', error);
    return [];
  }
}

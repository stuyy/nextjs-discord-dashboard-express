import axios from 'axios';
import { DISCORD_API_URL } from '../../utils/constants';
import { PartialGuild } from '../../utils/types';

export function getBotGuildsService() {
  const TOKEN = process.env.DISCORD_BOT_TOKEN;
  return axios.get<PartialGuild[]>(`${DISCORD_API_URL}/users/@me/guilds`, {
    headers: { Authorization: `Bot ${TOKEN}` },
  });
}

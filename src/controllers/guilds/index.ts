import { Request, Response } from 'express';
import { User } from '../../database/schemas/User';
import {
  getBotGuildsService,
  getUserGuildsService,
} from '../../services/guilds';

export async function getGuildsController(req: Request, res: Response) {
  const user = req.user as User;
  try {
    const { data: botGuilds } = await getBotGuildsService();
    const { data: userGuilds } = await getUserGuildsService(user.id);
    res.send({
      botGuilds,
      userGuilds,
    });
  } catch (err) {
    console.log(err);
    res.status(400).send('Error');
  }
}

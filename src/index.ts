import { config } from 'dotenv';
import { createApp } from './utils/createApp';
import './database';

config();

const PORT = process.env.PORT || 3001;

async function main() {
  console.log(`Running in ${process.env.ENVIRONMENT} mode.`);
  try {
    const app = createApp();
    app.listen(PORT, () => console.log(`Running on Port ${PORT}`));
  } catch (err) {
    console.log(err);
  }
}

main();

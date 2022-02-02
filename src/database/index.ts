import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost/discord_dashboard')
  .then(() => console.log('Connected to Database'))
  .catch((err) => console.log(err));

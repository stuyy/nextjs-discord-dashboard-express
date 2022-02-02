import mongoose, { Schema } from 'mongoose';

interface User {
  discordId: string;
  accessToken: string;
  refreshToken: string;
}

const UserSchema = new Schema<User>({
  discordId: {
    type: mongoose.SchemaTypes.String,
    required: true,
    unique: true,
  },
  accessToken: { type: mongoose.SchemaTypes.String, required: true },
  refreshToken: { type: mongoose.SchemaTypes.String, required: true },
});

export default mongoose.model('users', UserSchema);

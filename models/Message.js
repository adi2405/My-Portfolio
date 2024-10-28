import mongoose from 'mongoose';

const MessageSchema = new mongoose.Schema({
  email: String,
  subject: String,
  message: String,
  date: { type: Date, default: Date.now },
});

export default mongoose.models.Message || mongoose.model('Message', MessageSchema);
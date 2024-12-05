import mongoose from 'mongoose';

const analysisSchema = new mongoose.Schema({
  query: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  response: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

const Analytics = mongoose.models.Analytics || mongoose.model('Analytics', analysisSchema);

export default Analytics;

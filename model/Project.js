import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: String,
  img: String,
  desc: String,
  repo: String,
  demo: String,
  techs: [String],
  category: String,
  featured: Boolean,
});

// If we already have this Product model, don't create it again
export default mongoose.models.Project ||
  mongoose.model('Project', projectSchema);

import Project from 'model/Project';
import mongoose from 'mongoose';

export default async function handler(req, res) {
  const { method } = req;
  mongoose.connect(process.env.MONGO_URL, () => {
    console.log('connected...');
  });

  if (method === 'POST') {
    try {
      const projects = await Project.create(req.body);
      res.status(201).json(projects);
    } catch (err) {
      res.status(500).json(err);
    }
  }

  if (method === 'GET') {
    try {
      const projects = await Project.find({}, { __v: 0 });
      res.status(200).json(projects);
    } catch (err) {
      res.status(500).json(err);
    }
  }
}

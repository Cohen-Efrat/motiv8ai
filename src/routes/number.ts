import express from 'express';
import { MongoDataService } from '../services/dbService';

const router = express.Router();
const dataService = new MongoDataService();

router.post('/', async (req, res) => {
  const { num, userID } = req.body;
  try {
    await dataService.setNumber(userID, num);
    res.status(200).send('Number set successfully');
  } catch (error) {
    res.status(400).json({ error: 'An unexpected error occurred'  });
  }
});

export default router;

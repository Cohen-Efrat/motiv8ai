import express from 'express';
import { MongoDataService } from '../services/dbService'; 

const router = express.Router();
const dataService = new MongoDataService();

router.post('/', async (req, res) => {
  const { char, userID } = req.body;
  try {
    await dataService.setCharacter(userID, char);
    res.status(200).send('Character set successfully');
  } catch (error) {
    res.status(400).json({ error: 'An unexpected error occurred'  });
  }
});

export default router;

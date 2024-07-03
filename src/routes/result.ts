import express from 'express';
import { MongoDataService } from '../services/dbService';

const router = express.Router();
const dataService = new MongoDataService();

router.get('/:userID', async (req, res) => {
    try {
      const result = await dataService.getResult(req.params.userID);
      res.json({ result });
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'An unexpected error occurred' });
      }
    }
  });
  

export default router;

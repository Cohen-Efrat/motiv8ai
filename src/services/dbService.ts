import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const dbName = process.env.DB_NAME || 'users';
const client = new MongoClient(uri);

client.connect();

const db = client.db(dbName);
const usersCollection = db.collection('users');

export class MongoDataService {
  async setCharacter(userID: string, char: string): Promise<void> {
    await usersCollection.updateOne(
      { userID },
      { $set: { char } },
      { upsert: true }
    );
  }

  async setNumber(userID: string, num: number): Promise<void> {
    await usersCollection.updateOne(
      { userID },
      { $set: { num } },
      { upsert: true }
    );
  }

  async getResult(userID: string): Promise<string> {
    const user = await usersCollection.findOne({ userID });
    if (!user) {
      throw new Error('User not found');
    }
    if (user.char == null && user.num == null) {
      throw new Error('Missing character and number');
    }
    if (user.char == null) {
      throw new Error('Missing character');
    }
    if (user.num == null) {
      throw new Error('Missing number');
    }
    return `${user.char}_${user.num}`;
  }
}

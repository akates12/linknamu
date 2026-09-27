import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

// 개발 중 핫 리로드 때마다 연결이 새로 생기지 않도록 전역에 보관한다
const globalForMongo = globalThis as unknown as { mongoClient?: Promise<MongoClient> };

export function getMongoClient(): Promise<MongoClient> | null {
  if (!uri) return null;
  if (!globalForMongo.mongoClient) {
    globalForMongo.mongoClient = new MongoClient(uri).connect();
  }
  return globalForMongo.mongoClient;
}

export async function getClicksCollection() {
  const client = await getMongoClient();
  if (!client) return null;
  return client.db(process.env.MONGODB_DB ?? "linknamu").collection<{ _id: string; count: number }>("clicks");
}

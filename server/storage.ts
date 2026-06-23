import { db } from "./db";
import { 
  contactMessages, 
  reviews, 
  type CreateContactMessageRequest, 
  type ContactMessageResponse,
  type CreateReviewRequest,
  type ReviewResponse 
} from "@shared/schema";
import { desc } from "drizzle-orm";

export interface IStorage {
  createContactMessage(message: CreateContactMessageRequest): Promise<ContactMessageResponse>;
  getReviews(): Promise<ReviewResponse[]>;
  createReview(review: CreateReviewRequest): Promise<ReviewResponse>;
}

export class DatabaseStorage implements IStorage {
  async createContactMessage(message: CreateContactMessageRequest): Promise<ContactMessageResponse> {
    const [created] = await db.insert(contactMessages).values(message).returning();
    return created;
  }

  async getReviews(): Promise<ReviewResponse[]> {
    return await db.select().from(reviews).orderBy(desc(reviews.createdAt));
  }

  async createReview(review: CreateReviewRequest): Promise<ReviewResponse> {
    const [created] = await db.insert(reviews).values(review).returning();
    return created;
  }
}

export const storage = new DatabaseStorage();


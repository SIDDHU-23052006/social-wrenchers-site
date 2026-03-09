import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";
import chatRoute from "./chat"; // <-- ADD THIS

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  /* ===== Existing Contact Form ===== */
  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      const message = await storage.createContactMessage(input);
      res.status(201).json(message);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join("."),
        });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  /* ===== NEW AI CHATBOT ROUTE ===== */
  app.use("/api/chat", chatRoute);

  return httpServer;
}
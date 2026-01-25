import crypto from "crypto";
import { Request, Response, NextFunction } from "express";

export function verifySignature(req: Request, res: Response, next: NextFunction) {
  const signature = req.headers["x-hub-signature-256"] as string;
  const secret = process.env.WEBHOOK_SECRET || "";

  const body = JSON.stringify(req.body);
  const expected = "sha256=" + crypto.createHmac("sha256", secret).update(body).digest("hex");

  if (signature !== expected) {
    return res.status(401).json({ error: "Invalid signature" });
  }

  next();
}
import { Router } from "express";
import { verifySignature } from "../middleware/verifySignature";
import { storeEvent } from "../services/eventStore";
import { fanoutEvent } from "../services/fanoutService";

const router = Router();

router.post("/", verifySignature, async (req, res) => {
  const eventType = req.headers["x-github-event"] as string;
  const payload = req.body;

  const id = storeEvent(eventType, payload);

  fanoutEvent({ id, eventType, payload });

  res.status(200).json({ status: "ok", id });
});

export default router;
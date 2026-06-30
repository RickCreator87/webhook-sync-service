import express from "express";
import bodyParser from "body-parser";
import webhookRoute from "./routes/webhook";

const app = express();

app.use(bodyParser.json({ verify: (req: any, _res: any, buf: any) => { req.rawBody = buf; }}));

app.use("/webhook", webhookRoute);

export default app;

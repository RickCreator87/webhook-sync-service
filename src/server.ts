import dotenv from "dotenv";
dotenv.config();

import app from "./app";

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Webhook Sync Service running on port ${port}`);
});
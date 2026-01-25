import axios from "axios";

export async function fanoutEvent(event: any) {
  const targets = Object.keys(process.env)
    .filter(k => k.startsWith("FANOUT_URL_"))
    .map(k => process.env[k] as string);

  for (const url of targets) {
    try {
      await axios.post(url, event, { timeout: 5000 });
    } catch (err) {
      console.error("Fanout failed:", url, err.message);
    }
  }
}
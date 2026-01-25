# Webhook Sync Service

A Node.js/Express service for receiving, storing, and forwarding webhook events.

## Architecture

- **Framework:** Express + TypeScript  
- **Storage:** SQLite (via `better-sqlite3`)  
- **Fan-out:** Configurable HTTP POST to multiple downstream URLs  

### Milestones

1. **Receive + Verify Webhooks**
   - Endpoint: `POST /webhook`
   - Verifies `x-hub-signature-256` using `WEBHOOK_SECRET`
2. **Persist Events**
   - Stores events in SQLite with `eventType`, `payload`, and `createdAt`
3. **Fan-Out / Transform**
   - Forwards normalized event object to all `FANOUT_URL_*` environment variables

## Local Development

```bash
npm install
npm run dev
webhook-sync-service/
│
├── src/
│   ├── app.ts
│   ├── server.ts
│   ├── config/
│   │   └── env.ts
│   ├── middleware/
│   │   └── verifySignature.ts
│   ├── routes/
│   │   └── webhook.ts
│   ├── services/
│   │   ├── eventStore.ts
│   │   └── fanoutService.ts
│   ├── types/
│   │   └── WebhookEvent.ts
│   └── utils/
│       └── logger.ts
│
├── package.json
├── tsconfig.json
├── .env.example
├── README.md
└── .gitignore
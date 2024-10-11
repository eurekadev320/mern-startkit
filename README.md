# Express TypeScript

## Installation

### 1. Install dependencies

```sh
npm i
```

## Development

### Start dev server

```sh
npm run dev
```

Running the above commands results in

- 🌏**API Server** running at `http://localhost:3000`
- ⚙️**Swagger UI** at `http://localhost:3000/__VERSION__/dev/api-docs`
- 🛢️**MongoDB** running at `mongodb://localhost:27017`

### 3. Build and run

```sh
npm run build && npm run start
```

---

## Environment

To edit environment variables, create a file with name `.env` and copy the contents from `.env.example` to start with.

| Var Name                  | Type    | Default                           | Description                             |
| ------------------------- | ------  | --------------------------------- | --------------------------------------- |
| NODE_ENV                  | string  | `development`                     | API runtime environment. eg: `staging`  |
| PORT                      | number  | `3000`                            | Port to run the API server on           |
| MONGO_URL                 | string  | `mongodb://localhost:27017/books` | URL for MongoDB                         |
| SECRET_HEX                | string  | `827d263847500d926a520b...`       | HEX string to secure JWT                |
| ACCESS_TOKEN_LIFETIME_MIN | number  | `60`                              | Access token TTL in mins                |
| BCRYPT_N_ROUNDS           | number  | `12`                             | Number of round to generate Bcrypt salt |
| WHITELIST_ORIGINS         | string[]| `["http://localhost"]`            | White list origins                      |
## Logging

The application uses [winston](https://github.com/winstonjs/winston) as the default logger. The configuration file is at `src/logger.ts`.

- All logs are saved in `./logs` directory and at `/logs` in the docker container.
- Console messages are prettified
- Each line in error log file is a stringified JSON.
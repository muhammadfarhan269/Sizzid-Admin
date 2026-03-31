# SIZZLD Backend

Serverless Express API deployed on Vercel.
Database: Neon (hosted Postgres)
Cache: Upstash (serverless Redis)

## One-time setup

### 1. Neon (database)
- Go to neon.tech and create a free account
- Create a new project called "sizzld"
- Create a database called "sizzld_db"
- Go to Connection Details
- Copy the "Pooled connection" string -> paste as DATABASE_URL
- Copy the "Direct connection" string -> paste as DIRECT_URL

### 2. Upstash (Redis)
- Go to upstash.com and create a free account
- Create a new Redis database (region: closest to you)
- Copy REST URL -> paste as UPSTASH_REDIS_REST_URL
- Copy REST Token -> paste as UPSTASH_REDIS_REST_TOKEN

### 3. Local dev setup
cp .env.example .env
# fill in your Neon + Upstash credentials

npm install
npm run db:migrate
npm run db:seed
npm run dev

### 4. Deploy to Vercel
- Push /server to GitHub
- Import project in vercel.com
- Set all env variables from .env in Vercel dashboard
- Deploy

## Default admin credentials
Email:    admin@sizzld.com
Password: Admin@1234

## API base URL (local)
http://localhost:5000/api/v1

## API base URL (production)
https://your-vercel-deployment.vercel.app/api/v1

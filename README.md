# Lahja App (Frontend)

React + Vite frontend for Lahja. Users upload a video; it is sent to the
**Lahja server** (the `lahja-server` project, which runs on a GPU machine /
your PC) where the narration is replaced with a voice cloned from the video's
own audio; the user then downloads the result.

This repo is **frontend only** and deploys to Vercel. The processing backend
lives in the separate `lahja-server` project.

## How it connects to the server

```
 Browser (Vercel, HTTPS)                 lahja-server on your PC (GPU)
 ───────────────────────                 ─────────────────────────────
 Upload video  ─POST /upload───────────▶ save file, queue job, return {jobId}
 Poll status   ─GET /status/{id}───────▶ {status, result}
 Download      ─GET /download/{id}─────▶ processed .mp4
```

The server URL is read from `VITE_API_URL` (see below).

## Layout

```
lahja-master/
├── src/
│   ├── pages/           # Home, Processing, Results
│   ├── components/      # UploadBox, Navbar, Footer, AudioCard
│   └── services/api.js  # axios client (uses VITE_API_URL)
├── .env                 # VITE_API_URL for local dev (gitignored)
├── .env.example
└── package.json
```

## Local development

Start the server first (see `lahja-server/README.md`), then:

```bash
npm install
copy .env.example .env     # VITE_API_URL defaults to http://127.0.0.1:8000
npm run dev                # http://localhost:5173
```

Upload a short video and watch Home → Processing → Results.

## Deploy to Vercel (frontend) + your PC (server)

Your PC is behind a router and Vercel serves **HTTPS**, and browsers block
HTTPS pages from calling plain `http://` / `127.0.0.1`. So the server must be
exposed over **HTTPS via a tunnel**.

1. **Run the server** on your PC (see `lahja-server/README.md`):
   `uvicorn main:app --host 0.0.0.0 --port 8000`
2. **Tunnel it to HTTPS** (in another terminal):
   - Cloudflare: `cloudflared tunnel --url http://localhost:8000`
   - or ngrok: `ngrok http 8000`

   Copy the printed HTTPS URL (e.g. `https://xxxx.trycloudflare.com`).
3. **Allow the Vercel origin** on the server: in `lahja-server/.env` set
   `ALLOWED_ORIGINS=https://your-app.vercel.app` and restart uvicorn.
4. **Deploy this repo to Vercel** (framework auto-detected as Vite) and add an
   Environment Variable:
   - `VITE_API_URL` = the tunnel HTTPS URL from step 2

   Redeploy after changing `VITE_API_URL` (Vite inlines env vars at build time).

> Quick-tunnel URLs change on each restart. For a stable URL use a named
> Cloudflare tunnel or a reserved ngrok domain, and update `VITE_API_URL`.

# Weaveworker

Weaveworker is a local-first **Automated Workforce OS** built with Astro, React, TypeScript, Tailwind, and shadcn/ui. It lets normal people hire AI workers, assign them to projects, and run deterministic automation through n8n — all while staying offline-capable with optional real-time sync.

## What’s Included (Phase 1 MVP)

- Local-first workspace with Projects, Workers, Assets, Tasks, Threads, Flows, and Operations.
- Jazz-ready domain schemas + migrations scaffolding.
- Feature gating for Free vs Pro tiers.
- n8n integration scaffold (connect, validate, run stubs).
- Export/import service for JSON backups + Markdown memory packs.
- Team + entitlement UI placeholders with role-aware navigation.

## Tech Stack

- **Astro** for routing/layouts.
- **React** for interactive pages (one React root per page).
- **TypeScript** + **Tailwind** + **shadcn/ui** for UI.
- **Jazz Framework** for local-first data + sync (schema scaffolding included; wire in Jazz provider next).

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:4321` to view the app.

## Scripts

- `npm run dev` — local development
- `npm run build` — production build + Astro check
- `npm run preview` — preview build

## Project Structure

```
src/
  components/
    app/           # App shell + page components
    ui/            # shadcn/ui primitives
  domain/          # Schema + domain models
  pages/           # Astro routes
  services/        # n8n + entitlements + export/import
  state/           # Local-first store + demo seed
  styles/          # Tailwind globals
```

## Architecture Notes

- **Local-first data** lives in a single account root (ready for Jazz CoValues).
- **Sync + Teams** are gated by entitlements and surfaced in UI.
- **Automation** flows store n8n workflow JSON and execution logs.
- **Account & Billing** lives in a separate Stripe dashboard and is deep-linked from `/account`.

## Next Steps

1. Replace the local store with `jazz-react` providers and sync configuration.
2. Wire in real n8n API calls for workflow validation and execution.
3. Implement CRUD for all entities + export/import flows.
4. Add authentication + entitlements backend for Pro.

---

> Weaveworker is built to be resilient offline, collaborative online, and deterministic in production.

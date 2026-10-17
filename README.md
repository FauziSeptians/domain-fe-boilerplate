# Frontend Boilerplate
Mengulang setup project frontend dari nol itu melelahkan dan buang waktu. Template ini hadir sebagai solusi untuk mempercepat proses inisialisasi project baru berbasis Next.js.. Cukup clone, install, dan langsung mulai coding!

## Getting Started

#### Clone repo atau gunakan sebagai template
`use this template`

#### Install dependencies
`npm install`

#### Jalankan development server
`npm run dev`

## Tech Stack
- Next.js
- TypeScript
- Tailwind CSS
- Zustand
- React Query
- Axios
- Prettier
- Husky

## Folder Structure
Struktur berbasis **domain**: kode yang khusus satu fitur ada di `src/domains/<nama-domain>/`, kode yang dipakai lintas fitur ada di `src/shared/`.

```
src/
├── app/                  # Next.js App Router (layout, page, error, globals.css, favicon)
├── domains/
│   └── <domain>/         # contoh: auth, home
│       ├── components/   # komponen khusus domain
│       ├── constants/    # enum / mapper khusus domain
│       ├── hooks/        # hooks (React Query) khusus domain
│       ├── pages/        # page component yang dipanggil dari src/app
│       ├── services/     # API service khusus domain
│       ├── store/        # Zustand store khusus domain
│       ├── types/        # type khusus domain
│       ├── utils/        # util khusus domain
│       └── validators/   # zod schema (type di types/ di-infer dari sini)
└── shared/
    ├── components/       # atomic design: atom, molecules, organism, templates
    ├── data/             # data statis / mock (json)
    ├── hooks/            # hooks lintas domain
    ├── lib/              # konfigurasi library (axios, dll)
    ├── providers/        # React context / provider (ReactQueryProvider)
    ├── stores/           # Zustand store global (useAppStore)
    ├── styles/tokens/    # design token Tailwind (colors.css)
    ├── ui/               # primitive UI (button, input, dll)
    └── utils/            # util lintas domain (classNames)
```

## Environment
Salin `.env.example` menjadi `.env.local`, lalu isi `NEXT_PUBLIC_API_URL`.

## Git Hooks & PR Template
- `.husky/pre-push` menjalankan `npm run pre-push` (lint + build) sebelum push.
- `.github/PULL_REQUEST_TEMPLATE/` berisi template PR: `feature`, `bug`, `chore`, dan default.

## Kenapa pakai ini ?
- Hemat waktu setup hingga 95%
- Struktur folder yang jelas dan scalable
- Sudah include best practices untuk frontend modern
- Cocok untuk personal project, MVP, atau production-ready app

## Kontribusi
Feel free untuk fork, submit pull request, atau kasih feedback. Semakin banyak yang pakai, semakin solid template ini!


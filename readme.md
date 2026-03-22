# Vefforritun 2 – Verkefni 4

React framendi fyrir fréttavef sem notar REST API úr verkefni 3.

## Tækni

* React
* TypeScript
* Vite
* React Router
* Fetch API

---

## Keyrsla í þróun

Setja upp pakka:

```bash
npm install
```

Búa til `.env` í rót verkefnis:

```env
VITE_API_URL=http://localhost:3000
```

Keyra þróunarþjón:

```bash
npm run dev
```

ætti að keyra:

```
http://localhost:5173
```

---

## Hýsing

Í hýsingu þarf að skilgreina:

```
VITE_API_URL=https://your-backend.onrender.com
```

Þar sem `your-backend.onrender.com` er backend úr verkefni 3.

---

## Síður

### Forsíða

```
/
```

Sýnir:

* lista af fréttum
* titil
* útdrátt
* höfund
* paging

---

### Fréttasíða

```
/news/:slug
```

Sýnir:

* titil
* útdrátt
* höfund
* efni fréttar

Ef frétt er ekki til birtist villuskilaboð.

---

### Admin síða

```
/admin
```

Leyfir:

* að búa til frétt
* velja höfund
* setja útgefna eða ekki
* birta villur frá API

---

## Components

Verkefnið inniheldur að minnsta kosti fimm React componenta:

* Layout
* NewsList
* NewsItem
* Pagination
* NewsForm

---

## Environment variables

`.env`

```
VITE_API_URL=http://localhost:3000
```

Production:

```
VITE_API_URL=https://backend-url.onrender.com
```

---

## Lint

```bash
npm run lint
```

---

## Build

```bash
npm run build
```

Build output:

```
dist/
```

---

## Verkefnauppsetning

```
src/
  api/
  components/
  pages/
  types/
  App.tsx
  main.tsx
```

---

## API

Frontend notar backend úr verkefni 3:

### Endpoints

```
GET /news
GET /news/:slug
GET /authors
POST /news
```

---

## Athugasemdir

* Frontend gerir ráð fyrir að backend sé keyrandi
* Base URL er geymt í `.env`
* Villur frá API eru birtar í UI
* Engin authentication er notuð

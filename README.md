# Minimal Apple-like React + TypeScript App

Projektziel
- Ein kleines, elegantes Beispielprojekt mit React + TypeScript umgesetzt mit Vite.
- Zeigt ein Eingabefeld, einen Button und ein Ausgabefeld, wobei alle Zahlen im
  eingegebenen Text durch '*' ersetzt werden.

Projektstruktur
- index.html — HTML entry
- src/main.tsx — mountet die App
- src/App.tsx — Hauptkomponente
- src/style.css — minimalistisches Styling
- src/assets/ — Bilder / Icons
- src/utils/ — Hilfsfunktionen
- tests/ — Jest-Tests
- .github/workflows/build.yml — CI: build + deploy auf GitHub Pages
- codex_prompts/ — gespeicherte Prompts

Installation
1. Node.js (>=18) installieren
2. Abhängigkeiten installieren:

```bash
# irgendwelche weitere installation 
npm install (vite, react, lint) ist noch nicht ganz klar
#npm ci das klemmt, nicht verstanden
```

3. Dev-Server starten:
```bash
npm run dev
```

Build & Deployment
- Build lokal: `npm run build` — erzeugt `dist/`.
- CI: GitHub Actions baut bei Push auf `main` und deployed `dist/` zu GitHub Pages.

- von GitHub: git clone https://github.com/extosch/hello_world.git
- zu GitHub: 

Tests & Linting
- Tests ausführen: `npm test` (Jest)
- Linter: `npm run lint`
- Formatierung: `npm run format`

Hinweise
- Der Ersatz der Zahlen ist in `src/utils/replaceDigits.ts` implementiert und
  wird in `src/App.tsx` verwendet.

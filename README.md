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


Test
Dev-Server starten:
```bash
npm run dev
```
Hier läuft dann die Testseite: http://localhost:5173/


Build & Deployment
- Build lokal: `npm run build` — erzeugt `dist/`.
- CI: GitHub Actions baut bei Push auf `main` und deployed `dist/` zu GitHub Pages.

- von GitHub: 
```bash
git clone https://github.com/extosch/hello_world.git
```

- zu GitHub: 
```bash
# 1. Status prüfen
git status

# 2. Alle Änderungen hinzufügen
git add .

# 3. Commit erstellen
git commit -m "Initial Vite React TS Projekt"

# 4. Remote prüfen (sollte origin sein)
git remote -v

# 5. Pushen
git push -u origin main
```

Tests & Linting
- Tests ausführen: `npm test` (Jest)
- Linter: `npm run lint`
- Formatierung: `npm run format`

Hinweise
- Der Ersatz der Zahlen ist in `src/utils/replaceDigits.ts` implementiert und
  wird in `src/App.tsx` verwendet.

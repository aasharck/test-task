# Dizzaract — Frontend Developer Test Task

## Setup & Running

```bash
npm install
npm run dev       # development server at http://localhost:5173
npm run build     # production build
npm run preview   # preview the production build locally
```

---

## Project Structure

```
src/
├── assets/           SVG icons and logos
├── components/
│   ├── ui/           Reusable primitives (Button, Badge, DropdownMenu)
│   ├── Layout.jsx    Persistent shell — sidebar, header, bottom nav, <Outlet />
│   ├── Sidebar.jsx   Desktop collapsible nav (NavLink, badge support)
│   ├── Header.jsx    Top bar — page title on mobile, balance+avatar on desktop
│   ├── BottomNav.jsx Mobile tab bar
│   ├── ApiKeysTable.jsx  Desktop table view
│   ├── ApiKeysList.jsx   Mobile card list view
│   └── ContextMenu.jsx   Per-row actions dropdown
├── data/
│   └── mockData.js   Placeholder data
├── lib/
│   └── utils.js      cn() helper — merges Tailwind classes safely
├── pages/
│   └── ApiKeysPage.jsx
└── App.jsx           Route definitions
```

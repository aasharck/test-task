# Test Task

## Setup & Running

```bash
npm install
npm run dev       # development server at http://localhost:5173
npm run build     # production build
npm run preview   # preview the production build locally
```

---

## Project Overview

Built with React, Tailwind CSS, and shadcn/ui.

The bonus section, which is the animation part, can be accessed via `/chat`. I wanted the UI to be exactly the same, so I did not add it to the sidebar.

Kindly note that the animation sequence had some problems as I could not export it as SVGs. Currently, I have used PNGs for it, and I was only able to do it with one color (purple).

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
│   ├── ApiKeysPage.jsx
│   └── ChatPage.jsx
└── App.jsx           Route definitions
```

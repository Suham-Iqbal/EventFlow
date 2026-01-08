# EventFlow - Featured Events Page

A responsive single-page application for discovering local events, built as part of a web development internship case study.

## Technologies Used

- **React 18** - Component-based UI library
- **Vite** - Fast build tool and development server
- **CSS3** - Custom styling with CSS variables for theming
- **Lucide React** - Icon library

## Features

- Responsive design (mobile, tablet, desktop)
- Event filtering by category
- Search functionality
- Interactive UI with hover effects
- Newsletter subscription section

## How to Run

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open http://localhost:5173 in your browser

## Build for Production

```bash
npm run build
```

The production files will be in the `dist` folder.

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── FeaturedEvents.jsx
│   ├── EventCard.jsx
│   ├── Newsletter.jsx
│   └── Footer.jsx
├── data/
│   └── events.json
├── App.jsx
├── main.jsx
└── index.css
```

## Author

Developed for Dynamics 360 Web Development Internship Case Study.

# kathmandu-jam-free-route

A real-time, mobile-responsive route finder for Kathmandu Valley that helps users navigate jam-free roads using live traffic data and interactive maps.

## Project Structure

- `/frontend` — Frontend application built with Next.js.  
  Currently, this is the only part of the project.  
  **Recent updates:**

  - Added a resetMap feature using `useRef` to return the map to its initial position.
  - Menu is now visible only when no modal is open on the screen.
  - Added mock data for traffic situations; notifications now appear for heavy traffic regions on the map.
  - Implemented a notification modal to display information about heavy traffic

- `/backend` — _(Coming soon)_ Backend API and server to provide live traffic data and route calculations.

## Getting Started

### Frontend

To run the frontend locally:

```bash
cd frontend
npm install
npm run dev
```

# kathmandu-jam-free-route

A real-time, mobile-responsive route finder for Kathmandu Valley that helps users navigate jam-free roads using live traffic data and interactive maps.

## Project Structure

- `/frontend` — Frontend application built with Next.js.  
  Currently, this is the only part of the project.  
  **Recent updates:**

  - Allowed user location to be marked on the map by enabling browser location through a built-in component.
  - Enabled marking of destination on the map using coordinates.
  - Added Select Menu for source and destination: Selecting source and destination names from the menu provides their respective coordinates, and when used, replaces the direct destination and current location markers on the map with the selected source and destination.

- `/backend` — _(Coming soon)_ Backend API and server to provide live traffic data and route calculations.

## Getting Started

### Frontend

To run the frontend locally:

```bash
cd frontend
npm install
npm run dev
```

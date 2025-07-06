# kathmandu-jam-free-route

A real-time, mobile-responsive route finder for Kathmandu Valley that helps users navigate jam-free roads using live traffic data and interactive maps.

## Project Structure

- `/frontend` — Frontend application built with Next.js.  
  Currently, this is the only part of the project.  
  **Recent updates:**  
  - Integrated Google Maps API using an API key stored in `.env.local`, replacing the static map with an interactive map.
  - Added Bottom Navigation Menu for quick access to Map, Alternate Routes, Location Selection, Traffic Updates, and User Login.
  - Implemented color-coded Traffic Status Legend in the menu for clear road condition indicators.
  - Added modal popups for location selection (source/destination) and user authentication (login/register).
  - Display user name in the menu when logged in.
  - Improved mobile responsiveness and overall user experience.
  - Enhanced context usage for user state management.

- `/backend` — *(Coming soon)* Backend API and server to provide live traffic data and route calculations.

## Getting Started

### Frontend

To run the frontend locally:

```bash
cd frontend
npm install
npm run dev
```

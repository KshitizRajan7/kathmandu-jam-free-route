# Kathmandu Jam-Free Route Finder (Frontend)

This is the frontend of the **Kathmandu Jam-Free Route Finder** project, built with [Next.js](https://nextjs.org).

It provides a user interface to find traffic-free routes in Kathmandu Valley, featuring a demo map, location selection modal, and real-time route updates.

## Features

- **Bottom Navigation Menu** for quick access to:
  - Map
  - Alternate Routes
  - Location Selection (opens a modal for source/destination)
  - Traffic Updates
  - User Login (shows user name if logged in)
- **Traffic Status Legend** in the menu to indicate road conditions (Smooth, Moderate, Heavy, Traffic jams)
- **User Authentication Modal** with login and register forms (popup on clicking the user icon)
- **Source/Destination Selection Modal** for choosing start and end points
- **Responsive Design** for seamless mobile navigation
- **Enhanced Context Usage** for user state management
- **Google Maps Integration** using API key stored in `.env.local` (replaced static map with dynamic rendering)
- **Location Control:** Added "Turn On Location" feature to enable browser geolocation and mark the user's current position on the map
- **Direct Destination Search:** Destination component now searches for coordinates and marks both the user's and destination's locations on the map
- **Select Menu for Source/Destination:** Selecting source and destination names from the menu provides their respective coordinates and, when used, replaces the direct destination and current location markers on the map with the selected source
- **Reset Map:** Added a resetMap feature using `useRef` to return the map to its initial position
- **Conditional Menu Visibility:** Menu is now visible only when no modal is open on the screen
- **Mock Traffic Data:** Added mock data for traffic situations; notifications now appear for heavy traffic regions on the map
- **Notification Modal:** Implemented a notification modal to display information about heavy traffic regions
- **TrafficPolice Cartoon:** Added a trafficPolice cartoon that appears to notify users about heavy traffic in Kathmandu Valley. The cartoon is visible only when there are no markers on the map or when the map is reset. In the future, this will act as a chatbot/AI guide for users.
- **AlternateRoute Modal:** Added an AlternateRoute modal to suggest alternate routes with lower traffic congestion levels. Currently, this is a modal; in the future, it will use the Directions API for route suggestions.
- **TrafficStatus Modal:** Added a TrafficStatus modal to display detailed traffic information about the selected location.

## Recent Updates (July 11, 2025)

- Added AlternateRoute modal to suggest alternate routes with lower traffic congestion levels (Directions API integration planned).
- Added TrafficStatus modal to display detailed traffic information about the selected location.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

Edit `app/page.tsx` and save to reload the page.

## Learn More

To learn more about Next.js, React, and Tailwind CSS, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

You can also check out the [Next.js GitHub repository](https://github.com/vercel/next.js/) to see the source code for this project.

## Contributing

If you want to contribute to this project, please follow these steps:

1. Fork the repository on GitHub.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with clear, descriptive messages.
4. Push your branch to your forked repository.
5. Submit a pull request to the original repository.

Please make sure to follow the existing code style and conventions. Also, ensure that your code is well-tested and does not break any existing functionality.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the need for efficient navigation in congested urban areas.
- Leveraging modern web technologies for a seamless user experience.
- Commitment to open-source principles and community collaboration.

---

Made with ❤️ by the Kathmandu Jam-Free Route Finder team.

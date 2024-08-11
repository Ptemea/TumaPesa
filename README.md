
npx expo-doctor
npx expo install --fix

<!-- removes dependencies -->
rm package-lock.json
rm -rf node_modules

<!-- Install expo latest -->
npm install expo@latest

<!-- Install the remainder of the depencies and fix versions -->
npx expo install --fix

<!-- start expo -->
npm run start


open -a Simulator.app


Migrate from React Navigation:
https://docs.expo.dev/router/migrate/from-react-navigation/
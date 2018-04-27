import { Navigation } from 'react-native-navigation';

import GridNavScreen from './src/screens/NavScreens/GridNavScreen';

// Register Screens
Navigation.registerComponent("kaomoji.GridNavScreen", () => GridNavScreen);

// Start an App
Navigation.startSingleScreenApp({
    screen: {
        screen: 'kaomoji.GridNavScreen', // unique ID registered with Navigation.registerScreen
        title: 'Kaomoji Collection' // title of the screen as appears in the nav bar (optional)
    }
});
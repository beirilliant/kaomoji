import { Navigation } from 'react-native-navigation';

import GridNavScreen from './src/screens/NavScreens/GridNavScreen';
import KaomojiScreen from './src/screens/KaomojiScreens/KaomojiScreen';

// Register Screens
Navigation.registerComponent("kaomoji.GridNavScreen", () => GridNavScreen);
Navigation.registerComponent("kaomoji.KaomojiScreen", () => KaomojiScreen);

// Start an App
Navigation.startSingleScreenApp({
    screen: {
        screen: 'kaomoji.GridNavScreen', // unique ID registered with Navigation.registerScreen
        title: 'Collection' // title of the screen as appears in the nav bar (optional)
    }
});
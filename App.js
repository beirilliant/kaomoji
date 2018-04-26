import { Navigation } from 'react-native-navigation';

import MostUsedScreen from './src/screens/KaomojiScreens/MostUsedScreen';

// Register Screens
Navigation.registerComponent("kaomoji.MostUsedScreen", () => MostUsedScreen);

// Start an App
Navigation.startSingleScreenApp({
    screen: {
        screen: 'kaomoji.MostUsedScreen', // unique ID registered with Navigation.registerScreen
        title: 'Most Used' // title of the screen as appears in the nav bar (optional)
    }
});
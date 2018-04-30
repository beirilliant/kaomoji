import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import ListNavItem from '../../components/ListNavItem/ListNavItem';

class GridNavScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            customData: require('../../../kaomoji-export.json')
        };
    }

    navItemHandler = key => {
        const kaomojiArr = this.state.customData[key];
        this.props.navigator.push({
            screen: 'kaomoji.KaomojiScreen', // unique ID registered with Navigation.registerScreen
            title: key, // navigation bar title of the pushed screen (optional)
            passProps: {
                selKaomoji: kaomojiArr
            } // Object that will be passed as props to the pushed screen (optional)
          });
    }
    
    render () {
        
        const navArr = [];
        
        for (key in this.state.customData) {
            navArr.push(key);
        }
        
        const navItems = navArr.map((item) => (
            <ListNavItem key={item} navName={item} onItemPressed={() => this.navItemHandler(item)}/>
        ));

        return (
            <ScrollView >
                <View style={styles.gridNav}>
                   { navItems }
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    gridNav: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10
    }
})

export default GridNavScreen;
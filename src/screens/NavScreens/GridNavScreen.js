import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import ListNavItem from '../../components/ListNavItem/ListNavItem';

class GridNavScreen extends Component {

    navItemHandler = () => {
        this.props.navigator.push({
            screen: 'kaomoji.KaomojiScreen', // unique ID registered with Navigation.registerScreen
            title: 'new Screen' // navigation bar title of the pushed screen (optional)
          });
    }
    
    render () {
        const customData = require('../../../faces.json');
        
        const navArr = [];
        
        for (key in customData) {
            navArr.push(key);
        }
        
        const navItems = navArr.map((item) => (
            <ListNavItem key={item} navName={item} onItemPressed={() => this.navItemHandler()}/>
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
        padding: 20
    }
})

export default GridNavScreen;
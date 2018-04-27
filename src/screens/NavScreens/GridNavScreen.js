import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import ListNavItem from '../../components/ListNavItem/ListNavItem';

const customData = require('../../../faces.json');

const navItems = customData.Faces.map((item, i) => (
    <ListNavItem key={i} navName={item.name} />
));

class GridNavScreen extends Component {

    render () {
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
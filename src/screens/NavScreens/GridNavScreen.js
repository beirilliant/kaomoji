import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ListNavItem from '../../components/ListNavItem/ListNavItem'


class GridNavScreen extends Component {

    render () {
        return (
            <View style={styles.gridNav}>
                <ListNavItem />
                <ListNavItem />
                <ListNavItem />
                <ListNavItem />
                <ListNavItem />
                <ListNavItem />
                <ListNavItem />
            </View>
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
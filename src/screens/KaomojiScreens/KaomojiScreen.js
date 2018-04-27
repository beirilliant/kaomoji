import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

class KaomojiScreen extends Component {
    render () {
        return (
            <View style={styles.gridNav}>
                <Text>KaomojiScreen</Text>
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

export default KaomojiScreen;
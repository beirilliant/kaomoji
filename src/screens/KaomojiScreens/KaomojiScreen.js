import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';

import ListKaomojiItem from '../../components/ListKaomojiItem/ListKaomojiItem';

class KaomojiScreen extends Component {

    render () {
        const kaomojiItems = this.props.selKaomoji.map((item) => (
            <ListKaomojiItem key={item} selKaomoji={item} />
        ));

        return (
            <View style={styles.gridNav}>
                {kaomojiItems}
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
import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, TextInput } from 'react-native';

import ListKaomojiItem from '../../components/ListKaomojiItem/ListKaomojiItem';

class KaomojiScreen extends Component {

    render () {
        const kaomojiItems = this.props.selKaomoji.map((item, i) => (
            <ListKaomojiItem key={i} selKaomoji={item} />
        ));

        return (
            <ScrollView>
                <View style={styles.gridNav}>
                    {kaomojiItems}
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

export default KaomojiScreen;
import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const listKaomojiItem = (props) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listText}>{props.selKaomoji.name}</Text>
            <Text style={styles.listText}>{props.selKaomoji.art}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        width: '30%',
        padding: 20,
        marginBottom: 15,
        borderWidth: 1,
        borderRadius: 5
    },
    listText: {
        textAlign: 'center',
        fontSize: 24
    }
}) 

export default listKaomojiItem

import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const listKaomojiItem = (props) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <Text style={styles.listHeading}>{props.selKaomoji.name}</Text>
            <Text style={styles.listKaomoji}>{props.selKaomoji.art}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        width: '48%',
        padding: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderRadius: 5
    },
    listHeading: {
        textAlign: 'center',
        fontSize: 24,
        marginBottom: 5
    },
    listKaomoji: {
        textAlign: 'center'
    }
}) 

export default listKaomojiItem

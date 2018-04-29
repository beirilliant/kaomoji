import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const listNavItem = (props) => {
    return (
        <TouchableOpacity style={styles.listItem} onPress={props.onItemPressed}>
            <Text style={styles.listText}>{props.navName}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        width: '30%',
        padding: 20,
        marginBottom: 15,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#E3F2F1'
    },
    listText: {
        textAlign: 'center',
        fontSize: 24
    }
}) 

export default listNavItem

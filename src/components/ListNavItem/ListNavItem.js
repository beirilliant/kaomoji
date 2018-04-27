import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const listNavItem = () => {
    return (
        <View style={styles.listItem}>
            <Text style={styles.listText}>smile</Text>
        </View>
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

export default listNavItem

import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../../../utils';

const TextOnly = ({ title }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

export default TextOnly

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        padding: 10,
        borderRadius: 5
    },
    text: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 13,
        fontFamily: fonts.primary.bold
    }
})


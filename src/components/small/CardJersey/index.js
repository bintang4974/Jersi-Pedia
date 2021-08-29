import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors, fonts, responsiveWidth } from '../../../utils';
import Button from '../Button';

const CardJersey = ({ jersey }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.card}>
                <Image source={jersey.gambar[0]} style={styles.image} />
                <Text style={styles.text}>{jersey.nama}</Text>
            </TouchableOpacity>
            <Button type="text" title="Detail" />
        </View>
    )
}

export default CardJersey

const styles = StyleSheet.create({
    container: {
        marginBottom: 25
    },
    card: {
        backgroundColor: colors.yellow,
        width: responsiveWidth(150),
        alignItems: 'center',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10
    },
    image: {
        width: 124,
        height: 124
    },
    text: {
        fontSize: 13,
        fontFamily: fonts.primary.bold,
        textTransform: 'capitalize',
        textAlign: 'center'
    }
})

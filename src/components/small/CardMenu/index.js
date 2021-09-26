import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconArrowRight } from '../../../assets';
import { colors, fonts, responsiveHeight } from '../../../utils';

const CardMenu = ({ menu }) => {
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.menu}>
                    {menu.gambar}
                    <Text style={styles.text}>{menu.nama}</Text>
                </View>
                <IconArrowRight />
            </View>
        </TouchableOpacity>
    )
}

export default CardMenu

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 15,
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        marginHorizontal: 30,
        padding: responsiveHeight(15),
        borderRadius: 10,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    menu: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        fontFamily: fonts.primary.bold,
        marginLeft: 20
    }
})

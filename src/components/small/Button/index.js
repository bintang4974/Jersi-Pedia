import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconCart } from '../../../assets';
import { colors } from '../../../utils';
import TextOnly from './TextOnly';

const Button = (props) => {

    const Icon = () => {
        if (icon === "cart") {
            return <IconCart />
        }

        return <IconCart />
    }

    const { icon, totalCart, type } = props;

    if (type === "text") {
        return <TextOnly {...props} />
    }

    return (
        <TouchableOpacity style={styles.container}>
            <Icon />
            {totalCart && (
                <View style={styles.notif}>
                    <Text style={styles.textNotif}>{totalCart}</Text>
                </View>
            )}
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        padding: 10,
        borderRadius: 5
    },
    notif: {
        position: 'absolute',
        right: 5,
        top: 5,
        backgroundColor: 'red',
        borderRadius: 3,
        padding: 3
    },
    textNotif: {
        fontSize: 8,
        color: colors.white
    }
})

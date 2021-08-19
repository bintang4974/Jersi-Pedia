import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { IconSearch } from '../../../assets';
import { colors, responsiveHeight } from '../../../utils';
import { Button, Gap } from '../../small';

export default class HeaderComp extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.wrapperHeader}>
                    <View style={styles.searchSection}>
                        <IconSearch />
                        <TextInput placeholder="Cari Jersey. . ." style={styles.input} />
                    </View>
                    <Gap width={10} />
                    <Button icon="cart" totalCart={2} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        height: responsiveHeight(125)
    },
    wrapperHeader: {
        marginTop: 15,
        marginHorizontal: 30,
        flexDirection: 'row',
    },
    searchSection: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colors.white,
        borderRadius: 5,
        paddingHorizontal: 10,
        alignItems: 'center'
    },
    input: {
        fontSize: 16,
    }
})

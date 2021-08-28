import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BannerSlider, HeaderComp, ListLiga } from '../../components';
import { dummyLiga } from '../../data';
import { colors, fonts } from '../../utils';

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            liga: dummyLiga
        }
    }

    render() {
        const { liga } = this.state;

        return (
            <View style={styles.page}>
                <HeaderComp />
                <BannerSlider />
                <View style={styles.wrapperLiga}>
                    <Text style={styles.label}>Pilih Liga</Text>
                    <ListLiga ligas={liga} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    wrapperLiga: {
        marginHorizontal: 30,
        marginTop: 10
    },
    label: {
        fontSize: 18,
        fontFamily: fonts.primary.regular
    }
})

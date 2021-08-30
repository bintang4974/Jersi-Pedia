import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Gap, HeaderComp, ListJerseys, ListLiga } from '../../components';
import { dummyJersey, dummyLiga } from '../../data';
import { colors, fonts } from '../../utils';

export default class ListJersey extends Component {
    constructor(props) {
        super(props)

        this.state = {
            liga: dummyLiga,
            jersey: dummyJersey,
        }
    }

    render() {
        const { liga, jersey } = this.state;

        return (
            <View style={styles.page}>
                <HeaderComp />
                <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
                    <View style={styles.wrapperLiga}>
                        <ListLiga ligas={liga} />
                    </View>
                    <View style={styles.wrapperJersey}>
                        <Text style={styles.label}>Pilih <Text style={styles.boldLabel}>Jersey</Text> Yang Anda Inginkan</Text>
                        <ListJerseys jerseys={jersey} />
                    </View>
                    <Gap height={100} />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    container: {
        marginTop: -30
    },
    wrapperLiga: {
        marginHorizontal: 30,
    },
    wrapperJersey: {
        marginHorizontal: 30,
        marginTop: 10
    },
    label: {
        fontSize: 18,
        fontFamily: fonts.primary.regular
    },
    boldLabel: {
        fontSize: 18,
        fontFamily: fonts.primary.bold
    }
})

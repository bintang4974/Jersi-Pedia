import React, { Component } from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { dummyMenu, dummyProfile } from '../../data';
import { colors, fonts, responsiveHeight, responsiveWidth, heightMobileUI } from '../../utils';
import { RFValue } from "react-native-responsive-fontsize";
import { ListMenu } from '../../components';

export default class Profile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: dummyProfile,
            menus: dummyMenu
        }
    }

    render() {
        const { profile, menus } = this.state
        return (
            <View style={styles.page}>
                <View style={styles.container}>
                    <Image source={profile.avatar} style={styles.photo} />
                    <View style={styles.profile}>
                        <Text style={styles.nama}>{profile.nama}</Text>
                        <Text style={styles.desc}>No. HP: {profile.nomerHp}</Text>
                        <Text style={styles.desc}>{profile.alamat}, {profile.kota}</Text>
                    </View>

                    <ListMenu menus={menus} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.primary
    },
    container: {
        position: 'absolute',
        bottom: 0,
        height: responsiveHeight(680),
        width: '100%',
        backgroundColor: colors.white,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40
    },
    photo: {
        width: responsiveWidth(150),
        height: responsiveHeight(150),
        borderRadius: 40,
        alignSelf: 'center',
        marginTop: -responsiveWidth(75)
    },
    profile: {
        marginTop: 10,
        alignItems: 'center'
    },
    nama: {
        fontSize: RFValue(24, heightMobileUI),
        fontFamily: fonts.primary.bold
    },
    desc: {
        fontSize: RFValue(18, heightMobileUI),
        fontFamily: fonts.primary.regular
    }
})
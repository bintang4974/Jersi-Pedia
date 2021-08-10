import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Illustration, Logo } from '../../assets';

export default class Splash extends Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.replace('MainApp');
        }, 3000);
    }

    render() {
        return (
            <View style={styles.page}>
                <Logo />
                <View style={styles.illustration}>
                    <Illustration />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    illustration: {
        position: 'absolute',
        bottom: 0,
        right: 0
    }
})

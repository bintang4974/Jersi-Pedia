import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CardJersey } from '../../small';

const ListJersey = ({ jerseys }) => {
    return (
        <View style={styles.container}>
            {jerseys.map((jersey) => {
                return(
                    <CardJersey key={jersey.id} jersey={jersey} />
                )
            })}
        </View>
    )
}

export default ListJersey

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginTop: 10
    }
})

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { CardMenu } from '../../small';

const ListMenu = ({ menus }) => {
    return (
        <View>
            {menus.map((menu) => {
                return (
                    <CardMenu menu={menu} key={menu.id} />
                )
            })}
            <Text></Text>
        </View>
    )
}

export default ListMenu

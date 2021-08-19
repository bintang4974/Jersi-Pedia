import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconHome, IconHomeActive, IconJersey, IconJerseyActive, IconProfile, IconProfileActive } from '../../../assets';
import { colors } from '../../../utils';

const Icon = ({ label, focus }) => {
    switch (label) {
        case 'Home':
            return focus ? <IconHomeActive /> : <IconHome />
        case 'Jersey':
            return focus ? <IconJerseyActive /> : <IconJersey />
        case 'Profile':
            return focus ? <IconProfileActive /> : <IconProfile />
        default:
            return <IconHomeActive />
    }
}

const BottomNavigator = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <View style={styles.container}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <TouchableOpacity
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={styles.wrapperIcon}
                    >
                        <Icon label={label} focus={isFocused} />
                        <Text style={styles.text(isFocused)}>
                            {label}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}

export default BottomNavigator;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        flexDirection: 'row',
        backgroundColor: colors.primary,
        paddingVertical: 8,
        paddingHorizontal: 34,
        marginBottom: 30,
        marginHorizontal: 30,
        borderRadius: 5,
        justifyContent: 'space-between',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    wrapperIcon: {
        alignItems: 'center'
    },
    text: (isFocused) => ({
        color: isFocused ? colors.white : colors.secondary,
        fontSize: 11,
        marginTop: 4
    })
});
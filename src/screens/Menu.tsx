import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useTheme } from '@react-navigation/native';
import { StyleSheet, View } from 'react-native';
import { colors } from '../utils/colors';
import ComicsList from './ComicList';
import HelloWorld from './HelloWorld';

const Tab = createMaterialBottomTabNavigator();

export default function Menu() {
    const theme = useTheme();
    theme.colors.primary = colors.lightGray;

    return (
        <View style={styles.container}>
            <Tab.Navigator
                activeColor={colors.white}
                inactiveColor={colors.lightGray}
                barStyle={styles.navigationBar}>
                <Tab.Screen
                    name='HelloWorld'
                    component={HelloWorld}
                    options={{
                        tabBarLabel: 'HelloWorld',
                        tabBarIcon: () => (
                            <MaterialCommunityIcons
                                name='home'
                                size={26}
                                color={colors.white}
                            />
                        ),
                    }}
                />

                <Tab.Screen
                    name='Comics'
                    component={ComicsList}
                    options={{
                        tabBarBadge: '7',
                        tabBarLabel: 'Comics',
                        tabBarIcon: () => (
                            <MaterialCommunityIcons
                                name='book-open-page-variant'
                                size={26}
                                color={colors.white}
                            />
                        ),
                    }}
                />
            </Tab.Navigator>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navigationBar: {
        backgroundColor: colors.darkGreen,
        padding: 5,
        borderTopWidth: 1,
        borderTopColor: colors.black,
    },
});

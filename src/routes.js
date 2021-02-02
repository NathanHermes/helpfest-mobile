import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { useNavigation } from "@react-navigation/native";

const AppStack = createStackNavigator();
const AppDrawer = createDrawerNavigator();

import Entrada from './pages/Entrada';
import Login from './pages/Login';
import Cadastrar from './pages/Cadastrar';
import Home from './pages/Home';
import DetalheEvento from './pages/DetalheEvento';

export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator  screenOptions={{ headerShown: false }}>
                {/* <AppDrawer.Screen name="Entrada" component={Entrada} />
                <AppDrawer.Screen name="Login" component={Login} />
                <AppDrawer.Screen name="Cadastrar" component={Cadastrar} /> */}
                <AppDrawer.Screen name="Home" component={Home} />
                <AppDrawer.Screen name="DetalheEvento" component={DetalheEvento} />
            </AppStack.Navigator>
        </NavigationContainer>
    );
}
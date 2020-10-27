import React, {Component } from 'react';
import {  StyleSheet, Text, View, TextInput, Button,TouchableOpacity} from 'react-native';

import { createStackNavigator } from "@react-navigation/stack";
import Home2 from './login';
import Home3 from './signup';
import Contact from './contact';
import Contact2 from './contact2';
import Contact3 from './contact3';
import Contact4 from './contact4';
import DashboardMain from './dashboardMain';
import Supplier from './supplier';
import loginVendor from './loginVendor';
import signupVendor from './signupVendor';
import vendorProfile from './vendorProfile';
import SearchEvent from './searchEvent';
import DrawerNavigator from './DrawerNavigator';
import BanquetHall01 from './banquetHall01';
import Hall01Book from './hall01Book';
import Budget from './budget';
const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false,}}>
      <Stack.Screen name="Home" component={Home2} />
      <Stack.Screen name="About" component={Home3} />
      <Stack.Screen name="loginVendor" component={loginVendor} />
      <Stack.Screen name="signupVendor" component={signupVendor} />
      <Stack.Screen name="vendorProfile" component={vendorProfile} />
      <Stack.Screen name="Dashboard" component={DrawerNavigator} />
      <Stack.Screen name="Contact" component={Contact}/>
      <Stack.Screen name="Contact2" component={Contact2} />
      <Stack.Screen name="Contact3" component={Contact3} />
      <Stack.Screen name="Contact4" component={Contact4} />
      <Stack.Screen name="DashboardMain" component={DashboardMain} />
      <Stack.Screen name="Supplier" component={Supplier} />
      <Stack.Screen name="SearchEvent" component={SearchEvent} />
      <Stack.Screen name="BanquetHall01" component={BanquetHall01} />
      <Stack.Screen name="Hall01Book" component={Hall01Book} />
      <Stack.Screen name="Budget" component={Budget} />
    </Stack.Navigator>
  );
}
const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#953CE0",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};



export  {MainStackNavigator};
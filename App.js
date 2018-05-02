import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  FlatList
} from "react-native";

//library imports 
import { Container, Content, Icon, Header, Body } from 'native-base'
import { DrawerNavigator, StackNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather'
import MaterialIcon from 'react-native-vector-icons//MaterialIcons'

//custom files 

import SettingsScreen from './SettingsScreen'
import HomeScreen from "./HomeScreen";
import ShowsScreen from "./ShowsScreen";
import NewsScreen from "./NewsScreen";
import SpecialsScreen from "./SpecialsScreen";
import BusinessScreen from "./BusinessScreen";
import LiveTvScreen from "./LiveTvScreen";
import ListShowsScreen from "./ListShowsScreen";
import AutoScreen from "./AutoScreen";
import TestScreen from './TestScreen'
const customData  = require('./sample1.json');
var styles = require('./css_cxc');
var content;


export default class App extends Component {

  render() {
    return (
      <MyApp />
    )
  }
}

const CustomDrawerContentComponent = (props) => (

  <Container style={styles.drawerHeader}>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('./assets/DrawerIcons/logo_news18.png')} />
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>

  </Container>

);

const MyApp = DrawerNavigator({

  // For each screen that you can navigate to, create a new entry like this:
  Shows: {
    screen: ShowsScreen
  },
  News: {
    screen: NewsScreen
  },
  Specials: {
    screen: SpecialsScreen
  },
  Business: {
    screen: BusinessScreen
  },
  Auto: {
    screen: AutoScreen
  },
  LiveTv: {
    screen: StackNavigator({
      LiveTvs: { screen: LiveTvScreen },
      ListShows: { screen: ListShowsScreen }
    },
    {
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
  })
  } 
},
  {
    initialRouteName: 'Auto',
    drawerPosition: 'left',
    drawerWidth: 170,
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerBackgroundColor: '#eb3232',
    contentOptions: {
      labelStyle: {
        fontSize: 20
      },
      activeTintColor: 'yellow',
      inactiveTintColor: 'white',
    },
    navigationOptions: {
      headerTitleStyle: {
        color: '#fff'
      },
    }
  });
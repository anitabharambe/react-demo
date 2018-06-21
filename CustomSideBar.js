import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Dimensions
} from "react-native";

import Config from './Config';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Icon } from 'native-base'
import FeatherIcon from 'react-native-vector-icons/Feather'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
const { width, height } = Dimensions.get('window');

class CustomSideBar extends Component {
  
  constructor(props) {
    super(props);
    this.defineCssFile();
  }

  defineCssFile() {
    const { width, height } = Dimensions.get('window');
    if (width == 1280 && height == 752) {
      Config.STYLE = require('./css_cxc');
      numColumns = 4;
    } else {
      Config.STYLE = require('./css_dxc');
      numColumns = 2;
    }
    styles = Config.STYLE;
  }
    render() {
        return (
          <View style={styles.SideBarContainer}>

            <View style={styles.MenuIcons} >
              <Icon name="ios-menu" style={{ color: "#ffffff" }} onPress={() => this.props.drawerOpen("DrawerOpen")} />
            </View>

            <View style={styles.MenuIcons} >
              <FeatherIcon name="tv"  size={25} style={{ color: "#ffffff" }} onPress={ () => this.props.drawerOpen('Shows') } />
            </View>

            <View style={styles.MenuIcons} >
              <FontAwesomeIcon name="newspaper-o" size={25} style={{ color: "#ffffff" }} onPress={() => this.props.drawerOpen('News')} />
            </View>

            <View style={styles.MenuIcons} >
              <FontAwesomeIcon name="video-camera" size={25} style={{ color: "#ffffff" }} onPress={() => this.props.drawerOpen('Specials')} />
            </View>

            <View style={styles.MenuIcons} >
              <MaterialIcon name="business" size={29} style={{ color: "#ffffff" }} onPress={() => this.props.drawerOpen('Business')} />
            </View>

            <View style={styles.MenuIcons} >
              <FontAwesomeIcon name="bus" size={25} style={{ color: "#ffffff" }} onPress={() => this.props.drawerOpen('Auto')} />
            </View>

            <View style={styles.MenuIcons} >
              <MaterialIcon name="live-tv" size={25} style={{ color: "#ffffff" }} onPress={() => this.props.drawerOpen('LiveTv')} />
            </View>

            <View style={styles.MenuIcons} >
              <MaterialIcon name="newspaper-o" size={25} style={{ color: "#ffffff" }} onPress={() => this.props.drawerOpen('Examples')} />
            </View>
          </View>
        );
    }
}
export default CustomSideBar;
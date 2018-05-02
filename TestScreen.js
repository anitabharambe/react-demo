import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  ActivityIndicator,
  TouchableWithoutFeedback
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left, List, ListItem } from 'native-base'


//custom components imports 
import CustomHeader from './CustomHeader'
import CustomSideBar from './CustomSideBar'
import ShowsRow from './ShowsRow'
import OlaPlay from './OlaPlay';
import Config from './Config';
import COLORS from './colors';
import IMAGES from './images';
var styles = require('./css_cxc');
const customData  = require('./sample1.json');
var content;

class TestScreen extends Component {
  
  render() {

    return(
      <View style={{flexDirection: 'row', flex: 1, backgroundColor: '#414a4c'}}>
        <View style={{flexDirection: 'column' , backgroundColor: '#eb3232', justifyContent: 'center', alignItems: 'center', width: 100}}>
        </View>
        
        <View style={{flexDirection: 'column', flex: 1, backgroundColor: '#414a4c'}}>
          <View style={{flex: 1, height: 50, backgroundColor: 'powderblue'}}>
          </View>
          <View style={{flex: 4, backgroundColor: 'blue'}}>
          </View>
        </View>
        
      </View>
    )
  }

}

export default TestScreen;

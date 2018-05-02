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

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loaded: true,
      content: [],
    };
    //OlaPlay.showProgress();
    this.defineCssFile();
    Config.SERVICE_ID = this.props.serviceID;
    Config.PROVIDER_ID = this.props.providerID;
    Config.APP_ID = this.props.app_id;
    Config.TAG = Config.TAG + this.props.app_name
    Config.IS_BOTTOM_PANEL_FRAGMENT_VISIBLE = this.props.is_bottom_panel_fragment_visible;
  }

  componentWillMount(){
    this.content = customData.content;
  }

  defineCssFile() {
    const { width, height } = Dimensions.get('window');
    if (width == 1280 && height == 752) {
      Config.STYLE = require('./css_cxc');
    } else {
      Config.STYLE = require('./css_dxc');
    }
    styles = Config.STYLE;
  }
  
  render() {
    console.log('in render menthod')

    content = this.state.content;
    console.log(content.length)

    if (this.state.loaded) {
      //OlaPlay.hideProgress();
      return (
        <View style={{flexDirection: 'row', flex: 1}}>
          <CustomSideBar 
             drawerOpen={() => this.props.navigation.navigate("DrawerOpen")}
          />
          <ShowsRow response={this.content} onPlay={(item, index) => {
            this.playVideo(item, index);
          }} />
        </View>
      );
    } else {
      return (<View style={styles.loadingbgWithPadding}>
          <ActivityIndicator size={50} color="#ffffff" />
          <Text style={styles.desc}>Loading, please wait ...</Text>
        </View>
        );
    }
    
  }

  sendEvent(label, id, action) {
  var data = [];
  data[0] = String(Config.APP_ID);
  data[1] = id;
  OlaPlay.sendEvent(OlaPlay.CLICK, action, label, data);
  }
  playVideo(item, index) {
    console.log('play video method!!!')
    console.log(item['localPath'])
    //OlaPlay.LogD("Video Path ",item['localPath']);
    var inputMap = {};
    inputMap[OlaPlay.URL] = item['localPath'];
    inputMap[OlaPlay.START_POSITION] = 0;
    OlaPlay.playVideo(inputMap);
  }
}

export default HomeScreen;



const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    }
})
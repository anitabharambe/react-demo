/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
  DeviceEventEmitter,
  Dimensions,
  FlatList
} from 'react-native';

import COLORS from './colors';
import IMAGES from './images';
import Config from './Config';
var styles = require('./css_cxc');
var TAG = Config.TAG;
var globalContent = null;
import customData from './sample1.json';
var content;

export default class ShowChannels extends Component {

  constructor(props) {
    super(props);
    this.state = {
          loadMore: true,
          content :{},
          columns: 1
        };
    this.defineCssFile();
    Config.SERVICE_ID = this.props.serviceID;
    Config.PROVIDER_ID = this.props.providerID;
    Config.APP_ID = this.props.app_id;
    Config.TAG = Config.TAG + this.props.app_name
    Config.IS_BOTTOM_PANEL_FRAGMENT_VISIBLE = this.props.is_bottom_panel_fragment_visible;
  }
  componentWillMount() {
    this.setState({
      content:this.props.response,
      columns: this.props.columns
    });
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
    content = this.state.content;

    return (
      <FlatList 
        numColumns={this.state.columns}
        //refreshing={this.state.refreshing}
        data={content}
        keyExtractor={(item, index) => { return index; }}
        renderItem={({ item, index }) => {
          var nextIndex = index + 1;
          return (
            <View key={index} style={{ flexDirection: 'row'}}>
              <ContentRow data={content[index]} index={index} onShow={(screen, screen_name) => {
                this.props.onShow(screen, screen_name);
              }} />
             
            </View>
          );
        }}
      />
    );
  }
}
class ContentRow extends Component {
  render() {
    var item = this.props.data;
    var screen_name = item.name;
    return (

    <TouchableHighlight onPress={() => { 
      this.props.onShow('ListShows', screen_name);
      }
      }>
      <View style={styles.channelThumbnail} >
        <Image style={ styles.thumbnailImage} source={{ uri: item.image }} />
      </View>    
    </TouchableHighlight>
    );
  }
}
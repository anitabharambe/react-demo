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

export default class ShowsRow extends Component {

  constructor(props) {
    super(props);
    this.state = {
          loadMore: true,
          content :{},
          columns: 1
        };
    this.defineCssFile();

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
        //horizontal={true}
        numColumns={this.state.columns}
        //numColumns={ 3 }
        //refreshing={this.state.refreshing}
        data={content}
        keyExtractor={(item, index) => { return index; }}
        renderItem={({ item, index }) => {
          //var nextIndex = index + 1;
          // if (index % 2) {
          //   return null;
          // }
          // else if (index == content.length - 1) {
          //   return (<ContentRow data={content[index]}  index={index} onPlay={(item, index) => { this.props.onPlay(item, item_index); }} />);
          // }
          // else {
            return (
              <View key={index} style={{ flexDirection: 'row'}}>
                <ContentRow data={content[index]} index={index} onPlay={(item, index) => {
                  this.props.onPlay(item, index);
                }} />
               
              </View>
            );
          // }
        }}
      />

    );
    }
}
class ContentRow extends Component {
  render() {
    var item = this.props.data;
    return (

      <TouchableWithoutFeedback key={this.props.index}  onPress={() => {
        this.props.onPlay(item, this.props.index);
      }
      }>
        
        <View style={styles.thumbnail} >
          <Image style={ styles.thumbnailImage} source={{ uri: item.image }} />
          <Text style={styles.title} numberOfLines={5}>{item.name}</Text>
        </View>
        
      </TouchableWithoutFeedback>);
  }
  
}

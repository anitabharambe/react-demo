import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Dimensions,
  ActivityIndicator,
  DeviceEventEmitter,
  TouchableWithoutFeedback
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left, List, ListItem } from 'native-base'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

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
var numColumns;
var userInfo;

class AutoScreen extends Component {
  deviceEmitter:DeviceEventEmitter;
  
  static navigationOptions = ({ navigation }) => ({
    title: "Auto",
    drawerIcon: ({ tintColor }) => {
      return(
        <FontAwesomeIcon name="bus"  size={25} style={{ color: tintColor}}  />
      );      
    }
  })
  constructor(props) {
    super(props);
    this.state = {
      loaded: true,
      content: [],
    };

    // OlaPlay.getLocationDetails((location)=>{
    //    console.log("TAG"+"     playbackState 123   "+location);
    // });

    // OlaPlay.getUserInfo(264,(user)=>{
    //    console.log("TAG"+"     playbackState 124   "+user);
    // });

    // OlaPlay.getUserInfo(1,(user)=>{
    //    console.log("TAG"+"     playbackState 125   "+user);
    // });

    // OlaPlay.showProgress();
    // OlaPlay.getUserInfo('OlaPlayMicroApp', function(e: Event) {
    //                  console.log("TAG"+"     playbackState 344  "+e.playbackState);
    //              });
    //OlaPlay.infoLog("Info Log", "this is log message from Info log method");
    //OlaPlay.debugLog("Debug Log", "this is log message from debug log method");
    // OlaPlay.errorLog("Error Log", "this is log message from error log method");
    // OlaPlay.getDriverInfo((driver)=>{
    //   console.log("Driver Details"+ driver);
    // });
    // OlaPlay.LogI("Information Log", "this is log message from information log method");
    // OlaPlay.LogE("Er Log", "this is log message from err log method");

    // OlaPlay.canReactAppGoBack(false);
     // OlaPlay.getLocationDetails((location)=>{
     //    console.log("TAG"+"     playbackState 125   "+location);
     // });

     // OlaPlay.getCarMovingState((location)=>{
     //    console.log("TAG"+"     playbackState 125   "+location);
     // });

     //OlaPlay.navigateToPoi(18.626076, 73.812157);
     //OlaPlay.loadOlaMoney();


    this.defineCssFile();
    Config.SERVICE_ID = this.props.serviceID;
    Config.PROVIDER_ID = this.props.providerID;
    Config.APP_ID = this.props.app_id;
    Config.TAG = Config.TAG + this.props.app_name
    Config.IS_BOTTOM_PANEL_FRAGMENT_VISIBLE = true;
    // console.log(this.props);
    // console.log("in constructor method");
    // console.log(Config);
  }

  componentWillMount(){
    this.content = customData.auto;

    // this.fetchData(); // this will be used to fetch data from api
  }

  fetchData = async () => {
    const response = await fetch("http://randomuser.me/api?results=10");
    const json = await response.json();
    this.setState({ content: json.content });
  }

  defineCssFile() {
    const { width, height } = Dimensions.get('window');
    if (width == 1280 && height == 752) {
      Config.STYLE = require('./css_cxc');
      numColumns = 4;
    } else {
      Config.STYLE = require('./css_dxc');
      numColumns = 1;
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
        <View style={{flexDirection: 'row', flex: 1, backgroundColor: '#414a4c'}}>
          <CustomSideBar
             drawerOpen={(screen) => this.props.navigation.navigate(screen)}
          />
          <View style={{flex: 1}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={ styles.headingName } >Auto</Text>
              <Image resizeMode='contain' style={{ right: 0, top: 0, width: null, height: null }} source={require('./assets/DrawerIcons/logo_news18.png')} />
            </View>
            <View style={styles.rowsContainer} >
              <ShowsRow columns={numColumns} response={this.content} onPlay={(item, index) => {
                 this.playVideo(item, index);
              }} />
            </View>
          </View>
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
    console.log(item['name'])
    OlaPlay.LogD("Video Path ",item['localPath']);
    OlaPlay.LogD("Video Name ",item['name']);
    var inputMap = {};
    inputMap[OlaPlay.URL] = item['localPath'];
    inputMap[OlaPlay.THUMBNAIL_URL] = item['image']
    // inputMap[OlaPlay.NAME] = item['name'];
    // inputMap[OlaPlay.DESCRIPTION] = "this is test DESCRIPTION for videos";
    // inputMap[OlaPlay.DURATION] = "20";
    console.log("-----------------------------");
    console.log(inputMap);
    OlaPlay.playVideo(inputMap);
  }

  logUserInfo(){
    console.log("In log user info");
  }
}

export default AutoScreen;



const styles = StyleSheet.create({
    icon: {
        height: 24,
        width: 24
    }
})
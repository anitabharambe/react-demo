'use strict';

import { StyleSheet } from 'react-native';
import COLORS from './colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 30,
    paddingLeft: 30,
    backgroundColor: 'black',
    flexDirection: 'column',
  },

  drawerHeader: {
    height: 200,
    backgroundColor: '#990000'
  },
  drawerImage: {
    width: 120,
    height: 120
    //borderRadius: 50
  },


  title: {
    fontSize: 22,
    paddingTop: 8,
    paddingBottom: 32,
    width: 250,
    color: "#ffffff",
    fontFamily: 'Montserrat-ThinItalic',

  },
  playlistName: {
    paddingBottom: 18,
    fontSize: 32,
    paddingLeft: 24,
    color: COLORS.black,
    fontFamily: 'roboto_medium',

  },
  subtitle: {
    fontSize: 12,
    color: COLORS.white,

  },
  thumbnail: {
    width: 275,
    height: 300,
    justifyContent: "center",
    //backgroundColor: "skyblue",
    overflow: "hidden",
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 30,
    borderRadius: 4,
    borderColor: "#0a141e"
  },
  channelThumbnail: {
    width: 275,
    height: 210,
    justifyContent: "center",
    //backgroundColor: "skyblue",
    overflow: "hidden",
    paddingLeft: 10,
    paddingTop: 30,
    borderRadius: 4,
    borderColor: "#0a141e"
  },  
  thumbnailNotAvailable: {
    width: 372,
    height: 210,
    justifyContent: 'center',
    backgroundColor: '#333f4b',
    alignItems: 'center',
    borderRadius: 4,
    borderColor: '#333f4b'
  },
  card: {
    paddingRight: 20,
  },

  durationbtnbg: {
    width: 85,
    height: 28,
    flexDirection: "column",
    alignSelf: "flex-end",
    backgroundColor: "#18212a",
    borderRadius: 2,
    justifyContent: "center",
    marginTop: 177,
    right: 30,
    borderColor: '#18212a',
    opacity: 0.8,
    borderWidth: 1,
    position: "absolute"
  },
  loader: {
    fontFamily: 'roboto_medium',
    fontWeight: '300',
    fontSize: 28,
    color: 'white'
  },

  loadingbg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a141e',
  },
  loadingbgWithPadding: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a141e',
    paddingBottom: 100
  },
  duration: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: 'roboto_regular'

  },
  desc: {
    fontSize: 20,
    color: "#ffffff",
    width: 372,
    justifyContent: 'flex-start',
    fontFamily: 'roboto_regular',
    opacity: 0.6
  },
  defaultimage: {
    width: 372,
    height: 210,
    justifyContent: 'center',
    backgroundColor: '#333f4b',
    alignItems: 'center',
    borderRadius: 4,
    overflow: 'hidden',
    borderColor: '#333f4b'
  },
  hdivider: {
    width: "100%",
    height: 1,
    opacity: 0.2,
    marginLeft: 1,
    marginBottom: 1,
    backgroundColor: '#979797',
    alignSelf: "center"
  },
  headerbar: {
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  header: {
    color: '#ffffff',
    fontSize: 32,
    alignSelf: "center",
    paddingBottom: 18,
    fontFamily: 'gentona_medium'
  },
  hdividerContainer: {
    flex: 1,
    alignSelf: "center"
  },

  vscrollview: {
    paddingLeft: 24,
    paddingTop: 24,
  },
  thumbnail_container: {
    flex: 1,
    borderRadius: 4,
    backgroundColor: '#333f4b',
    borderColor: '#333f4b',
    borderWidth: 1
  },
  SideBarContainer: {
    flexDirection: 'column' ,
    backgroundColor: '#eb3232', 
    justifyContent: 'center',
    alignItems: 'center',
    width: 100
  },
  MenuIcons: {
    width: 75, 
    height: 75, 
    padding: 20  
  },
  thumbnailImage: {
    width: 230, 
    height: 200
  },
  headingName: {
    color: '#fff',
    fontSize: 35,
    paddingLeft: 50,
    paddingTop: 70
  },
  rowsContainer: {
    flex: 4, 
    paddingLeft: 30
  }

});

module.exports = styles;
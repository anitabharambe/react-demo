'use strict';

import {StyleSheet} from 'react-native';
import COLORS from './colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop:4,
    backgroundColor: COLORS.background,
    flexDirection:'column',
  },

  scrollview: {
      paddingLeft:24,
    },
  title: {
      fontSize: 17,
      paddingTop:8,
      paddingBottom:34,
      width: 212,
      color: COLORS.white,
      fontFamily:'roboto_medium',

    },
  subtitle: {
        fontSize: 17,
        color: COLORS.white
      },
   thumbnail:{
   // width:212,
   // height:120,
   justifyContent:"flex-start",
   //backgroundColor:"#0a141e",
   overflow:"hidden",
   borderRadius:4,
   borderColor:"#0a141e"
   },
   thumbnailNotAvailable: {
          width: 212,
          height: 120,
          justifyContent: 'center',
          backgroundColor: '#333f4b',
          alignItems:'center',
          borderRadius: 4,
        borderColor: '#333f4b'
    },
   card: {
    paddingRight:20
    },
   durationbtnbg:{
   width:85,
   height:28,
   flexDirection:"column",
   alignSelf:"flex-end",
   backgroundColor:"#18212a",
   borderRadius:2,
   justifyContent:"center",
   marginTop:86,
   right:28,
   borderColor:'#18212a',
   opacity:0.8,
   borderWidth:1,
   position:"absolute"
   },
   loader: {
       fontFamily: 'roboto_medium',
       fontWeight: '300',
       fontSize : 20,
        color: 'white'
       },

    loadingbg: {
     flex:1,
     alignItems: 'center',
     justifyContent: 'center',
     backgroundColor: '#0a141e',
     },
     loadingbgWithPadding: {
               flex:1,
               alignItems: 'center',
               justifyContent: 'center',
               backgroundColor: '#0a141e',
               paddingBottom:100
               },
      duration: {
         color: 'white',
         textAlign:'center',
         fontSize: 18,
         fontFamily:'roboto_regular'

          },
      desc: {
        fontSize: 14,
        color: COLORS.white,
        width: 212,
        justifyContent: 'flex-start',
        fontFamily:'roboto_regular',
        opacity:0.6
       },
    playlistName: {
        paddingBottom:15,
        fontSize: 30,
        paddingLeft:24,
        color: COLORS.white,
        fontFamily:'roboto_medium',

      },
       defaultimage: {
            width: 212,
            height: 120,
            justifyContent: 'center',
            backgroundColor: '#333f4b',
            alignItems:'center',
            borderRadius: 4,
            overflow: 'hidden',
            borderColor: '#333f4b'
          },

            hdivider: {
               width: "100%",
               height: 1,
               opacity: 0.2,
               marginLeft:1,
               marginBottom:15,
               backgroundColor: '#979797',
               alignSelf: "center"
             },
              headerbar: {
                 alignSelf: 'stretch',
                 flexDirection:'row',
               },
          header: {
             color: '#ffffff',
             fontSize: 24,
             alignSelf: "center",
             paddingBottom:18,
             fontFamily:'gentona_medium'
           },
           hdividerContainer: {
             flex:1,
             alignSelf:"center"
           },
  vscrollview: {
    paddingLeft: 24,
    paddingTop:18,
  },
  SideBarContainer: {
    flexDirection: 'column' ,
    backgroundColor: '#eb3232', 
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: 75
  },
  MenuIcons: {
    height: 30,
    paddingRight: 1,
    paddingTop: 40
  },
  
  thumbnailImage: {
    width: 212, 
    height: 120
  },
  headingName: {
    color: '#fff',
    fontSize: 25,
    paddingLeft: 30,
    paddingTop: 40
  },
  rowsContainer: {
    flex: 4, 
    paddingLeft: 30
  },
  channelThumbnail: {
    // width: 275,
    // height: 210,
    justifyContent: "center",
    //backgroundColor: "skyblue",
    overflow: "hidden",
    paddingLeft: 10,
    paddingTop: 30,
    borderRadius: 4,
    borderColor: "#0a141e"
  } 
});

module.exports = styles;


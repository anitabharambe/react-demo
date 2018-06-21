import React, { Component } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'
import CustomSideBar from './CustomSideBar'

class ExampleScreen extends Component {
   state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }

   render() {
      return (
        <View style={{flexDirection: 'row', flex: 1, backgroundColor: '#414a4c'}}>
            <CustomSideBar 
               drawerOpen={(screen) => this.props.navigation.navigate(screen)}
             />
            <View style={{flex: 1}}>
               <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
                  <Picker.Item label = "Steve" value = "steve" />
                  <Picker.Item label = "Ellen" value = "ellen" />
                  <Picker.Item label = "Maria" value = "maria" />
               </Picker>
               <Text style = {styles.text}>{this.state.user}</Text>
            </View>
         </View>
      )
   }
}
export default ExampleScreen

const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   }
})
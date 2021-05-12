import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './screens/welcomeScreen'
import PikachuScreen from './screens/pikachuScreen'
import UmbreonScreen from './screens/umbreonScreen'
import FlareonScreen from './screens/flareonScreen'
import VaporeonScreen from './screens/vaporeonScreen'
import JolteonScreen from './screens/jolteonScreen'
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
export default class App extends React.Component{
    render(){
        return(
            <View>
           <AppContainer/>

</View>
        )
    }
}
var AppNavigator=createSwitchNavigator({
    WelcomeScreen:WelcomeScreen,
    PikachuScreen:PikachuScreen,
    UmbreonScreen:UmbreonScreen,
    FlareonScreen:FlareonScreen,
    JolteonScreen:JolteonScreen,
    VaporeonScreen:VaporeonScreen,
})
const AppContainer=createAppContainer(AppNavigator)





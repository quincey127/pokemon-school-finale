import React from 'react';
import { StyleSheet, Text, View,Image,  TouchableOpacity } from 'react-native';

export default class WelcomeScreen extends React.Component{
    goToPikachuScreen=()=> { this.props.navigation.navigate('PikachuScreen') }
    goToUmbreonScreen=()=> { this.props.navigation.navigate('UmbreonScreen') }
    goToFlareonScreen=()=> { this.props.navigation.navigate('FlareonScreen') }
    goToVaporeonScreen=()=> { this.props.navigation.navigate('VaporeonScreen')}
    goToJolteonScreen=()=> { this.props.navigation.navigate('JolteonScreen') }
    render(){
        return(
            <View style={styles.container}>

                <Text style={styles.text}>Pokemon School!</Text>
                <View style={styles.subContainerP}>
                    <Image source={require("../assets/pikachu.png")} style={{width:60, height:60, alignItems:'center'}}/>
                    <TouchableOpacity
                    onPress={this.goToPikachuScreen}>
                    <Text style={styles.buttonText}>science</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.subContainerU}>
                <Image source={require("../assets/umbreon.png")} style={{width:60, height:60}}/>
                    <TouchableOpacity 
                    onPress={this.goToUmbreonScreen}>
                    <Text style={styles.buttonText}>space</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.subContainerJ}>
                <Image source={require("../assets/jolteon.png")} style={{width:60, height:60}}/>
                    <TouchableOpacity
                    onPress={this.goToJolteonScreen}>
                    <Text style={styles.buttonText}>math</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.subContainerF}>
                <Image source={require("../assets/flareon.png")} style={{width:60, height:60}}/>
                    <TouchableOpacity
                    onPress={this.goToFlareonScreen}>
                    <Text style={styles.buttonText}>reading</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.subContainerV}>
                <Image source={require("../assets/vaporeon.png")} style={{width:60, height:60}}/>
                    <TouchableOpacity
                    onPress={this.goToVaporeonScreen}>
                    <Text style={styles.buttonText}>social studies</Text>
                    </TouchableOpacity>
                </View>
                   
                    
                    
                    
                   
                   
                        
                        
                       
                    
            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1, 
        backgroundColor:'lightblue'
    
    },
    text:{
        textAlign:'center',
        color:'red',
        fontSize:90
    },
    buttonText:{
        textAlign:'center',
        color:'Black',
        fontSize:20,
        borderColor:'black',
        borderWidth:1,
        borderRadius:80,
        backgroundColor:'white'
    },
    subContainerP:{
        justifyContent:'center',
        textAlign:'center',
  width:100,height:150,
  backgroundColor:'purple',
   marginLeft:50     
    },
    subContainerU:{
        justifyContent:'center',
        textAlign:'center',
  width:100,height:150,
  backgroundColor:'yellow',
   marginLeft:150     
    },
    subContainerJ:{
        justifyContent:'center',
        textAlign:'center',
  width:100,height:150,
  backgroundColor:'red',
   marginLeft:250     
    },
    subContainerV:{
        justifyContent:'center',
        textAlign:'center',
  width:100,height:150,
  backgroundColor:'green',
   marginLeft:450     
    },
    subContainerF:{
        justifyContent:'center',
        textAlign:'center',
  width:100,height:150,
  backgroundColor:'blue',
   marginLeft:350     
    },


})
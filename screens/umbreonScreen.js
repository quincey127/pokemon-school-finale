import React from 'react';
import { StyleSheet, Text, View,Image,  TouchableOpacity } from 'react-native';
export default class UmbreonScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.screenText}>space Time!</Text>
                
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>planets</Text>
                     
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>stars</Text>
                     
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>telescope</Text>
                     
        </TouchableOpacity>
                </View>
        )
    }
  
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'purple',
        flex:27
    
    }, 
    screenText:{
    color:'yellow',
    justifyContent:'center',
    alignItems:'center',
    fontSize:35,
    fontWeight:'bold'
    
    
    
    },
    buttonText:{
        fontSize:20,
        fontWeight:300,
        color:'blue'
    },
    button:{
        width:150,
       height:100,
       borderWidth:2,
       borderRadius:18,
       backgroundColor:'grey',
       marginTop:100,marginLeft:200,justifyContent:'center',alignSelf:'center'
    }
    })
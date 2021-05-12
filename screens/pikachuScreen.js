
import React from 'react';
import { StyleSheet, Text, View,Image,  TouchableOpacity, Button } from 'react-native';
export default class PikachuScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.screenText} >Science Time!</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Life cycle of a butterfly</Text>
                     
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
            Water cycle
            </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Life cycle of a frog</Text>
                     
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
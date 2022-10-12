import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity  } from 'react-native';

 
const onPress = ()=>{
    alert('onPress')
}
 
const MyButton=({title}) =>{
  return (
    <TouchableOpacity
        style={style.btnContainer}
        onPress={onPress}>
        <Text style={style.btnText}>{title}</Text>
        </TouchableOpacity>
  )

}

const style = StyleSheet.create({
    btnContainer:{
        backgroundColor: '#006175',
        alignItems:"center",
        padding:10,
        borderRadius: 7
    },
    btnText:{
        color:"white",
        fontWeight:"bold",
        fontFamily:'Poppins-SemiBold',
        fontSize:18
    }
})

export default MyButton;
 
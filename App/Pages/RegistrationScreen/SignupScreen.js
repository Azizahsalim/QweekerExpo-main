import * as React from 'react';
import {
    View, 
    Text, 
    StyleSheet } from 'react-native';

export default SignupScreen = () => {
    return (
        <View style={styles.container}>
            <Text> Home Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingLeft:30,
       paddingRight:25,
    }
});
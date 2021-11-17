import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'

const DistributorItem = (props: { Image: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal }) => {
    return (
        <View style={styles.container}>
           
            <Image style={styles.logo} source={require('../../Image/Logo.png')} />
        </View>
    )
}

export default DistributorItem

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FAFBFC",
       justifyContent:'center',
       alignItems:'center'
    },
    
    logo:{
        width:69,
        height:36,
        backgroundColor:"#FAFBFC",
        alignItems:'center',
        justifyContent:'center',
        marginTop:55,
    }
})
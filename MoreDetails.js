import React,{useEffect, useState} from "react";
import { ActivityIndicator, Pressable, StyleSheet, Text, View, ScrollView, Image } from "react-native";



const MoreDetails = ({route}) =>{
    const {description,image,content,author,title} = route.params;
    console.log(description)
    return(
    <> 
    <View style={{backgroundColor: 'black'}}>
        <Text style={{color: '#956b81', margin: 18, fontSize: 16}}>{title}</Text>
    <View style={{height:300, marginTop: 40, }}>
            <Image style={{width:'100%', height:400}} source={image}/>
        </View>  
       <View style={{height:300, marginTop: 90, backgroundColor: 'black', padding: 15}}>
             <Text style={{color: '#956b81', fontSize: 17}}>{description}</Text>
             <Text style={{color: '#956b81', marginTop: 15}}>AUTHOR:</Text>
             <Text style={{marginTop: 8, color: '#956b81', fontSize: 17}}>{author}</Text>
            
        </View>  
    </View>
       
    </>
    )
}

export default MoreDetails;
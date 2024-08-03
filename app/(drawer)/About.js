import{View,Text}from "react-native";
import{React}from "react";

const About= ()=>{
    return(
    <View style= {{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text accessibilityLabel="about" style={{fontSize:26,color: "red",fontWeight:"700"}}> About Us </Text>
        </View>
    )
}

export default About;
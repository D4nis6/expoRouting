import{View,Text}from "react-native";
import{React}from "react";

const UserProfile= ()=>{
    return(
    <View style= {{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:26,color: "red",fontWeight:"700"}}> Welcome To UserProfile </Text>
        </View>
    )
}

export default UserProfile;
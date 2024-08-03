import{View,Text, TouchableOpacity}from "react-native";
import{React}from "react";
import { useNavigation } from "expo-router";

const Home= ()=>{
    const navigation = useNavigation();
    return (
    <View style= {{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:22,color: "red",fontWeight:"700"}}> Welcome To Home Screen </Text>
        <View style={{margin:50, width:180,backgroundColor:"red",height:50,justifyContent:"center",borderRadius:10}}>
            <TouchableOpacity accessibilityLabel="button" onPress={()=>{navigation.navigate("UserProfile")}}>
                <Text style={{textAlign:"center",color:"white",fontWeight:"700",fontSize:18}}>
                    OPEN PROFILE
                    </Text>
            </TouchableOpacity></View>
        </View>
    )
}

export default Home;
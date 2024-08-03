import { View, Text, TouchableOpacity } from "react-native";
import { React } from "react";
import { Link, useNavigation } from "expo-router";
const index = () => {
    const navigation = useNavigation()
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Link accessibilityLabel="link" href={"/settings"} style={{ fontSize: 26, textDecorationLine: "underline", color: "blue" }}>
                Go to Settings Screen
            </Link>
            <View>
                <TouchableOpacity accessibilityLabel="button"  onPress={()=>{navigation.navigate("settings") }} style={{width:180,height:50,margin:50,backgroundColor:"red", justifyContent:"center",borderRadius:8}}>
                    <Text style={{fontSize:26,textAlign:"center",color:"white",}}>Next Screen</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default index;
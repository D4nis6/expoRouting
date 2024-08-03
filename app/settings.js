import {View , Text ,TouchableOpacity} from "react-native";
import {React} from "react";
import { useRouter,useNavigation } from "expo-router";
const settings =()=>{
    const router = useRouter()
    const navigation = useNavigation()

    return(
        <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
            <Text accessibilityLabel="link" style={{fontSize:26,color:"blue",textDecorationLine:"underline"}} onPress={()=>{
                router.back()
            }}> Go Back To Index Screen </Text>
            <View>
                <TouchableOpacity accessibilityLabel ="button"onPress={()=>{navigation.navigate("(tabs)") }} style={{width:180,height:50,margin:50,backgroundColor:"red", justifyContent:"center",borderRadius:8}}>
                    <Text style={{fontSize:26,textAlign:"center",color:"white",}}>Tabs Screen</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity accessibilityLabel ="button1"onPress={()=>{navigation.navigate("(drawer)") }} style={{width:200,height:50,margin:50,backgroundColor:"red", justifyContent:"center",borderRadius:8,}}>
                    <Text style={{fontSize:26,textAlign:"center",color:"white",}}>Drawer Screen</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default settings;
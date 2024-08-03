import { View , Text} from "react-native";
const profile =()=>{
    return(
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text accessibilityLabel="profile" style={{fontSize:26,color:"red"}}> Profile Screen </Text>
        </View>
     
    )
}

export default profile;
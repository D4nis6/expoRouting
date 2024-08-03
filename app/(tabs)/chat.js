import { View , Text} from "react-native";
const chat =()=>{
    return(
        <View  style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text accessibilityLabel="chat" style={{fontSize:26,color:"red"}}> Chat Screen </Text>
        </View>
     
    )
}

export default chat;
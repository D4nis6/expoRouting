
import { Stack } from "expo-router";
const layout =()=>{
    return(
       <Stack>
        <Stack.Screen name="index"></Stack.Screen> 
        <Stack.Screen name="settings"></Stack.Screen>
        <Stack.Screen name="UserProfile"></Stack.Screen>
         <Stack.Screen name="(tabs)" options={{headerShown:false}}></Stack.Screen>
         <Stack.Screen name="(drawer)" options={{headerShown:false}}></Stack.Screen>


       </Stack>
    )
}

export default layout;
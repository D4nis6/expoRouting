import { Stack, Tabs } from "expo-router";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const layout =()=>{
    return(
       <Tabs>
        <Tabs.Screen name="profile" options={{tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,}}></Tabs.Screen>
        <Tabs.Screen name="chat" options={{tabBarIcon:({color}) => <MaterialCommunityIcons size={28} name = "android-messages" color={color}></MaterialCommunityIcons>}}></Tabs.Screen>
       </Tabs>
       
    )
}

export default layout;
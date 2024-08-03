
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';

const layout= ()=>{
    return(
        <GestureHandlerRootView style={{flex:1}}>
            <Drawer>
                <Drawer.Screen name="Home" ></Drawer.Screen>
                <Drawer.Screen name="About"></Drawer.Screen>
                <Drawer.Screen name="Devil" options={{headerShown:true}}></Drawer.Screen>

            </Drawer>
        </GestureHandlerRootView>
    )

}

export default layout;
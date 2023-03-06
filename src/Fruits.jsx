import {Text, View, TouchableOpacity} from "react-native";
import { useSelector, useDispatch} from "react-redux";
import { buyFruit, addFruit } from "./redux/fruitAction";
import { buyGrape, addGrape } from "./redux/grapeAction";
import { buyMelon, addMelon } from "./redux/melonAction";
import Icon from 'react-native-vector-icons/FontAwesome5';
import Icon2 from "react-native-vector-icons/MaterialCommunityIcons"
import Icon3 from "react-native-vector-icons/AntDesign";
import { useState } from "react";
function Fruits() {

  const [apple, setApple] = useState(0);
  const [grape, setGrape] = useState(0);
  const [melon, setMelon] = useState(0);
  const numberOfFruits = useSelector(state => state.fruit.numberOfFruits);
  const numberOfGrapes = useSelector(state => state.grape.numberOfGrapes);
  const numberOfMelons = useSelector(state => state.melon.numberOfMelons);
  const dispatch = useDispatch();

  return (
     <View style={{margin: 10}}>



    <View style={{flexDirection: "row", margin: 20}}>
         <Icon name={'apple-alt'} solid size={60}/>

        <View style={{flexDirection: "column", marginLeft: 30, marginRight: 30}}>
         <Text style={{fontSize: 28, fontWeight: "bold"}}>
           Apple
         </Text>

         <Text style={{fontSize: 18, marginTop: 5, marginBottom: 5}}>
           $2.50/kg
         </Text>

         <Text style={{fontSize: 20}}>
           Available - {numberOfFruits}
         </Text>
         </View>

{
  apple == 0 ? (
    <Icon3 name="minuscircleo" disabled size={30} onPress={()=> {
      dispatch(addFruit())
      setApple((prev)=> prev -1)
    }}/>
  ) :
  (
    <Icon3 name="minuscircleo" size={30} onPress={()=> {
      dispatch(addFruit())
      setApple((prev)=> prev -1)
    }}/>
  )
}


        <Text style={{fontSize: 20, marginLeft: 10, marginRight: 10}}>
        {apple}
        </Text>


{
numberOfFruits == 0 ? (
  <Icon3 name="pluscircleo" disabled size={30} onPress={()=>{
    dispatch(buyFruit())
    setApple((prev)=> prev +1)
  }}/>
) :
(
  <Icon3 name="pluscircleo" size={30} onPress={()=>{
    dispatch(buyFruit())
    setApple((prev)=> prev +1)
  }}/>
)

}


      </View>



{/* --------------------------   GRAPE COMPONENT  ---------------------------------------  */}





    <View style={{flexDirection: "row", margin: 20}}>
         <Icon2 name={'fruit-grapes'} solid size={60}/>

        <View style={{flexDirection: "column", marginLeft: 30, marginRight: 30}}>
         <Text style={{fontSize: 28, fontWeight: "bold"}}>
           Grapes
         </Text>

         <Text style={{fontSize: 18, marginTop: 5, marginBottom: 5}}>
           $1.50/kg
         </Text>

         <Text style={{fontSize: 20}}>
           Available - {numberOfGrapes}
         </Text>
         </View>

{
  grape == 0 ? (
    <Icon3 name="minuscircleo" disabled size={30} onPress={()=> {
      dispatch(addGrape())
      setGrape((prev)=> prev -1)
    }}/>
  ) :
  (
    <Icon3 name="minuscircleo" size={30} onPress={()=> {
      dispatch(addGrape())
      setGrape((prev)=> prev -1)
    }}/>
  )
}


        <Text style={{fontSize: 20, marginLeft: 10, marginRight: 10}}>
        {grape}
        </Text>


{
numberOfGrapes == 0 ? (
  <Icon3 name="pluscircleo" disabled size={30} onPress={()=>{
    dispatch(buyGrape())
    setGrape((prev)=> prev +1)
  }}/>
) :
(
  <Icon3 name="pluscircleo" size={30} onPress={()=>{
    dispatch(buyGrape())
    setGrape((prev)=> prev +1)
  }}/>
)

}


      </View>





{/* --------------------------   WATERMELON COMPONENT  ---------------------------------------  */}

<View style={{flexDirection: "row", margin: 20}}>
     <Icon2 name={'fruit-watermelon'} solid size={60}/>

    <View style={{flexDirection: "column", marginLeft: 30, marginRight: 30}}>
     <Text style={{fontSize: 28, fontWeight: "bold"}}>
       Melon
     </Text>

     <Text style={{fontSize: 18, marginTop: 5, marginBottom: 5}}>
       $2.75/kg
     </Text>

     <Text style={{fontSize: 20}}>
       Available - {numberOfMelons}
     </Text>
     </View>

{
melon == 0 ? (
<Icon3 name="minuscircleo" disabled size={30} onPress={()=> {
  dispatch(addMelon())
  setMelon((prev)=> prev -1)
}}/>
) :
(
<Icon3 name="minuscircleo" size={30} onPress={()=> {
  dispatch(addMelon())
  setMelon((prev)=> prev -1)
}}/>
)
}


    <Text style={{fontSize: 20, marginLeft: 10, marginRight: 10}}>
    {melon}
    </Text>


{
numberOfMelons == 0 ? (
<Icon3 name="pluscircleo" disabled size={30} onPress={()=>{
dispatch(buyMelon())
setMelon((prev)=> prev +1)
}}/>
) :
(
<Icon3 name="pluscircleo" size={30} onPress={()=>{
dispatch(buyMelon())
setMelon((prev)=> prev +1)
}}/>
)

}


  </View>







  {/*------------------ CHECKOUT --------------------------------------------  */}

<View style={{borderWidth: 0.2, borderColor: "grey", borderRadius: 5, margin: 40}}>

<View style={{flexDirection: "row", marginBottom: 30}}>

<Text style={{fontSize: 20}}> Total: </Text>

<Text style={{fontSize: 20, marginLeft: 'auto'}}> $50 </Text>

</View>


<View style={{flexDirection: "row"}}>

<Text style={{fontSize: 20}}> Delivery Charges: </Text>

<Text style={{fontSize: 20, marginLeft: 'auto'}}> $18 </Text>

</View>

</View>




{/*------------------------BUTTON -------------------------- */}



<TouchableOpacity title="google" style={{ backgroundColor: "#db3236",
 alignItems: 'center',
 justifyContent: 'center',
 paddingVertical: 14,
 paddingHorizontal: 30,
 borderRadius: 40}} >

  <Text
style={{
backgroundColor: '#db3236',
fontSize: 22,
color: "white",
textAlign: 'center',

}}>

Confirm

</Text>

  </TouchableOpacity>





     </View>
   );

}

export default Fruits;

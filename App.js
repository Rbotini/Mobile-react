import React,{useState} from 'react';
import {View,StyleSheet,Text,TouchableOpacity,Image, ImageComponent} from 'react-native';
import Slider from '@react-native-community/slider';

let resul = 0;
let imc =0;
 function App(){

  const[size,setSize] = useState(0);
  const[peso,setPeso] = useState(0);
  const[total,setTotal] = useState(0);

  const calcular = ()=> {
   
    imc = peso/(Math.pow(size,2))

    setTotal(imc)
    
    
  }
  

   
   return(
     <View style={styles.container}>
       <View>
        <Image
        source={require('./assets/logo.png')}
        style={{width:200,height:200,marginBottom:10}}
        
        />
       </View>

       <Text style={styles.altura}>Altura  {size}</Text>
       <View style={styles.area}>
       <Slider style={{height:20}}
         minimumValue={1}
         maximumValue={3}
         maximumTrackTintColor ='red'
         minimumTrackTintColor='blue'
         value={size}
         onValueChange={(valor)=>setSize(valor.toFixed(2))}
          />
       </View>
       <Text style={styles.altura}>
         Peso {peso}</Text>
       <View style={styles.area}>
         <Slider style={{height:20}}
           minimumValue={1}
           maximumValue={200}
           maximumTrackTintColor ='red'
           minimumTrackTintColor='blue'
           value={peso}
           onValueChange={(valor)=>setPeso(valor.toFixed(1))}
         />
         </View>
         <TouchableOpacity style={styles.btnCalcula} onPress={()=>calcular()}>
           <Text style={styles.titlebtn}>Calcular</Text>
         </TouchableOpacity>
         <View style={styles.areacalc}>
           <Text style={styles.titlecalc}>SEU IMC:{imc.toFixed(2)}</Text>
           
         </View>

     </View>
   )


}
export default App;
const styles = StyleSheet.create({
  container:{
   flex:1,
   alignItems:'center',
   justifyContent:'center',
   backgroundColor:'#e2e3a3'
  },
  area:{
    width:'80%',
    marginBottom:10,
    backgroundColor:'#c9c173',
    borderRadius:7,
    padding:2
  },
  altura:{
    fontSize:25,
    fontWeight:'bold',
    marginBottom:10

  },
  btnCalcula:{
    backgroundColor:"#8f062b",
    width:'80%',
    borderRadius:7,
    marginTop:20

  },
  titlebtn:{
    fontSize:20,
    color:"#fff",
    fontWeight:'bold',
    padding:10,
    textAlign:'center'

  },
  areacalc:{
    width:'80%',
    backgroundColor:'#fff',
    marginTop:15,
    borderRadius:7

  },
  titlecalc:{
    fontSize:20,
    padding:10,
    textAlign:'center'

  }
 


})
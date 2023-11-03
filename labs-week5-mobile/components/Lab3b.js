import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import {useState} from 'react'

const Lab3b = ({navigation}) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    btnXong:{
      marginTop:'14px',
      width: '280px',
      height:'40px',
      borderRadius:'10px',
      borderWidth: '1px',
      borderColor: '#000',
        shadowOpacity: 0.3,
        shadowOffset: {
	      width: 0,
	      height: 4,
      },
      shadowColor: '#000',
      backgroundColor: 'rgba(25, 82, 226, 0.58)',
      justifyContent: 'center',
      alignItems:'center'
    }
  });
  var[image, setImage] = useState(require('../assets/vs_silver.png'))
  var[mau, setMau] = useState('Bạc')
  return (
    <View style={styles.container}>
      <View style={{ flex: 3, flexDirection:'row'}}>
        <View style={{flex:1, marginLeft:'-30px'}}>
          <Image source={image} 
          style={{width: null, height:'140px'}}
          resizeMode='contain'/>
        </View>
        <View style={{flex:1,fontSize:'15px',fontWeight:400, marginLeft:'-20px', padding:'10px'}}>
          <Text style={{}}>
            Điện Thoại Vsmart Joy 3 Hàng chính hãng
          </Text>
           <Text style={{paddingTop:'5px'}}>
            Màu: <Text style={{fontWeight:700}}>{mau}</Text>
          </Text>
           <Text style={{paddingTop:'5px'}}>
            Cung cấp bởi <Text style={{fontWeight:700}}>Tiki Tradding</Text>
          </Text>
           <Text style={{fontWeight:700, fontSize:'18px',paddingTop:'5px'}}>
            1.790.000 đ
          </Text>
        </View>
      </View>

      <View style={{flex:7, alignItems: 'center', justifyContent:'center', backgroundColor:'#C4C4C4'}}>
        <Text style={{margin:'10px', fontSize:'18px', fontWeight:400, marginLeft:'-100px'}}>
          Chọn một màu bên dưới:
        </Text>
        <Pressable style={{margin:'3px',width: '60px', height:'60px', backgroundColor:'#C5F1FB'}}
          onPress={()=>{[setImage(require('../assets/vs_silver.png')),setMau('Bạc')]}}>
        </Pressable>
        <Pressable style={{margin:'3px',width: '60px', height:'60px', backgroundColor:'red'}}
          onPress={()=>{[setImage(require('../assets/vs_red.png')),setMau('Đỏ')]}}>
        </Pressable>
        <Pressable style={{margin:'3px',width: '60px', height:'60px', backgroundColor:'black'}}
          onPress={()=>{[setImage(require('../assets/vs_black.png')),setMau('Đen')]}}>
        </Pressable>
        <Pressable style={{margin:'3px',width: '60px', height:'60px', backgroundColor:'blue'}}
          onPress={()=>{[setImage(require('../assets/vs_blue.png')),setMau('Xanh')]}}>
        </Pressable>
        <Pressable style={styles.btnXong} onPress={()=> navigation.navigate('Home',image)}>
            <Text style={{fontSize:'20px', fontWeight:700, color:'#fff'}}>
              Xong
            </Text>
          </Pressable>
      </View>
    </View>
  );
};

export default Lab3b;

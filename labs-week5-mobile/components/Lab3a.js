import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { useRoute } from "@react-navigation/native";

const Lab3a=({ navigation, route }) =>{
  var[image, setImage] = useState(require('../assets/vs_silver.png'));
  useEffect(()=>{
    if(route.params){
      setImage(route.params)
    }
  },[route.params])
  const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center'
        },
        pan:{
          flexDirection:'row',
          alignItems: 'center',
          marginTop: '10px',
          marginLeft:'-5px'
        },
        border:{
          borderWidth: '1px',
          height: '40px',
          width:'290px',
          borderRadius: '10px',
          shadowOpacity: 0.2,
          shadowOffset: {
	          width: 0,
	          height: 4,
          },
          shadowColor: '#000',
          borderColor: 'grey',
          marginTop: '20px',
          justifyContent:'center',
          alignItems:'center'
        },
        btnMua:{
          borderWidth: '1px',
          height: '40px',
          width:'290px',
          backgroundColor: '#EE0A0A',
          borderRadius: '10px',
          borderColor: '#CA1536',
          shadowOpacity: 0.3,
          shadowOffset: {
	          width: 0,
	          height: 4,
          },
          shadowColor: '#000',
          marginTop: '50px',
          justifyContent:'center',
          alignItems:'center'
        }
    });

    return (
        <View style = { styles.container } >
          <Image
            style ={{width:'180px', height:'250px'}}
            resizeMode='contain'
            source={route.params||image}
            //source={route.params.image}
          />
            
          <Text style={{fontSize:'15px', fontWeight:'400px'}}>
            Điện Thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>

          <View style={styles.pan}>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
              <path d="M11.5 0L14.0819 8.63729H22.4371L15.6776 13.9754L18.2595 22.6127L11.5 17.2746L4.74047 22.6127L7.32238 13.9754L0.56285 8.63729H8.91809L11.5 0Z" fill="#E0E41A"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
              <path d="M11.5 0L14.0819 8.63729H22.4371L15.6776 13.9754L18.2595 22.6127L11.5 17.2746L4.74047 22.6127L7.32238 13.9754L0.56285 8.63729H8.91809L11.5 0Z" fill="#E0E41A"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
              <path d="M11.5 0L14.0819 8.63729H22.4371L15.6776 13.9754L18.2595 22.6127L11.5 17.2746L4.74047 22.6127L7.32238 13.9754L0.56285 8.63729H8.91809L11.5 0Z" fill="#E0E41A"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
              <path d="M11.5 0L14.0819 8.63729H22.4371L15.6776 13.9754L18.2595 22.6127L11.5 17.2746L4.74047 22.6127L7.32238 13.9754L0.56285 8.63729H8.91809L11.5 0Z" fill="#E0E41A"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
              <path d="M11.5 0L14.0819 8.63729H22.4371L15.6776 13.9754L18.2595 22.6127L11.5 17.2746L4.74047 22.6127L7.32238 13.9754L0.56285 8.63729H8.91809L11.5 0Z" fill="#E0E41A"/>
            </svg>

            <Text style={{paddingLeft:'40px', fontSize:'15px', fontWeight:400}}>
              (Xem 828 đánh giá)
            </Text>
          </View>

          <View style={styles.pan}>
            <Text style={{marginLeft:'-45px',fontSize:'18px', fontWeight:700}}>
              1.790.000 đ
            </Text>
            <Text style={{paddingLeft:'55px',fontSize:'15px', fontWeight:'700px'}}>
              1.790.000 đ
            </Text>
          </View>
          
          <View style={styles.pan}>
            <Text style={{color:'red', fontWeight:700, fontSize:'12px', marginLeft:'-85px'}}>
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
            </Text>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" style={{paddingLeft:10}}>
              <path d="M12.3268 5.124C11.7016 4.50538 10.8763 4.16667 10.0011 4.16667C9.12579 4.16667 8.30053 4.50773 7.67533 5.124C7.02513 5.76613 6.66669 6.62937 6.66669 7.55377V7.73253C6.66669 7.83603 6.74171 7.9207 6.83341 7.9207H7.83372C7.92541 7.9207 8.00044 7.83603 8.00044 7.73253V7.55377C8.00044 6.51647 8.89863 5.67205 10.0011 5.67205C11.1035 5.67205 12.0017 6.51647 12.0017 7.55377C12.0017 8.28529 11.5432 8.95565 10.8326 9.26378C10.3908 9.45431 10.0156 9.78831 9.74681 10.2258C9.47381 10.6727 9.3321 11.209 9.3321 11.7524V12.2581C9.3321 12.3616 9.40712 12.4462 9.49882 12.4462H10.4991C10.5908 12.4462 10.6658 12.3616 10.6658 12.2581V11.7241C10.6669 11.4958 10.7289 11.2731 10.8438 11.0851C10.9587 10.8972 11.1211 10.7526 11.3098 10.6704C12.5393 10.1364 13.3333 8.91331 13.3333 7.55377C13.3354 6.62937 12.977 5.76613 12.3268 5.124ZM9.16746 14.8925C9.16746 15.142 9.25529 15.3813 9.41162 15.5578C9.56795 15.7342 9.77997 15.8333 10.0011 15.8333C10.2221 15.8333 10.4342 15.7342 10.5905 15.5578C10.7468 15.3813 10.8347 15.142 10.8347 14.8925C10.8347 14.6429 10.7468 14.4036 10.5905 14.2272C10.4342 14.0507 10.2221 13.9516 10.0011 13.9516C9.77997 13.9516 9.56795 14.0507 9.41162 14.2272C9.25529 14.4036 9.16746 14.6429 9.16746 14.8925Z" fill="black" fill-opacity="0.78"/>
              <path d="M10 0C4.47768 0 0 4.47768 0 10C0 15.5223 4.47768 20 10 20C15.5223 20 20 15.5223 20 10C20 4.47768 15.5223 0 10 0ZM10 18.3036C5.41518 18.3036 1.69643 14.5848 1.69643 10C1.69643 5.41518 5.41518 1.69643 10 1.69643C14.5848 1.69643 18.3036 5.41518 18.3036 10C18.3036 14.5848 14.5848 18.3036 10 18.3036Z" fill="black" fill-opacity="0.78"/>
            </svg>
          </View>

          <Pressable style={styles.border} onPress={() => navigation.navigate('ChonMau')}>
            <Text style={{fontSize:'15px', fontWeight:400}}>
              4 MÀU-CHỌN MÀU
            </Text>
          </Pressable>

          <Pressable style={styles.btnMua}>
            <Text style={{fontSize:'20px', fontWeight:700, color:'#fff'}}>
              CHỌN MUA
            </Text>
          </Pressable>
        </View>
    );
}
export default Lab3a;

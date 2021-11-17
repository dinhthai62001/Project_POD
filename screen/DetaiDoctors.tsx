import React from 'react';
import {View,Text,SafeAreaView,TouchableOpacity,Image,StyleSheet, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import COLOR from '../constants/COLOR';
import Button from '../Components/UI/Button';
import Button1 from '../Components/UI/ButtonWhite';
const App =({navigation}:{navigation:any})=>{
  return(
      <ScrollView>
    <SafeAreaView style={styles.allcontainer}>
        
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={styles.logoBack}
          source={require('../Image/back.png')}
        />
      </TouchableOpacity>
      <View style={{marginLeft: 136}}>
        <Text style={styles.textAdd}>Profile Doctors</Text>
      </View>
    </View>

    <View style={styles.containerDocter}>
         
          <View style={styles.Docter}>
          <Image
          style={styles.logoDocters1}
        
        source={require('../Image/logoDocters1.png')}
      />    
      <View style={{marginLeft:8,marginTop:12}}>
        <Text style={{fontWeight:'700',fontSize:14,fontStyle:'normal',color:COLOR.blue_6}}>Dr.Liu Zhang</Text>
        {/* <Text style={{fontWeight:'400',fontSize:14,}}>Sengkang Hospital</Text> */}
        <View style={{flexDirection:'row',marginTop:13}}>
        <Image
          style={{width:16,height:16}}
        
        source={require('../Image/logodocterss.png')} />
        <Text style={{fontSize:12,fontWeight:'400',marginLeft:5}}>Cardiology | Gastroenterology</Text>
        </View>

        <View style={{flexDirection:'row',marginTop:15}}>
        <Image
          style={{width:16,height:16}}
        
        source={require('../Image/IconsHospital.png')} />
        <Text style={{fontSize:12,fontWeight:'400',marginLeft:5}}>Lim lng Haan Cardiology Clinic</Text>
        </View>

        <View style={{flexDirection:'row',marginTop:15,width:163}}>
        <Image
          style={{width:16,height:16}}
        
        source={require('../Image/IconMaps.png')} />
        <Text style={{fontSize:12,fontWeight:'400',marginLeft:5}}>04-02 Medical Centre, Mount Elizabeth, Singapore</Text>
        </View>
      
        <View style={{flexDirection:'row',marginTop:14}}>
        <Image
          style={{width:16,height:16,tintColor:COLOR.blue_4}}
        
        source={require('../Image/logoCallphone.png')} />
        <Text style={{fontSize:12,fontWeight:'400',marginLeft:5}}>023 330 4292</Text>
        
        </View>
      
       
      </View>

          </View>
         

        </View>

        <View style={styles.containerButton}>
        <Button>
          <TouchableOpacity
            onPress={() => navigation.navigate('Tab')}
            style={{alignItems: 'center', justifyContent: 'center',flexDirection:'row'}}>
                <Image style={{width:24,height:24,top:7}} source={require('../Image/iconsVideo.png')} />
            <Text
              style={{
                marginTop: 12,
                fontWeight: '700',
                fontSize: 16,
                color: '#FFFFFF',
                marginLeft:5
              }}>
             Video call
            </Text>
          </TouchableOpacity>
        </Button>
      </View>
      <View style={styles.containerButton}>
        <Button1>
          <TouchableOpacity
            onPress={() => navigation.navigate('ButtonAddFriend')}
            style={{alignItems: 'center', justifyContent: 'center',flexDirection:'row'}}>
                <Image style={{width:24,height:24,top:7}} source={require('../Image/iconsCall.png')} />
            <Text
              style={{
                marginTop: 12,
                fontWeight: '700',
                fontSize: 16,
                color: COLOR.blue_5,
                marginLeft:5
              }}>
             Call via phone number
            </Text>
          </TouchableOpacity>
        </Button1>
      </View>
      <View style={styles.containerSpecialist}>
          <View style={{marginLeft:12,marginTop:12}}>
          <Text style={{fontWeight:'700',fontSize:14,color:COLOR.blue_5}}>Specialist:</Text>
          <Text style={{width:360,color:COLOR.blue_8,fontSize:12,fontWeight:'400',marginTop:8}}>Cardiology | Neurologist | Cardiologist | Dermatologist | Oncologist | ophthalmologist </Text>
          </View>
      </View>
      <View style={styles.containerExperience}>
      <View style={{marginLeft:12,marginTop:12}}>
          <Text style={{fontWeight:'700',fontSize:14,color:COLOR.blue_5}}>Experience:</Text>
          <Text style={{width:360,color:COLOR.blue_8,fontSize:12,fontWeight:'400',marginTop:8}}>Lorem ipsum dolor sit amet,consectetur adipiscing elit,
          Curebitur eleifend iaculis pellentesque.Ut luctus eros tincidunt nuns vestibulum commodo.Sed cursus vitae urna at convallis. Quisque tincidunt at ligula gravida 
          egestas.Suspendisse potenti.Quisque auctor facilisis massa.Aenean at accumsan nulla.Nulla mattis quis elit at imperdiet. </Text>
          <Text style={{width:360,color:COLOR.blue_8,fontSize:12,fontWeight:'400',marginTop:8}}>
              Phasellus purus elit ,iaculis non bibendum bel,suscipit eget diam.Vivimus ipsum dolor,dictum pulvinar dignissim at,porta in tortor.Nam vestibulum pretium lorem,ac scelerisque lectus vulputate ut.
          </Text>
          </View>
        
      </View>
      <View style={styles.containerEducation}>
      <View style={{marginLeft:12,marginTop:12}}>
          <Text style={{fontWeight:'700',fontSize:14,color:COLOR.blue_5}}>Education:</Text>
          <View style={{flexDirection:'row',marginTop:13,}}>
              <Image style={{width:24,height:24}} source={require('../Image/logoEducation.png')} />
              <Text style={{fontWeight:'400',fontSize:12,marginLeft:10,marginTop:3}}>Graduated Medical University of US in 2010</Text>

          </View>  
          <View style={{flexDirection:'row',marginTop:13,}}>
              <Image style={{width:24,height:24}} source={require('../Image/logoEducation.png')} />
              <Text style={{fontWeight:'400',fontSize:12,marginLeft:10,marginTop:3}}>Diplomas Health Care - 2013</Text>

          </View>  
          <View style={{flexDirection:'row',marginTop:13,}}>
              <Image style={{width:24,height:24}} source={require('../Image/logoEducation.png')} />
              <Text style={{fontWeight:'400',fontSize:12,marginLeft:10,marginTop:3}}>Phytotherapy Dioloma - 2020</Text>

          </View>  
          
          </View>
      </View>
    </SafeAreaView>
    </ScrollView>

  )
}
export default App;
const styles = StyleSheet.create({
    allcontainer: {
      flex: 1,
      backgroundColor: '#FAFBFC',
    },
    container: {
      backgroundColor: '#FAFBFC',
      height: 96,
      flexDirection: 'row',
      elevation: 10,
    },
    logoBack: {
      width: 12,
      height: 21,
      marginLeft: 30,
      marginTop: 49,
    },
    logofriend: {
      marginLeft: 290,
      height: 17,
      width: 20,
      marginTop: 56,
    },
    textAdd: {
        marginTop: 49,
    
        fontWeight: '700',
        fontSize: 18,
        color: COLOR.blue_8,
      },
      containerDocter:{
        backgroundColor: '#ffffff',
        width: 385,
        height: 193,
        borderRadius: 16,
        elevation: 15,
        marginTop: 16,
        marginLeft: 24,
      },
      Docter:{
        flexDirection:'row'
      },
      logoDocters1:{
        width:116,
        height:169,
        marginTop:12,
        marginLeft:8
      },
      containerButton: {
        marginLeft: 24,
        marginTop: 16,
      },
      containerSpecialist:{
        backgroundColor: '#ffffff',
        width: 385,
        height: 90,
        borderRadius: 16,
        elevation: 15,
        marginTop: 16,
        marginLeft: 24,
      },
      containerExperience:{
        backgroundColor: '#ffffff',
        width: 385,
        height: 230,
        borderRadius: 16,
        elevation: 15,
        marginTop: 16,
        marginLeft: 24,
      },
      containerEducation:{
        backgroundColor: '#ffffff',
        width: 385,
        height: 142,
        borderRadius: 16,
        elevation: 15,
        marginTop: 16,
        marginLeft: 24,

      }
    
     



})
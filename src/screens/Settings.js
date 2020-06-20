import { Ionicons } from '@expo/vector-icons';

import React, { Component } from 'react';

import {View,StyleSheet,ScrollView,TouchableOpacity,Modal} from 'react-native';

import {Button,Container,Header,Card,CardItem,Left,Text,Content, Right,Body} from 'native-base';



export default class SettingsScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            show:false
        }
    }
    close(show1){
        this.setState({show:show1});
    }
    render(){
        return(
            <Container>
            <View style={{height:50,marginLeft:20}}>
            <Text style={{fontFamily:'Roboto_medium',fontSize:30}}>Settings</Text>
            </View>
            <ScrollView>
            <TouchableOpacity 
            onPress={()=>this.setState({show:true})}
            style={{flexDirection:'row',width:410,height:100,borderTopWidth:0.5,borderBottomWidth:0.5,borderColor:'#D3D3D3'}}>
            <View style={{flex:1,alignSelf:'center',paddingLeft:20}}>
            <Text style={{fontFamily:'rale_bold'}}>Self Assessment</Text>
            <Text style={{fontFamily:'rale_light',fontSize:12,paddingTop:2}}>Ascertain your covid-19 risk using our screening tool</Text>
            </View>
            <View style={{alignSelf:'center',paddingRight:15}}>
            <Ionicons name="ios-arrow-forward" size={30} color="black" />
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',width:410,height:100,borderTopWidth:0.5,borderBottomWidth:0.5,borderColor:'#D3D3D3'}}>
            <View style={{flex:1,alignSelf:'center',paddingLeft:20}}>
            <Text style={{fontFamily:'rale_bold'}}>FAQs</Text>
            <Text style={{fontFamily:'rale_light',fontSize:12,paddingTop:2}}>Get answers to Frequently Asked Questions</Text>
            </View>
            <View style={{alignSelf:'center',paddingRight:15}}>
            <Ionicons name="ios-arrow-forward" size={30} color="black" />
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',width:410,height:100,borderTopWidth:0.5,borderBottomWidth:0.5,borderColor:'#D3D3D3'}}>
            <View style={{flex:1,alignSelf:'center',paddingLeft:20}}>
            <Text style={{fontFamily:'rale_bold'}}>Testing Centers</Text>
            <Text style={{fontFamily:'rale_light',fontSize:12,paddingTop:2}}>View testing centers near you</Text>
            </View>
            <View style={{alignSelf:'center',paddingRight:15}}>
            <Ionicons name="ios-arrow-forward" size={30} color="black" />
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',width:410,height:100,borderTopWidth:0.5,borderBottomWidth:0.5,borderColor:'#D3D3D3'}}>
            <View style={{flex:1,alignSelf:'center',paddingLeft:20}}>
            <Text style={{fontFamily:'rale_bold'}}>Personal Details</Text>
            <Text style={{fontFamily:'rale_light',fontSize:12,paddingTop:2}}>View and update your personal details</Text>
            </View>
            <View style={{alignSelf:'center',paddingRight:15}}>
            <Ionicons name="ios-arrow-forward" size={30} color="black" />
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',width:410,height:100,borderTopWidth:0.5,borderBottomWidth:0.5,borderColor:'#D3D3D3'}}>
            <View style={{flex:1,alignSelf:'center',paddingLeft:20}}>
            <Text style={{fontFamily:'rale_bold'}}>Audio</Text>
            <Text style={{fontFamily:'rale_light',fontSize:12,paddingTop:2}}>Listen to audio</Text>
            </View>
            <View style={{alignSelf:'center',paddingRight:15}}>
            <Ionicons name="ios-arrow-forward" size={30} color="black" />
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',width:410,height:100,borderTopWidth:0.5,borderBottomWidth:0.5,borderColor:'#D3D3D3'}}>
            <View style={{flex:1,alignSelf:'center',paddingLeft:20}}>
            <Text style={{fontFamily:'rale_bold'}}>Privacy Policy</Text>
            <Text style={{fontFamily:'rale_light',fontSize:12,paddingTop:2}}>View our privacy policy</Text>
            </View>
            <View style={{alignSelf:'center',paddingRight:15}}>
            <Ionicons name="ios-arrow-forward" size={30} color="black" />
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',width:410,height:100,borderTopWidth:0.5,borderBottomWidth:0.5,borderColor:'#D3D3D3'}}>
            <View style={{flex:1,alignSelf:'center',paddingLeft:20}}>
            <Text style={{fontFamily:'rale_bold'}}>Share</Text>
            <Text style={{fontFamily:'rale_light',fontSize:12,paddingTop:2}}>Share this app with friends and family</Text>
            </View>
            <View style={{alignSelf:'center',paddingRight:15}}>
            <Ionicons name="ios-arrow-forward" size={30} color="black" />
            </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',width:410,height:100,borderTopWidth:0.5,borderBottomWidth:0.5,borderColor:'#D3D3D3'}}>
            <View style={{flex:1,alignSelf:'center',paddingLeft:20}}>
            <Text style={{fontFamily:'rale_bold'}}>Self Assessment</Text>
            <Text style={{fontFamily:'rale_light',fontSize:12,paddingTop:2}}>Ascertain your covid-19 risk using our screening tool</Text>
            </View>
            <View style={{alignSelf:'center',paddingRight:15}}>
            <Ionicons name="ios-arrow-forward" size={30} color="black" />
            </View>
            </TouchableOpacity>
            </ScrollView>
            <Modal
            style={{width:420,backgroundColor:'none',margin:0,height:180,justifyContent:'flex-start',paddingTop:10}}
            animationType = {"slide"}
            
            transparent={true}
            visible={this.state.show}
            onRequestClose={() => {
                Alert.alert('Modal has now been closed.');
                
            }}
            >
            
            <View style={styles.modalView}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Text style={{fontFamily:'rale_bold',fontSize:28,paddingTop:30}}>Self Assessment</Text>
            </View>
            <View style={{marginTop:30}}>
            <Text style={{fontFamily:'rale_bold',paddingBottom:4}}>Getting Started!</Text>
            <Text style={{fontFamily:'rale_regular',fontSize:14,textAlign:'justify',paddingBottom:4}}>This tool is intended to help you understand what to do next about COVID-19.You'll answer a few questions about your symptoms,travel and contact you've had with others.</Text>
            <Text style={{fontFamily:'rale_bold',paddingBottom:4}}>Note</Text>
            <Text style={{fontFamily:'rale_regular',fontSize:14,textAlign:'justify',paddingBottom:4}}>Recommendations provided by this tool do not constitute medical advice and should not be used to diagnose or treat medical conditions.</Text>
            <Text style={{fontFamily:'rale_regular',fontSize:14,textAlign:'justify',paddingBottom:4}}>Let's all look out for each other by knowing our status, trying not to infect others, and reserving care for those in need</Text>
            </View>
             <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
            <Button style={{height:55,justifyContent:'center'}}
            dark
            onPress={
                ()=>{this.close(!this.state.show)
                }}
                block
            >
            <Text>Start Assessment...</Text>
        </Button>
            </View>
            </View>
          </Modal>
            </Container>
        )
    }
}

const styles=StyleSheet.create({
    modalView: {
        margin: 0,
        backgroundColor: "white",
        borderTopRightRadius: 5,borderTopLeftRadius:5,
        padding:15,
        height:727
      }
})
import { Ionicons } from '@expo/vector-icons';

import React, { Component } from 'react';

import {View,StyleSheet,Text,TouchableOpacity,Alert,TextInput} from 'react-native';

import {Button,Container,Header,Card,CardItem,Left,Content, Right,Body} from 'native-base';

import Modal from 'react-native-modal';

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
    {label: 'None', value: 0 },
    {label: 'Mild', value: 1 },
    {label:  'Mid', value: 2 },
    {label: 'Semi', value: 3 },
    {label: 'High', value: 4 },
  ];

export default class VitalsScreen extends Component{
    constructor(props){
        super(props)
        this.state={
            show:false,
            phone:false,
            phone1:true,
            validity:true,
            report:true,
            case:'',
            case1:''
        }
    }
    onChange=(value)=>{
        this.setState({phone:true})
        this.setState({phone1:false})
        this.setState({report:value})
    }
    onChange1=(value)=>{
        this.setState({phone1:true})
        this.setState({phone:false})
        this.setState({report:value})
    }
    close(show1){
        this.setState({show:show1});
    }
   
    render(){
        return(
            <Container>
            <View style={{height:50,marginLeft:20}}>
            <Text style={{fontFamily:'Roboto_medium',fontSize:30}}>Vitals</Text>
            </View>
            <View
            style={{alignItems:'center'}}
            >
            <Button transparent
            style={{
                justifyContent:'center',
                borderStyle:'dashed',
                borderColor:'#000',
                borderWidth:1,
                width:150,height:55,
            
            }}
            onPress={()=>this.setState({show:true})}
            >
            <Text
            style={{
                textTransform:'capitalize',
                color:'#000',fontFamily:'rale_regular',
                fontWeight:'400',fontSize:12
        }}
            >Log Vitals</Text>
            </Button>
            </View>
            <View>
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
            <Text style={{fontFamily:'rale_bold',fontSize:35}}>Make Report</Text>
            <Ionicons name="md-close" size={30} color="black" 
            onPress={() => {
                this.close(!this.state.show);}}
                
            />
            </View>
            <View>
            <Card >
            <CardItem header>
            <Text>Dry Cough</Text>
            </CardItem>
            <CardItem>
            <Body>
            <RadioForm
                radio_props={this.state.types}
                initial={0}
                formHorizontal={true}
                labelHorizontal={true}
                buttonColor={'#2196f3'}
                animation={true}
                onPress={(value) => {this.setState({value:value})}}
/>
            </Body>
            </CardItem>

            </Card>
            </View>
             <View style={{justifyContent:'center',marginTop:100}}>
            <Button style={{height:55,justifyContent:'center'}}
            dark
            onPress={
                ()=>{this.close(!this.state.show),
                    navigate('UpdateReport',{data:this.state.case,data1:this.state.case1}),
                Alert.alert('Your report has been updated successfully')
                }}
            >
            <Text style={{color:'#fff',fontFamily:'rale_bold'}}>Report Case</Text>
            </Button>
            </View>
            </View>
          </Modal>
            </View>
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
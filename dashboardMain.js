import React, {Component ,useState} from 'react';
import { Text, View, StyleSheet,StatusBar, ListView, ImageBackground,ScrollView ,Image } from 'react-native';
import {  AntDesign,SimpleLineIcons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right,Picker,Form ,Body,DeckSwiper,Card,CardItem,Thumbnail} from 'native-base';
//import { Container, Content, Header, Form, Input, Item, Label, Icon, List, ListItem } from 'native-base';
import Contact4 from './contact4';
import { FontAwesome5 } from '@expo/vector-icons'; 

import { YellowBox } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { color } from 'react-native-reanimated';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { linear } from 'react-native/Libraries/Animated/src/Easing';
import { Divider } from 'react-native-paper';


YellowBox.ignoreWarnings([
	'VirtualizedLists should never be nested',])

export default class DashboardMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }
  onValueChange(value) {
    this.props.navigation.navigate('SearchEvent');


   /* if (this.state.value ==="key1"){
      this.props.navigation.navigate("SearchEvent")
    }*/
  
  }

 /* onSelect(value){

    this.props.navigation.navigate("SearchEvent")({
      selected:value
      
    });
  }*/
 render(){
    return (



      <Container >
      <Header >
        <Left >
          <Button transparent onPress={()=>this.props.navigation.goBack()}>
            <Icon name='keyboard-backspace' size={25}  />
          </Button>
        </Left>
        <Body >
          <Title>Dashboard</Title>
        </Body>
        
       <Right>
       <Button transparent   onPress={()=>this.props.navigation.popToTop()}>
            <Icon name='exit-to-app' size={25} />
          </Button>
       </Right>
      </Header>
      
      <Content >
     
      <Thumbnail large style={{left:155 ,top:50, marginBottom:35}}source={{uri: 'https://f0.pngfuel.com/png/136/22/profile-icon-illustration-user-profile-computer-icons-girl-customer-avatar-png-clip-art-thumbnail.png'}} />
  
 <Text style={{top:35,fontSize:13, left:106}}>50 days left until wedding day</Text>
         
         
   
 <Text style={{fontWeight:'bold' ,fontSize:18,top:80, left:83}}> Select your Venue type?</Text>
 <Form style={{marginTop:100,marginBottom:20,left:120}}>
            <Picker
              mode="dropdown"
              iosHeader="Select your Venue Type"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: 120 }}
              placeholder="select one"
              
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Banquet Halls" value="key0" />
              <Picker.Item label="Marquee" value="key1" />
              <Picker.Item label="RoofTop" value="key2" />
             
            </Picker>
          </Form>
        
          <Button rounded danger style={{left:110, padding:50}} onPress={()=>this.props.navigation.navigate("SearchEvent")}>
            <Text>Search</Text>
          </Button>



     
          <Text style={{fontSize:18,left:135,top:20,marginBottom:10,marginTop:70}}>Follow us on </Text>
          <View style={{margin:20, paddingLeft:25}}>
 
      <Thumbnail  style={{left:40}} source={{uri: 'https://www.iconfinder.com/data/icons/vector-brand-logos/40/Instagram-512.png'}} size={10}/>
      <Thumbnail style={{left:115, bottom:55}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPf0C9QSm5-iGlGP1RkfgsKJOe_0N6EesgxQ&usqp=CAU'}} />
      <Thumbnail  style={{left:190, bottom:110}}  source={{uri: 'https://i.pinimg.com/600x315/72/f3/8f/72f38fe442abadd278bc71eb9ef333b0.jpg'}} />  
     
       </View> 
       


      </Content>
     
      <Footer  >
          <FooterTab style={{padding:2}}>
            <Button vertical active vertical>
              <Icon vertical active name="apps" />
              <Text>Dashboard</Text>
            </Button>
            <Button vertical onPress={()=>this.props.navigation.navigate("Supplier")}>
              <Icon name="camera" />
              <Text> Suppliers</Text>
            </Button>
            <Button >
              <Icon  name="apps" />
              <Text>Checklist</Text>
            </Button>
            <Button vertical>
              <Icon name="apps" />
              <Text>Guests</Text>
            </Button>
          </FooterTab>
        </Footer>
     
      
     
     
    </Container>
   
  
        

      );
 }}
  
  
  const styles=StyleSheet.create({


    
    

  });
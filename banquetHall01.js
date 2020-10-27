import React, {Component ,useState} from 'react';
import { Text, View, StyleSheet,StatusBar, ListView, ImageBackground,ScrollView ,Image } from 'react-native';
import {  AntDesign,SimpleLineIcons} from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right,Picker,Form ,Body,DeckSwiper,Card,CardItem,Thumbnail, DatePicker,ListItem,CheckBox,Textarea} from 'native-base';
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

export default class BanquetHall01 extends Component {

  constructor(props) {
    super(props);
   
    
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
          <Title> Details</Title>
        </Body>
        
        <Right  />
      </Header>
      
      <Content >
      <Image source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCNgmFCzotQPxvB2TQuSU0baS6eMfldIiNfQ&usqp=CAU'}} style={{height: 200, width: null, flex: 1}}/>

      <Card>
            <CardItem header>
              <Text style={{fontWeight:"bold"}}>Tulip Banquet Hall</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                 We will provide you the best Services for the event, We provide best quality of Event management 
                 and allow external decorators for your comfort.
                </Text>
   

              </Body>
             
            </CardItem>
            <CardItem footer>
              <Text style={{fontWeight:"bold"}}>Timmings 12 am - 10 pm</Text>
            </CardItem>
         </Card>
         <View style={{}}>

        <ListItem >
          <CheckBox checked={true} color="green" />
       <Body>
      <Text style={{left:10}}>External Decorators</Text>
      </Body>
      </ListItem>
        <ListItem>
      <CheckBox checked={false} color="green" />
         <Body>
    <Text style={{left:10}}>External Caterers </Text>
         </Body>
</ListItem>
        <ListItem>
 <CheckBox checked={true} color="green" />
 <Body>
   <Text style={{left:10}}>Wifi</Text>
 </Body>
</ListItem>
 <ListItem>
 <CheckBox checked={true} color="green" />
 <Body>
   <Text style={{left:10}}>Waitress</Text>
 </Body>
</ListItem>
 <ListItem>
 <CheckBox checked={true} color="green" />
 <Body>
   <Text style={{left:10}}>Air Conditioned</Text>
 </Body>
</ListItem>

</View>
       <Form style={{marginTop:25}}>
            <Textarea rowSpan={5} bordered placeholder="Other" />
          </Form>
            <View style={{marginTop:50}}>
               <Button block success onPress={()=>this.props.navigation.navigate("Hall01Book")}>
            <Text style={{}}>Book Now</Text>
          </Button>
          </View>
          


     
          <Text style={{fontSize:18,left:135,top:20,marginBottom:10,marginTop:70}}>Follow us on </Text>
          <View style={{margin:20, paddingLeft:25}}>
 
      <Thumbnail  style={{left:40}} source={{uri: 'https://www.iconfinder.com/data/icons/vector-brand-logos/40/Instagram-512.png'}} size={10}/>
      <Thumbnail style={{left:115, bottom:55}} source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPf0C9QSm5-iGlGP1RkfgsKJOe_0N6EesgxQ&usqp=CAU'}} />
      <Thumbnail  style={{left:190, bottom:110}}  source={{uri: 'https://i.pinimg.com/600x315/72/f3/8f/72f38fe442abadd278bc71eb9ef333b0.jpg'}} />  
     
       </View> 
       


      </Content>
     
     
     
      
     
     
    </Container>
   
  
        

      );
 }}
  
  
  const styles=StyleSheet.create({


    
    

  });
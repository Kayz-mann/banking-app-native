import React, {useEffect} from 'react';
import {Dimensions, ImageBackground, ScrollView, StyleSheet} from 'react-native';
import theme, {Box, Text} from '../theme';
import {Container, Content, Title, View} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {
  Butterfly,
  Phone,
  Bills,
  Nigeria,
  Usa,
  Home,
  Transactions,
  More,
  Cards,
} from '../../Icons';
import Animated from 'react-native-reanimated';
import {pattern} from '../../../assets/images';
import {SEGMENT, ICON_SIZE, PADDING} from '../../Constants';
import Tab from './Tab';
import {
  FlatList,
  TapGestureHandler,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {socket, roomID, receiver} from '../../store/actions/transactionAction';
import {useDispatch, useSelector} from 'react-redux';
import { paddingTop } from 'styled-system';

const {width, height} = Dimensions.get('window');

const actions = [
  {
    title: 'Request Money',
    icon: <Butterfly width={20} height={20} />,
    color: '#CECECE',
    cta: 'Request',
  },
  {
    title: 'Send Money',
    icon: <Butterfly width={20} height={20} />,
    color: '#CECECE',
    cta: 'Send',
  },
  {
    title: 'Buy Airtime',
    icon: <Phone width={20} height={20} />,
    color: '#CECECE',
    cta: 'Buy',
  },
  {
    title: 'Pay Bills',
    icon: <Bills width={20} height={20} />,
    color: '#CECECE',
    cta: 'Pay',
  },
];

export const menus = [
  {text: 'Home', icon: <Home width={30} height={30} />, routeName: 'Home'},
  {text: 'Cards', icon: <Cards width={30} height={30} />, routeName: 'Card'},
  {
    text: 'Transactions',
    icon: <Transactions width={30} height={30} />,
    routeName: 'Transactions',
  },
  {text: 'More', icon: <More width={30} height={30} />, routeName: 'More'},
];

function Dashboard({navigation}) {
  const {navigate} = navigation

  // User account
  const {account_balance} = useSelector((state) => state.auth)

  const onSwitch = (routeNumber, routerName) => {
    const isCurrentRoute = routeNumber === 0 ? true : false;
    if (!isCurrentRoute) {
      navigate(routerName)
    }
  }
    // on call to route
    const onCTA = (route) => {
      if (route == 'Send') return navigate('Send')
    }
 
  return (
  
  <Box flex={1} backgroundColor="white" >
    <Box
      height={height * 0.3}
      backgroundColor="white"
      paddingHorizontal="m">
        <Box flexDirection="row" justifyContent="flex-end" alignItems="center" paddingTop="s">
           <Ionicons name="settings" size={28} color="gray" />
           <Text variant="title1"
           color="darkGrey"
           fontSize={28}
           marginHorizontal="m">
              |
           </Text>
           <TouchableOpacity>
             <Ionicons name="notifications"
             size={28}
             color="gray" />
           </TouchableOpacity>
        </Box>
        <Box backgroundColor="black" paddingHorizontal="m" paddingVertical="m" marginTop="s" borderRadius="m">
              <Box flexDirection="row" justifyContent="space-between" alignItems="center">
                  <Text variant="title1" color="white" fontSize={30}>
                    {account_balance}.
                    <Text fontSize={12} marginRight="m" marginTop="m">00</Text>
                  </Text>
                  <Box backgroundColor="grey" 
                  style={{paddingHorizontal: 10, paddingVertical: 4}}
                  borderRadius="s"
                  justifyContent="center" alignItems="center">
                   <Text textAlign="center" variant="title1" 
                   fontSize={15} color="black">NGN</Text>
                    <Box justifyContent="center" alignItems="center">
                       <MaterialIcon name="arrow-drop-down" size={18} color="black" />
                    </Box>
                  </Box>
              </Box>
              <Box marginTop="m" marginBottom="m">
                 <Box 
                    width={90}
                    backgroundColor="grey"
                    style={{paddingHorizontal: 5, paddingVertical: 7}}
                    borderRadius="s" alignItems="center" justifyContent="center" marginTop="s">
                    <Text textAlign="center" variant="title1" fontSize={15} color="black">Add Money</Text>
                 </Box>
              </Box>
        </Box>
    </Box>

<ScrollView  style={{height: 400}}>
<Container >
      <Content style={{paddingBottom:theme.spacing.xl}} showsVerticalScrollIndicator={false} >
       <Box flexDirection="column" flexWrap="wrap" justifyContent="center" onStartShouldSetResponder={() => true} >
              {actions.map(({title, icon, color, cta}) => (
              
                <Box
                  style={{backgroundColor: color}}
                  key={title}
                  padding="m"
                  width="80%"
                  height="l"
                  margin="s"
                  color="white"
                  marginTop="l"
                  marginLeft="m"
                  borderRadius="m">
                
                    
                  <TouchableOpacity onPress={() => onCTA(cta)} >
                    <Box justifyContent="space-between"  flexDirection="row">
                    <Box style={{borderRadius: 100}}
                    
                    backgroundColor="white"
                    width={30}
                    justifyContent="center"
                    marginVertical={0}>
                      {icon} 
                    </Box>
                    <Box>
                      {title}
                    </Box>
                    </Box>
                    </TouchableOpacity>
                </Box>
              
              ))}
            </Box>
            <TapGestureHandler>
            <Box paddingHorizontal="m" marginBottom="l">
              <Box marginTop="l" backgroundColor="white" paddingVertical="l" borderRadius="m"
              height={150} justifyContent="center" alignItems="center" paddingHorizontal="l">
                <Entypo name="circle-with-plus" size={35} color="black" />
                <Text variant="body" textAlign="center" paddingHorizontal="l" marginTop="s">
                  Tap here to create your dollar card now
                </Text>
              </Box>
            </Box>
             </TapGestureHandler> 
           <Box paddingHorizontal="m" marginBottom="xl" >
             <ImageBackground source={pattern} 
             style={{height: 100, width: '100%'}} >
               <Box justifyContent="center" alignItems="center" paddingLeft="l" paddingRight="xl" borderRadius="l">
                 <Text variant="title2" color="white" fontWeight="700">
                   Send a redeemable gift card to family & friends anywhere in the world
                 </Text>
               </Box>
             </ImageBackground>
            </Box>
        </Content>
    </Container>
   
    </ScrollView> 
    
    
    <Box height={70} backgroundColor="grey" flexDirection="row" >
              <Box style={{...styles.tabs}}>
                {menus.map(({icon, text, routeName}, index) => (
                  <Box {...{index}} style={{...styles.tab}} key={index}>
                    <Tab 
                     style={{...styles.tabs}}
                       onPress={(index, route) => onSwitch(index, route)} {...{index, text, routeName}}>
                      {icon}
                    </Tab>
                  </Box>
                ))}
              </Box>
      </Box> 
 </Box>
  
  );
}


{/* <Box flexDirection="column" flexWrap="wrap" justifyContent="center">
              {actions.map(({title, icon, color, cta}) => (
              
                <Box
                  style={{backgroundColor: color}}
                  key={title}
                  padding="m"
                  width="80%"
                  height="l"
                  margin="s"
                  color="white"
                  marginTop="l"
                  marginLeft="m"
                  borderRadius="m">
                
                    
                  <TouchableOpacity onPress={() => onCTA(cta)} >
                    <Box justifyContent="space-between"  flexDirection="row">
                    <Box style={{borderRadius: 100}}
                    
                    backgroundColor="white"
                    width={30}
                    justifyContent="center"
                    marginVertical={0}>
                      {icon} 
                    </Box>
                    <Box>
                      {title}
                    </Box>
                    </Box>
                    </TouchableOpacity>
                </Box>
              
              ))}
            </Box>
            <TapGestureHandler>
            <Box paddingHorizontal="m" marginBottom="l">
              <Box marginTop="l" backgroundColor="white" paddingVertical="l" borderRadius="m"
              height={150} justifyContent="center" alignItems="center" paddingHorizontal="l">
                <Entypo name="circle-with-plus" size={35} color="black" />
                <Text variant="body" textAlign="center" paddingHorizontal="l" marginTop="s">
                  Tap here to create your dollar card now
                </Text>
              </Box>
            </Box>
             </TapGestureHandler> 
           <Box paddingHorizontal="m" marginBottom="xl">
             <ImageBackground source={pattern} 
             style={{height: 280, width: '100%'}} >
               <Box justifyContent="center" alignItems="center" paddingLeft="l" paddingRight="xl" borderRadius="l">
                 <Text variant="title2" color="white" fontWeight="700">
                   Send a redeemable gift card to family & friends anywhere in the world
                 </Text>
               </Box>
             </ImageBackground>
            
           </Box>
           <Box height={70} backgroundColor="danger">
              <Box style={{...styles.tabs}}>
                {menus.map(({icon, text, routeName}, index) => (
                  <Box {...{index}} style={{...styles.tab}} key={index}>
                    <Tab 
                    onPress={(index, route) => onSwitch(index, route)} {...{index, text, routeName}}>
                      {icon}
                    </Tab>
                  </Box>
                ))}
              </Box>
            </Box>  */}


 
export default Dashboard;

export const styles = StyleSheet.create({
 
  tabs: {
    alignItems: 'center',
    backgroundColor: 'grey',
    
    
  },
  tab: {
    width: SEGMENT,
    height: ICON_SIZE + PADDING * 2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  

})

// 1:56:36
import React from 'react';
import {Dimensions, ImageBackground, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import theme, {Box, Text} from '../theme';
import {Container, Content} from 'native-base';
import {menus, styles} from './Dashboard';
import Tab from './Tab';
import { useSelector } from 'react-redux';
import { ScrollView, TapGestureHandler } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import { pattern } from '../../../assets/images';


const {width, height} = Dimensions.get('window');

const transactions = [
  {type: 'send', name: 'Samuel', price: 200, purpose: 'I paid money to Victor'},
  {
    type: 'received',
    name: 'Cynthia',
    price: 200,
    purpose: 'Refund from mama Deborah',
    date: 'Mar 3 2021',
  },
  {
    type: 'send',
    name: 'Samuel',
    price: 200,
    purpose: 'I bought an apple',
    date: 'Mar 3 2021',
  },
  {
    type: 'received',
    name: 'Nengi',
    price: 200,
    purpose: 'Office Payment',
    date: 'Mar 3 2021',
  },
  {
    type: 'send',
    name: 'Samuel',
    price: 200,
    purpose: 'I bought a shoe',
    date: 'Mar 3 2021',
  },
  {
    type: 'received',
    name: 'Nnanna',
    price: 200,
    purpose: 'Transfer from Emeka',
    date: 'Mar 3 2021',
  },
];

function Transactions({navigation}) {
  const {navigate} = navigation

  const onSwitch = (routeNumber, routerName) => {
    const isCurrentRoute = routeNumber === 2 ? true : false;
    if (!isCurrentRoute) {
      navigate(routerName)
    }
  }


  // User account
  const {account_balance} = useSelector((state) => state.auth)
  return (
    <Box flex={1} backgroundColor="white" justifyContent="flex-start">
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
                    {account_balance}
                    <Text fontSize={12} marginRight="m">00</Text>
                  </Text>
                  <Box backgroundColor="darkGrey" 
                  style={{paddingHorizontal: 10, paddingVertical: 4}}
                  borderRadius="s"
                  justifyContent="center" alignItems="center">
                   <Text textAlign="center" variant="title1" 
                   fontSize={15} color="white">NGN</Text>
                    <Box justifyContent="center" alignItems="center">
                       <MaterialIcon name="arrow-drop-down" size={18} color="black" />
                    </Box>
                  </Box>
              </Box>
              <Box marginTop="m" marginBottom="m">
                 <Box 
                    width={90}
                    backgroundColor="darkGrey"
                    style={{paddingHorizontal: 5, paddingVertical: 7}}
                    borderRadius="s" alignItems="center" justifyContent="center" marginTop="s">
                    <Text textAlign="center" variant="title1" fontSize={15} color="black">Add Money</Text>
                 </Box>
              </Box>
        </Box>
    </Box>
    <ScrollView style={{height: 350}}>
   <Container>
      <Content style={{paddingBottom: 5}}
      showsVerticalScrollIndicator={false}>
        <Box>
        <Box flexDirection="row" justifyContent="space-between" alignItems="center">
          <Text>Last 7 days</Text>
        </Box>
        </Box>
        <Box flexDirection="row" paddingHorizontal="m" justifyContent="space-between">
          <Box>Text Graph</Box>
        </Box>
        <Box paddingRight="xl">
          <Box marginBottom="m">
            <Text variant="body" fontSize={12}>Total Spending</Text>
            <Text color="danger" varaint="title1" fontSize={25}>NGN0.00</Text> 
          </Box>
          <Box>
          <Text variant="body" fontSize={12}>Total money received</Text>
            <Text color="danger" varaint="title1" fontSize={25}>NGN0.00</Text> 
          </Box>
        </Box>
        <Box paddingVertical="m">
           {!transactions.length > 0 ? (<Text textAlign="center" variant="">No Transactions made recently</Text>
           ):(
             <Box>
               {transactions.map(({name, type, price, purpose, date}, index) => (
                 <Box key={index} paddingHorizontal="m" flexDirection="row"justifyContent="space-between" marginBottom="m" alignItems="center" paddingVertical="m" borderBottomWidth={1}>
                   <Text variant="body">{name}</Text>
                   <Text variant="body" fontSize={5} marginTop="l">{date}</Text>
                   <Box>
                     <Text variant="body" fontWeight="600"
                     color={type == 'received' ? 'primary' : 'danger'}>
                         {type == 'send' ? `-NGN${price}` : `NGN${price}`}
                     </Text>
                   </Box>
                 </Box>
                 ),
               )}
             </Box>
           )}
        </Box>
      </Content>
    </Container>
    </ScrollView>
    <Box height={170} backgroundColor="grey" flexDirection="row" >
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

export default Transactions;

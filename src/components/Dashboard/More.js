import React from 'react';
import {Box, Text} from '../theme';
import {menus, styles} from './Dashboard';
import Tab from './Tab';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

function More({navigation}) {
  const {navigate} = navigation

  // User
  const {account_number} = useSelector(state => state.auth)

  const onSwitch = (routeNumber, routerName) => {
    const isCurrentRoute = routeNumber === 0 ? true : false;
    if (!isCurrentRoute) {
      navigate(routerName)
    }
  }
  return (
    <Box flex={1} backgroundColor="white" justifyContent="flex-end">
      <Box flex={1} padding="m">
        <Text variant="title1" color="black" fontSize={30}>
          More things you can do
        </Text>
        <Text marginTop="m" fontWeight="600" variant="title2" fontSize={25}
        marginBottom="m">
          Receive Money
        </Text>
        <Box backgroundColor="barter3" paddingVertical="m" paddingHorizontal="m" borderRadius="m">
          <Text color="black" variant="body">
            Account Number
          </Text>
          <Text variant="title1" color="black" fontSize={18} marginLeft="s" fontWeight="700">
               {account_number}
          </Text>
      </Box>
      <Box flexDirection="row" alignItems="center">
        <Text color="black" variant="body">
          Bank Name:
        </Text>
        <Text variant="title1" color="black" fontSize={18} marginLeft="s" fontWeight="700">
            Madrid Bank
        </Text>
      </Box>
      <Box paddingVertical="l">
         <TouchableOpacity>
           <Box flexDirection="row" justifyContent="space-between" borderBottomWidth={1} 
           paddingBottom="m" borderBottomColor="primaryLight">
            <Box>
              <Text variant="title2" fontSize={17}>
                Invite friends
              </Text>
              <Text variant="body" fontSize={14}>
                Get paid for every friend that signs up and use Madrid
              </Text>
            </Box>
           </Box>
         </TouchableOpacity>
         <Box flexDirection="column" marginTop="m" paddingHorizontal="m">
           <Text variant="title1" color="black" fontSize={20} fontWeight="bold">
                Make a  payment
           </Text>
           <TouchableOpacity>
             <Box marginTop="m" flexDirection="row" justifyContent="space-between" marginTop="s"
             borderBottomWidth={1} borderBottomColor="primaryLight" paddingBottom="m">
               <Box>
                 <Text variant="title2" fontSize={17}>
                     Pay with QR Code
                 </Text>
                 <Text variant="title2" fontSize={14}>
                     Make payments with Visa QR
                 </Text>
               </Box>
             </Box>
             <Box marginTop="m" flexDirection="row" justifyContent="space-between" marginTop="s"
             borderBottomWidth={1} borderBottomColor="primaryLight" paddingBottom="m">
               <Box>
                 <Text variant="title2" fontSize={17}>
                     Send money to whatsapp
                 </Text>
                 <Text variant="title2" fontSize={14}>
                     Send money to your friends on whatsapp
                 </Text>
               </Box>
             </Box>
           </TouchableOpacity>
         </Box>
      </Box>
      </Box>
      
      <Box height={270} flexDirection="row" width={520} backgroundColor="grey">
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
       </Box>
    </Box>
  );
}

export default More;

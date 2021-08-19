import React, {useEffect} from 'react';
import {Dimensions, ImageBackground, StyleSheet} from 'react-native';
import theme, {Box, Text} from '../theme';
import {Container, Content} from 'native-base';
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
  TapGestureHandler,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {socket, roomID, receiver} from '../../store/actions/transactionAction';
import {useDispatch, useSelector} from 'react-redux';

const {width, height} = Dimensions.get('window');

const actions = [
  {
    title: 'Request Money',
    icon: <Butterfly width={20} height={20} />,
    color: '#FDD1FF',
    cta: 'Request',
  },
  {
    title: 'Send Money',
    icon: <Butterfly width={20} height={20} />,
    color: '#F9F9D6',
    cta: 'Send',
  },
  {
    title: 'Buy Airtime',
    icon: <Phone width={20} height={20} />,
    color: '#DCF5FF',
    cta: 'Buy',
  },
  {
    title: 'Pay Bills',
    icon: <Bills width={20} height={20} />,
    color: '#C6E1DD',
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
    // on call to route
    const onCTA = (route) => {
      if (router == 'Send') return navigate('Send')
    }
  }
  return <Box flex={1} backgroundColor="white" justifyContent="flex-end"></Box>;
}
 
export default Dashboard;

// 1:56:36
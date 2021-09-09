import React, {useEffect, useState} from 'react';
import {StyleSheet} from 'react-native';
import theme, {Box, Text} from '../theme';
import {Input, Form, Item, Button} from 'native-base';
import {StackActions} from '@react-navigation/native';
import {register, login} from '../../store/actions/authActions';
import {useDispatch, useSelector} from 'react-redux';

function Password({navigation, route}) {
  const [password, setPassword] = useState("")
  const { data, type } = route.params
  const dispatch = useDispatch()
  const {navigate} = navigation
  const { isAuthenticated} = useSelector((state) => state.auth)
  const {msg} = useSelector((state) => state.err)

  const onSubmit = () => {
    if (type === 'REGISTER') {
      const {name, email, phone, userRef} = data

      const newUser = {
        name, email, phone, userRef, password,
      }
      dispatch(register(newUser))
    } else if (type === 'LOGIN') {
      const {email} = data;
      dispatch(login({ email, password}))
    }
  }


  useEffect(() => {
    if (isAuthenticated) {
      navigation.dispatch(StackActions.replace('Dashboard'))
    }
  }, [isAuthenticated])

  return (
    <Box flex={1} backgroundColor="white"
    justifyContent="flex-start"
    position="relative">
       <Box paddingHorizontal="m" paddingVertical="m">
          <Box marginTop="m">
            <Box>{msg ? (<Text variant="body" color="danger" textAlign="center">{msg}</Text>) : null}</Box>
             <Form>
             <Item style={{...styles.itemStyle}}>
                  <Input placeholder="Password"
                  defaultValue={password}
                  onChangeText={(text) => setPassword(text)}
                  />
               </Item>
               <Item style={{...styles.itemStyle}} onPress={onSubmit}>
                 <Box
                  backgroundColor="black"
                  paddingVertical="m"
                  alignItems="center"
                  borderRadius="m"
                  marginBottom="s"
                  marginTop="l"
                  width="100%"
                  style={{...styles.btnStyle}} > 
                    <Text variant="title1" fontSize={18} fontWeight="700">
                        {type === 'LOGIN'? 'Login': 'Register'}
                    </Text>
                 </Box>
               </Item>
             </Form>
          </Box>
       </Box>
    </Box>
  );
}

export default Password;

const styles = StyleSheet.create({
  itemStyle: {
    marginTop: 20,
  },
  btnStyle: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: "black",
    marginTop: 10,
  }
})


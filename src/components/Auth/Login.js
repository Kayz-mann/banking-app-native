import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import theme, {Box, Text} from '../theme';
import {Input, Form, Item, Button} from 'native-base';

function Login({navigation}) {
  const [email, setEmail] = useState("")
  const {navigate} = navigation


  const onLogin = () => {
    navigate("Password", {data: {email}, type: 'LOGIN'})
  }
  return (
    <Box flex={1} backgroundColor="white">
      <Box paddingHorizontal="m" paddingVertical="m">
        <Text>
          Whether youre creating an account or signing back in let's start with your email & password
        </Text>
        <Box marginTop="m">
           <Form>
           <Item style={{...styles.itemStyle}}>
                  <Input placeholder="Email Address"
                  keyboardType="email-address"
                  defaultValue={email}
                  onChangeText={(text) => setEmail(text)}
                  />
               </Item>
              <Item style={{...styles.itemStyle}} onPress={onLogin}>
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
                          Continue
                      </Text>
                  </Box>
                </Item>
           </Form>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;

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

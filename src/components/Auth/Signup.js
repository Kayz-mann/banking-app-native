import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import theme,  {Box, Text} from '../theme';
import {Input, Form, Item, Button,} from 'native-base';
import { useDispatch } from 'react-redux';
import {register} from "../../store/actions/authActions"


const Signup = ({navigation}) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [userRef, setUserRef] = useState("")
  const [password, setPassword] = useState("")
  
  const dispatch = useDispatch();

  const onSubmit = () => {
    
    if (!email || !phone) return alert("Please set all fields");
    
    const data = {
      name,
      email,
      phone,
      userRef,
      password
    };

    // dispatch(register(newUser))
    navigate('Password', {data, type: 'REGISTER'})

  }

  return (
    <SafeAreaView>
    <Box flex={1} backgroundColor="white">
        <Box paddingHorizontal="m" paddingVertical="m">
          <Box marginTop="m">
             <Form>
               <Item style={{...styles.itemStyle}}>
                  <Input placeholder="Name & Surname"
                  defaultValue={name}
                  onChangeText={(text) => setName(text)}
                  />
               </Item>
               <Item style={{...styles.itemStyle}}>
                  <Input placeholder="Email Address"
                  keyboardType="email-address"
                  defaultValue={email}
                  onChangeText={(text) => setEmail(text)}
                  />
               </Item>
               <Item style={{...styles.itemStyle}}>
                  <Input placeholder="Password"
                  defaultValue={password}
                  onChangeText={(text) => setPassword(text)}
                  />
               </Item>
               <Item style={{...styles.itemStyle}}>
                  <Input placeholder="Phone nuber"
                  keyboardType="phone-pad"
                  defaultValue={phone}
                  onChangeText={(text) => setPhone(text)}
                  />
               </Item>
               <Item style={{...styles.itemStyle}}>
                  <Input placeholder="Refferal Code(Optional)"
                  
                  defaultValue={userRef}
                  onChangeText={(text) => setUserRef(text)}
                  />
               </Item>
               <Item style={{...styles.itemStyle}} onPress={onSubmit} >
                   <Box
                      backgroundColor="black"
                      paddingVertical="m"
                      alignItems="center"
                      borderRadius="m"
                      marginBottom="s"
                      marginTop="l"
                      width="100%">
                     <Text variant="title1" fontSize={18} fontWeight="700">
                       Continue
                     </Text>
                   </Box>
               </Item>
             </Form>
            </Box>
           </Box>
        
        </Box>
      </SafeAreaView>
    
  );
}

export default Signup




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

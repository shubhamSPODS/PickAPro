import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from './Icon';
import { BACK, THEME_IMG_1 } from './ImageAssets';
import { BLACK } from './Colors';
import Typography from './Typography';
import { BOLD, REGULAR, SEMI_BOLD } from './AppFonts';



const AuthHeader = ({title2, title, showBack = true,number }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {showBack && (
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Icon source={BACK}  size={25} tintColor={BLACK}/>
        </TouchableOpacity>
      )}
      <Typography size={25} color={BLACK} fontFamily={SEMI_BOLD} style={styles.title}>{title}</Typography>
      <Typography size={18} color={BLACK} fontFamily={REGULAR} style={[styles.title,{marginVertical:0}]}>{title2}<Typography style={[styles.title,{fontFamily:SEMI_BOLD}]}> {number}</Typography></Typography>
   
    
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  backBtn: {
    marginTop:20
  },
  title: {
    marginVertical:15
  },
});

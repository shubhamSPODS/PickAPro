import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { WOMEN } from '../../Components/ImageAssets';
import { GREY_DARK, THEME_GREEN, WHITE } from '../../Components/Colors';
import Typography from '../../Components/Typography';
import { MEDIUM } from '../../Components/AppFonts';

const users = [
  { id: 1, amount: 65, image: WOMEN, borderColor: '#FFA66C' },
  { id: 2, amount: 25, image: WOMEN, borderColor: '#99C8B1' },
  { id: 3, amount: 25, image: WOMEN, borderColor: '#99C8B1' },
  { id: 4, amount: 54, image: WOMEN, borderColor: '#99C8B1' },
  { id: 5, amount: 86, image: WOMEN, borderColor: '#FFA66C' },
];

export default function EarningScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageSection}>
        {users?.map((user, index) => (
          <View key={user.id} style={[styles.userContainer, { borderColor: user.borderColor, marginTop: 25 }]}>
            <Image source={user.image} style={styles.userImage} />
            <Typography  size={18} fontFamily={MEDIUM} style={[ {marginTop:5, color: user.borderColor === '#FFA66C' ? '#FF7A00' : '#007B3F' }]}>
              ${user.amount}
            </Typography>
          </View>
        ))}
      </View>
      <View style={styles.footer}>
        <View style={styles.iconCircle}>
          <Typography style={styles.icon}>💵</Typography>
        </View>
        <Typography style={styles.subtitle}>Before move forward</Typography>
        <Typography style={styles.title}>Know how much you can earn with us</Typography>
        <TouchableOpacity style={styles.button}>
          <Typography style={styles.buttonText}>See your earning</Typography>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: WHITE,
  },
  imageSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 40,
  },
  userContainer: {
    alignItems: 'center',
    borderWidth: 4,
    borderRadius: 100,
    width: 150,
    height: 150,
    justifyContent: 'center'
  },
  userImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  amount: {
    fontSize: 18,
    marginTop: 5,
  },
  footer: {
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  iconCircle: {
    backgroundColor:THEME_GREEN,
    borderRadius: 50,
    padding: 10,
    marginBottom: 10,
  },
  icon: {
    fontSize: 24,
    color: WHITE,
  },
  subtitle: {
    fontSize: 14,
    color: GREY_DARK,
    marginBottom: 4,
    fontFamily:MEDIUM
  },
  title: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily:MEDIUM
  },
  button: {
    backgroundColor: THEME_GREEN,
    paddingVertical: 14,
    paddingHorizontal: 60,
    borderRadius: 50,
  },
  buttonText: {
    color: WHITE,
    fontWeight: '600',
    fontSize: 16,
  },
});

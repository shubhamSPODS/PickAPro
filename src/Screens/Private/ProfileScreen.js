import { SafeAreaView, StyleSheet,TouchableOpacity, View } from 'react-native'
import React from 'react'
import { GREY_DARK, THEME_ORANGE, WHITE } from '../../Components/Colors'
import Header from '../../Components/Header'
import Typography, { FULL_WIDTH } from '../../Components/Typography'
import Icon from '../../Components/Icon'
import { WOMEN } from '../../Components/ImageAssets'
import { MEDIUM, REGULAR } from '../../Components/AppFonts'
import { useDispatch } from 'react-redux'
import { setUser } from '../../Redux/Slices'

const ProfileScreen = ({navigation}) => {
  const dispatch = useDispatch()
  const varData = [
    { label: 'My Bookings' },
    { label: 'My Hub', badge: 'New!' },
    { label: 'Credits' },
    { label: 'Loans' },
    { label: 'Help center' },
    { label: 'Invite a friend' },
    { label: 'Pick-A-Pro shop' },
    { label: 'Financial details', sub: 'GST, PAN and Bank information' },
    { label: 'Logout' },
  ]

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'My Profile'} />

      <View style={styles.profileWrapper}>
        <Icon source={WOMEN} size={100} />
        <View>
          <Typography size={18} fontFamily={MEDIUM} style={styles.profileName}>Jack Gill</Typography>
          <Typography size={12} fontFamily={REGULAR} style={styles.contact}>Contact No : 9927878732</Typography>
        </View>
      </View>

      {varData?.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.itemRow,
            { borderBottomWidth: varData?.length - 1 === index ? 0 : 1 }
          ]}
          onPress={() => {

          
           switch (item?.label) {
            case 'My Bookings':
                navigation.navigate('MyBookings')
              break;
           
            default:
              break;
           }
            if (item?.label === 'Logout') {
              dispatch(setUser());
           
            }
          }}
        >
          <View>
            <Typography size={14}>{item.label}</Typography>
            {item.sub && <Typography size={12} color={GREY_DARK}>{item.sub}</Typography>}
          </View>
          {item.badge ? (
            <Typography color={THEME_ORANGE} size={13}>{item.badge}</Typography>
          ) : (
            <Typography>›</Typography>
          )}
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE,
  },
  profileWrapper: {
    width: FULL_WIDTH - 40,
    padding: 5,
    alignSelf: 'center',
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileName: {
    marginLeft: 15,
  },
  contact: {
    marginLeft: 15,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderColor: '#eee',
    width: FULL_WIDTH - 40,
    alignSelf: 'center',
    marginTop: 5,
  },
})

import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import CustomTextInput from '../../Components/CustomTextInput'
import Typography, { FULL_WIDTH } from '../../Components/Typography'
import Icon from '../../Components/Icon'
import { PROFILE_ICON, WOMEN } from '../../Components/ImageAssets'
import { SEMI_BOLD } from '../../Components/AppFonts'
import { GREY_DARK, THEME_ORANGE, WHITE } from '../../Components/Colors'

const Message = () => {
  const _RenderMessageList = ({ item, index }) => {
    return (
      <TouchableOpacity activeOpacity={0.9} style={styles.messageCard}>
        <View style={styles.leftSection}>
          <Icon source={WOMEN} size={55} />
          <View style={styles.messageTextContainer}>
            <Typography size={13} fontFamily={SEMI_BOLD}>Edward Davidson</Typography>
            <Typography size={12} color={GREY_DARK} textAlign={'flex-end'} style={styles.messageSnippet}>Great, thanks so much! 💫</Typography>
          </View>
        </View>
        <View style={styles.rightSection}>
          <Typography size={12}>22:20  09/05</Typography>
          <View style={styles.badge}>
            <Typography size={12} color={WHITE}>12</Typography>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={'Messages'} />
      <View style={styles.contentWrapper}>
        <CustomTextInput
          searchIcon
          placeholder={'Search by name...'}
          inputStyle={styles.searchInput}
          containerStyle={styles.searchContainer}
        />
        <FlatList
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6, 6, 7, 2, 1, 12, 3123]}
          renderItem={_RenderMessageList}
        />
      </View>
    </SafeAreaView>
  )
}

export default Message

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    alignSelf: "center",
    marginTop: 20,
    flex: 1,
  },
  searchContainer: {
    width: '90%',
    borderRadius: 30,
  },
  searchInput: {
    width: '90%',
  },
  listContent: {
    flexGrow: 1,
  },
  messageCard: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  leftSection: {
    flexDirection: 'row',
    width: '70%',
  },
  messageTextContainer: {
    paddingHorizontal: 10,
    marginTop: 5,
  },
  messageSnippet: {
    marginTop: 5,
  },
  rightSection: {
    width: "28%",
    alignItems: "flex-end",
  },
  badge: {
    marginTop: 5,
    width: 25,
    height: 25,
    backgroundColor: THEME_ORANGE,
    borderRadius: 5,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
  },
})

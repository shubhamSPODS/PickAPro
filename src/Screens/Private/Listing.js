import { FlatList, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Header from '../../Components/Header'
import Typography, { FULL_WIDTH } from '../../Components/Typography'
import { REGULAR, SEMI_BOLD } from '../../Components/AppFonts'
import Icon from '../../Components/Icon'
import { CHECK_CIRCLE, DOWN, MAP_PIN_AREA, MONEY_IMG, STAR, SUCCESS, WOMEN } from '../../Components/ImageAssets'
import { BLACK, GREY_DARK, LIGHT_GREY } from '../../Components/Colors'

const Listing = ({navigation}) => {
    const _RenderListing = ({ item, index }) => {
        return (
            <TouchableOpacity activeOpacity={0.9} style={styles.listingCard} onPress={()=>{
  navigation.navigate('ListingQuestionary')
            }}>
                <View style={styles.cardHeader}>
                    <View style={styles.userInfo}>
                        <Icon source={WOMEN} size={30} style={styles.roundedIcon} />
                        <Typography size={12} fontFamily={SEMI_BOLD}>Shubham Singh</Typography>
                        <Icon source={SUCCESS} size={15} style={styles.roundedIcon} />
                    </View>

                    <View style={styles.ratingInfo}>
                        <Icon source={STAR} size={15} style={styles.roundedIcon} />
                        <Typography size={12} color={BLACK} fontFamily={REGULAR}>4.6</Typography>
                        <Typography size={12} color={GREY_DARK} fontFamily={REGULAR}>(28)</Typography>
                    </View>
                </View>

                <View style={styles.divider} />

                <View style={styles.detailRow}>
                    <Icon source={MAP_PIN_AREA} size={14} />
                    <Typography size={12}>California : Available</Typography>
                </View>

                <View style={styles.detailRow}>
                    <Icon source={MONEY_IMG} size={14} />
                    <Typography size={12}>Starts @ $40/hr</Typography>
                </View>

                <View style={styles.detailRow}>
                    <Icon source={CHECK_CIRCLE} size={14} />
                    <Typography size={12}>2 similar jobs completed near you</Typography>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Plumbing'} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Typography fontFamily={SEMI_BOLD} style={styles.title}>
                        Available on Pick -A-Pro
                    </Typography>
                    <TouchableOpacity  style={styles.sortButton}>
                        <Typography size={12}>Sort By</Typography>
                        <Icon source={DOWN} size={15} />
                    </TouchableOpacity>

                    <FlatList
                        data={[1, 2, 3, 4, 5]}
                        showsVerticalScrollIndicator={false}
                        renderItem={_RenderListing}
                        scrollEnabled={false}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Listing

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        width: FULL_WIDTH - 40,
        alignSelf: "center",
        padding: 5,
    },
    title: {
        marginVertical: 10,
    },
    sortButton: {
        width: '25%',
        padding: 5,
        borderRadius: 25,
        borderWidth: 0.5,
        borderColor: GREY_DARK,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    listingCard: {
        width: '100%',
        padding: 5,
        marginTop: 15,
        borderWidth: 0.5,
        borderColor: GREY_DARK,
        borderRadius: 10,
    },
    cardHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    userInfo: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 5,
    },
    roundedIcon: {
        borderRadius: 20,
    },
    ratingInfo: {
        flexDirection: "row",
        alignItems: 'center',
        gap: 3,
    },
    divider: {
        width: '100%',
        borderWidth: 0.5,
        borderColor: LIGHT_GREY,
        marginVertical: 5,
    },
    detailRow: {
        flexDirection: "row",
        gap: 10,
        marginVertical: 5,
        marginLeft: 5,
        alignItems: 'center',
    },
})

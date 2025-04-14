import { useRef, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../../Components/Header';
import Typography, { FULL_HEIGHT, FULL_WIDTH } from '../../Components/Typography';
import Icon from '../../Components/Icon';
import { FLAG, NEXT_ICON, SUCCESS } from '../../Components/ImageAssets';
import { BLACK, DARK_GREEN, GREY_DARK, LIGHT_GREY, SHADE_LAVENDAR, WHITE } from '../../Components/Colors';
import CustomTextInput from '../../Components/CustomTextInput';
import { MEDIUM, SEMI_BOLD } from '../../Components/AppFonts';
import RBSheet from 'react-native-raw-bottom-sheet';
import SheetView from '../../Components/SheetView';

const questions = [
    {
        id: '1',
        question: 'What type of Plumbing service do you need?',
        type: 'dropdown',
        required: true,
        options: [
            { label: 'Leak Repair', value: 'leak' },
            { label: 'Installation', value: 'install' },
            { label: 'Inspection', value: 'inspect' },
        ],
    },
    {
        id: '2',
        question: 'Do you need emergency service?',
        type: 'dropdown',
        required: true,
        options: [
            { label: 'Yes', value: 'yes' },
            { label: 'No', value: 'no' },
        ],
    },
    {
        id: '3',
        question: 'Any Additional Notes for the Plumbing?',
        type: 'text',
        required: false,
        textBox: 'textBox'
    },
];

const ListingQuestionary = () => {
    const refRBSheet = useRef();
    const renderQuestion = ({ item }) => {
        return (
            <View style={styles.questionContainer}>
                <Typography size={14} style={styles.questionText}>
                    {item.question} {item.required && <Typography style={styles.requiredMark}>*</Typography>}
                </Typography>

                <CustomTextInput
                    inputStyle={{ width: '100%' }}
                    containerStyle={
                        {
                            width: FULL_WIDTH - 45,
                            minHeight: item?.textBox ? 100 : 0
                        }}
                />
            </View>
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Indoor  Plumbing'} />
            <SheetView
                ref={refRBSheet}
            >
                 <View style={styles.content}>
                <Text style={styles.title}>Summary</Text>

                <View style={styles.section}>
                    <Typography size={15} fontFamily={SEMI_BOLD}>Indoor Plumbing</Typography>
                    <Typography size={15} fontFamily={MEDIUM}>$12</Typography>
                </View>

                <View style={styles.paymentCard}>
                    <View>
                    <Typography color={BLACK}>Payment Summary</Typography>
                    <Typography style={{marginTop:10}} size={12} color={GREY_DARK}>Total (inc. Vat)</Typography>
                    </View>
                    <Typography >$12</Typography>
                </View>

                <View style={styles.footer}>
                    <View>
                    <Typography style={styles.totalLabel}>Total fee</Typography>
                    <Typography style={styles.totalPrice}>$12</Typography>
                    </View>

                    <TouchableOpacity style={styles.payButton} onPress={()=>{}}>
                        <Typography style={styles.payButtonText}>PAYMENT</Typography>
                    </TouchableOpacity>
                </View>
            </View>
                </SheetView>
            <View style={styles.providerCard}>
                <View style={styles.providerInfo}>
                    <Icon source={FLAG} size={50} style={styles.logo} />

                    <View style={styles.providerTextWrapper}>
                        <View style={styles.nameRow}>
                            <Typography size={14} fontFamily={SEMI_BOLD}>Lan Plumbing</Typography>
                            <Icon source={SUCCESS} size={16} style={styles.successIcon} />
                        </View>
                        <Typography style={styles.rating}>⭐ 4.7 (115)</Typography>
                    </View>
                </View>

                <TouchableOpacity style={styles.profileLink}>
                    <Typography size={12} color={BLACK}>View Profile</Typography>
                    <Icon source={NEXT_ICON} size={16} />
                </TouchableOpacity>
            </View>

            <FlatList
                data={questions}
                renderItem={renderQuestion}
                keyExtractor={(item) => item.id}
            />

            <View style={styles.bottomContent}>
                <View>
                    <Typography size={12} color="#777">Total fee</Typography>
                    <Typography style={styles.totalFee}>₹ 650</Typography>
                </View>

                <TouchableOpacity style={styles.nextButton} onPress={() => { refRBSheet.current.open() }}>
                    <Typography color={WHITE} fontFamily={SEMI_BOLD}>Next</Typography>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ListingQuestionary;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    providerCard: {
        width: FULL_WIDTH - 40,
        alignSelf: 'center',
        padding: 10,
        backgroundColor: SHADE_LAVENDAR,
        marginVertical: 30,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    providerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    logo: {
        borderRadius: 25,
    },
    providerTextWrapper: {
        marginLeft: 10,
    },
    nameRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    successIcon: {
        marginLeft: 5,
    },
    rating: {
        color: '#555',
        fontSize: 14,
    },
    profileLink: {
        flexDirection: "row",
    },
    questionContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
    },
    questionText: {
        marginBottom: 6,
        fontWeight: '600',
    },
    requiredMark: {
        color: 'red',
    },
    inputBox: {
        width: FULL_WIDTH - 40,
    },
    textArea: {
        minHeight: 100,
    },
   
    totalFee: {
        fontWeight: '600',
        fontSize: 18,
    },
    nextButton: {
        backgroundColor: DARK_GREEN,
        paddingHorizontal: 35,
        paddingVertical: 12,
        borderRadius: 50,
    },
    content: {
        flex: 1,
        padding: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 20,
    },
    section: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    serviceTitle: {
        fontSize: 16,
        fontWeight: '600',
    },
    servicePrice: {
        fontSize: 16,
        fontWeight: '600',
    },
    paymentCard: {
        backgroundColor: SHADE_LAVENDAR,
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    cardTitle: {
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 8,
        color: '#666',
    },
    cardAmount: {
        fontSize: 12,
        color: '#999',
    },
    cardValue: {
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'right',
        marginTop: -18,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    totalLabel: {
        fontSize: 16,
        fontWeight: '600',
    },
    totalPrice: {
        fontSize: 16,
        fontWeight: '600',
    },
    payButton: {
        backgroundColor: DARK_GREEN,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 50,
    },
    payButtonText: {
        color: 'white',
        fontWeight: '600',
    },
    bottomContent:{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        minHeight:100,
        backgroundColor: WHITE,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderTopWidth: 1,
        borderColor: '#eee',
    }
});

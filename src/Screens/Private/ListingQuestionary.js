import { useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Header from '../../Components/Header';
import Typography, { FULL_WIDTH } from '../../Components/Typography';
import Icon from '../../Components/Icon';
import { FLAG, NEXT_ICON, SUCCESS } from '../../Components/ImageAssets';
import { BLACK, DARK_GREEN, WHITE } from '../../Components/Colors';
import CustomTextInput from '../../Components/CustomTextInput';
import { SEMI_BOLD } from '../../Components/AppFonts';

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
    const [answers, setAnswers] = useState({});

    const renderQuestion = ({ item }) => {
        return (
            <View style={styles.questionContainer}>
                <Typography size={14} style={styles.questionText}>
                    {item.question} {item.required && <Typography style={styles.requiredMark}>*</Typography>}
                </Typography>

                <CustomTextInput
                    containerStyle={
                        {
                            width: FULL_WIDTH-45,
                            minHeight:item?.textBox?100:0
                        }}
                />
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Indoor  Plumbing'} />

            <View style={styles.providerCard}>
                <View style={styles.providerInfo}>
                    <Icon source={FLAG} size={50} style={styles.logo} />

                    <View style={styles.providerTextWrapper}>
                        <View style={styles.nameRow}>
                            <Typography style={styles.providerName}>Lan Plumbing</Typography>
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

            <View style={styles.footer}>
                <View>
                    <Typography size={12} color="#777">Total fee</Typography>
                    <Typography style={styles.totalFee}>₹ 650</Typography>
                </View>

                <TouchableOpacity style={styles.nextButton} onPress={() => console.log('Go to next')}>
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
        backgroundColor: '#e6dfeed4',
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
    providerName: {
        fontWeight: '600',
        fontSize: 16,
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
    footer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderTopWidth: 1,
        borderColor: '#eee',
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
});

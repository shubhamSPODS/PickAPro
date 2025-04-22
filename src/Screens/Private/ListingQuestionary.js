import { useEffect, useRef, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, TouchableOpacity, View } from 'react-native';
import Header from '../../Components/Header';
import Typography, { FULL_HEIGHT, FULL_WIDTH } from '../../Components/Typography';
import Icon from '../../Components/Icon';
import { FLAG, NEXT_ICON, SUCCESS, WOMEN } from '../../Components/ImageAssets';
import { BLACK, DARK_GREEN, GREY_DARK, SHADE_LAVENDAR, WHITE } from '../../Components/Colors';
import CustomTextInput from '../../Components/CustomTextInput';
import { MEDIUM, SEMI_BOLD } from '../../Components/AppFonts';
import SheetView from '../../Components/SheetView';
import ImageUploadModal from '../../Components/ImageUploadModal';

const QUESTIONS_PER_STEP = 3;

const ListingQuestionary = () => {
    const refRBSheet = useRef();
    const [questionsData, setQuestionsData] = useState([]);
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [imageModalVisible, setImageModalVisible] = useState(false);
    const [selectedImageQuestionId, setSelectedImageQuestionId] = useState(null);


    useEffect(() => {
        fetchQuestions();
    }, []);

    const fetchQuestions = async () => {
        const mockApiQuestions = [
            { id: '1', question: 'What type of service do you need?', type: 'text', required: true },
            { id: '2', question: 'When do you need this service?', type: 'text', required: true },
            { id: '3', question: 'Do you have any special instructions?', type: 'text', required: false },
            { id: '4', question: 'Is this an urgent request?', type: 'text', required: true },
            { id: '5', question: 'Do you require follow-up visits?', type: 'text', required: false },
            { id: '6', question: 'Any parking instructions?', type: 'text', required: false },
            { id: '7', question: 'Do you prefer morning or evening slots?', type: 'text', required: true },
            { id: '8', question: 'Would you like to get notified for offers?', type: 'text', required: false },
            { id: '9', question: 'Upload related images', type: 'image', required: false }
        ];
        setQuestionsData(mockApiQuestions);
    };

    const stepQuestions = questionsData.slice(
        currentStep * QUESTIONS_PER_STEP,
        (currentStep + 1) * QUESTIONS_PER_STEP
    );

    const handleInputChange = (text, id) => {
        setAnswers(prev => ({ ...prev, [id]: text }));
    };
    const handleImagePicked = (images) => {
        console.log(images, '==images');

        if (selectedImageQuestionId) {
            setAnswers(prev => ({ ...prev, [selectedImageQuestionId]: images }));
        }
    };

    const renderQuestion = ({ item }) => {
        return (
            <View style={styles.questionContainer}>
                <Typography size={14} style={styles.questionText}>
                    {item.question} {item.required && <Typography style={styles.requiredMark}>*</Typography>}
                </Typography>

                {item.type === 'image' ? (
                    <TouchableOpacity
                        style={[{
                            marginTop: 10,
                            width: 80,
                            height: 80,
                            borderWidth: 1,
                            borderColor: GREY_DARK,
                            borderStyle: 'dotted',
                            alignItems: "center",
                            justifyContent: 'center',
                            borderRadius: 5
                        }]}
                        onPress={() => {
                            setSelectedImageQuestionId(item.id);
                            setImageModalVisible(true);
                        }}>
                        {answers[item.id]?.[0]?.path ? (
                            <Icon
                                source={{ uri: answers[item.id][0].path }}
                                style={{ width: 80, height: 80, borderRadius: 5 }}
                                resizeMode="cover"
                            />
                        ) : (
                            <Icon source={WOMEN} size={50} />
                        )}
                    </TouchableOpacity>
                ) : (
                    <CustomTextInput
                        inputStyle={{ width: '100%' }}
                        containerStyle={{ width: FULL_WIDTH - 45, minHeight: 0 }}
                        value={answers[item.id] || ''}
                        onChangeText={(text) => handleInputChange(text, item.id)}
                    />
                )}
            </View>
        );
    };


    const handleNextStep = () => {
        const nextStep = currentStep + 1;
        if (nextStep * QUESTIONS_PER_STEP < questionsData.length) {
            setCurrentStep(nextStep);
        } else {
            refRBSheet.current.open();
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <Header title={'Indoor Plumbing'} />
            <ImageUploadModal
                visible={imageModalVisible}
                onClose={() => setImageModalVisible(false)}
                onImagePicked={handleImagePicked}

            />

            <SheetView ref={refRBSheet}>
                <View style={styles.content}>
                    <Typography style={styles.title}>Summary</Typography>
                    <View style={styles.section}>
                        <Typography size={15} fontFamily={SEMI_BOLD}>Indoor Plumbing</Typography>
                        <Typography size={15} fontFamily={MEDIUM}>$12</Typography>
                    </View>
                    <View style={styles.paymentCard}>
                        <View>
                            <Typography color={BLACK}>Payment Summary</Typography>
                            <Typography style={{ marginTop: 10 }} size={12} color={GREY_DARK}>Total (inc. Vat)</Typography>
                        </View>
                        <Typography>$12</Typography>
                    </View>
                    <View style={styles.footer}>
                        <View>
                            <Typography style={styles.totalLabel}>Total fee</Typography>
                            <Typography style={styles.totalPrice}>$12</Typography>
                        </View>
                        <TouchableOpacity style={styles.payButton} onPress={() => { }}>
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
                data={stepQuestions}
                renderItem={renderQuestion}
                keyExtractor={(item) => item.id}
                ListEmptyComponent={<Typography style={{ textAlign: 'center', marginTop: 20 }}>Loading Questions...</Typography>}
            />

            <View style={styles.bottomContent}>
                <View>
                    <Typography size={12} color="#777">Total fee</Typography>
                    <Typography style={styles.totalFee}>₹ 650</Typography>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {currentStep > 0 && (
                        <TouchableOpacity style={styles.backButton} onPress={() => setCurrentStep(currentStep - 1)}>
                            <Typography color={DARK_GREEN} fontFamily={SEMI_BOLD}>Back</Typography>
                        </TouchableOpacity>
                    )}

                    <TouchableOpacity style={styles.nextButton} onPress={handleNextStep}>
                        <Typography color={WHITE} fontFamily={SEMI_BOLD}>
                            {((currentStep + 1) * QUESTIONS_PER_STEP) >= questionsData.length ? 'Finish' : 'Next'}
                        </Typography>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ListingQuestionary;

const styles = StyleSheet.create({
    backButton: {
        marginRight: 20,
    },
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
    paymentCard: {
        backgroundColor: SHADE_LAVENDAR,
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "space-between"
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
    bottomContent: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        minHeight: 100,
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

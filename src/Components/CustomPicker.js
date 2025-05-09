import React, { useState, useRef } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Animated,
    StyleSheet,
    FlatList,
    Modal,
    TouchableWithoutFeedback,
} from 'react-native';
import Typography, { FULL_WIDTH } from './Typography';
import { BLACK, GREY_DARK, LIGHT_GREY, SHADE_ORANGE, SHADE_ORANGE_LIGHT, THEME_ORANGE, WHITE } from './Colors';
import Icon from './Icon';
import { CLOSE } from './ImageAssets';
import { BOLD, MEDIUM, SEMI_BOLD } from './AppFonts';
import { scale } from 'react-native-size-matters';

const CustomPicker = ({
    data,
    selectedValue,
    onSelect,
    placeholder = 'Select option',
    labelText,
    label = false,
    heading='Heading'
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(300)).current;

    const openModal = () => {
        setIsOpen(true);
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const closeModal = () => {
        Animated.parallel([
            Animated.timing(fadeAnim, {
                toValue: 0,
                duration: 200,
                useNativeDriver: true,
            }),
            Animated.timing(slideAnim, {
                toValue: 300,
                duration: 200,
                useNativeDriver: true,
            }),
        ]).start(() => {
            setIsOpen(false);
        });
    };

    const handleSelect = (item) => {
        onSelect(item);
        closeModal();
    };

    return (
        <View style={styles.container}>
            {label &&
                <Typography fontFamily={MEDIUM} style={{
                    marginLeft: 20,
                    marginTop: 10,
                }}>{labelText}</Typography>
            }
            <TouchableOpacity style={styles.header} onPress={openModal}>
                <Typography size={14} color={selectedValue? BLACK:GREY_DARK} >
                    {selectedValue || placeholder}
                </Typography>
                <Typography style={styles.arrow}>▼</Typography>
            </TouchableOpacity>

            <Modal transparent visible={isOpen} animationType="none">
                <TouchableWithoutFeedback onPress={closeModal}>
                    <View style={styles.modalOverlay}>
                        <Animated.View
                            style={[
                                styles.modalContainer,
                                {
                                    opacity: fadeAnim,
                                    transform: [{ translateY: slideAnim }],
                                    backgroundColor: "#e5f5e0",
                                },
                            ]}
                        >
                            <View style={{
                                width: '100%', backgroundColor: SHADE_ORANGE, maxHeight: 50, borderTopLeftRadius: 5,
                                paddingHorizontal: 5, borderTopRightRadius: 5, flexDirection: "row",
                                alignItems: "center", justifyContent: "space-between",
                            }}>
                                <View></View>
                                <Typography size={16} color={WHITE} fontFamily={BOLD} style={{ lineHeight: 35 }}>{heading}</Typography>
                                <Icon source={CLOSE} size={23} />

                            </View>
                            <FlatList
                                data={data}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity
                                        style={[styles.option, {
                                            borderBottomWidth: data?.length - 1 == index ? 0 : 0.6
                                        }]}
                                        onPress={() => handleSelect(item)}
                                    >
                                        <Typography
                                            style={[
                                                styles.optionText,
                                            ]}
                                        >
                                            {item?.name || item?.type}
                                        </Typography>
                                    </TouchableOpacity>
                                )}
                                ListEmptyComponent={() => {
                                    return (
                                        <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginTop: scale(30) }}>
                                            <Typography size={16} fontFamily={MEDIUM}>No data.</Typography>
                                        </View>
                                    )
                                }}
                            />
                        </Animated.View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({

    header: {
        borderWidth: 1,
        borderColor: '#888',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        width: FULL_WIDTH - 40,
        padding: 10,
        alignSelf: "center",
        backgroundColor: WHITE,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },
        elevation: 0.6,
        borderColor: LIGHT_GREY
    },

    arrow: {
        fontSize: 16,
        marginLeft: 8,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        justifyContent: 'center',
    },
    modalContainer: {
        backgroundColor: '#fff',
        borderRadius: 5,
        width: FULL_WIDTH - 40,
        alignSelf: 'center',
        minHeight: 180
    },
    option: {
        paddingVertical: 14,
        paddingHorizontal: 12,


    },

    optionText: {
        fontSize: 15,
    },

});

export default CustomPicker;

import React, { forwardRef } from 'react';
import { View, StyleSheet } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const SheetView = forwardRef(({ children, height = 330 }, ref) => {
    return (
        <RBSheet
            ref={ref}
            useNativeDriver={false}
            height={height}
            draggable={true}
            customStyles={{
                wrapper: styles.wrapper,
                draggableIcon: styles.draggableIcon,
            }}
            customModalProps={{
                animationType: 'slide',
                statusBarTranslucent: true,
            }}
        >
            <View style={styles.sheetContent}>
                {children}
            </View>
        </RBSheet>
    );
});

export default SheetView;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    draggableIcon: {
        backgroundColor: '#000',
    },
    sheetContent: {
        flex: 1,
    },
});

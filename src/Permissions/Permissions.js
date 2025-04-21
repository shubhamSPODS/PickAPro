import { Platform } from "react-native";
import { check, PERMISSIONS, request, RESULTS } from "react-native-permissions";

export const requestCameraPermission = async () => {
    try {
        const permissionType = Platform.select({
            android: PERMISSIONS.ANDROID.CAMERA,
            ios: PERMISSIONS.IOS.CAMERA,
        });

        const result = await check(permissionType);

        if (result === RESULTS.GRANTED) {
            return true;
        }

        const requestResult = await request(permissionType);
        return requestResult === RESULTS.GRANTED;
    } catch (error) {
        console.warn('Camera permission error:', error);
        return false;
    }
};

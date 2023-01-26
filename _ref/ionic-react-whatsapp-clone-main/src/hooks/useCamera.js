import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { Capacitor } from '@capacitor/core';

export const useCamera = () => {

    const takePhoto = async () => {

        const options = { resultType: CameraResultType.Uri, source: CameraSource.Camera, quality: 100 };
        const cameraPhoto = await Camera.getPhoto(options);
        return Capacitor.convertFileSrc(cameraPhoto.webPath);
    }

    return {

        takePhoto
    }
}
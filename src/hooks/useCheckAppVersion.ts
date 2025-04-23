import hotUpdate from 'react-native-ota-hot-update'
import ReactNativeBlobUtil from 'react-native-blob-util'
import { Alert, Platform } from 'react-native';
import { useEffect, useState } from 'react';

const updateUrl = 'https://minio.bimolaksono.my.id/hot-update/update.json'

const useCheckAppVersion = () => {
  const [version, setVersion] = useState(0);
  const startUpdate = async (url: string, version: number) => {
    hotUpdate.downloadBundleUri(ReactNativeBlobUtil, url, version, {
      updateSuccess: () => {
        Alert.alert('Update failed!', 'Success Update', [
          {
            text: 'Done',
            onPress: () => console.log('Update Done'),
            style: 'default',
          },
        ]);
      },
      restartAfterInstall: true
    })
  }

  const onCheckVersion = () => {
    fetch(updateUrl).then(async (data) => {
      const result = await data.json();
      const currentVersion = await hotUpdate.getCurrentVersion();
      const url = Platform.OS === 'ios' ? result?.downloadIosUrl : result?.downloadAndroidUrl
      if (result?.version > currentVersion) {
        Alert.alert(
          'New version is comming!',
          'New version has release, please update',
          [
            {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {
              text: 'Update',
              onPress: () => startUpdate(url, result.version),
            },
          ]
        );
      }
    });
  };

  useEffect(() => {
    hotUpdate.getCurrentVersion().then(version => setVersion(version))
  }, [])

  return {
    version,
    onCheckVersion,
  }
}

export default useCheckAppVersion;

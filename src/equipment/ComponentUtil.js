import { Platform } from 'react-native';


/* hot push config */
const ANDROID_PRODUCTION = '';
const ANDROID_STAGING = '';
const IOS_PRODUCTION = 'tKdy8P0D5sGEt1Vf9btpszwMmhzY4ksvOXqog';
const IOS_STAGING = 'o1kLkW73Fosz7Wp3MWkWKHNoTbQG4ksvOXqog';
const ANDROID_CODEPUS_KEY = __DEV__ ? ANDROID_PRODUCTION : ANDROID_STAGING;
const IOS_CODEPUS_KEY = __DEV__ ? IOS_STAGING : IOS_PRODUCTION;
// OS config
export const OS = Platform.OS === 'ios' ? true : false;
/* code-push key */
export const CODEPUS_KEY = OS ? IOS_CODEPUS_KEY : ANDROID_CODEPUS_KEY; 
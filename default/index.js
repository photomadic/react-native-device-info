/**
 * Empty default export functions.
 */

module.exports = {
  uniqueId: '',
  instanceId: '',
  serialNumber: '',
  getIpAddress: () => new Promise((resolve, reject) => resolve('')),
  getMacAddress: () => new Promise((resolve, reject) => resolve('')),
  deviceId: '',
  systemManufacturer: '',
  model: '',
  brand: '',
  systemName: '',
  systemVersion: '',
  apiLevel: 0,
  bundleId: '',
  appName: '',
  buildNumber: 0,
  appVersion: 0,
  deviceName: '',
  userAgent: '',
  deviceLocale: '',
  deviceCountry: '',
  timezone: '',
  fontScale: 0,
  isEmulator: false,
  isTablet: false,
  is24Hour: false,
  isPinOrFingerprintSet: callback => callback && callback(false),
  firstInstallTime: 0,
  installReferrer: '',
  lastUpdateTime: 0,
  phoneNumber: '',
  carrier: '',
  totalMemory: 0,
  maxMemory: 0,
  totalDiskCapacity: 0,
  freeDiskStorage: 0,
  getBatteryLevel: () => Promise.resolve(0),
  isLandscape: false,
  deviceType: 'Unknown',
  getPowerState: () => Promise.resolve({})
};

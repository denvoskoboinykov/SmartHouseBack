const addItem = require('./addItem');
const addRange = require('./addRange');
const getTotalCount = require('./getTotalCount');
const addDeviceMode = require('./addDeviceMode');
const addDeviceModes = require('./addDeviceModes');
const deleteOldModes = require('./deleteOldModes');
const parseBaseDevice = require('./parseBaseDevice');
const updateRangeById = require('./updateRangeById');
const getCurrentModeId = require('./getCurrentModeId');
const deleteDeviceById = require('./deleteDeviceById');
const updateDeviceById = require('./updateDeviceById');
const getDeviceRecords = require('./getDevicesRecords');
const parseDeviceRecords = require('./parseDeviceRecords');
const getExistingModesId = require('./getExistingModesId');
const addModeToModeListRelation = require('./addModeToModeListRelation');

module.exports = {
  addItem,
  addRange,
  getTotalCount,
  addDeviceMode,
  addDeviceModes,
  deleteOldModes,
  parseBaseDevice,
  updateRangeById,
  getCurrentModeId,
  deleteDeviceById,
  updateDeviceById,
  getDeviceRecords,
  parseDeviceRecords,
  getExistingModesId,
  addModeToModeListRelation,
};

const paginate = (devices, reqPage = 1, perPage = 8) => {
  const devicesLength = devices.length;

  const lastDeviceInd = devicesLength - 1;

  const totalPages = Math.ceil(devicesLength / perPage);

  const page = reqPage > totalPages ? totalPages : reqPage;

  const expFirstInd = page * perPage - 8;
  const expLastInd = page * perPage - 1;

  const firstInd = expFirstInd < 0 ? 0 : expFirstInd;

  const lastInd = expLastInd > lastDeviceInd ? lastDeviceInd : expLastInd;

  const requiredDevices = devices.slice(firstInd, lastInd + 1);

  return { requiredDevices, totalPages };
};

module.exports = paginate;
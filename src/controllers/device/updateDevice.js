const { writeFile, updateItemById, getItemById } = require('../../services');

const updateDevice = async (req, res) => {
  const { homes, homeid } = req.locals;

  const targetHome = getItemById(homeid, homes);

  const { devices } = targetHome;

  const id = Number(req.params.id);

  const newDevice = req.body;

  const { updatedItems: updatedDevices, wasUpdated } = updateItemById(
    devices,
    id,
    newDevice
  );

  if (!wasUpdated) {
    res.sendStatus(404);

    return;
  }

  const newHome = {
    id: homeid,
    name: targetHome.name,
    devices: updatedDevices,
  };

  const { updatedItems: updatedHomes } = updateItemById(homes, homeid, newHome);

  try {
    await writeFile(JSON.stringify(updatedHomes));

    res.sendStatus(200);
  } catch (error) {
    console.log(error);

    res.sendStatus(500);
  }
};

module.exports = updateDevice;


const router = require('express').Router();
const {deleteStore, updateStore, createStore, getStores} = require('../database/Stores');


router.get('/', async (req, res) => {
  res.send(await getStores());
});

router.delete('/:StoreId', async (apiRequest, apiResponse) => {
  await deleteStore(apiRequest.params.StoreId);
  apiResponse.send({ message: 'Store deleted.' });
});

router.post('/', async (apiRequest, apiResponse) => {
  const newStore = apiRequest.body;
  await createStore(newStore);
  apiResponse.send({
    message: 'New Store created.',
    allStores: await getStores(),
    thanks: true
  });
});
router.put('/:id', async (apiRequest, apiResponse) => {
  const updatedStore = apiRequest.body;
  console.log({ updatedStore})
  await updateStore(apiRequest.params.id, updatedStore);
  apiResponse.send({ message: 'Store updated.' });
});

module.exports = router;



const router = require('express').Router();
const {deleteVariation, updateVariation, createVariation, getVariations} = require('../database/Variations');


router.get('/', async (req, res) => {
  res.send(await getVariations());
});

router.delete('/:VariationId', async (apiRequest, apiResponse) => {
  await deleteVariation(apiRequest.params.VariationId);
  apiResponse.send({ message: 'Variation deleted.' });
});

router.post('/', async (apiRequest, apiResponse) => {
  const newVariation = apiRequest.body;
  await createVariation(newVariation);
  apiResponse.send({
    message: 'New Variation created.',
    allVariations: await getVariations(),
    thanks: true
  });
});
router.put('/:id', async (apiRequest, apiResponse) => {
  const updatedVariation = apiRequest.body;
  console.log({ updatedVariation})
  await updateVariation(apiRequest.params.id, updatedVariation);
  apiResponse.send({ message: 'Variation updated.' });
});

module.exports = router;


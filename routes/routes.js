import express from 'express';
import parcelController from '../Controllers/parcelController';

const router = express.Router();

router.get('/tail', (req,res) =>{
  res.json({status: 'it works'});
});


/* GET a specific Parcel delivery order*/
router.get('/parcels/:id', parcelController.getOne);

export default router;

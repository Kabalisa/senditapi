import express from 'express';
import parcelController from '../Controllers/parcelController';

const router = express.Router();

router.get('/tail', (req,res) =>{
  res.json({status: 'it works'});
});

/* GET all parcel delivery orders */
router.get('/parcels', parcelController.getAll);

export default router;

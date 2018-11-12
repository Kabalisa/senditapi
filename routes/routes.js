import express from 'express';
import parcelController from '../Controllers/parcelController';

const router = express.Router();

router.get('/tail', (req,res) =>{
  res.json({status: 'it works'});
});




/*cancel a specific parcel delivery order*/
router.put('/parcels/:id/cancel', parcelController.cancelOrder);

export default router;

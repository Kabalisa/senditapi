import express from 'express';
import parcelController from '../Controllers/parcelController';

const router = express.Router();

router.get('/tail', (req,res) =>{
  res.json({status: 'it works'});
});


/* GET all parcel delivery orders */
router.get('/parcels', parcelController.getAll);


/* GET a specific Parcel delivery order*/
router.get('/parcels/:id', parcelController.getOne);


/*cancel a specific parcel delivery order*/
router.put('/parcels/:id/cancel', parcelController.cancelOrder);

/*create a parcel delivery order the user want*/
router.post('/parcels', parcelController.create);

/*GET all parcels of a specific user*/
router.get('/users/:id/parcels', parcelController.getAllUserParcels);

export default router;

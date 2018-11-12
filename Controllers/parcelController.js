import parcelData from '../Data/parcelData';

const parcel = {

create(req, res){
  if(!req.body.pick || !req.body.take || !req.body.weigth || !req.body.userId || !req.body.receiver){
  	return res.status(400).send({message: 'complete all fields to proceed'});
  }
  const parcel = parcelData.create(req.body);
  return res.status(201).send(parcel);
},

getAll(req, res){
const allParcels = parcelData.getAll();
return res.status(200).send(allParcels);
},

getOne(req, res){
const oneParcel = parcelData.getOne(req.params.id);
if(!oneParcel){
	return res.status(404).send({message: 'parcel do not exist'});
}
else{
  return res.status(200).send(oneParcel);
}

},

delete(req, res){
 const parcel = parcelData.getOne(req.params.id);
 if (!parcel){
 	return res.status(404).send({message: 'parcel do not exist'});
 }
 else{
   const note  = parcelData.delete(req.params.id);
   return res.status(204).send(note);
 }
},

getAllUserParcels(req, res){
	const parcels = parcelData.getAllUserParcels(req.params.id);
	if(!parcels.length){
    return res.status(404).send({message: 'user has no parcels'});
	}
	else{
		return res.status(200).send(parcels);
	}
},

cancelOrder(req, res){
const parcel = parcelData.cancelOrder(req.params.id);
if(!parcel){
  return res.status(404).send({message:'parcel do not exist'});	
}
else{
	return res.status(200).send(parcel);
}

}

};

export default parcel;
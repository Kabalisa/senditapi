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



};

export default parcel;
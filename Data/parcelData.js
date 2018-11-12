
//function to calculate class

function getPrice(weight) {
	return Number(weight) * 1000;
}

class Parcel{

constructor(){
	this.parcels = [
      {
       id : '1',
       weight : '4 kg',
       price : '4000',
       pickup : 'nyamirambo',
       destination : 'remera',
       userId : '980768',
       receivername : 'mucyo',
       status : 'pending',
       presentLocation : 'kinamba',
      },
      
      {
       id : '2',
       weight : '2 kg',
       price : '2000',
       pickup : 'byimana',
       destination : 'kabgayi',
       userId : '657384',
       receivername : 'butati',
       status : 'pending',
       presentLocation : 'mukagi',
      },  

      {
       id : '3',
       weight : '10 kg',
       price : '10000',
       pickup : 'kanombe',
       destination : 'ruyenzi',
       userId : '989876',
       receivername : 'eric',
       status : 'pending',
       presentLocation : 'nyabugogo',
      },   
     ];
}

   create(item) {
   	cId = 4;

   	const newParcel = {
   		id : cId,
        weight : item.weight,
        price : getPrice(item.weight),
        pickup : item.pickup,
        destination : item.destination,
        userId : item.userId,
        receiver : item.receiver,
        status : 'pending',
        presentLocation : item.pickup,
        };

       cId +=1;
       this.parcels.push(newParcel);
       return newParcel;
   }

   getOne(id){
   	return this.parcels.find(parcel => parcel.id === id);
   }

   getAll(){
   	return this.parcels;
   }
   
   delete(id){
    const parcel = this.getOne(id);
    const index = this.parcels.indexOf(parcel);
    this.parcels.splice(index,1); 
    return {};
   }

   getAllUserParcels(id){
      const userParcels = [];
      this.parcels.forEach((parcel) => {

         if(parcel.userId === id) {
         	userParcels.push(parcel);
         }

      });

      if(!userParcels){
      	return false;
      }
      else{
      	return userParcels;
      }

   }

   cancelOrder(id){
   	const parcel = this.getOne(id);
   	if(parcel){
     const index = this.parcels.indexOf(parcel);
     this.parcels[index].status = 'canceled';
     return this.parcels[index];
     }
   return parcel;
   }

}

export default new Parcel();

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
       receiver : 'mucyo',
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
       receiver : 'butati',
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
       receiver : 'eric',
       status : 'pending',
       presentLocation : 'nyabugogo',
      },   
     ];
}

   create(item) {
   	var cId = Number.parseInt(this.parcels[this.parcels.length - 1].id) + 1;

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
    if(parcel){
    const index = this.parcels.indexOf(parcel);
    this.parcels.splice(index,1); 
    return true;
    }
    return false;
   }

   getAllUserParcels(id){
      const userParcels = [];
      this.parcels.forEach((parcel) => {

         if(parcel.userId === id) {
         	userParcels.push(parcel);
         }

      });

      if(userParcels.length === 0){
      	return userParcels;
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

   updateOrder(id, item){
    const parcel = this.getOne(id);
    if(parcel){
      const index = this.parcels.indexOf(parcel);
      this.parcels[index].weight = item.weight;
      this.parcels[index].price = getPrice(item.weight);
      this.parcels[index].pickup = item.pickup;
      this.parcels[index].destination = item.destination;
      this.parcels[index].receiver = item.receiver;
      this.parcels[index].presentLocation = item.pickup;
      return this.parcels[index];
    }
    return parcel;
   }

}

export default new Parcel();
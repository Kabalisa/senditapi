import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../app';

chai.should();
chai.use(chaiHttp);

/* Test the /GET route */
describe('app route to GET index page', () => {
  it('it should GET /', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });

  it('it should handle 404 error', (done) => {
    chai.request(app)
      .get('/notExist')
      .end((err, res) => {
        res.should.have.status(404);
        done();
      });
  });
});

describe('app routes to make http request', () => {
//tests the GET all parcels endpoint
it('should FETCH all parcels', (done) => {
  chai.request(app)
  .get('/api/v1/parcels')
  .end((err,res) => {
    res.should.have.status(200);
    done();
  });
});

//test the create parcel endpoint
it('should create a parcel delivery order', (done) =>{
    const item = {
       pickup : 'kirehe',
       destination : 'bugesera',
       weight : '5',
       userId : '222000',
       receiver : 'peruth'
    };
    chai.request(app)
    .post('/api/v1/parcels')
    .send(item)
    .end((err,res) => {
      res.should.have.status(201);
      res.body.should.be.a('object');
      res.body.should.have.property('id');
      res.body.should.have.property('weight').eql('5');
      res.body.should.have.property('price').eql(5000);
      res.body.should.have.property('pickup').eql('kirehe');
      res.body.should.have.property('destination').eql('bugesera');
      res.body.should.have.property('userId').eql('222000');
      res.body.should.have.property('receiver').eql('peruth');
      res.body.should.have.property('status').eql('pending');
      res.body.should.have.property('presentLocation').eql('kirehe');
      done();
    });
});

//test when not to create parcel
it('should not create a parcel delivery order', (done) => {
  const item = {
    weight : '5',
    userId : '222000'
  };
  chai.request(app)
  .post('/api/v1/parcels')
  .send(item)
  .end((err, res) => {
   res.should.have.status(400);
   res.should.be.a('object');
   res.body.should.have.property('message').eql('complete all fields to proceed');
   done();
  });
});

//test the GET one parcel endpoint
it('should FETCH one specific parcel', (done) => {
  chai.request(app)
  .get('/api/v1/parcels/1')
  .end((err, res) => {
   res.should.have.status(200);
   res.body.should.be.a('object');
   res.body.should.have.property('id').eql('1');
   res.body.should.have.property('weight').eql('4 kg');
   res.body.should.have.property('price').eql('4000');
   res.body.should.have.property('pickup').eql('nyamirambo');
   res.body.should.have.property('destination').eql('remera');
   res.body.should.have.property('userId').eql('980768');
   res.body.should.have.property('receiver').eql('mucyo');
   res.body.should.have.property('status').eql('pending');
   res.body.should.have.property('presentLocation').eql('kinamba');
   done();
  });
});

//test when not to fetch a single parcel
it('should not FETCH one specific parcel', (done) => {
  chai.request(app)
  .get('/api/v1/parcels/8999')
  .end((err, res) => {
     res.should.have.status(404);
     res.body.should.be.a('object');
     res.body.should.have.property('message').eql('parcel do not exist');
     done();
  });
});

//test the FETCH parcels for one user endpoint
it('should FETCH  all parcels for one user', (done) => {
   chai.request(app)
   .get('/api/v1/users/657384/parcels')
   .end((err, res) => {
     res.should.have.status(200);
     res.body.should.be.a('array');
     res.body.length.should.be.eql(1);
     done();
   });
});

//test when not to fethc parcels for one user
it('should not fetch all parcels for one user', (done) => {
  chai.request(app)
  .get('/api/v1/users/6573/parcels')
  .end((err, res) => {
   res.should.have.status(404);
   res.body.should.be.a('object');
   res.body.should.have.property('message').eql('user has no parcels');
   done();
  });
});

//test the cancel specific order endpoint
it('should cancel a specified parcel delivery order', (done) => {
  chai.request(app)
  .put('/api/v1/parcels/2/cancel')
  .end((err, res) => {
    res.should.have.status(200);
    res.body.should.be.a('object');
    res.body.should.have.property('status').eql('canceled');
    done();
  });
});

//test when not to cancel a specified parcel
it('should not cancel a parcel', (done) => {
  chai.request(app)
  .put('/api/v1/parcels/33/cancel')
  .end((err, res) => {
    res.should.have.status(404);
    res.body.should.be.a('object');
    res.body.should.have.property('message').eql('parcel do not exist');
    done();
  });
});

//test the delete specific parcel order endpoint
it('should delete a specified parcel delivery order', (done) => {
  chai.request(app)
  .delete('/api/v1/parcels/2/delete')
  .end((err, res) => {
    res.should.have.status(201);
    res.body.should.be.a('object');
    res.body.should.have.property('message').eql('parcel DELETED');
    done();
  });
});

//test when not to delete a specific parcel 
it('should not delete a parcel', (done) => {
  chai.request(app)
  .delete('/api/v1/parcels/7/delete')
  .end((err, res) => {
     res.should.have.status(404);
     res.body.should.be.a('object');
     res.body.should.have.property('message').eql('parcel do not exist');
     done();
  });
});

});

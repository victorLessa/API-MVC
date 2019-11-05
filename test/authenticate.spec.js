const chai = require('chai');
const server = require('../app/serve');

const chaitHttp = require('chai-http');
const should = chai.should();
chai.use(chaitHttp);

describe('Authenticate', function() {
  let user_id
  this.timeout(10000)
  it('Register', function(done) {

    const body = {
      name: 'Victor Camara Lessa',
      email: 'victordsgnr@gmail.com',
      zipcode: "123456",
      street: "Alfredo Backer",
      number: 536
    }

    chai.request(server)
      .post('/users')
      .send(body)
      .end(function (err, res) {
        if (err) return done(err);
        res.should.have.status(200);
        res.body.should.have.property('id')
        user_id = res.body.id
        done();
    });
  })
  it ('Get Address', function(done) {
    chai.request(server)
      .get(`/users/${user_id}/addresses`)
      .end(function (err, res) {
        if (err) return done(err)
        res.should.have.status(200)
        done()
      })
  })
})
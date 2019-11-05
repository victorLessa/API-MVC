const chai = require('chai');
const server = require('../app/serve');

const chaitHttp = require('chai-http');
const should = chai.should();
chai.use(chaitHttp);

describe('Authenticate', function() {
  it('Register', function(done) {
    chai.request(server)
      .get('/')
      .end(function (err, res) {
        if (err) return done(err);
        res.should.have.status(200);
      
        done();
    });
  })
})
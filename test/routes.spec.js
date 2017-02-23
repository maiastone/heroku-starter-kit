process.env.NODE_ENV = 'test';

var server = require('../server/server.js');
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);

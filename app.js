const KrakenClient = require('kraken-api');
const key = 'vdMmjTaAIPjSZ4+4wDnfJ4Ifs8WMcUPBbQS/b3fhi+NJPR/5a6Yr2k7R';
const secret = '/z0Lzbu0Y9xWTgzY93Mgf++gzOH9eMNm16/eQ7kmcICHfWYkepCrCq6eI8KM7QpJumJ/DNlliQz71grbcbqXRA==';
const kraken = new KrakenClient(key, secret);

var message = null;

kraken.api('Balance')
  .then(res => {
  	message = res;
  	console.log(message);
  });

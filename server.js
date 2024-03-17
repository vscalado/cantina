const app = require('./bin/index');
const keys = require('./bin/keys');

app.listen(keys.server.port, () =>{
    console.log('I am working');
});
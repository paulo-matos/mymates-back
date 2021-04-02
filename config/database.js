const mongoose = require('mongoose');

require('dotenv').config();

module.exports = function(uri){
    mongoose.connect(uri,{ useNewUrlParser: true});

    mongoose.set('useFindAndModify', false);

    mongoose.connection.on('connected', function(){
        console.log('* Mongoose! Connected');
    });

    mongoose.connection.on('disconnected', function(){
        console.log('* Mongoose! Disconnected');
    });

    mongoose.connection.on('error', function(error){
        console.log('* Mongoose! ERROR: ' + error);
    });

    //SIGINT = signal of shutdown
    process.on('SIGINT',function(){
        mongoose.connection.close(function(){
            console.log('* Mongoose! Disconnected by the end of application');
            // 0 indicates exiting occured without errors
            process.exit(0);
        });
    });
}
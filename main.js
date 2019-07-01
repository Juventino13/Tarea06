var mongoose = require('mongoose');
var schema = require('./schema');

mongoose.connect('mongodb://localhost:27017/tarea06');

var Book = mongoose.model('Book2',schema,'books2');

var book = new Book({
    title:'Harry potter y las reliquias de la muerte',
    author:'J.K rowling',
    body:'Buen libro ',
    comments:{
        body:'Buen libro para disfrutarlo en tarde lluviosa',
        date:2007-06-27
    },
    hidden:true,
    meta:{
        vote: 5,
        favs:1
    }
});


book.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log("Saved");
});



Book.find({},function(error,docs){
    if(error){
        console.log(error);
        process.execArgv(1);
    }
    console.log("------- Consulta General -------");
    console.log(docs);
});

Book.find({title: "Harry potter y las reliquias de la muerte"},
    function(error,docs){
    if(error){
        console.log(error);
        process.execArgv(1);
    }
    console.log("------- Consulta con restriccion -------");
    console.log(docs);
    process.exit(1);
});


Book.update({_id:'5d1962d3edf1401bfc0f6ddd'},{$set:{body:'El capitulo final'}},
    function(error,docs){
        if(error){
            console.log(error);
            process.exit(1);
        }
    console.log(" <--------- Actualizado -------->");
    console.log(docs);
    process.exit(0);
});

Book.findByIdAndRemove({_id:'5d1962d3edf1401bfc0f6ddd'},
    function(error,docs){
        if(error){
            console.log(error);
            process.exit(1);
        }
        console.log(" <------ Eliminado ------>");
        console.log(docs);
        process.exit(0);
});

Book.find({},function(error,docs){
    if(error){
        console.log(error);
        process.execArgv(1);
    }
    console.log("------- Consulta General -------");
    console.log(docs);
});
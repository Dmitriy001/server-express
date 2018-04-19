'use strict';

var express = require('express');
var app = express();

function randInt(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

function generateData(length) {
    var fakeData = [{ id: 'Идентификатор', name: 'Название', price: 'Стоимость', quantity: 'Количество' }];
    for(var i=1; i<length; i++) {
        fakeData.push([randInt(1,50), 'продукт ' + randInt(1, 99), randInt(100, 10000), randInt(1, 50)]);
    }
    return fakeData;
}

app.get('/data', function(req, res){
    var id = req.query.id;
    res.send(generateData(+id+1))
});

app.get('/smalldata', function(req, res){

    res.send(generateData(320));
});
app.get('/bigdata', function(req, res){
    res.send(generateData(570));
});

app.listen(3001, function () {
    console.log('Example app listening on port 3001!');
});

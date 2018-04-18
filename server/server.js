'use strict';

var express = require('express');
var app = express();

function randInt(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}
var fakeData = [{ id: 'Идентификатор', name: 'Название', price: 'Стоимость', quantity: 'Количество' }];




for(var i=1; i<500; i++) {
    fakeData.push([randInt(1,50), 'продукт ' + randInt(1, 99), randInt(100, 10000), randInt(1, 50)]);
}

app.get('/data', function(req, res){
    res.send(JSON.stringify(fakeData));
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

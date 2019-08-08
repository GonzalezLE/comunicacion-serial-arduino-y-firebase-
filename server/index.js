const http=require('http');
const express=require('express');
const socketIO=require('socket.io');

const app = express();
const server=http.createServer(app);
const io=socketIO.listen(server);
//compartir archivos estaticos
app.use(express.static(__dirname+'/public'))

server.listen(3000,function(){
    console.log('server running in port 3000');
})

//codigo para la comunicacion serial
const Serialport= require('serialport');
//mostrar las lecturas 
const Readline= Serialport.parsers.Readline;

const port=new Serialport('COM3',{
    baudRate:9600 //velocidad
});

const parser=port.pipe(new Readline({delimiter:'\r\n'}));

parser.on('open',function(){
    console.log('coneccion es abierta');
})

parser.on('data',function(data){
    console.log(data);
    io.emit('boton',data);
})
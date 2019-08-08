const socket = io();
var db = firebase.database();

socket.on('boton',function(data){
    console.log(data);
    if(data==="vodka"){
        db.ref('bebida/').push({
            vodka:0
        });
    }else{
        if(data==="tequila"){
            db.ref('bebida/').push({
                tequila:0
            });
        }else{
            if(data==="whisky"){
                db.ref('bebida/').push({
                    whisky:0
                });
            }
        }
    }
})
ñlmlknkjn
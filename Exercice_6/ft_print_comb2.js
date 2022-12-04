//////////////////////////////// ⚡️ Fonctions & Variables ⚡️ ////////////////////////////////

function afficherCombinaisons(){
    let j=0;let i=0;let a=0;let b=0;let res=[];

//////////////////////////////////  🤲 Logique 🤲  ////broken af//////////////////////////

    for(a=0; a<10;a++){
        for(b=0; b<10;b++){
            if(a==i && b==j){
                console.log(res[b]);
            }else{
                for (i=0; i<10; i++) {
                    console.log(res[a]);
                        for ( j =  0; j < 10; j++) {
                            res+= [a] + [b] +' ' + [i] + [j] + '. ';
                        }
                }
            }
        }
    }
console.log(res);
document.write(res);
}
 afficherCombinaisons();


 ///////////////////////////////////////////////////////////////////////////////////////////
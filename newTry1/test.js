var name='';

function setName(n){
    name=n;
} 

function printName(){
    console.log(name);
}

exports.setName=setName;
exports.printName=printName;
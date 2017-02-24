function runningLogger(){
    console.log('I am running');
}

function multiplyByTen(x){
    var y = x*10;
    return y;
}

multiplyByTen(5);

function stringReturnOne(){
    return "Hello";
}

function stringReturnTwo(){
    return "Hiii";
}

function caller(par){
    if(typeof(par) == 'function'){
        par();
    }
}

function myDoubleConsoleLog(par1, par2){
    if(typeof(par1) == 'function'){
        console.log(par1());
    }
    if(typeof(par2) == 'function'){
        console.log(par2());
    }
}

function caller2(param){
    console.log('starting');
    var z = setTimeout(function(){
        if(typeof(param) == 'function'){
            param();
        }
    }, 2000);
    console.log('ending?');
    return "interesting";
}

caller2(myDoubleConsoleLog);

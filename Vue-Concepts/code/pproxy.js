const target = {count : 1, kkk : 2};

const proxy = new Proxy(target, {
    get(obj, prop){

        return obj[prop];
    },
    set(obj, prop, value){
        console.log([obj, prop, value]);
        obj[prop] = value;
        return true
    },
})


proxy.count = 10;
function makeArmy() {
    let shooters = [];
    let i = 0;
    while (i < 2) {
        let j = i;

        let shooter = function() {
            console.log(j);
        };
        //shooter();

        shooters.push(shooter);
        i++;
    }
    return shooters;
}

let army = makeArmy();
//console.log(army);
console.dir(army);
//army.forEach(f => f());
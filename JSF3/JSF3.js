function personConstructor(name){
    var person = {
        name: name,
        distance_traveled: 0,
        say_name: function (){
            alert(person.name);
        },
        say_something: function(par){
            if(par == 'I am cool'){
                alert(person.name + " says 'I am cool'");
            }
        },
        walk: function(){
            alert(person.name + " is walking");
            person.distance_traveled += 3;
            return person;
        },
        run: function(){
            alert(person.name + " is running");
            person.distance_traveled += 10;
            return person;
        },
        crawl: function(){
            alert(person.name + " is crawling");
            person.distance_traveled += 1;
            return person;
        }
    }
    return person;
}

console.log(personConstructor("Daniel").run());

function ninjaConstructor(name, cohort){
    var ninja = {
        name: name,
        cohort: cohort,
        belt_level: 'yellow',
        levelUp: function(){
            if(ninja.belt_level == 'yellow'){
                ninja.belt_level = 'red';
                return ninja;
            }
            else if(ninja.belt_level == 'red'){
                ninja.belt_level = 'black';
                return ninja;
            }
            else if(ninja.belt_level == 'black'){
                ninja.belt_level = 'black';
                return ninja;
            }
        }
    }
    return ninja;
}

console.log(ninjaConstructor("Daniel", "Mean").levelUp().levelUp());

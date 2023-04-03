const findTheOldest = function(people) {
    let oldest = people.sort((a, b) => {
        if(!a.yearOfDeath)
            a.yearOfDeath = new Date().getFullYear();
        if(!b.yearOfDeath)
            b.yearOfDeath = new Date().getFullYear();
        
        const lastPerson = a.yearOfDeath - a.yearOfBirth;
        const nextPerson = b.yearOfDeath - b.yearOfBirth;
        return lastPerson > nextPerson ? -1 : 1;
    })[0];
    console.log(oldest);
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;

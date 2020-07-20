
/*

Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets

It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.

At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal

All the report data should be printed to the console.

HINT: Use some of the ES6 features: classes, subclasses, template strings, default parameters, maps, arrow functions, destructuring, etc.

*/

class TownElements{
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends TownElements{
    constructor(name, buildYear, parkArea, numberOfTrees){
        super(name, buildYear);
        this.numberOfTrees = numberOfTrees;
        this.parkArea = parkArea;
    }
    calculateTreeDensity(){
        const parkTreeDensity = this.numberOfTrees / this.parkArea;
        console.log(`${this.name} tree density is ${parkTreeDensity}`);
    }
    calculateParkAge(){
        const now = new Date().getFullYear();
        const age = now - this.buildYear;
        return age;
    }
    
}

class Street extends TownElements{
    constructor(name, buildYear, length, size=3){
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
}


function parkReport(parks){
    function calculateAverageParkAge(arr){
        let sum = 0;
        arr.forEach(element => sum += element);
        const avg = sum/arr.length;
        console.log(`Average age of all parks is: ${avg} years.`);
    }
    
    function moreTrees(arr){
        const i = arr.map(ele => ele.numberOfTrees).findIndex(ele => ele>=1000);
        console.log(`Park name with more than 1000 trees: ${arr[i].name}`);
    }

    console.log("----Parks Report----");
    parks[0].calculateTreeDensity();
    parks[1].calculateTreeDensity();
    parks[2].calculateTreeDensity();
    
    const parkAges = parks.map(ele => ele.calculateParkAge());
    calculateAverageParkAge(parkAges);
    
    moreTrees(parks);
}

function streetReport(streets){
    function calculateAverageStreetsLength(arr){
        let sum=0;
        arr.forEach(ele => sum += ele.length)
        const avg = sum/arr.length;
        console.log(`Total street length: ${sum}, Average street length: ${avg}`);
    }
    function streetSizeClassification(arr){
        const sizes = new Map();
        sizes.set(1, 'Tiny');
        sizes.set(2, 'Small');
        sizes.set(3, 'Normal');
        sizes.set(4, 'Big');
        sizes.set(5, 'Huge');
        
        arr.forEach(element => {
            console.log(`${element.name} street built in ${element.buildYear} is ${sizes.get(element.size)} sized street.`);
        })
    }
    
    console.log("----Streets Report----");
    calculateAverageStreetsLength(streets);
    streetSizeClassification(streets);
}

const allParks = [new Park('Green Park', 1987, 0.2, 215),
                 new Park('National Park', 1894, 2.9, 3541),
                 new Park('Oak Park', 1953, 0.4, 949)];

const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
                   new Street('Evergreen Street', 2008, 2.7, 2),
                   new Street('4th Street', 2015, 0.8),
                   new Street('Sunset Boulevard', 1982, 2.5, 5)];
parkReport(allParks);
streetReport(allStreets);

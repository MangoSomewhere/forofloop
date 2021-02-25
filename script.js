// new way to write loops 

const example =[1,2,3,4,5,6,7,8,9,10];

// old way of for loops

/*
const loop = (example) => {
    let pos = 0;
    for (let counter = 0; counter <= example.length; counter ++) {
        console.log(example[pos]);
        pos ++;
    }
}

loop(example);
*/

//

const newLoop = (example) => {
    for (const element of example.reverse()) {
        console.log(element);
    }
}

newLoop(example);
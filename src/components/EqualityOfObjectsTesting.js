//object are same when they have the same content BUT their equal when they have the same content AND MEMORY REFERENCE.

//creation of 2 random objects so that we can check them

const Object1 = {
    name: "Despoina",
    surname: "Ntakou",
    avatar: "cat",
    color: "black",
}

const Object2 = {
    name: "Despoina",
    surname: "Ntakou",
    avatar: "cat",
    color: "black",
}

//First checking if the 2 objects have the same data through the sameData Function which returns true or false depending on if these 2 objects have the SAME CONTENT or not!
const sameData = (Object1, Object2) => {
    let keysOfObject1 = Object.keys(Object1);
    let keysOfObject2 = Object.keys(Object2);

    //first check is the keys of the 2 objects to be the same! we can check that with the Object.keys() function! so if the array length that this method  produces 
    //are the same then we can move to the next check! 


    if(keysOfObject1.length === keysOfObject2.length) {
        
    }
    else{return false;}
}

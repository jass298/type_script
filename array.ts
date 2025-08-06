//7

 let str:string = "Typescript";
 let str2 :string = "Hello World";

    console.log('str length = ' + str.length);
    console.log('str2 length = ' + str2.length);

    console.log('str charAt(0) = ' + str.charAt(0));
    console.log('str2 charAt(1) = ' + str2.charAt(1)); // y
    
    console.log('str split = ' + str.split("")); //["T", "y", "p", "e", "s", "c", "r", "i", "p", "t"]
    console.log('str2 split = ' + str2.split(" ")); //["hello", "world"]

    console.log('str indexOf("s") = ' + str.indexOf("s")); //4 , gives -1 is the value does not exist in the string.
    console.log('str replace("Type", "Coffee") = ' + str.replace("Type", "Coffee")); //"Coffeescript"

    console.log('str trim = ' + str2.trim()); //"Typescript"
    console.log('str substr(4, str.length) = ' + str.substr(4, str.length)); //"script"

    str.substring(4, 10); //"script"
    str2.substring(4, 10); //"script"
    console.log('str substring(4, 10) = ' + str.substring(4, 10)); //"script"

    console.log('str toUpperCase() = ' + str.toUpperCase());//"TYPESCRIPT"
    console.log('str2 toLowerCase() = ' + str2.toLowerCase());//"typescript"


    //2

    let months: Array<string> = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]; //array with all string values.

let years: Array<number> = [2015, 2016, 2017, 2018, 2019]; //array will all numbers

let month_year: Array<string | number> = ["Jan", 2015, "Feb", 2016]; //array with string and numbers mixed.

let alltypes: Array<any> = [true, false, "Harry", 2000, { "a": "50", "b": "20" }]; //array of all types boolean, string , number , object etc.

console.log('months = ' + months);
console.log('years = ' + years);
console.log('month_year = ' + month_year);
console.log('alltypes = ' + alltypes);


//3

let years2: Array<number> = [ 2016, 2017, 2018, 2019]; //array will all numbers

console.log(years2[0]); // output will be 2016
console.log(years2[1]); // output will be 2017
console.log(years2[2]); // output will be 2018
console.log(years2[3]); // output will be 2019

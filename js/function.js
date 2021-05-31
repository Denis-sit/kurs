// function learnJS(lang, callback){
//     console.log(`Я учу : ${lang}`);
//     callback();
// }

// function done (){
//     console.log('Я прошел этот урок');
// }

// learnJS('JavaScript', done)

// const options ={
//     name:'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border:'black',
//         bg: 'red'
//     },
//     makeTest: function(){
//         console.log('Test');
//     }
// }

// const {border,bg}=options.colors;

// options.makeTest();
// console.log(Object.keys(options).length);
// console.log(options.colors.border)
// delete optiosn.name;


// for (let key in options){
//     if(typeof(options[key])==='object'){
//         for(let i in options[key]){
//            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }  
//     }
//     else{
//     console.log(`Свойство ${key} имеет значение ${options[key]}`)
//     }
// }

// console.log(counter);

// const arr =[1,2,3,6,8];

// arr.forEach(function(item , i, arr){
//        console.log(`${i}:${item} ${arr}`)
// })


// arr.pop();
// arr.push(10);

// for (let i=0; i< arr.length;i++){
//     console.log(arr[i]);
// }
// console.log(arr);

// for(let value of arr){
//     console.log(value);
// }

// const str =prompt('', '');
// const product =str.split(', ');
// console.log(product.join('!')); 

// const obj = {
//     a:1,
//     b:2
// } 

// function copy(mainOdj){
//     let objCopu={}
//     for ( let key in mainOdj){
//         objCopu[key] = mainOdj[key];
//     }
//     return objCopu;
// }

// const num ={
//     a:3,
//     b:5,
//     c:{
//         x:3,
//         z:4
//     }
// };

// const mass = {
//     ir:2,
//     or:4
// }
// const xlone = Object.assign({},mass)
// xlone.d = 1;
// console.log(xlone)
// console.log(mass)
// const newNu = copy(num);

// newNu.a = 10;
//  console.log(newNu);
//  console.log(num);


// const oldArray =['a', "b"];

// const newArray = oldArray.slice();


// newArray[1]='www';
// console.log(newArray);
// console.log(oldArray);

const  a =[1, 2, 3],
       b =[4, 4 ,5],
       x =[...a, ...b, 'ss']

       console.log(x);
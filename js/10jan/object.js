//Objects in js are key value pair

let person={
    name:'gaurav kumar',
    age:20,
    height:'5f 4in',
    gender:'male',
    phone:7652017963,
    education:{
        School:['Dalimss','Sunbeam','CHS','LFH'],
        College:'IIIT Guwahati',
        Branch:'ECE',
        AreaOfIntrest:['DSA','DEV','Reasoning','Mathematics']
    },
    address:{
        Village:'Chenhuran',
        Post:'Telari',
        District:'Rohtas',
        State:'Bihar',
        PinCode:821108
    },
    sayHi:function(){
        console.log('Hi')
    }

}
//console.log(person);
// //using dot notation
// console.log(person.education)
// //using bracket notation
// console.log(person['address'])
// //calling function 
// console.log(person.sayHi())
// //accesing specific element of array
// console.log(person.education.School[1])

// //for in loop to iterate over objects
// for(let x in person){
//     console.log('key: ',x ,'value: ',person[x])
// }

//adding key to the object
person.friends=['Muzakkir','Prabhat','Ashutosh','Hemang','Navin']
//console.log(person)
//deleting key of the object
delete person.address
//console.log(person)
//ammending value of te key
person.age=21
console.log(person)
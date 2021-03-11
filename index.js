// var first="hammad"
// var last =  "ahmed"
// console.log(first+" "+last)

// var num1= 20
// var num2= 10
// var result= num1+ "20"
// console.log(result)

// var marks1 = +prompt("Enter marks of maths");
// var marks2 = +prompt("Enter marks of english");
// var marks3 = +prompt("Enter marks of urdu");

// var totalMarks = 300;
// var obtainedMarks = marks1 + marks2 + marks3;
// var percentage = (obtainedMarks / 300) * 100;
// console.log("marks of maths are " + marks1);
// console.log("marks of english are " + marks2);
// console.log("marks of urdu are " + marks3);
// console.log("Percentage is " + percentage + "%");
// var prob1 = percentage >= 80;
// var prob2 = percentage >= 70 && percentage < 80;
// var prob3 = percentage >= 60 && percentage < 70;
// var prob4 = percentage >= 50 && percentage < 60;
// var prob5 = percentage >= 40 && percentage < 50;
// var prob6 = percentage < 40;

// switch (true) {
//   case prob1:
//     alert("You got A1");
//     break;

//   case prob2:
//     alert("You got A");
//     break;

//   case prob3:
//     alert("You got B");
//     break;

//   case prob4:
//     alert("You got C");
//     break;

//   case prob5:
//     alert("You got D");
//     break;

//   case prob6:
//     alert("Sorry you are failed");
//     break;

//   default:
//     alert("failed");
//     break;
// }

// var table=+prompt("Enter number")
// console.log(table+" X "+1+" = "+table*1)

// var num1=+prompt("Enter number 1")
// var num2=+prompt("Enter number 2")
// var result= num1+num2
// alert("Sum of "+num1+" and "+num2+" is "+result)

// Important Topic
// &&  and operator : ek bhi false milega tou false return karega
// ||  or operator : ek bhi true milega tou true return karega
// !   not operator : boolean ka reverse return krta hai
// = : is used to assign value
// == : is used to check value
// === : is used to check value with datatype

// var value = false && true
// var value2 = false || false
// console.log(!value)
// console.log(value2)

// var num1= "20"
// var num2= 20
// var check= num1===num2
// console.log(check)

// var naam = prompt("Enter your name");

// if (naam==="Hammad"){
//     console.log("if chala")
// }else if(naam==="Jibran"){
//     console.log("else if chala")
// }else{
//     console.log("else chala")
// }

// switch (naam) {
//   case "Hammad":
//     alert("1st case chala");
//     break;
//   case "Jibran":
//     alert("2nd case chala");
//     break;
//   default:
//     alert("kuch bhi nhi chala");
// }



// Array
// indexes of array starts from 0
// Array's length strats from 1
// Array.push() : inserts value in array from last
// Array.unshift() : inserts value in array from start
// Array.pop() : removes value from last
// Array.shift() : removes value from start

// var cars=["mehran","corolla","civic",20,10,true]

// var bike=prompt("Enter bike ")

// cars.push()
// cars.unshift()

// cars.pop()

// cars.shift()

// cars.splice(1,1,"Brv")

// console.log(cars)

// console.log(cars[1])



// increment


// var num=2


// num++ + ++num + --num + num++
// console.log(num)
// ++num pre increment
// num++ post incremet


// console.log(num++)

// console.log(num)


// console.log(++num)
// console.log(num++)
// console.log(num++)


// console.log(++num)






// For Loop 

// 1st part: initialization
// 2nd part : conditional part
// 3rd part : incremental or decremental

// var num=+prompt("Enter number ")



// for(var i=0; i<=10;  i++ ){
//     console.log(num + " X " + i + " = " +  num * i)
// }


// var naam=["hammad","jibran","ali","ahmed"]


// for(var i=0; i<naam.length; i++){
//     console.log(naam[i])
// }



// Array.map()

// let cars=["corolla","vitz","fielder"]
// let newCars=[]
// cars.map(function(item,index){
//     newCars.push("toyota "+item)
    
    
// })


// console.log(cars)
// console.log(newCars)



// spread opretaor



// let obj=["hammad","ammar"]

// let newObj=[...obj,"usama"]
// console.log(newObj)

// let newObj={
//     ...obj,
//     age:'20'
// }

// console.log(newObj)


// var counting=[]

// for(var i=0; i<=10;i++){
//    counting.push(i)
// }


// console.log(counting)




// for(var i=0;i<=10;i++){

//     console.log(i)
//     for(var j=1;j<=5;j++){
//         console.log(j+"*")
//     }


// }



// var final=0
// for(var i=1;i<=10;i++){
 

//     final=i+final
// }
// console.log(final)


    // var bakery=["cookies","cake","chocolate","chips"]
    // var user=prompt("Enter item name")
    // console.log(user)
    // for(var i=0; i<bakery.length; i++){
    //     if(bakery[i]===user){
    //       alert("Available")
    //       break;
    //     }else{
    //         alert("Not availabe")
    //         break;
    //     }
        
    // }


    // var bakery=["cookies","cake","chocolate","chips"]
    // var user=prompt("Enter item name")

    
    // var find= bakery.includes(user)
    // if(find){
    //     alert("Available")
    // }else{
    //     alert("Not available")
    // }

   

// var arr=[20,30,40,50,60]

// var ans=Math.max(...arr)
// console.log(ans)





// Objects





// var info={
//     name:'Hammad',
//     age:'20',
//     email:'hsyed2633@gmail.com'

// }



// info.adress='R440'
// delete info.age
// console.log(info)


// Street fighter console game


var fighters = ['Ken', 'Ryo', 'Ehonda', 'Dhalsim', 'M Bison', 'Jack', 'Akuma']
var userFighter=prompt("Select fighter")
var select=fighters.includes(userFighter)
var random=Math.random()*6
var round=Math.round(random)
if(select){
    alert(userFighter+" vs "+fighters[round])
}else{
    alert('invalid')
}
var cpu={
    name:fighters[round],
    health1:100
}
var user={
    name:userFighter,
    health2:100
}
var moves={
    punch:30,
    kick:20,
    special:50
}

while(user.health2>0 && cpu.health1>0){
var move1=prompt("enter move")
if(move1==="punch"){
cpu.health1= cpu.health1-moves.punch
console.log("health of cpu "+cpu.health1)
console.log("health of 2 "+user.health2)

}

}




  









    
    
    


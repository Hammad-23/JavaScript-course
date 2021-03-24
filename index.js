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


    

   

// var arr=[20,30,40,50,60]

// var ans=Math.max(...arr)
// console.log(ans)








// Street fighter console game


// var fighters = ['Ken', 'Ryo', 'Ehonda', 'Dhalsim', 'M Bison', 'Jack', 'Akuma']
// var userFighter=prompt("Select fighter")
// var select=fighters.includes(userFighter)
// var random=Math.random()*6
// var round=Math.round(random)
// if(select){
//     alert(userFighter+" vs "+fighters[round])
// }else{
//     alert('invalid')
// }
// var cpu={
//     name:fighters[round],
//     health1:100
// }
// var user={
//     name:userFighter,
//     health2:100
// }
// var moves={
//     punch:30,
//     kick:20,
//     special:50
// }

// while(user.health2>0 && cpu.health1>0){
// var move1=prompt("enter move")
// if(move1==="punch"){
// cpu.health1= cpu.health1-moves.punch
// console.log("health of cpu "+cpu.health1)
// console.log("health of 2 "+user.health2)


// }

// }


// initialization part 
// conditional part 
// incremental/decremental part











// var num=+prompt("Enter number")

// if(num % 2 == 0){
//     alert("Even")
// }else{
//     alert("Odd")
// }


// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(res=>res.json())
// .then(res=>{console.log(res)})



function signUp(){
    var emailId=document.getElementById("email").value
    var password=document.getElementById("pass").value
     localStorage.setItem("userId",emailId)
    localStorage.setItem("userPass",password)
    window.location.href="home.html"
    

}

function signIn(){
    var userEmail=document.getElementById("userEmail").value
    var userPass=document.getElementById("userPass").value
    var id= localStorage.getItem("userId")
    var pass= localStorage.getItem("userPass")

    if(userEmail===id&&userPass===pass){
        alert("logged in")
    }else{
        alert("Invalid")
    }

}


         

  
    


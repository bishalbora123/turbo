let score=undefined
//console.log(typeof score)
//console.log(typeof (score))
let valueInNumber=Number(score)
//console.log(typeof valueInNumber)
//console.log(valueInNumber)



/*two types of data types:
1>primitive(call by value)(That menas copy of original values) : string,number,null,undefined,symbol,boolean,Bigint
2>reference(Non-primitive)(that menas original values): Arrays,object,functions
*/

const arrays=["orange","Apple","banana"];
let myobj={
    name:"bishal",
    age:21,
    rollno:353
}

let myfunction=function(){
    console.log("we are learning JS");
}

//console.log(arrays)
//console.log(myobj)
//console.log(myfunction)

//stack(primitive data types) ;Haep(non-primitive data types)

let myname="bishalbora"
let anothername=myname
anothername="basubora"
//console.log(myname)
//console.log(anothername)

let userone={
    email:"user@gmail.com",
    upi:"user@sbi"
}
let usertwo=userone;
usertwo.email="basu@gmail.com";
console.log(userone.email)
console.log(usertwo.email)
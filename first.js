//Function to check whether a person is eligible to vote or not

function canVote(age){
    if(age>=18){
        return true;
    }
    else{
        return false;
    }
}
let Age = canVote(5);
console.log(Age);
function registerUser(name : string,birthYear : number){
    const isAge=checkAge(birthYear)
    if(isAge){
        console.log("Registration Success!")
        console.log(name+" has been registered successfully")
    }
    else{
        console.log("Registration Failed")
    }
    
}
function checkAge(birthYear : number){
    const currentYear=new Date().getFullYear()
    const age= currentYear - birthYear
    return age>=18
    

}

registerUser('Leya', 2002);

export{ }

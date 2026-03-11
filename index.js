let bankacount = {
    "ownerName": "cat",
    "accountNumber": "1",
    "balance": 100,
    "withdraw": function (){
        let cost = prompt("how much money you want to withdraw?")
        bankacount.balance -= cost
        if (bankacount.balance < 0){
            alert("sorry, you don't have enough money")
        }else {
            let al = confirm("do you want to withdraw " + cost )
            if (al){
                alert("your money was withdrawn you have " + bankacount.balance + "")
            }

        }
    },
    "deposit": function (){
        let cost = prompt("how much money you want to withdraw?")
        bankacount.balance += cost
        let al = confirm("do you want to withdraw " + cost )
        if (al){
            alert("your money was withdrawn you have " + bankacount.balance + "")
        }
    }    
}
bankacount.withdraw()
bankacount.deposit()
let weather = {
    "temperature": 0,
    "humidity":1,
    "windSpeed": 5,
    "changeWeather": function (){
        weather.temperature = prompt("how much you want to change the weather?")
    },
    "check": function (){
        if (weather.temperature > 0){
            alert("true")
        }else {
            alert("false")
        }
    }
}
weather.changeWeather()
weather.check()
let user = {"name":"cat", "email":"cat", "password":2502,login: function (){
    let email = prompt("enter your email")
    let password = prompt("enter your password")
    if (email === user.email && password == user.password){
        alert("you are logged in")
    }else {
        alert("wrong email or password")
    }
}}
user.login()

let moive = {
    "TITLE":"a",
    "rate": 0,
    "director":1,
    "year": 5,
    "changerate": function (){
        moive.rate = prompt("how much you want to change the RATE?")
    },
    "check": function (){
        if (moive.rate > 8){
            alert("true")
        }else {
            alert("false")
        }
    }
}
moive.changerate()
moive.check()

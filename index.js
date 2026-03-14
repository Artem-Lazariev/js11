let bankacount = {
    "ownerName": "cat",
    "accountNumber": "1",
    "balance": 100,
    "withdraw": function (){
        let cost = prompt("how much money you want to withdraw?")
        this.balance -= cost
        if (this.balance < 0){
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
        this.balance += cost
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
        this.temperature = prompt("how much you want to change the weather?")
    },
    "check": function (){
        return this.temperature > 0;
    }
}
weather.changeWeather()
alert(weather.check())
let user = {"name":"cat", "email":"cat", "password":2502,login: function (){
    let email = prompt("enter your email")
    let password = prompt("enter your password")
    if (email === this.email && password == this.password){
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
        this.rate = prompt("how much you want to change the RATE?")
    },
    "check": function (){
        return this.rate > 8;
    }
}
moive.changerate()
alert(moive.check())
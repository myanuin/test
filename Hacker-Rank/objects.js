// var userOne = {
//     email: 'ryu@ninjas.com',
//     name: 'Ryu',
//     login(){
//         console.log(this.email, 'has logged in');
//     },
//     logout(){
//         console.log(this.email, 'has logged out');
//     }
// };

// userOne.login();
// userOne.logout();

class User{
    constructor(email,name){
        this.email = email;
        this.name = name;
        this.score = 0;
    }
    login(){
        console.log(this.email,'just logged in!');
        return this;
    }
    logout(){
        console.log(this.email,'just logged out!');
        return this;
    }
    updateScore(){
        this.score++;
        console.log(this.email,'score is now',this.score);
        return this;
    }
}

var userOne = new User('anoop@example.com','Anoop');
var userTwo = new User('anil@example.com','Anil');

console.log(userOne);
console.log(userTwo);

userOne.login();
userTwo.logout();

userOne.login().updateScore().updateScore().logout();

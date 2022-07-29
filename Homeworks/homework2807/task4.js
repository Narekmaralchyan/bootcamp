/* Using the constructor function, create an object and methods to support the following functionality 
const profileInfo = new ProfileInfo();
profileInfo.setUsername(‘username’);
profileInfo.getUsername(‘username’);
profileInfo.setEmail(‘abc@example.com’);
profileInfo.getEmail(‘abc@example.com’)
profileInfo.setAddress(‘The user address’);
profileInfo.getEmail() */

function profileInfo() {
    this.setUsername = function (userName) {
        this.userName = userName;
    }
    this.getUsername = function () {
        return this.userName;
    }
    this.setEmail = function (email) {
        this.email = email;
    }
    this.getEmail = function () {
        return this.email
    }
    this.setAddress = function (address) {
        this.address = address;
    }
}

/* const user = new User();
user.setName(‘John’); 
user.getName();
user.setAge(63);
user.getAge();
user.setProfileInfo(new ProfileInfo());
user.getProfileInfo(); */

function User() {
    this.setName = function (name) {
        this.name = name
    }
    this.getName = function () {
        return this.name
    }
    this.setAge = function (age) {
        this.age = age
    }
    this.getAge = function () {
        return this.age;
    }
    this.setProfileInfo = function (props) {
        this.name = props.name;
        this.age = props.age;
        this.address = props.address;
    }
    this.getProfileInfo = function () {
        return {
            name: this.name,
            age: this.age,
            address: this.address
        }
    }
}
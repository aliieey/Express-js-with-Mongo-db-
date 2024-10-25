const mongoose = require("mongoose");
const { type } = require("os");



// Connect to MongoDB
async function connectDb() {
    try {
        await mongoose.connect("mongodb://localhost:27017/SignUpDb", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Connection to MongoDB Successful!");
    } catch (err) {
        console.error("Error Connecting with MongoDB:", err);
    }
}

connectDb();


// Creating User Schema 

const userSchema = new mongoose.Schema({
    name:{type:String , required : true},
    email:{type:String , required : true , unique : true},
    password : {type:String , required : true}
});

// Creating User Model

const userData = mongoose.model('userData' , userSchema);

// save a user 
 
// const newUser = new userData({
//     name : "Ali Raza Afzal",
//     email : "ali@gmail.com",
//     password : "123456"
// });

// newUser.save()
// .then(result => console.log('user created ' , result))
// .catch(error => console.log('user not created' , error));

// using Create method

userData.create({
    name:"Bilal Zafar",
    email:"bz@gmail.com",
    password:"123456"
}).
then(result => console.log('user created ' , result))
.catch(result => console.log('user not created successfully' , result));


// show users using find() method

// userData.find()
// .then(result => console.log("All Users" , result))
// .catch(error => console.log("Error in fetching user" , error));

// show user by findOne() method

// userData.findOne({email:"ali@gmail.com"})
// .then(user => console.log("User" , user))
// .catch(user => console.log("not user" , user));


// show user by findById() method

userData.findById("671b50864ef3ec81d7242ffb")
.then(userId => console.log('user by id' , userId))
.catch(userId => console.log('user by id' , userId));


// update user by updateOne() method 

// userData.updateOne({email:"ali@gmail.com"} , {name:"Ali Afzal"})
// .then(updateName => console.log('UpdateName' , updateName))
// .catch(error => console.log('Error' , error));


// update user by findByIdAndUpdate() method

userData.findByIdAndUpdate("671b50864ef3ec81d7242ffb" , {name : "Abdullah Afzal"})
.then(user => console.log("user updated" , user))
.catch(error => console.log("user not updated"));



// delete user by findByIdAndDelete() method

userData.findByIdAndDelete("671b5820a3d1b6fa9311d3ef")
.then(user =>console.log("user deleted" , user))
.catch(error => console.log("error deleting the user" , error));

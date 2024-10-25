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

// userData.create({
//     name:"Abdullah Afzal",
//     email:"abdullahafzal@seebiz.com",
//     password:"123456"
// }).
// then(result => console.log('user created ' , result))
// .catch(result => console.log('user not created successfully' , result));


// show users using find() method

// userData.find()
// .then(result => console.log("All Users" , result))
// .catch(error => console.log("Error in fetching user" , error));

// show user by findOne() method
userData.findOne({email:"ali@gmail.com"})
.then(user => console.log("User" , user))
.catch(user => console.log("not user" , user));













import { connect } from 'mongoose';
import User from './userSchema.js';

async function mongoConnect() {
  try {
    await connect(
      'mongodb+srv://abhishekshinde61:nLgxTpqBgoT2EKGf@cluster0.vvxugrq.mongodb.net/'
    );
    console.log('connected121');
  } catch (error) {
    console.log(error);
  }
}
mongoConnect();

// METHOD 1 :-->
// async function createUser() {
//   try {
//     const user = await User.create({
//       name: 'abhishek',
//       email: 'ASD@GMAIL.COM',
//       age: 28,
//     });
//     user.save();
//     // 1) FIND USER BY HIS _id :-->
//     // const user = await User.findById('65311943c8c2aa87b126d9b4');
//     // 2) FIND USER WITH SPECIFIC PROPERTY :-->
//     // const user = await User.find({ name: 'abhishek' });
//     // 3) CHECK DOCUMENT EXISTS OR NOT :-->
//     // const user = await User.exists({name: "abhishek"})
//     // 4)FIND VERY FIRST DOCUMENT :-->
//     // const user = await User.findOne({name: "abhishek"})
//     // 5) DELETE A SINGLE FIRST MATCHING DOCUMENT :-->
//     // const user = await User.deleteOne({ name: 'abhishek' });
//     // 6) DELETE MULTIPLE DOCUMENTS  :-->
//     // const user = await User.deleteMany({ name: 'abhishek' });
//     console.log(user, 'user');
//   } catch (error) {
//     console.log('error:', error.message);
//   }
// }
// createUser();

// METHOD 2:-->
// async function UserQueries() {
//   try {
//     const user = await User.where('age')
//       .gt(12)
//       .lt(31)
//       .where('name')
//       .equals('abhishek')
//       .populate('bestFriend') // using "populate" we can get all the bestfriend documents of that perticular user.
//       // example :-> abhishek :--> bestfriends :--> "nitin", "ramesh", "suresh"
//       // so it will return document of :-> abhishek :-> with all the bestfriends document included.
//       .limit(1);
//     // .select('age');/ Selecting user on the basis of "age" field
//     // user[0].bestFriend = '6531201b6c6cce0aca91a262';
//     // await user[0].save();
//     console.log(user, 'query user');
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// UserQueries();

// METHOD 3 :-->
//  WE CAN ADD SEPERATE "METHOD" FUNCTION IN OUR SCHEMA AND CALL IT HERE WHILE USING THE USER MODEL.

// async function Run() {
//   try {
//     const user = await User.findOne({ name: 'abhishek' });
//     console.log(user, 'user');
//     user.sayHi();
//   } catch (error) {
//     console.log(error);
//   }
// }
// Run();

// METHOD 4 :--> "VIRTUA"L METHOD TO CREATE "VIRTUAL PROPERTY" IN OUR SCHEMA.

// async function Run() {
//   try {
//     const user = await User.findOne({ name: 'abhishek' });
//     await user.save();
//     console.log(user, 'user'); //CONSOLING OUR "VIRTUAL PROPERTY"
//   } catch (error) {
//     console.log(error);
//   }
// }
// Run();

// METHOD 5 :--> MONGOOSE MIDDLEWARES

// async function Run() {
//   try {
//     const user = await User.findOne({ name: 'abhishek' });
//     await user.save();

//     console.log(user, 'user'); //AFTER CONSOLING USER OUR "user.save()" will get apply according "       "PRE" & "POST" middleware.

//     console.log(error);
//   }
// }
// Run();

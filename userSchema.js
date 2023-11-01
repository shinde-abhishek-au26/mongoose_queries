import mongoose, { Schema, model } from 'mongoose';

const addressSchema = new Schema({
  street: String,
  city: String,
});

const userSchema = new Schema({
  name: String,
  age: {
    type: Number,
    // min: 20,   :--> WE CAN USE MIN & MAX PROPERTIES.
    // max: 50,

    // VALIDATOR FUNCTION :-->
    validate: {
      validator: (v) => v % 2 === 0,
      message: (props) => `${props.value} is not an even number`,
    },
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },
  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },
  bestFriend: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
  },
  hobbies: [String],
  address: addressSchema,
});

// ---------------------------------------------------------------------------------------------------
// "METHODS" METHOD //
// THIS IS THE FUNCTION "METHODS" ON OUR USERSCHEMA. WE CAN ACCESESS ANY FIELD OR DO OPERATIONS ON ANY FIELD OF OUR SCHEMA USING "this" KEYWORD.
// EXAMPLE :-->
// userSchema.methods.sayHi = function () {
//   console.log(`hi.. my name is ${this.name}`);
// };

// ---------------------------------------------------------------------------------------------------
// "QUERY" METHOD //
// THIS IS "QUERY" FUNCTIONS ON OUR SCHEMA.
// EXAMPLE :-->
// userSchema.query.byName = function (name) {
//   return this.where({ name: new RegEXp(name, 'i') });
// };

// ---------------------------------------------------------------------------------------------------
// "STATICS" METHOD //
// THIS IS "STATICS" FUNCTION ON OUR SCHEMA.
// EXAMPLE :-->
// userSchema.statics.findByName = function (name) {
//   return this.where({ name: new RegEXp(name, 'i') });
// };

// ---------------------------------------------------------------------------------------------------
// "VIRTUAL" METHOD //
// THIS IS THE "VIRTUAL" FUNCTION IN OUR SCHEMA. WE CAN SET VIRTUAL PROPERTY ON OUR SCHEMA.IT   DOESENT GET SAVED IN OUR DATABASE.
// WE CAN USE THIS VIRTUAL PROPERTY ALL ACROSS THE APPLICATION.
// EXAMPLE :-->
// userSchema.virtual('namedEmail').get(function () {
//   return `${this.name}  <${this.email}>`;
// });

// ---------------------------------------------------------------------------------------------------
// MONGOOSE MIDDLEWARES:--->
// THIS "PRE" MIDDLEWARE:--> WHAT WE WANT TO DO BEFORE "SAVING" THE DOCUMENT.
// userSchema.pre('save', function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

// //THIS "POST " MIDDLEWARE :--> WHAT WE WANT TO DO AFTER "SAVING" THE DOCUMENT
// userSchema.pre('save', function (next) {
//   this.name = 'sunil';
//   next();
// });

const User = model('User', userSchema);
export default User;

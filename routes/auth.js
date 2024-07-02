const admin = require("../config/firebase.config");
const user = require("../models/user");
const router = require("express").Router();

router.get("/login", async (req, res) => {
  if (!req.headers.authorization) {
    return res.status(500).send({ message: "Invalid Token" });
  }
  const token = req.headers.authorization.split(" ")[1];
  try {
    const decodeValue = await admin.auth().verifyIdToken(token);
    if (!decodeValue) {
      return res.status(500).json({ message: "Unauthorized" });
    }

    console.log("Decoded Value:", decodeValue);

    const userExists = await user.findOne({ "user_id": decodeValue.user_id });
    if (!userExists) {
      await newUserData(decodeValue, req, res);
    } else {
     await updateNewUserData(decodeValue,req,res)
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});


const newUserData = async (decodeValue, req, res) => {
  // Check if required fields are present in decodeValue
  if (!decodeValue.email || !decodeValue.picture || !decodeValue.user_id) {
    return res.status(400).send({ success: false, msg: "Required fields are missing in the token." });
  }

  const newUser = new user({
    name: decodeValue.name,
    userEmail: decodeValue.email, 
    image: decodeValue.picture, 
    user_id: decodeValue.user_id,
    email_verified: decodeValue.email_verified,
    role: "member",
    auth_time: decodeValue.auth_time,
  });

  try {
    const savedUser = await newUser.save();
    res.status(200).send({ user: savedUser });
  } catch (err) {
    // Check for duplicate key error
    if (err.code === 11000) {
      return res.status(400).send({ success: false, msg: "Duplicate user ID" });
    }
    res.status(400).send({ success: false, msg: err.message });
  }
};

const updateNewUserData = async(decodeValue,req,res) =>{
  const filter = {user_id: decodeValue.user_id};
  
  const options ={
    upsert: true, 
    new: true
  }
  
  try{
    const result = await user.findOneAndUpdate(
      filter, 
      {auth_time: decodeValue.auth_time},
      options
    )
    res.status(200).send({user: result})
  }catch(error){

  }
}

// Uncomment and update these routes as needed
// router.get("/getUsers", async (req, res) => {
//   const options = {
//     sort: { createdAt: 1 },
//   };

//   const cursor = await user.find(options);
//   if (cursor) {
//     res.status(200).send({ success: true, data: cursor });
//   } else {
//     res.status(200).send({ success: true, msg: "No Data Found" });
//   }
// });

// router.get("/getUser/:userId", async (req, res) => {
//   const filter = { _id: req.params.userId };

//   const userExists = await user.findOne({ _id: filter });
//   if (!userExists)
//     return res.status(400).send({ success: false, msg: "Invalid User ID" });
//   if (userExists.favourites) {
//     res.status(200).send({ success: true, data: userExists });
//   } else {
//     res.status(200).send({ success: false, data: null });
//   }
// });

// router.put("/updateRole/:userId", async (req, res) => {
//   console.log(req.body.data.role, req.params.userId);
//   const filter = { _id: req.params.userId };
//   const role = req.body.data.role;

//   const options = {
//     upsert: true,
//     new: true,
//   };

//   try {
//     const result = await user.findOneAndUpdate(filter, { role: role }, options);
//     res.status(200).send({ user: result });
//   } catch (err) {
//     res.status(400).send({ success: false, msg: err });
//   }
// });

// router.delete("/delete/:userId", async (req, res) => {
//   const filter = { _id: req.params.userId };

//   const result = await user.deleteOne(filter);
//   if (result.deletedCount === 1) {
//     res.status(200).send({ success: true, msg: "Data Deleted" });
//   } else {
//     res.status(200).send({ success: false, msg: "Data Not Found" });
//   }
// });

module.exports = router;

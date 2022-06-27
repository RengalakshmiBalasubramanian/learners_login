const LearnerModel = require("../model/learner.model");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

exports.create = (req, res, next) => {
  const { fname, lname, email, password } = req.body;
  LearnerModel.create(
    {
      fname,
      lname,
      email,
      password,
    },
    (err, result) => {
      if (err) next(err);
      else
        res.status(200).json({
          status: "Success",
          message: "User Added Successfully",
          data: result,
        });
    }
  );
};

exports.login = (req, res, next) => {
  LearnerModel.findOne({ email: req.body.email },
    (err, result) => {
        if(err){
            next(err);
        }
        else{
            if(bcrypt.compare(req.body.password, result.password)){
                const token = jwt.sign({id:result._id},req.app.get('secretKey'), {expiresIn:'1h'})
                res.status(200).json({
                    status: "Success",
                    message: "User Logged in Successfully",
                    data: {
                        user: result,
                        token: token
                    }
                })
            }
        }
  });
};

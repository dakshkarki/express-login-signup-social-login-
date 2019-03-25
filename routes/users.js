let express = require('express');
let router = express.Router();
let auth = require('../middleware/auth');
let users_controller = require('../routes-controller/users-controller');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Respond with a resource');
});

// router.get('/getallusers',users_controller.getAllUsers);




router.post('/signup',users_controller.signUp);

router.post('/signin',users_controller.signIn);

router.post('/forgotpassword',users_controller.forgotPassword);

router.get('/verifyaccount',users_controller.verifyAccount);

router.post('/setpassword',users_controller.setPassword);

router.post('/postsetpassword',users_controller.postSetPassword);

router.get('/findAllUser',users_controller.findAllUser);

router.get('/myprofile',auth,users_controller.getMyProfile);

router.post('/edituser',auth,users_controller.editUser);

router.post('/socialsignin',users_controller.socialSignIn);

module.exports = router;

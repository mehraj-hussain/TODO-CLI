import { body, validationResult } from 'express-validator'; // body from postman, validation for vlidation and gives errors

function userRegisterValidations() {
    return [
        body('username', "User Name is Required").notEmpty().isLength({ min: 3 }),
        body('email', "Email is Required").isEmail(),
        body('phone', "Phone is Required").isMobilePhone(),
        body('location', "Location is Required").notEmpty(),
        body('password', "Password must Have 1 Lowercase, 1 Uppercase, 1 Symbol and the Length should be more than 8 ").isStrongPassword(),
        body('password2').custom((value, { req }) => {    //promises
            if (value !== req.body.password) {
                throw new Error('Passwords does not match, Please Check');
            }
            return true;
        }),
    ]
}

function userLoginValidations() {
    return [
        body('email', "Email is Required").isEmail(), // is email is handling all the errors so no need to handle wrong / corner cases
        body('password', "Password is Required ").notEmpty(),
    ]
}

function errorMiddleware(req, res, next) {  //why are we using midddle ware when we can use normal function
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    return next();
}

export { userRegisterValidations, userLoginValidations, errorMiddleware }
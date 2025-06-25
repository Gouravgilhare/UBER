const express = require('express');
const router = express();


router.post('/create',
    body('userId').isString().isLength({min : 3, max:24}).withMessage('Invalid userId '),
    body('pickup').isString().isLength({min:3}).withMessage('Invalid Pickup Address'),
    body('destination').isString().isLength({min:3}).withMessage('Invalid Pickup Address'),
    
 )


module.exports = router;
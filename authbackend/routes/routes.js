const express = require('express');
const router = express.Router();
const signupTemplatecopy = require('../models/SignupModels')
const bcrypt = require('bcrypt')

router.post('/signup', async (request, response) => {

    const saltPassword = await bcrypt.genSalt(10)
    
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const signedUpUser = new signupTemplatecopy({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:securePassword
    })
    signedUpUser.save()
    .then(data =>{
        response.json(data)
    })
    .catch(error =>{
        response.json(error)
    })
});

router.post('/signin', async (req, res) => {
    try {
        const {username, password} = req.body;
        if(!username || !password) {
            return res.status(400).json({error:"Please fill the data!"})
        }
        const userLogin = await signupTemplatecopy.findOne({username:username});
        console.log(userLogin);

        if(userLogin){
            const isMatch = await bcrypt.compare(password, userLogin.password);
        
            if(!isMatch) {
                res.status(400).json({error: "Invalid Credientials pass"});
            } else {
                // const token = jwt.sign(
                //     {
                //         name: username,
                //         password: password,
                //     },
                //     'secret123'
                // )
                res.json({message: "User Signin Successful!"});
            }
        } else{
            res.status(400).json({error: "Invalid Credientials"});
        }
        
        // if(!userLogin) {
        //     res.status(400).json({error: "Invalid Credientials"});
        // } else {
        //     res.json({message: "User Signin Successful!"});
        // }

    } catch (err) {
        console.log(err);
    }
});

// app.get('/dashboard', async (req, res) => {
// 	const token = req.headers['x-access-token']

// 	try {
// 		const decoded = jwt.verify(token, 'secret123')
// 		const username = decoded.username
// 		const user = await signupTemplatecopy.findOne({ username:username })

// 		return res.json({ status: 'ok', quote: user.quote })
// 	} catch (error) {
// 		console.log(error)
// 		res.json({ status: 'error', error: 'invalid token' })
// 	}
// });

module.exports = router
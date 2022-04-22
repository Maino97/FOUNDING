// const jwt = require("jsonwebtoken")
// const bcrypt = require("bcryptjs")
const router = require('express').Router()

const SECRET = process.env.SECRET || 'MakeItPossible'

// router.post('/register', async (req, res) => {
//   const { name, email, password } = req.body
//   console.log(name, email, password)
//   if (!name) {
//     return res.status(400).send({
//       success: false,
//       reason: 'Name is required!'
//     })
//   }
//   /** ! More control on the email */
//   if (!email) {
//     return res.status(400).send({
//       success: false,
//       reason: 'Email is required!'
//     })
//   }
//   /** Need to be hashed */
//   if (!password) {
//     return res.status(400).send({
//       success: false,
//       reason: 'Password is required!'
//     })
//   }

//   /** Check if email exists */
//   let user = await User.findOne({
//     email
//   })
//   if (user) {
//     return res.status(400).json({
//       success: false,
//       reason: 'User email already exists'
//     })
//   }

//   user = new User({ name, email, password })

//   const salt = await bcrypt.genSalt(10);
//   user.password = await bcrypt.hash(password.toString(), salt);


//   await user.save()


//   /** TOKEN */
//   const payload = {
//     user: {
//       id: user.id
//     }
//   }

//   jwt.sign(
//     payload,
//     SECRET, {
//     expiresIn: 10000
//   },
//     (err, token) => {
//       if (err) throw err

//       return res.status(200).json({
//         success: true,
//         token
//       })
//     }
//   )

// })


// router.post('/login', async (req, res) => {
//   const { email, password } = req.body

//   if (!email) {
//     return res.status(401).json({
//       success: false,
//       reason: 'Email is required'
//     })
//   }

//   if (!password) {
//     return res.status(401).json({
//       success: false,
//       reason: 'Password is required'
//     })
//   }

//   let user = await User.findOne({
//     email
//   })

//   if (!user) {
//     return res.status(401).json({
//       success: false,
//       reason: 'User does not exits'
//     })
//   }

//   const isMatch = await bcrypt.compare(password.toString(), user.password)
//   if (!isMatch) {
//     return res.status(401).json({
//       success: false,
//       reason: 'Incorrect password'
//     })
//   }

//   const payload = {
//     user: {
//       id: user.id
//     }
//   }

//   jwt.sign(payload, SECRET, { expiresIn: 3600 }, (err, token) => {
//     if (err) throw err

//     res.status(200).json({
//       success: true,
//       token
//     })
//   })

// })

// router.get('/me', authMiddleware, async (req, res) => {
//   const user = await User.findById(req.user.id)
//   res.json(user)
// })

// /auth/login
router.get('/login', function (req, res) {
  res.json({ login: true });
});

module.exports = router
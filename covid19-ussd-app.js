const app = require('express')()
const bodyParser = require('body-parser')
const logger = require('morgan')

const port = process.env.PORT || 3030

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.get('*', (req, res) => {
  res.send('covid19 USSD application developed by Nishant Mishra <nishantmishra9910@gmail.com>')
})
var welcomeMsg = `CON Hello and welcome to Foodigo.
Have your food delivered to you fast and hot!
Please find our menu
Enter your name to continue`

var orderDetails = {
    name: "",
    description: "",
    address: "",
    telephone: "",
    open: true
}
app.post('*', (req, res) => {
  let {sessionId, serviceCode, phoneNumber, text} = req.body
  var textValue = text.split('*').length
  if (text == '') {
    // This is the first request. Note how we start the response with CON
     let response = `CON Hello and welcome to Foodigo.
Have your food delivered to you fast and hot!
Please find our menu
Enter your name to continue`
    }else if(textValue === 1){
         let response = "CON What do you want to eat?"
        orderDetails.name = text;
        res.send(response)
    }else if(textValue === 2){
         let response = "CON Where do we deliver it?"
        orderDetails.description = text.split('*')[1];
        res.send(response)
    }else if(textValue === 3){
         let response = "CON What's your telephone number?"
        orderDetails.address = text.split('*')[2];
        res.send(response)
    }else if(textValue === 4){
    let response = `CON What would you want to check
    1. My Account
    2. My phone number`
    res.send(response)
  } else if (text == '1') {
    // Business logic for first level response
    let response = `CON Choose account information you want to view
    1. Account number
    2. Account balance`
    res.send(response)
  } else if (text == '2') {
    // Business logic for first level response
    let response = `END Your phone number is ${phoneNumber}`
    res.send(response)
  } else if (text == '1*1') {
    // Business logic for first level response
    let accountNumber = 'ACC1001'
    // This is a terminal request. Note how we start the response with END
    let response = `END Your account number is ${accountNumber}`
    res.send(response)
  } else if (text == '1*2') {
    // This is a second level response where the user selected 1 in the first instance
    let balance = 'NGN 10,000'
    // This is a terminal request. Note how we start the response with END
    let response = `END Your balance is ${balance}`
    res.send(response)
  } else {
    res.status(400).send('Bad request!')
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
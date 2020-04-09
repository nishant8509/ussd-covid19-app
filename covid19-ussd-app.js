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
Please find our menu ${webURL}
Enter your name to continue`

var orderDetails = {
    name: "",
    description: "",
    address: "",
    telephone: "",
    open: true
}
var lastData = "";

app.post('/order', function(req, res){
    console.log(req.body);
    var message = 'Hello' 

    var sessionId = req.body.sessionId
    var serviceCode = req.body.serviceCode
    var phoneNumber = req.body.phoneNumber
    var text = req.body.text
    var textValue = text.split('*').length

    if(text === ''){
        message = welcomeMsg
    }else if(textValue === 1){
        message = "CON What do you want to eat?"
        orderDetails.name = text;
    }else if(textValue === 2){
        message = "CON Where do we deliver it?"
        orderDetails.description = text.split('*')[1];
    }else if(textValue === 3){
        message = "CON What's your telephone number?"
        orderDetails.address = text.split('*')[2];
    }else if(textValue === 4){
        message = `CON Would you like to place this order?
        1. Yes
        2. No`
        lastData = text.split('*')[3];
    }else{
        message = `END Thanks for your order
        Enjoy your meal in advance`
        orderDetails.telephone = lastData   
    }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
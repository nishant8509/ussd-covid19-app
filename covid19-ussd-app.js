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

app.post('*', (req, res) => {
  let {sessionId, serviceCode, phoneNumber, text} = req.body
  if (text == '') {
    // This is the first request. Note how we start the response with CON
    let response = `CON Welcome to COVID19 USSD Help Desk
    1. New User Registration
    2. Login`
    res.send(response)
  } else if (text == '1') {
    // Business logic for first level response
    let response = `END Enter your phone number`
    res.send(response)
  } else if (text == '2') {
    // This is a second level response where the user selected 1 in the first instance    
    // This is a terminal request. Note how we start the response with END
    let response = `CON Enter your Phone number`
    res.send(response)
  } else if (text == '9910814601') {
    let response = `CON You are successfully logged-in
    1. enter 1 for Main Menue`
  } else if (text == '1') {
    let response = `CON Select Your District
    1. East
    2. West
    3. North
    4. South`
  }  else if (text == '1*1') {
    let response = `CON The Useful help-line nos. for you distric are
    1. health-care helpline
    2. Food & Groceries 
    3. Police helpline
    4. DM office`
  }  else if (text == '1*1*1') {
    let doctor = '7827075165'
    let ambulance = '102'
    let medStore = '9560791209'
    let response = `END Health-care help-line nos. for your distric are 
    1. Doctor : ${doctor}
    2. Ambulance : ${ambulance}
    3. Medical Store : ${medStore}`
  } else if (text == '1*1*2') {
    let ration = '8727075165'
    let Canteen = '9867591020'
    let Store = '9560791209'
    let vegStore = '8560791209'
    let response = `END Food & Groceries help-line nos. for your distric are 
    1. Ration officer : ${ration}
    2. Government canteen : ${Canteen}
    3. Groceries Store : ${Store}
    4. Vegetable store : ${vegStore}`
  } else if (text == '1*1*3') {
    let SHO = '7827075165'
    let response = `END Police help-line no. for your distric are 
    1. SHO : ${SHO}`
  } else if (text == '1*1*4') {
    let DM = '7827075165'
    let response = `END DM Office help-line no. for your distric are 
    1. Medical Store : ${DM}`
  } else if (text == '1*2') {
    let response = `CON The Useful help-line nos. for you distric are
    1. health-care helpline
    2. Food & Groceries 
    3. Police helpline
    4. DM office`
  }  else if (text == '1*2*1') {
    let doctor = '7827075165'
    let ambulance = '102'
    let medStore = '9560791209'
    let response = `END Health-care help-line nos. for your distric are 
    1. Doctor : ${doctor}
    2. Ambulance : ${ambulance}
    3. Medical Store : ${medStore}`
  } else if (text == '1*2*2') {
    let ration = '8727075165'
    let Canteen = '9867591020'
    let Store = '9560791209'
    let vegStore = '8560791209'
    let response = `END Food & Groceries help-line nos. for your distric are 
    1. Ration officer : ${ration}
    2. Government canteen : ${Canteen}
    3. Groceries Store : ${Store}
    4. Vegetable store : ${vegStore}`
  } else if (text == '1*2*3') {
    let SHO = '7827075165'
    let response = `END Police help-line no. for your distric are 
    1. SHO : ${SHO}`
  } else if (text == '1*2*4') {
    let DM = '7827075165'
    let response = `END DM Office help-line no. for your distric are 
    1. Medical Store : ${DM}`
  } else if (text == '1*3') {
    let response = `CON The Useful help-line nos. for you distric are
    1. health-care helpline
    2. Food & Groceries 
    3. Police helpline
    4. DM office`
  }  else if (text == '1*3*1') {
    let doctor = '7827075165'
    let ambulance = '102'
    let medStore = '9560791209'
    let response = `END Health-care help-line nos. for your distric are 
    1. Doctor : ${doctor}
    2. Ambulance : ${ambulance}
    3. Medical Store : ${medStore}`
  } else if (text == '1*3*2') {
    let ration = '8727075165'
    let Canteen = '9867591020'
    let Store = '9560791209'
    let vegStore = '8560791209'
    let response = `END Food & Groceries help-line nos. for your distric are 
    1. Ration officer : ${ration}
    2. Government canteen : ${Canteen}
    3. Groceries Store : ${Store}
    4. Vegetable store : ${vegStore}`
  } else if (text == '1*3*3') {
    let SHO = '7827075165'
    let response = `END Police help-line no. for your distric are 
    1. SHO : ${SHO}`
  } else if (text == '1*3*4') {
    let DM = '7827075165'
    let response = `END DM Office help-line no. for your distric are 
    1. Medical Store : ${DM}`
  } else if (text == '1*4') {
    let response = `CON The Useful help-line nos. for you distric are
    1. health-care helpline
    2. Food & Groceries 
    3. Police helpline
    4. DM office`
  }  else if (text == '1*4*1') {
    let doctor = '7827075165'
    let ambulance = '102'
    let medStore = '9560791209'
    let response = `END Health-care help-line nos. for your distric are 
    1. Doctor : ${doctor}
    2. Ambulance : ${ambulance}
    3. Medical Store : ${medStore}`
  } else if (text == '1*4*2') {
    let ration = '8727075165'
    let Canteen = '9867591020'
    let Store = '9560791209'
    let vegStore = '8560791209'
    let response = `END Food & Groceries help-line nos. for your distric are 
    1. Ration officer : ${ration}
    2. Government canteen : ${Canteen}
    3. Groceries Store : ${Store}
    4. Vegetable store : ${vegStore}`
  } else if (text == '1*4*3') {
    let SHO = '7827075165'
    let response = `END Police help-line no. for your distric are 
    1. SHO : ${SHO}`
  } else if (text == '1*4*4') {
    let DM = '7827075165'
    let response = `END DM Office help-line no. for your distric are 
    1. Medical Store : ${DM}`
  }
  else {
    res.status(400).send('Bad request!')
  }
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})

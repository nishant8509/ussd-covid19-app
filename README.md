# USSD Based COVID-19 Helpdesk 

## Idea Description

- India and whole world is facing a huge problem of COVID19 outbreak, and government is taking essential steps to stop the chain reaction (spreading) of this virus. In this order world's largest lockdown has been announced by the government and many areas has been locked for about three weeks.
In this situation many software developers are creating applications so that every person can get essential sevices at their doorsteps and notify them to take precautions against this virus.
but there is problem which we don't focus on......
As we know India is the second largest populated country in the world, but still the share of smartphone users in India is less than 40% .
so providing smartphone apps to all the citizens of the country becomes difficult as there are many users who use basic phones or live in areas where internet connection is very weak.
#### So i've come up with an idea to use USSD(Unstructured, Supplementary Service Data) protocol to provide essential help-lines to those who have basic phone or have internet connectivity problem in their area which is free and user friendly.

## Software Requirement

- For the development of this USSD application sofware requires are :

1. `Africa's Talking` android app from Google Playstore or use the web interface at https://simulator.africastalking.com:1517/
2  `heroku CLI` (a simplified cloud deployment service) by following this link https://devcenter.heroku.com/articles/heroku-cli or use online simulator
3. `Git Bash` Pushing code to the Heroku master branch for deployment
4. `Sublime text` text editor

## Process Flow

Below is an illustration on how the USSD service works
![alt text](https://github.com/nishant8509/ussd-covid19-app/blob/master/process.jpg)
Processing USSD requests using our API is very easy once your account is set up. In particular, you will need to:

- Register a service code with us.
- Register a URL that we can call whenever we get a request from a client coming into our system.
Once you register your callback URL, any requests that we receive belonging to you will trigger a callback that sends the request data to that URL using `HTTP post`.

### API Parameters

- The API makes a HTTP POST request to your server with parameters shown below. This request is made when the user dials a USSD code and every time they respond to a menu.

```$sessionId: This generates a unique value when the session starts and sent every time a mobile subscriber response has been received.
$serviceCode: This refer to your USSD code
$text: This shows the user input. which is an empty string in the first notification of a session which after that concatenates all the user input within the session until the session ends.
$response: This hold the answer to the user input.
echo: Prints out the response for the user to read.
CON: It means an intermediate menu Or that the session is CONtinuing
END: Means the final menu and will trigger session termination i.e session is ENDing.
```

## Data Flow Diagram

![alt text](https://github.com/nishant8509/ussd-covid19-app/blob/master/flow.png)

![alt text](https://github.com/nishant8509/ussd-covid19-app/blob/master/simulator-login.jpg)

![alt text](https://github.com/nishant8509/ussd-covid19-app/blob/master/simulator-page.jpg)

![alt text](https://github.com/nishant8509/ussd-covid19-app/blob/master/code-run.jpg)

![alt text](https://github.com/nishant8509/ussd-covid19-app/blob/master/welcome.jpg)





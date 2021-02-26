const request = require('supertest'); //importing superTest
const expect = require('chai').expect; //importing our assertion module
const ENDPOINT = 'https://restful-booker.herokuapp.com/booking'; //the base url for the endpoint

describe('Sample API Request using SuperTest and the restful-booker',()=>{

    it('Creates a booking', async ()=>{
        const response = await request(ENDPOINT) //creating the request object
        .post('/') //specifying the http verb we'll be using for this request as well as the path
        .send({ // the JSON data that is to be sent (because JSON is a subset of javascript, the fields can be expressed with or without the quotations here)
            firstname : "Doneil",
            lastname : "Scotland",
            totalprice : 111,
            depositpaid : true,
            bookingdates : {
                checkin : "2018-01-01",
                checkout : "2019-01-01"
            },
            additionalneeds : "Breakfast"
        })
        .set('Accept', 'application/json'); //setting the content type to accept in the request header

        expect(response.statusCode).to.be.equal(200); //checking to see if the request was successful and returned a 200 status code
        expect(response.body.booking.firstname).to.be.equal("Doneil"); //checking to see if the value that was saved in the firstname field is correct
        expect(typeof response.body.booking.totalprice).to.be.equal("number"); //checking to see if the type of the returned value is correct
        

        
        console.log(response.body.booking); //printing the response body so we can see the entire contents
    });

})
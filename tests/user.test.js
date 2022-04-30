process.env.NODE_ENV = 'test';

import db from "../models/init.mjs";

import app from "../app.mjs";
import chai, { expect } from "chai";
import chaiHttp from "chai-http";

let should = chai.should();



chai.use(chaiHttp);
//Our parent block
describe('users', () => {
    /*
      * Test the /GET route
      */

    describe('/POST register new user correct data',() => {
        it('it should register the user in DB', (done) => {

            let t_email = "abc@realmail.com"
            let t_password = "123456"
            let user  = await db.models.User.findOne({
                where: { email: t_email }
            });
                
            if (user) user.destroy()

            chai.request(app)
                .post('/auth/register')
                .send({email:t_email ,password: t_password})
                .end((err, res) => {                    
                    expect(res.body).to.have.status(200)

                    user  = await db.models.User.findOne({
                        where: { email: t_email }
                    });

                    expect(user).to.deep.include({email:t_email ,password: t_password})
                    done();
                });
        });
    });


});
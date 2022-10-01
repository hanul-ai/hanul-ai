const express = require("express");
const { db, sequelize, Sequelize } = require("../../models/index");
const mailer = require("../../nodemailer");

const router = express.Router();

router.post("/mail", async(req, res, next) => { 
    let { email } = req.body;

    let new_pass = Math.random().toString(36).slice(2);
    try {
        let emailParam = {
            toEmail: email,
            subject: 'Step New Password',
            text: 'new password: ' + new_pass,
        };

        mailer.sendGmail(emailParam);
        new_pass = await encrypt(new_pass);

        await db.user_owner
            .update({
                password: new_pass
            },
            { where : { email } })
            .then(async result => {
                res.status(200).send({
                    data: true,
                });
            });
    } catch(err) {
        res.status(500).send({
            data: false,
        });
        logger.error("[POST] /mail 500 error || req.body.email: " + email);
    }
});

module.exports = router;
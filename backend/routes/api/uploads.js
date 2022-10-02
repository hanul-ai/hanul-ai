const express = require("express");
const { db, sequelize, Sequelize } = require("../../models/index");

const router = express.Router();

//image upload
router.post("/", async(req, res, next) => {
    let { email } = req.query;
    let { upload_image, image_type } = req.body; //image 없으면 둘다 null

    let now = new Date();

    try {
        let file_image;

        await db.image
        .create({
            path: null,
            email: email,
            time: now,
            save: "Y",
        })

        if(upload_image != null) {
            const buffer_file = Buffer.from(upload_image);
            console.log(`buffer_image length: ${buffer_file.length}`);

            let sql = `select num from image where email='${email}' order by num desc limit 1`;
            let a = await sequelize.query(sql, { type: Sequelize.QueryTypes.SELECT });

            file_image = "uploadimage_" + a[0].num + "." + image_type;

            fs.writeFile(`C:/Git/hanul-ai/hanul-ai/backend/uploads/${file_image}`, buffer_file, (err) => { //연결주소 수정 필요
                console.log(`image save request finished`);
                if (err) {
                    console.log(`err: ${err}`);
                    return res.status(500).send();
                };
            });

            await db.image
                .update({
                    path: "uploads/" + file_post,
                },
                { where : { email, num: a[0].num } })

                res.status(200).send({
                    data: "upload success",
                });
        } else {
            res.status(200).send({
                data: "upload success",
            });
        }
    } catch(err) {
        res.status(500).send({
            data: false,
        })
    };
});

module.exports = router;
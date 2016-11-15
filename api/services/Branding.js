var schema = new Schema({
    firstName: {
        type: String,
    },
    middleName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    companyName: {
        type: String,
    },
    brandName: {
        type: String,
        default: ""
    },
    accomplish: {
        type: String,
        default: ""
    },
    characteristics: {
        type: String,
        default: ""
    },
    gender: {
        type: Number,
        default: 0
    },
    ageType: {
        type: Number,
        default: 0
    },
    affordableLuxurious: {
        type: Number,
        default: 0
    },
    classicModern: {
        type: Number,
        default: 0
    },
    playfulSerious: {
        type: Number,
        default: 0
    },
    interactionBrand: {
        type: String,
        default: ""
    },
    brandColor: {
        type: String,
        default: ""
    },
    logoType: {
        type: String,
        default: ""
    },
    brandFont: {
        type: String,
        default: ""
    },
    brandOrigin: {
        type: String,
        default: ""
    },
    brandLevel: {
        type: String,
        default: ""
    },
    brandIdentity: {
        type: String,
        default: ""
    },
    includeBrandIdentity: {
        type: String,
        default: ""
    }
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Branding', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {

    saveData: function (data, callback) {
        var branding = this(data);
        branding.save(function (err, data2) {
            if (err) {
                // var data22 = data2.toObject();
                callback(err, data2);
            } else if (data2) {
                var obj = {};
                obj.companyName = data2.companyName;
                obj.firstName = data2.firstName;
                obj.lastName = data2.lastName;
                obj.middleName = data2.middleName;
                obj.includeBrandIdentity = data2.includeBrandIdentity;
                obj.brandIdentity = data2.brandIdentity;
                obj.brandLevel = data2.brandLevel;
                obj.brandOrigin = data2.brandOrigin;
                obj.brandFont = data2.brandFont;
                obj.logoType = data2.logoType;
                obj.brandColor = data2.brandColor;
                obj.interactionBrand = data2.interactionBrand;
                obj.playfulSerious = data2.playfulSerious;
                obj.classicModern = data2.classicModern;
                obj.affordableLuxurious = data2.affordableLuxurious;
                obj.ageType = data2.ageType;
                obj.gender = data2.gender;
                obj.characteristics = data2.characteristics;
                obj.accomplish = data2.accomplish;
                obj.brandName = data2.brandName;
                sails.renderView('email/branding', obj, function (err, view) {
                    if (err) {
                        console.log("In err " + err);
                        callback(err);
                    } else {

                        console.log(view);
                        var helper = require('sendgrid').mail
                        from_email = new helper.Email("no-reply@yogafoodlove.com")
                        to_email = new helper.Email("jsw@yogafoodlove.com")
                        subject = "YFL Digital (Brand Identity)"
                        content = new helper.Content("text/html", view)
                            // content = new helper.Content("text/html", "views/email/index.ejs")
                        mail = new helper.Mail(from_email, subject, to_email, content)
                        var decodedData = base64.decode('U0cuMll0aUN0UV9UOHFRWGdhZkpBVWpUUS5fNm9Mbzl3QXZFUHZjLWxJR29BQ1hKbjBuZW9BZm5ua2Zoa3RyMGlsSVVJ');
                        //tagboss
                        // var decodedData = base64.decode('U0cuV0tLOHA2R2dSMVNJNVFGS09JTDZ1US5WY3N6dlVjSkVyM1EtQkRMOS14eGpIb3NiOEhWMFZJZkZtQUFramw4WHhv');
                        var sg = require('sendgrid')(decodedData);
                        var request = sg.emptyRequest({
                            method: 'POST',
                            path: '/v3/mail/send',
                            body: mail.toJSON()
                        });
                        sg.API(request, function (err, response) {
                            if (err) {
                                console.log(err);
                                callback(err, null);
                            } else if (response) {
                                console.log(response);
                                callback(null, data);
                            } else {
                                callback(null, {});
                            }
                        });
                    }
                });

            }
        });
    },
};
module.exports = _.assign(module.exports, exports, model);
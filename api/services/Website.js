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
  // mobileNumber : {
  //  type : Number,
  //  required : true
  // },
  companyName: {
    type: String,
  },
  business: {
    type: String,
    default: ""
  },
  message: {
    type: String,
    default: ""
  },
  demographics: {
    type: String,
    default: ""
  },
  requirements: {
    type: String,
    default: ""
  },
  responsiveDesign: {
    type: Boolean,
    default: false
  },
  catalogue: {
    type: Boolean,
    default: false
  },
  copywriter: {
    type: Boolean,
    default: false
  },
  modifiedWebsite: {
    type: Boolean,
    default: false
  },
  webDomain: {
    type: Boolean,
    default: false
  },

  staticDynamic: {
    type: Boolean,
    default: false
  },
  sitePurpose1: {
    type: String,
    default: ""
  },
  sitePurpose2: {
    type: String,
    default: ""
  },
  sitePurpose3: {
    type: String,
    default: ""
  },
  websiteFeatures: {
    type: String,
    default: ""
  },
  blog: {
    type: String,
    default: ""
  },
  ecommerce: {
    type: String,
    default: ""
  },
  mailer: {
    type: Boolean,
    default: false
  },
  rating: {
    type: Boolean,
    default: false
  },
  siteMap: {
    type: String,
    default: ""
  },
  professionallyShot: {
    type: Boolean,
    default: false
  },
  seo: {
    type: Boolean,
    default: false
  },
  advanceSeo: {
    type: Boolean,
    default: false
  },
  contentWriter: {
    type: Boolean,
    default: false
  },
  contentWriterHtml: {
    type: Boolean,
    default: false
  },
  contentType: {
    type: String,
    default: ""
  },
  ecommerceCapability: {
    type: Boolean,
    default: false
  },
  duration: {
    type: String,
    default: ""
  },
  onlineMarketing: {
    type: Boolean,
    default: false
  },
  update: {
    type: String,
    default: ""
  },
  role: {
    type: Boolean,
    default: false
  },
  additionalLanguage: {
    type: Boolean,
    default: false
  },
  tone: {
    type: String,
    default: ""
  },
  favouriteSite: {
    type: String,
    default: ""
  },
  leastFavouriteSite: {
    type: String,
    default: ""
  },
  sellingPoint: {
    type: String,
    default: ""
  },
  siteNo: {
    type: String,
    default: ""
  },
  adjective: {
    type: String,
    default: ""
  },
  competitors: {
    type: String,
    default: ""
  },
  corporate: {
    type: String,
    default: ""
  },
  particular: {
    type: String,
    default: ""
  }


});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Website', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {
  saveData: function (data, callback) {
    var website = this(data);
    website.save(function (err, data2) {
      if (err) {
        // var data22 = data2.toObject();
        callback(err, data2);
      } else if (data2) {
        var obj = {};
        obj.additionalLanguage = data2.additionalLanguage;
        obj.adjective = data2.adjective;
        obj.companyName = data2.companyName;
        obj.advanceSeo = data2.advanceSeo;
        obj.blog = data2.blog;
        obj.business = data2.business;
        obj.catalogue = data2.catalogue;
        obj.competitors = data2.competitors;
        obj.contentType = data2.contentType;
        obj.contentTypeArr = data2.contentTypeArr;
        obj.diffformat = data2.diffformat;
        obj.contentWriter = data2.contentWriter;
        obj.contentWriterHtml = data2.contentWriterHtml;
        obj.copywriter = data2.copywriter;
        obj.corporate = data2.corporate;
        obj.demographics = data2.demographics;
        obj.duration = data2.duration;
        obj.ecommerce = data2.ecommerce;
        obj.ecommerceCapability = data2.ecommerceCapability;
        obj.favouriteSite = data2.favouriteSite;
        obj.features = data2.features;
        obj.firstName = data2.firstName;
        obj.format = data2.format;
        obj.lastName = data2.lastName;
        obj.leastFavouriteSite = data2.leastFavouriteSite;
        obj.mailer = data2.mailer;
        obj.modifiedWebsite = data2.modifiedWebsite;
        obj.middleName = data2.middleName;
        obj.myothercontent = data2.myothercontent;
        obj.onlineMarketing = data2.onlineMarketing;
        obj.particular = data2.particular;
        obj.professionallyShotseo = data2.professionallyShotseo;
        obj.rating = data2.rating;
        obj.requirement = data2.requirement;
        obj.requirements = data2.requirements;
        obj.requirementsArr = data2.requirementsArr;
        obj.responsiveDesign = data2.responsiveDesign;
        obj.role = data2.role;
        obj.sellingPoint = data2.sellingPoint;
        obj.seo = data2.seo;
        obj.siteMap = data2.siteMap;
        obj.siteNo = data2.siteNo;
        obj.sitePurpose1 = data2.sitePurpose1;
        obj.sitePurpose2 = data2.sitePurpose2;
        obj.sitePurpose3 = data2.sitePurpose3;
        obj.staticDynamic = data2.staticDynamic;
        obj.tone = data2.tone;
        obj.update = data2.update;
        obj.message = data2.message;
        obj.webDomain = data2.webDomain;
        obj.websiteFeatures = data2.websiteFeatures;
        obj.websiteFeaturesArr = data2.websiteFeaturesArr;
        console.log(obj);
        sails.renderView('email/website', obj, function (err, view) {
          if (err) {
            console.log("In err " + err);
            callback(err);
          } else {

            console.log(view);
            var helper = require('sendgrid').mail
            from_email = new helper.Email("no-reply@yogafoodlove.com")
            to_email = new helper.Email("jsw@yogafoodlove.com")
            subject = "YFL Digital (WEBSITE)"
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
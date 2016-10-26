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
var model = {};
module.exports = _.assign(module.exports, exports, model);
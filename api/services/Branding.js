var schema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    // mobileNumber : {
    //  type : Number,
    //  required : true
    // },
    companyName: {
        type: String,
        required: true
    },
    brandName: {
        type: Boolean,
        default: false
    },
    accomplish: [{
        type: String,
        default: ""
    }],
    characteristics: [{
        type: String,
        default: ""
    }],
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
    logoType: [{
        type: String,
        default: ""
    }],
    brandFont: [{
        type: String,
        default: ""
    }],
    brandOrigin: {
        type: String,
        default: ""
    },
    brandLevel: {
        type: String,
        default: ""
    },
    brandIdentity: [{
        type: String,
        default: ""
    }],
    includeBrandIdentity: [{
        type: String,
        default: ""
    }]
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Branding', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);
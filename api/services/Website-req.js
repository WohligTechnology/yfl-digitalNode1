var schema = new Schema({
  firstName : {
 type : String,
 required : true
},
middleName : {
 type : String,
 required : true
},
lastName : {
 type : String,
 required : true
},
// mobileNumber : {
//  type : Number,
//  required : true
// },
companyName:{
  type:String,
  required :true
},
business:{
  type :String,
  default : ""
},
message :{
  type :String,
  default :""
},
demographics :{
  type:String,
  default :""
},
requirements: [{
      type : String,
      default : ""
  }],
  website:{
    type :Boolean,
    default:""
  },
  catalogue:{
    type:Boolean,
    default:""
  },
  copywriter:{
    type:Boolean,
    default:""
  },
  modifiedWebsite:{
    type:Boolean,
    default:""
  },
  webDomain:{
    type:Boolean,
    default:""
  },

  staticDynamic:{
    type:Boolean,
    default:""
  },
  sitePurpose1:String,
  sitePurpose2:String,
  sitePurpose3:String



});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Website-req', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);

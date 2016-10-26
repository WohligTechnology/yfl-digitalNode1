var imgurl = adminurl + "upload/";

var imgpath = imgurl + "readFile";
var uploadurl = imgurl;

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function ($http) {
    var navigation = [{
        name: "Website",
        classis: "active",
        sref: "#/page/viewWebsite//",
        icon: "speed-fast"
    }, {
        name: "Branding",
        classis: "active",
        sref: "#/page/viewBranding//",
        icon: "man"
    }];

    return {
        getnav: function () {
            return navigation;
        },
        parseAccessToken: function (data, callback) {
            if (data) {
                $.jStorage.set("accessToken", data);
                callback();
            }
        },
        removeAccessToken: function (data, callback) {
            $.jStorage.flush();
        },
        profile: function (callback, errorCallback) {
            var data = {
                accessToken: $.jStorage.get("accessToken")
            };
            $http.post(adminurl + 'user/profile', data).success(function (data) {
                if (data.value === true) {
                    $.jStorage.set("profile", data.data);
                    callback();
                } else {
                    errorCallback(data.error);
                }
            });
        },
        makeactive: function (menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },

        search: function (url, formData, i, callback) {
            $http.post(adminurl + url, formData).success(function (data) {
                callback(data, i);
            });
        },
        delete: function (url, formData, callback) {
            $http.post(adminurl + url, formData).success(function (data) {
                callback(data);
            });
        },
        countrySave: function (formData, callback) {
            $http.post(adminurl + 'country/save', formData).success(callback);
        },

        apiCall: function (url, formData, callback) {
            $http.post(adminurl + url, formData).success(callback);
        },
        searchCall: function (url, formData, i, callback) {
            $http.post(adminurl + url, formData).success(function (data) {
                callback(data, i);
            });
        },

        getOneCountry: function (id, callback) {
            $http.post(adminurl + 'country/getOne', {
                _id: id
            }).success(callback);
        },
        getLatLng: function (address, i, callback) {
            $http({
                url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyC62zlixVsjaq4zDaL4cefNCubjCgxkte4",
                method: 'GET',
                withCredentials: false,
            }).success(function (data) {
                callback(data, i);
            });
        }

    };
});
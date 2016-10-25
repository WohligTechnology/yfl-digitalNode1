global["GoogleKey"] = "AIzaSyAaHOtwPxJFy22AcWhvnfA_Vx-WXNmhvBA";
global["GoogleclientId"] = "685055590863-m10gi2bc89ddersu2uvti6qn6aldgtm7.apps.googleusercontent.com";
global["GoogleclientSecret"] = "aSJ0iY1QEfGaRacUr8EyabP4";

passport.use(new GoogleStrategy({
        clientId: GoogleclientId,
        clientSecret: GoogleclientSecret,
        callbackURL: global["env"].realHost + "/api/user/loginGoogle",
        accessType: "offline"
    },
    function (accessToken, refreshToken, profile, cb) {
        profile.googleAccessToken = accessToken;
        profile.googleRefreshToken = refreshToken;
        return cb(profile);
    }
));
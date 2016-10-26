global["GoogleKey"] = "AIzaSyC8g_yoBC83fHkiuLPIq4mOwtQgflXj3g4";
global["GoogleclientId"] = "303728456925-0iu5l5tout2n25sfa8fembk4n91g70sa.apps.googleusercontent.com";
global["GoogleclientSecret"] = "laZuqGnLiBnzPBxU1K129TCU";

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
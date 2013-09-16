conString = "mongodb://localhost/webMoves";
bdebugSocket = true;
movesUserSchema = new mongoSchema
({
    access_token    : { type: String, required: true, trim: true }
    , refresh_token : { type: String, required: true, trim: true}
    , user_id       : { type: String,  trim: true }
    , moves_user_id : {type: String, trim: true}
    , token_type    : String
    , expires_in    : Number
});
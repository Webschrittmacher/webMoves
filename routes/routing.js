module.exports = function(app)
{
    app.get("/", app.controllers.index.indexIndex);
    app.get("/auth", app.controllers.auth.authIndex);
}

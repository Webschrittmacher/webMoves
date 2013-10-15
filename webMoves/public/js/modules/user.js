define('modules/user', ['modules/core', 'models/user'], function(Core, UserModel)
{
    return {
        detect: function()
        {
            // jvt: @todo detect user (cookie, bla, etc.) and init model
            return new UserModel();
        }
    };
});
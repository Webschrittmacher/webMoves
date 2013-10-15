define.amd.jQuery = true;

require.config({
    paths: {
        'jquery': 'libs/jquery.min'
    }
});

require(['app'], function(app)
{
    app.init({
        // jvt: config
    });
});


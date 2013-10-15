define.amd.jQuery = true;

require.config({
    paths: {
        'jquery': 'libs/jquery.min'
        , 'log': 'libs/log'
        , 'underscore': 'libs/underscore'
        , 'backbone': 'libs/backbone'
    }
    , shim: {
        'underscore': {
            exports: '_'
        },
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require(['app'], function(app)
{
    app.init({
        // jvt: config
    });
});


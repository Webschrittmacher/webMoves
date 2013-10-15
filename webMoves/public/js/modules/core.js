/**
 * defines app core
 * - acts as mediator for events & actions
 *
 * @author janvt
 *
 */

define('modules/core', ['jquery', 'underscore', 'log'], function($, _, Log)
{
    var pubsubhub = $({})
        , actions = {}
    ;

    return {
        init: function() {}

        // jvt: actions repository
        , registerActions: function(oActionsHash)
        {
            for(var _sActionName in oActionsHash)
            {
                actions[_sActionName] = oActionsHash[_sActionName];
            }
        }

        , getAction: function(sName)
        {
            if('undefined' == typeof actions[sName])
            {
                Log.error('unknown action! ' + sName);
                return false;
            }

            return actions[sName];
        }

        // jvt: pubsub
        , subscribe: function()
        {
            pubsubhub.on.apply(pubsubhub, arguments);
        }

        , unsubscribe: function()
        {
            pubsubhub.off.apply(pubsubhub, arguments);
        }

        , subscribeOnce: function()
        {
            pubsubhub.one.apply(pubsubhub, arguments);
        }

        , publish: function()
        {
            pubsubhub.trigger.apply(pubsubhub, arguments);
        }
    };
});
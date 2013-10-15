/**
 * defines app core
 * - acts as mediator for events & actions
 *
 * @author janvt
 *
 */

define('modules/core', ['jquery'], function($)
{
    var pubsubhub = $({});

    return {

        // jvt: pubsub
        subscribe: function()
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
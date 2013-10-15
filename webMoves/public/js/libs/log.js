define('log', function()
{
    function handle(sType, sMessage)
    {
        var _oFunc = null;

        // jvt: is given type a native console function ? then: map it, else: use console.log
        if ("function" === typeof console[sType])
        {
            _oFunc = console[sType];
        }
        else if ("function" === typeof console.log)
        {
            _oFunc = console.log;
        }

        if (_oFunc !== null)
        {
            _oFunc.call(
                console // jvt: console expects itself as this context
                , ['[', sType.toUpperCase(), '] ', arguments[1][0]].join('') // jvt: most mobile device consoles only support logging a single string
            );
        }
    }

    return {
        error: function()
        {
            handle('error', arguments);
        }
    }
});
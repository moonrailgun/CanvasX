/**
 * Created by moonrailgun on 2016-01-20.
 */

(function(window, document){
    var CanvasX = {
        version: "0.0.1",
        core: function(opts){
            this.children = [];
        },
        create:function(opts){
            return new CanvasX.core(opts);
        }
    };

    CanvasX.core.fn = CanvasX.core.prototype;

    window.CanvasX = CanvasX;
})(window, document);
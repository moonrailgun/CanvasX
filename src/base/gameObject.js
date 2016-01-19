/**
 * Created by moonrailgun on 2016-01-17.
 */

var GameObject = function (context, opts) {
    this.x = opts.x || 0;
    this.y = opts.y || 0;
    this.angle = opts.angle || 0;
};

GameObject.fn = GameObject.prototype = {
    position: {x: this.x, y: this.y},
    components: []
};

GameObject.fn.update = function(){

};

GameObject.fn.draw = function () {

};
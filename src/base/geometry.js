/**
 * Created by moonrailgun on 2016-01-17.
 */

var Geometry = function(context, opts){
    GameObject.call(this,context,opts);
    this.context = context;

    this.archor = {x: opts.x||0 , y:opts.y || 0};
};

Geometry.prototype.moveTo = function(x,y){
    Geometry.archor = {
        x: x,
        y: y
    };
};

Geometry.prototype.update = function(){

};

Geometry.prototype.draw = function () {
    var context = Geometry.context;

};
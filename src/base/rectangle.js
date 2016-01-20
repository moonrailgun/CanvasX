/**
 * Created by moonrailgun on 2016-01-19.
 */

var Rectangle = function(context, opts){
    Geometry.call(this,context, opts);
    this.height = opts.height || 1;
    this.width = opts.width || 1;
};

Rectangle.prototype.update = function(){

};

Rectangle.prototype.draw = function(){
    Rectangle.context.rect(Rectangle.x, Rectangle.y, Rectangle.width, Rectangle.height);
};
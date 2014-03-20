Class('Button').inherits(Widget)({
    ELEMENT_CLASS : 'button',

    prototype : {
        init : function(config){
            Widget.prototype.init.call(this, config);
            this.element.html('This is a button with random color');
            this.setColor(this.color);
            this._bindEvents();
        },

        setColor : function(color){
            this.element.css('background-color', color);
        },

        _bindEvents : function(){
            var button = this;

            this.element.click(function(){
                button.setRandomColor();
            });
        },

        setRandomColor : function(){
            var colors = ['red', 'green', 'blue', 'green', 'yellow'];

            this.setColor(colors[Math.floor(Math.random()*4)]);
        }
    }
});

$(document).ready(function(){
    window.simpleWidget = new Button({
        color : 'red'
    });
    simpleWidget.render($('.wrapper'));
});
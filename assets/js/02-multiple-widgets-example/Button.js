Class('Button').inherits(Widget)({
    HTML: '<button type="button">Label</button>',
    prototype : {
        init : function(config){
            Widget.prototype.init.call(this, config);
            this.setLabel(this.label);
            this._bindEvents();
        },

        _bindEvents : function(){
            var button = this;

            this.element.click(function(event) {
                button.activate();
            });
        },

        setLabel : function(label){
            this.element.html(label);
        }
    }
});
Class('RandomImage').inherits(Widget)({
    ELEMENT_CLASS : 'random-image-app',
    prototype : {
        init : function(config){
            Widget.prototype.init.call(this, config);

            this.randomizeButton = new Button({
                label : 'Randomize...'
            });

            this.randomizeButton.render(this.element);

            this._bindEvents();
        },

        _bindEvents : function(){
            var randomImageApp = this;

            this.randomizeButton.bind('activate', function(){
                randomImageApp._randomizeImage();
            });
        },

        _randomizeImage : function(){
            var randomImageApp = this;

            this._getNewImage(function(imageUrl){
                randomImageApp.imageDisplay.setImage(imageUrl);
            });
        },

        _getNewImage : function(callback){

            $.getJSON('http://www.reddit.com/r/awww.json?only=images', function(redditData){

                var redditPosts     = redditData.data.children,
                    limit           = redditPosts.length-1,
                    randomPostIndex = Math.floor(Math.random()*limit),
                    randomPost      = redditPosts[randomPostIndex],
                    randomImageUrl  = randomPost.data.url;

                console.log('>>', randomImageUrl);

            });
        }
    }
});


$(document).ready(function(){
    window.randomImage = new RandomImage();
    randomImage.render($('.wrapper'));
});
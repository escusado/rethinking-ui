Class('RandomImage').inherits(Widget)({

    HTML : '<div><img src="http://i.imgur.com/oViUOc2.jpg"/></div>',

    ELEMENT_CLASS : 'random-image-app',

    prototype : {
        init : function(config){
            Widget.prototype.init.call(this, config);

            this.randomizeButton = new Button({
                label : 'Randomize...'
            });

            this.imageEl = this.element.find('img');

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
                randomImageApp.imageEl.attr('src', imageUrl);
            });
        },

        _getNewImage : function(callback){
            $.getJSON('http://www.reddit.com/r/awww.json?only=images', function(redditData){

                var redditPosts, limit, randomPostIndex, randomPost, randomImageUrl;

                redditPosts = redditData.data.children.filter(function(post){
                     return (post.data.url.indexOf('.jpg') > -1);
                });

                limit           = redditPosts.length-1;
                randomPostIndex = Math.floor(Math.random()*limit);
                randomPost      = redditPosts[randomPostIndex];
                randomImageUrl  = randomPost.data.url;
                console.log('>', randomImageUrl);
                callback(randomImageUrl);
            });
        }
    }
});


$(document).ready(function(){
    window.randomImage = new RandomImage();
    randomImage.render($('.wrapper'));
});
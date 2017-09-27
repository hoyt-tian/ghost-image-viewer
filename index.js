(function(global, $){
    var ImageViewer = function(selector, container){
        this.construct(selector || '.content[role=main] img', container || document.body);
    };
    ImageViewer.prototype.toolbar = function(img){
        var component = $('<section/>').css({
            left:0,
            top:0,
            color:'#FFF',
            height:'10%'
        })
        .append($('<button>放大</button>').click(function(e){
            img.css('height', parseInt(img.css('height')) + 20 + 'px');
            e.stopPropagation();
        }).css({
            cursor:'pointer',
            verticalAlign:'middle'
        }))
        .append($('<button>缩小</button>').click(function(e){
            var h = parseInt(img.css('height')) - 20;
            img.css('height', (h<40?40:h) + 'px');
            e.stopPropagation();            
        }).css({
            cursor:'pointer',
            verticalAlign:'middle'
        }))
        .append($("<button>退出</buton>").css(
            {
                cursor:'pointer',
                verticalAlign:'middle'
            }
        ));
        return {
            component:component
        };
    };
    ImageViewer.prototype.canvas = function(){
        var zimag = $('<img />');
        var component = $('<section />').append(zimag).css({
            height:'90%',
            verticalAlign:'middle',
            overflow:'auto'
        });
        return {
            component: component,
            img : zimag
        };
    };
    ImageViewer.prototype.construct = function(selector, container){
        var canvas = this.canvas();
        var toolbar = this.toolbar(canvas.img);        

        var mask = $('<section />').css(ImageViewer.prototype.maskCSS || {
            position:'fixed',
            left:0,
            top:0,
            backgroundColor:'#000',
            textAlign:'center',
            width:'100%',
            height:'100%',
            zIndex:999,
            display:'none'
        }).click(function(event){
                if(event.target != canvas.img[0]){
                    mask.hide();
                    document.scrollingElement.style.overflow='auto';                    
                }
        });
       
        mask.append(toolbar.component)
            .append(canvas.component);

        this.mountTo(container, mask);

        this.queryAll(selector).css('cursor','pointer').click(function(event){
            canvas.img.attr('src', this.src);
            document.scrollingElement.style.overflow='hidden';        
            mask.show();
        });
    };
    ImageViewer.prototype.mountTo = function(container, content){
        $(container).append(content);
    };
    ImageViewer.prototype.queryAll = function(selector){
        return $(selector);
    };
    var view = new ImageViewer('.content[role=main] img', document.body);
})(window, jQuery);
$(document).ready(function() {
    $(window).on("load", function() {
        imageLocation();
        var dataimg = {
            "data": [{ "src": "8.jpg" }, { "src": "9.jpg" }, { "src": "23.jpg" }, { "src": "13.jpg" },
                { "src": "14.jpg" }, { "src": "15.jpg" }, { "src": "16.jpg" }, { "src": "22.jpg" }, { "src": "17.jpg" },
                { "src": "18.jpg" }
            ]
        };
        window.onscroll = function() {
            if (scrollside()) {
                $.each(dataimg.data, function(index, value) {
                    var box = $("<div>").addClass("box").appendTo($(".container"));
                    var content = $("<div>").addClass("content").appendTo(box);
                    $("<img>").attr("src", "image/" + $(value).attr("src")).appendTo(content);
                });
                imageLocation();
            }
        }
    });
$(window).resize(function(){
        setTimeout(function() {
          imageLocation();
        }, 200);
        
    });
});

function scrollside() {
    var box = $(".box");
    var lastboxheight = box.last().get(0).offsetTop + Math.floor(box.last().height() / 2);
    var documentheight = $(document).width();
    var scrollheight = $(window).scrollTop();
    return (lastboxheight < documentheight + scrollheight ? true : false);
}

function imageLocation() {
    var box = $(".box");
    var boxwidth = box.eq(0).width();
    var num = Math.floor($(window).width() / boxwidth);
    var boxArr = [];

    box.each(function(index, value) {
        $(value).removeAttr('style'); 
        var boxheight = box.eq(index).height();
        if (index < num) {
            boxArr[index] = boxheight;

        } else {
            var minboxheight = Math.min.apply(null, boxArr);
            var minboxIndex = $.inArray(minboxheight, boxArr);
            $(value).css({
                "position": "absolute",
                "top": minboxheight,
                "left": box.eq(minboxIndex).position().left
            });

            boxArr[minboxIndex] += box.eq(index).height();
        }
    });
}

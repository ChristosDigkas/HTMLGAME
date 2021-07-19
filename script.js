var cardValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var totalValue = 0;
var counter = 0;

//card flip function start
function rotateCard(btn) {
    if (counter == 5) return;
    var $card = $(btn).closest(".card-container");

    var curPosition = parseInt(getSecondPart($(btn).attr("id")));
    curPosition--;

    if ($card.hasClass("hover")) {
        $card.removeClass("hover");
        totalValue = totalValue - cardValues[curPosition];
        counter--;
    } else {
        $card.addClass("hover");
        totalValue = totalValue + cardValues[curPosition];
        counter++;
    }
    console.log(totalValue);
}
// card flip funtion end

//random function start
function shuffle() {
    totalValue = 0;
    counter = 0;
    $(".shuffleImg").each(function () {
        var divs = $(this).find(".images");
        //        console.log(divs);
        for (var i = 0; i < divs.length; i++) $(divs[i]).remove();

        var i = divs.length;
        if (i == 0) return false;
        while (--i) {
            var j = Math.floor(Math.random() * (i + 1));
            var tempi = divs[i];
            var tempj = divs[j];
            divs[i] = tempj;
            divs[j] = tempi;
        }

        for (var i = 0; i < divs.length; i++) {
            $(divs[i]).appendTo($("#cardbox" + (i + 1)));
            var actualvalue = $(divs[i]).attr("id");
            cardValues[i] = parseInt(actualvalue);
        }
        console.log(cardValues);
    });
}

$(window).load(function () {
    shuffle();
});
//random funtion end

function reset() {
    $(".shuffleImg").each(function () {
        $(this).find(".hover").removeClass("hover");
    });
    window.setTimeout(function () {
        shuffle();
    }, 800);
}

function getSecondPart(str) {
    return str.split("x")[1];
}

//buttons
var firstButton = $("#buttOne");
var secondButton = $("#buttTwo");
var thirdButton = $("#buttThree");
var totalButton = $("#bottomButton");

//input
var firstInput = $("#incomingTextOne");
var secondInput = $("#incomingTextTwo");
var thirdInput = $("#incomingTextThree");

//output
var sumsOne = $("#outGoingOne");
var sumsTwo = $("#outGoingTwo");
var sumsThree = $("#outGoingThree");
var finalSum = $("#totalSum");

//filled outputs




//goomba return
firstButton.click(function () {
    //    console.log(firstInput.val());
    var firstSums = parseInt(firstInput.val()) * 5;
    sumsOne.html("$" + parseInt(firstSums));
    firstInput.val("");
});

//bob'omb return
secondButton.click(function () {
    var secondSums = parseInt(secondInput.val()) * 7;
    sumsTwo.html("$" + parseInt(secondSums));
    secondInput.val("");
});

//cheepCheep return
thirdButton.click(function () {
    var thirdSums = parseInt(thirdInput.val()) * 11;
    sumsThree.html("$" + parseInt(thirdSums));
    thirdInput.val("");
})

//total sum
$(totalButton).click(function () {
    var filledSumOne = sumsOne.html();
    var filledSumTwo = sumsTwo.html();
    var filledSumThree = sumsThree.html();


    finalSum.html("$" + (removeDollarOne(filledSumOne) + removeDollarTwo(filledSumTwo) + removeDollarThree(filledSumThree)));
});


function removeDollarOne(str) {
    var newString = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== '$') {
            newString += str[i];
        }
    }
    return parseInt(newString)

}

function removeDollarTwo(str) {
    var newString = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== '$') {
            newString += str[i];
        }
    }
    return parseInt(newString)

}

function removeDollarThree(str) {
    var newString = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== '$') {
            newString += str[i];
        }
    }
    return parseInt(newString)

}

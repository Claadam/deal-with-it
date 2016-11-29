var button = $(".deal-with-it-button")

$(function() {  
  button.click(dealWithIt)
})

function dealWithIt() {
    console.log("hello")
    $("#glasses").animate({left: "+=100"}, 15)
    $("#glasses").animate({top: "+=315"}, 1500)

}
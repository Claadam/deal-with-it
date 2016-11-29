var button = $(".deal-with-it-button")

$(function() {  
  button.click(dealWithIt())
})

function dealWithIt() {
    $("#glasses").animate({height: "+=50"}, 1500)
}
var button = $(".deal-with-it-button")

$(function() {  
  button.click(dealWithIt())
})

function dealWithIt() {
    $("#glasses").animate({down: "+=50"}, 1500)
}
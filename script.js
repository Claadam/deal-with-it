var button = $(".deal-with-it-button")

$(function() {  
  button.click(dealWithIt())
})

function dealWithIt() {
  console.log("helo")
    $("#glasses").animate({bottom: "+=50"}, 1500)
}
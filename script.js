var button = $(".deal-with-it-button")

$(function() {  
  button.click(dealWithIt)
})

function dealWithIt() {
  console.log("hello")
    $("#glasses").animate({top: "+=250"}, 1500)
}
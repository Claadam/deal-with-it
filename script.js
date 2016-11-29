var button = $()

$(function() {
  button.click(dealWithIt)
})

function dealWithIt() {
    $("#glasses").animate({left: +}, 1500)
}
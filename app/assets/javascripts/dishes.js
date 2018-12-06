
//form to dynamically add ingredients without having to change the page
$(function(){
  $('#new_ingredients').on("submit", function(event){
    event.preventDefault();
    $.ajax({
        type:"PATCH",
        url: this.action,
        data: $(this).serialize,
        success: function(response){
            let $ul = $("div.ingredients ul")
            $ul.append(response);
        }
    }) 
  });
});
$(document).ready(function() {
    var events = ["keyup", "blur"];
    events.map(function(event) {
        $("#micropost_content").on(event, function() {
            var count = $("#micropost_content").val().length;
            $(".characters_count").html(count.toString());
            if (count > 140) {
                $(".count_tip").css("color", "#FF0000");
            } else {
                $(".count_tip").css("color", "#000000");
            }
        });
    });
});

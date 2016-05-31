(function(window, undefined) {
    var showModal = function(selecter) {
        $(selecter).css('display', 'block');
        $(".modal-fog").css({
            visibility:"visible",
            opacity:0.3
        });
    }
    function showBookModalById(id) {
        // TODO getDataById
        showModal("#book");
    }
    jQuery(document).ready(function($) {
        (function bookButtonEvent() {
            $("#cinema-list").delegate('.cinema-book', 'click', function(event) {
                var id = $(event.target).closest('.cinema-item').data("id");
                showBookModalById(id);
            });
        })();
    });
})(window);
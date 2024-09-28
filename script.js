$(document).ready(function () {
    // Handle hover effect for grid items
    $(".grid-item").each(function () {
        var $itemTitle = $(this).find(".grid-item-title");

        // Show title on mouse enter
        $(this).on("mouseenter", function () {
            if ($(this).data("title")) {
                $itemTitle.html("<span>" + $(this).data("title") + "</span>");
                $itemTitle.addClass("visible");
            }
        });

        // Move title on mouse move
        $(document).on("mousemove", function (e) {
            $(".grid-item-title.visible").css({
                left: e.clientX - 10,
                top: e.clientY + 25
            });
        });

        // Hide title on mouse leave
        $(this).on("mouseleave", function () {
            $itemTitle.removeClass("visible");
        });
    });

    // Handle text reveal on scroll
    $(window).on("scroll", function () {
        $(".grid-item").each(function () {
            var $this = $(this);
            var offset = $this.offset().top;
            var height = $this.outerHeight();
            var scrollPos = $(window).scrollTop() + $(window).height();

            if (scrollPos > offset && $(window).scrollTop() < offset + height) {
                $this.find(".grid-item-title").addClass("reveal");
            } else {
                $this.find(".grid-item-title").removeClass("reveal");
            }
        });
    }).trigger("scroll"); // Trigger scroll event on page load
});

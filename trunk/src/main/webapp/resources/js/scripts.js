! function(a) {
    "use strict";

    function b() {
    	angular.element(document).ready(function () {
        c(), e(), f(), j(), a(".feature-slider").owlCarousel({
            autoPlay: 1e4,
            items: 4,
            itemsDesktop: [1199, 4],
            itemsDesktopSmall: [979, 3],
            itemsTablet: [768, 2],
            itemsTabletSmall: [600, 1],
            slideSpeed: 300,
            navigation: !0,
            pagination: !1,
            navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        }), a(".view-grid").on("click", function() {
            a(".categories-content .content").attr("class", "content grid"), a(".grid").addClass("fade-1"), a(".list").removeClass("fade-2"), a(this).addClass("active"), a(".view-list").removeClass("active")
        }), a(".view-list").on("click", function() {
            a(".categories-content .content").attr("class", "content list"), a(".list").addClass("fade-2"), a(".grid").removeClass("fade-1"), a(this).addClass("active"), a(".view-grid").removeClass("active")
        });
        var b = a(".list-account-info .list-item .toggle-list");
        a("html").on("click", function() {
            b.stop().removeClass("toggle-message-add"), a(".list-account-info .item-click").stop().removeClass("active-ac")
        }), a(".list-account-info .list-item").on("click", function(a) {
            a.stopPropagation()
        }), a(".list-account-info .item-click").on("click", function() {
            0 == a(this).hasClass("active-ac") && (a(".list-account-info .item-click").removeClass("active-ac"), b.stop().removeClass("toggle-message-add")), a(this).toggleClass("active-ac"), a(this).siblings(".toggle-list").stop().toggleClass("toggle-message-add")
        }), a.each(a(".content-bar"), function() {
            var b = a(this).find("li").outerWidth(),
                c = a(this).find("li").length;
            a(this).find("ul").width(b * c + 20)
        }), a(".current-progress").appear(function() {
            a(".current-progress .progress-run").addClass("progress-run-add");
            var b = a(".current-progress .count").text();
            a(".progress-run-add").width(b)
        }), a(".percent-learn").appear(function() {
            a(this).siblings(".percent-learn-bar").find(".percent-learn-run").addClass("percent-learn-run-add");
            var b = a(this).text(),
                c = a(this).siblings(".percent-learn-bar").find(".percent-learn-run-add");
            c.width(b)
        });
        var g, h, k, l, n;
        a(".form-checkout .next").on("click", function() {
            return n ? !1 : (n = !0, g = a(this).closest("fieldset"), h = a(this).closest("fieldset").next(), a(".form-checkout #bar li").eq(a("fieldset").index(h)).addClass("active"), h.show(), g.animate({
                opacity: 0
            }, {
                step: function(a) {
                    k = 50 * a + "%", l = 1 - a, g.css({
                        opacity: "0"
                    }), h.css({
                        left: k,
                        opacity: l
                    })
                },
                duration: 800,
                complete: function() {
                    g.hide(), n = !1
                },
                easing: "easeInOutBack"
            }), void 0)
        }), a(".submit").on("click", function() {
            return !1
        }), d(), a("#page-wrap").append('<div class="overlayForm"></div>'), a(".take-this-course").on("click", function() {
            return a(".form-checkout, .overlayForm").fadeIn(400), !1
        }), a(".closeForm").on("click", function() {
            a(".form-checkout, .overlayForm").fadeOut(400)
        }), a(".closeForm").click(), a(".nav-tabs").length && a.each(a(".nav-tabs"), function() {
            var b = a(this).find("a"),
                c = a(this),
                d = c.find(".active").children("a").position().left,
                e = c.find(".active").children("a").width();
            c.append('<li class="tabs-hr"></li>'), a(".tabs-hr").css({
                left: d,
                width: e
            }), b.on("click", function() {
                var b = a(this).position().left,
                    c = a(this).width();
                a(".tabs-hr").animate({
                    left: b,
                    width: c
                }, 500, "easeInOutExpo")
            })
        });
        var o = a("footer#footer.footer-style-2"),
            p = o.height();
        o.appendTo("body"), o.siblings("#page-wrap").css("marginBottom", p), a(".question-sidebar ul, .list-message, .list-notification").wrap('<div class="list-wrap"></div>');
    	})}

    function c() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? !1 : !0
    }

    function d() {
        var b = a(window).height(),
            c = a(".form-checkout .container").height(),
            d = (b - c) / 2;
        a(".form-checkout").css("top", d), a(".form-checkout .form-body").height(a(".form-checkout fieldset").height())
    }

    function e() {
        a(".mc-select").find("select.select").each(function() {
            var b = a(this).find("option:selected").text();
            a(this).css({
                "z-index": 10,
                opacity: 0,
                "-khtml-appearance": "none"
            }).after('<span class="select">' + b + "</span>" + '<i class="fa fa-angle-down"></i>').change(function() {
                var b = a("option:selected", this).text();
                a(this).next().text(b)
            })
        })
    }

    function f() {
        var b = a(".top-nav-list").find(".list-item-body"),
            c = b.closest(".top-nav-list").width() - 1;
        b.width(c), a(".top-nav-list").children("li").hasClass("active") && a(".learning-section").toggleClass("learning-section-fly").css("paddingRight", c), a(".top-nav-list").find(".outline-learn, .discussion-learn, .note-learn").on("click", "> a", function(b) {
            b.preventDefault(), 0 == a(this).parent().hasClass("active") && a(".top-nav-list").children("li").removeClass("active"), a(this).parent().toggleClass("active"), a(this).parent().hasClass("active") ? a(".learning-section").toggleClass("learning-section-fly").css("paddingRight", c) : a(".learning-section").removeClass("learning-section-fly").css("paddingRight", "0")
        }), a("html").on("click", function() {
            b.removeClass("item-fly"), b.parent("li").removeClass("active"), a(".learning-section").removeClass("learning-section-fly").css("paddingRight", "0")
        }), a(".top-nav-list, .list-item-body").on("click", function(a) {
            a.stopPropagation()
        })
    }

    function g() {
        var b = a(window).height(),
            c = window.innerWidth;
        if (a(".learn-section").css("min-height", b), 992 > c) a(".question-content-wrap").find(".question-sidebar").height("auto"), a(".question-content-wrap").find(".score-sb").find(".list-wrap").height("auto").css("max-height", "300px");
        else if (c >= 992) {
            var d = a(".question-content-wrap").find(".question-content").height() + 30,
                e = d - 90;
            a(".question-content-wrap").find(".score-sb").find(".list-wrap").height(e).css("max-height", "none"), a(".question-content-wrap").find(".question-sidebar").height(d)
        }
    }

    function h() {
        if (a(".list-item-body").length) {
            var b = a(window).height() - a(".list-item-body").css("margin-top").split("px")[0];
            a(".list-item-body").height(b)
        }
    }

    function i() {
        if (c()) {
            var b = a(".question-sidebar .list-wrap, .messages .list-wrap, .notification .list-wrap, .list-item-body, .table-wrap .tbody");
            b.perfectScrollbar({
                maxScrollbarLength: 150
            }), b.perfectScrollbar("update"), a(".content-bar").perfectScrollbar({
                maxScrollbarLength: 150,
                suppressScrollY: !0,
                useBothWheelAxes: !0
            }), a(".content-bar").perfectScrollbar("update")
        }
        a(".content-bar").perfectScrollbar({
            maxScrollbarLength: 150,
            suppressScrollY: !0,
            useBothWheelAxes: !0
        }), a(".content-bar").perfectScrollbar("update")
    }

    function j() {
        i(), a(window).on("load", function() {
            if (a(".content-bar").length > 0) {
                var b = a(".content-bar").find(".current").position().left,
                    c = a(".content-bar").find(".current").prev().width();
                setTimeout(function() {
                    a(".content-bar").animate({
                        scrollLeft: b - c
                    }, 400)
                }, 100)
            }
        })
    }

    function k() {
        function b(b) {
            if (b.files && b.files[0]) {
                var c = new FileReader;
                c.onload = function(b) {
                    a(".changes-avatar").find("img").attr("src", b.target.result).width(140)
                }, c.readAsDataURL(b.files[0])
            }
        }
        a(".up-file").delegate("a", "click", function(b) {
            b.preventDefault(), a(this).siblings('input[type="file"]').trigger("click")
        }), a(".up-file").delegate('input[type="file"]', "change", function() {
            var c = a(this).val().replace(/\\/g, "/").replace(/.*\//, "");
            a(this).siblings('input[type="hidden"]').val(c), b(this)
        })
    }

    function l() {
    	angular.element(document).ready(function () {
        a("#slide-home").length && a("#slide-home").owlCarousel({
            autoPlay: 1e4,
            navigation: !1,
            pagination: !0,
            singleItem: !0,
            mouseDrag: !1,
            addClassActive: !0,
            transitionStyle: "fade"
        })})
    }

    function m() {
        if (a("#slide-home")) {
            var b = a(".slide-cn").innerWidth(),
                c = a(".item-inner").width(),
                d = a(".item-inner").height(),
                e = b / c,
                f = c / d,
                g = b / f;
            a(".slide-item").css({
                height: g
            }), a(window).width() <= 1200 ? a(".item-inner").css({
                "-webkit-transform": "scale(" + e + ")",
                "-moz-transform": "scale(" + e + ")",
                "-ms-transform": "scale(" + e + ")",
                transform: "scale(" + e + ")"
            }) : a(".item-inner").css({
                "-webkit-transform": "scale(1)",
                "-moz-transform": "scale(1)",
                "-ms-transform": "scale(1)",
                transform: "scale(1)"
            })
        }
    }
    a(document).ready(function() {
        b(), g(), k(), h(), i(), a(".nav-tabs").wrap('<div class="nav-tabs-wrap"></div>'), window.innerWidth < 1200 && (a(".menu-item-has-children").on("click", "> a", function(b) {
            b.preventDefault(), a(this).next().slideToggle(300), a(this).toggleClass("mobile-active")
        }), a(".open-menu").on("click", function() {
            a(this).toggleClass("toggle-active"), a(".navigation .menu, .search-box").slideToggle(300)
        }), a("html").on("click", function() {
            a(".open-menu").removeClass("toggle-active"), a(".navigation .menu, .search-box").slideUp(300)
        }), a(".navigation .menu, .open-menu").on("click", function(a) {
            a.stopPropagation()
        }))
    }), a(window).load(function() {
        m()
    }), a(window).on("resize", function() {
    	b(), g(), h(), i(), l(), d(), m()
    }).trigger("resize")
}(jQuery);
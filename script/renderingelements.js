"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var function_1 = require("./function");
var jsonfile_1 = require("./jsonfile");
var main_content = document.getElementsByClassName("main_content");
for (var i = 0; i < jsonfile_1.cards.length; i++) {
    var main_card = "";
    if (jsonfile_1.cards[i].expired === true) {
        main_card += "<div class=\"expired\">\n                            Expired\n                       </div>";
    }
    // let logoimg = _createElement('img', ['']);
    // logoimg.setAttribute('src', cards[i].img);
    main_card +=
        "<div class=\"image\"><img src=\"".concat(jsonfile_1.cards[i].img, "\" alt=\"\"></div>");
    var temp = "<p class=\"tname\">".concat(jsonfile_1.cards[i].topic_name, "</p>");
    if (jsonfile_1.cards[i].star === true) {
        temp += '<img src="quantum_screen_assets/icons/favourite.svg" alt="">';
    }
    else {
        temp += '<img src="quantum_screen_assets/icons/favourite.svg" alt="" class="low">';
    }
    var td = "<div class=\"topic_name\">\n                    ".concat(temp, "\n                </div> ");
    temp = "<span class=\"sname\">".concat(jsonfile_1.cards[i].sname, "</span>");
    temp += "<span class=\"grade\">".concat(jsonfile_1.cards[i].grade, "  <span style=\"color:green\">").concat(jsonfile_1.cards[i].grade_, "</span></span>");
    td +=
        "<div class=\"subject_grade\">\n                    ".concat(temp, "\n                </div>");
    if (jsonfile_1.cards[i].topic_details.unit !== 0) {
        temp =
            "<p class=\"tdetails\">\n                        <span class=\"subdetails\">\n                            <span class=\"num\">".concat(jsonfile_1.cards[i].topic_details.unit, "</span> Units\n                        </span>\n                        <span class=\"subdetails\">\n                            <span class=\"num\">").concat(jsonfile_1.cards[i].topic_details.lession, "</span> Lessons \n                        </span>\n                        <span class=\"subdetails\">\n                            <span class=\"num\">").concat(jsonfile_1.cards[i].topic_details.topic, "</span> Topics\n                        </span>                     \n                    </p>");
    }
    else {
        temp = '';
    }
    temp +=
        "\n                        ".concat(jsonfile_1.cards[i].chapters.length != 0
            ? "\n                            <select name=\"ch_name\" id=\"\">\n                            ".concat(jsonfile_1.cards[i].chapters.map(function (chp) {
                return "\n                                <option value=\"\">".concat(chp, "</option>\n                                ");
            }).join(''), "\n                            ")
            : "<select name=\"ch_name\" id=\"\" style=\"color:gray;\">\n                                <option value=\"\" style=\"color:gray;\">No class Available</option>", "   \n                    </select>");
    var tt1 = '';
    if (jsonfile_1.cards[i].total_student != 0) {
        tt1 += "<span class=\"students\">".concat(jsonfile_1.cards[i].total_student, " Students</span>");
    }
    var tt2 = '';
    if (jsonfile_1.cards[i].date.length != 0) {
        tt2 += "<span class=\"date\">".concat(jsonfile_1.cards[i].date[0], " - ").concat(jsonfile_1.cards[i].date[1], "</span>");
    }
    temp +=
        "<p class=\"studentanddate\">\n                        ".concat(tt1, "\n                        ").concat(tt2, "\n                    </p>");
    td += "<div class=\"topic_details\">\n                ".concat(temp, "\n            </div>");
    var contentdiv = "<div class=\"content\">\n        ".concat(td, "\n    </div> \n    ");
    main_card += contentdiv;
    main_card +=
        "<div class=\"links\">\n                <img src=\"".concat(jsonfile_1.cards[i].icons[0], "\" alt=\"\" class=\"contenticon\">\n                <img src=\"").concat(jsonfile_1.cards[i].icons[1], "\" alt=\"\" class=\"contenticon\">\n                <img src=\"").concat(jsonfile_1.cards[i].icons[2], "\" alt=\"\" class=\"contenticon\">\n                <img src=\"").concat(jsonfile_1.cards[i].icons[3], "\" alt=\"\" class=\"contenticon\">\n            </div>");
    var Main_card = (0, function_1._createElement)('div', ['main_card']);
    // console.log(Main_card)
    Main_card.innerHTML = main_card;
    (_a = main_content[0]) === null || _a === void 0 ? void 0 : _a.appendChild(Main_card);
}
var anouncdiv = document.getElementsByClassName("anouncment_content");
for (var i = 0; i < jsonfile_1.announcment.length; i++) {
    var t = "<div class=\"anounc_title\">\n        <div class=\"PA\">\n            <p><span style=\"color:gray;\">PA: </span>".concat(jsonfile_1.announcment[i].PA, "</p> \n            ").concat(jsonfile_1.announcment[i].status
        ? "<img src=\"quantum_screen_assets/icons/check_circle_ic_icon.svg\" alt=\"\" style=\"height:15px; width:18px; margin:auto 0px;\">"
        : "<img src=\"quantum_screen_assets/icons/circle_minus_icon.svg\" alt=\"\" style=\"height:15px; width:18px; margin:auto 0px;\">", "\n            \n        </div>\n        <p>").concat(jsonfile_1.announcment[i].message, "</p>\n    </div>");
    if (jsonfile_1.announcment[i].course.length != 0) {
        t +=
            "<p style=\"color:gray;\">".concat(jsonfile_1.announcment[i].course, "</p>");
    }
    t +=
        "<div class=\"anounc_filesanddate\" style=\"color:gray;\">\n        ".concat(jsonfile_1.announcment[i].files > 0
            ? "<p><img src=\"quantum_screen_assets/icons/attachmenticon.svg\" alt=\"\" style=\"height:15px; width:10px\"> ".concat(jsonfile_1.announcment[i].files, " <span> files are attached</span></p>")
            : "<p></p>", "\n        <p class=\"time\">").concat(jsonfile_1.announcment[i].time, "</p>\n    </div>");
    var Div = void 0;
    if (jsonfile_1.announcment[i].status) {
        Div = (0, function_1._createElement)('div', ['subanounce']);
    }
    else {
        Div = (0, function_1._createElement)('div', ['subanounce', 'subanouncenotchecked']);
    }
    Div.innerHTML = t;
    (_b = anouncdiv[0]) === null || _b === void 0 ? void 0 : _b.appendChild(Div);
}
var notifidiv = document.getElementsByClassName("notification_content");
for (var i = 0; i < jsonfile_1.notification.length; i++) {
    var t = "<div class=\"notifi_meesage\">\n        <p>".concat(jsonfile_1.notification[i].message, "</p>\n        ").concat(jsonfile_1.notification[i].status
        ? "<img src=\"quantum_screen_assets/icons/check_circle_ic_icon.svg\" alt=\"\" style=\"height:15px; width:18px; margin:auto 0px;\">"
        : "<img src=\"quantum_screen_assets/icons/circle_minus_icon.svg\" alt=\"\" style=\"height:15px; width:18px; margin:auto 0px;\">", "\n    </div>");
    if (jsonfile_1.notification[i].course.length != 0) {
        t +=
            "<p><span style=\"color:gray;\">Course: </span>".concat(jsonfile_1.notification[i].course, "</p>");
    }
    t +=
        "<div class=\"notifi_date\" style=\"color:gray;\">        \n        <p class=\"time\">".concat(jsonfile_1.notification[i].time, "</p>\n    </div>");
    var Div = void 0;
    if (jsonfile_1.notification[i].status) {
        Div = (0, function_1._createElement)('div', ['subnoti']);
    }
    else {
        Div = (0, function_1._createElement)('div', ['subnoti', 'subnotichecked']);
    }
    Div.innerHTML = t;
    (_c = notifidiv[0]) === null || _c === void 0 ? void 0 : _c.appendChild(Div);
}

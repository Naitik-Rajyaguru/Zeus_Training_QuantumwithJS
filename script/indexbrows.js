(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
// have div.main_content
// will create:
// div.main_card, 
//     div.image,
//     div.content,
//         div.topic_name,
//             p.tname,
//             img
//         div.subject_grade,
//             span.sname
//             span.grade
//         div.topic_details,
//             p.tdetails
//                 span.subdetails,
//                 span.subdetails,
//                 span.subdetails,
//             select
//                 option1,
//                 option2...,
//             p.studentanddate,
//                 span.students,
//                 span.date,
//     div.links
//         img,
//         img,
//         img,
//         img
Object.defineProperty(exports, "__esModule", { value: true });
exports._createElement = void 0;
function _createElement(element, clas_name) {
    var main_card = document.createElement("".concat(element));
    for (var i = 0; i < clas_name.length; i++) {
        main_card.classList.add("".concat(clas_name[i]));
    }
    return main_card;
}
exports._createElement = _createElement;

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notification = exports.announcment = exports.cards = void 0;
var icons = ["quantum_screen_assets/icons/preview.svg", "quantum_screen_assets/icons/manage course.svg", "quantum_screen_assets/icons/grade submissions.svg", "quantum_screen_assets/icons/reports.svg"];
exports.cards = [
    {
        topic_name: "Acceleration",
        img: "quantum_screen_assets/images/imageMask-1.png",
        sname: "Physics",
        grade: "7",
        grade_: "+2",
        topic_details: {
            unit: 6,
            lession: 8,
            topic: 45
        },
        chapters: ["Mr. Frank's Class B", "Mr. Frank's Class A"],
        total_student: 50,
        date: ["21-jan-2020", "20-aug-2020"],
        icons: icons,
        expired: false,
        star: true,
    },
    {
        topic_name: "Displacement, Velocity and Speed",
        img: "quantum_screen_assets/images/imageMask-2.png",
        sname: "Physics 2",
        grade: "6",
        grade_: "+3",
        topic_details: {
            unit: 2,
            lession: 15,
            topic: 20
        },
        chapters: [],
        total_student: 0,
        date: [],
        icons: icons,
        expired: false,
        star: true,
    },
    {
        topic_name: "Introduction to Biology: Micro organisms and how they affec...",
        img: "quantum_screen_assets/images/imageMask-3.png",
        sname: "Biology",
        grade: "4",
        grade_: "+1",
        topic_details: {
            unit: 5,
            lession: 16,
            topic: 22,
        },
        chapters: ["All classes", "Mr. Frank's Class A", "Mr. Frank's Class B"],
        total_student: 300,
        date: [],
        icons: icons,
        expired: false,
        star: true,
    },
    {
        topic_name: "Introduction to High School Mathematics",
        img: "quantum_screen_assets/images/imageMask.png",
        sname: "Mathematics",
        grade: "8",
        grade_: "+3",
        topic_details: {
            unit: 0,
            lession: 0,
            topic: 0,
        },
        chapters: ["Mr. Frank's Class A"],
        total_student: 44,
        date: ["14-oct-2019", "14-jan-2020"],
        icons: icons,
        expired: true,
        star: false,
    },
];
exports.announcment = [
    {
        PA: 'Wilson kumar',
        message: 'No class held till 21st nov',
        status: true,
        course: '',
        files: 2,
        time: '15-sep-2018 at 07:21 pm',
    },
    {
        PA: 'Wilson kumar',
        message: 'No class held till 21st nov this is bigger anonuncment to test things',
        status: false,
        course: 'Course: Maths 101',
        files: 0,
        time: '15-sep-2018 at 07:21 pm',
    },
    {
        PA: 'Wilson kumar',
        message: 'No class held till 21st nov',
        status: true,
        course: '',
        files: 2,
        time: '15-sep-2018 at 07:21 pm',
    },
    {
        PA: 'Wilson kumar',
        message: 'No class held till 21st nov',
        status: true,
        course: '',
        files: 2,
        time: '15-sep-2018 at 07:21 pm',
    },
    {
        PA: 'Wilson kumar',
        message: 'No class held till 21st nov',
        status: true,
        course: '',
        files: 2,
        time: '15-sep-2018 at 07:21 pm',
    },
    {
        PA: 'Wilson kumar',
        message: 'No class held till 21st nov',
        status: true,
        course: '',
        files: 2,
        time: '15-sep-2018 at 07:21 pm',
    },
    {
        PA: 'Wilson kumar',
        message: 'No class held till 21st nov',
        status: true,
        course: '',
        files: 2,
        time: '15-sep-2018 at 07:21 pm',
    },
    {
        PA: 'Wilson kumar',
        message: 'No class held till 21st nov',
        status: true,
        course: '',
        files: 2,
        time: '15-sep-2018 at 07:21 pm',
    }
];
exports.notification = [
    {
        message: 'Licance to introduce algebra assigned to your school today',
        course: 'Advance mathematics',
        time: '15-sep-2018 at 5:01 pm',
        status: false,
    },
    {
        message: 'Licance to introduce algebra assigned to your school today',
        course: '',
        time: '15-sep-2018 at 5:01 pm',
        status: true,
    },
    {
        message: 'Licance to introduce algebra assigned to your school today',
        course: 'Advance mathematics',
        time: '15-sep-2018 at 5:01 pm',
        status: false,
    },
    {
        message: 'Licance to introduce algebra assigned to your school today',
        course: 'Advance mathematics',
        time: '15-sep-2018 at 5:01 pm',
        status: false,
    },
    {
        message: 'Licance to introduce algebra assigned to your school today',
        course: 'Advance mathematics',
        time: '15-sep-2018 at 5:01 pm',
        status: true,
    },
];

},{}],3:[function(require,module,exports){
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

},{"./function":1,"./jsonfile":2}]},{},[3]);

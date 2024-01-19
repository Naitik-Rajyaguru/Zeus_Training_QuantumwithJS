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

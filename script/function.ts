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

export function _createElement(element:string, clas_name:string[]) :HTMLElement{
    let main_card = document.createElement(`${element}`);
    for(let i=0; i<clas_name.length; i++){
        main_card.classList.add(`${clas_name[i]}`);
    }
    
    return main_card;    
}


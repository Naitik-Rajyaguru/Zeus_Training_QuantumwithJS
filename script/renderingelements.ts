import {_createElement} from "./function";
import {cards, announcment, notification} from "./jsonfile"

let main_content = document.getElementsByClassName("main_content");
for (let i=0; i<cards.length; i++){
    let main_card = "";
    if(cards[i].expired===true){
        main_card += `<div class="expired">
                            Expired
                       </div>`
    }
    // let logoimg = _createElement('img', ['']);
    // logoimg.setAttribute('src', cards[i].img);

    main_card += 
   `<div class="image"><img src="${cards[i].img}" alt=""></div>`

   let temp = `<p class="tname">${cards[i].topic_name}</p>`;
   if(cards[i].star===true){
        temp += '<img src="quantum_screen_assets/icons/favourite.svg" alt="">';
   }
   else{
        temp += '<img src="quantum_screen_assets/icons/favourite.svg" alt="" class="low">';
   }
   let td = 
                `<div class="topic_name">
                    ${temp}
                </div> `
    temp = `<span class="sname">${cards[i].sname}</span>`;
    temp += `<span class="grade">${cards[i].grade}  <span style="color:green">${cards[i].grade_}</span></span>`

    td += 
                `<div class="subject_grade">
                    ${temp}
                </div>`
    
    if(cards[i].topic_details.unit !==0){
        temp = 
            `<p class="tdetails">
                        <span class="subdetails">
                            <span class="num">${cards[i].topic_details.unit}</span> Units
                        </span>
                        <span class="subdetails">
                            <span class="num">${cards[i].topic_details.lession}</span> Lessons 
                        </span>
                        <span class="subdetails">
                            <span class="num">${cards[i].topic_details.topic}</span> Topics
                        </span>                     
                    </p>`;
    }
    else{
        temp='';
    }

    temp += 
                    `
                        ${cards[i].chapters.length !=0 
                            ? `
                            <select name="ch_name" id="">
                            ${cards[i].chapters.map(chp=>
                                `
                                <option value="">${chp}</option>
                                `
                                ).join('')}
                            ` 
                            : `<select name="ch_name" id="" style="color:gray;">
                                <option value="" style="color:gray;">No class Available</option>` 
                        }   
                    </select>`
    let tt1='';
    if (cards[i].total_student!=0){
        tt1 += `<span class="students">${cards[i].total_student} Students</span>`
    }
    let tt2='';
    if(cards[i].date.length!=0){
        tt2 += `<span class="date">${cards[i].date[0]} - ${cards[i].date[1]}</span>`
    }
    temp += 
                    `<p class="studentanddate">
                        ${tt1}
                        ${tt2}
                    </p>`
    

    td += `<div class="topic_details">
                ${temp}
            </div>`

    let contentdiv =
    `<div class="content">
        ${td}
    </div> 
    `
    
    
    main_card += contentdiv;
    main_card +=
            `<div class="links">
                <img src="${cards[i].icons[0]}" alt="" class="contenticon">
                <img src="${cards[i].icons[1]}" alt="" class="contenticon">
                <img src="${cards[i].icons[2]}" alt="" class="contenticon">
                <img src="${cards[i].icons[3]}" alt="" class="contenticon">
            </div>`

    let Main_card = _createElement('div', ['main_card']);
    // console.log(Main_card)
    Main_card.innerHTML = main_card;
    main_content[0]?.appendChild(Main_card);

}

            
let anouncdiv = document.getElementsByClassName("anouncment_content");
for(let i=0; i<announcment.length; i++){
    let t=
    `<div class="anounc_title">
        <div class="PA">
            <p><span style="color:gray;">PA: </span>${announcment[i].PA}</p> 
            ${announcment[i].status
            ? `<img src="quantum_screen_assets/icons/check_circle_ic_icon.svg" alt="" style="height:15px; width:18px; margin:auto 0px;">`
            : `<img src="quantum_screen_assets/icons/circle_minus_icon.svg" alt="" style="height:15px; width:18px; margin:auto 0px;">`}
            
        </div>
        <p>${announcment[i].message}</p>
    </div>`;
    if(announcment[i].course.length!=0){
        t+= 
        `<p style="color:gray;">${announcment[i].course}</p>`
    }
    

      t+=
    `<div class="anounc_filesanddate" style="color:gray;">
        ${announcment[i].files > 0 
            ?`<p><img src="quantum_screen_assets/icons/attachmenticon.svg" alt="" style="height:15px; width:10px"> ${announcment[i].files} <span> files are attached</span></p>`
            :`<p></p>` 
        }
        <p class="time">${announcment[i].time}</p>
    </div>`

    let Div:HTMLElement;
    if(announcment[i].status){
        Div = _createElement('div', ['subanounce']);
    }
    else{
        Div = _createElement('div', ['subanounce', 'subanouncenotchecked']);
    }
    
    
    Div.innerHTML = t;
    anouncdiv[0]?.appendChild(Div);

}



let notifidiv = document.getElementsByClassName("notification_content");
for(let i=0; i<notification.length; i++){
    let t=
    `<div class="notifi_meesage">
        <p>${notification[i].message}</p>
        ${notification[i].status
            ? `<img src="quantum_screen_assets/icons/check_circle_ic_icon.svg" alt="" style="height:15px; width:18px; margin:auto 0px;">`
            : `<img src="quantum_screen_assets/icons/circle_minus_icon.svg" alt="" style="height:15px; width:18px; margin:auto 0px;">`}
    </div>`;
    if(notification[i].course.length!=0){
        t+= 
        `<p><span style="color:gray;">Course: </span>${notification[i].course}</p>`
    }
      t+=
    `<div class="notifi_date" style="color:gray;">        
        <p class="time">${notification[i].time}</p>
    </div>`

    let Div:HTMLElement;
    if(notification[i].status){
        Div = _createElement('div', ['subnoti']);
    }
    else{
        Div = _createElement('div', ['subnoti', 'subnotichecked']);
    }
    
    
    Div.innerHTML = t;
    notifidiv[0]?.appendChild(Div);
}



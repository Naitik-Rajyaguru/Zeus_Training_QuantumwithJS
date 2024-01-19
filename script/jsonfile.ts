import { Cards, Announcment, Notification } from "./Interface";

const icons:string[]=["quantum_screen_assets/icons/preview.svg", "quantum_screen_assets/icons/manage course.svg", "quantum_screen_assets/icons/grade submissions.svg", "quantum_screen_assets/icons/reports.svg"]
export const cards:Cards[]=[
    {
        topic_name : "Acceleration",
        img : "quantum_screen_assets/images/imageMask-1.png",
        sname : "Physics",
        grade : "7",
        grade_ : "+2",
        topic_details:{
            unit:6,
            lession:8,
            topic:45
        },
        chapters:[`Mr. Frank's Class B`, `Mr. Frank's Class A`],
        total_student:50,
        date:["21-jan-2020", "20-aug-2020"], 
        icons:icons,
        expired:false,
        star:true,
    },

    {
        topic_name : "Displacement, Velocity and Speed",
        img : "quantum_screen_assets/images/imageMask-2.png",
        sname : "Physics 2",
        grade : "6",
        grade_ : "+3",
        topic_details:{
            unit:2,
            lession:15,
            topic:20
        },
        chapters:[],
        total_student:0,
        date:[], 
        icons:icons,
        expired:false,
        star:true,
    },

    {
        topic_name : "Introduction to Biology: Micro organisms and how they affec...",
        img : "quantum_screen_assets/images/imageMask-3.png",
        sname : "Biology",
        grade : "4",
        grade_ : "+1",
        topic_details:{
            unit:5,
            lession:16,
            topic:22,
        },
        chapters:["All classes", "Mr. Frank's Class A", "Mr. Frank's Class B"],
        total_student:300,
        date:[], 
        icons:icons,
        expired:false,
        star:true,
    },

    {
        topic_name : "Introduction to High School Mathematics",
        img : "quantum_screen_assets/images/imageMask.png",
        sname : "Mathematics",
        grade : "8",
        grade_ : "+3",
        topic_details:{
            unit:0,
            lession:0,
            topic:0,
        },
        chapters:["Mr. Frank's Class A"],
        total_student:44,
        date:["14-oct-2019", "14-jan-2020"], 
        icons:icons,
        expired:true,
        star:false,
    },

]

export const announcment: Announcment[]=[
    {
        PA:'Wilson kumar',
        message:'No class held till 21st nov',
        status:true,
        course:'',
        files:2,
        time:'15-sep-2018 at 07:21 pm',
    },
    {
        PA:'Wilson kumar',
        message:'No class held till 21st nov this is bigger anonuncment to test things',
        status:false,
        course:'Course: Maths 101',
        files:0,
        time:'15-sep-2018 at 07:21 pm',
    },
    {
        PA:'Wilson kumar',
        message:'No class held till 21st nov',
        status:true,
        course:'',
        files:2,
        time:'15-sep-2018 at 07:21 pm',
    },
    {
        PA:'Wilson kumar',
        message:'No class held till 21st nov',
        status:true,
        course:'',
        files:2,
        time:'15-sep-2018 at 07:21 pm',
    },
    {
        PA:'Wilson kumar',
        message:'No class held till 21st nov',
        status:true,
        course:'',
        files:2,
        time:'15-sep-2018 at 07:21 pm',
    },
    {
        PA:'Wilson kumar',
        message:'No class held till 21st nov',
        status:true,
        course:'',
        files:2,
        time:'15-sep-2018 at 07:21 pm',
    },
    {
        PA:'Wilson kumar',
        message:'No class held till 21st nov',
        status:true,
        course:'',
        files:2,
        time:'15-sep-2018 at 07:21 pm',
    },
    {
        PA:'Wilson kumar',
        message:'No class held till 21st nov',
        status:true,
        course:'',
        files:2,
        time:'15-sep-2018 at 07:21 pm',
    }
    
]


export const notification:Notification[] = [
    {
        message:'Licance to introduce algebra assigned to your school today',
        course:'Advance mathematics',
        time:'15-sep-2018 at 5:01 pm',
        status:false,
    },
    {
        message:'Licance to introduce algebra assigned to your school today',
        course:'',
        time:'15-sep-2018 at 5:01 pm',
        status:true,
    },
    {
        message:'Licance to introduce algebra assigned to your school today',
        course:'Advance mathematics',
        time:'15-sep-2018 at 5:01 pm',
        status:false,
    },
    {
        message:'Licance to introduce algebra assigned to your school today',
        course:'Advance mathematics',
        time:'15-sep-2018 at 5:01 pm',
        status:false,
    },
    {
        message:'Licance to introduce algebra assigned to your school today',
        course:'Advance mathematics',
        time:'15-sep-2018 at 5:01 pm',
        status:true,
    } ,  
]

  

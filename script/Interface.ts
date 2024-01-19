// json for cards

export interface topicDetails{
    unit:number;
    lession:number;
    topic:number;
}

export interface Cards {        
    topic_name: string;
    img: string;
    sname:string;
    grade:string;
    grade_:string;
    topic_details:topicDetails;
    chapters:string[];
    total_student:number;
    date:string[];
    icons:string[];
    expired:boolean;
    star:boolean;
}

export interface Announcment{
    PA:string;
    message:string;
    status:boolean;
    course:string;
    files:number;
    time:string;
}

export interface Notification{
    message:string;
    course:string;
    time:string;
    status:boolean;
}
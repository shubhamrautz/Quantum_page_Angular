export interface Card {
    "expired":boolean,
    "image":string,
    "title":string,
    "favorite":boolean,
    "subject":string,
    "grade":{
        "main": number,
        "secondary" : number
    },
    "syllabus":{
        "units":number,
        "lessons" :number,
        "topics":number
    },
    "classes":string[],
    "students": number,
    "duration":string,

    "actions":{
        "preview": boolean,
        "manage":boolean,
        "grade":boolean,
        "reports":boolean
    }
}

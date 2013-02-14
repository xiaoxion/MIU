/**
 * Author: Esau
 * Date: 02/14/13
 * Project 1
 * MIU 0213
 */

var json = {
    "job1":{
        "location": ["Location:" , "Tampa"],
        "worktype": ["Work Type:" , "Cleaning"],
        "priority": ["Priority:" , "High"],
        "people": ["Workers Sent:" , "2"],
        "finishby": ["Finish By:" , "2013-02-12"],
        "notes": ["Notes:" , "Dirty Bathroom"]
    },
    "job2":{
        "location": ["Location:" , "Tampa"],
        "worktype": ["Work Type:" , "Electric"],
        "priority": ["Priority:" , "High"],
        "people": ["Workers Sent:" , "2"],
        "finishby": ["Finish By:" , "2013-02-13"],
        "notes": ["Notes:" , "Main Frame"]
    },
    "job3":{
        "location": ["Location:" , "Tampa"],
        "worktype": ["Work Type:" , "Cleaning"],
        "priority": ["Priority:" , "High"],
        "people": ["Workers Sent:" , "2"],
        "finishby": ["Finish By:" , "2013-01-15"],
        "notes": ["Notes:" , "Fix the Wall"]
    },
    "job4":{
        "location": ["Location:" , "Tampa"],
        "worktype": ["Work Type:" , "Plumbing"],
        "priority": ["Priority:" , "Medium"],
        "people": ["Workers Sent:" , "3"],
        "finishby": ["Finish By:" , "2013-02-15"],
        "notes": ["Notes:" , "Tub Piping"]
    },
    "job5":{
        "location": ["Location:" , "Tampa"],
        "worktype": ["Work Type:" , "Electric"],
        "priority": ["Priority:" , "Low"],
        "people": ["Workers Sent:" , "3"],
        "finishby": ["Finish By:" , "2013-02-13"],
        "notes": ["Notes:" , "New wiring in living Room"]
    },
    "job6":{
        "location": ["Location:" , "Atlanta"],
        "worktype": ["Work Type:" , "Cleaning"],
        "priority": ["Priority:" , "Low"],
        "people": ["Workers Sent:" , "2"],
        "finishby": ["Finish By:" , "2013-03-12"],
        "notes": ["Notes:" , "General Clean"]
    },
    "job7":{
        "location": ["Location:" , "Atlanta"],
        "worktype": ["Work Type:" , "Painting"],
        "priority": ["Priority:" , "Low"],
        "people": ["Workers Sent:" , "3"],
        "finishby": ["Finish By:" , "2013-04-12"],
        "notes": ["Notes:" , "Repaint window stills"]
    },
    "job8":{
        "location": ["Location:" , "Atlanta"],
        "worktype": ["Work Type:" , "Cleaning"],
        "priority": ["Priority:" , "Low"],
        "people": ["Workers Sent:" , "2"],
        "finishby": ["Finish By:" , "2013-05-12"],
        "notes": ["Notes:" , "Nothing special"]
    },
    "job9":{
        "location": ["Location:" , "Atlanta"],
        "worktype": ["Work Type:" , "Electric"],
        "priority": ["Priority:" , "High"],
        "people": ["Workers Sent:" , "3"],
        "finishby": ["Finish By:" , "2013-02-12"],
        "notes": ["Notes:" , "Wiring short circuited in living room!"]
    },
    "job10":{
        "location": ["Location:" , "Atlanta"],
        "worktype": ["Work Type:" , "Plumbing"],
        "priority": ["Priority:" , "High"],
        "people": ["Workers Sent:" , "3"],
        "finishby": ["Finish By:" , "2013-04-12"],
        "notes": ["Notes:" , "Flooding in basement!"]
    },
    "job11":{
        "location": ["Location:" , "Alexandria"],
        "worktype": ["Work Type:" , "Cleaning"],
        "priority": ["Priority:" , "Medium"],
        "people": ["Workers Sent:" , "4"],
        "finishby": ["Finish By:" , "2013-05-12"],
        "notes": ["Notes:" , "New owner, need done asap"]
    },
    "job12":{
        "location": ["Location:" , "Alexandria"],
        "worktype": ["Work Type:" , "Electric"],
        "priority": ["Priority:" , "Medium"],
        "people": ["Workers Sent:" , "3"],
        "finishby": ["Finish By:" , "2013-02-12"],
        "notes": ["Notes:" , "When you can, just redo the wiring"]
    },
    "job13":{
        "location": ["Location:" , "Alexandria"],
        "worktype": ["Work Type:" , "Cleaning"],
        "priority": ["Priority:" , "High"],
        "people": ["Workers Sent:" , "2"],
        "finishby": ["Finish By:" , "2013-04-12"],
        "notes": ["Notes:" , "These are some Notes."]
    },
    "job14":{
        "location": ["Location:" , "Alexandria"],
        "worktype": ["Work Type:" , "Painting"],
        "priority": ["Priority:" , "High"],
        "people": ["Workers Sent:" , "4"],
        "finishby": ["Finish By:" , "2013-01-13"],
        "notes": ["Notes:" , "Graffiti!"]
    },
    "job15":{
        "location": ["Location:" , "Alexandria"],
        "worktype": ["Work Type:" , "Electric"],
        "priority": ["Priority:" , "Low"],
        "people": ["Workers Sent:" , "3"],
        "finishby": ["Finish By:" , "2013-02-12"],
        "notes": ["Notes:" , "New wires in attic"]
    },
    "job16":{
        "location": ["Location:" , "Staten Island"],
        "worktype": ["Work Type:" , "Cleaning"],
        "priority": ["Priority:" , "High"],
        "people": ["Workers Sent:" , "2"],
        "finishby": ["Finish By:" , "2013-03-12"],
        "notes": ["Notes:" , "Nothing special"]
    },
    "job17":{
        "location": ["Location:" , "Staten Island"],
        "worktype": ["Work Type:" , "Painting"],
        "priority": ["Priority:" , "Medium"],
        "people": ["Workers Sent:" , "4"],
        "finishby": ["Finish By:" , "2013-06-12"],
        "notes": ["Notes:" , "Fancy painting!"]
    },
    "job18":{
        "location": ["Location:" , "Staten Island"],
        "worktype": ["Work Type:" , "Plumbing"],
        "priority": ["Priority:" , "Medium"],
        "people": ["Workers Sent:" , "2"],
        "finishby": ["Finish By:" , "2013-02-12"],
        "notes": ["Notes:" , "New sink"]
    },
    "job19":{
        "location": ["Location:" , "Staten Island"],
        "worktype": ["Work Type:" , "Painting"],
        "priority": ["Priority:" , "High"],
        "people": ["Workers Sent:" , "3"],
        "finishby": ["Finish By:" , "2013-03-12"],
        "notes": ["Notes:" , "Redo plumbing outside"]
    },
    "job20":{
        "location": ["Location:" , "Staten Island"],
        "worktype": ["Work Type:" , "Cleaning"],
        "priority": ["Priority:" , "Medium"],
        "people": ["Workers Sent:" , "2"],
        "finishby": ["Finish By:" , "2013-04-12"],
        "notes": ["Notes:" , "Woah, nasty house!"]
    }
};
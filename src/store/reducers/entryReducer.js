const initState = {
    entries: [
        {
            id: 1,
            bloodSugar: 70,
            medication1: "Apidra",
            medication1Units: 10,
            medication2: "Lantus",
            medication2Units: 26,
            timeOfTheDay: "Before Breakfast"
        },
        {
            id: 2,
            bloodSugar: 200,
            medication1: "Apidra",
            medication1Units: 20,
            medication2: "Lantus",
            medication2Units: 40,
            timeOfTheDay: "Before Lunch"
        },
        {
            id: 3,
            bloodSugar: 270,
            medication1: "Apidra",
            medication1Units: 5,
            medication2: "Lantus",
            medication2Units: 50,
            timeOfTheDay: "Before Breakfast"
        }
    ]
}

const entryReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_ENTRY':
            console.log('created entry', action.entry) 
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err)
            return state;
        default:
            return state;
    }
}

export default entryReducer;
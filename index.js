function saturdayFun(activity = "roller-skate") {
    return (`This Saturday, I want to ${activity}!`);
}

function mondayWork(work = "go to the office") {
    return (`This Monday, I will ${work}.`)
}

function wrapAdjective(star = "*") {
    return function (Adj = "Special") {
        return `You are ${star}${Adj}${star}!`
    }
}
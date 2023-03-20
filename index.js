// code your solution here

function saturdayFun(activity = 'roller-skate', msg = 'This Saturday, I want to '){
    return `${msg}${activity}!`
}

function mondayWork(activity = 'go to the office',msg = 'This Monday, I will '){
    return `${msg}${activity}.`;
}

function wrapAdjective(wrapper){
    return function(adjective) {
        return `You are ${wrapper}${adjective}${wrapper}!`;
    }
}
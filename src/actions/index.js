export const ADD_RECIPE = 'ADD_RECIPE';
export const REMOVE_FROM_CALENDAR = 'REMOVE FROM CALENDAR';

export function addRecipe({day, recipe, meal}) {
    return {
        type: ADD_RECIPE,
        day,
        recipe,
        meal
    }
}

export function removeFromCalendar({day, meal}) {
    return {
        type: REMOVE_FROM_CALENDAR,
        day,
        meal
    }
}
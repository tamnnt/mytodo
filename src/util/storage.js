/* eslint-disable import/no-anonymous-default-export */
const TODOS_STORAGE_KEY = 'TODOS_LIST'
var objectDefault = [
    {id: 1, task: "Làm các bài Lab Công nghệ Web", complete: false, dateOf: "2022-11-30T15:38"},
    {id: 2, task: "Làm các bài Lab Công nghệ NET", complete: false, dateOf: "2022-12-01T15:38"},
    {id: 3, task: "Làm các bài Lab Công nghệ API", complete: false, dateOf: "2021-12-06T15:38"},
];
export default {
    get(){
        var result = JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) === null || JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)).length ===0 ?
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(objectDefault)) : 
        JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY));
        return result
    },
    set(todoList){
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todoList));
    }
}
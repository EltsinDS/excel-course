/* eslint-disable */
import {APPLY_STYLE, CHANGE_STYLES, CHANGE_TEXT, CHANGE_TITLE, TABLE_RESIZE, UPDATE_DATE} from "@/redux/types";

export function tableResize(data){
    return{
        type: TABLE_RESIZE,
        data
    }
}

export function changeText(action){
    return {
        type: CHANGE_TEXT,
        data: action
    }
}

export function changeStyles(data){
    return {
        type: CHANGE_STYLES,
        data
    }
}

export function applyStyle(data){
    return {
        type: APPLY_STYLE,
        data
    }
}

export function updateDate(){
    return {
        type: UPDATE_DATE
    }
}

export function changeTitle(data){
    return {
        type: CHANGE_TITLE,
        data
    }
}
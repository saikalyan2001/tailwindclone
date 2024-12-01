
export function sorting(i) {
    return {type: "addSort", payload: i}
}

export function size(s) {
    return {type: "updateSize", payload: s}
}

export function dex(index) {
    return {type: "updateIndex", payload: index}
}
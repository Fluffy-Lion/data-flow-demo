export const initialInfo = {
    boxes: {
        "box-1": {id: "box-1", content: "box one", givenProp: true},
        "box-2": {id: "box-2", content: "box two", givenProp: false},
        "box-3": {id: "box-3", content: "box three", givenProp: false},
    },
    codeSnips: {
        "code-1": {id: "code-1", content: "code one", givenProp: true},
        "code-2": {id: "code-2", content: "code two", givenProp: false },
        "code-3": {id: "code-3", content: "code three", givenProp: false },
    },
    columns: {
        "column-1": {
            id: "column-1",
            title: "codeContainer",
            itemIds: ["box-1", "box-2", "box-3"]
        },
        "column-2": {
            id: "column-2",
            title: "codeState",
            // itemIds: []
            itemIds: ["code-1", "code-2", "code-3"]
        }
    },
    columnOrder: ["column-1", "column-2"]
}


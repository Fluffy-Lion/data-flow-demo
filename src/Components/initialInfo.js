let img1 = "image one"
let img2 = "image two"
let img3 = "image three"

export const initialInfo = {
  boxes: {
    "box-1": {
      id: "box-1",
      content: "App",
      code: "[names, setNames] = useState(data) <List names={names} />",
      image: img1,
      info: {
        isProp: false,
        givenProp: true,
      },
    },
    "box-2": {
      id: "box-2",
      content: "List",
      code: "<Name name={name}/>",
      image: img2,
      info: {
        isProp: false,
        givenProp: true,
      },
    },
    "box-3": {
      id: "box-3",
      content: "Name",
      code: "<p>{props.name}</p>",
      image: img3,
      info: {
        isProp: false,
        givenProp: true,
      },
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "codeContainer",
      itemIds: [],
    },
    "column-2": {
      id: "column-2",
      title: "codeState",
      itemIds: ["box-1", "box-2", "box-3"],
      // itemIds: ["code-1", "code-2", "code-3"]
    },
  },
  columnOrder: ["column-1", "column-2"],
};

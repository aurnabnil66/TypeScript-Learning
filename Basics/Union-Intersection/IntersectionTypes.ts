type Draggable = {
    Drag: () => number;
}

type Resize = {
    Resize: () => string;
}

type Widget = Draggable & Resize;

let widgetBox: Widget = {
    Drag: () => {return 10},
    Resize: () => {return 'Moved'}
}

console.log(widgetBox);

console.log(widgetBox.Drag());
console.log(widgetBox.Resize());
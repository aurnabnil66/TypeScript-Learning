var widgetBox = {
    Drag: function () { return 10; },
    Resize: function () { return 'Moved'; }
};
console.log(widgetBox);
console.log(widgetBox.Drag());
console.log(widgetBox.Resize());

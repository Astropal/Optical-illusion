# Optical-illusion

### /!\ 10 minutes of fun and useless creation /!\

Simple optical illusion, 3D movement on a 2D plane. This repo uses JS loop notions to include HTML tags during the life of the program. You can have fun changing the number of objects to vary the shape.

## Notions to keep in mind

HTML tag creation and positioning
```js
var currentDiv = document.getElementById('marker2');
var parentDiv = document.getElementById("marker1");
var newObj = document.createElement("li");
newObj.className = "object";
parentDiv.insertBefore(newObj, currentDiv);
```

Preloading the body
```html
<script>document.body.onload = addElement;</script>
```

## License

[WTFPL](https://fr.wikipedia.org/wiki/WTFPL)


## Author

Made by Bastien Dupont.

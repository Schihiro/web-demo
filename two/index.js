var glot = new Glottologist();
var script = document.createElement("script");
script.type = "text/javascript";
script.src = " file:///Users/chihiro/Desktop/Credge/demo/two/glot-dict.json.js";
script.onload = function(){
    Object.keys(GLOT_DICT_JSON).forEach(function(key, idx){
        glot.assign(key, this[key]);
    }, GLOT_DICT_JSON);
    glot.render();
};
document.head.appendChild(script);
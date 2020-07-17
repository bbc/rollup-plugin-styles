const css = ".style_module {\n  color: #1F4F7F;\n}\n\n.style_module2 {\n}\n";
console.log(css, true);
var modules_5a199c00 = {"primary":"#BF4040","secondary":"#1F4F7F","module":"style_module","module2":"style_module2 composed_composition composition2_compositioned"};

const css$1 = "@media screen and (min-width: 900px) {\n  .composed_composition {\n    background-color: aqua;\n  }\n}\n\n.composed_composition {\n  background-color: #BF4040;\n}\n";
console.log(css$1, true);

const css$2 = ".composition2_compositioned {\n  width: 30%;\n}\n";
console.log(css$2, true);
var modules_354770d7 = {"compositioned":"composition2_compositioned"};

if (modules_354770d7.inject) modules_354770d7.inject();
else console.log(modules_5a199c00.module, modules_354770d7.compositioned);

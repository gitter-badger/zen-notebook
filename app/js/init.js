//Libraries
head.load(
    "js/lib/angular.min.js",
    "js/lib/angular-sanitize.min.js",
    "js/lib/nw-fileDialog.js",
    "js/lib/buzz.min.js"
);
//Main Application
head.load('js/app/main.js');
head.load(
    'js/app/directives.js',
    'js/app/controllers.js',
    'js/app/services.js'
);
//Plugins and plugin css

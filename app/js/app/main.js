//TODO: Seperate node code from angular
var gui = require('nw.gui');
var win = gui.Window.get();
var nativeMenuBar = new gui.Menu({ type: "menubar" });
try {
    nativeMenuBar.createMacBuiltin("Zen Notebook");
    win.menu = nativeMenuBar;
} catch (ex) {
    console.log(ex.message);
}
var fs = require('fs');
//gui.App.setCrashDumpDir('./');

//Initialize Application
//https://github.com/ocombe/ocLazyLoad
var zenNotebook = angular.module("zenNotebook", ['ngSanitize', 'DWand.nw-fileDialog'])
    .run(function($rootScope, storageFactory){
        $rootScope.active_component = storageFactory.getStorage('component');
        if(!$rootScope.active_component){
            $rootScope.active_component = 'notebook';
        }
        //$rootScope.active_component = 'nanowrimo';
        $rootScope.active_component = 'notebook';
    });
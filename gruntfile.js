module.exports = function(grunt) {
    //configure main project settings
    
    grunt.initConfig({
        
        //basic settings and info about our plugin
        
        pkg: grunt.file.readJSON('package.json'),
        
        //name of plugin (plugin name without "grunt-contrib-")
        cssmin: {
            target: {
                files: {
                    'css/style.css' : ['css/main.css']
                }
            }
        }
    });
    
    //load plugin
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    //do the task
    grunt.registerTask('default',['cssmin']);
};
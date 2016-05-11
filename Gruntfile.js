module.exports = function(grunt) {

    grunt.initConfig({
        responsive_images: {
            create_images: {
                options: {
                    engine: 'im',
                    newFilesOnly: true,
                    autoOrient: true,
                    sizes: [
                        { width: 200 },
                        { width: 300 },
                        { width: 400 }
                    ]
                },
                files: [{
                    expand: true,
                    src: ['**.{jpeg,JPG,jpg,gif,png}'],
                    cwd: "development/images/",
                    dest: "production/images/"
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.registerTask('default', ['responsive_images']);
};

/*
 * WordPress Module Scaffolding Template
 *
 * @version 1.0.0
 */

// Basic template description.
exports.description = 'Create a WordPress module.';

// Template-specific notes to be displayed after question prompts.
exports.after = '';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process( { type: 'wordpress-module' }, [

    init.prompt( 'name' ),
    init.prompt( 'description' ),
    init.prompt( 'version', '0.1.0' ),
    init.prompt( 'module_namespace', 'MyNamespace' ),
    init.prompt( 'module_class', 'MyModule' ),
    init.prompt( 'licenses' ),
    init.prompt( 'author_name', 'Usability Dynamics' ),
    init.prompt( 'author_email', 'info@UsabilityDynamics.com' ),
    init.prompt( 'author_url', 'http://UsabilityDynamics.com' ),
    init.prompt( 'node_version', '>=0.10.21' )

  ], function( err, props ) {

    props.keywords = [
      'wordpress'
    ];

    props.private = true;

    props.directories = {
      "doc": "./static/codex",
      "styles": "./static/styles",
      "scripts": "./static/scripts",
      "lib": "./lib"
    };

    props.contributors = [
      {
        "name": "Andy Potanin",
        "email": "andy.potanin@UsabilityDynamics.com",
        "url": "http://UsabilityDynamics.com"
      }
    ];

    props.dependencies = {};

    props.devDependencies = {
      "grunt-contrib-yuidoc": "~0.5.0",
      "grunt-contrib-uglify": "~0.2.4",
      "grunt-contrib-watch": "~0.5.3",
      "grunt-markdown": "~0.4.0",
      "grunt-contrib-concat": "~0.3.0",
      "grunt-contrib-clean": "~0.5.0",
      "grunt-contrib-less": "~0.8.3",
      "grunt-mocha-cli": "~1.5.0",
      "grunt-mocha-cov": "~0.1.1",
      "grunt-pot": "~0.1.2",
      "mocha": "~1.20.0",
      "should": "~4.0.0",
      "grunt": "~0.4.5"
    };

    props.repo = {
      type: 'git',
      url: 'git@github.com:UsabilityDynamics/' + ( props.name ).replace( 'node-', '' )
    };

    props.homepage = 'http://github.com/UsabilityDynamics/' + ( props.name ).replace( 'node-', '' );

    props.bugs = 'http://github.com/UsabilityDynamics/' + ( props.name ).replace( 'node-', '' ) + '/issues';

    props.copyright = "Copyright (c) 2014 Usability Dynamics, Inc.";

    var _files = init.filesToCopy( props );

    init.copyAndProcess( _files , props );

    init.addLicenseFiles( _files , props.licenses);

    init.writePackageJSON( 'package.json', props );

    grunt.file.write( init.destpath( 'composer.json' ), JSON.stringify( {
      "name": 'usabilitydynamics/' + props.name,
      "version": props.version,
      "keywords": [],
      "homepage": "",
      "type": "wordpress-module",
      "require": {
        "php": ">=5.3",
        "usabilitydynamics/lib-installer": "master"
      },
      "autoload": {
        "classmap": [ "lib" ]
      },
      "minimum-stability": "dev",
      "repositories": [
        {
          "type": "composer",
          "url": "http://repository.usabilitydynamics.com"
        }
      ],
      "extra": {
        "installer-name": ( props.name ).replace( 'wp-module', '' ),
        "main-file": "lib/class" + props.name + ".php",
        "class": ""
      }
    }, null, 2 ) );

    done();

  });

};

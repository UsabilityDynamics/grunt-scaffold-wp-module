<?php
/**
 * {%= module_class %}
 *
 * {%= name %}
 * {%= homepage %}
 */
namespace {%= module_namespace %} {

  if( !class_exists( '{%= module_namespace %}\{%= module_class %}' ) ) {

    class {%= module_class %} {

      /**
       * Module Path.
       *
       * @public
       * @static
       * @property $path
       * @type {string}
       */
      static public $path = null;

      /**
       * Intialize {%= module_class %}.
       *
       * @param $parent
       * @param $module
       *
       */
      public function __construct( $parent = array(), $module = array() ) {

        try {

          // Initialize Module.

        }  catch( \Exception $error ) {
          trigger_error($error->getMesage() );
        }

      }

    }

  }

}
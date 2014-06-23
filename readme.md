* All modules are composer libraries and any may be installed during development by being declared in "require-dev"
* Upon product build any modules that are required for distribution are pre-packaged.
* Upon product activation in WP all module deps declared are scanned and checked for better versions, installed if found.
* Identified modules found in "vendor", or wherever, are stored in a transiet much like found themes.
* To avoid conflicts when multiple products are installed, modules should NOT autoload.
* Modules will need to have a spec for required properties to allow "updates" server to use.

### Usage
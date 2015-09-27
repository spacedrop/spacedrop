# SpaceDrop
An open-source CMS built with Meteor in React and inspired by Drupal.

## You found us!!

Great work! Hands to you for Googling and finding us, the next step is up to you.
Become a co-author and member of the board steering SpaceDrop's directions in the future, by forking and creating a PR that gets committed.

## Sub-projects

* Core
  * [x] Logging system (inner logging, logs transmitted to external system)
  * Caching management and injection
    * [x] Subscription caching
    * [ ] Appcache
  * Menu
    * [ ] Simplify the API to create and manage routes and access management for other packages.
    * [ ] UI for management of menus.
  * User
    * [ ] UI for management of users.
  * [ ] Permission
    * [ ] Access management for packages.
    * [ ] UI for roles and user permissions.
* Theming
  * [ ] React Templates (Blaze inspired templating)
  * [ ] Sideburns (Blaze inspired events/helpers/callbacks)
  * [ ] Overriding templates
  * [ ] Basic theme (package)
* Admin UI
  * [ ] Administrating site settings
  * [ ] Editing documents, forms generated from schemas in the Structure package.
  * [ ] Add/remove and publish/unpublish documents.
  * [ ] Packages overview (on/off capabilities)
  * [ ] Reports package and page showing status of current installed version and more.
  * [ ] Admin menu for all administrative tasks.
* Configuration management
  * Structure package (or call it Schema package)
    * [ ] Creating collections
    * [ ] Manage schemas for collections
    * [ ] Manage indexes for a collection
  * Structure UI (or call it Schema package)
    * [ ] UI for adding/removing collections
    * [ ] UI for adding/removing fields on a collections
  * Structure from UI to code
    * [ ] Structures should generate code from the UI if running locally.
    * [ ] Structures should be readable from production, but not  editable on a published application.
* SEO
  * [ ] Pagetitle
  * [ ] Metatags
  * [ ] Open Graph
  * [ ] Schema.Org
  * [ ] Rich Snippets v2
  * SEO package
    * [ ] UI for editing SEO defaults or per entity
* API
  * [ ] REST api to list/create collections, schemas etc.
  * [ ] REST api for read/write to documents in a collection.
  * [ ] CSV importer.
  * [ ] CSV exporter.
* Documentation
  * [ ] JSDoc on all packages/components/classes generated to a docs site.
  * [ ] Manuals for all API's such as Menu, Permission, Structure, etc.
  * [ ] Documentation how to create a new app using a distribution (Distributions are ready sets of SpaceDrop packages one can get started using direcly).
* Security
  * [ ] Argument checks
  * [ ] Browser policy
  * [ ] Rate limiting for preventing flooding
* Asset management system
  * [ ] Media library for static files
  * [ ] Images (PNG, JPEG, WebP) with server side optimization (resolutions, metadata removal, conversions) and client side edition.
  * [ ] SVG with client side edition
  * [ ] MPEG-4 with server side entropy recompression and optimization (resolutions, conversions).
  * [ ] External asset importer for Youtube
* Features as packages
  * [ ] Browser outdated warning
  * [ ] Cookie information
  * [ ] Legal information
  * [ ] Favicons with manifests and screen launching for mobiles
  * [ ] Search engine (full text search as default, external river for Elasticsearch)
  * [ ] Basic recommender engine
  * [ ] Analytics (GA, Mixpanel, ...).
  * [ ] Transactional emails (SMTP, Mailjet, Mandrill, ...) with client side edition (tagging, theming)
  * [ ] PDF generation for catalogues, license agreement, ...
  * [ ] Payment capabilities (Braintree, Stripe, ...)
  * [ ] A/B testing (rendering depending on population, reports on funnels, ...)
  * [ ] Sharers for social networks
  * [ ] UTM campaigns
  * [ ] Ads / Banners
  * [ ] Rocket.Chat integration with bots for outside hours
  * [ ] Maps integration with styling
* System health support
  * [ ] Client information on connection status
  * [ ] Server status
  * [ ] Simple analytic dashboard (CPU consumption, RAM, Drive)
* Devops - Assistance and helpers for deployment
  * [ ] Docker based infrastructure for monolithic applications
  * [ ] Docker based infrastructure for clustered applications
  * [ ] Cordova project for iOS, Android and Android legacy (with Crosswalk integration)
* Internationalization
  * [ ] Simple translation support for packages.
  * [ ] UI for translating strings
  * [ ] UI to update translations from external sources, i.e. https://localize.drupal.org/

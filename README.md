# SpaceDrop
An open-source CMS built with Meteor in React and inspired by Drupal.

## You found us!!

Great work! Hands to you for Googling and finding us, the next step is up to you.
Become a co-author and member of the board steering SpaceDrop's directions in the future, by forking and creating a PR that gets committed.

## Sub-projects

* Core
  * Menu
    * Simplify the API to create and manage routes and access management for other packages.
    * User
      * UI for management of users.
  * Permission
    * Access management for packages.
    * UI for roles and user permissions.
* Theming
  * React Templates (Blaze inspired templating)
  * Sideburns (Blaze inspired)
  * Overriding templates
  * Basic theme (package)
* Admin UI
  * Administring site settings
  * Editing documents, forms generated from schemas in the Structure package.
  * Add/remove and publish/unpublish documents.
  * Packages overview (on/off capabilities)
  * Reports package and page showing status of current installed version and more.
  * Admin menu for all administrative tasks.
* Configuration management
  * Structure package (or call it Schema package)
    * Creating collections
    * Manage schemas for collections
    * Manage indexes for a collection
  * Structure UI (or call it Schema package)
    * UI for adding/removing collections
    * UI for adding/removing fields on a collections
  * Structure from UI to code
    * Structures should generate code from the UI if running locally.
    * Structures should be readable from production, but not  editable on a published application.
* SEO
  * Pagetitle
  * Metatags
  * Open Graph
  * Schema.Org
  * SEO package
    * UI for editing SEO defaults or per entity
* API
  * REST api to list/create collections, schemas etc.
  * REST api for read/write to documents in a collection.
* Documentation
  * JSDoc on all packages/components/classes generated to a docs site.
  * Manuals for all API's such as Menu, Permission, Structure, etc.

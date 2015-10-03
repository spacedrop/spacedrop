/**
 * @file
 * Default theme implementation for the user home or login screen.
 *
 * @type {String}
 */
<template name="Home">
  {{#if Meteor.user()}}
    <div>Logged in</div>
  {{else}}
    <BlazeInReact template='loginButtons' />
  {{/if}}
</template>

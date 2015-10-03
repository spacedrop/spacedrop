/**
 * @file
 * Default theme implementation for the user page.
 *
 * @type {String}
 */
<template name="User">
  {{#if user}}
    <div>{{user.uid}}</div>
  {{else}}
    <div>Not found</div>
  {{/if}}
</template>

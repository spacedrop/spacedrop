/**
 * Example overriding the User template.
 * @type {String}
 */

<template name="User">
  {{#if user}}
    <div>{{user.uid}} + This is cool!</div>
  {{else}}
    <div>Not found</div>
  {{/if}}
</template>

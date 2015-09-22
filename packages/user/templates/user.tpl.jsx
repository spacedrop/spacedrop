<template name="User">
  {{#if user}}
  <div>{{user.uid}}</div>
  {{else}}
  <div>Not found</div>
  {{/if}}
</template>

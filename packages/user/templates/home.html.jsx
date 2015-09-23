<template name="Home">
  {{#if Meteor.user()}}
    <div>Logged in</div>
  {{else}}
    <BlazeInReact template='loginButtons' />
  {{/if}}
</template>

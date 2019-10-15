# NgCssGridSmartDumb

Demonstrates how to position dumb components inside of smart components that do not directly define the CSS Grid layout.

This does not work for IE or Edge at all.

## Server

`ng serve` for most browsers.

For IE: `npm run start:ie`

## Serve for remote

If you're on a Mac and want to see what IE and edge look like...

First, edit `package.json` and replace `{{YOUR_SERVER_NAME_HERE}}` with your server name.

IE: `npm run start:remote:ie`

Edge: `npm run start:remote`

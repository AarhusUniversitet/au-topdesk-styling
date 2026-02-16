# AU TOPdesk Styling

Shared UI improvements for TOPdesk at Aarhus University.

## Installation

1. Install Stylus extension:
   - [Chrome](https://chrome.google.com/webstore/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne)
   - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/styl-us/)
2. Click: [Install AU TOPdesk Styling](https://aarhusuniversitet.github.io/au-topdesk-styling/dist/au-topdesk.user.css)
3. Click **Install** in Stylus

The style applies only to `au.topdesk.net` and updates automatically.

## Development

### Build

```bash
npm install
npm run build
```

The build script:
- Reads all CSS files from `dist/modules/`
- Bundles and minifies them
- Outputs to `dist/au-topdesk.user.css`

### Add New Styles

1. Create a new `.css` file in `dist/modules/`
2. Run `npm run build`
3. Commit both the module and built file

## License

MIT

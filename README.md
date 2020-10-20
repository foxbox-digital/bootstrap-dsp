# Bootstrap DSP for the Adobe XD Extension for Visual Studio Code

![Bootstrap DSP for the Adobe XD Extension for VS Code, created by Foxbox Digital](https://cdn.sanity.io/images/4j183ajh/production/b0451c2ed326aa6662617b30a74b1f8d4af8d323-1920x838.png)

Make developing with Bootstrap 5 even easier by using our free design system package (DSP) for Visual Studio Code. Gain direct access to Bootstrap code snippets and documentation with Intellisense right in the VS Code editor. This allows you to stay in flow and focus on development, instead of switching between your editor and the docs.

[Learn more about the Bootstrap 5 DSP](https://foxbox.com/blog/adobe-xd-vs-code-bootstrap-dsp)

## Installing
To install Adobe Bootstrap DSP in your project, please run:

```
npm install @foxbox/adobe-bootstrap-dsp
```

## DSP Setup

- Install the [Adobe XD extension for VS Code](https://letsxd.com/vscode)
- Open the Adobe XD extension for VS Code (`Cmd+Opt+X` for Mac users) and select `Load package`.
- Navigate to your `node_modules` folder and load the `bootstrap-dsp` folder located inside `@foxbox/adobe-bootstrap-dsp` (DSPs contain a dsp.json file at the root level).
- Hit the `Start Editing` button
- Hit the `Finish Editing` button

With that a new build will be triggered and the `dist` folder will be updated

## Environment Setup

### HTML Webpage

- Change directory to `plainHTML-project`
- Open the `index.html` file in a browser

**Note:** refresh manually everytime you update the `index.html`

### Next/React Application

- Change directory to `next-project`
- Run `npm i` to install the dependencies
- Run `npm run dev`
- Open [http://localhost:3000](http://localhost:3000) on the browser

### Usage

For you to use the code snippets correctly, you have to install [react-bootstrap](https://react-bootstrap.github.io/) and import the corresponding component

#### Example

```js
import { Button } from 'react-bootstrap';

function HomePage() {
  return <Button variant="primary">Primary Button</Button>;
}

export default HomePage;
```

## Resources

- Bootstrap 5 UI Kit assets: [https://assets.adobe.com/public/12e45de1-ef2f-4ec8-6b99-28b1012038a4](https://assets.adobe.com/public/12e45de1-ef2f-4ec8-6b99-28b1012038a4)
- Adobe XD VSCode Extension documentation: [https://github.com/AdobeXD/design-system-package-dsp](https://github.com/AdobeXD/design-system-package-dsp)

## Created by Foxbox Digital
[Foxbox Digital](https://foxbox.com) is an award-winning digital product agency, headquartered in Chicago. We partner with clients ranging from Fortune 50 companies to high-growth startups and everyone in between to design, develop, and deliver successful digital experiences.

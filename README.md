Design system is not a UI kit library. Design system won't include any component that we could have
in more than 1 application. It will include only visual elements that can be reused in ALL applications in our company

If we have visual elements that we understand that cannot be shared into any application, then we create a UI kit. (FielRoutes)

For example, the header of a website. Design system is a convention.

In the future, we could have multiple UI kits (group of reusable components)

# Components

- [ ] Text -> standardizes font-family, size, color, etc
- [ ] Heading -> standardizes font-family, size, color, etc
- [ ] Box / Card
- [ ] Button
- [ ] TextInput
- [ ] TextArea
- [ ] Checkbox
- [ ] Avatar
- [ ] MultiStep - Form + Indicator


Design system must be tech agnostic -> React, Vue, Angular, Svelte, etc
Although the components might not be fully agnostic (it could if using `solidjs.com`),
other things are, and should, be global. For example: tokens (fonts, sizes, spacing, font weight, etc)

It's common to separate our design system into smaller packages


## TSUP
Converts our code in a js package that can be loaded by other apps (Bundle your TypeScript library with no config). It makes it easier to convert our package into both js and esm to be used by legacy and newer apps. If I used only the tsc to convert the ts package to js, I could limit who would be able to use this package.

Tsup facilitates creating all typescript files (d.ts)

https://github.com/egoist/tsup

```terminal
npm i tsup -D
```

Create 2 scripts on `package.json`

```json
"build": "tsup src/index.ts --format esm,cjs --dts",
"dev": "tsup src/index.ts --format esm,cjs --dts --watch",
```

## Monorepo
Add multiple projects within a repository (space of work/folder) that are dependent upon each other.

Example: react package in a design system will have the tokens package as a dependency. It allows us to import tokens into react package without having to publish a new npm package

https://docs.npmjs.com/cli/v7/using-npm/workspaces



## TS Config sharable between multiple packages
Create a package `ts-config`

## React Package
We installed react as a dev develpment because we expect the application that will use our package will have react already installed. Otherwise, it would considerably increase the bundle size of our package and create a react duplicate in the application that uses this package.

## Storybook
It has npm 7 dependency -> downgraded node to 16.10
Created a separate folder/package for docs for the storybook setup, so the react components won't be dependent to storybook. This will be useful if I decide to change the doc tool later on.

1. Install sb
```cmd
❯ npx sb init --builder @storybook/builder-vite --type react --use-npm
```

2. Instal additional dependencies (vite)

```cmd
❯ npm i -D vite @vitejs/plugin-react    
```

3. Create config file for sb `vite.config.js`
- `/// <reference types="vite/client" />` => typescript will understand I am using vite, so it will release some global typing to be used
```js
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react"
import {defineConfig} from 'vite'

export default defineConfig({
  plugins: [react()]
})
```

4. Install `react` and `react-dom`

```cmd
❯ npm i react react-dom
```

Troubleshoot eslint-config module not found

```cmd
// root
npm i --workspace packages/ts-config 
npm i --workspace packages/react 
npm i --workspace packages/eslint-config 
npm i --workspace packages/tokens 
```
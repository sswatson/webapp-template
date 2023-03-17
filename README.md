# webapp-template

A web application template using the following stack:

1. [SvelteKit](https://kit.svelte.dev/) with TypeScript, Prettier, and ESLint options.
2. [Firebase](https://firebase.google.com/) with [SvelteFire](https://github.com/codediodeio/sveltefire) for minimum-boilerplate database subscriptions.
3. [PicoCSS](https://picocss.com/) for responsive design.

## Getting started

1. Clone this repo: `git clone https://github.com/sswatson/webapp-template.git`.
2. Run `pnpm install` to install dependencies.
3. Go to console.firebase.google.com and create a new project. Click the web button on the Project Overview page to add your Firebase project to a web app.
4. Copy the config and paste it into `src/lib/firebase.ts`.
5. In the Firebase Console, enable any other services you might need (e.g. Firestore, Authentication, Functions).
6. Install the [Firebase CLI](https://firebase.google.com/docs/cli) if you haven't already, and do `firebase init`. Select the services you want and complete the initialization process.
7. Do `pnpm dev` to locally serve the app and develop it.
8. When you're ready to serve the app, do `firebase deploy`. The first time, you'll need to enable hosting in the Firebase Console.
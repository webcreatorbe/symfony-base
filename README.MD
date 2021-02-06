Symfony base project
====================

## What is included in this project?

### Features

This project includes a basic file structure for your Symfony project. It starts from a `symfony/skeleton` installation. Features include:

- Webpack Encore
- Vue
- Tailwind
- Sentry

### Extra PHP dependencies

- `doctrine/annotations`
- `sentry/sentry-symfony`
- `symfony/twig-bundle`
- `symfony/webpack-encore-bundle`

### PHP dev dependencies

- `symfony/maker-bundle`

### Node dev dependencies
- `autoprefixer`
- `file-loader`
- `postcss`
- `postcss-loader`
- `sass-loader`
- `tailwind`
- `vue`
- `vue-loader`
- `vue-template-compiler`

## What to do you need to change?

### File changes

- Add details to `.env.acc` and `.env.prod`
- Change this file to whatever works for you!

### Website Checklist

- Favicon
- Meta tags (https://metatags.io/)
- SEO (https://seositecheckup.com/)
- Sitemap and `robots.txt`
- Cookie consent and other legal stuff (https://www.cookieconsent.com/)
- Google Analytics or Tag Manager
- Think of Accessibility (A11Y)
- Optimize for performance
- Enable PHP preloading (https://symfony.com/blog/php-preloading-and-symfony)
- Spam-check mailing (https://www.mail-tester.com/)
- Configure Sentry
- Custom error pages

### IDE configuration

- Enable the Symfony plugin

## TODO list

- Add PHP code quality tools. PHP CS Fixer seems good, but does it work with PHP8? What about GrumpPHP?
- Add JS code quality tools. ES lint? What about Vue?
- https://tailwindcss.com/course/optimizing-for-production
- https://symfony.com/doc/current/frontend/encore/vuejs.html#runtime-compiler-build
- Secrets
- Deployer

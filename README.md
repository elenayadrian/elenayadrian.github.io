# Elena y Adrian wedding website

## Run de code in local

```sh
# Step 1: Install the necessary dependencies.
npm i

# Step 2: Start the development server with auto-reloading and an instant preview.
npm run dev
```

## Single HTML to deploy in github pages

```sh
# Step 3: build the web.
npm run build
```

## Workaround before commit and push:

The output of the publish cmd will be a single index.html in the root project.

Execute:

curl https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css   -o out/aos.css
curl https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js    -o out/aos.js

add in the out/index.html:

```html
<link rel="stylesheet" href="aos.css"/>

<script src="aos.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
      AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-cubic',
      });
    });
  </script>
```

Now execute

```sh
# Step 4: Publish in a inline html
npm run publish
```
We need to search and replace the images and typos paths which don't have the right path by default.

First occurence of:

img/background.png by public/img/background.png
fonts/ImperialScript-Regular.ttf by public/fonts/ImperialScript-Regular.ttf
fonts/Montserrat-Regular.ttf by public/fonts/Montserrat-Regular.ttf
fonts/PlayfairDisplay-Regular.ttf by public/fonts/PlayfairDisplay-Regular.ttf



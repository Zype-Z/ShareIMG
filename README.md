# ShareIMG
Use ShareImage `img` tags directly in HTML!

## Installation
Use it as a Script in your last `head` tag:
```html
<!-- ShareImage.js Minified JS -->
<script src="https://cdn.statically.io/gh/Zype-Z/ShareIMG/main/shareimg.min.js" type="module"></script>
```
## Roadmap
In future we might also release a React-specific ShareIMG which might be usable as:
```jsx
import ShareImg from 'shareimg';

export default function App() {
    return (
        <>
            <ShareImg title="My Awesome JSX!" cloudName="myCloud" imagePublicID="myImage">
            </ShareImg>
        </>
    )
}
```

**Note**: **ShareIMG** replace's itself with a valid `img` tag with the Cloudinary URL!
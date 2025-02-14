# WebPros UI Library
A framework agnostic UI library for building web applications.

## Description

The primary objective of the WebPros UI Library is to create a consistent set of components for the various applications within our company. All components adhere to a unified design system and are designed to be easily integrated into any environment.

In addition, the library is intended to foster collaboration among the different frontend teams. Each team is encouraged to contribute new, independent components that are not tied to any specific application. This collaborative approach ensures that our UI components are scalable, reusable, and maintain a consistent look and feel across all projects.

## Development

Each component is implemented as a WebComponent using LitElement. This approach offers the significant advantage of being framework-independent, meaning that these components can be integrated seamlessly into any environment or framework. Over time, Lit.js has proven itself as a robust build tool for WebComponents.

We use TypeScript as our primary language. The strong typing provided by TypeScript is invaluable when multiple teams are working together, as it helps prevent errors and ensures code quality. Additionally, TypeScript’s support for decorators simplifies the codebase, making it easier to write and maintain.

## Design System

Our design system is built using Tailwind CSS, which offers several advantages over traditional CSS methodologies:
- Reduced File Size: Tailwind CSS generates a much smaller CSS footprint by eliminating redundancies.
- Faster Styling: Developers can apply styles directly in HTML, reducing the need to switch between HTML and CSS files.
- Simplified Class Naming: Utility classes eliminate the need for custom class names, saving time and reducing inconsistencies.
- Streamlined Collaboration: Using a utility-first approach helps avoid debates over class names and folder structures, keeping the specificity curve low.

Tailwind CSS version 4 integrates directly with CSS variables, making it easier than ever to implement a design token system—a process that was more cumbersome in Tailwind 3.

While we recommend using Tailwind’s utility classes whenever possible, it is also perfectly acceptable to create custom classes if certain styles, such as complex grid layouts with grid-template-areas, are required.

## Getting Started

To integrate the WebPros UI Library into your project:
1.	Installation: Use your preferred package manager (npm, yarn, etc.) to install the library.
2.	Usage: Import the desired components and add them to your project. Each component is designed to be self-contained, requiring minimal configuration.
3.	Customization: Leverage our design system to adapt components to your specific needs. Tailwind’s utility classes allow for quick styling adjustments, and custom CSS can be added if necessary.



## Installation

```bash
npm install webpros-ui
```

## Usage

### Nuxt.js 
Import the library as a plugin in your `nuxt.config.ts` file.

```typescript
// plugins/webpros-ui.ts
import '@webpros/webpros-ui-library'
```

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  plugins: ['webpros-ui'],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('wui-')
    }
  }
})
```

Inside your component you can now use the components.

```html
<template>
  <wui-button>Click me</wui-button>
</template>
```

### React
```typescript
import '@webpros/webpros-ui-library'

function App() {
  return (
    <wui-button>Click me</wui-button>
  )
}
```

### Inside PHP
Bei Elementen die Events aussenden, muss man die Events manuell abfangen.

```php
<script src="https://unpkg.com/@webpros/webpros-ui-library"></script>

<body>
  <wui-button>Click me</wui-button>
</body>
```

## Components

### WUI Button

```html
<wui-button>Click me</wui-button>
<wui-button variant=primary>Click me</wui-button>
<wui-button variant=secondary>Click me</wui-button>
<wui-button size=small isDisabled isLoading>
  Default Button
</wui-button>
<wui-button size=small isDisabled isLoading>
  Default Button
  <span slot="loading">
    waiting...
  </span>
</wui-button>

```

### CSS Variables
The Colors are defined in the CSS Variables, so you can easily override them.

```css
:root {
  --color-primary: #0066cc;
  --color-red-400: #dc3545;
  --color-green-400: #28a745;
  --color-yellow-400: #ffc107;
  --color-blue-400: #007bff;
  --color-gray-400: #6c757d;
}
```

## Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Contributing
Please read our [Contributing Guide](CONTRIBUTING.md) before submitting a Pull Request.

## License
MIT License - see the [LICENSE](LICENSE) file for details.

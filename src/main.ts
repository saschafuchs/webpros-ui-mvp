import './style.css';
import './components/button';
import './components/card';

// Example usage in the demo page
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="p-8 space-y-8">
    <h1 class="text-3xl font-bold">Lit UI Library Components</h1>
    
    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Buttons</h2>
      <div class="space-x-4">
        <ui-button>Default Button</ui-button>
        <ui-button variant="primary">Primary Button</ui-button>
        <ui-button variant="secondary">Secondary Button</ui-button>
      </div>
    </div>

    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Cards</h2>
      <div class="grid grid-cols-2 gap-4">
        <ui-card>
          <h3 slot="header">Card Title</h3>
          <p>This is a basic card component with header and content slots.</p>
        </ui-card>
      </div>
    </div>
  </div>
`;
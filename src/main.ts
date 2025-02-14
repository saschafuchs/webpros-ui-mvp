import './assets/css/wui.css'
import './index'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="p-8 space-y-8">
    <h1 class="text-3xl font-bold">WebPros UI Library Components</h1>

    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Buttons</h2>
      <div class="flex flex-row items-center gap-4">
        <wui-button size=small isLoading>
          Default Button
        </wui-button>
        <wui-button size=small isDisabled isLoading>
          Default Button
          <span slot="loading">
            waiting...
          </span>
        </wui-button>

        <wui-button variant=primary>Primary Button</wui-button>
        <wui-button variant=secondary size=large>Secondary Button</wui-button>
      </div>
    </div>


    <div>
      <h2 class="text-xl font-semibold">Badges</h2>
      <div class="space-x-4">
        <wui-badge size=sm color=error>Default Badge</wui-badge>
        <wui-badge color=primary>Primary Badge</wui-badge>
        <wui-badge color=secondary>Secondary Badge</wui-badge>
      </div>
    </div>

    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Cards</h2>
      <div class="grid grid-cols-2 gap-4">
        <wui-card>
          <h3 slot="header">Card Title ssds ssdsdd</h3>
          <p>This is a basic card component with header and content slots.</p>
        </wui-card>
        <wui-card>
          <p>This is a basic card</p>
        </wui-card
      </div>
    </div>
  </div>
`

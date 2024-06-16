import { Registry } from "@/registry/schema"

const ui: Registry = [
  {
    name: "aspect-ratio",
    type: "components:ui",
    dependencies: ["@radix-ui/react-aspect-ratio"],
    files: ["ui/aspect-ratio.tsx"],
  },
  {
    name: "avatar",
    type: "components:ui",
    dependencies: ["@radix-ui/react-avatar"],
    files: ["ui/avatar.tsx"],
  },
  {
    name: "badge",
    type: "components:ui",
    files: ["ui/badge.tsx"],
  },
  {
    name: "button",
    type: "components:ui",
    dependencies: ["@radix-ui/react-slot"],
    files: ["ui/button.tsx"],
  },
  {
    name: "calendar",
    type: "components:ui",
    dependencies: ["react-day-picker", "date-fns"],
    registryDependencies: ["button"],
    files: ["ui/calendar.tsx"],
  },
  {
    name: "card",
    type: "components:ui",
    files: ["ui/card.tsx"],
  },
  {
    name: "checkbox",
    type: "components:ui",
    dependencies: ["@radix-ui/react-checkbox"],
    files: ["ui/checkbox.tsx"],
  },
  {
    name: "collapse",
    type: "components:ui",
    dependencies: ["@radix-ui/react-accordion"],
    files: ["ui/collapse.tsx"],
  },
  {
    name: "collapsible",
    type: "components:ui",
    dependencies: ["@radix-ui/react-collapsible"],
    files: ["ui/collapsible.tsx"],
  },
  {
    name: "command",
    type: "components:ui",
    dependencies: ["cmdk"],
    registryDependencies: ["dialog"],
    files: ["ui/command.tsx"],
  },
  {
    name: "context-menu",
    type: "components:ui",
    dependencies: ["@radix-ui/react-context-menu"],
    files: ["ui/context-menu.tsx"],
  },
  {
    name: "dialog",
    type: "components:ui",
    dependencies: ["@radix-ui/react-dialog"],
    files: ["ui/dialog.tsx"],
  },
  {
    name: "drawer",
    type: "components:ui",
    dependencies: ["vaul", "@radix-ui/react-dialog"],
    files: ["ui/drawer.tsx"],
  },
  {
    name: "form",
    type: "components:ui",
    dependencies: [
      "@radix-ui/react-label",
      "@radix-ui/react-slot",
      "@hookform/resolvers",
      "zod",
      "react-hook-form",
    ],
    registryDependencies: ["button", "label"],
    files: ["ui/form.tsx"],
  },
  {
    name: "gauge",
    type: "components:ui",
    files: ["ui/gauge.tsx"],
  },
  {
    name: "hover-card",
    type: "components:ui",
    dependencies: ["@radix-ui/react-hover-card"],
    files: ["ui/hover-card.tsx"],
  },
  {
    name: "input",
    type: "components:ui",
    files: ["ui/input.tsx"],
  },
  {
    name: "kbd",
    type: "components:ui",
    files: ["ui/kbd.tsx"],
  },
  {
    name: "loading-dots",
    type: "components:ui",
    files: ["ui/loading-dots.tsx"],
  },
  {
    name: "label",
    type: "components:ui",
    dependencies: ["@radix-ui/react-label"],
    files: ["ui/label.tsx"],
  },
  {
    name: "menu",
    type: "components:ui",
    dependencies: ["@radix-ui/react-menu"],
    files: ["ui/menu.tsx"],
  },
  {
    name: "menubar",
    type: "components:ui",
    dependencies: ["@radix-ui/react-menubar"],
    files: ["ui/menubar.tsx"],
  },
  {
    name: "modal",
    type: "components:ui",
    dependencies: ["@radix-ui/react-alert-dialog"],
    registryDependencies: ["button"],
    files: ["ui/modal.tsx"],
  },
  {
    name: "navigation-menu",
    type: "components:ui",
    dependencies: ["@radix-ui/react-navigation-menu"],
    files: ["ui/navigation-menu.tsx"],
  },
  {
    name: "note",
    type: "components:ui",
    files: ["ui/note.tsx"],
  },
  {
    name: "pagination",
    type: "components:ui",
    registryDependencies: ["button"],
    files: ["ui/pagination.tsx"],
  },
  {
    name: "popover",
    type: "components:ui",
    dependencies: ["@radix-ui/react-popover"],
    files: ["ui/popover.tsx"],
  },
  {
    name: "progress",
    type: "components:ui",
    dependencies: ["@radix-ui/react-progress"],
    files: ["ui/progress.tsx"],
  },
  {
    name: "radio-group",
    type: "components:ui",
    dependencies: ["@radix-ui/react-radio-group"],
    files: ["ui/radio-group.tsx"],
  },
  {
    name: "resizable",
    type: "components:ui",
    dependencies: ["react-resizable-panels"],
    files: ["ui/resizable.tsx"],
  },
  {
    name: "scroll-area",
    type: "components:ui",
    dependencies: ["@radix-ui/react-scroll-area"],
    files: ["ui/scroll-area.tsx"],
  },
  {
    name: "select",
    type: "components:ui",
    dependencies: ["@radix-ui/react-select"],
    files: ["ui/select.tsx"],
  },
  {
    name: "sheet",
    type: "components:ui",
    dependencies: ["@radix-ui/react-dialog"],
    files: ["ui/sheet.tsx"],
  },
  {
    name: "show-more",
    type: "components:ui",
    dependencies: [],
    registryDependencies: ["button"],
    files: ["ui/show-more.tsx"],
  },
  {
    name: "skeleton",
    type: "components:ui",
    files: ["ui/skeleton.tsx"],
  },
  {
    name: "snippet",
    type: "components:ui",
    files: ["ui/snippet.tsx"],
  },
  {
    name: "sonner",
    type: "components:ui",
    dependencies: ["sonner", "next-themes"],
    files: ["ui/sonner.tsx"],
  },
  {
    name: "spinner",
    type: "components:ui",
    files: ["ui/spinner.tsx"],
  },
  {
    name: "stack",
    type: "components:ui",
    dependencies: [],
    files: ["ui/stack.tsx"],
  },
  {
    name: "toggle",
    type: "components:ui",
    dependencies: ["@radix-ui/react-switch"],
    files: ["ui/toggle.tsx"],
  },
  {
    name: "tabs",
    type: "components:ui",
    dependencies: ["@radix-ui/react-tabs"],
    files: ["ui/tabs.tsx"],
  },
  {
    name: "textarea",
    type: "components:ui",
    files: ["ui/textarea.tsx"],
  },
  {
    name: "toast",
    type: "components:ui",
    dependencies: ["@radix-ui/react-toast"],
    files: ["ui/toast.tsx", "ui/use-toast.ts", "ui/toaster.tsx"],
  },
  {
    name: "text",
    type: "components:ui",
    dependencies: [],
    files: ["ui/text.tsx"],
  },
  {
    name: "tooltip",
    type: "components:ui",
    dependencies: ["@radix-ui/react-tooltip"],
    files: ["ui/tooltip.tsx"],
  },
]

const example: Registry = [
  {
    name: "collapse-demo",
    type: "components:example",
    registryDependencies: ["collapse"],
    files: ["example/collapse-demo.tsx"],
  },
  {
    name: "modal-demo",
    type: "components:example",
    registryDependencies: ["modal", "button"],
    files: ["example/modal-demo.tsx"],
  },
  {
    name: "aspect-ratio-demo",
    type: "components:example",
    registryDependencies: ["aspect-ratio"],
    files: ["example/aspect-ratio-demo.tsx"],
  },
  {
    name: "avatar-demo",
    type: "components:example",
    registryDependencies: ["avatar"],
    files: ["example/avatar-demo.tsx"],
  },
  {
    name: "badge-demo",
    type: "components:example",
    registryDependencies: ["badge"],
    files: ["example/badge-demo.tsx"],
  },
  {
    name: "badge-sizes",
    type: "components:example",
    registryDependencies: ["badge"],
    files: ["example/badge-sizes.tsx"],
  },
  {
    name: "badge-icons",
    type: "components:example",
    registryDependencies: ["badge"],
    files: ["example/badge-icons.tsx"],
  },
  {
    name: "button-demo",
    type: "components:example",
    registryDependencies: ["button"],
    files: ["example/button-demo.tsx"],
  },
  {
    name: "button-disabled",
    type: "components:example",
    registryDependencies: ["button"],
    files: ["example/button-disabled.tsx"],
  },
  {
    name: "button-loading",
    type: "components:example",
    registryDependencies: ["button"],
    files: ["example/button-loading.tsx"],
  },
  {
    name: "button-prefix",
    type: "components:example",
    registryDependencies: ["button"],
    files: ["example/button-prefix.tsx"],
  },
  {
    name: "button-rounded",
    type: "components:example",
    registryDependencies: ["button"],
    files: ["example/button-rounded.tsx"],
  },
  {
    name: "button-shapes",
    type: "components:example",
    registryDependencies: ["button"],
    files: ["example/button-shapes.tsx"],
  },
  {
    name: "button-types",
    type: "components:example",
    registryDependencies: ["button"],
    files: ["example/button-types.tsx"],
  },
  {
    name: "calendar-demo",
    type: "components:example",
    registryDependencies: ["calendar"],
    files: ["example/calendar-demo.tsx"],
  },
  {
    name: "calendar-form",
    type: "components:example",
    registryDependencies: ["calendar", "form", "popover"],
    files: ["example/calendar-form.tsx"],
  },
  {
    name: "card-demo",
    type: "components:example",
    registryDependencies: ["card", "button", "toggle"],
    files: ["example/card-demo.tsx"],
  },
  {
    name: "card-with-form",
    type: "components:example",
    registryDependencies: ["button", "card", "input", "label", "select"],
    files: ["example/card-with-form.tsx"],
  },
  {
    name: "checkbox-demo",
    type: "components:example",
    registryDependencies: ["checkbox"],
    files: ["example/checkbox-demo.tsx"],
  },
  {
    name: "checkbox-disabled",
    type: "components:example",
    registryDependencies: ["checkbox"],
    files: ["example/checkbox-disabled.tsx"],
  },
  {
    name: "checkbox-form-multiple",
    type: "components:example",
    registryDependencies: ["checkbox", "form"],
    files: ["example/checkbox-form-multiple.tsx"],
  },
  {
    name: "checkbox-form-single",
    type: "components:example",
    registryDependencies: ["checkbox", "form"],
    files: ["example/checkbox-form-single.tsx"],
  },
  {
    name: "checkbox-with-text",
    type: "components:example",
    registryDependencies: ["checkbox"],
    files: ["example/checkbox-with-text.tsx"],
  },
  {
    name: "collapsible-demo",
    type: "components:example",
    registryDependencies: ["collapsible"],
    files: ["example/collapsible-demo.tsx"],
  },
  {
    name: "combobox-demo",
    type: "components:example",
    registryDependencies: ["command"],
    files: ["example/combobox-demo.tsx"],
  },
  {
    name: "combobox-dropdown-menu",
    type: "components:example",
    registryDependencies: ["command", "menu", "button"],
    files: ["example/combobox-dropdown-menu.tsx"],
  },
  {
    name: "combobox-form",
    type: "components:example",
    registryDependencies: ["command", "form"],
    files: ["example/combobox-form.tsx"],
  },
  {
    name: "combobox-popover",
    type: "components:example",
    registryDependencies: ["combobox", "popover"],
    files: ["example/combobox-popover.tsx"],
  },
  {
    name: "combobox-responsive",
    type: "components:example",
    registryDependencies: ["combobox", "popover", "drawer"],
    files: ["example/combobox-responsive.tsx"],
  },
  {
    name: "command-demo",
    type: "components:example",
    registryDependencies: ["command"],
    files: ["example/command-demo.tsx"],
  },
  {
    name: "command-dialog",
    type: "components:example",
    registryDependencies: ["command", "dialog"],
    files: ["example/command-dialog.tsx"],
  },
  {
    name: "context-menu-demo",
    type: "components:example",
    registryDependencies: ["context-menu"],
    files: ["example/context-menu-demo.tsx"],
  },
  {
    name: "date-picker-demo",
    type: "components:example",
    registryDependencies: ["button", "calendar", "popover"],
    files: ["example/date-picker-demo.tsx"],
    dependencies: ["date-fns"],
  },
  {
    name: "date-picker-form",
    type: "components:example",
    registryDependencies: ["button", "calendar", "form", "popover"],
    files: ["example/date-picker-form.tsx"],
    dependencies: ["date-fns"],
  },
  {
    name: "date-picker-with-presets",
    type: "components:example",
    registryDependencies: ["button", "calendar", "popover", "select"],
    files: ["example/date-picker-with-presets.tsx"],
    dependencies: ["date-fns"],
  },
  {
    name: "date-picker-with-range",
    type: "components:example",
    registryDependencies: ["button", "calendar", "popover"],
    files: ["example/date-picker-with-range.tsx"],
    dependencies: ["date-fns"],
  },
  {
    name: "dialog-demo",
    type: "components:example",
    registryDependencies: ["dialog"],
    files: ["example/dialog-demo.tsx"],
  },
  {
    name: "dialog-close-button",
    type: "components:example",
    registryDependencies: ["dialog", "button"],
    files: ["example/dialog-close-button.tsx"],
  },
  {
    name: "drawer-demo",
    type: "components:example",
    registryDependencies: ["drawer"],
    files: ["example/drawer-demo.tsx"],
  },
  {
    name: "drawer-dialog",
    type: "components:example",
    registryDependencies: ["drawer", "dialog"],
    files: ["example/drawer-dialog.tsx"],
  },
  {
    name: "gauge-demo",
    type: "components:example",
    registryDependencies: ["gauge"],
    files: ["example/gauge-demo.tsx"],
  },
  {
    name: "gauge-label",
    type: "components:example",
    registryDependencies: ["gauge"],
    files: ["example/gauge-label.tsx"],
  },
  {
    name: "gauge-color-scale",
    type: "components:example",
    registryDependencies: ["gauge"],
    files: ["example/gauge-color-scale.tsx"],
  },
  {
    name: "gauge-custom-color-range",
    type: "components:example",
    registryDependencies: ["gauge"],
    files: ["example/gauge-custom-color-range.tsx"],
  },
  {
    name: "gauge-custom-secondary-color",
    type: "components:example",
    registryDependencies: ["gauge"],
    files: ["example/gauge-custom-secondary-color.tsx"],
  },
  {
    name: "gauge-arc-priority",
    type: "components:example",
    registryDependencies: ["gauge"],
    files: ["example/gauge-arc-priority.tsx"],
  },
  {
    name: "menu-demo",
    type: "components:example",
    registryDependencies: ["menu"],
    files: ["example/menu-demo.tsx"],
  },
  {
    name: "menu-checkboxes",
    type: "components:example",
    registryDependencies: ["menu", "checkbox"],
    files: ["example/menu-checkboxes.tsx"],
  },
  {
    name: "menu-custom-trigger",
    type: "components:example",
    registryDependencies: ["menu"],
    files: ["example/menu-custom-trigger.tsx"],
  },
  {
    name: "menu-disabled-items",
    type: "components:example",
    registryDependencies: ["menu"],
    files: ["example/menu-disabled-items.tsx"],
  },
  {
    name: "menu-link-items",
    type: "components:example",
    registryDependencies: ["menu"],
    files: ["example/menu-link-items.tsx"],
  },
  {
    name: "menu-position",
    type: "components:example",
    registryDependencies: ["menu"],
    files: ["example/menu-position.tsx"],
  },
  {
    name: "menu-prefix",
    type: "components:example",
    registryDependencies: ["menu"],
    files: ["example/menu-prefix.tsx"],
  },
  {
    name: "menu-radio-group",
    type: "components:example",
    registryDependencies: ["menu", "radio-group"],
    files: ["example/menu-radio-group.tsx"],
  },
  {
    name: "hover-card-demo",
    type: "components:example",
    registryDependencies: ["hover-card"],
    files: ["example/hover-card-demo.tsx"],
  },
  {
    name: "input-demo",
    type: "components:example",
    registryDependencies: ["input"],
    files: ["example/input-demo.tsx"],
  },
  {
    name: "input-disabled",
    type: "components:example",
    registryDependencies: ["input"],
    files: ["example/input-disabled.tsx"],
  },
  {
    name: "input-prefix-suffix",
    type: "components:example",
    registryDependencies: ["input"],
    files: ["example/input-prefix-suffix.tsx"],
  },
  {
    name: "input-with-button",
    type: "components:example",
    registryDependencies: ["input", "button"],
    files: ["example/input-with-button.tsx"],
  },
  {
    name: "input-with-label",
    type: "components:example",
    registryDependencies: ["input", "button", "label"],
    files: ["example/input-with-label.tsx"],
  },
  {
    name: "input-with-text",
    type: "components:example",
    registryDependencies: ["input", "button", "label"],
    files: ["example/input-with-text.tsx"],
  },
  {
    name: "kbd-demo",
    type: "components:example",
    registryDependencies: ["kbd"],
    files: ["example/kbd-demo.tsx"],
  },
  {
    name: "kbd-combination",
    type: "components:example",
    registryDependencies: ["kbd"],
    files: ["example/kbd-combination.tsx"],
  },
  {
    name: "kbd-small",
    type: "components:example",
    registryDependencies: ["kbd"],
    files: ["example/kbd-small.tsx"],
  },
  {
    name: "loading-dots-demo",
    type: "components:example",
    registryDependencies: ["loading-dots"],
    files: ["example/loading-dots-demo.tsx"],
  },
  {
    name: "loading-dots-with-text",
    type: "components:example",
    registryDependencies: ["loading-dots"],
    files: ["example/loading-dots-with-text.tsx"],
  },
  {
    name: "label-demo",
    type: "components:example",
    registryDependencies: ["label"],
    files: ["example/label-demo.tsx"],
  },
  {
    name: "menubar-demo",
    type: "components:example",
    registryDependencies: ["menubar"],
    files: ["example/menubar-demo.tsx"],
  },
  {
    name: "navigation-menu-demo",
    type: "components:example",
    registryDependencies: ["navigation-menu"],
    files: ["example/navigation-menu-demo.tsx"],
  },
  {
    name: "note-demo",
    type: "components:example",
    registryDependencies: ["note"],
    files: ["example/note-demo.tsx"],
  },
  {
    name: "note-action",
    type: "components:example",
    registryDependencies: ["note"],
    files: ["example/note-action.tsx"],
  },
  {
    name: "note-success",
    type: "components:example",
    registryDependencies: ["note"],
    files: ["example/note-success.tsx"],
  },
  {
    name: "note-secondary",
    type: "components:example",
    registryDependencies: ["note"],
    files: ["example/note-secondary.tsx"],
  },
  {
    name: "note-violet",
    type: "components:example",
    registryDependencies: ["note"],
    files: ["example/note-violet.tsx"],
  },
  {
    name: "note-warning",
    type: "components:example",
    registryDependencies: ["note"],
    files: ["example/note-warning.tsx"],
  },
  {
    name: "note-error",
    type: "components:example",
    registryDependencies: ["note"],
    files: ["example/note-error.tsx"],
  },
  {
    name: "note-cyan",
    type: "components:example",
    registryDependencies: ["note"],
    files: ["example/note-cyan.tsx"],
  },
  {
    name: "note-disabled",
    type: "components:example",
    registryDependencies: ["note"],
    files: ["example/note-disabled.tsx"],
  },
  {
    name: "pagination-demo",
    type: "components:example",
    registryDependencies: ["pagination"],
    files: ["example/pagination-demo.tsx"],
  },
  {
    name: "popover-demo",
    type: "components:example",
    registryDependencies: ["popover"],
    files: ["example/popover-demo.tsx"],
  },
  {
    name: "progress-demo",
    type: "components:example",
    registryDependencies: ["progress"],
    files: ["example/progress-demo.tsx"],
  },
  {
    name: "radio-group-demo",
    type: "components:example",
    registryDependencies: ["radio-group"],
    files: ["example/radio-group-demo.tsx"],
  },
  {
    name: "radio-group-form",
    type: "components:example",
    registryDependencies: ["radio-group", "form"],
    files: ["example/radio-group-form.tsx"],
  },
  {
    name: "resizable-demo",
    type: "components:example",
    registryDependencies: ["resizable"],
    files: ["example/resizable-demo.tsx"],
  },
  {
    name: "resizable-demo-with-handle",
    type: "components:example",
    registryDependencies: ["resizable"],
    files: ["example/resizable-demo-with-handle.tsx"],
  },
  {
    name: "resizable-vertical",
    type: "components:example",
    registryDependencies: ["resizable"],
    files: ["example/resizable-vertical.tsx"],
  },
  {
    name: "resizable-handle",
    type: "components:example",
    registryDependencies: ["resizable"],
    files: ["example/resizable-handle.tsx"],
  },
  {
    name: "scroll-area-demo",
    type: "components:example",
    registryDependencies: ["scroll-area"],
    files: ["example/scroll-area-demo.tsx"],
  },
  {
    name: "scroll-area-horizontal-demo",
    type: "components:example",
    registryDependencies: ["scroll-area"],
    files: ["example/scroll-area-horizontal-demo.tsx"],
  },
  {
    name: "select-demo",
    type: "components:example",
    registryDependencies: ["select"],
    files: ["example/select-demo.tsx"],
  },
  {
    name: "select-scrollable",
    type: "components:example",
    registryDependencies: ["select"],
    files: ["example/select-scrollable.tsx"],
  },
  {
    name: "select-form",
    type: "components:example",
    registryDependencies: ["select"],
    files: ["example/select-form.tsx"],
  },
  {
    name: "sheet-demo",
    type: "components:example",
    registryDependencies: ["sheet"],
    files: ["example/sheet-demo.tsx"],
  },
  {
    name: "sheet-side",
    type: "components:example",
    registryDependencies: ["sheet"],
    files: ["example/sheet-side.tsx"],
  },
  {
    name: "show-more-demo",
    type: "components:example",
    registryDependencies: ["show-more"],
    files: ["example/show-more-demo.tsx"],
  },
  {
    name: "skeleton-demo",
    type: "components:example",
    registryDependencies: ["skeleton"],
    files: ["example/skeleton-demo.tsx"],
  },
  {
    name: "skeleton-card",
    type: "components:example",
    registryDependencies: ["skeleton"],
    files: ["example/skeleton-card.tsx"],
  },
  {
    name: "snippet-demo",
    type: "components:example",
    registryDependencies: ["snippet"],
    files: ["example/snippet-demo.tsx"],
  },
  {
    name: "snippet-inverted",
    type: "components:example",
    registryDependencies: ["snippet"],
    files: ["example/snippet-inverted.tsx"],
  },
  {
    name: "snippet-multi-line",
    type: "components:example",
    registryDependencies: ["snippet"],
    files: ["example/snippet-multi-line.tsx"],
  },
  {
    name: "snippet-no-prompt",
    type: "components:example",
    registryDependencies: ["snippet"],
    files: ["example/snippet-no-prompt.tsx"],
  },
  {
    name: "snippet-callback",
    type: "components:example",
    registryDependencies: ["snippet"],
    files: ["example/snippet-callback.tsx"],
  },
  {
    name: "snippet-variants",
    type: "components:example",
    registryDependencies: ["snippet"],
    files: ["example/snippet-variants.tsx"],
  },
  {
    name: "sonner-demo",
    type: "components:example",
    registryDependencies: ["sonner"],
    files: ["example/sonner-demo.tsx"],
  },
  {
    name: "spinner-demo",
    type: "components:example",
    registryDependencies: ["spinner"],
    files: ["example/spinner-demo.tsx"],
  },
  {
    name: "spinner-size",
    type: "components:example",
    registryDependencies: ["spinner"],
    files: ["example/spinner-size.tsx"],
  },
  {
    name: "stack-demo",
    type: "components:example",
    registryDependencies: ["stack"],
    files: ["example/stack-demo.tsx"],
  },
  {
    name: "stack-padding",
    type: "components:example",
    registryDependencies: ["stack"],
    files: ["example/stack-padding.tsx"],
  },
  {
    name: "stack-responsive",
    type: "components:example",
    registryDependencies: ["stack"],
    files: ["example/stack-responsive.tsx"],
  },
  {
    name: "status-dot-demo",
    type: "components:example",
    files: ["example/status-dot-demo.tsx"],
  },
  {
    name: "status-dot-label",
    type: "components:example",
    files: ["example/status-dot-label.tsx"],
  },
  {
    name: "tabs-demo",
    type: "components:example",
    registryDependencies: ["tabs"],
    files: ["example/tabs-demo.tsx"],
  },
  {
    name: "tabs-controlled",
    type: "components:example",
    registryDependencies: ["tabs"],
    files: ["example/tabs-controlled.tsx"],
  },
  {
    name: "tabs-disable-specific-tabs",
    type: "components:example",
    registryDependencies: ["tabs"],
    files: ["example/tabs-disable-specific-tabs.tsx"],
  },
  {
    name: "textarea-demo",
    type: "components:example",
    registryDependencies: ["textarea"],
    files: ["example/textarea-demo.tsx"],
  },
  {
    name: "textarea-disabled",
    type: "components:example",
    registryDependencies: ["textarea"],
    files: ["example/textarea-disabled.tsx"],
  },
  {
    name: "textarea-form",
    type: "components:example",
    registryDependencies: ["textarea", "form"],
    files: ["example/textarea-form.tsx"],
  },
  {
    name: "textarea-with-button",
    type: "components:example",
    registryDependencies: ["textarea", "button"],
    files: ["example/textarea-with-button.tsx"],
  },
  {
    name: "textarea-with-label",
    type: "components:example",
    registryDependencies: ["textarea", "label"],
    files: ["example/textarea-with-label.tsx"],
  },
  {
    name: "textarea-with-text",
    type: "components:example",
    registryDependencies: ["textarea", "label"],
    files: ["example/textarea-with-text.tsx"],
  },
  {
    name: "toast-demo",
    type: "components:example",
    registryDependencies: ["toast"],
    files: ["example/toast-demo.tsx"],
  },
  {
    name: "toast-destructive",
    type: "components:example",
    registryDependencies: ["toast"],
    files: ["example/toast-destructive.tsx"],
  },
  {
    name: "toast-simple",
    type: "components:example",
    registryDependencies: ["toast"],
    files: ["example/toast-simple.tsx"],
  },
  {
    name: "toast-with-action",
    type: "components:example",
    registryDependencies: ["toast"],
    files: ["example/toast-with-action.tsx"],
  },
  {
    name: "toast-with-title",
    type: "components:example",
    registryDependencies: ["toast"],
    files: ["example/toast-with-title.tsx"],
  },
  {
    name: "toggle-demo",
    type: "components:example",
    registryDependencies: ["toggle"],
    files: ["example/toggle-demo.tsx"],
  },
  {
    name: "toggle-disabled",
    type: "components:example",
    registryDependencies: ["toggle"],
    files: ["example/toggle-disabled.tsx"],
  },
  {
    name: "toggle-size",
    type: "components:example",
    registryDependencies: ["toggle"],
    files: ["example/toggle-size.tsx"],
  },
  {
    name: "tooltip-box-align",
    type: "components:example",
    registryDependencies: ["tooltip"],
    files: ["example/tooltip-box-align.tsx"],
  },
  {
    name: "tooltip-components",
    type: "components:example",
    registryDependencies: ["tooltip"],
    files: ["example/tooltip-components.tsx"],
  },
  {
    name: "tooltip-custom-content",
    type: "components:example",
    registryDependencies: ["tooltip"],
    files: ["example/tooltip-custom-content.tsx"],
  },
  {
    name: "tooltip-custom-type",
    type: "components:example",
    registryDependencies: ["tooltip"],
    files: ["example/tooltip-custom-type.tsx"],
  },
  {
    name: "tooltip-demo",
    type: "components:example",
    registryDependencies: ["tooltip"],
    files: ["example/tooltip-demo.tsx"],
  },
  {
    name: "tooltip-no-delay",
    type: "components:example",
    registryDependencies: ["tooltip"],
    files: ["example/tooltip-no-delay.tsx"],
  },
  {
    name: "tooltip-other",
    type: "components:example",
    registryDependencies: ["tooltip"],
    files: ["example/tooltip-other.tsx"],
  },
  {
    name: "text-demo",
    type: "components:example",
    files: ["example/text-demo.tsx"],
  },
  {
    name: "text-align",
    type: "components:example",
    files: ["example/text-align.tsx"],
  },
  {
    name: "text-clamp",
    type: "components:example",
    files: ["example/text-clamp.tsx"],
  },
  {
    name: "text-color",
    type: "components:example",
    files: ["example/text-color.tsx"],
  },
  {
    name: "text-modifiers",
    type: "components:example",
    files: ["example/text-modifiers.tsx"],
  },
  {
    name: "text-monospace",
    type: "components:example",
    files: ["example/text-monospace.tsx"],
  },
  {
    name: "text-polymorphic",
    type: "components:example",
    files: ["example/text-polymorphic.tsx"],
  },
  {
    name: "text-responsive",
    type: "components:example",
    files: ["example/text-responsive.tsx"],
  },
  {
    name: "text-truncate",
    type: "components:example",
    files: ["example/text-truncate.tsx"],
  },
  {
    name: "text-variants",
    type: "components:example",
    files: ["example/text-variants.tsx"],
  },
  {
    name: "mode-toggle",
    type: "components:example",
    files: ["example/mode-toggle.tsx"],
  },
]

export const registry: Registry = [...ui, ...example]

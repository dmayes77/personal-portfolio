export const uiIcons = {
  code: {
    kind: "ui",
    nodes: [
      { tag: "path", props: { d: "m8 8-4 4 4 4" } },
      { tag: "path", props: { d: "m16 8 4 4-4 4" } },
      { tag: "path", props: { d: "m13.5 4-3 16" } },
    ],
  },
  calendar: {
    kind: "ui",
    nodes: [
      { tag: "path", props: { d: "M7 3v4M17 3v4M4 9h16" } },
      { tag: "rect", props: { x: "4", y: "5", width: "16", height: "15", rx: "2" } },
    ],
  },
  target: {
    kind: "ui",
    nodes: [
      { tag: "circle", props: { cx: "12", cy: "12", r: "8" } },
      { tag: "circle", props: { cx: "12", cy: "12", r: "4" } },
      {
        tag: "circle",
        props: { cx: "12", cy: "12", r: "1.5", fill: "currentColor", stroke: "none" },
      },
    ],
  },
  person: {
    kind: "ui",
    nodes: [
      { tag: "circle", props: { cx: "12", cy: "8", r: "3.25" } },
      { tag: "path", props: { d: "M5 20a7 7 0 0 1 14 0" } },
    ],
  },
  team: {
    kind: "ui",
    nodes: [
      { tag: "circle", props: { cx: "8", cy: "9", r: "2.5" } },
      { tag: "circle", props: { cx: "16", cy: "9", r: "2.5" } },
      { tag: "path", props: { d: "M3.5 19a4.5 4.5 0 0 1 9 0" } },
      { tag: "path", props: { d: "M11.5 19a4.5 4.5 0 0 1 9 0" } },
    ],
  },
  rocket: {
    kind: "ui",
    nodes: [
      { tag: "path", props: { d: "M14 4c3 1 6 4 6 10-3.5 1-7 .25-9.75-2.5S6.75 5.5 8 2c6 0 6 2 6 2Z" } },
      { tag: "path", props: { d: "M9 13 4 18" } },
      { tag: "path", props: { d: "M10.5 8.5h.01" } },
      { tag: "path", props: { d: "M6 14c-1.5.5-3 2-4 4 2-.75 3.5-1.5 4-3" } },
    ],
  },
  globe: {
    kind: "ui",
    nodes: [
      { tag: "circle", props: { cx: "12", cy: "12", r: "9" } },
      { tag: "path", props: { d: "M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" } },
    ],
  },
  github: {
    kind: "ui",
    nodes: [
      {
        tag: "path",
        props: {
          d: "M9 19c-4 1.25-4-2-6-2 M15 21v-3.5a3 3 0 0 0-.85-2.1c2.85-.3 5.85-1.4 5.85-6.4A5 5 0 0 0 18.5 5.6 4.65 4.65 0 0 0 18.4 2S17.2 1.7 15 3.2a13 13 0 0 0-6 0C6.8 1.7 5.6 2 5.6 2A4.65 4.65 0 0 0 5.5 5.6 5 5 0 0 0 4 9c0 5 3 6.1 5.85 6.4A3 3 0 0 0 9 17.5V21",
        },
      },
    ],
  },
  linkedin: {
    kind: "ui",
    nodes: [
      { tag: "path", props: { d: "M7 9v8" } },
      { tag: "path", props: { d: "M7 6.25h.01" } },
      { tag: "path", props: { d: "M11 17V9" } },
      { tag: "path", props: { d: "M11 12.5a3 3 0 0 1 6 0V17" } },
    ],
  },
  mail: {
    kind: "ui",
    nodes: [
      { tag: "rect", props: { x: "3", y: "5", width: "18", height: "14", rx: "2" } },
      { tag: "path", props: { d: "m4 7 8 6 8-6" } },
    ],
  },
  fileText: {
    kind: "ui",
    nodes: [
      { tag: "path", props: { d: "M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" } },
      { tag: "path", props: { d: "M14 3v5h5" } },
      { tag: "path", props: { d: "M9 13h6" } },
      { tag: "path", props: { d: "M9 17h6" } },
    ],
  },
  menu: {
    kind: "ui",
    nodes: [
      { tag: "path", props: { d: "M4 6h16" } },
      { tag: "path", props: { d: "M4 12h16" } },
      { tag: "path", props: { d: "M4 18h16" } },
    ],
  },
  close: {
    kind: "ui",
    nodes: [
      { tag: "path", props: { d: "M6 6l12 12" } },
      { tag: "path", props: { d: "M18 6 6 18" } },
    ],
  },
};

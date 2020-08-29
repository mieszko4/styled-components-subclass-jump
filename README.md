# styled-components-subclass-jump

This repo shows the problem with jumping layout because of entire class swap
See: https://github.com/styled-components/styled-components/issues/3240

## Environment

* Linux Mint 20 Cinnamon
* Version 84.0.4147.89 (Official Build) (64-bit)
* nextjs@9.5.2

## The problem

The layout jumps when custom **local** font is included and applied on the paragraph that is above the carousel.
The carousel works in the way that it first pre-renders all the items
and then sets `z-index: -1` for inactive elements and `z-index: auto` for the active element.
The swap happens every 2s.
Only on the first swap the jumpy effect is visible.

## How to reproduce?

* Checkout the bug: `git checkout 89954bd64caf8959d55c411479d41d8b53fbf5ae`
* `npm ci`
* `npm run dev`
* open chrome on http://localhost:3000/
* wait for 2s

Note that it only happens on dev build, (when running `npm run build && npm run start` it is not reproducible).


## Deprecated

I tried to reproduce this in codepen but I did not manage to.
The example **does not** reproduce the bug probably because font is not loaded locally: https://codepen.io/mieszko4/pen/YzqQEJm
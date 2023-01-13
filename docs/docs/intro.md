---
id: "Intro"
title: "Introduction"
custom_edit_url: null
sidebar_position: 0
---

# Introduction

## Welcome

Hello and welcome to using NodeSignals! NodeSignals is a Node.js Signal Implementation designed to be close in usage to Roblox's Signals.

## How do I use them?

To start using NodeSignals, first import or require the module.

```js
// TS

import { NodeSignal } from "nodesignals"

// JS

const { NodeSignal } = require("nodesignals")
```

From there you can create a new NodeSignal, like so.

```js
const Signal = new NodeSignal()
```

To listen to an event you can do the following.

```js
Signal.Connect((/*Args Go Here*/) => {

})
```

To fire the above event you can just simply do the following.

```js
Signal.Fire(/*Args Go Here*/)
```
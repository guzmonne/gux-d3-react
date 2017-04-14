# gux-d3-react
> This projects aims to try different integrations between React and D3.

Two main integrations are tested:

1. Making React render almost all the elements, and just use D3 to calculate the data position.
2. Using React to render a main container component, who passes information to its children. Then, let D3 handle the creation of all the chart components. It is wrapped into react by using the `componentDidMount`and `componentWillUpdate` lifecycle methods.

Both have its pros and cons.

### React to render and D3 to calculate

With the first one, the main problem I have is that there are still some components that are difficult to draw without using D3. For example the Axis. D3 is incredibly powerful when drawing the axis. Emulating that level of complexity on React doesn't seem practical. So, I just use D3 for those components.

Another proble is that I have not find a simple way to integrate D3 animations API to the components created this way. The animations should be made by React, and I haven't found a simple way to do them.

### React as glue and D3 to calculate and render

One of the main features I was looking for this charts was responsiveness. I could not make a D3 + React integration for a responsive chart, that used D3 entirely to render to the page. Basically, I am using the same `Chart`component for both integrations methods. All the other components use D3 for all the rendering, except for a container element (`<g></g>`) that holds all the component rendered elements.

By using D3 to render most of the components we loose some of React rendering advantages and control. On the other hand, building components is much simple since we are using D3 directly. I have no idea if this method leaves the door open for memory leaks, or if it impacts performance on any way. The demo example looks a little bit slugish when resizing the page, but that can probably be mitigated by throttling the component re-render.

I haven't really tried to add the D3 animations API to these components to see if they fit. Hopefully I can make them work.

## Project summary

The idea was to create the same examples using both metodologies. The components whith the `D3` prefix are the ones using D3 to render most of the elements. You can see by checking the example page that both methods give the same result. At least visually. I haven't tested the performance of both methods.

[Example Page](https://guzmonne.github.io/gux-d3-react/)

## Inspiration

All the charts were created by following the code inside the "Build Interactive JavaScript Charts with D3 v4" course by Ben Clinkingbeard on [egghead.io](https://egghead.io/). I did use different data and adapted the code to work with React.

## Thoughts

After building both sets of components I think I like more the second method. It does require a deeper knowledge of D3 but it simplifies adding the code on online examples.










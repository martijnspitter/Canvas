CANVAS APP

The canvas app is currently still under development but the basic functionallity is there. The app is intended
to create flowcharts to serve as a visual aid when designing web apps.

Proof of concept is complete. State of the app is transferable via the url.
On each state change the hash url is updated. When a page (re-)load takes place the hash url gets processed and the state is recalculated based on the url.

Current functionality:
Left sidebar shows the shapes that can be created. It also shows an overview of all created shapes with their current position and text if that is set. Shapes are droppable on the canvas. Shapes can also be clicked and then they are created on a fixed position. The right sidebar shows the details (height, width, color, position) of the selected shape. These details can also be updated.

Yet to implement:
Drawing of arrows between items to show relationships
Selecting items from list on left sidebar
Setting background color of canvas
Change text via right sidebar
Performance:
Performance is hindered by the setting of the url when +20 items are present. Current idea as a solution / workaround would be to add a share button which gives a link. Never set the url. On page load take url and get state from it and then reset url back to baseUrl. And only get state if hash url is present.
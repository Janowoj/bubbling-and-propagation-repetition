const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

// grandparent.addEventListener('click', e => {
//     console.log(e.target);
// });

// the outpit will be the child element
//  <div class="grandparent"></div>

// =============================== //

// EVENT BUBBLING: when an event happens on an element, 
// it first runs the handlers on it, then on its parent, then all the way up on other ancestors.



// grandparent.addEventListener(
//     'click',
//     e => {
//         console.log("grandparent capture")
//     },
//     { capture: true });

// grandparent.addEventListener(
//     'click',
//     e => {
//         console.log("grandparent bubble");
//     });


// parent.addEventListener(
//     'click',
//     e => {
//         console.log("parent capture")
//     },
//     { capture: true });

// parent.addEventListener(
//     'click',
//     e => {
//         console.log("parent bubble");
//     });


// child.addEventListener(
//     'click',
//     e => {
//         console.log("child capture")
//     },
//     { capture: true });

// child.addEventListener(
//     'click',
//     e => {
//         console.log("child bubble");
//     });


// document.addEventListener(
//     'click',
//     e => {
//         console.log("document capture");
//     },
//     { capture: true });

//  output will be child, parent, grandparent

// document.body.addEventListener('click', e => {
//     console.log("document bubble");
// })
// output will be document capture, child capture, parent capture, child capure,
// child bubble, parent bubble, grandparent bubble, document bubble

// =============================== //

// EVENT CAPTURING: the event starts from the top of the DOM tree
// and goes down until it reaches the target element.

// BUBBLING RUNS FIRST, THEN CAPTURING RUNS
// capturing starts from the uotside and goes inwards, bubbling starts from the inside and goes outwards

// events above are bubbling events.
// To make them capturing events, add a third parameter to the addEventListener method

// =============================== //

// STOP THE PROPAGATION OF AN EVENT

// grandparent.addEventListener(
//     'click',
//     e => {
//         console.log("grandparent capture")
//     },
//     { capture: true });

// grandparent.addEventListener(
//     'click',
//     e => {
//         console.log("grandparent bubble");
//     });


// parent.addEventListener(
//     'click',
//     e => {
//         // e.stopPropagation(),
//         console.log("parent capture")
//     },
//     { capture: true });

// parent.addEventListener(
//     'click',
//     e => {
//         console.log("parent bubble");
//     });


// child.addEventListener(
//     'click',
//     e => {

//         console.log("child capture")
//     },
//     { capture: true });

// child.addEventListener(
//     'click',
//     e => {
//         console.log("child bubble");
//         e.stopPropagation()
//     });


// document.addEventListener(
//     'click',
//     e => {
//         console.log("document capture");
//     },
//     { capture: true });

// document.body.addEventListener(
//     'click',
//     e => {
//         console.log("document bubble");
//     })

// output: document capture grandparent capture parent capture
// because of the stopPropagation() method, the event stops bubbling up the DOM tree.

//  if we move the stopPropagation() method to the child event listener, the output will be:
//  document capture grandparent capture parent capture child capture child bubble.

grandparent.addEventListener(
    'click',
    e => {
        console.log("grandparent");
    });

parent.addEventListener(
    'click',
    e => {
        console.log("parent");
    });

child.addEventListener(
    'click',
    e => {
        console.log("child ");
    });







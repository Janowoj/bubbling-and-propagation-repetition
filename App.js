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

//  ONCE: if we want to run an event listener only once, we can use the once parameter (THIRD PARAMETER):

// grandparent.addEventListener(
//     'click',
//     e => {
//         console.log("grandparent");
//     });

// parent.addEventListener(
//     'click',
//     e => {
//         console.log("parent");
//     },
//     { once: true });

// child.addEventListener(
//     'click',
//     e => {
//         console.log("child ");
//     });

// clicking on the parent element will only run the event listener onc, e.g.: clicking on parent,
// the output will be: grandparent, parent, child. 
// Clicking on parent again the output will be: grandparent, child.

// .removeEventListener() method: 

// function printHi() {
//     console.log("hi");
// }

// parent.addEventListener(
//     'click',
//     printHi);

// setTimeout(() => {
//     parent.removeEventListener('click', printHi);
// }, 2000);

// the event listener will be removed after 2 seconds.

// DELEGATION: we can use event delegation to add event listeners to elements that are not yet on the page

// const divs = document.querySelectorAll('div');

// console.log(divs);

// divs.forEach(div => {
//     div.addEventListener('click', () => {
//         console.log("hi");
//     })
// });

// document.body.addEventListener('click', e => {
//     if (e.target.matches('div')) {
//         console.log("hi");
//     };
// });

// const newDiv = document.createElement('div');
// newDiv.style.width = '200px';
// newDiv.style.height = '200px';
// newDiv.style.backgroundColor = 'purple';
// document.body.append(newDiv);

//  the new div will not have the event listener attached to it, 
// because it was created after the event listener was added to the divs.

// newDiv.addEventListener('click', () => {
//     console.log("new div");
// });
// document.body.append(newDiv);
// output: new div

// instead of this we can use event delegation:

document.body.addEventListener('click', 'div', e => {
    console.log("hi");
});

const newDiv = document.createElement('div');
newDiv.style.width = '200px';
newDiv.style.height = '200px';
newDiv.style.backgroundColor = 'purple';
document.body.append(newDiv);

// when somebody click inside the div, you will see the output: hi, also in the newDiv.

// super useful funkction:

addGlobalEventListener('click', e => {
    if (e.target.matches('div')) {
        console.log("hi");
    };
});

function addGlobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e);
    });
}













// Select the node that will be observed for mutations
const targetNode = document.querySelector('.messages-list');


// Options for the observer (which mutations to observe)
const config = { childList: true };

// Callback function to execute when mutations are observed
const callback = function(mutationList, observer) {
    // Use traditional 'for loops' for IE 11
    for (const mutation of mutationList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);
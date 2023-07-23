const faqs = [
    {
        id: 1,
        title: "How to think about a Accordion?",
        text: "Imagine you have a Frequently Asked Questions (FAQ) page with multiple sections for different topics. Each section contains a question and its answer. You want to create an interactive FAQ where users can click on a question to reveal its answer and collapse other answers if they are currently open. You can use a function similar to toggleAccordion to achieve this behavior.",
    },
    {
        id: 2,
        title: "Explain the 'toggleAccordion' function",
        text: `The 'toggleAccordion' function is used to control the state of the accordion items in the 'AccordionList' component. When an item's title is clicked, this function is called, and it takes the 'id' of the clicked item as its argument. It checks whether the id passed as an argument is the same as the current value of the 'accordionOpen' state.

        > If 'accordionOpen' is equal to the 'id', it means the clicked item is already open, so the function sets the 'accordionOpen' state to '0'. This effectively closes the item, as '0' typically represents a closed state.

        > If accordionOpen is not equal to the id, it means the clicked item is currently closed or a different item is open.In this case, the function sets the accordionOpen state to the id passed as an argument.This opens the clicked item.

        In summary, the 'toggleAccordion' function toggles the state of the accordion item with the given 'id', either opening it if it's closed or closing it if it's open.`,
    },
    {
        id: 3,
        title: "Steps to create an accordion list.",
        text: `To create an accordion toggle function in a React project, you can follow these steps:

1> Set up the project: Create a new React project or use an existing one, depending on your requirements.

2> Component structure: Decide on the structure of your accordion. Each accordion item typically consists of a header and content section.

3> Create the AccordionItem component: Create a separate component for each accordion item that receives a title and content as props.

4> Manage state: In the parent component, manage the state that keeps track of the currently expanded item. When an accordion item is clicked, update the state to reflect the currently expanded item.

5> Toggle functionality: Based on the state, toggle the display of content for each accordion item. The item whose index matches the expanded state should have its content displayed, while others should remain hidden.`,
    },
];

export default faqs
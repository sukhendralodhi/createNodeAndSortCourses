const courses = [
    {
        name: "Complete rectjs course",
        price: "2.3"
    },
    {
        name: "Complete angular course",
        price: "2.5"
    },
    {
        name: "Complete MERN course",
        price: "2.9"
    },
    {
        name: "Complete c++ course",
        price: "2.6"
    },
    {
        name: "Complete Django course",
        price: "2.1"
    },{
        name: "Complete Mongo DB course",
        price: "1.1"
    },{
        name: "Complete JavaScript course",
        price: "1.8"
    }
];
function generateList() {
    const ul = document.querySelector('.list-group');
    ul.innerHTML = "";
    courses.forEach(course => {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        
        const name = document.createTextNode(course.name);
        li.appendChild(name);

        const span = document.createElement('span');
        span.classList.add('float-right');

        const price = document.createTextNode(" $" + course.price);
        span.appendChild(price);

        li.appendChild(span);
        ul.appendChild(li);
    })
}
// generateList();
window.addEventListener('load', generateList);

const button1 = document.querySelector('.sort-btn');
button1.addEventListener('click', () => {
    courses.sort((a,b) => a.price - b.price);
    generateList();
});

const button2 = document.querySelector('.sort-btn-high');
button2.addEventListener('click', () => {
    courses.sort((a,b) => b.price - a.price);
    generateList();
})

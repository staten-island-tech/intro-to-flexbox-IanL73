// Product object
const products = [
    {
        title: "Perfectly Generic Object",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cube_with_Blender.svg/2048px-Cube_with_Blender.svg.png",
        desc: "Perfectly generic, and perfectly useless.",
        price: 1,
        class: "Red"
    },
    {
        title: "Notably Pointy Object",
        image: "https://i.redd.it/njnnepzm1q071.png",
        desc: "Don't step on it. If you do you'll regret it.",
        price: 2,
        class: "Blue"
    },
    {
        title: "Probably Magical Dodecahedron",
        image: "https://i.redd.it/mr4v2bnrwp241.jpg",
        desc: "Wow, wouldja look at this thing.",
        price: 3,
        class: "Green"
    },
    {
        title: "Miniature Jungle Gym",
        image: "https://cdn.renderhub.com/mranycad/wireframe-icosahedron/wireframe-icosahedron-01.jpg",
        desc: "You probably shouldn't use THIS for your D&D games...",
        price: 4,
        class: "Yellow"
    },
    {
        title: "Perfectly Generic Spheroid",
        image: "https://th.bing.com/th/id/R.7a9f155f8fb29b4ae07f8a6f1f79a505?rik=WmeTslCSTskv6g&riu=http%3a%2f%2fvbs.arachnoid.com%2fblender_make_a_planet%2fgraphics%2ftutor02.png&ehk=Od9oCYReru9%2bDSib%2bMJsJ8PThXIDylyjkl8th62Z4vM%3d&risl=&pid=ImgRaw&r=0",
        desc: "Perfectly generic, and perfectly useless. Now in ball form!",
        price:5,
        class: "Eyes"
    },
    {
        title: "3D Modeling Inside Joke",
        image: "https://preview.free3d.com/img/2016/04/2269198088818132027/ngl2w9n3.jpg",
        desc: "Pip pip cherio it's tea time luve tata Bri ish",
        price:6,
        class: "Red"
    },
    {
        title: "Ford f-150",
        image: "https://tse2.mm.bing.net/th/id/OIP.gks7JyrzVOXDEgBfeyfcrQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        desc: "In 1975, the F-150 was introduced in between the F-100 and t",
        price:7,
        class: "Blue"
    },
    {
        title: "Pastel Pink Cone",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Blender-mesh-cone.png",
        desc: "You probably don't want to step on this one either...",
        price:8,
        class: "Green"
    },
    {
        title: "Vertical Slab",
        image: "https://minecraft-max.net/upload/iblock/5f5/g0srejqv72k3keztt94rc0bt2wvu1a3h.png",
        desc: "I don't see what the fuss is about, honestly.",
        price:9,
        class: "Yellow"
    },
    {
        title: "Non Functional Token",
        image: "https://techterms.com/img/xl/right-click_440.jpg",
        desc: "Why would you ever buy this? Just, Why?? It's just an image!",
        price:10,
        class: "Eyes"
    },
    {
        title: "Four Dimensional Hypercube",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/8-cell-simple.gif/250px-8-cell-simple.gif",
        desc: "Perfectly generic, for four dimensional beings.",
        price:11,
        class: "Red"
    },
    {
        title: "A Second Perfectly Generic Object",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cube_with_Blender.svg/2048px-Cube_with_Blender.svg.png",
        desc: "Still perfectly generic, and still perfecty useless.",
        price:12,
        class: "Blue"
    },
    {
        title: "cube",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cube_with_Blender.svg/2048px-Cube_with_Blender.svg.png",
        desc: "blah blah blah blah blah blah blah blah",
        price: 13,
        class: "Green"
    },
    {
        title: "cube",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cube_with_Blender.svg/2048px-Cube_with_Blender.svg.png",
        desc: "blah blah blah blah blah blah blah blah",
        price:14,
        class: "Yellow"
    },
    {
        title: "cube",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cube_with_Blender.svg/2048px-Cube_with_Blender.svg.png",
        desc: "blah blah blah blah blah blah blah blah",
        price:15,
        class: "Eyes"
    },
    {
        title: "cube",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cube_with_Blender.svg/2048px-Cube_with_Blender.svg.png",
        desc: "blah blah blah blah blah blah blah blah",
        price:16,
        class: "Red"
    },
    {
        title: "cube",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cube_with_Blender.svg/2048px-Cube_with_Blender.svg.png",
        desc: "blah blah blah blah blah blah blah blah",
        price:17,
        class: "Blue"
    },
    {
        title: "cube",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cube_with_Blender.svg/2048px-Cube_with_Blender.svg.png",
        desc: "blah blah blah blah blah blah blah blah",
        price:18,
        class: "Green"
    },
    {
        title: "cube",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cube_with_Blender.svg/2048px-Cube_with_Blender.svg.png",
        desc: "blah blah blah blah blah blah blah blah",
        price:19,
        class: "Yellow"
    },
    {
        title: "cube",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cube_with_Blender.svg/2048px-Cube_with_Blender.svg.png",
        desc: "blah blah blah blah blah blah blah blah",
        price:20,
        class: "Eyes"
    },
]


// Inject Function
function inject(product){
    //query the html where we inject the card
    const container = document.querySelector(".shop");
    container.insertAdjacentHTML(
        "beforeend",
        `<div class="item" data-title="${product.title}" price="${product.price}" id="$>
            <img class="item-image" src="${product.image}"/>
            <h2 class="item-name">${product.title}</h2>
            <h3 class="item-description">${product.desc}</h3>
            <h4 class="item-price">${product.price}$</h4>
            <h4 class="item-class">${product.class}</h4>
            <button class="item-buy">add to cart</button>
        </div>`
    );
}
// Apply Inject Function for each product in object
/* function filter(){
    const filters = document.querySelectorAll(".filter");
    console.log(filters)
    filters.forEach((filter) =>
        filter.addEventListener("click", function(event) {
            let criteria = event.target.closest(".filter").textContent
            console.log(criteria)
            let filteredproducts = products.filter((product) => product.class === criteria)
            filteredproducts.forEach((filteredproduct)=> inject(filteredproduct))
        })
    );
}
filter(); */
products.forEach((product) => inject(product))


function getCards(){
    const buttons = document.querySelectorAll(".item-buy");
    buttons.forEach((buy) =>    
        buy.addEventListener("click", function(event) {
            let price = event.target.closest(".item").getAttribute("price");
            console.log(price)
            const item = products.find((product)=> product.title === name)
            console.log(item)
            const container = document.querySelector(".cart");
            container.insertAdjacentHTML(
                "beforeend",
                `<div class="bought">
                    <h2 class="bought-item">${name} - ${item.price}$</h2>
                    <img class="bought-image" src="${item.image}"/>
                </div>`
            )
        })
    );
}
getCards();
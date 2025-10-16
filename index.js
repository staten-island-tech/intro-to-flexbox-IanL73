// Product object
const products = [
    {
        title: "Perfectly Generic Object",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cube_with_Blender.svg/2048px-Cube_with_Blender.svg.png",
        desc: "Perfectly generic, and perfectly useless.",
        price: 1
    },
    {
        title: "Notably Pointy Object",
        image: "https://i.redd.it/njnnepzm1q071.png",
        desc: "Don't step on it. If you do you'll regret it.",
        price: 2
    },
    {
        title: "Probably Magical Dodecahedron",
        image: "https://i.redd.it/mr4v2bnrwp241.jpg",
        desc: "Wow, wouldja look at this thing.",
        price: 3
    },
    {
        title: "Mimiature Jungle Gym",
        image: "https://cdn.renderhub.com/mranycad/wireframe-icosahedron/wireframe-icosahedron-01.jpg",
        desc: "You probably shouldn't use THIS for your D&D games...",
        price: 4
    },
    {
        title: "Perfectly Generic Spheroid",
        image: "https://th.bing.com/th/id/R.7a9f155f8fb29b4ae07f8a6f1f79a505?rik=WmeTslCSTskv6g&riu=http%3a%2f%2fvbs.arachnoid.com%2fblender_make_a_planet%2fgraphics%2ftutor02.png&ehk=Od9oCYReru9%2bDSib%2bMJsJ8PThXIDylyjkl8th62Z4vM%3d&risl=&pid=ImgRaw&r=0",
        desc: "Perfectly generic, and perfectly useless. Now in ball form!",
        price:5
    },
    {
        title: "3D Modeling Inside Joke",
        image: "https://preview.free3d.com/img/2016/04/2269198088818132027/ngl2w9n3.jpg",
        desc: "Pip pip cherio it's tea time luve tata Bri ish",
        price:6
    },
    {
        title: "Ford f-150",
        image: "https://tse2.mm.bing.net/th/id/OIP.gks7JyrzVOXDEgBfeyfcrQHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
        desc: "In 1975, the F-150 was introduced in between the F-100 and t",
        price:7
    },
    {
        title: "Pastel Pink Cone",
        image: "https://upload.wikimedia.org/wikipedia/commons/1/10/Blender-mesh-cone.png",
        desc: "You probably don't want to step on this one either...",
        price:8
    },
    {
        title: "Vertical Slab",
        image: "https://minecraft-max.net/upload/iblock/5f5/g0srejqv72k3keztt94rc0bt2wvu1a3h.png",
        desc: "I don't see what the fuss is about, honestly.",
        price:9
    },
    {
        title: "Non Functional Token",
        image: "https://techterms.com/img/xl/right-click_440.jpg",
        desc: "Why would you ever buy this? Just, Why?? It's just an image!",
        price:10
    },
    {
        title: "Four Dimensional Hypercube",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/8-cell-simple.gif/250px-8-cell-simple.gif",
        desc: "Perfectly generic, for four dimensional beings.",
        price:11
    },
    {
        title: "A Second Perfectly Generic Object",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cube_with_Blender.svg/2048px-Cube_with_Blender.svg.png",
        desc: "Still perfectly generic, and still perfecty useless.",
        price:12
    },
    {
        title: "cube",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cube_with_Blender.svg/2048px-Cube_with_Blender.svg.png",
        desc: "blah blah blah blah blah blah blah blah",
        price: 13
    },
    {
        title: "cube",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cube_with_Blender.svg/2048px-Cube_with_Blender.svg.png",
        desc: "blah blah blah blah blah blah blah blah",
        price:14
    },
    {
        title: "cube",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cube_with_Blender.svg/2048px-Cube_with_Blender.svg.png",
        desc: "blah blah blah blah blah blah blah blah",
        price:15
    },
    {
        title: "cube",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cube_with_Blender.svg/2048px-Cube_with_Blender.svg.png",
        desc: "blah blah blah blah blah blah blah blah",
        price:16
    },
    {
        title: "cube",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cube_with_Blender.svg/2048px-Cube_with_Blender.svg.png",
        desc: "blah blah blah blah blah blah blah blah",
        price:17
    },
    {
        title: "cube",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cube_with_Blender.svg/2048px-Cube_with_Blender.svg.png",
        desc: "blah blah blah blah blah blah blah blah",
        price:18
    },
    {
        title: "cube",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cube_with_Blender.svg/2048px-Cube_with_Blender.svg.png",
        desc: "blah blah blah blah blah blah blah blah",
        price:19
    },
    {
        title: "cube",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Cube_with_Blender.svg/2048px-Cube_with_Blender.svg.png",
        desc: "blah blah blah blah blah blah blah blah",
        price:20
    },
]

const cart = [

]

// Inject Function
function inject(product){
    //query the html where we inject the card
    const container = document.querySelector(".shop");
    container.insertAdjacentHTML(
        "afterbegin",
        `<div class="item" data-title="${product.title}">
            <img class="item-image" src="${product.image}" />
            <h2 class="item-name">${product.title}</h2>
            <h3 class="item-description">${product.desc}</h3>
            <h4 class="item-price">${product.price}$</h4>
            <button class="item-buy">add to cart</button>
        </div>`
    );
}

// Apply Inject Function for each product in object
products.forEach((product)=> inject(product));

function getCards(){
    const buttons = document.querySelectorAll(".item-buy");
    buttons.forEach((buy) =>    
        buy.addEventListener("click", function(event) {
            console.log(
                event.target.closest(".item").getAttribute("data-title")
            )
        })
    );
}
getCards();
//make array (Done!)
//put cards on screen with JS (Done!)
//make a cart (HTML, JS)
//add to cart to button
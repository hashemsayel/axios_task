function details() {
    const Param = new URLSearchParams(window.location.search);
    const id = Param.get("id");
    axios.get(`https://dummyjson.com/products/${id}`)
        .then(function (response) {
            let products = response.data;
            const imageurl = products.images;
            const Images = imageurl.map(function (product) {
                return `<img src=${product} alt=""> `
            }).join("");
            const details = `

            <div class="product">
            <div class="header">
           
                <p>Price: $${products.price}</p>
                <p>About This Product<br> ${products.description}</p>
                <h1>${products.title}</h1>
                
            </div>
            
            <div class="image-content">
                ${Images}
            </div>
            
            
            
            </div>
            `
            document.querySelector("body").innerHTML = details;

        })
}
details();

function AXIos(){
    axios.get("https://dummyjson.com/products")
        .then(function(response) {
            let products = response.data.products; 
            const final = products.map(function(product){
                return `<div class="product">
                
                  
                    <h2>${product.title}</h2>
                    <img src="${product.thumbnail}"/>
                    <p>${product.description}</p>
                    <a href="details.html?id=${product.id}">Details</a>
                    
                
                
                        </div>`;
            }).join("");

            document.querySelector(".data").innerHTML = final;
        })
        
}

AXIos();
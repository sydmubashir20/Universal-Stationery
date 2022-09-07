var brand1 = document.getElementById("brand1");

        var brand2 = document.getElementById("brand2");


        var subbrand1 = document.getElementById("subbrand1");
        var subbrand2 = document.getElementById("subbrand2");

        fetch('json/allproducts.json')
        .then(response => response.json())
        .then(json => 
        {

            // console.log(json)
            let data = []
            for(var i in json){
                if(!data.includes(json[i].Brand_name)){
                    data.push(json[i].Brand_name)
                }
                
            }

            // console.log(data)

            for (let brand of data){
                brand1.innerHTML += `<option value="${brand}"> ${brand} </option>`;
                brand2.innerHTML += `<option value="${brand}"> ${brand} </option>`;
            }        
            });

            brand1.addEventListener("change",function()
            {
                document.getElementById("card").innerHTML ="";
                subbrand1.style.display = "block";
                fetch('json/allproducts.json')
                .then(response => response.json())
                .then(json => 
                {
                    
                    subbrand1.innerHTML = ``;

                    for(let i of json){
                        if(i.Brand_name == brand1.value)
                        {
                            subbrand1.innerHTML += `<option value="${i.Product_title}"> ${i.Product_title} </option>`;
                        }
                    }
                })

                
            })


            subbrand1.addEventListener("change",function()
            {
                if(subbrand1.value == subbrand2.value){
                    alert("You have Selected Same Products")
                    return
                }
                fetch('json/allproducts.json')
                .then(response => response.json())
                .then(json => 
                {
                    for(let i of json){
                    if(i.Product_title == subbrand1.value)
                    {
                        document.getElementById("card").innerHTML = `
                    
                            <img src="${i.Product_img}"  height="200px" alt="" class="card-img-top">
                            <div class="card-body">
                                <h3 style="font-size : 12px">name ${i.Product_title}</h3>
                                <h3 style="font-size : 12px">Brand  ${i.Brand_name}</h3>
                                <h3 style="font-size : 12px">Price ${i.Product_price}</h3>
                                <a class="btn btn-dark  w-100" href="spec.html?id=${i.id}&product_image=${i.Product_img}&product_title=${i.Product_title}&product_brand=${i.Brand_name}&product_price=${i.Product_price}&product_del=${i.Deleted_price}&product_desc=${i.Product_desc}">Show Detail </a>
                            </div>
                `
                    }
                }
                });
            });


            brand2.addEventListener("change",function()
            {
                subbrand2.style.display = "block";
            
                
                
                fetch('json/allproducts.json')
                .then(response => response.json())
                .then(json => 
                {
                    subbrand2.innerHTML = ``;

                    for(let i of json){
                        if(i.Brand_name == brand2.value)
                        {
                            subbrand2.innerHTML += `<option value="${i.Product_title}"> ${i.Product_title} </option>`;
                        }
                    }
                });

                
            });



            subbrand2.addEventListener("change",function()
            {
                if(subbrand1.value == subbrand2.value){
                    alert("You have Selected Same Products")
                    return
                }
                else{
                    fetch('json/allproducts.json')
                .then(response => response.json())
                .then(json => 
                {
                    for(let i of json){
                    if(i.Product_title == subbrand2.value)
                    {
                        document.getElementById("card2").innerHTML = `
                    
                        <img src="${i.Product_img}"  height="200px" alt="" class="card-img-top">
                        <div class="card-body">
                            <h3 style="font-size : 12px">Name ${i.Product_title}</h3>
                            <h3 style="font-size : 12px">Brand  ${i.Brand_name}</h3>
                            <h3 style="font-size : 12px">Price ${i.Product_price}</h3>
                            <a class="btn btn-dark  w-100" href="spec.html?id=${i.id}&product_image=${i.Product_img}&product_title=${i.Product_title}&product_brand=${i.Brand_name}&product_price=${i.Product_price}&product_del=${i.Deleted_price}&product_desc=${i.Product_desc}">Show Detail </a>
                        </div>
                `
                    }
                }
                });
                }
               
            });
import nav from "../components/navbar.js";
document.getElementById("nav").innerHTML=nav()

let data=async()=>{
    let res=fetch("https://dummyjson.com/products");
    let data=await res.json()
    display(data.products)
}
data()

const display =(data)=>{
    console.log(data);
    data.map((ele)=>{
        let img=document.createElement("img")
        img.src=ele.images[1]
        let title=document.createElement("p")
        title.innerHTML=ele.title
        let price=document.createElement("p")
        price.innerHTML=ele.price
        let brand=document.createElement("button")
        brand.innerHTML=ele.brand
        let category=document.createElement("button")
        category.innerHTML=ele.category
        let btn1=document.createElement("button")
        btn1.innerHTML="Add to cart"
        let btn2=document.createElement("button")
        btn2.innerHTML="Buy Now"
btn1.style.backgroundColor="green"

        let div=document.createElement("div")
        div.append(img,title,price,brand,category)
        document.querySelector(".box2").append(div)
        
    })
}
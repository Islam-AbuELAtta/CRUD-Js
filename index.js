

var productName=document.getElementById('productName');
var productPrice=document.getElementById('productPrice');
var productCategory=document.getElementById('productCategory');
var productDescription=document.getElementById('productDescription');
var productFile=document.getElementById('productFile');
var add=document.getElementById('add');
var update=document.getElementById('update');
var current;
var productList=[];

/*
if (localStorage.getItem('list')!==null){

       productList=JSON.parse(localStorage.getItem('list'))
       console.log(productList);
       displayProduct(productList);
}
*/
   if (localStorage.getItem('list') !==null ){

        productList=JSON.parse(localStorage.getItem('list')) ;
       // console.log(productList);

          displayProduct(productList);
   }

function addProduct() {
   var product={
       name:productName.value,
       price:productPrice.value,
       category:productCategory.value,
       description:productDescription.value,
       image: 'img/work-1.jpg',
    }
    productList.push(product);    
    // console.log(productList);
    displayProduct(productList);
    localStorage.setItem('list',JSON.stringify(productList));
    clearForm()
    
    
}

function displayProduct(list) {
    var container=''

     for( var i=0 ; i<productList.length ; i++){
        container+=`<tr>
        <td>1</td>
        <td>${list[i].name}</td>
        <td>${list[i].price}</td>
        <td>${list[i].category}</td>
        <td>${list[i].description}</td>
        <td><img src="img/work-1.jpg" alt=""></td>
        <td><button class="btn btn-sm btn-warning " onclick="updateProduct(${[i]})"> <i class="fa-solid fa-edit"></i> update</button></td>
        <td><button class="btn btn-sm btn-danger"> <i class="fa-solid fa-trash-alt"></i> delete</button></td>
    </tr>
        `

 }
      //  console.log(productList);

      document.getElementById('forProduct').innerHTML=container ;

}

function clearForm(){
    productName.value= '' ;
    productPrice.value= '';
    productCategory.value='';
    productDescription.value='';
    productFile = '';

   // console.log('clear');
}



//localStorage.setItem("userName", "IslamAbuELAtta") ;
//console.log( localStorage.getItem('userName'));
//localStorage.clear();


function updateProduct(i){
current=i
productName.value=productList[i].name;
productPrice.value=productList[i].price;
productCategory.value=productList[i].category;
productDescription.value=productList[i].description;
// productFile.value=productList[i].image;
  // console.log('islam abuelatta');
   add.classList.add("d-none")
   update.classList.remove('d-none')
}

function goodmorning(){
      
   var product ={
      name:productName.value,
      price:productPrice.value,
      category:productCategory.value,
      description:productDescription.value,
      image: 'img/work-1.jpg',
   }
  // console.log(product);

   productList.splice(current,1,product);
   displayProduct(productList);
   localStorage.setItem('list',JSON.stringify(productList));
   clearForm();
   add.classList.remove("d-none")
   update.classList.add('d-none')
}
   
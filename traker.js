        function savetolocalstorage(event) {
            event.preventDefault();
            const amount=event.target.amount.value;
            const description=event.target.description.value;
            const category=event.target.category.value;
            const obj={amount:amount,description:description,category:category};
            // const obj={amount,description,category};
            localStorage.setItem(obj.category,JSON.stringify(obj));
            showuseronscreen(obj);
        
        window.addEventListener("DOMContentLoaded",()=> {
            const localStorageobj=localStorage;
            const localStoragekeys=Object.keys(localStorageobj);
            for(var i=0;i<localStoragekeys.length;i++)
            {
                const key=localStoragekeys[i];
                const userdetailstring=localStorageobj[key];
                const userdetailobj=JSON.parse(userdetailstring);
                showuseronscreen(userdetailobj);
            }
        });
    }
        function showuseronscreen(user){
            // document.getElementById("amount").value="";
            // document.getElementById("description").value="";
            // document.getElementById("category").value="";
            //  console.log(localStorage.getItem(user.category))
            // if(localStorage.getItem(user.category)!=null)
            // {
            //     removeuserfromscreen(user.category);
            // }
            const p=document.getElementById("listofusers");
            const c=`<li> ${user.amount} - ${user.description} - ${user.category} 
                <button onclick=deleteexpense(${user.category})>Delete Expense</button>
                <button onclick=editexpense(${user.category})>Edit Expense </button></li>`;
                p.innerHTML=p+c;
        }
        function editexpense(amount,description,category){
         document.getElementById("amount").value=amount;
         document.getElementById("description").value=description;
         document.getElementById("category").value=category;
         
         deleteexpense(category);
        }

        function deleteexpense(category){
            console.log(category);
            localStorage.removeItem(category);
            removeuserfromscreen(category);
        }
        function removeuserfromscreen(category){
            const pd=document.getElementById("listofusers");
            const cd=document.getElementById("category");
            if(cd)
            {
                pd.removeChild(cd);
            }
        }
   
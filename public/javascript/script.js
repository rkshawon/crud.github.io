const submitUpdatedValue = document.getElementById("updateButton");
const searchButton = document.getElementById("searchButton")
const deleteButton = document.querySelectorAll(".delete").forEach(function(deleteBtn){
    deleteBtn.addEventListener("click",
    function(){
        let id = deleteBtn.getAttribute("data-id")
        const singleid = {
            id:id
        }
        const data = {
            method: 'POST',
            body: JSON.stringify(singleid),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }
        
        fetch("http://localhost:3000/id", data)
        .then(()=>{
            location.reload()
        })
    })  
})

const updateButton  = document.querySelectorAll(".update").forEach((updateBtn)=>{
    updateBtn.addEventListener("click",function(){
        let id = updateBtn.getAttribute("data-id")
        location.href = `http://localhost:3000/api/userinfo/s?id=${id}`
    })
})

searchButton.addEventListener("click",()=>{
    let searchValue = document.querySelector(".searchbar").value
    let id= ""
    document.querySelectorAll(".email").forEach((e)=>{
            if(searchValue == e.textContent){
                id = e.getAttribute("value")
                location.href = `http://localhost:3000/search?searchId=${id}`
            }
            else{
                location.href = `http://localhost:3000/search?searchId=${id}`
            }
    })
})
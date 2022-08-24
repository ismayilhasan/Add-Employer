// Variables
let form = document.querySelector('#EmployerForm')
let employerId = 0;


if(localStorage.getItem('employerlist') === null)
{
   localStorage.setItem('employerlist',JSON.stringify([]))
}


function Del(event,employerId)
{
   event.preventDefault()
   let employerList = JSON.parse(localStorage.getItem('employerlist'))

   event.target.parentElement.parentElement.remove();
  
   let EmployerIndex = employerList.findIndex(emp => emp.Id === employerId)
   employerList.splice(EmployerIndex,1)
   console.log(EmployerIndex);

   localStorage.setItem('employerlist',JSON.stringify(employerList))
}

function ChangeType()
{
   let inputs = document.querySelectorAll('#input')
   inputs.forEach(input => {
     if( input.hasAttribute('disabled') === true)
     {
      input.removeAttribute('disabled')
     }
     else{
      input.setAttribute('disabled','')
     }


   })
}

form.addEventListener('submit',(event) => {

   event.preventDefault();
   let nameValue = document.querySelector('#inputName').value
   let surnameValue = document.querySelector('#inputSurname').value
   let salaryValue = document.querySelector('#inputSalary').value
   let employerList = JSON.parse(localStorage.getItem('employerlist'))


  


   if(nameValue === '' || surnameValue === '' || salaryValue === '')
   {
      alert('plese fill all inputs')
   }
   else
   {
      
      
      employerList.push(
         {
            Id:employerId+=1,
            Name:nameValue,
            Surname:surnameValue,
            Salary:salaryValue,
           

         }
      )

      
         

      localStorage.setItem('employerlist',JSON.stringify(employerList))


   
   
   }

 

   ShowList();
})


function ShowList()
{
   tableBody = document.querySelector('#tbody')
   let td = '';
   let employerList = JSON.parse(localStorage.getItem('employerlist'))
   employerList.forEach(item => {
      td= `
      <tr>
         <td><button class="btn btn-danger" onclick="Del(event,${item.Id})">Delete</button></td>
         <td>${item.Id}</td>
         <td><button onclick = "ChangeType()" >Edit</button></td>
         <td><input id ="input"  type="text" disabled value="${item.Name}"></td>
         <td><input id ="input" type="text" disabled value="${item.Surname}"></td>
         <td><input id ="input" type="text" disabled value="${item.Salary}"></td>
      </tr>
     
      
      `
   });

   tableBody.innerHTML += td;
 
}


ShowList();
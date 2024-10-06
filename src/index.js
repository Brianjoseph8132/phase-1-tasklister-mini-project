document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form")
  // Add input fields for user, Duration, date due and a button submit
  form.innerHTML += `<label for="user">Name</label> <input id ="user" type ="text" placeholder ="Username"required><br><br>
   <label for="time">Time</label>  <input id ="duration" type ="time" placeholder ="Duration"required><br><br>
    <label for="date">Date</label>  <input id ="date" type ="date" placeholder ="Date due "required><br><br>
    <button id ="new-task" type ="submit">ADD</button>`
  let task = [];
  // prevent the reloading after submitting
  form.addEventListener("submit",function (e){
    e.preventDefault();

      const user = document.getElementById("user").value;
      const duration = document.getElementById("duration").value;
      const date = document.getElementById("date").value;
      const description = document.getElementById("description").value;
      console.log(description,user,duration,date)
  form.reset();
// display after adding a new task(double tap)
  document.getElementById("new-task").addEventListener("click",function(){
    const uservalue = document.getElementById("task-list")
    uservalue.innerHTML += `<h5>${description} </h5> <h5>${user}</h5> <h5>${duration}<h5>${date}</h5>`
  });
  });
  
});

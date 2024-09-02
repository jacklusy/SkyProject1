$(document).ready(function () {
  // Dummy data for vacation requests
  var data = [
    {
      image: "../assets/images/Default.jpg",
      title: "Ahmad Attar",
      submissionDate: "1/3/2024",
      duration: "2 Weeks (1/4/2023 - 14/4/2023)",
      salary: "1000 AED",
    },
    {
      image: "../assets/images/Default.jpg",
      title: "Sara Ali",
      submissionDate: "2/5/2024",
      duration: "1 Week (3/5/2024 - 10/5/2024)",
      salary: "1200 AED",
    },
    {
      image: "../assets/images/Default.jpg",
      title: "John Doe",
      submissionDate: "10/7/2024",
      duration: "3 Weeks (11/7/2024 - 31/7/2024)",
      salary: "1500 AED",
    },
    {
      image: "../assets/images/Default.jpg",
      title: "John Doe",
      submissionDate: "10/7/2024",
      duration: "3 Weeks (11/7/2024 - 31/7/2024)",
      salary: "1500 AED",
    },
    {
      image: "../assets/images/Default.jpg",
      title: "John Doe",
      submissionDate: "10/7/2024",
      duration: "3 Weeks (11/7/2024 - 31/7/2024)",
      salary: "1500 AED",
    },
  ];

  // Function to display cards
  function displayCards(filteredData) {
    $("#load-data").html("");
    let html = "";

    filteredData.forEach(function (request) {
      html += ` <div class="card">
              <img
                src="${request.image}"
                class="card-img-top rounded-circle mx-auto mt-3"
                alt="User Image"
                style="width: 100px"
              />
              <div class="card-body text-center">
                <h5 class="card-title">${request.title}</h5>
                <div class="p-3">
                  <ul>
                    <li class="card-text">Submitted on:</li>
                    <li class="card-bold">${request.submissionDate}</li>
                  </ul>
                  <ul>
                    <li class="card-text">Duration:</li>
                    <li class="card-bold">${request.duration}</li>
                  </ul>
                  <ul>
                    <li class="card-text">Salary:</li>
                    <li class="card-bold">${request.salary}</li>
                  </ul>
                </div>
                <div class="d-flex justify-content-around">
                  <button class="btn btn-outline-success">Decline</button>
                  <button class="btn btn-outline-success approve">Approve</button>
                </div>
              </div>
            </div>`;
    });

    $("#load-data").html(html);
  }

  displayCards(data);

  // Search function
  $("#search").on("input", function () {
    var inputValue = $(this).val().toLowerCase();

    var filteredData = data.filter(function (request) {
      return (
        request.title.toLowerCase().includes(inputValue) ||
        request.submissionDate.toLowerCase().includes(inputValue) ||
        request.duration.toLowerCase().includes(inputValue) ||
        request.salary.toLowerCase().includes(inputValue)
      );
    });

    displayCards(filteredData);
  });
});

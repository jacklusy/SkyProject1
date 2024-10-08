$(document).ready(function () {
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
      html += `<div class="card">
               <div class="form-check">
                <input type="checkbox" class="form-check-input request-checkbox" />
              </div>

            <img src="${request.image}" class="card-img-top rounded-circle mx-auto mt-3" alt="User Image" style="width: 100px" />
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
  // Select All functionality
  $("#select-all").on("change", function () {
    $(".request-checkbox").prop("checked", $(this).is(":checked"));
  });

  // Individual checkbox functionality
  $(document).on("change", ".request-checkbox", function () {
    if (!$(this).is(":checked")) {
      $("#select-all").prop("checked", false);
    } else if (
      $(".request-checkbox:checked").length === $(".request-checkbox").length
    ) {
      $("#select-all").prop("checked", true);
    }
  });

  // Pagination setup
  const itemsPerPage = 8;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  function displayPage(pageNumber) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    displayCards(data.slice(startIndex, endIndex));
  }

  function createPagination() {
    let paginationHtml = '<ul class="pagination">';
    for (let i = 1; i <= totalPages; i++) {
      paginationHtml += `<li class="page-item"><a class="page-link" href="#">${i}</a></li>`;
    }
    paginationHtml += "</ul>";
    $("#pagination").html(paginationHtml);
  }

  createPagination();

  $(document).on("click", ".page-link", function (e) {
    e.preventDefault();
    const pageNumber = $(this).text();
    displayPage(parseInt(pageNumber));
  });

  displayPage(1);
});

$(".btn-success").click(() => {
    $.ajax({
        url: "https://restcountries.com/v3.1/name/france",
        success: function (data, status, response) {
            (data = data[0].capital)
            console.log(data)
        }
    })
})

fetch('https://pizzatemplate.herokuapp.com/')
    .then(response => response.json())
    .then(data =>
        {
            data.forEach(element => {
                console.log(data.Pizza);
            });
        }
        )

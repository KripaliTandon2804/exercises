/*getCustomer(1, (customer) => {
    console.log('Customer: ', customer);
    if (customer.isGold) {
      getTopMovies((movies) => {
        console.log('Top movies: ', movies);
        sendEmail(customer.email, movies, () => {
          console.log('Email sent...')
        });
      });
    }
  });*/


async function customer() {
    const customer = await getCustomer(1);
    if (customer.isGold) {
        console.log('Customer: ', customer);
        const getMovies = await getTopMovies(movies);
        console.log('Top movies: ', movies);
        await sendEmail(customer.email, movies);
        console.log('Email sent...')
    }

}
customer();

function getCustomer(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                id: 1,
                name: 'Mosh Hamedani',
                isGold: true,
                email: 'email'
            });
        }, 4000);
    })
}

function getTopMovies() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(['movie1', 'movie2']);
        }, 4000);
    })

}

function sendEmail(email, movies) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 4000);

    })

}
export const setAuthToken = (user) => {
    const currentUser = {
        email: user.email
    }



    // get jwt token
    fetch('https://b6a11-service-review-server-side-zarrin-tasnim.vercel.app/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // local storage is the easiest but not the best place to store jwt token
            localStorage.setItem('Flytographer-token', data.token);
            //  navigate(from, { replace: true });
        });
}
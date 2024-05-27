export const fetchGenerationMix = async () =>
    await fetch(`https://api.carbonintensity.org.uk/generation`).then(res => {
        if (res.ok) {
            return res.json()
        } else {
            console.log(res);
            throw new Error("Not 2xx response");
        }

    })
        .then(data => {
            return (data)
        })
        .catch((error) => {
            console.log('y volo...', error);
        });
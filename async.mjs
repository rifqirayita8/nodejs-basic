function samplePromise() {
    return Promise.resolve('Rifqi');
}

const data= await samplePromise();
console.info(data);
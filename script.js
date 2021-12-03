const btnJob = document.getElementById('btn-job');
const githubForm = document.getElementById('github-form');
const githubResult = document.getElementById('github-result');

const candidat = {
    isProgrammer: false,
    isCool: true,
};

btnJob.addEventListener('click', applyToJob);
githubForm.addEventListener('submit', searchGithub);

async function applyToJob() {
    console.log('La décisison est en cours...');
    try {
    const result = await startDecisionProcess();
        console.log('resultat =', result);
    } catch (err) {
        console.log('erreur =', err);
    }    
}

function startDecisionProcess() {
    return new Promise((resolve, reject) => {
        console.log(`Recruteur - Pendant ce temps je recois d'autres candidats` );
        setTimeout(() => {
            if (candidat.isProgrammer && candidat.isCool) {
                console.log('avant resolve');
                resolve('Recruteur - bienvenue dans notre entreprise !')
            } else { 
                console.log('avant reject');
                reject('Recruteur - Malgré tout l\'interet de votre candidature, bla bla')
            }
        }, 2000);
    })
}

function searchGithub(e) {
    e.preventDefault();
    const account = githubForm.elements[0].value;
    fetch(`https://api.github.com/users/${account}`)
        .then((data) => data.json())
        .then((jsonData) => {
            console.log('jsonData', jsonData);
            githubResult.innerHTML = `<pre><code>${JSON.stringify(jsonData, null, 4)}</code></pre>`
        });
}
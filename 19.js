
const nameList = document.querySelectorAll('.names');
const jobList = document.querySelectorAll('.jobs');
const priceList = document.querySelectorAll('.price');

const freelancers = [
    { name: "Dr. Slice", price: 50, occupation: "gardener" },
    { name: "Dr. Pressure", price: 120, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 43, occupation: "teacher" },
    { name: "Dr. Impulse", price: 53, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 91, occupation: "teacher" },
    { name: "Goose", price: 12, occupation: "driver" },
];

// Names
for (let i = 0; i < nameList.length && i < freelancers.length; i++) {
    nameList[i].textContent = freelancers[i].name;
}

// Jobs
for (let i = 0; i < jobList.length && i < freelancers.length; i++) {
    jobList[i].textContent = freelancers[i].occupation;
}

// Prices
for (let i = 0; i < priceList.length && i < freelancers.length; i++) {
    priceList[i].textContent = `$${freelancers[i].price}`;
}


const random = generateRandomFreelancer();
console.log(`${random.name} - ${random.occupation}`);

function generateRandomFreelancer() {
    const randomIndex = Math.floor(Math.random() * freelancers.length);
    return freelancers[randomIndex];
}

function updateFreelancer() {
    const freelancer = generateRandomFreelancer();
    document.getElementById('freelancer-name').textContent = freelancer.name;
    document.getElementById('freelancer-job').textContent = freelancer.occupation;
    document.getElementById('freelancer-price').textContent = `$${freelancer.price}`;
}

updateFreelancer();

document.getElementById('update-btn').addEventListener('click', updateFreelancer);

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById('fortuneBtn')
const form = document.querySelector('form')
const goalInpt = document.getElementById('goal-input')
const achieveInpt = document.getElementById('achieve-input')
const goalBtn = document.getElementById('goal-button')
const goalSection = document.getElementById('goals')


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
        });
};

const getFortune = () => {
    axios.get('http://localhost:4000/api/fortune/')
        .then(res => {
            const data = res.data
            alert(data)
        })
}

const addGoal = (event) => {
    const goalHeader = document.createElement('h3')
    const goalText = document.createElement('p')
    const updateGoal = document.createElement('button')
    const deleteGoal = document.createElement('button')

    event.preventDefault()
    let goal = {
        goal: goalInpt.value,
        goalAchieve: achieveInpt.value
    }
    axios.post('http://localhost:4000/api/goals', goal)
        .then(res => {
            // console.log(res.data[0].goal)
            res.data.forEach(e => {
                console.log(e)
                goalHeader.innerHTML = e.goal
                goalText.innerHTML = e.goalAchieve
                updateGoal.innerHTML = 'Edit'
                deleteGoal.innerHTML = 'Delete'
                goalSection.appendChild(goalHeader)
                goalSection.appendChild(goalText)
                goalSection.appendChild(updateGoal)
                goalSection.appendChild(deleteGoal)
            })
        })
        .catch(err => { console.log(err) })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
goalBtn.addEventListener('click', addGoal)
// updateGoal.addEventListener('click', console.log('Beep Beep'))
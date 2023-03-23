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


let arr = []
const goalsList = () => {
    const goalHeader = document.createElement('h3')
    const goalText = document.createElement('p')
    const updateGoal = document.createElement('button')
    const deleteGoal = document.createElement('button')
    const editGoal = document.createElement('input')
    axios.get('http://localhost:4000/api/goals').then(res => {
        arr = res.data
        arr.forEach(e => {
            goalHeader.innerHTML = e.goal
            goalText.innerHTML = e.goalAchieve
            editGoal.innerHTML = `<input />`
            updateGoal.innerHTML = 'Edit'
            deleteGoal.innerHTML = 'Delete'
            updateGoal.onclick = () => update(e, editGoal.value)
            deleteGoal.onclick = () => goalDelete(e)
            goalSection.appendChild(goalHeader)
            goalSection.appendChild(goalText)
            goalSection.appendChild(editGoal)
            goalSection.appendChild(updateGoal)
            goalSection.appendChild(deleteGoal)
        })
    })


}


const addGoal = (event) => {
    event.preventDefault()
    let goal = {
        goal: goalInpt.value,
        goalAchieve: achieveInpt.value
    }
    axios.post('http://localhost:4000/api/goals', goal)
        .then(() => {
            goalsList()
        })
        .catch(err => { console.log(err) })
}


const update = (e, editedGoal) => {
    axios.put(`http://localhost:4000/api/goals/${e.goalId}`, {editedGoal})
        .then(() => {
            goalsList()
        })
        .catch(err => {console.log(err)})
}


const goalDelete = (e) => {
    axios.delete(`http://localhost:4000/api/goals/${e.goalId}`)
        .then(() => {
            goalsList()
        })
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
goalBtn.addEventListener('click', addGoal)
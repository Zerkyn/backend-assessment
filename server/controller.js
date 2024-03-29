let goals = []
let goalId = 0

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];

        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = [
            'A lifetime of happiness lies ahead of you.',
            'Everywhere you choose to go, friendly faces will greet you.',
            'It is worth reviewing some old lessons.',
            'Practice makes perfect.',
            'Staying close to home is going to be best for your morale today'
        ]
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]
        res.status(200).send(randomFortune)
    },

    getGoals: (req, res) => {
        res.status(200).send(goals)
    },

    addGoal: (req, res) => {
        const { goal, goalAchieve } = req.body
        const newGoal = {
            goalId,
            goal,
            goalAchieve
        }
        goals.push(newGoal)
        goalId++
        res.status(200).send(goals)
    },

    updateGoals: (req,res) => {
        const {id} = req.params
        const{editedGoal} = req.body   
        for(let i = 0; i < goals.length; i++){           
            if(goals[i].goalId == id){
                goals[i].goalAchieve = editedGoal
            }
        }
        res.status(200).send(goals)

    },

    deleteGoal: (req, res) => {
        const {id} = req.params
        for(let i = 0; i < goals.length; i++){
            if(goals[i].goalId == id){
                goals.splice(i, 1)
                res.status(200).send(goals)
            }
        }
    }

}
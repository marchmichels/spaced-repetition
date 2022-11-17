import Results from "./../components/Results";

///////////////////////////////////////
// Questions and answers are from W3Schools React Quiz
// https://www.w3schools.com/quiztest/quiztest.asp?qtest=REACT
//////////////////////////////////////

let DataStore = {
    cardsBank: [
        {
            id: 1,
            question: "What is the correct command to create a new React project?",
            answer: "npx create-react-app my-app",
            mastery: .5,
            updateMastery: function (val) {
                this.mastery = this.mastery * val
            }
        },
        {
            id: 2,
            question: "What command is used to start the React local development server?",
            answer: "npm start",
            mastery: .5,
            updateMastery: function (val) {
                this.mastery = this.mastery * val
            }
        },
        {
            id: 3,
            question: "What is the default local host port that a React development server uses?",
            answer: "3000",
            mastery: .5,
            updateMastery: function (val) {
                this.mastery = this.mastery * val
            }
        },
        {
            id: 4,
            question: "What is the children prop?",
            answer: "A property that lets you nest components in other components",
            mastery: .5,
            updateMastery: function (val) {
                this.mastery = this.mastery * val
            }
        },
        {
            id: 5,
            question: "A copy of the 'real' DOM that is kept in memory is called what?",
            answer: "Virtual DOM",
            mastery: .5,
            updateMastery: function (val) {
                this.mastery = this.mastery * val
            }
        },
        {
            id: 6,
            question: "Which operator can be used to conditionally render a React component?",
            answer: "&&",
            mastery: .5,
            updateMastery: function (val) {
                this.mastery = this.mastery * val
            }
        }
    ],
    curCard: 0,
    subscribers: [],
    view: <Results />,
    setView: function (view) {

        this.view = view;
        this.updateSubscribers();
    },
    subscribe: function (callback) {
        this.subscribers.push(callback);
    },
    updateSubscribers: function () {
        this.subscribers.forEach((callback) => {
            callback();
        });
    },
    nextCard: function () {
        this.curCard = this.curCard + 1;
        this.updateSubscribers();
    },
    sortCards: function () {
        this.cardsBank = [...this.cardsBank.sort((a, b) => a.mastery - b.mastery)];
        this.curCard = 0;
        this.updateSubscribers();
    },
    forgottenMastery: function () {
        let unusedCards = this.cardsBank.slice(5); //an array of cards that were not asked last time
        unusedCards.forEach(card => {
            card.updateMastery(.9); //slightly reduce mastery to keeps cards cycling
        });
    }
}

export { DataStore };
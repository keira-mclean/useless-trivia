(function(){

    function buildQuiz() {
        const output = [];
    
        questions.forEach(
            (currentQuestion, questionNumber) => {
                const choices = [];
                for (answer in currentQuestion.choices) {
                    choices.push(
                        `<label>
                          <input type="radio" name="question${questionNumber}" value="${answer}">
                          ${answer} :
                          ${currentQuestion.choices[answer]}
                          </label>`
                    );
                }
                output.push(
                    `<div class="slide">
                    <div class="question"> ${currentQuestion.question} ${currentQuestion.image} </div>
                        <div class="answers"> ${choices.join('')}<br><br></div>
                    </div>`
                );
            }
        );
    
        quiz.innerHTML = output.join('');
    }
    
    function showResults() {
        const answerResults = quiz.querySelectorAll('.answers');
    
        let numCorrect = 0;
        let numIncorrect = 0;

        questions.forEach ((currentQuestion, questionNumber) => {
            const answerResult = answerResults[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerResult.querySelector(selector) || {}).value;
    
            if(userAnswer === currentQuestion.correct) {
            numCorrect++;
            } else {
                numIncorrect++;
            }
        });
        
        results.innerHTML = `${numCorrect} out of ${questions.length} Correct and ${numIncorrect} wrong`;
        score.innerHTML = `${(questions.length/numCorrect)*100}%`;
    }
    
    function showSlide(n) {
        slides[currentSlide].classList.remove('active-slide');
        slides[n].classList.add('active-slide');
        currentSlide = n;
        if(currentSlide === 0) {
            previousButton.style.display = 'none';
        } else {
            previousButton.style.display = 'inline-block';
        }
        if (currentSlide === slides.length-1) {
            nextButton.style.display = 'none';
            submit.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submit.style.display = 'none';
        }
    }
    
    function showNextSlide() {
        showSlide(currentSlide + 1);
    }
    function showPreviousSlide() {
        showSlide(currentSlide - 1);
    }
    
    const quiz = document.getElementById("quiz");
    const submit = document.getElementById("submit");
    const results = document.getElementById("results");
    
    const questions = [
        {
            question: 'What is the piece of plastic covering at the ends of your shoelace, so you don’t have to moisten them with spit to thread them through your shoelace holes?',
            choices: {
                a: "Langyard",
                b: "Aglet",
                c: "Eyelet",
                d: "Puggle"
            },
            correct: "b",
            image: "<img src='./images/shoelace.jpg'>"
        },
        {
            question: "What are the posts in the parking lot that lets wheelchairs and shopping carts go through, but not your car?",
            choices: {
                a: "Bollard",
                b: "Lenker",
                c: "Dike",
                d: "Liripipe"
            },
            correct: "a",
            image: "<img src='./images/steelpost.jpg'>"
    
        },
        {
            question: 'What are the non-alphanumeric, non-punctuation characters, usually used when you want to write something that you don’t want your children to read?',
            choices: {
                a: "Wing-ding",
                b: "Tarnmark",
                c: "Dingbat",
                d: "Gudgeon"
            },
            correct: "a",
            image: "<img src='./images/junkchars.jpg'>"
    
        },
        {
            question: 'What is the metal band that connects the pencil eraser to the end of the pencil?',
            choices: {
                a: "Nesh",
                b: "Crottle",
                c: "Tiffin",
                d: "Furrule"
            },
            correct: "d",
            image: "<img src='./images/eraserthing.jpg'>"
    
        },
        {
            question: 'What is the leather loop in your belt or watch strap that keeps the end in place after it has been fastened through the buckle?',
            choices: {
                a: "Keeper",
                b: "Shofar",
                c: "Cupre",
                d: "Wittol"
            },
            correct: "a",
            image: "<img src='./images/bucklethingy.jpg'>"
    
        },
        {
            question: 'What is the groove made by a sawblade, ie, the width of a cut?',
            choices: {
                a: "Dwal",
                b: "Tiffin",
                c: "Marlet",
                d: "Kerf"
            },
            correct: "d",
            image: "<img src='./images/cutseam.jpg'>"
    
        },
        {
            question: 'What is the small indentation at the bottom of a wine bottle, designed to give the bottle extra strength (so they say....), and also, to make it look like it has more wine than it really does (yeah, I hate that.....)?',
            choices: {
                a: "Winebibber",
                b: "Thrutch",
                c: "Punt",
                d: "Mim"
            },
            correct: "c",
            image: "<img src='./images/bottlebottom.jpg'>"
    
        },
        {
            question: 'What is the vertical groove between your lip and nose that separates your left and right mustache, unless you’re Hitler, then it’s the part that your mustache covers?',
            choices: {
                a: "Sternutator",
                b: "Philtrum",
                c: "Mallam",
                d: "Dariole"
            },
            correct: "b",
            image: "<img src='./images/noselipgroove.jpg'>"
    
        },
        {
            question: 'What are the points of light that you see behind your eyelids when you shut your eyes really hard?',
            choices: {
                a: "Famulus",
                b: "Flocculents",
                c: "Seraks",
                d: "Phosphenes"
            },
            correct: "d",
            image: "<img src='./images/eyestars.jpg'>"
    
        },
        {
            question: 'What is that little piece of cartilage that sticks out at the front side of your ear?',
            choices: {
                a: "Tragus",
                b: "Shallop",
                c: "Spurr",
                d: "Ensorcell"
            },
            correct: "a",
            image: "<img src='./images/earthingy.jpg'>"
    
        }
    ];
    
    buildQuiz();
    
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    const resetButton = document.getElementById("reset");
    let currentSlide = 0;
    
    showSlide(currentSlide);
    
    submit.addEventListener("click", showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
    resetButton.addEventListener("click", () => {
        window.location.reload()
    });
    })();
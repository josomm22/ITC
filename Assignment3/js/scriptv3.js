
var qData = {
    name: "Which home appliance is your spirit animal?",
    pages: ["Welcome", "question1", "question2", "question3", "question4", "question5", "Conclusion"],
    title: [
        "Which home appliance is your spirit animal?",
        "If you had to only eat one of these for the rest of your life which one would you choose?",
        "Which situation would be more embarrassing to you?",
        "When with a group of friends...",
        "What is your favourite drink?(imagine you're at an open bar)",
        "What is your spirit animal?",
        "Congratulations you are a "
    ],
    Welcome: {
        qType: "Introduction",
        text: "Here we are again, a remix of my python quiz. Answering the real question which most of us have asked ourselves; \"What type of home aplliance would I be?\" Worry no more because this quizz will answer this burning question in a few moments. You will never feel whole untill you complete this test."
    },
    question1: {
        qType: "radioImg",
        answers: ["Lightbulbs", "Broken dreams", "Canned Tuna", "Peanut Butter Sandwich", "Tide Pods"],
        values: { A: 'oven', B: 'fridge', C: 'dishwasher', D: 'eggslicer', E: 'standmixer' },
        images: ["./img/lightbulb-sm.jpg", "./img/sad-person3.jpeg", "./img/tuna-can.jpg", "./img/peanut-b-2-cut.jpg", "./img/tide-pods.jpg"],
    },
    question2: {
        qType: "radio",
        answers: ["Forgetting a loved ones birthday", "Being under dressed at an event", "Having to be escorted out of a place, in front of all the humans", "Slipping on the sidewalk", "Forgetting to say \"bless you\" when someone sneezes"],
        values: { A: 'standmixer', B: 'oven', C: 'fridge', D: 'dishwasher', E: 'eggslicer' }
    },
    question3: {
        qType: "select-one",
        answers: ["I am the quiet one", "I am the funny one that makes people laugh", "I am the one that leads and adds things to the table", "I need to be the center of attention", "I am the one that gently cycles through my washing program"],
        values: { A: 'eggslicer', B: 'standmixer', C: 'oven', D: 'fridge', E: 'dishwasher' }
    },
    question4: {
        qType: "radio",
        answers: ["Water", "Jack & Coke", "Wine", "A shot of vodka", "Vodka Redbull and a Marlboro Light; because"],
        values: { A: 'standmixer', B: 'eggslicer', C: 'dishwasher', D: 'oven', E: 'fridge' },
    },
    question5: {
        qType: "radioImg",
        answers: ["The Elephant", "The Lion", "The Tiger", "The Dolphin", "The Roomba 890"],
        values: { A: 'fridge', B: 'dishwasher', C: 'standmixer', D: 'eggslicer', E: 'oven' },
        images: ["./img/elephant2.jpg", "./img/lion2.jpg", "./img/tiger2.jpg", "./img/dolphin2.jpg", "./img/roomba2.jpg"],
    },
    Conclusion: {
        qType: "conclusion"
    },
    buttonText: ["Onto the quiz!", "Onto Question 2", "Onto Question 3", "To Question 4", "To Question 5", "See the results", "Try Again?"],
    winnerText: {
        oven: ['a smouldering oven', 'You like to keep things hot. You constantly worry and make sure that your loved ones do not get food poisoning.'],
        fridge: ['a feisty fridge', 'Keeping it cool is your moto. Everything stays fresh, mostly. You and oven types are best friends who complement each other despite being polar opposite.'],
        dishwasher: ['a dainty dishwasher', 'You get things done, no job is much and you are not scared of getting your hands a little dirty'],
        eggslicer: ['an eggslicer', "Essential part of every kitchen, people don't realize how useful you are until they need. Have you ever tried to slice an egg with a knife?"],
        standmixer: ['a bodacious standmixer', "You are the star of every kitchen, useful and pretty to look at. People know you are there without you having to do anything."]
    }
}
function runQuiz(Data) {

    function createIntro(slide, question) {
        var oldWrapper = document.getElementById("section-wrapper");
        if (oldWrapper !== null) {
            oldWrapper.remove();
        }
        var sectionWrapper = document.createElement("div");
        sectionWrapper.className = "row answer-row py-1 border-top";
        sectionWrapper.id = "section-wrapper";
        var column = document.createElement("div");
        column.className = "col";
        sectionWrapper.appendChild(column);
        var para = document.createElement("p");
        para.id = "intro-text";
        column.appendChild(para);
        para.innerHTML = qData[question].text;
        spanWinner = document.getElementById("winner")
        if (spanWinner !== null) {
            spanWinner.remove();
        }
        title = document.getElementById('title-' + slide);
        title.innerHTML = qData.title[page];
        document.getElementById(slide).appendChild(sectionWrapper);

    }
    function createConclusion(slide, question) {
        var oldWrapper = document.getElementById("section-wrapper");
        oldWrapper.remove();
        var sectionWrapper = document.createElement("div");
        sectionWrapper.className = "row answer-row py-1 border-top";
        sectionWrapper.id = "section-wrapper";
        var column = document.createElement("div");
        column.className = "col";
        sectionWrapper.appendChild(column);
        var para = document.createElement("p");
        para.innerHTML = qData.winnerText[winner][1];
        para.id = "intro-text";
        column.appendChild(para);
        title = document.getElementById('title-' + slide);
        title.innerHTML = qData.title[page + 1];
        spanWinner = document.createElement("span");
        spanWinner.id = "winner";
        spanWinner.innerHTML = qData.winnerText[winner][0];
        title.appendChild(spanWinner);
        document.getElementById(slide).appendChild(sectionWrapper);

    }

    function createSelect(slide, question) {
        var oldWrapper = document.getElementById("section-wrapper");
        oldWrapper.remove();
        var sectionWrapper = document.createElement("div");
        sectionWrapper.className = "row answer-row py-1 border-top";
        sectionWrapper.id = "section-wrapper";
        var column = document.createElement("div");
        column.className = "col";

        sectionWrapper.appendChild(column);
        var inputGrp = document.createElement("div");
        inputGrp.className = "input-group";
        column.appendChild(inputGrp);
        var customSelect = document.createElement("select");
        customSelect.className = "custom-select";
        customSelect.id = "inputGroupSelect04";
        customSelect.name = question;

        inputGrp.appendChild(customSelect);
        var defaultOption = document.createElement("option");
        defaultOption.innerHTML = "Choose...";
        defaultOption.setAttribute("selected", "selected");
        customSelect.appendChild(defaultOption);
        title = document.getElementById('title-' + slide);
        title.innerHTML = qData.title[page + 1];

        var abc = ["A", "B", "C", "D", "E"];
        for (i = 0; i < 5; i++) {
            var opt = document.createElement("option");
            opt.value = i + abc[i];
            paraText = qData[question].answers[i];
            opt.innerHTML = paraText;
            customSelect.appendChild(opt);
        }
        document.getElementById(slide).appendChild(sectionWrapper);
    }

    function createRadio(slide, question) {
        var oldWrapper = document.getElementById("section-wrapper");
        oldWrapper.remove();
        var sectionWrapper = document.createElement("div");
        sectionWrapper.className = "row answer-row py-1 border-top";
        sectionWrapper.id = "section-wrapper";
        var column = document.createElement("div");
        column.className = "col";
        sectionWrapper.appendChild(column);
        var abc = ["A", "B", "C", "D", "E"];
        for (i = 0; i < 5; i++) {
            var formChk = document.createElement("div");
            var label = document.createElement("label");
            var input = document.createElement("INPUT");
            var txtBox = document.createElement("div");
            formChk.appendChild(input);
            formChk.appendChild(label);
            formChk.className = "form-check";
            label.className = "form-check-label";
            label.setAttribute("for", "radio" + i + abc[i]);
            input.className = "form-check-input";
            input.type = "radio";
            input.name = question;
            input.id = "radio" + i + abc[i];
            input.value = i + abc[i];
            txtBox.className = "text-box";
            paraText = qData[question].answers[i];
            label.innerHTML = paraText;
            column.appendChild(formChk);
        }
        title = document.getElementById('title-' + slide);
        title.innerHTML = qData.title[page + 1];
        document.getElementById(slide).appendChild(sectionWrapper);
    }
    function createRadioImg(slide, question) {
        var oldWrapper = document.getElementById("section-wrapper");
        oldWrapper.remove();
        var sectionWrapper = document.createElement("div");
        sectionWrapper.className = "row imageQ answer-row py-1 border-top";
        sectionWrapper.id = "section-wrapper";
        var abc = ["A", "B", "C", "D", "E"];
        for (i = 0; i < 5; i++) {
            var outerDiv = document.createElement("div");
            var formChk = document.createElement("div");
            var label = document.createElement("label");
            var input = document.createElement("INPUT");
            var img = document.createElement("IMG");
            var txtBox = document.createElement("div");
            var para = document.createElement("p")
            txtBox.appendChild(para);
            label.appendChild(input);
            label.appendChild(img);
            label.appendChild(txtBox);
            formChk.appendChild(label);
            outerDiv.appendChild(formChk);
            outerDiv.className = "col-4 col-md-2 mx-auto";
            formChk.className = "form-check p-0";
            label.className = "form-check-label";
            label.setAttribute("for", "radio" + i + abc[i]);
            input.className = "form-check-input";
            input.type = "radio";
            input.name = question;
            input.id = "radio" + i + abc[i];
            input.value = i + abc[i];
            qImg = qData[question].images[i];
            img.src = qImg;
            img.className = "img-fluid";
            txtBox.className = "text-box";
            paraText = qData[question].answers[i];
            para.innerHTML = paraText;
            sectionWrapper.appendChild(outerDiv);
        }
        title = document.getElementById('title-' + slide);
        title.innerHTML = qData.title[page + 1];
        var insertToSlide = document.getElementById(slide);
        insertToSlide.appendChild(sectionWrapper);
    }

    var score = { oven: 0, fridge: 0, dishwasher: 0, eggslicer: 0, standmixer: 0 };
    var page = 0;
    var quizLen = qData.pages.length;
    var questionTitle = qData.pages[page];
    var questionNext = qData.pages[page + 1];
    var questionLink = ['question1', 'question2', 'question3', 'question4', 'question5'];
    var winner;
    document.getElementById("intro-btn").innerHTML = qData.buttonText[page];
    document.getElementById("intro-btn").onclick = function () { nextSlide() };
    document.getElementById("dot0").setAttribute("class", "dot dota");
    document.getElementById("current-Page").innerHTML = questionTitle;

    var activeSlide = document.getElementsByClassName("active");
    var currentSlide = activeSlide[0].getAttribute("id");
    createIntro(currentSlide, qData.pages[page]);

    function nextSlide() {
        if (page === 0) {
            genSlide(questionNext);
            $("#myCarousel").carousel("next");
            page = ++page;
            questionTitle = qData.pages[page];
            questionNext = qData.pages[page + 1];
            document.getElementById("dot" + page).setAttribute("class", "dot dota");
            document.getElementById("intro-btn").innerHTML = qData.buttonText[page];
            document.getElementById("current-Page").innerHTML = questionTitle;
        }
        else if (page === quizLen - 1) { restartGame(); }
        else if (isOneChecked(questionTitle)) {
            addToScore(questionTitle);
            genSlide(questionNext);
            $("#myCarousel").carousel("next");
            page = ++page
            questionTitle = qData.pages[page];
            questionNext = qData.pages[page + 1];
            document.getElementById("dot" + page).setAttribute("class", "dot dota");
            document.getElementById("intro-btn").innerHTML = qData.buttonText[page];
            if (page === quizLen - 2) {
                document.getElementById("current-Page").innerHTML = "Results";
            }
            else {
                document.getElementById("current-Page").innerHTML = questionTitle;
            }
        }
    }
    function isOneChecked(question) {
        var chx = document.getElementsByName(question);
        for (var i = 0; i < chx.length; i++) {
            if (chx[i].type === 'radio' && chx[i].checked) {
                return true;
                break;
            }
            else if (chx[i].type === 'select-one') {
                if (chx[i].value !== "Choose...") {
                    return true;
                    break;
                }
            }
        }
        return false;
    }
    function genSlide(question) {
        activeSlide = document.getElementsByClassName("active");
        currentSlide = activeSlide[0].getAttribute("id");
        if (currentSlide === 'slideA') {
            var slideToGen = 'slideB';
        }
        else {
            var slideToGen = 'slideA';
        }
        if (qData[question].qType === "radio") {
            createRadio(slideToGen, questionNext);

        }
        else if (qData[question].qType === "radioImg") {
            createRadioImg(slideToGen, questionNext);
        }
        else if (qData[question].qType === "select-one") {
            createSelect(slideToGen, questionNext);
        }
        else if (qData[question].qType === "conclusion") {
            createConclusion(slideToGen, questionNext);
        }
        else if (qData[question].qType === "Introduction") {
            createIntro(slideToGen, qData.pages[0]);
        }
    }
    function addToScore(question) {
        var radios = document.getElementsByName(question);
        if (radios[0].type === 'radio') {
            for (var i = 0, length = radios.length; i < length; i++) {
                if (radios[i].checked) {
                    var answ = radios[i].value[1];
                    var val = qData[question].values[answ];
                    score[val] += 1;
                }
            }
        }
        else if (radios[0].type === 'select-one') {
            var answ = radios[0].value[1];
            var val = qData[question].values[answ];
            score[val] += 1;
        }
        else { console.log('well you\'ve got a problem pal'); }
        if (page === 5) {
            checkWinner();
        }
    }
    function checkWinner() {
        winner = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
        console.log(winner);
    }

    function restartGame() {
        score = { oven: 0, fridge: 0, dishwasher: 0, eggslicer: 0, standmixer: 0 };
        page = 0;
        questionTitle = qData.pages[page];
        $("#myCarousel").carousel("next");
        genSlide(qData.pages[0])
        for (i = 1; i < 7; i++) {
            document.getElementById("dot" + i).setAttribute("class", "dot");
        }
        questionNext = qData.pages[page + 1];
        document.getElementById("current-Page").innerHTML = 'Welcome';
    }
}
runQuiz(qData);

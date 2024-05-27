const categories = {
    'الخضروات والفواكه': ['بامية','دوراق','كستناء','فطر','يقطين','باذنجان','ملفوف','بصل','تفاحة', 'موز', 'برتقال', 'ليمون', 'عنب', 'فراولة', 'بطيخ', 'شمام', 'رمان', 'كيوي', 'مانجو', 'أناناس', 'كمثرى', 'خوخ', 'مشمش', 'كرز', 'توت', 'برقوق'],
    'المباني والمنشآت': ['بلدية','عيادة','ناطحة','منتجع','حديقة','سوبرماركت','جامع','مدرسة', 'جامعة', 'مستشفى', 'مكتب', 'مطار', 'مصنع', 'محطة', 'بنك', 'مكتبة', 'مسجد', 'كلية', 'ملعب', 'مسرح', 'قصر', 'فيلا', 'شقة'],
    'الوظائف': ['فنان','طبيب', 'مهندس', 'معلم', 'مزارع', 'محاسب', 'ممرض', 'طاه', 'عامل', 'سائق', 'طيار', 'شرطي', 'محامي', 'صحفي', 'ممثل'],
    'أدوات المنزل': ['مظلة','فرن','ميكروويف','مقلاة','شماعة','كأس','فنجان','منديل','مفتاح', 'قلم', 'ورقة', 'كرسي', 'طاولة', 'ثلاجة', 'غسالة', 'مروحة', 'مكيف', 'ساعة', 'حقيبة', 'خزانة', 'شمعة', 'مصباح', 'تلفاز', 'راديو'],
    'الحيوانات': ['دولفين','شمبانزي','بطريق','سلطعون','بجع','حلزون','طاووس','غراب','صقر','نسر','هدهد','نعامة','سلاحفة','تمساح','ضفدع','جمل','باندا','كوالا','كسلان','جربوع','قرد', 'قطة', 'كلب', 'حصان', 'أسد', 'نمر', 'فيل', 'زرافة', 'غزال', 'ذئب', 'ثعلب', 'أرنب', 'دب', 'فهد'],
    'الحشرات': ['بق','يرقة','قرادة','يسروع','قمل','برغوث','دبور','جندب','دعسوقة','نملة', 'ذبابة', 'بعوضة', 'نحلة', 'صرصور', 'فراشة', 'عنكبوت', 'يعسوب'],
    'المواد الغذائية و المأكولات': ['كيكة','كنافة','بسبوسة','سمبوسة','خميرة','نشاء','دقيق','شاورما','زعتر','شاي','بن','دجاج','لحم','صلصة','كاتشب','لبنة','خبز', 'أرز', 'زبدة', 'جبن', 'بيض', 'ملح', 'سكر', 'فلفل', 'زيت', 'خل', 'عسل', 'مربى', 'طحين', 'شوربة', 'معكرونة', 'بيتزا', 'سندويتش', 'برجر', 'سلطة']
};

let chosenWord = '';
let displayedWord = '';
let attemptsLeft = 9;
let guessedLetters = [];
let correctGuesses = 0;
let helpCounter = 1; // Initialize helpCounter to 1
let levelsPassed = 0;
let helpUsed = false;
let currentStage = 1;
let score = 0;
let currentCategory = '';

function startGame(resetScore = false) {
    if (resetScore) {
        currentStage = 1; // Reset stage to 1 when starting a new game
    }
    attemptsLeft = 9 - Math.floor((currentStage - 1) / 5);
    guessedLetters = [];
    correctGuesses = 0;
    helpUsed = false; // Reset help usage
    helpCounter = 1; // Reset helpCounter
    const categoriesKeys = Object.keys(categories);
    currentCategory = categoriesKeys[Math.floor(Math.random() * categoriesKeys.length)];
    chosenWord = categories[currentCategory][Math.floor(Math.random() * categories[currentCategory].length)];
    displayedWord = '_ '.repeat(chosenWord.length).trim();
    document.getElementById('wordDisplay').innerText = displayedWord;
    document.getElementById('attemptsLeft').innerText = attemptsLeft;
    document.getElementById('message').innerText = '';
    document.getElementById('guessInput').value = '';
    document.getElementById('stageDisplay').innerText = `مرحلة رقم ${currentStage}`;
    document.getElementById('categoryDisplay').innerText = `نوع الكلمة: ${currentCategory}`;
    
    if (resetScore) {
        score = 0;
    }
    
    document.getElementById('score').innerText = score;
    updateHangmanImage();
    generateLetters();
    updateHelpButton(); // Update help button state
}

function generateLetters() {
    const lettersContainer = document.getElementById('lettersContainer');
    lettersContainer.innerHTML = '';
    const letters = 'أبتثجحخدذرزسشصضطظعغفقكلمنهويءؤىةا'.split('');
    letters.forEach(letter => {
        const letterElement = document.createElement('div');
        letterElement.classList.add('letter');
        letterElement.innerText = letter;
        letterElement.onclick = () => {
            document.getElementById('guessInput').value = letter;
            makeGuess();
        };
        lettersContainer.appendChild(letterElement);
    });
}

function makeGuess() {
    if (attemptsLeft === 0) {
        document.getElementById('message').innerText = 'أسف . لقد أستنفذت جميع محاولاتك ، حاول مرة أخرى';
        return;
    }

    const guessInput = document.getElementById('guessInput');
    const guess = guessInput.value.trim();
    guessInput.value = '';

    if (!guess || guessedLetters.includes(guess)) {
        return;
    }

    guessedLetters.push(guess);

    if (chosenWord.includes(guess)) {
        let newDisplayedWord = '';
        for (let i = 0; i < chosenWord.length; i++) {
            if (guessedLetters.includes(chosenWord[i])) {
                newDisplayedWord += chosenWord[i] + ' ';
            } else {
                newDisplayedWord += '_ ';
            }
        }
        displayedWord = newDisplayedWord.trim();
        document.getElementById('wordDisplay').innerText = displayedWord;

        document.querySelectorAll('.letter').forEach(letterElement => {
            if (letterElement.innerText === guess) {
                letterElement.classList.add('correct');
            }
        });

        correctGuesses += chosenWord.split(guess).length - 1;
        score += 10;  // Increase score by 10 for each correct letter guessed
        document.getElementById('score').innerText = score;  // Update score display

        if (!displayedWord.includes('_')) {
            document.getElementById('message').innerText = `مبروك! لقد خمنت الكلمة بشكل صحيح! درجاتك: ${score}`;
            levelsPassed++;
            currentStage++;
            startGame();
            helpUsed = false; // Reset help usage for the new stage
            updateHelpButton();
        }
    } else {
        attemptsLeft--;
        document.getElementById('attemptsLeft').innerText = attemptsLeft;
        document.querySelectorAll('.letter').forEach(letterElement => {
            if (letterElement.innerText === guess) {
                letterElement.classList.add('incorrect');
            }
        });
        updateHangmanImage();
        if (attemptsLeft === 0) {
            document.getElementById('message').innerText = `للأسف! لقد خسرت. الكلمة كانت: ${chosenWord}. درجاتك: ${score}`;
            levelsPassed = 0;
            updateHelpButton();
        }
    }
}

function useHelp() {
    if (helpCounter > 0 && !helpUsed) { // Ensure help is only used once per stage
        const hiddenLetters = chosenWord.split('').filter(letter => !guessedLetters.includes(letter));
        if (hiddenLetters.length > 0) {
            const randomLetter = hiddenLetters[Math.floor(Math.random() * hiddenLetters.length)];
            guessedLetters.push(randomLetter);
            correctGuesses++;
            document.querySelectorAll('.letter').forEach(letterElement => {
                if (letterElement.innerText === randomLetter) {
                    letterElement.classList.add('helped');
                }
            });
            revealLetter(randomLetter);
        }
        helpCounter--;
        document.getElementById('helpCounter').innerText = helpCounter;
        helpUsed = true; // Mark help as used for this stage
        score -= 20;  // Deduct 20 points for using help
        if (score < 0) score = 0; // Ensure score doesn't go below 0
        document.getElementById('score').innerText = score;  // Update score display
        updateHelpButton();
    }
}

function revealLetter(letter) {
    let newDisplayedWord = '';
    for (let i = 0; i < chosenWord.length; i++) {
        if (guessedLetters.includes(chosenWord[i])) {
            newDisplayedWord += chosenWord[i] + ' ';
        } else {
            newDisplayedWord += '_ ';
        }
    }
    displayedWord = newDisplayedWord.trim();
    document.getElementById('wordDisplay').innerText = displayedWord;
}

function updateHelpButton() {
    const helpButton = document.getElementById('helpButton');
    if (helpUsed || helpCounter === 0) {
        helpButton.disabled = true;
    } else {
        helpButton.disabled = false;
    }
    document.getElementById('helpCounter').innerText = helpCounter;
}

function updateHangmanImage() {
    const hangmanImage = document.getElementById('hangman');
    switch (attemptsLeft) {
        case 9:
        case 8:
            hangmanImage.src = 'images/ولد خائف.png';
            break;
        case 7:
        case 6:
            hangmanImage.src = 'images/ولدقلق.png';
            break;
        case 5:
        case 4:
            hangmanImage.src = 'images/ولد صامت.png';
            break;
        case 3:
            hangmanImage.src = 'images/ولد يضحك.png';
            break;
        case 2:
            hangmanImage.src = 'images/يتمسخر.png';
            break;
        case 1:
            hangmanImage.src = 'images/حقير.png';
            break;
        default:
            hangmanImage.src = 'images/حقير.png';
    }
}

document.getElementById('startNewGameButton').addEventListener('click', () => startGame(true));

startGame();

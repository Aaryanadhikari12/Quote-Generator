const quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall.<br><br> <p class='author'> -Nelson Mandela </p>",
    "The way to get started is to quit talking and begin doing.<br><br> <p class='author'> -Walt Disney</p>",
    "Your time is limited, don't waste it living someone else's life.<br><br> <p class='author'> -Steve Jobsv",
    "If life were predictable it would cease to be life, and be without flavor.<br><br> <p class='author'>-Eleanor Roosevelt</p>",
    "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.<br><br> <p class='author'> -Oprah Winfrey</p>",
    "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.<br><br> <p class='author'> -James Cameron</p>",
    "Life is what happens when you're busy making other plans.<br><br> <p class='author'> -John Lennon</p>",
    "Spread love everywhere you go. Let no one ever come to you without leaving happier.<br><br> <p class='author'> -Mother Teresa</p>",
    "When you reach the end of your rope, tie a knot in it and hang on.<br><br> <p class='author'> -Franklin D. Roosevelt</p>",
    "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.<br><br> <p class='author'> -Helen Keller</p>",
    "I have not failed. I've just found 10,000 ways that won't work.<br><br> <p class='author'> -Thomas Edison</p>",
    "If you want to live a happy life, tie it to a goal, not to people or things.<br><br> <p class='author'> -Albert Einstein</p>",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.<br><br> <p class='author'> -Winston Churchill</p>",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.<br><br> <p class='author'> -Christian D. Larson</p>",
    "You are never too old to set another goal or to dream a new dream.<br><br> <p class='author'> -C.S. Lewis</p>",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.<br><br> <p class='author'>-Ralph Waldo Emerson</p>",
    "Happiness is not something ready made. It comes from your own actions.<br><br> <p class='author'> -Dalai Lama</p>",
    "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.<br><br> <p class='author'> -Jimmy Dean</p>",
    "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle.<br><br> <p class='author'> -Steve Jobs</p>",
    "The only person you are destined to become is the person you decide to be.<br><br> <p class='author'>-Ralph Waldo Emerson</p>",
    "You miss 100% of the shots you don't take.<br><br> <p class='author'> -Wayne Gretzky</p>",
    "The future belongs to those who believe in the beauty of their dreams.<br> <br><p class='author'>-Eleanor Roosevelt</p>",
    "Strive not to be a success, but rather to be of value.<br><br> <p class='author'> -Albert Einstein</p>",
    "The only limit to our realization of tomorrow will be our doubts of today.<br> <br><p class='author'>-Franklin D. Roosevelt</p>",
    "You can't go back and change the beginning, but you can start where you are and change the ending.<br><br> <p class='author'> -C.S. Lewis</p>",
    "Don't watch the clock; do what it does. Keep going.<br><br> <p class='author'> -Sam Levenson</p>",
    "I have learned over the years that when one's mind is made up, this diminishes fear.<br><br> <p class='author'> -Rosa Parks</p>",
    "Success is stumbling from failure to failure with no loss of enthusiasm.<br><br> <p class='author'> -Winston Churchill</p>",
    "It does not matter how slowly you go as long as you do not stop.<br><br> <p class='author'> -Confucius</p>",
    "If you want to achieve greatness stop asking for permission.<br><br> <p class='author'> -Unknown</p>",
    "The only way to do something great is to love what you do.<br><br> <p class='author'> -Steve Jobs</p>",
    "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.<br><br> <p class='author'>  -Albert Schweitzer</p>",
    "Happiness is a warm puppy.<br><br> <p class='author'> -Charles M. Schulz</p>",
    "If you're not stubborn, you'll give up on experiments too soon. And if you're not flexible, you'll pound your head against the wall and you won't see a different solution to a problem you're trying to solve.<br><br> <p class='author'> -Jeff Bezos</p>",
    "If you want to make a permanent change, stop focusing on the size of your problems and start focusing on the size of you!<br><br> <p class='author'> -T. Harv Eker</p>",
    "You can't connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future.<br><br> <p class='author'> -Steve Jobs</p>",
    "People who are crazy enough to think they can change the world, are the ones who do.<br><br> <p class='author'> -Rob Siltanen</p>",
    "You only live once, but if you do it right, once is enough.<br><br> <p class='author'> -Mae West</p>",
    "The only true wisdom is in knowing you know nothing.<br><br> <p class='author'> -Socrates</p>",
    "The greatest wealth is to live content with little.<br><br> <p class='author'> -Plato</p>",
    "If you don't stand for something you will fall for anything.<br><br> <p class='author'> -Malcolm X</p>",
    "Everything has beauty, but not everyone can see.<br><br> <p class='author'> -Confucius</p>",
    "I would rather die of passion than of boredom.<br><br> <p class='author'> -Vincent van Gogh</p>",
    "The difference between ordinary and extraordinary is that little extra.<br><br> <p class='author'> -Jimmy Johnsonv",
    "When I let go of what I am, I become what I might be.<br><br> <p class='author'> -Lao Tzu</p>",
    "The best way to predict your future is to create it.<br><br> <p class='author'> -Abraham Lincoln</p>",
    "Believe you can and you're halfway there. <br><br> <p class='author'>-Theodore Roosevelt</p>",
    "The only thing standing between you and your goal is the story you keep telling yourself that you can't achieve it.<br><br> <p class='author'> -Jordan Belfort</p>",
    "The man who has confidence in himself gains the confidence of others.<br><br> <p class='author'> -Hasidic Proverb</p>",
    "The only place where success comes before work is in the dictionary.<br><br> <p class='author'> -Vidal Sassoon</p>",
    "Love the life you live. Live the life you love.<br><br> <p class='author'> -Bob Marley</p>",
    "Success is not how high you have climbed, but how you make a positive difference to the world.<br><br> <p class='author'> -Roy T. Bennett</p>",
    "Innovation distinguishes between a leader and a follower.<br><br> <p class='author'> -Steve Jobs</p>",
    "Don't let yesterday take up too much of today.<br><br> <p class='author'> -Will Rogers</p>",
    "If you genuinely want something, don't wait for it--teach yourself to be impatient.<br><br> <p class='author'> -Gurbaksh Chahal</p>",
    "You can't build a reputation on what you are going to do.<br><br> <p class='author'> -Henry Ford</p>",
    "No one can make you feel inferior without your consent.<br><br> <p class='author'> -Eleanor Roosevelt</p>",
    "The whole secret of a successful life is to find out what is one's destiny to do, and then do it.<br><br> <p class='author'> -Henry Ford</p>"
]
// console.log(Math.floor(Math.random()* quotes.length));
let qtext = document.getElementById('quote');
let btn = document.getElementById('main-btn');
let index;

const ran = () => {
    index = Math.floor(Math.random()* quotes.length);
    // index = 0;
}

const call = () => {
    let data = quotes[index];
    qtext.innerHTML = data;
}

btn.addEventListener('click', () =>{
    ran();
    call();
})
ran();
call();

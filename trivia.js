var arrow = ["\u2191", "\u2190", "\u2192", "\u2193"];
var questionList = [20][4];
var catergories = ["videogames", "geography", "biology", "history"];


var qCount = 0;
var correct = 0;
var wrong = 0;

var next = false;
var flag = true;
var spamPrevent = false;
var menu = 0;
var category = 5;

var answer = "";
var input = "";

var answerX = 250;
var answerY = 480;
var correctX = 100;
var correctY = 700;
var wrongX = 400;
var wrongY = 700;
var choiceX = 250;
var choiceY = 80;
var selectedAnswer = -205;

var answerList = [1,2,3,4];

var videogames =
[
  ["What is the highest grossing arcade game of all time?", "Pacman", "Galaga", "Bomberman", "Dance Dance Revolution"],

  ["Nintendo started off selling which product?", "Cards", "Basic Electronics", "Video Related Hardware", "Software"],

  ["How many playstation 4s were sold during 2019 (rounded to nearest million)?", "100 Million", "150 Million", "200 Million", "85 Million"],

  ["Uncontrollable characters in videogames are refered to by players as _____.", "NPC", "UPC", "PC", "NP"],

  ["Who is the main character of punchout?", "Little Mac", "Punchy", "not named", "Small Darby"],

  ["In Star Fox what is the name of the star system where everything takes place?", "Lylat", "Korprulu", "Alpha Centauri", "Draenor"],

  ["How many generations of Pokemon are there as of the release of Sword and Shield?", "Eight", "Seven", "Six", "Nine"],

  ["What game is Notch responsible for designing?", "Minecraft", "Terraria", "Starbound", "Factorio"],

  ["What questionList is the origin of Mario?", "Donkey Kong", "Super Mario Bros.", "Super Mario All-Stars", "Mario and Luigi Superstar Saga"],

  ["What is the name of the alien alliance in Halo?", "The Covenant", "The Forerunners", "The Forsaken", "The Flood"],

  ["What was the first company to bring pacman into the average household?", "Atari", "Nintendo", "Sega", "Sony"],

  ["Nintendo had a magazine called _____.", "Nintendo Power", "ACE", "GamePro", "Power Unlimited"],

  ["What did fans dub the beta version of starcraft?", "Warcraft in Space", "Purple Warcraft", "Warcraft: Space Edition", "World of Starcraft"],

  ["What genre of game has a large amount of people playing with each other on one server at any given time?", "MMO", "RTS", "RPG", "FPS"],

  ["What game series features the character Master Hand?", "Smash Bros", "Tekken", "Mortal Kombat", "Street Fighter"],

  ["What is Megaman's name in the Japanese version?", "RockMan", "Megaman", "RoboBoy", "RoboMan"],

  ["What engine do the games team fortress and counter strike run on?", "Source Engine", "Unity", "Frost Engine", "Cry Engine"],

  ["Which game series has accurate locations and time of deaths portrayed?", "Assassin's Creed", "Far Cry", "Mass Effect", "Mario is Missing"],

  ["What fighting game is most known for it's extreme modability?", "Mugen", "Tekken", "Soul Caliber", "Rivals of Aether"],

  ["Aiai, Meemee, Baby and Gongon are characters in which video game series?", "Super Monkey Ball", "Super Mario Bros", "Bioshock", "Fallout"]
]

var geography =
[
    ["What Cardinal direction is America in?", "West", "East", "North", "South"],

    ["What Cardinal direction is Scandinavia in?", "North", "East", "West", "South"],

    ["What Cardinal direction is Asia in?", "East", "West", "North", "South"],

    ["What Cardinal direction is New Zealand in?", "South", "East", "North", "West"],

    ["What is Earth's largest continent?", "Asia", "America", "Europe", "Africa"],

    ["What percentage of the River Nile is located in Egypt?", "Twenty-Two percent", "Twenty percent", "Eighteen percent", "Twenty-Seven percent"],

    ["What is the driest place on Earth?", "Mcmurdo, Antartica", "Sahara Desert", "Rhineland", "Amazon Rainforest"],

    ["Which African nation has the most pyramids?", "Sudan", "Egypt", "Mexico", "Tunis"],

    ["What is the flattest continent?", "Australia", "Europe", "South America", "North America"],

    ["What country has the longest coastline?", "Canada", "United States", "Japan", "Australia"],

    ["What is the largest country in South America?", "Brazil", "Argentina", "Venuzela", "Bolivia"],

    ["What is the world's tallest mountain?", "Mount Everest", "Makalu", "Manaslu", "Lhotse"],

    ["What is the deepest point in Earth's oceans?", "Marina Trench", "Tonga Trench", "Kuril-Kamchatka Trench", "South Sandwich Trench"],

    ["Spain France and ____ all have Atlantic and Mediterranean coastlines", "Morocco", "Kenya", "Germany", "United Kingdom"],

    ["What is the highest waterfall in Europe?", "Krimml", "Marmore Falls", "Selfoss", "Svartifoss"],

    ["What continent contains the most fresh water?", "Antartica", "Africa", "Europe", "Asia"],

    ["What ocean is home to 75% of the Earth's volcanoes?", "Pacific Ocean", "Arctic Ocean", "Atlantic Ocean", "Indian Ocean"],

    ["What is the only major city located on two continents?", "Istanbul", "Luxemberg", "Vladivostok", "Venice"],

    ["What is the oldest active volcano on Earth?", "Mount Etna", "Erta Ale", "Mount Vesuvius", "Mount Kilimanjaro"],

    ["What is the most densely populated country on Earth?", "Monaco", "Dubai", "Moscow", "Paris"]
]

var biology =
[
  ["What is the most common element in the human body", "Oxygen", "Water", "Carbon", "Calcium"],

  ["What human organ cleans 50 litres of blood a day?", "Kidneys", "Liver", "Heart", "Stomach"],

  ["What animal has the heaviest brain?", "Sperm whale", "Black Rhino", "African Bush Elephant", "Ape"],

  ["Which stage has the most bones in a human", "Baby", "Teenager", "Adult", "All are equal"],

  ["What was the first genetically engineered organism?", "Tobacco", "Corn", "Lab Rat", "Sheep"],

  ["Which of the following has the longest lifespan?", "Oyster", "Indian Elephant", "Chimpanzee", "Termite"],

  ["A single piece of coiled DNA is called?", "Chromosome", "Vacuole", "Mitochondria", "Cell"],

  ["Mumps is caused by ____", "Viruses", "Bacteria", "Genetics", "Toxins"],

  ["What scientist introduced the concept of natural selection?", "Charles Darwin", "Issac Newton", "Sir Elton John", "Bill Nye the Science Guy"],

  ["A change in dna in an organism is a ____", "Mutation", "Evolution", "Metamorphsis", "Hibernation"],

  ["What is studied in Botany?", "Plants", "Animals", "Cells", "Ecosystems"],

  ["How many bones are in the adult human body?", "206", "204", "195", "211"],

  ["How many nerve cells are in the average human brain?", "Ten million", "One-hundred thousand", "Two million", "One"],

  ["How much electricity does the human brain generate?", "Enough to power a lightbulb", "Enough to power a charge a phone", "Enough to power a laptop", "None"],

  ["What is the outer skeleton of organisms such as spiders and insects called?", "Exoskeleton", "EndoSkeleton", "Internal Skeletal System", "ExoSkeletal"],

  ["The brain is divided into how many lobes", "Two", "Three", "Four", "Five"],

  ["What is the only mammal capable of true flight?", "Bat", "Flying Squirrel", "Hummingbird", "Human"],

  ["What is the fastest bird in the world?", "Peregrine Falcon", "Harpy Eagle", "Spine-Tailed Swift", "Horned Sungem"],

  ["How many times can a hummingbird flap it's wings per second?", "eighty", "fourty", "fifty", "ninety"],

  ["What animal has the highest blood pressure", "Giraffe", "Blue whale", "Elephant", "Flea"]
]


var history =
[
  ["What is the oldest surviving system of laws?", "Code of Hammurabi", "Hebrew Torah", "Shabaka Stone", "Rosetta Stone"],

  ["What was the last battle in the Napoleonic Wars", "Battle of Wavre", "Battle of the Nile", "Battle of Trafalgar", "Battle of Waterloo"],

  ["Who was the first democratically elected President of Russia?", "Boris Yeltsin", "Vladimier Putin", "Mikhael Gorbachev", "Nikita Krushchev"],

  ["What is the correct chronological order, from earliest to latest, of the development of the following religions?", "Buddhism, Christianity, Islam", "Islam, Buddheism, Christianity", "Christianity, Islam, Buddheism", "Christianity, Buddheism, Islam"],

  ["Which of the following was the first patented", "Rubberband", "Chewing Gum", "Cash Register", "Dishwasher"],

  ["What city first reached a population of one million?", "Rome", "Beijing", "London", "New York"],

  ["How long did the Hundred Years' War last", "one hundred years", "one hundred and sixteen years", "ninetynine years", "one hundred and one years"],

  ["What famous general was once attacked by rabbits?", "Napoleon", "Alexander the Great", "Julius Caesar", "Genghis Khan"],

  ["Which of the following did not have a written language?", "Incan Empire", "Tang Dynasty", "Roman Empire", "Aztec Empire"],

  ["What American general famously promised: 'I shall return'?", "Douglas Macarthur", "George Patton", "George Washington", "John J. Pershing"],

  ["Which founding father is known for his large signature on the United States Declaration of Independence?", "John Hancock", "Benjamin Franklin", "Samuel Adams", "William Whipple"],

  ["How many passengers were aboard the Mayflower when it set sail for the New World?", "One hundred and two", "One hundred and ten", "Ninety-eight", "One hundred and five"],

  ["What war lasted approximately thirty-eight minutes?", "Anglo-Zanzibar War", "War of 1812", "Falklands War", "Serbo-Bulgarian War"],

  ["Who invented Arabic numbers", "Indians", "Arabians", "Greeks", "Romans"],

  ["Where did the Battle of Bunker Hill take place?", "Breed's Hill", "Bredon Hill", "Bunker Hill", "Black Hill"],

  ["Who was the first wife of King Henry VIII?", "Catherine of Aragon", "Catherine Howard", "Anne Boleyn", "Jane Seymour"]

  ["In which ocean was the Battle of Midway fought?", "Pacific Ocean", "Indian Ocean", "Southern Ocean", "Atlantic Ocean"],

  ["What did ancient Egyptians use as pillows?", "Stones", "Animals Pelts", "Bundles of wheat", "Bags of Water"],

  ["What international body was established in 1945, immediately following World War II?", "United Nations", "League of Nations", "World Bank", "International Monetary Fund"],

  ["Which Soviet satellite was the first to be launched into space in 1957?", "Sputnik", "Venera", "Mir", "Vostok"]
]


function setup()
{
  fill(255);
  createCanvas(1920,1200);
  background(0);
  textSize(25);
  fill(0,255,0);
  text("Correct: " + correct,correctX,correctY);
  fill(255,0,0);
  text("Wrong: " + wrong,wrongX,wrongY);
  print("answer: " + answer);
  for (var i = 0; i < catergories.length; i++)
  {
    fill(255);
    text(arrow[i] + " " + catergories[i], choiceX,(choiceY*i)+60);
  }


  //shuffle(questionList, true);

}

function draw()
{
  //setup
  textSize(25);

  //instructions
  text("Use the arrow keys to input answers.", 0,750);
  text("Press Enter to go to the next question after answering.",0,780);


  fill(255);

  if (menu === 1 && category === 0)
  {
    for (var i = 0; i < videogames.length; i++)
    {
      questionList = videogames;
      shuffle(questionList, true);
      answer = questionList[qCount][1];
      shuffle(answerList, true);
      background(0);
      menu = 2;
    }
  }
  else if (menu === 1 && category === 1)
  {
      for (var i = 0; i < geography.length; i++)
      {
        questionList = geography;
        shuffle(questionList, true);
        answer = questionList[qCount][1];
        shuffle(answerList, true);
        background(0);
        menu = 2;
      }
  }
  else if (menu === 1 && category === 2)
  {
      for (var i = 0; i < biology.length; i++)
      {
        questionList = biology;
        shuffle(questionList, true);
        answer = questionList[qCount][1];
        shuffle(answerList, true);
        background(0);
        menu = 2;
      }
  }
  else if (menu === 1 && category === 3)
  {
      for (var i = 0; i < history.length; i++)
      {
        questionList = history;
        shuffle(questionList, true);
        answer = questionList[qCount][1];
        shuffle(answerList, true);
        background(0);
        menu = 2;
      }

  }
  //question display
  if (flag === true)

  try
  {
    //print(answerList);
    for (var i = 1; i < questionList[qCount].length;i++)
    {
      text(questionList[qCount][0], 0,40);
      text(arrow[i-1] + "   " + questionList[qCount][answerList[i-1]], choiceX,(choiceY*i)+60);
      flag = false;
    }
  }
  catch (e) {}
}

function keyPressed()
{

  try
  {
    if (keyCode === UP_ARROW && menu === 0)
    {
      category = 0;
      shuffle(answerList, true); //question randomizer
      menu = 1;
    }
    else if (keyCode === UP_ARROW && next === false)
    {
      input = questionList[qCount][answerList[0]];
      fill(0,0,255);
      text("selected answer", choiceX+selectedAnswer,choiceY*1+60);
      print(input);
      next = true;
    }

    if (keyCode === LEFT_ARROW && menu === 0)
    {
      category = 1;
      menu = 1;
    }
    else if (keyCode === LEFT_ARROW && next === false)
    {
      input = questionList[qCount][answerList[1]];
      fill(0,0,255);
      text("selected answer", choiceX+selectedAnswer,choiceY*2+60);
      print(input);
      next = true;
    }

    if (keyCode === RIGHT_ARROW && menu === 0)
    {
      category = 2;
      menu = 1;
    }
    else if (keyCode === RIGHT_ARROW && next === false)
    {
      input = questionList[qCount][answerList[2]];
      fill(0,0,255);
      text("selected answer", choiceX+selectedAnswer,choiceY*3+60);
      print(input);
      next = true;
    }

    if (keyCode === DOWN_ARROW && menu === 0)
    {
      category = 3;
      menu = 1;
    }
    else if (keyCode === DOWN_ARROW && next === false)
    {
      input = questionList[qCount][answerList[3]];
      fill(0,0,255);
      text("selected answer", choiceX+selectedAnswer,choiceY*4+60);
      print(input);
      next = true;
    }
  }
  catch (e) {}


  if (keyCode === ENTER && next === true)
  {
    background(0);
    qCount++;
    shuffle(answerList, true);
    next = false;
    fill(0,255,0);
    text("Correct: " + correct,correctX,correctY);
    fill(255,0,0);
    text("Wrong: " + wrong,wrongX,wrongY);
    flag = true;
    spamPrevent = false;

    try
    {
      answer = questionList[qCount][1];
    }
    catch(e)
    {
      fill(0,0,255);
      text("GAME OVER", 160,160)
      text("Score: " + correct + " / " + questionList.length, 160,190);
      fill(255);
    }

  }

  if (next === true && answer === input && spamPrevent === false)
  {
    fill(0,255,0);
    text("The correct answer is: " + answer,answerX,answerY);
    correct++;
    spamPrevent = true;
  }
  else if (next === true && answer != input && spamPrevent === false)
  {
    fill(255,0,0);
    text("The correct answer is: " + answer,answerX,answerY);
    wrong++;
    spamPrevent = true;
  }
}




//legacy code
/*
//answer check
if (keyCode === UP_ARROW && next === false)
{
  fill(0,255,0);
  text("Correct",answerX,answerY);
  correct++;
  next = true;
}
else if (keyCode === DOWN_ARROW && next === false)
{
  fill(255,0,0);
  text("Wrong",answerX,answerY);
  wrong++;
  next = true;
}
else if (keyCode === LEFT_ARROW && next === false)
{
  fill(255,0,0);
  text("Wrong",answerX,answerY);
  wrong++;
  next = true;
}
else if (keyCode === RIGHT_ARROW && next === false)
{
  fill(255,0,0);
  text("Wrong",answerX,answerY);
  wrong++;
  next = true;
}
*/

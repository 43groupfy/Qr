const questions = [
{
 question: "My father put $1,000 ....... as a deposit to help my sister purchase a new car.",
 options: ["in", "out", "down", "on"],
 correctIndex: 2
},
{
 question: "Mr. and Mrs. Jarrett must be making a fortune. They're clearly raking ....... over $1,000,000 a year.",
 options: ["up", "in", "on", "out"],
 correctIndex: 1
},
{
 question: "Pizza is a $30 billion per year ........",
 options: ["corporation", "company", "industry", "conglomerate"],
 correctIndex: 2
},
{
 question: "Holmen's Board decided on Wednesday to invest in total ....... $500 in the Group's newsprint mill outside Norrkping.",
 options: ["just after", "just as", "just over", "just before"],
 correctIndex: 2
},
{
 question: "Indonesia's fuel subsidies could ....... 100 trillion Rupiah ($9.6 billion) due to high prices and fuel scarcity in parts of the world's fourth most populous country, its president said on Tuesday.",
 options: ["go on", "go over", "go out", "go off"],
 correctIndex: 1
},
{
 question: "Can you hear what he is .......?",
 options: ["saying", "speaking", "telling", "talking"],
 correctIndex: 0
},
{
 question: "We live ....... the city centre.",
 options: ["near", "next", "by", "nearby"],
 correctIndex: 0
},
{
 question: "I only ....... one mistake in last night's test.",
 options: ["made", "done", "did", "make"],
 correctIndex: 0
},
{
 question: "He is looking ....... a present to buy his girlfriend.",
 options: ["for", "at", "in", "on"],
 correctIndex: 0
},
{
 question: "That's what I would like ....... Christmas.",
 options: ["for", "at", "in", "on"],
 correctIndex: 0
},
{
 question: "If you want to ....... that book remember to bring it back.",
 options: ["borrow", "lend", "loan", "owe"],
 correctIndex: 0
},
{
 question: "I always get ....... early in the summer.",
 options: ["up", "over", "through", "on"],
 correctIndex: 0
},
{
 question: "I ....... to the concert every Monday on the radio and I imagine I am there listening to it in person.",
 options: ["listen", "am listening", "hear", "am hearing"],
 correctIndex: 0
},
{
 question: "You can't miss it, it's that tall building right at the ....... of the road.",
 options: ["end", "ends", "finish", "finishes"],
 correctIndex: 0
},
{
 question: "I've written practically the whole book except for the last part and I just don't know how to ....... the story.",
 options: ["end", "ending", "finish", "finishing"],
 correctIndex: 0
},
{
 question: "He ....... off at me again simply because I had forgotten to lock the back door after I came home.",
 options: ["started", "began", "begun", "starts"],
 correctIndex: 0
},
{
 question: "I would greatly appreciate it if you didn't ....... up that old argument again.",
 options: ["start", "begin", "starts", "begins"],
 correctIndex: 0
},
{
 question: "I ....... go now because I am already late for my class.",
 options: ["must", "had", "have"],
 correctIndex: 0
},
{
 question: "I may ....... able to come to your party if I have the time.",
 options: ["be", "being", "being to"],
 correctIndex: 0
},
{
 question: "I only want ....... little sugar in my tea, please.",
 options: ["a", "the", "such"],
 correctIndex: 0
},
{
 question: "In ....... end we decided not to go to the cinema but to watch television.",
 options: ["the", "this", "an"],
 correctIndex: 0
},
{
 question: "I want to go to the cinema to see a film about ....... and the French.",
 options: ["France", "a France", "the France"],
 correctIndex: 0
},
{
 question: "Are you studying foreign languages at school, like .......?",
 options: ["French", "a French", "the French"],
 correctIndex: 0
},
{
 question: "....... is that sitting over there in the corner?",
 options: ["Who", "Whom", "Which"],
 correctIndex: 0
},
{
 question: "I'm looking at the photograph ....... you sent me with your letter.",
 options: ["which", "who", "whom"],
 correctIndex: 0
},
{
 question: "I think you will see that this is the best museum ....... you can find in the town.",
 options: ["that", "which", "who"],
 correctIndex: 0
},
{
 question: "The police want to find out ....... drove the red car into the shop window.",
 options: ["who", "who's", "whose"],
 correctIndex: 0
},
{
 question: "The person in the house next to mine knows someone ....... met the Queen.",
 options: ["who", "whom", "which"],
 correctIndex: 0
},
{
 question: "I ....... her every day and she never says hello to me.",
 options: ["see", "am seeing", "will see"],
 correctIndex: 0
},
{
 question: "....... every single thing which that man says?",
 options: ["Do you believe", "Is you believing", "Are you believing"],
 correctIndex: 0
},
{
 question: "Sometimes I ....... what the teacher says to me.",
 options: ["don't understand", "am not understanding", "understand not"],
 correctIndex: 0
},
{
 question: "Why ....... late every time we arrange to meet?",
 options: ["is he", "he is", "is he being"],
 correctIndex: 0
},
{
 question: "....... by air because the cost of flying is very high.",
 options: ["I don't often travel", "I'm not often travelling", "I'll not often travelling"],
 correctIndex: 0
},
{
 question: "Next time you ....... to my house, you must bring that book.",
 options: ["come", "is coming", "are coming"],
 correctIndex: 0
},
{
 question: "I will try very hard to come and have dinner at your house if I ....... able to.",
 options: ["am", "was", "were"],
 correctIndex: 0
},
{
 question: "....... you able to lend me some money if I promise you that you will get it back very soon?",
 options: ["Are", "Was", "Were"],
 correctIndex: 0
},
{
 question: "If you really want to be helpful, then you ....... to tell me the truth.",
 options: ["have", "had", "will have"],
 correctIndex: 0
},
{
 question: "This summer we went ....... holiday to Greece.",
 options: ["on", "off", "in", "by"],
 correctIndex: 0
},
{
 question: "Which of these is a noun? It is ........",
 options: ["thing", "think", "that", "there"],
 correctIndex: 0
},
{
 question: "Which of these tenses is Past Perfect Simple? It is ........",
 options: ["She had laughed", "She has been laughing", "She laughed", "She was laughing"],
 correctIndex: 0
},
{
 question: "Which of these is an adverb? It is ........",
 options: ["quickly", "sly", "quicker", "quickest"],
 correctIndex: 0
},
{
 question: "Which of these is an adjective? It is ........",
 options: ["hard", "hardly", "harden", "hardship"],
 correctIndex: 0
},
{
 question: "That's a good question but I need ....... to think about it.",
 options: ["time", "space", "length", "width"],
 correctIndex: 0
},
{
 question: "Do you want me to ....... it easier for you?",
 options: ["make", "do", "try", "take"],
 correctIndex: 0
},
{
 question: "Oh, that's easy — ....... to answer this test!",
 options: ["trying", "falling", "putting", "picking"],
 correctIndex: 0
},
{
 question: "You will probably agree ....... me.",
 options: ["with", "for", "in"],
 correctIndex: 0
},
{
 question: "For the whole of next week we are planning to sell our new dictionaries at a special ........",
 options: ["price", "prize", "prise"],
 correctIndex: 0
},
{
 question: "Oh, come on. Why do you have to be such a kill ........",
 options: ["joy", "joke", "fun"],
 correctIndex: 0
},
{
 question: "Well, my ....... is that I'm lost.",
 options: ["problem", "situation", "hardship", "difficult"],
 correctIndex: 0
},
{
 question: "I don't think that's going to be ........",
 options: ["hard", "hazard", "hardship", "hardly"],
 correctIndex: 0
},
{
 question: "It ....... every time I drink a cup of tea.",
 options: ["happens", "goes", "does", "happened"],
 correctIndex: 0
},
{
 question: "And by early evening the ....... country will see the rain.",
 options: ["whole", "total", "complete", "hole"],
 correctIndex: 0
},
{
 question: "To start ....... we have comedy.",
 options: ["with", "up", "out", "in"],
 correctIndex: 0
},
{
 question: "Next we'll have the ....... news.",
 options: ["latest", "newest", "later", "newer"],
 correctIndex: 0
},
{
 question: "And the following programmes are all ....... as far as I'm concerned.",
 options: ["boring", "bored", "board", "boarding"],
 correctIndex: 0
},
{
 question: "....... I was trying to say was.",
 options: ["All", "Everything", "Nothing", "Something"],
 correctIndex: 0
},
{
 question: "Now I've shut the window and I'll make one more ........",
 options: ["attempt", "tempt", "trial", "experiment"],
 correctIndex: 0
},
{
 question: "It doesn't really ....... now. I just wanted to say how beautiful the bells sounded.",
 options: ["matter", "care", "help", "hold"],
 correctIndex: 0
},
{
 question: "Why, what .......?",
 options: ["happened", "occurred", "arrived", "evolved"],
 correctIndex: 0
},
{
 question: "That ....... have been horrible. So what are you doing this weekend?",
 options: ["must", "may", "can", "should"],
 correctIndex: 0
},
{
 question: "Mike: They went on strike last week. <br>Jane: .......",
 options: ["What on earth for?", "Are they on earth?", "Do they live on earth?", "Why on earth to?"],
 correctIndex: 0
},
{
 question: "Mike: I haven't stopped working for eight hours today. <br>Jane: .......",
 options: ["My heart bleeds for you.", "My heart breaks for you.", "My heart beats for you.", "My heart hurts for you."],
 correctIndex: 0
},
{
 question: "Mike: 'Hello. I wonder if you're interested in new double-glazing.'<br>Jane: ‘.......’",
 options: ["I'm really not interested.", "I'm really interesting.", "I'm not really interesting.", "I wasn't really interested."],
 correctIndex: 0
},
{
 question: "Mike: 'Do you think he'll be the next President?'<br>Jane: ‘.......’",
 options: ["Your guess is as good as mine.", "Your guess is better.", "My guess is worse.", "We must guess harder."],
 correctIndex: 0
},
{
 question: "Mike: 'I could try another source if you like.'<br>Jane: ‘.......’",
 options: ["There's no point.", "There's no end.", "There's no idea.", "There's no angle."],
 correctIndex: 0
},
{
 question: "Mike: 'I wonder if we could call at the post office first.'<br>Jane: ‘.......’",
 options: ["There's no time.", "There's no event.", "There's no timing.", "There's no series."],
 correctIndex: 0
},
{
 question: "Mike: 'Do you know what I did last night?'<br>Jane: ‘.......’",
 options: ["I shrink to think.", "I don't think.", "I will not think.", "I do not think."],
 correctIndex: 0
},
{
 question: "Mike: 'So what do you think is the answer?'<br>Jane: ‘.......’",
 options: ["No idea.", "Not idea.", "Negative idea.", "Small idea."],
 correctIndex: 0
},
{
 question: "Jill: 'I hope nobody minds if I leave early.'<br>Frank: ‘.......’",
 options: ["It'll be all right.", "It'll be all straight.", "It'll be all correct.", "It'll be all fine."],
 correctIndex: 0
},
{
 question: "Jill: 'I've lost everything my job, my house, my money — what should I do?'<br>Frank: ‘.......’",
 options: ["Count your blessings.", "Count your benefits.", "Count your assets.", "Count your possessions."],
 correctIndex: 0
},
{
 question: "John: 'Thank you so much.'<br>Sue: ‘.......’",
 options: ["No problem.", "Any problem.", "A problem.", "Some problem."],
 correctIndex: 0
},
{
 question: "John: 'I must say you really helped us out when we lost those passports.' <br>Sue: '.......",
 options: ["It was the least I could do.", "I couldn't do more.", "I couldn't do less.", "I couldn't do least."],
 correctIndex: 0
},
{
 question: "Jill: 'I had some good news today — I've won the lottery.'<br>Frank: ‘.......’",
 options: ["Well I never!", "Well I rarely!", "Well I frequently!", "Well I occasionally!"],
 correctIndex: 0
},
{
 question: "Jill: 'I've waited 3 hours for a bus now.'<br>Frank: ‘.......’",
 options: ["What a bore!", "What a boar!", "What bores!", "What boars!"],
 correctIndex: 0
},
{
 question: "You must go .......",
 options: ["mustn't you?", "have you?", "had you?", "must I?"],
 correctIndex: 0
},
{
 question: "Sarah: 'I would prefer to go by air.'<br>Paul: ‘.......’",
 options: ["Oh you would, would you?", "Oh you did, did you?", "Oh you prefer, don't you?", "Oh, you wouldn't will you?"],
 correctIndex: 0
},
{
 question: "You wouldn't want me to do that .......",
 options: ["would you?", "will you?", "did you?", "do you?"],
 correctIndex: 0
},
{
 question: "That's exactly what he said about ........",
 options: ["you", "yours", "me"],
 correctIndex: 0
},
{
 question: "....... does that car belong to?",
 options: ["Who", "Which", "Whose"],
 correctIndex: 0
},
{
 question: "Well, I should say someone for ....... money is no object.",
 options: ["whom", "who", "that"],
 correctIndex: 0
},
{
 question: "That's interesting. We are talking about the car ....... has a red roof.",
 options: ["that", "who", "that's"],
 correctIndex: 0
},
{
 question: "His father always wanted his children to look after ....... and do what they wanted.",
 options: ["themselves", "ourselves", "herself"],
 correctIndex: 0
},
{
 question: "Icarus shocked his father with an idea that he was going to try out on ........",
 options: ["himself", "themselves", "herself"],
 correctIndex: 0
},
{
 question: "The last words his father said before Icarus left were: Look after ........",
 options: ["yourself", "himself", "myself"],
 correctIndex: 0
},
{
 question: "....... boss said that you work hard.",
 options: ["Your", "Yours", "You're", "You"],
 correctIndex: 0
},
{
 question: "I ....... a job at the bank.",
 options: ["got", "get", "take", "like"],
 correctIndex: 0
},
{
 question: "The police all ....... uniforms.",
 options: ["wear", "eat", "use", "save"],
 correctIndex: 0
},
{
 question: "My sister is ....... home today.",
 options: ["at", "in", "the", "on"],
 correctIndex: 0
},
{
 question: "The bathroom is ....... to the front door.",
 options: ["next", "far", "opposite", "away"],
 correctIndex: 0
},
{
 question: "Driving to work in a car is much ....... than riding a bicycle.",
 options: ["faster", "fast", "fastest", "more faster"],
 correctIndex: 0
},
{
 question: "She ....... to swim when it is hot.",
 options: ["loves", "love", "loved", "loving"],
 correctIndex: 0
},
{
 question: "I like it ....... it rains.",
 options: ["when", "who", "why", "whom"],
 correctIndex: 0
},
{
 question: "I am wet ....... my umbrella broke.",
 options: ["because", "or", "if", "so"],
 correctIndex: 0
},
{
 question: "Will you please take ....... the trash?",
 options: ["out", "over", "from", "of"],
 correctIndex: 0
},
{
 question: "Tom works the ....... of anyone.",
 options: ["hardest", "harder", "most hard", "more harder"],
 correctIndex: 0
},
{
 question: "I ....... to school every day.",
 options: ["walk", "walks", "walking", "to walk"],
 correctIndex: 0
},
{
 question: "When I was a child I ....... to climb trees.",
 options: ["liked", "would like", "was liking", "like"],
 correctIndex: 0
},
{
 question: "It is a good idea ....... every day.",
 options: ["to exercise", "exercise", "exercising", "exercises"],
 correctIndex: 0
},
{
 question: "She wants to know ....... you like your coffee.",
 options: ["how", "what", "which", "who"],
 correctIndex: 0
},
{
 question: "I live in the big house ....... the corner.",
 options: ["on", "in", "of", "to"],
 correctIndex: 0
},
{
 question: "Will you come ....... me to the store?",
 options: ["with", "along", "to", "by"],
 correctIndex: 0
},
{
 question: "Were you ....... church yesterday?",
 options: ["at", "to", "on", "for"],
 correctIndex: 0
},
{
 question: "....... you please bring me my notebook?",
 options: ["Will", "May", "Do", "Should"],
 correctIndex: 0
},
{
 question: "....... I could ride with you to work?",
 options: ["Is there any way", "Ain't there no way", "Might there some way", "Aren't there some ways"],
 correctIndex: 0
},
{
 question: "....... you leave my shoes outside last night?",
 options: ["Did", "Do", "Will", "Would"],
 correctIndex: 0
},
{
 question: "....... drive me home later?",
 options: ["Do you think you can", "You can", "Did", "Is possible"],
 correctIndex: 0
},
{
 question: "Our couch is ....... soft.",
 options: ["very", "much", "lots", "tons"],
 correctIndex: 0
},
{
 question: "I will ....... the clothes after you fold them.",
 options: ["put up", "put next", "put under", "in put"],
 correctIndex: 0
},
{
 question: "How ....... does the book cost?",
 options: ["much", "many", "lots", "a lot"],
 correctIndex: 0
},
{
 question: "I have ....... of homework to do before tomorrow.",
 options: ["a ton", "a tan", "a million", "a much"],
 correctIndex: 0
},
{
 question: "If I am not right I am ........",
 options: ["wrong", "certain", "correct", "un-right"],
 correctIndex: 0
},
{
 question: "Today it is not hot, it is ........",
 options: ["cold", "un-hot", "hotter", "colder"],
 correctIndex: 0
},
{
 question: "He is the heaviest and I am the ........",
 options: ["lightest", "lighter", "light", "heavier"],
 correctIndex: 0
},
{
 question: "Mike: What's ....... with the shops here?",
 options: ["wrong", "incorrect", "FALSE", "funny"],
 correctIndex: 0
},
{
 question: "Mike: Then it's just ....... well it's not raining.",
 options: ["as", "more", "much", "than"],
 correctIndex: 0
},
{
 question: "Linda: It's awful really. At the ....... it's in my knee.",
 options: ["moment", "second", "occasion", "hour"],
 correctIndex: 0
},
{
 question: "Mike: Yes, lots of times. There's no need to ....... about it.",
 options: ["worry", "think", "ponder", "brood"],
 correctIndex: 0
},
{
 question: "Mike: Never ....... I'm sure you'll be all right and anyhow we're starting to move now.",
 options: ["mind", "care", "object", "deny"],
 correctIndex: 0
},
{
 question: "Linda: Oh yes. I don't know why I was so ....... I think flying is great!",
 options: ["nervous", "terrible", "awful", "nerving"],
 correctIndex: 0
},
{
 question: "Deborah: Yes, he goes ....... with me.",
 options: ["everywhere", "all over", "somewhere", "nowhere"],
 correctIndex: 0
},
{
 question: "Deborah: Oh yes. He's very good. At home when he's ....... eating, he goes into the kitchen and washes up his plates.",
 options: ["finished", "ended", "ends", "finishes"],
 correctIndex: 0
},
{
 question: "Waiter: Sorry sir. The soup's ........",
 options: ["off", "over", "through", "under"],
 correctIndex: 0
},
{
 question: "Waiter: You'll have no luck there either. We haven't got any ........",
 options: ["left", "leaving", "right", "taken"],
 correctIndex: 0
},
{
 question: "Waiter: Now sir it's not worth ....... your temper. You could take the last thing on the menu.",
 options: ["losing", "holding", "dropping", "throwing"],
 correctIndex: 0
},
{
 question: "Woman: Hello. 6 — 3 — 4 — 9 — 5. Who's ....... please?",
 options: ["calling", "talking", "acting", "hearing"],
 correctIndex: 0
},
{
 question: "Charlie: Of course that was some time ago and I've got ....... to it now.",
 options: ["used", "bound", "held", "tied"],
 correctIndex: 0
},
{
 question: "Mary: The trouble is I always ....... his name.",
 options: ["forget", "forbid", "forego", "forefend"],
 correctIndex: 0
},
{
 question: "Alice: He was really good in that. Oh look, he's suddenly stopped and started ........",
 options: ["glaring", "glazing", "glancing", "glossing"],
 correctIndex: 0
},
{
 question: "Employee: No problem. ....... you are.",
 options: ["There", "Then", "How", "What"],
 correctIndex: 0
},
{
 question: "Old lady: All I want to know is ....... day today is.",
 options: ["what", "when", "where", "who"],
 correctIndex: 0
},
{
 question: "Mrs Ashton: Well, last time I ....... by train, I got on the wrong one.",
 options: ["travelled", "caught", "tripped", "ended"],
 correctIndex: 0
},
{
 question: "Mrs Ashton: Look are you ....... the train's going to London. It's taking a long time to leave.",
 options: ["sure", "clear", "evident", "obvious"],
 correctIndex: 0
},
{
 question: "There are several holidays in Brazil. One is Independence Day and ....... are Children's Day and Teacher's Day.",
 options: ["some others", "another", "the others", "the other"],
 correctIndex: 0
},
{
 question: "My neighbor has four kids. One of them is a boy and ....... are girls.",
 options: ["the others", "others", "another", "the other"],
 correctIndex: 0
},
{
 question: "Lucas is very good ....... drawing.",
 options: ["at", "on", "to", "with"],
 correctIndex: 0
},
{
 question: "I didn't know you were interested ....... science.",
 options: ["in", "for", "on", "to"],
 correctIndex: 0
},
{
 question: "We were very pleased ....... the service.",
 options: ["with", "on", "at", "from"],
 correctIndex: 0
},
{
 question: "If there is ....... you need you can call me, okay?",
 options: ["anything", "any", "nothing", "everything"],
 correctIndex: 0
},
{
 question: "My friend's decisions have ....... to do with me.",
 options: ["nothing", "anything", "someone", "any"],
 correctIndex: 0
},
{
 question: "We took the kids swimming all morning. Now ....... completely exhausted.",
 options: ["they're", "there", "their", "them"],
 correctIndex: 0
},
{
 question: "The ....... of my school was overwhelmingly strict.",
 options: ["principal", "principle", "principality", "prince"],
 correctIndex: 0
},
{
 question: "Those were the boxes ....... were sent to you last month, but never made it here.",
 options: ["which", "who", "whose", "whom"],
 correctIndex: 0
},
{
 question: "I have friends ....... love me so much, they made a surprise birthday party for me last night.",
 options: ["who", "whom", "which", "whose"],
 correctIndex: 0
},
{
 question: "How ....... money do you have?",
 options: ["much", "more", "many", "often"],
 correctIndex: 0
},
{
 question: "There are ....... people trying to go to the U2 concert this weekend.",
 options: ["many", "much", "a little", "any"],
 correctIndex: 0
},
{
 question: "I don't know how many times I have told my daughter to look at both sides before running ....... the street.",
 options: ["across", "alongside", "beside", "around"],
 correctIndex: 0
},
{
 question: "The cat is sitting ....... the wall.",
 options: ["on", "over", "above", "underneath"],
 correctIndex: 0
},
{
 question: "Had I been able to go to school as a child, I would have ....... how to read.",
 options: ["learned", "learn", "learning", "had learn"],
 correctIndex: 0
},
{
 question: "If it wasn't for that medicine you gave me, I would have ....... a lot worse.",
 options: ["gotten", "gone", "get", "gutted"],
 correctIndex: 0
},
{
 question: "I have some material from which I could knock ....... an article if you want me to.",
 options: ["up", "down", "together", "off"],
 correctIndex: 0
},
{
 question: "The factory churns ....... thousands of pairs of low cost shoes every day.",
 options: ["out", "off", "in", "into"],
 correctIndex: 0
},
{
 question: "The clothing manufacturer recently branched ....... into sport's wear.",
 options: ["out", "in", "off", "back"],
 correctIndex: 0
},
{
 question: "Distributors will probably bump ....... the price of the software when the next version is released.",
 options: ["up", "on", "off", "out"],
 correctIndex: 0
},
{
 question: "After some time, Vince ....... to know the university campus very well.",
 options: ["got", "understood", "found", "learned"],
 correctIndex: 0
},
{
 question: "When I drove into Seattle yesterday afternoon, the ....... was still cloudy and wet.",
 options: ["weather", "climate", "climate condition", "environment"],
 correctIndex: 0
},
{
 question: "We always ....... at the hotel by the marina when we go to San Francisco.",
 options: ["stay", "live", "inhabit", "reside"],
 correctIndex: 0
},
{
 question: "After the attack, the woman ....... quickly.",
 options: ["calmed down", "calmed down her anger", "calmed her anger", "calmed her feelings"],
 correctIndex: 0
},
{
 question: "People ....... this place the 'Forbidden Forest.'",
 options: ["call", "entitle", "name", "describe"],
 correctIndex: 0
},
{
 question: "My ....... brother is really nice to me.",
 options: ["eldest", "more old", "maturest", "most older"],
 correctIndex: 0
},
{
 question: "I know it sounds unreasonable but it ....... that she will never come back.",
 options: ["is possible", "could be possible", "could be possibly", "is possibly"],
 correctIndex: 0
},
{
 question: "I keep my favorite ring ....... the dresser.",
 options: ["under", "more behind", "lower than", "under the back of"],
 correctIndex: 0
},
{
 question: "The boys gathered a bundle of ........",
 options: ["sticks", "people", "beads", "houses"],
 correctIndex: 0
},
{
 question: "The flock of ....... stayed together.",
 options: ["sheep", "blankets", "ships", "cows"],
 correctIndex: 0
},
{
 question: "His teacher begged him to ....... more of an effort in class.",
 options: ["make", "do", "made", "did"],
 correctIndex: 0
},
{
 question: "No matter how hard he pushed him, he couldn't ....... his son do the job properly.",
 options: ["make", "do", "made", "did"],
 correctIndex: 0
},
{
 question: "He was very angry ....... his mother because she grounded him yesterday.",
 options: ["with", "to", "about", "on"],
 correctIndex: 0
},
{
 question: "Karen is very jealous ....... Kim and it's very obvious to others.",
 options: ["of", "about", "at", "with"],
 correctIndex: 0
},
{
 question: "Even though the situation was not ideal, they decided to ....... a go of things.",
 options: ["make", "do", "made", "did"],
 correctIndex: 0
},
{
 question: "She finally begged him to ....... a move in the very long and tiresome chess game.",
 options: ["make", "do", "made", "did"],
 correctIndex: 0
},
{
 question: "She suddenly realized that she only had a few days left on her vacation so she decided to ....... the most of it.",
 options: ["make", "do", "made", "did"],
 correctIndex: 0
},
{
 question: "He was confused and couldn't ....... up his mind about what to do next.",
 options: ["make", "do", "made", "did"],
 correctIndex: 0
},
{
 question: "The teacher had to ....... up a new syllabus because her old was outdated.",
 options: ["make", "do", "made", "did"],
 correctIndex: 0
},
{
 question: "....... is measured by the Richter Scale?",
 options: ["What", "Which", "Where", "Who"],
 correctIndex: 0
},
{
 question: "....... does NATO stand for?",
 options: ["What", "Which", "Where", "who"],
 correctIndex: 0
},
{
 question: "....... year did Prince Charles of England marry?",
 options: ["What", "Which", "Where", "Who"],
 correctIndex: 0
},
{
 question: "....... did William Jefferson Clinton become President of the United States?",
 options: ["When", "What", "Where", "Who"],
 correctIndex: 0
},
{
 question: "....... Caribbean island does Sir Vivian Richards come from?",
 options: ["Which", "What", "Where", "Who"],
 correctIndex: 0
},
{
 question: "The phone rang ....... I was eating brunch.",
 options: ["while", "during", "for"],
 correctIndex: 0
},
{
 question: "....... I was in Geneva I made lots of friends.",
 options: ["While", "During", "For"],
 correctIndex: 0
},
{
 question: "A salesman knocked on our door ....... we were watching a movie.",
 options: ["while", "during", "for"],
 correctIndex: 0
},
{
 question: "The flight ....... delayed because of bad weather.",
 options: ["was", "were", "did", "had"],
 correctIndex: 0
},
{
 question: "....... it raining when you left your office this afternoon?",
 options: ["Was", "Were", "Did", "Had"],
 correctIndex: 0
},
{
 question: "The fire ....... caused by an electrical problem.",
 options: ["was", "were", "did", "had"],
 correctIndex: 0
},
{
 question: "In Europe Autumn begins ....... March.",
 options: ["in", "on", "at", "since"],
 correctIndex: 0
},
{
 question: "The trouble ....... my mother in law is that she doesn't listen to anybody.",
 options: ["with", "about", "for", "between"],
 correctIndex: 0
},
{
 question: "I want to buy ....... laptop computer next week.",
 options: ["a", "an", "the"],
 correctIndex: 0
},
{
 question: "I like to watch tennis on the television. It is ....... very good game.",
 options: ["a", "an", "the"],
 correctIndex: 0
},
{
 question: "Do you want to watch ....... movie with me tonight?",
 options: ["a", "an", "the"],
 correctIndex: 0
},
{
 question: "How much will it cost to go on ....... holiday to Bali?",
 options: ["a", "an", "the"],
 correctIndex: 0
},
{
 question: "Can you please help me pick out ....... birthday present for my father?",
 options: ["a", "an", "the"],
 correctIndex: 0
},
{
 question: "We need ....... kilo of apples.",
 options: ["a", "some", "any"],
 correctIndex: 0
},
{
 question: "There's ....... newspaper on the table.",
 options: ["a", "some", "any"],
 correctIndex: 0
},
{
 question: "How about ....... cup of coffee?",
 options: ["a", "some", "any"],
 correctIndex: 0
},
{
 question: "....... is the girl in the blue dress?",
 options: ["Who", "Whom", "What", "Which"],
 correctIndex: 0
},
{
 question: "....... is the name of the team in red?",
 options: ["What", "Which", "Who", "Whom"],
 correctIndex: 0
},
{
 question: "....... likes to play pinball at the arcade?",
 options: ["Who", "Whom", "What", "Which"],
 correctIndex: 0
},
{
 question: "....... of the cars is parked in the driveway?",
 options: ["Which", "Who's", "What", "Whom"],
 correctIndex: 0
},
{
 question: "Mia left ....... notebook on the bus.",
 options: ["her", "yours", "his"],
 correctIndex: 0
},
{
 question: "Will strummed ....... guitar and invited everyone to sing.",
 options: ["his", "its", "her"],
 correctIndex: 0
},
{
 question: "Is ....... seat belt always fastened?",
 options: ["your", "mine", "its"],
 correctIndex: 0
},
{
 question: "I'm sorry, James isn't ....... at the moment. Can I take a message?",
 options: ["in", "away", "up", "off"],
 correctIndex: 0
},
{
 question: "I don't know how you ....... with such noisy brothers. It would drive me crazy.",
 options: ["put up", "put away", "clear up", "bring up"],
 correctIndex: 0
},
{
 question: "Our teacher told us to ....... our work quietly.",
 options: ["get on with", "put up with", "run out of", "come up with"],
 correctIndex: 0
},
{
 question: "Agatha Christie lived with ....... family in England.",
 options: ["her", "his", "their"],
 correctIndex: 0
},
{
 question: "Agatha Chrisitie ....... her husband in 1930.",
 options: ["divorced", "annulled", "cancelled"],
 correctIndex: 0
},
{
 question: "The police found her ....... flat but there was no sign of Agatha Christie.",
 options: ["empty", "emptiness", "empty space"],
 correctIndex: 0
},
{
 question: "We will visit Australia ....... New Zealand during our next vacation.",
 options: ["and", "but", "so"],
 correctIndex: 0
},
{
 question: "I am going to do my homework ....... take a shower when I get home from school.",
 options: ["and", "but", "so"],
 correctIndex: 0
},
{
 question: "My father wanted to watch a soccer match on television ....... my mother was already watching another program.",
 options: ["but", "so", "or"],
 correctIndex: 0
},
{
 question: "My brother wanted to buy a novel ....... I went to the book store after I finished work.",
 options: ["so", "or", "but"],
 correctIndex: 0
},
{
 question: "I wanted to visit my grandmother last week ....... she had an accident and had to be taken to hospital.",
 options: ["but", "or", "so"],
 correctIndex: 0
},
{
 question: "I usually take a ....... to work so I can clean my teeth thoroughly after I have eaten my lunch.",
 options: ["toothbrush", "toothpick", "toothpaste"],
 correctIndex: 0
},
{
 question: "It is very dangerous for small children to play with ........",
 options: ["toothbrushes", "toothpicks", "toothaches"],
 correctIndex: 0
},
{
 question: "Tomorrow I must go the pharmacy and buy some more ........",
 options: ["toothpaste", "toothpick", "toothbrush"],
 correctIndex: 0
},
{
 question: "Ask her to help you with your calculations because she's ....... hot at mathematics.",
 options: ["red", "blue", "white", "black"],
 correctIndex: 0
},
{
 question: "The car is almost ready to collect from the garage but there are just a couple of spare ....... missing.",
 options: ["parts", "pieces", "extras", "accessories"],
 correctIndex: 0
},
{
 question: "If you had bought a house about thirty years ago you would certainly find that it had considerably ....... in value.",
 options: ["increased", "heightened", "developed", "doubled"],
 correctIndex: 0
},
{
 question: "Sociologists maintain that some of the films on show today have created a generation of very ....... children.",
 options: ["frightened", "afraid", "fearful", "frightening"],
 correctIndex: 0
},
{
 question: "There are no problems for me because I find those questions very ........",
 options: ["easy", "facile", "soft", "straight"],
 correctIndex: 0
},
{
 question: "They ....... him for his brave actions.",
 options: ["praised", "worshipped", "flattered", "congratulated"],
 correctIndex: 0
},
{
 question: "She never spoke about herself and was always very ....... about the good things she had done.",
 options: ["modest", "meek", "humble", "simple"],
 correctIndex: 0
},
{
 question: "They worked hard all day without a ........",
 options: ["break", "suspension", "pause", "breach"],
 correctIndex: 0
},
{
 question: "As we don't have much money at the moment, we've decided to ....... without certain luxuries.",
 options: ["do", "get", "make", "take"],
 correctIndex: 0
},
{
 question: "He told them that they would find it in one of his 3 vine ....... but he didn't tell them which one it was.",
 options: ["yards", "feet", "spaces", "areas"],
 correctIndex: 0
},
{
 question: "The ....... thing of all difficulties in a language is vocabulary.",
 options: ["worst", "bad", "worse"],
 correctIndex: 0
},
{
 question: "I ....... a lot of presents for my birthday.",
 options: ["got", "became", "become"],
 correctIndex: 0
},
{
 question: "Who said growing up was .......?",
 options: ["fun", "joke", "humour", "laughter"],
 correctIndex: 0
},
{
 question: "Have you heard the latest? John and Mary are ....... married.",
 options: ["getting", "becoming", "growing", "going"],
 correctIndex: 0
},
{
 question: "There's a new software program on the market that's supposed to protect your computer from any ........",
 options: ["virus", "disease", "complaint", "illness"],
 correctIndex: 0
},
{
 question: "I've ....... you not to do that many times before.",
 options: ["told", "saying", "says", "said"],
 correctIndex: 0
},
{
 question: "After a number of years as a monk he decided to leave because he felt very ....... in.",
 options: ["shut", "shutting", "closes", "closed"],
 correctIndex: 0
},
{
 question: "After the terrible experiences that they had been through, the couple ....... themselves away from the community.",
 options: ["shut", "shuts", "closes", "closing"],
 correctIndex: 0
},
{
 question: "The new musical that has had such bad reviews will ....... at the end of this week.",
 options: ["close", "closed", "shut", "shuts"],
 correctIndex: 0
},
{
 question: "I must admit that whenever I've eaten at that restaurant, I've always come away feeling ....... satisfied.",
 options: ["completely", "usually", "quickly", "full"],
 correctIndex: 0
},
{
 question: "There's something about the ....... of that particular dish that makes it memorable.",
 options: ["flavour", "flavoured", "flavouring", "flavours"],
 correctIndex: 0
},
{
 question: "If you're really interested, I'm sure the chef will tell you the ....... of that dish.",
 options: ["ingredients", "contents", "make-up", "composition"],
 correctIndex: 0
},
{
 question: "We simply didn't know what to choose for our main dish so in the end we made a ....... choice.",
 options: ["random", "casual", "formal", "straight"],
 correctIndex: 0
},
{
 question: "Many people go to the theatre not to see a play where the plot is complicated but to listen to the brilliant ....... between the actors.",
 options: ["dialogue", "chat", "conversation", "comments"],
 correctIndex: 0
},
{
 question: "However well written the play is, it will never succeed without outstanding ........",
 options: ["performers", "movers", "workers", "creators"],
 correctIndex: 0
},
{
 question: "Look before you ........",
 options: ["leap", "strike", "rush", "go"],
 correctIndex: 0
},
{
 question: "Let ....... dogs lie.",
 options: ["sleeping", "snoozing", "dreaming", "barking"],
 correctIndex: 0
},
{
 question: "Never look a gift horse in the ........",
 options: ["mouth", "eye", "nose", "teeth"],
 correctIndex: 0
},
{
 question: "Everything is coming up ........",
 options: ["roses", "daisies", "tulips", "lilies"],
 correctIndex: 0
},
{
 question: "He led her up the garden ........",
 options: ["path", "lane", "street", "road"],
 correctIndex: 0
},
{
 question: "Don't trust him, he's a bit of a snake in the ........",
 options: ["grass", "flowers", "plants", "weeds"],
 correctIndex: 0
},
{
 question: "We waited one hour for the main dish to ....... and then it was the wrong order.",
 options: ["arrive", "reach", "deliver", "send"],
 correctIndex: 0
},
{
 question: "The problem about writing on food is that however hard you try, you will say what you like and end up being ........",
 options: ["subjective", "objective", "reflective", "directive"],
 correctIndex: 0
},
{
 question: "You can never tell exactly what she is thinking because she very often ....... hot and cold over some topics.",
 options: ["blows", "swings", "flies", "changes"],
 correctIndex: 0
},
{
 question: "As soon as the president was taken ill, the deputy had to take charge and is currently in the hot ....... now.",
 options: ["seat", "chair", "place", "position"],
 correctIndex: 0
},
{
 question: "I ordered a coffee from the waiter but by the time it had reached me it was ....... cold.",
 options: ["stone", "rock", "block", "tile"],
 correctIndex: 0
},
{
 question: "He's always very uneasy like a cat on hot ....... whenever he is waiting to hear the results of the examinations.",
 options: ["bricks", "floors", "paths", "roads"],
 correctIndex: 0
},
{
 question: "I really can't tell what's ........",
 options: ["going on", "taking off", "going by", "taking in"],
 correctIndex: 0
},
{
 question: "It looks from what I can see as if there's been some kind of ........",
 options: ["collision", "event", "situation", "position"],
 correctIndex: 0
},
{
 question: "Oh dear I've just discovered that the little blue one ........",
 options: ["belongs to me", "is belonging to me", "belonged to me", "has belonged to me"],
 correctIndex: 0
},
{
 question: "Do you know the difference .......?",
 options: ["between will and shall", "of will and shall", "from will and shall", "by will and shall"],
 correctIndex: 0
},
{
 question: "The main difference is that 'I will' ........",
 options: ["means 'I want to'", "signifies 'I want to'", "shows 'I want to'", "says 'I want to'"],
 correctIndex: 0
},
{
 question: "I want you to imagine that a man is walking ........",
 options: ["in the country", "on the countryside", "by the countryside", "over the country"],
 correctIndex: 0
},
{
 question: "A long, long time ago there were two frogs who thought it would be a good idea to ........",
 options: ["go on an outing", "go outing", "go out", "out go"],
 correctIndex: 0
},
{
 question: "They ran into a farm house and jumped right into a barrel of milk where they ........",
 options: ["hopped and hopped in order not to sink", "hopping and hopping in order not to sink", "hoped and hoped in order not to sink", "hoping and hoping in order not to sink"],
 correctIndex: 0
},
{
 question: "Jane: I'm sorry you're not telling the truth, you were the last person to ........",
 options: ["come home", "come to home", "come at home", "come to house"],
 correctIndex: 0
},
{
 question: "Mike: Honestly, I did hear that kind of noise, I ........",
 options: ["swear I did", "assure I did", "adjure I did", "advise I did"],
 correctIndex: 0
},
{
 question: "Jane: It's some kind of note from Joe next door — no I ........",
 options: ["can't make it out", "can't make it off", "can't make it in", "can't make it on"],
 correctIndex: 0
},
{
 question: "User: I should have thought is was pretty ........",
 options: ["obvious", "absolute", "noticeable", "accurate"],
 correctIndex: 0
},
{
 question: "He is such a coward because whenever it comes to speaking his mind he always ....... down instead.",
 options: ["backs", "heads", "hands", "noses"],
 correctIndex: 0
},
{
 question: "Hey, get up and do your homework you lazy ........",
 options: ["bones", "bottoms", "hips", "back"],
 correctIndex: 0
},
{
 question: "Their plan was to eat this ....... during the winter.",
 options: ["provision", "providing", "provider", "provided"],
 correctIndex: 0
},
{
 question: "He saw the ants and ....... them with all the strength he could find to let him have a little food.",
 options: ["begged", "bade", "bid", "bartered"],
 correctIndex: 0
},
{
 question: "A man had two dogs: a hound ....... to help him with his sports and another to guard the house.",
 options: ["trained", "tutored", "brought up", "educated"],
 correctIndex: 0
},
{
 question: "All the house dog did was simply to feed himself on the results of the ....... that the hound dog undertook.",
 options: ["exertions", "extremes", "exercises", "excesses"],
 correctIndex: 0
},
{
 question: "The moral of this fable is: you mustn't ....... children for the mistakes of their parents.",
 options: ["reproach", "reprieve", "repeal", "reject"],
 correctIndex: 0
},
{
 question: "He also made ....... of the slow pace at which the tortoise travelled.",
 options: ["fun", "joke", "laugh", "funny"],
 correctIndex: 0
},
{
 question: "The moral of this fable is: slow but ....... always wins the race in the end.",
 options: ["sure", "evident", "certain", "definite"],
 correctIndex: 0
},
{
 question: "The idea is to keep the readers in a permanent state of ....... so that they never know what's going to happen next.",
 options: ["suspense", "suspension", "suspending", "suspenders"],
 correctIndex: 0
},
{
 question: "Scientists have been ....... through data from an orbiting satellite.",
 options: ["combing", "scratching", "brushing", "scaling"],
 correctIndex: 0
},
{
 question: "I had of course turned my hand ....... many jobs during the vacation periods but waiting was certainly the most difficult.",
 options: ["to", "into", "down", "out"],
 correctIndex: 0
},
{
 question: "The other problem had been to turn ....... an old tramp who had lived in a room upstairs for two years without the knowledge of the old lady who was the original owner.",
 options: ["out", "aside from", "to", "into"],
 correctIndex: 0
},
{
 question: "In fact they were actually turning ....... people.",
 options: ["away", "into", "down", "up"],
 correctIndex: 0
},
{
 question: "After a long wait like that very often they would simply turn ....... everything and simply ask for a cup of tea.",
 options: ["down", "in", "up", "over"],
 correctIndex: 0
},
{
 question: "Unfortunately Doris caught me at it. 'Don't you turn your nose ....... at the old dears', she rebuked me.",
 options: ["up", "around", "aside", "against"],
 correctIndex: 0
},
{
 question: "You see I've just turned all the lights ....... ready for the night.",
 options: ["out", "in", "on", "up"],
 correctIndex: 0
},
{
 question: "We won't ....... that now but I don't think we can avoid the subject much longer.",
 options: ["discuss", "enter", "introduce", "interrupt"],
 correctIndex: 0
},
{
 question: "Don't wait for me because I can't come yet so you ....... and I'll join you later.",
 options: ["go before me", "go in front of me", "go forwards me", "go by me"],
 correctIndex: 0
},
{
 question: "I'm sorry I interrupted you, please ....... from where I so rudely stopped you.",
 options: ["continue", "stop", "speak", "finish"],
 correctIndex: 0
},
{
 question: "The contract stated that he would never eat any meat ........",
 options: ["whatsoever", "whosoever", "howsoever", "whichsoever"],
 correctIndex: 0
},
{
 question: "Even in his own house he was not safe because cameras would ....... on him.",
 options: ["spy", "speak", "spook", "spoof"],
 correctIndex: 0
},
{
 question: "He admitted eating a meat pie every day. As the news headlines announced: '....... vegetarian eats his own words'.",
 options: ["Bogus", "Bonus", "Bulbous", "Bilious"],
 correctIndex: 0
},
{
 question: "Don't worry your bad luck will soon end. Remember every ....... has its day.",
 options: ["dog", "cat", "mouse", "rat"],
 correctIndex: 0
},
{
 question: "I am convinced you are ....... right to take that action and should ignore any opposition.",
 options: ["absolutely", "very", "simply", "all"],
 correctIndex: 0
},
{
 question: "The bank manager smiled and announced that his application for a loan had been ........",
 options: ["approved", "improved", "disproved", "reproved"],
 correctIndex: 0
},
{
 question: "I'd honestly never heard such an outstanding performance of that symphony — it simply ....... my mind.",
 options: ["blew", "tore", "split", "broke"],
 correctIndex: 0
},
{
 question: "He has a one ....... mind as all he ever talks about is money, money, money.",
 options: ["track", "road", "path", "rail"],
 correctIndex: 0
},
{
 question: "Well, I don't think that's a very good reason and you must ....... up with a better explanation.",
 options: ["come", "take", "do", "put"],
 correctIndex: 0
},
{
 question: "Well, I won't ....... up any more excuses. I wasn't here yesterday because I went to a football match.",
 options: ["make", "move", "do", "look"],
 correctIndex: 0
},
{
 question: "As far as I'm concerned to be away from traffic, phones and radios on holiday is perfect bliss because to me silence is ........",
 options: ["golden", "silver", "copper", "steel"],
 correctIndex: 0
},
{
 question: "The hall was full of people anxious to hear what the speaker was going to say and in the few seconds before he started it was so quiet you could hear a ....... drop.",
 options: ["pin", "needle", "nail", "screw"],
 correctIndex: 0
},
{
 question: "It really was a large and spacious garden but it cried out ....... something colourful to be planted.",
 options: ["for", "to", "by", "on"],
 correctIndex: 0
},
{
 question: "The trouble is that he's cried ....... so often that now he's in real trouble, nobody believes him.",
 options: ["wolf", "tiger", "cat", "dog"],
 correctIndex: 0
},
{
 question: "We will always remember the way you stood up and ....... at some of the speeches in the play.",
 options: ["clapped", "clopped", "clipped", "clammed"],
 correctIndex: 0
},
{
 question: "The leading lady is also absent from our stage and you can probably hear her ....... her heart out as I speak.",
 options: ["sobbing", "soaking", "spitting", "calling"],
 correctIndex: 0
},
{
 question: "For the next hour it will be possible to buy just one ....... of bananas and get one more free.",
 options: ["bunch", "branch", "hand", "group"],
 correctIndex: 0
},
{
 question: "There are now only ten minutes remaining for you to make your ....... and go to the checkout.",
 options: ["purchases", "buying", "sales", "selling"],
 correctIndex: 0
},
{
 question: "The train at platform 14 cannot leave because there is a power ....... on that particular line...",
 options: ["failure", "miss", "failing", "missing"],
 correctIndex: 0
},
{
 question: "Severe storms last night together with heavy rainfall means that some of the lines of the station are now ........",
 options: ["waterlogged", "waterproof", "water soaked", "waterfall"],
 correctIndex: 0
},
{
 question: "We regret to announce that the 10.45 for London is now out of service because the driver is having a nervous ........",
 options: ["breakdown", "low down", "breakout", "low break"],
 correctIndex: 0
},
{
 question: "That policeman is getting out his ....... and walking near the statue I'm sitting on.",
 options: ["notebook", "exercise book", "storybook", "copybook"],
 correctIndex: 0
},
{
 question: "Neither of them was at all ....... by this sort of behaviour as they just grew fonder of each other.",
 options: ["deterred", "defeated", "disturbed", "denied"],
 correctIndex: 0
},
{
 question: "Mind you I was surprised because you see I find it quite ....... why on earth she didn't marry me.",
 options: ["unbelievable", "unbelieving", "disbelief", "disbelieving"],
 correctIndex: 0
},
{
 question: "You may be interested to know that we are holding a ....... in the centre of our town this weekend.",
 options: ["rally", "really", "royally", "routine"],
 correctIndex: 0
},
{
 question: "In ....... of the terrible weather you have come along tonight, ladies and gentlemen, and I should like to thank all four of you for coming.",
 options: ["spite", "despite", "view", "spiteful"],
 correctIndex: 0
},
{
 question: "The film was the first to show conditions in which poor people lived and as such was to ....... future directors.",
 options: ["influence", "hold", "infect", "show"],
 correctIndex: 0
},
{
 question: "In the making of the film the direction is quite ....... from the financing of the project.",
 options: ["separate", "separation", "separately", "separates"],
 correctIndex: 0
},
{
 question: "He'd carefully avoided having any alcohol until he was twenty-five and then he had a small drop of the ....... stuff.",
 options: ["hard", "difficult", "solid", "ground"],
 correctIndex: 0
},
{
 question: "It's quite clear she's studied the subject very thoroughly and when she lectured, you could tell she ....... her stuff.",
 options: ["knew", "got", "showed", "took"],
 correctIndex: 0
},
{
 question: "I'm afraid it was the ....... old story with her all over again because she's started arriving late at work again.",
 options: ["same", "like", "similar", "parallel"],
 correctIndex: 0
},
{
 question: "To ....... a long story short, I'll come straight to the point and tell you exactly what happened.",
 options: ["cut", "reduce", "snip", "curtail"],
 correctIndex: 0
},
{
 question: "He started off from a very simple background and then worked his way up to be President of the bank — a genuine ....... story.",
 options: ["success", "famous", "glamour", "fame"],
 correctIndex: 0
},
{
 question: "Now that he's become office manager you can't even talk to him — he's so high and ........",
 options: ["mighty", "strong", "powerful", "severe"],
 correctIndex: 0
},
{
 question: "The subject ....... of the film concerned the American Civil War in the 1860's.",
 options: ["matter", "topic", "theme", "interest"],
 correctIndex: 0
},
{
 question: "The following evening we were back again watching television but after the cinema it's never the ....... again.",
 options: ["same", "identical", "similar", "like"],
 correctIndex: 0
},
{
 question: "Because when the ....... of the piece arrived in the shape of a burglar to steal something, he didn't find anything valuable.",
 options: ["villain", "peasant", "evil", "devil"],
 correctIndex: 0
},
{
 question: "Eventually the police arrived and were pleased to see Charlie was still all right and in ....... piece.",
 options: ["one", "fine", "good", "solid"],
 correctIndex: 0
},
{
 question: "I think you're wise to find out first before you agree and believe it's a good idea to test the ....... first.",
 options: ["waters", "springs", "rivers", "lakes"],
 correctIndex: 0
},
{
 question: "In the story of Dr Jekyll and Mr Hyde we see the hero mix something up in a test ....... and then drink it.",
 options: ["tube", "pipe", "glass", "cup"],
 correctIndex: 0
},
{
 question: "It's difficult to say exactly how many people are involved but I would say ....... 50.",
 options: ["around", "across", "through", "into"],
 correctIndex: 0
},
{
 question: "Please don't lose ....... because I'm sure you'll succeed in the end.",
 options: ["heart", "body", "strength", "feeling"],
 correctIndex: 0
},
{
 question: "First he started shouting and then he began to throw things round the room and it was clear he had just lost his ........",
 options: ["rag", "cloth", "cover", "sheet"],
 correctIndex: 0
},
{
 question: "I would be most interested to know why the committee has turned ....... my proposal.",
 options: ["down", "off", "over", "out"],
 correctIndex: 0
},
{
 question: "Be careful, there's a large ....... between the platform and the train.",
 options: ["gap", "fall", "area", "line"],
 correctIndex: 0
},
{
 question: "Stop, that man's just gone ....... with my wallet!",
 options: ["off", "out", "on", "by"],
 correctIndex: 0
},
{
 question: "Thank you very much for your letter. As always it's ....... to read.",
 options: ["fun", "amusement", "entertainment", "funnily"],
 correctIndex: 0
},
{
 question: "Don't worry they ....... eventually succeed, I assure you.",
 options: ["will", "might", "want"],
 correctIndex: 0
},
{
 question: "....... you really help me? If so, I should be most grateful.",
 options: ["Could", "Must", "May"],
 correctIndex: 0
},
{
 question: "With a life time of ....... in doing all the walks in the town.",
 options: ["experience", "knowing", "habit", "custom"],
 correctIndex: 0
},
{
 question: "The first thing was to be ....... since you started at a time when most people were asleep.",
 options: ["punctual", "pointed", "punctilious", "pointing"],
 correctIndex: 0
},
{
 question: "These letters should be put to one side and old Charlie, the handwriting ......., would look through them later.",
 options: ["expert", "exponent", "exhibitor", "executive"],
 correctIndex: 0
},
{
 question: "He left me alone for an hour to follow his method and asked me to call him if I ....... any difficulties.",
 options: ["encountered", "engendered", "entered", "enquired"],
 correctIndex: 0
},
{
 question: "I then came to number 56 that Ted had ....... me about. They had a ferocious dog.",
 options: ["warned", "threatened", "indicated", "shown"],
 correctIndex: 0
},
{
 question: "and thought I was depriving a young child of his Christmas present from some loving ........",
 options: ["relative", "related", "reality", "relatively"],
 correctIndex: 0
},
{
 question: "expecting to hear a happy ....... of surprise from young Richard. As I hurried away",
 options: ["yelp", "sound", "noise", "din"],
 correctIndex: 0
},
{
 question: "What time do you start work or more exactly when do you clock .......?",
 options: ["on", "about", "with", "by"],
 correctIndex: 0
},
{
 question: "She's not really interested in her job and just waits for the end of the day to come. She's just a clock ........",
 options: ["watcher", "seer", "looker", "gazer"],
 correctIndex: 0
},
{
 question: "I strongly recommend you make a checklist of points to consider ....... deciding which method of payment to accept.",
 options: ["when", "what", "who", "where"],
 correctIndex: 0
},
{
 question: "An effective customer support system should be ....... as the nerve centre of all company communciation.",
 options: ["regarded", "imagined", "thought", "dreamt"],
 correctIndex: 0
},
{
 question: "A company's success will largely depend ....... how far ahead into the future it can forecast.",
 options: ["on", "of", "at", "in"],
 correctIndex: 0
},
{
 question: "These people were not at all fuddy duddy (uninteresting) or indeed hoity toity (supercilious) and their main interest in life was to ....... that all animals were well treated.",
 options: ["ensure", "assure", "convince", "convict"],
 correctIndex: 0
},
{
 question: "Her parents however were not at all pleased ....... where she had decided to work.",
 options: ["about", "for", "concerning", "around"],
 correctIndex: 0
},
{
 question: "Cathy didn't believe any of this and was delighted to be working for Geoffrey Winton if for no other ....... than that living at home was very humdrum (boring).",
 options: ["reason", "cause", "fact", "decision"],
 correctIndex: 0
},
{
 question: "As far as her father was concerned this was ....... double trouble (two problems) — first working for Fortune and now getting involved in a demonstration.",
 options: ["simply", "quite", "entirely", "quietly"],
 correctIndex: 0
},
{
 question: "She just wished that her father could ....... and be even steven (fair) about her side of the argument.",
 options: ["try", "trying", "tried", "tries"],
 correctIndex: 0
},
{
 question: "A police officer on horseback was ....... the crowds and she found herself being gently moved by the horse.",
 options: ["controlling", "maintaining", "conducting", "driving"],
 correctIndex: 0
},
{
 question: "But that was in the past. Things have changed because something happened to him exactly two years ........",
 options: ["ago", "gone", "passed", "over"],
 correctIndex: 0
},
{
 question: "In London, which ....... on the river Thames, people make a lot of noise all the time.",
 options: ["stands", "holds", "begins", "sits"],
 correctIndex: 0
},
{
 question: "In a word she is the complete ....... in temperament of Andrew. Here comes another cliche: opposites attract.",
 options: ["opposite", "opponent", "opposed", "opposition"],
 correctIndex: 0
},
{
 question: "Fortunately he made it to the pub before the storm ........",
 options: ["broke", "fell", "dropped", "collapsed"],
 correctIndex: 0
},
{
 question: "Most people in the pub think to themselves: 'What a pretty girl' Andrew sees her as someone who is ....... and needs help.",
 options: ["drenched", "drowned", "draped", "downed"],
 correctIndex: 0
},
{
 question: "But Sally changed the subject. 'This drink tastes delicious. How did you make it?' — 'I put a drop of ginger ale and a piece of lemon in the alcohol and then ....... thoroughly.'",
 options: ["stir", "beat", "mash", "fork"],
 correctIndex: 0
},
{
 question: "Suddenly Sally looked at her watch: 'I must ........ My train leaves in ten minutes.'",
 options: ["fly", "flow", "flee", "flea"],
 correctIndex: 0
},
{
 question: "What was ....... to him? He saw Sally standing on the platform getting into the train and the train leaving the station.",
 options: ["happening", "occurring", "falling", "coming"],
 correctIndex: 0
},
{
 question: "during the wedding ....... in the village church just over two years ago.",
 options: ["ceremony", "performance", "occasion", "event"],
 correctIndex: 0
},
{
 question: "and I stopped worrying from that moment ........",
 options: ["on", "to", "for", "by"],
 correctIndex: 0
},
{
 question: "Before you telephoned, I ....... watching television.",
 options: ["was", "will be", "am", "have"],
 correctIndex: 0
},
{
 question: "She was annoyed that she ....... spoken to like that.",
 options: ["had been", "has been", "was been", "will have been"],
 correctIndex: 0
},
{
 question: "Long ....... the King!",
 options: ["live", "lives", "living", "lived"],
 correctIndex: 0
},
{
 question: "She said she'd help him if she ........",
 options: ["could", "can", "can't", "have been able"],
 correctIndex: 0
},
{
 question: "He refused to go until he ....... seen all the paintings.",
 options: ["had", "was", "is", "has"],
 correctIndex: 0
},
{
 question: "If you mention someone's mistakes in public, it can only be regarded as very ........",
 options: ["tactless", "casual", "careless", "pointed"],
 correctIndex: 0
},
{
 question: "I sometimes find that the ....... made by the advertisers are more interesting than the actual television programmes themselves.",
 options: ["commercials", "comments", "commerce", "commercially"],
 correctIndex: 0
},
{
 question: "Teacher: What ....... you say that?",
 options: ["makes", "does", "tries", "goes"],
 correctIndex: 0
},
{
 question: "Teacher: The thing to ....... is that in usually means inside a place or a position.",
 options: ["remember", "repeat", "remind", "return"],
 correctIndex: 0
},
{
 question: "Student: Oh, no two is ....... thank you very much!",
 options: ["enough", "equal", "even", "indeed"],
 correctIndex: 0
},
{
 question: "Student: I think the past simple is for a ....... time in the past and the present perfect is when you don't know when it was.",
 options: ["definite", "clear", "obvious", "absolute"],
 correctIndex: 0
},
{
 question: "Teacher: Well if you started living in Paris in 1999 and you are still there, you say; I have been living there ....... 1999.",
 options: ["since", "for", "till", "until"],
 correctIndex: 0
},
{
 question: "They took no notice of the accident and simply walked ........",
 options: ["by", "in", "across", "through"],
 correctIndex: 0
},
{
 question: "You see he'd known her once as a small child when he was knee ....... to a grasshopper and now they met as adults.",
 options: ["high", "tall", "long", "broad"],
 correctIndex: 0
},
{
 question: "After they were married, Charlie had to work very hard and he was always knee ....... in decorating and painting the house.",
 options: ["deep", "level", "steep", "long"],
 correctIndex: 0
},
{
 question: "I shouldn't worry too much about him. He looks very frightening but underneath he's really a paper ........",
 options: ["tiger", "lion", "jaguar", "cat"],
 correctIndex: 0
},
{
 question: "You really shouldn't ....... everything you read in the papers.",
 options: ["believe", "credit", "think", "ponder"],
 correctIndex: 0
},
{
 question: "That ....... my business.",
 options: ["is", "will be", "was", "had"],
 correctIndex: 0
},
{
 question: "OK. ....... me about it.",
 options: ["Tell", "Say", "Speak", "Talk"],
 correctIndex: 0
},
{
 question: "Sarah: I ....... I won't make a sound.",
 options: ["promise", "am promising", "did promise", "promised"],
 correctIndex: 0
},
{
 question: "Sarah: At least ....... me a chance.",
 options: ["give", "gave", "giving", "are giving"],
 correctIndex: 0
},
{
 question: "If you ....... of applying for that job, my advice is: forget it.",
 options: ["are thinking", "will think", "will be thinking", "would think"],
 correctIndex: 0
},
{
 question: "In winter time, bears hide themselves in caves and ........",
 options: ["hibernate", "take a nap", "snooze", "relax"],
 correctIndex: 0
},
{
 question: "Caitlin was an extremely hyper kid. When taking care of her, her mom hardly ever had time to ........",
 options: ["relax", "doze off", "slumber", "snooze"],
 correctIndex: 0
},
{
 question: "As you ....... know there are many tenses in English.",
 options: ["probably", "certainly", "sometimes", "doubtfully"],
 correctIndex: 0
},
{
 question: "Please ....... me for going on to the middle of my story",
 options: ["forgive", "forget", "forbid", "forefend"],
 correctIndex: 0
},
{
 question: "We can say: he goes to work Monday to Friday and that ....... a habit and is the Present simple tense.",
 options: ["describes", "defeats", "detracts", "defers"],
 correctIndex: 0
},
{
 question: "Now we come to the other part and we ....... that continuous.",
 options: ["call", "hail", "nominate", "address"],
 correctIndex: 0
},
{
 question: "I just can't seem to be able to find a good personal assistant as they are so hard to ........",
 options: ["come by", "come back", "come out", "come across"],
 correctIndex: 0
},
{
 question: "In terms of personality she's certainly ....... well since she changed her attitude.",
 options: ["come along", "come back", "come over", "come out"],
 correctIndex: 0
},
{
 question: "The treasurer assured his constituents that he would ....... the scandal shortly after the results of the general election were made public.",
 options: ["look into", "look up", "look over", "look after"],
 correctIndex: 0
},
{
 question: "I'll email you ....... I arrive.",
 options: ["as soon as", "until", "as long as", "while"],
 correctIndex: 0
},
{
 question: "Englishmen can't always quite ....... wearing shorts.",
 options: ["bring off", "bring on", "bring up", "bring over"],
 correctIndex: 0
},
{
 question: "Custom frames can help to improve the look of your artwork and thus ....... the best.",
 options: ["bring out", "bring over", "bring to", "bring up"],
 correctIndex: 0
},
{
 question: "If natural disasters have anything good about them, it may be the compassion they ....... in people.",
 options: ["bring out", "bring forward", "bring up", "bring back"],
 correctIndex: 0
},
{
 question: "How was your honeymoon? ........",
 options: ["It was great", "We went by plane", "We went to Mexico"],
 correctIndex: 0
},
{
 question: "Who is coming to the business conference? ........",
 options: ["The management team and the personnel department are coming for sure", "The assembly line workers were there", "Fifty members attended the conference"],
 correctIndex: 0
},
{
 question: "Many Christians believe your body and ....... belong to God.",
 options: ["soul", "reason", "brain", "heart"],
 correctIndex: 0
},
{
 question: "Ben estimated how much wear and ....... the new tires could handle.",
 options: ["tear", "abuse", "effect", "impact"],
 correctIndex: 0
},
{
 question: "Mandy's children are her flesh and ....... so they always come first on her priority list.",
 options: ["blood", "water", "soul", "friend"],
 correctIndex: 0
},
{
 question: "Harry: Sure. We'll have to leave the city at about 5 o'clock then. <br>Deb: Sounds good. <br>Question: What time does Sue's flight leave? ........",
 options: ["7:45 AM", "5:00 AM", "7:45 PM"],
 correctIndex: 0
},
{
 question: "I asked if ....... wanted an ice cream?",
 options: ["anyone", "someone", "everyone", "no one"],
 correctIndex: 0
},
{
 question: "Did ....... phone me when I was out?",
 options: ["anyone", "someone", "everyone", "no one"],
 correctIndex: 0
},
{
 question: "I have never been ....... more beautiful than Thailand.",
 options: ["anywhere", "nowhere", "somewhere", "everywhere"],
 correctIndex: 0
},
{
 question: "Where do you want to go on holiday? ....... with a beach. I don't care where we go as long as it's sunny and has got a nice sandy beach.",
 options: ["Anywhere", "Nowhere", "Somewhere", "Everywhere"],
 correctIndex: 0
},
{
 question: "I have ....... to say to you. Goodbye.",
 options: ["nothing", "something", "everything", "anything"],
 correctIndex: 0
},
{
 question: "I decided to ....... my realtionship with my girlfriendwhen I found out that she was seeing someone else.",
 options: ["break off", "break away", "break out", "break open"],
 correctIndex: 0
},
{
 question: "A burglar ....... when I was away on vacation and stole of my electronic goods.",
 options: ["broke into", "broke off", "broke open", "broke up"],
 correctIndex: 0
},
{
 question: "Can you please ....... some money until we get paid next week?",
 options: ["lend", "give", "borrow", "grant"],
 correctIndex: 0
},
{
 question: "My boss informed me that I had been nominated to ....... a sales pitch to one of our company's largest buyers.",
 options: ["make", "perform", "talk", "do"],
 correctIndex: 0
},
{
 question: "I must remember to fill in my tax ....... before the end of this week.",
 options: ["return", "declaration", "brochure", "pamphlet"],
 correctIndex: 0
},
{
 question: "I decided to ....... my girlfriend and get married when I found out that her parents didn't like me because of my religion.",
 options: ["run away with", "run for", "run against", "run through"],
 correctIndex: 0
},
{
 question: "My parents were very disappointed when they found out that I had ....... all their money.",
 options: ["run off with", "run for", "run against", "run through"],
 correctIndex: 0
},
{
 question: "Many children try to ....... from home for one reason or another at least once during their childhood.",
 options: ["run away", "run for", "run against", "run down"],
 correctIndex: 0
},
{
 question: "Tourists who visit Australia without a visa will usually be ....... entry into the country.",
 options: ["refused", "rejected", "revoked", "rebuked"],
 correctIndex: 0
},
{
 question: "Tourists involved in illegal activities such as drug trafficking and prostitution may have their visas ....... permanently and be banned from entering Australia at any time in the futue.",
 options: ["cancelled", "called off", "abandoned", "annulled"],
 correctIndex: 0
},
{
 question: "Retirement visas do not ....... to Australian permanent residency or citizenship. However people with this type of visa my stay in Australia for a long period of time.",
 options: ["lead", "result", "generate", "develop"],
 correctIndex: 0
},
{
 question: "My little sister is so ....... at school that she is too afraid to ask to go to the toilet.",
 options: ["timid", "intrepid", "tolerant", "envious"],
 correctIndex: 0
},
{
 question: "Never ask Phoebe to dance while her husband is looking. He always gets so ....... of her.",
 options: ["jealous", "responsive", "mortified", "tolerant"],
 correctIndex: 0
},
{
 question: "I think Indonesian people are so ........ They'll always come up to you in the street and try to practice their English.",
 options: ["friendly", "reliable", "imaginative", "bad-tempered"],
 correctIndex: 0
},
{
 question: "Oh no! I failed all my exams last week. I'm ....... dead when my parents see my final report card.",
 options: ["as good as", "as long as", "as soon as", "as much as"],
 correctIndex: 0
},
{
 question: "A wise man once said that a change is almost ....... a holiday.",
 options: ["as good as", "as long as", "as soon as", "as much as"],
 correctIndex: 0
},
{
 question: "We enjoyed the rest of our lunch ......., but I think we were both pretty taken aback by the encounter we had when we first entered the restaurant.",
 options: ["afterwards", "aftermath", "afternoon", "aftertaste"],
 correctIndex: 0
},
{
 question: "A 27-year-old Canadian woman confused the weekend with a weekday and ....... her 6-year-old at school on a Saturday.",
 options: ["dropped off", "dropped out", "dropped behind", "dropped in"],
 correctIndex: 0
},
{
 question: "Special ramps for picking up and ....... passengers are provided at the curbs of the arrival and departure floors of each terminal.",
 options: ["dropping off", "dropping out", "dropping behind", "dropping in"],
 correctIndex: 0
},
{
 question: "Don't ....... your opportunity to increase sales by leveraging the power of email marketing.",
 options: ["pass up", "pass out", "pass by", "pass round"],
 correctIndex: 0
},
{
 question: "Lawmakers shouldn't ....... the chance to regulate tobacco.",
 options: ["pass up", "pass out", "pass away", "pass over"],
 correctIndex: 0
},
{
 question: "Approximately 27,000 — 29,000 vehicles ....... the Detroit-Windsor Tunnel on a daily basis.",
 options: ["pass through", "pass out", "pass away", "pass on"],
 correctIndex: 0
},
{
 question: "Passengers are advised to be at the ....... gate at least thirty minutes before the scheduled departure time of their flight.",
 options: ["boarding", "ticket", "departure", "arrival"],
 correctIndex: 0
},
{
 question: "Passengers are strongly ....... not to check in valuable and fragile items as baggage.",
 options: ["advised", "informed", "told", "reminded"],
 correctIndex: 0
},
{
 question: "To save ....... power, your camera will enter standby mode if no operations are performed for a preset length of time.",
 options: ["battery", "tripod", "memory", "lens"],
 correctIndex: 0
},
{
 question: "Pictures taken with a digital camera are stored as ....... files.",
 options: ["image", "memory", "compression", "analogue"],
 correctIndex: 0
},
{
 question: "The young girl screamed when she saw the ....... body sprawled out on her living room floor.",
 options: ["dead", "dying", "death", "die"],
 correctIndex: 0
},
{
 question: "Sterility is not adequate grounds for divorce or ....... in New Zealand.",
 options: ["annulment", "nuptials", "matrimony", "marriage"],
 correctIndex: 0
},
{
 question: "The body of my late wife was laid to rest in a beautiful cedar ....... adorned with twelve dozen white roses.",
 options: ["casket", "wreath", "grave", "morgue"],
 correctIndex: 0
},
{
 question: "Before removing the battery from your phone, please ensure that the device is switched off and the ....... is disconnected from the handset.",
 options: ["charger", "antenna", "ear piece", "infrared port"],
 correctIndex: 0
},
{
 question: "Before Internet services can be accessed on your cellular phone, you need to ....... to your network operator to enable the relevant configuration information.",
 options: ["subscribe", "contact", "get in touch with", "make contact with"],
 correctIndex: 0
},
{
 question: "Cell broadcasts allow users to ....... messages on specified topics, such as traffic, and weather information from their network operator.",
 options: ["receive", "dispatch", "process", "translate"],
 correctIndex: 0
},
{
 question: "If you don't behave, my father said, 'I'm going to ....... right here, and you can wait by the side of the road till we come and get you.'",
 options: ["pull over", "pull out", "pull through", "pull down"],
 correctIndex: 0
},
{
 question: "If you experience a breakdown, you should ....... to the side of the road and raise the hood of your car.",
 options: ["pull over", "pull out", "pull through", "pull down"],
 correctIndex: 0
},
{
 question: "The high school teacher was so strict that he would not let his students ....... any of the stunts that they tried to pull with their previous teacher.",
 options: ["get away with", "get by with", "get down to", "get around"],
 correctIndex: 0
},
{
 question: "By the time I ....... you, you will be sorry that you ever stepped foot on the face of this earth.",
 options: ["get through with", "get by with", "get down to", "get around"],
 correctIndex: 0
},
{
 question: "Employees at the reinsurance company were finding it very difficult to ....... with their new manager.",
 options: ["get along", "get away", "get through", "get out"],
 correctIndex: 0
},
{
 question: "Pakistani viewers will no longer be able to watch their favorite Bollywoood movies as the government has decided that all Indian cable channels will ....... the air at the end of this month.",
 options: ["go off", "go out", "go on", "go over"],
 correctIndex: 0
},
{
 question: "The mayor has allowed vendors to ....... to their old place after many of them complained of lesser income following the implementation of the night market last week.",
 options: ["go back", "go out", "go on", "go off"],
 correctIndex: 0
},
{
 question: "Rosie overslept because her alarm clock didn't ....... this morning.",
 options: ["go off", "go over", "go on", "go back"],
 correctIndex: 0
},
{
 question: "Ken really likes Kirstie but he's too nervous to ........",
 options: ["ask her out", "ask her on", "ask out"],
 correctIndex: 0
},
{
 question: "Sandy wants to learn how to drive but she must also learn how to ....... so she can get in and out of parking spots easily.",
 options: ["back up", "back behind", "back off"],
 correctIndex: 0
},
{
 question: "Kathy felt a little uneasy when she found out her neighbours had a ........",
 options: ["break-in", "breakout", "break"],
 correctIndex: 0
},
{
 question: "Candace has a bad habit of ....... front of others.",
 options: ["butting in", "butting", "butting into"],
 correctIndex: 0
},
{
 question: "Ken tried to ....... his teachers in order to get a good report card.",
 options: ["butter up", "butter over", "butter in"],
 correctIndex: 0
},
{
 question: "He didn't ....... to new concepts easily.",
 options: ["catch on", "catch up", "catch with"],
 correctIndex: 0
},
{
 question: "They ....... the hotel late last night.",
 options: ["checked into", "checked on", "checked"],
 correctIndex: 0
},
{
 question: "Helen Moody ....... a record of eight Wimbledon singles titles.",
 options: ["set", "played", "starred", "defeated"],
 correctIndex: 0
},
{
 question: "We can do this work ....... any extra help.",
 options: ["without", "withdraw", "with", "within"],
 correctIndex: 0
},
{
 question: "Michael stood ....... the other new students in his class.",
 options: ["apart from", "according to", "in addition to", "out of"],
 correctIndex: 0
},
{
 question: "Everyone went outside the building ....... the false alarm.",
 options: ["because of", "in front of", "on top of", "instead of"],
 correctIndex: 0
},
{
 question: "Look over there. ....... is the biggest pumpkin I've ever seen.",
 options: ["That", "Those", "These", "This"],
 correctIndex: 0
},
{
 question: "Matthew, take ....... and put it over there.",
 options: ["this", "that", "these", "those"],
 correctIndex: 0
},
{
 question: "Her eyes shining, the little girl pointed to ....... piece of candy.",
 options: ["that", "this", "these", "those"],
 correctIndex: 0
},
{
 question: "....... are the best days of our lives.",
 options: ["These", "This", "Those", "That"],
 correctIndex: 0
},
{
 question: "....... students at the administration office want to transfer to our school.",
 options: ["Those", "That", "This", "These"],
 correctIndex: 0
},
{
 question: "Airplanes sometimes fly to unscheduled cities ....... the weather is bad.",
 options: ["when", "where", "wherever", "whereas"],
 correctIndex: 0
},
{
 question: "The pep rally won't begin ....... the last class of the day has ended.",
 options: ["until", "so that", "since", "than"],
 correctIndex: 0
},
{
 question: "Rachel Carson's life was marked with conservation efforts that we ....... can learn from.",
 options: ["ourselves", "yourselves", "themselves", "herself"],
 correctIndex: 0
},
{
 question: "A diver must supply ....... with a mixture of oxygen and different gasses.",
 options: ["himself", "itself", "yourself", "myself"],
 correctIndex: 0
},
{
 question: "My father still ....... heating oil from a company in Chicago.",
 options: ["buys", "bought", "will buy"],
 correctIndex: 0
},
{
 question: "The relative humidity usually ....... when the temperature goes down.",
 options: ["falls", "fell", "will fall"],
 correctIndex: 0
},
{
 question: "Yesterday you ....... you would like to learn how to knit a sweater.",
 options: ["said", "say", "will say"],
 correctIndex: 0
},
{
 question: "A Christian should abandon all ....... toward the person they forgive.",
 options: ["ill will", "ill timed", "ill mannered", "ill at ease"],
 correctIndex: 0
},
{
 question: "To end suffering completely, one must remove desire, ....... and ignorance.",
 options: ["ill will", "ill mannered", "ill timed", "ill at ease"],
 correctIndex: 0
},
{
 question: "The world has suffered more from the ravages of ....... marriages than from virginity.",
 options: ["ill advised", "ill at ease", "ill gotten", "ill will"],
 correctIndex: 0
},
{
 question: "Student mentors catch children before they ....... cracks.",
 options: ["fall through", "fall behind", "fall back on", "fall out with"],
 correctIndex: 0
},
{
 question: "A Brussels based think tank reported that Europe is ....... Asia in terms of education and skills.",
 options: ["falling behind", "falling behind in", "falling back on", "falling off"],
 correctIndex: 0
},
{
 question: "A recent survey showed that one in three house hunters have had a property purchase ........",
 options: ["fall through", "fall behind", "fall back on", "fall out with"],
 correctIndex: 0
},
{
 question: "A Russian culture festival on Tajik territory has been ....... indefinitely because of a local typhoid fever outbreak.",
 options: ["put off", "put in", "put on", "put out"],
 correctIndex: 0
},
{
 question: "It was reported that Hyundai Motor Co. will ....... a car-assembly plant in the Philippines after the Association of Southeast Asian Nations and South Korea forge a free trade agreement.",
 options: ["put up", "put in", "put up with", "put out"],
 correctIndex: 0
},
{
 question: "The United Nations was ....... charge of sorting out differences among countries offering to build a Tsunami early warning system after a flood of proposals in the wake of the Indian Ocean tragedy.",
 options: ["put in", "put up with", "put on hold", "put out"],
 correctIndex: 0
},
{
 question: "French soldiers decided to ....... a Punch and Judy show for their American counterparts.",
 options: ["put on", "put in", "put off", "put out"],
 correctIndex: 0
},
{
 question: "Don't forget to post the letter! He ....... me to post the letter.",
 options: ["reminded", "ordered", "begged", "asked"],
 correctIndex: 0
},
{
 question: "The Virginia G. Piper Cancer Center ....... are 8 am 5 pm Monday through Friday.",
 options: ["business hours", "business cards", "business suits", "business parks"],
 correctIndex: 0
},
{
 question: "Adelaide is ....... in Southern Australia and is the quintessential picture of charm with its colonial architecture.",
 options: ["located", "placed", "established", "to be found"],
 correctIndex: 0
},
{
 question: "In a world that is often turned upside down with ......., Australia still paints a picture of tranquility, a laidback lifestyle and a 'can-do' attitude.",
 options: ["turmoil", "order", "protest", "disturbance"],
 correctIndex: 0
},
{
 question: "Americans eat 350 ....... of pizza per second.",
 options: ["slices", "segments", "parts", "fragments"],
 correctIndex: 0
},
{
 question: "For many people, their way of life is closely linked to their ....... circumstances.",
 options: ["economic", "ergonomic", "profitable", "money"],
 correctIndex: 0
},
{
 question: "Pablo Picasso showed his ....... from a very young age.",
 options: ["genius", "brain", "master mind", "clever"],
 correctIndex: 0
},
{
 question: "Picasso died of heart failure during an ....... of influenza in 1973.",
 options: ["attack", "assault", "offence", "assail"],
 correctIndex: 0
},
{
 question: "Picasso was ....... on October 25, 1881 in Malaga, Spain.",
 options: ["born", "borne", "birth", "birthday"],
 correctIndex: 0
},
{
 question: "Picasso ....... to be one of the twentieth century's greatest painters.",
 options: ["grew up", "grown up", "grew out of", "grew on"],
 correctIndex: 0
},
{
 question: "After the terrible tsunami our oderly lives became ........",
 options: ["chaotic", "erotic", "exotic", "robotic"],
 correctIndex: 0
},
{
 question: "I feel really blessed, you know, because a lot of people who have a ....... never get any advance warning.",
 options: ["heart attack", "heartache", "heartburn", "heart disease"],
 correctIndex: 0
},
{
 question: "Just about everyone experiences the type of grief we call ....... at one time or another.",
 options: ["heartbreak", "heartburn", "heart attack", "heart disease"],
 correctIndex: 0
},
{
 question: "The defendant pleaded guilty to providing a group of Russians with ....... goods.",
 options: ["knock-off", "knock on", "knock out", "knock up"],
 correctIndex: 0
},
{
 question: "A scrum is a way of restartinga game of rugby unionafter an accidental infringement such as a ........",
 options: ["knock on", "knock out", "knock up", "knock off"],
 correctIndex: 0
},
{
 question: "Clinton ....... himself as a 'New Democrat' and has frequently been referred to as the 'Comeback Kid.'",
 options: ["fashioned", "dressed", "clothed", "clad"],
 correctIndex: 0
},
{
 question: "In 1978, at the age of thirty-two, Bill Clinton became the youngest governor in the ....... and in Arkansas history.",
 options: ["nation", "native", "nativity", "national"],
 correctIndex: 0
},
{
 question: "Clinton's partner in his political ....... and marriage, Hillary Rodham Clinton, emerged as a key player in his administration.",
 options: ["career", "job", "trade", "work"],
 correctIndex: 0
},
{
 question: "My parents wouldn't permit me to listen to ....... heavy metal music when I was growing up.",
 options: ["hard core", "hard headed", "hard cash", "hard pressed"],
 correctIndex: 0
},
{
 question: "My former boss was so ....... that he often refused to listen to the opinions of his subordinates.",
 options: ["hard headed", "hard hearted", "hard boiled", "hard pressed"],
 correctIndex: 0
},
{
 question: "The ....... dictator refused to grant clemency to his imprisoned political opponents.",
 options: ["hard hearted", "hard pressed", "hard copy", "hard bitten"],
 correctIndex: 0
},
{
 question: "My father lodged an insurance claim last week because he had an accident and broke one of the ....... on his car.",
 options: ["headlights", "head phones", "head sets", "head dress"],
 correctIndex: 0
},
{
 question: "I was very surprised to read the ....... in the newspaper this morning regarding the incarceration of our country's former president.",
 options: ["headlines", "headlands", "headlights", "headrooms"],
 correctIndex: 0
},
{
 question: "All flights out of Sydney's new airport were delayed last week due to extremely strong ....... that was blowing across the tarmac.",
 options: ["headwind", "headland", "headroom", "headlight"],
 correctIndex: 0
},
{
 question: "The couple ....... of the hotel early this morning.",
 options: ["checked out", "checked in", "checked about"],
 correctIndex: 0
},
{
 question: "Most of the kids at school thought he was scared and that he would ....... of the race.",
 options: ["chicken out", "chicken", "chicken in"],
 correctIndex: 0
},
{
 question: "The new police chief is trying to ....... on the current drug problem in the city.",
 options: ["crack down", "crack over", "crack"],
 correctIndex: 0
},
{
 question: "Lawrence is trying to ....... on fatty foods.",
 options: ["cut down", "cut up", "cut about"],
 correctIndex: 0
},
{
 question: "After a lot of fuss, Rose ....... liking the new dish very much.",
 options: ["ended up", "ended", "ended in"],
 correctIndex: 0
},
{
 question: "The children tried to ....... a way of getting to the concert on their own.",
 options: ["figure out", "figure about", "figure up"],
 correctIndex: 0
},
{
 question: "The criminal tried to ....... the evidence quickly.",
 options: ["get rid of", "get rid about", "get rid on"],
 correctIndex: 0
},
{
 question: "Laurie decided to ....... after the fourth ring.",
 options: ["hang up", "hang down", "hang over"],
 correctIndex: 0
},
{
 question: "Two men staged a ....... at the bank across the street from us yesterday afternoon.",
 options: ["hold-up", "hold-in", "hold-on"],
 correctIndex: 0
},
{
 question: "Kevin ....... the great opportunity to be the floor manager.",
 options: ["jumped all over", "jumped in", "jumped over"],
 correctIndex: 0
},
{
 question: "Even though he was exhausted, he ........",
 options: ["kept going", "kept out", "kept in"],
 correctIndex: 0
},
{
 question: "When I hit my head on the cupboard, I almost ........",
 options: ["knocked myself out", "knocked myself in", "knocked myself"],
 correctIndex: 0
},
{
 question: "He started to ....... his life and then decided to take another trip.",
 options: ["look back on", "look back in", "look back down"],
 correctIndex: 0
},
{
 question: "She started to ....... the upcoming trip.",
 options: ["look forward to", "look forward about", "look forward over"],
 correctIndex: 0
},
{
 question: "Ray hadn't seen his friend in years but he decided to ....... anyway.",
 options: ["look him up", "look him down", "look him in"],
 correctIndex: 0
},
{
 question: "I hardly ever gamble but I was ....... at the casino yesterday.",
 options: ["lucky", "lucked", "lucked out"],
 correctIndex: 0
},
{
 question: "Even though she squinted, she couldn't ....... what he had written.",
 options: ["make out", "make over", "make about"],
 correctIndex: 0
},
{
 question: "Emily ....... when she suddenly saw the burglar enter her home.",
 options: ["passed out", "passed in", "passed over"],
 correctIndex: 0
},
{
 question: "The kids ....... Trent because he is different.",
 options: ["pick on", "pick over", "pick down"],
 correctIndex: 0
},
{
 question: "After weeks of planning the escape, Sue finally started to believe they could ........",
 options: ["pull it off", "pull it forward", "pull it up"],
 correctIndex: 0
},
{
 question: "Kathleen felt like she had to ....... with a lot from her family.",
 options: ["put up", "put over", "put"],
 correctIndex: 0
},
{
 question: "The night before the play, the crew ....... the stage.",
 options: ["set up", "set down", "set in"],
 correctIndex: 0
},
{
 question: "The girl with the purple hair wants to ....... from the group.",
 options: ["stand out", "stand in", "stand over"],
 correctIndex: 0
},
{
 question: "Kelly ....... her mother. They have many of the same interests.",
 options: ["takes after", "takes over", "takes on"],
 correctIndex: 0
},
{
 question: "I decided to ....... organic cooking.",
 options: ["take up", "take over", "take about"],
 correctIndex: 0
},
{
 question: "Marg wanted to ....... the old sofa but her husband couldn't part with it.",
 options: ["throw out", "throw up", "throw down"],
 correctIndex: 0
},
{
 question: "Samantha was late for the basketball ........",
 options: ["try out", "try in", "try up"],
 correctIndex: 0
},
{
 question: "Chris thinks dark hair is a real ........",
 options: ["turn on", "turn in", "turn up"],
 correctIndex: 0
},
{
 question: "Krista ....... her ill husband all day long.",
 options: ["waited on", "waited in", "waited down"],
 correctIndex: 0
},
{
 question: "Rayleen ....... her little brother all the time.",
 options: ["watched out for", "watched out about", "watched out"],
 correctIndex: 0
},
{
 question: "My parents ....... when my teacher called them and told them about my poor grades.",
 options: ["had a cow", "had a pig", "had a bird"],
 correctIndex: 0
},
{
 question: "The suave salesman looked nice but when he told us about the 0% financing, the deal seemed a little ........",
 options: ["fishy", "doggy", "foxy"],
 correctIndex: 0
},
{
 question: "My little girl copies everything I say. She's like a little ........",
 options: ["parrot", "budgie", "chicken"],
 correctIndex: 0
},
{
 question: "Everyone knew that the politician had his 'finger in the pie' of many businesses around the city. What does 'finger in the pie' mean? ........",
 options: ["To be involved in something", "To be uninterested in something", "Wanting to get out of something"],
 correctIndex: 0
},
{
 question: "The trial turned out to be 'a hot potato' that everyone at the table was thinking about. What does 'a hot potato' mean? ........",
 options: ["A topic that is very controversial", "A topic that is easy to answer/solve", "A topic that people are indifferent about because they want to eat"],
 correctIndex: 0
},
{
 question: "Mandy can't wait for snow because she wants to go skiing ....... the winter.",
 options: ["in", "at", "(none)"],
 correctIndex: 0
},
{
 question: "I don't have any plans ....... Thanksgiving Day because my entire family lives overseas.",
 options: ["for", "in", "about"],
 correctIndex: 0
},
{
 question: "I'm going to my parents' house in Maine. What are you doing ....... Christmas Day?",
 options: ["on", "in", "with"],
 correctIndex: 0
},
{
 question: "My vacation starts ....... July 3. Wendy will fill in for me while I'm gone.",
 options: ["on", "at", "in"],
 correctIndex: 0
},
{
 question: "We're going for dinner at a great Italian restaurant ....... tonight. It's not far from here.",
 options: ["(none)", "on", "about"],
 correctIndex: 0
},
{
 question: "....... Valentine's Day, I'm taking my girlfriend to a wonderful spot it's really remote and romantic. I hope she likes it.",
 options: ["On", "In", "About"],
 correctIndex: 0
},
{
 question: "....... tomorrow evening, we're going to have a surprise birthday party for Mitch.",
 options: ["(none)", "About", "In"],
 correctIndex: 0
},
{
 question: "What I'll do now is ........",
 options: ["up to me", "through me", "across me", "on to me"],
 correctIndex: 0
},
{
 question: "I'm sorry that's not fair. It's no good ........",
 options: ["blaming me", "betraying me", "believing me", "beholding me"],
 correctIndex: 0
},
{
 question: "All I ask is that you ........",
 options: ["give me just one last chance", "give me just one last occasion", "give me just one last time", "give me just one last series"],
 correctIndex: 0
},
{
 question: "If I had the chances you have, ........",
 options: ["I'd simply grab them", "I'd simply control them", "I'd simply hold them", "I'd simply manage them"],
 correctIndex: 0
},
{
 question: "They realised that the police had them cornered and ........",
 options: ["they gave themselves up", "they gave themselves under", "they gave them selves to", "they gave themselves over"],
 correctIndex: 0
},
{
 question: "Don't worry about not getting enough support ........",
 options: ["I'm with you all the way", "I'm with you the whole route", "I'm with you all the path", "I'm with you the whole road"],
 correctIndex: 0
},
{
 question: "We're having a barbecue next week, .......?",
 options: ["will you come", "did you come", "do you come", "were you coming"],
 correctIndex: 0
},
{
 question: "There is a deadline, I'm afraid, ........",
 options: ["so you mustn't dither", "so you mustn't doodle", "so you mustn't dabble", "so you mustn't diddle"],
 correctIndex: 0
},
{
 question: "If we leave this minute, ........",
 options: ["I'm sure we'll make it", "I'm sure we'll take it", "I'm sure we'll get it", "I'm sure we'll turn it"],
 correctIndex: 0
},
{
 question: "They should have arrived by now. I wonder ........",
 options: ["what has kept them", "what has held them", "what has got them", "what has done them"],
 correctIndex: 0
},
{
 question: "You look a little confused. Do you know .......?",
 options: ["what I'm on about", "what I'm off about", "what I'm under about", "what I'm in about"],
 correctIndex: 0
},
{
 question: "When the building was completed, all the workers were paid ........",
 options: ["off", "through", "out", "over"],
 correctIndex: 0
},
{
 question: "It is always ....... when you misunderstand the customs of other countries.",
 options: ["embarrassing", "peculiar", "singular", "attitude"],
 correctIndex: 0
},
{
 question: "At the end of the speech the whole assembly gave the speakers a standing ........",
 options: ["ovation", "applause", "cheering", "support"],
 correctIndex: 0
},
{
 question: "The whole purpose of all these exercises is to ....... your knowledge of grammar and vocabulary.",
 options: ["test", "probe", "investigate", "interpret"],
 correctIndex: 0
},
{
 question: "You don't have to read just novels but also newspapers so that you can see examples of ....... language.",
 options: ["idiomatic", "automatic", "axiomatic", "dogmatic"],
 correctIndex: 0
},
{
 question: "If you can ....... the cost of travel, there is of course no substitute for visiting the country itself.",
 options: ["afford", "spend", "expend", "calculate"],
 correctIndex: 0
},
{
 question: "Don't worry we'll have to wait a little longer because I'm sure he'll ....... soon.",
 options: ["turn up", "turn in", "turn into", "turn down"],
 correctIndex: 0
},
{
 question: "The time has now come when it will be necessary to ....... making a plan.",
 options: ["see about", "see over", "see through", "see into"],
 correctIndex: 0
},
{
 question: "The concert doesn't start at least an hour and so we have time to ........",
 options: ["kill", "murder", "remove", "destroy"],
 correctIndex: 0
},
{
 question: "The problem is he has no work to do and with time on his ....... he is likely to get into trouble.",
 options: ["hands", "fingers", "feet", "legs"],
 correctIndex: 0
},
{
 question: "I always like to get to an appointment in ....... time.",
 options: ["good", "best", "fine", "clear"],
 correctIndex: 0
},
{
 question: "You can tell just looking at their out of date equipment that the company is well ....... the times.",
 options: ["behind", "across", "under", "outside"],
 correctIndex: 0
},
{
 question: "If you really want to send that letter off today, it's ....... time you went to the post office.",
 options: ["high", "quick", "proper", "right"],
 correctIndex: 0
},
{
 question: "If you want to grow as a business and attract new customers you must ....... with the times.",
 options: ["move", "follow", "keep", "hold"],
 correctIndex: 0
},
{
 question: "At the moment the company is doing an extensive advertising campaign with a view to ....... new staff.",
 options: ["recruiting", "catching", "reaching", "taking"],
 correctIndex: 0
},
{
 question: "Candidate: Not to me, ........",
 options: ["it isn't", "it can't be", "it won't be", "it will be"],
 correctIndex: 0
},
{
 question: "Interviewer: So you're not after the job of guardian, ........",
 options: ["I presume", "I pretend", "I prefer", "I preview"],
 correctIndex: 0
},
{
 question: "I am referring to your lawnmower ....... in the catalogue as 'Supercut'.",
 options: ["described", "deferred", "considered", "mentioned"],
 correctIndex: 0
},
{
 question: "What I would like you to do is to pay me ....... my money and take 'Supercut' away.",
 options: ["back", "return", "again", "reply"],
 correctIndex: 0
},
{
 question: "She puts it another way and says she will be able to make an ....... man of me.",
 options: ["honest", "honour", "honestly", "honourable"],
 correctIndex: 0
},
{
 question: "In fact you could not possibly say that the job of best man is at all ........",
 options: ["arduous", "articulate", "ardent", "arduously"],
 correctIndex: 0
},
{
 question: "You may think that this is a ....... job for someone who is applying for a marketing post.",
 options: ["peculiar", "stranger", "usual", "typical"],
 correctIndex: 0
},
{
 question: "I am sure I could ....... my skills as a waiter to the tasks that are needed for your advertised post.",
 options: ["transfer", "translate", "transpose", "transverse"],
 correctIndex: 0
},
{
 question: "The result of this was that we were held ....... for six hours in the departure lounge waiting for the end of the dispute.",
 options: ["up", "on", "by", "about"],
 correctIndex: 0
},
{
 question: "When we eventually arrived at the hotel, we had to ....... our luggage at reception.",
 options: ["sort out", "sort of", "sort in", "sort by"],
 correctIndex: 0
},
{
 question: "He intended to ....... across the channel with a parachute and land on the coast of France near Calais.",
 options: ["fly", "flee", "flew", "flow"],
 correctIndex: 0
},
{
 question: "He created a new ....... and joins Louis Bleriot, the first to fly across the channel in 37 minutes and Matthew Webb, the first to swim across in 22 hours.",
 options: ["record", "recorder", "recording", "records"],
 correctIndex: 0
},
{
 question: "If this relative is also your wife, then things become even more disastrous because it could end in ........",
 options: ["divorce", "division", "distance", "diversion"],
 correctIndex: 0
},
{
 question: "If you do lose one of them or both, your learner will lose confidence and also lose ....... of the car.",
 options: ["control", "check", "break", "stop"],
 correctIndex: 0
},
{
 question: "Chief executives then start making pleasant speeches and smile a lot because they want to ....... the concerns of their borrowers.",
 options: ["assuage", "assert", "assemble", "assent"],
 correctIndex: 0
},
{
 question: "Our poor potential buyer reads the papers, watches the television news and gets excited at the prospect of another meeting of the financiers but in the end nothing of ....... comes of it all.",
 options: ["note", "notice", "noting", "noted"],
 correctIndex: 0
},
{
 question: "The press had been ....... by an unknown source to make as much publicity about him as they could.",
 options: ["prompted", "picked", "promoted", "proposed"],
 correctIndex: 0
},
{
 question: "Then two days before the trial was due to start, new evidence came to ....... proving he was totally innocent.",
 options: ["light", "see", "show", "indicate"],
 correctIndex: 0
},
{
 question: "When there is a ....... inquiry taking place, the rush to get more details is intense.",
 options: ["high profile", "high brow", "high intensity", "high drama"],
 correctIndex: 0
},
{
 question: "The person in charge of the enquiry will occasionally ....... what can be disclosed in newspapers.",
 options: ["signal", "signify", "sign", "seal"],
 correctIndex: 0
},
{
 question: "The idea behind the scheme is to try and ....... stealing in the country.",
 options: ["curb", "kill", "maintain", "confuse"],
 correctIndex: 0
},
{
 question: "Children will be taught to respect other people's property and ........",
 options: ["belongings", "attachments", "added", "additions"],
 correctIndex: 0
},
{
 question: "I regret I cannot continue with the news because someone has ....... the next page.",
 options: ["misappropriated", "misconstrued", "mistaken", "misread"],
 correctIndex: 0
},
{
 question: "I hope you can keep a secret because I'd like you to keep this information ....... your hat.",
 options: ["under", "in", "by", "over"],
 correctIndex: 0
},
{
 question: "If you want to get the best out of your sales force, they must believe in the product and be ....... enough to promote it vigorously.",
 options: ["inspired", "invested", "included", "indebted"],
 correctIndex: 0
},
{
 question: "Our sales meetings were reduced to once a fortnight because the weekly meetings were not considered to be ....... enough.",
 options: ["productive", "producing", "produced", "products"],
 correctIndex: 0
},
{
 question: "This piece of information was discovered by one keen local reporter and was ....... up out of all proportion by the national press.",
 options: ["blown", "blew", "blowing", "blows"],
 correctIndex: 0
},
{
 question: "The Prime Minister called Mathew in to talk to him and said he couldn't tolerate any ....... of scandal in his Party.",
 options: ["whiff", "scent", "smell", "stink"],
 correctIndex: 0
},
{
 question: "The company decided to get ....... of me last week and so I had to leave.",
 options: ["rid", "rod", "red", "ride"],
 correctIndex: 0
},
{
 question: "He ....... a fast one at the entrance because he handed over 4 tickets although there were 5 of them entering the exhibition.",
 options: ["pulled", "pushed", "took", "gave"],
 correctIndex: 0
},
{
 question: "He's one of the ....... rich quick fraternity who believe in making money as quickly as possible.",
 options: ["get", "take", "put", "pull"],
 correctIndex: 0
},
{
 question: "Question: What do they call those huge buildings in New York? <br>Answer: They're called sky........",
 options: ["scratchers", "ticklers", "scrapers", "touchers"],
 correctIndex: 0
},
{
 question: "It's a very pale version of the colour and that's why it's called sky........",
 options: ["blue", "pink", "yellow", "red"],
 correctIndex: 0
},
{
 question: "He just wouldn't take anything seriously and could always be found playing about and generally sky........",
 options: ["larking", "joking", "playing", "birding"],
 correctIndex: 0
},
{
 question: "The cross country run where the runners follow a track of pieces of paper is called a paper ........",
 options: ["chase", "race", "relay", "sport"],
 correctIndex: 0
},
{
 question: "She was given a very decorative paper ....... to stop all her papers blowing away once the window was opened.",
 options: ["weight", "heavy", "block", "stone"],
 correctIndex: 0
},
{
 question: "It was a miracle that he was still alive as he hadn't eaten for weeks and when they found him he was just ....... and bone.",
 options: ["skin", "flesh", "meat", "cover"],
 correctIndex: 0
},
{
 question: "Ah, yes I've got a bone to ....... with you. You told me you would pay me back last week and I still haven't got the money yet.",
 options: ["pick", "chew", "taste", "eat"],
 correctIndex: 0
},
{
 question: "If I were you I would certainly accept the offer. If you ask for any more you're just ....... your luck.",
 options: ["pushing", "probing", "promoting", "pending"],
 correctIndex: 0
},
{
 question: "He just couldn't make up his mind which to choose and so in the end he decided to take ....... luck.",
 options: ["pot", "tin", "can", "box"],
 correctIndex: 0
},
{
 question: "As he didn't want anyone else to hear what he was saying he spoke to her in a stage ........",
 options: ["whisper", "hush", "voice", "tone"],
 correctIndex: 0
},
{
 question: "This proposal was soon discarded because we might find difficulty with the local ........",
 options: ["regulations", "rulings", "rules", "regulars"],
 correctIndex: 0
},
{
 question: "In view of the large number of people the ....... of a parking area was considered very important.",
 options: ["proximity", "approximate", "prominence", "profession"],
 correctIndex: 0
},
{
 question: "I suppose as we live in a very rural area, we are lucky that a train service actually ....... here.",
 options: ["operates", "works", "functions", "takes"],
 correctIndex: 0
},
{
 question: "We ate our sandwiches and for the ....... of the journey we enjoyed looking at the scenery.",
 options: ["remainder", "remaining", "remained", "remains"],
 correctIndex: 0
},
{
 question: "He may seem very angry but don't worry his ....... is worse than his bite.",
 options: ["bark", "growl", "snort", "snarl"],
 correctIndex: 0
},
{
 question: "As far as I'm concerned his explanation was useless as it merely ....... the issue.",
 options: ["confused", "troubled", "disturbed", "upset"],
 correctIndex: 0
},
{
 question: "It was a family that had had a long history but it came to a halt when George went because he died ....... issue.",
 options: ["without", "missing", "incomplete", "failing"],
 correctIndex: 0
},
{
 question: "Turn on the television and look at the current news programme and you will find everyone discussing the ....... issue of the day.",
 options: ["big", "large", "enormous", "huge"],
 correctIndex: 0
},
{
 question: "It's a long way we have to travel tomorrow so we must get up very early in the morning at the crack of ........",
 options: ["dawn", "dusk", "day", "sun"],
 correctIndex: 0
},
{
 question: "I really think you should make an effort and apply for that job and at least ....... a crack at it.",
 options: ["have", "do", "place", "try"],
 correctIndex: 0
},
{
 question: "It is customary for the office junior to make a ....... of what each colleague wants from the sandwich bar.",
 options: ["list", "description", "inventory", "table"],
 correctIndex: 0
},
{
 question: "The worst part naturally of any meal whatever the time of day is having to ....... the bill.",
 options: ["settle", "arrange", "manage", "control"],
 correctIndex: 0
},
{
 question: "It was one of those scenes that made you want to cry your eyes out and I do believe there wasn't a dry ....... in the theatre.",
 options: ["eye", "nose", "cheek", "face"],
 correctIndex: 0
},
{
 question: "Poor woman since she got knocked down by a car, she's been ....... on her back.",
 options: ["flat", "prone", "laying", "straight"],
 correctIndex: 0
},
{
 question: "We were in a small rowing boat and were terrified that the steamer hadn't seen us as it was bearing ....... on us.",
 options: ["down", "across", "over", "under"],
 correctIndex: 0
},
{
 question: "She has been proved right in everything she did as the report quite clearly bears ........",
 options: ["out", "to", "for", "onto"],
 correctIndex: 0
},
{
 question: "The work has to be done as we have no choice. As they say, needs must when the devil ........",
 options: ["drives", "guides", "steers", "races"],
 correctIndex: 0
},
{
 question: "You should really look through that agreement carefully before you sign because the devil is in the ........",
 options: ["detail", "exact", "finery", "precise"],
 correctIndex: 0
},
{
 question: "Quite honestly I really can't decide which one to choose — I'm what you might say in two ........",
 options: ["minds", "thoughts", "ideas", "views"],
 correctIndex: 0
},
{
 question: "I can see you're angry and want to do the same to them but remember that two wrongs don't make a ........",
 options: ["right", "rite", "correction", "point"],
 correctIndex: 0
},
{
 question: "And so it's not surprising the many ways we have of ....... it.",
 options: ["describing", "defining", "delineating", "developing"],
 correctIndex: 0
},
{
 question: "put a ....... outside your door stating: Do not disturb — having 40 winks.",
 options: ["notice", "board", "sign", "tablet"],
 correctIndex: 0
},
{
 question: "Well, I think I'll ....... to sleep now.",
 options: ["go", "take", "make", "get"],
 correctIndex: 0
},
{
 question: "And ....... very important people are not described as simply going to bed but rather retiring for the night.",
 options: ["incidentally", "eventually", "absolutely", "entirely"],
 correctIndex: 0
},
{
 question: "you could be subtle and ....... up the sitting room clock",
 options: ["wind", "stir", "turn", "take"],
 correctIndex: 0
},
{
 question: "Well, I don't know about you but all this is having a very soporific ....... on me",
 options: ["effect", "affect", "affection", "affectation"],
 correctIndex: 0
},
{
 question: "I do apologise for talking to you a minute ago only I ....... you for one of my colleagues, who looks exactly like you.",
 options: ["mistook", "accepted", "believed", "thought"],
 correctIndex: 0
},
{
 question: "They couldn't hold their meeting in the open air ....... of the heavy rain.",
 options: ["because", "but", "since", "for"],
 correctIndex: 0
},
{
 question: "The new company decided not to copy their predecessors but ....... their structure after the latest trends in business.",
 options: ["model", "frame", "differ", "make"],
 correctIndex: 0
},
{
 question: "Although the bank had turned down his application twice, they suddenly had a change of heart and decided to ....... to his request for a loan.",
 options: ["accede", "access", "accrue", "adapt"],
 correctIndex: 0
},
{
 question: "In ....... to prevent any industrial espionage all employees had to sign a document preventing them from talking about their work.",
 options: ["order", "command", "requirement", "purpose"],
 correctIndex: 0
},
{
 question: "The government are erecting concrete blocks around the Houses of Parliament to ....... the buildings against possible terrorist attacks.",
 options: ["defend", "distract", "defer", "detract"],
 correctIndex: 0
},
{
 question: "Although he claimed it was an accident, he was ....... of murder.",
 options: ["accused", "blamed", "criticized", "arrested"],
 correctIndex: 0
},
{
 question: "We will get as near as we can to your requirements but we may not be able to ....... all your needs.",
 options: ["meet", "encounter", "measure", "face"],
 correctIndex: 0
},
{
 question: "You can have that car in any colour you want in fact you have a ....... of 24 different ones.",
 options: ["choice", "choosing", "number", "shade"],
 correctIndex: 0
},
{
 question: "There is a new company regulation to remove the danger of passive smoking, which ....... all employees from smoking at their place of work.",
 options: ["prohibits", "promotes", "professes", "protests"],
 correctIndex: 0
},
{
 question: "For the first time in his life ....... of going straight home, he called in at a pub on the way back.",
 options: ["instead", "inside", "including", "into"],
 correctIndex: 0
},
{
 question: "I've always thought of her as the kind of person you can trust, you know the sort you can ....... on.",
 options: ["depend", "deter", "defend", "defeat"],
 correctIndex: 0
},
{
 question: "In this biography she is ....... as a kind sweet old lady but in reality she was a bad tempered old witch.",
 options: ["depicted", "framed", "outlined", "caught"],
 correctIndex: 0
},
{
 question: "She ....... to be very confident on stage but inside she was feeling very nervous.",
 options: ["appeared", "supposed", "stood", "credited"],
 correctIndex: 0
},
{
 question: "I don't mind sleeping on an uncomfortable bed in a hostel as anything is ....... to sleeping in a tent.",
 options: ["preferable", "preferred", "preferring", "prefers"],
 correctIndex: 0
},
{
 question: "The Government published a report clearing the minister of any guilt and ....... that he had acted correctly.",
 options: ["concluded", "conducted", "conferred", "confided"],
 correctIndex: 0
},
{
 question: "Let's look at it this way — it's not so much a problem ....... a challenge to our efforts.",
 options: ["as", "since", "for", "it"],
 correctIndex: 0
},
{
 question: "It was quite obvious from the secretive manner in which he left the shop and the ....... looks he kept giving that he hadn't paid for the items of clothing.",
 options: ["furtive", "fugitive", "furious", "famous"],
 correctIndex: 0
},
{
 question: "I've no wish to disregard or ....... your achievements but I think you could have done much more.",
 options: ["belittle", "bemoan", "bereave", "betoken"],
 correctIndex: 0
},
{
 question: "It was then that Henry ....... that the tractors were loaded with boxes of tomatoes, which the farmers started to throw at him. Unfortunately for Henry, two of them hit him full in the face.",
 options: ["noticed", "decided", "believed", "remarked"],
 correctIndex: 0
},
{
 question: "Henry: You shouldn't have bothered. We can all go back home now. The police have ....... the house thoroughly and found nothing at all. <br>Vera: Well, at least stay and eat the nice salad I've made. <br>Henry: All right, Vera. Just so long as there are no tomatoes in it!",
 options: ["searched", "found", "looked", "hunted"],
 correctIndex: 0
},
{
 question: "We asked him why he ....... telephoned earlier.",
 options: ["hadn't", "hasn't", "didn't", "wouldn't"],
 correctIndex: 0
},
{
 question: "If they ....... arrive late, they will have to get their own meal.",
 options: ["do", "had", "would", "will"],
 correctIndex: 0
},
{
 question: "She wonders why I never ....... abroad by plane.",
 options: ["travel", "have been travelling", "has travelled", "will have travelled"],
 correctIndex: 0
},
{
 question: "He came into the room and demanded ....... what was happening.",
 options: ["to know", "knowing", "know", "having known"],
 correctIndex: 0
},
{
 question: "The castle ....... built in the 15th century.",
 options: ["was", "is", "has been", "will be"],
 correctIndex: 0
},
{
 question: "The children ....... taken to school by bus every day.",
 options: ["are", "have", "was", "had"],
 correctIndex: 0
},
{
 question: "All I can say at the moment is: Long ....... the company!",
 options: ["live", "lives", "lived", "living"],
 correctIndex: 0
},
{
 question: "Try ....... the door really hard if you want to open it.",
 options: ["pushing", "push", "pushes", "pushed"],
 correctIndex: 0
},
{
 question: "I'll finish now and I look forward to ....... you again soon.",
 options: ["seeing", "see", "seen", "having seen"],
 correctIndex: 0
},
{
 question: "I honestly think that the time ....... come when we should celebrate our success.",
 options: ["has", "had", "will", "having"],
 correctIndex: 0
},
{
 question: "No-one ....... believe your story when you tell them.",
 options: ["will", "did", "has", "is"],
 correctIndex: 0
},
{
 question: "They ....... for 3 hours when the storm suddenly broke.",
 options: ["had been running", "have been running", "are running", "will be running"],
 correctIndex: 0
},
{
 question: "I ....... there once a long time ago and haven't been back since.",
 options: ["went", "go", "have gone", "was going"],
 correctIndex: 0
},
{
 question: "An eagle, if pressed for food, might ....... a small baby that had been left in the open unprotected, but such an opportunity must occur very rarely.",
 options: ["carry off", "carry through", "carry on with", "carry out"],
 correctIndex: 0
},
{
 question: "The liver regulates most chemical levels in the blood and excretes a product called bile, which helps ....... waste products from the liver.",
 options: ["carry away", "carry through", "carry on with", "carry over"],
 correctIndex: 0
},
{
 question: "An employee with 400 accrued sick leave hours at the end of the fiscal year will ....... into the new fiscal year 360 hours of sick leave and 8 hours of additional annual leave.",
 options: ["carry over", "carry on", "carry off", "carry out"],
 correctIndex: 0
},
{
 question: "Animals and humans use the evaporation of water to ....... heat that is absorbed from the sun or generated by metabolic activity and exercise.",
 options: ["carry away", "carry through", "carry off", "carry out"],
 correctIndex: 0
},
{
 question: "Modern Asian restaurants in Jakarta have an ....... history.",
 options: ["extended", "external", "extracted", "exude"],
 correctIndex: 0
},
{
 question: "Hong Kong has to be one of the few places on the planet where you can enjoy ....... cuisine and service at relatively reasonable prices.",
 options: ["exquisite", "explicit", "expletive", "explosive"],
 correctIndex: 0
},
{
 question: "Some of Shakespeare's historical plays are rather long and so there are editions where they are ....... to make them shorter.",
 options: ["abridged", "accented", "adopted", "acquired"],
 correctIndex: 0
},
{
 question: "The secret of a good interview is to get straight to the point and ask ....... questions.",
 options: ["incisive", "inserting", "introducing", "inductive"],
 correctIndex: 0
},
{
 question: "Everything about the village was what you'd call ....... because all the houses were well looked after and reminded you of a time long since gone.",
 options: ["quaint", "queer", "quiet", "queenly"],
 correctIndex: 0
},
{
 question: "I have no wish to ....... these criminal activities but I do have some sympathy with the perpetrators.",
 options: ["condone", "concede", "console", "conduct"],
 correctIndex: 0
},
{
 question: "He has a very refined vocabulary and prefers to use a ....... rather than a more common and vulgar word.",
 options: ["euphemism", "delicacy", "finery", "edition"],
 correctIndex: 0
},
{
 question: "Although it's a complicated subject the professor managed to make it all totally clear and ....... by her delivery.",
 options: ["lucid", "luminous", "lightening", "lifting"],
 correctIndex: 0
},
{
 question: "You must react now and not just be ....... as if there is nothing wrong.",
 options: ["complacent", "combining", "combative", "concerning"],
 correctIndex: 0
},
{
 question: "The strings on the puppet were all intertwined and it took us ages to ....... them.",
 options: ["disentangle", "distribute", "disturb", "distend"],
 correctIndex: 0
},
{
 question: "The sands are ....... and everything is changing in this century.",
 options: ["shifting", "turning", "moving", "going"],
 correctIndex: 0
},
{
 question: "For very small children at their nursery school there is often a sand ....... where they can play.",
 options: ["pit", "hole", "container", "box"],
 correctIndex: 0
},
{
 question: "One year later the date of the general election was ....... by the Prime Minister.",
 options: ["announced", "denounced", "presented", "delivered"],
 correctIndex: 0
},
{
 question: "Henry got out of bed and ran down the stairs. He ....... who could possibly be ringing at that early hour in the morning.",
 options: ["wondered", "asked", "considered", "believed"],
 correctIndex: 0
},
{
 question: "Man's voice: Oh, good morning. I want to warn you about a bomb... <br>Henry: A bomb? Where? Hello! We've been ....... off. Operator! Operator! Operator!",
 options: ["cut", "severed", "removed", "drained"],
 correctIndex: 0
},
{
 question: "Andrew: That makes the whole business even more sinister. Look here, Henry, one day won't make all that much difference. I'll tell people that you've ....... your voice or something.",
 options: ["lost", "missed", "disturbed", "forgotten"],
 correctIndex: 0
},
{
 question: "There was very little reaction to Henry's speech, except from one or two people at the back who kept on asking what Henry's party intended to do about the ....... price of fruit and vegetables.",
 options: ["rising", "raising", "risen", "raised"],
 correctIndex: 0
},
{
 question: "As soon as he had invested the money, he became uneasy and was beginning to sense ....... about his investment.",
 options: ["questions", "qualms", "queries", "quavers"],
 correctIndex: 1
},
{
 question: "The judge has to adopt a ....... view of the crime by being utterly impartial.",
 options: ["detracted", "detached", "definite", "defended"],
 correctIndex: 1
},
{
 question: "It was possible to look up the topic on the internet but she decided instead to ask her ....... father who knew the answer to most things.",
 options: ["earnest", "erudite", "learning", "imminent"],
 correctIndex: 1
},
{
 question: "I apologized for what seemed like a deliberate act of rudeness but I explained that it had been purely accidental and an ....... action on my part.",
 options: ["inverted", "inadvertent", "incurred", "inhibited"],
 correctIndex: 1
},
{
 question: "There was absolutely no call for him to criticise her so cruelly and in almost a ....... manner.",
 options: ["malformed", "malicious", "maladroit", "malcontent"],
 correctIndex: 1
},
{
 question: "He didn't really give speeches because he used to scream and shout and you could hear him ....... a hundred meters down the road.",
 options: ["reigning", "raining", "ruling", "rattling"],
 correctIndex: 1
},
{
 question: "People often ask her how she manages to stay slim and she always tells them she is very careful in the amount she eats to the point of being ........",
 options: ["abbreviated", "abstemious", "actuated", "abrupt"],
 correctIndex: 1
},
{
 question: "It was quite obvious that he was drunk because he couldn't finish his sentences and his speech was not ........",
 options: ["contented", "coherent", "convinced", "convoluted"],
 correctIndex: 1
},
{
 question: "He liked to play the ....... and would invariably dress up in the most outrageous clothes.",
 options: ["eclectic", "eccentric", "evasive", "evolved"],
 correctIndex: 1
},
{
 question: "It's no good ....... your head in the sand, you'll have to face the truth in the end.",
 options: ["filling", "burying", "putting", "digging"],
 correctIndex: 1
},
{
 question: "They have decided to ....... a line in the sand and start all over again.",
 options: ["designate", "draw", "sketch", "delineate"],
 correctIndex: 1
},
{
 question: "Children often go down to the seaside and use their buckets and spades to make sand ........",
 options: ["buildings", "castles", "houses", "constructions"],
 correctIndex: 1
},
{
 question: "....... the election campaign Henry's wife and his two teenage daughters worked night and day for him",
 options: ["for", "throughout", "by", "from"],
 correctIndex: 1
},
{
 question: "but there was one day in particular that Henry would never ........",
 options: ["remember", "forget", "discover", "avoid"],
 correctIndex: 1
},
{
 question: "Andrew: What did the man sound like? Did you recognize his voice? <br>Henry: No, I was half asleep. His voice wasn't familiar but he sounded quite pleasant. He didn't seem to be ....... me.",
 options: ["punishing", "threatening", "hitting", "striking"],
 correctIndex: 1
},
{
 question: "Andrew: If you say so. But I'd like to make it ....... that I'm dead against it.",
 options: ["absolute", "clear", "defined", "extreme"],
 correctIndex: 1
},
{
 question: "Henry Orpington's first ....... that day was an open-air meeting on a large housing estate at ten o'clock.",
 options: ["entrance", "engagement", "incitement", "endeavour"],
 correctIndex: 1
},
{
 question: "At eleven o'clock he ....... a brief visit to a public house on the estate. Henry couldn't offer to buy anyone a drink because he knew very well that his opponents would consider that to be dishonest. So he let one of his supporters buy him a drink instead.",
 options: ["bought", "paid", "sought", "did"],
 correctIndex: 1
},
{
 question: "There was a large crowd in the field when Henry arrived at eight o'clock for what was perhaps the biggest meeting of the ....... campaign. After a hard day's work, hundreds of farmers and farm labourers had come to the field to hear what Henry had to say.",
 options: ["utter", "whole", "absolute", "lasting"],
 correctIndex: 1
},
{
 question: "Although all the athletes were full of life at the start of the marathon, towards the end of the race a few were showing signs of tiredness and were clearly ........",
 options: ["flogging", "failing", "flagging", "foiling"],
 correctIndex: 2
},
{
 question: "Many of the safety instructions on things you buy often seem unnecessary and often quite ....... to the average person.",
 options: ["superb", "supreme", "superfluous", "superficial"],
 correctIndex: 2
},
{
 question: "The police not only arrested the leader of the gang but also the ....... who had helped him.",
 options: ["acolytes", "attackers", "accomplices", "associates"],
 correctIndex: 2
},
{
 question: "Despite all the chaos around him the captain remained totally calm and assumed an air of ........",
 options: ["equation", "equality", "equanimity", "equity"],
 correctIndex: 2
},
{
 question: "The party leader advised all her members to ....... any question about finance and avoid the topic of money completely.",
 options: ["risk", "undertake", "eschew", "involve"],
 correctIndex: 2
},
{
 question: "The result of the election didn't give either candidate a clear majority but in the end the leader of the opposition agreed to step down and ....... to the wishes of the electorate.",
 options: ["accept", "accent", "accede", "ascend"],
 correctIndex: 2
},
{
 question: "When you take a party of tourists round a famous city there are always those who ....... and keep everybody else waiting.",
 options: ["litter", "lessen", "loiter", "languish"],
 correctIndex: 2
},
{
 question: "There was absolutely no question about it he was the ....... idiot such as you'd find in one of those old farces.",
 options: ["provincial", "provided", "proverbial", "protective"],
 correctIndex: 2
},
{
 question: "He always follows that old .......: early to bed, early to rise makes a man healthy, wealthy and wise.",
 options: ["phrase", "ballad", "adage", "analogy"],
 correctIndex: 2
},
{
 question: "There was no changing her mind as she was quite ....... about her decision and wouldn't consider any alternative.",
 options: ["attractive", "attentive", "adamant", "adjoined"],
 correctIndex: 2
},
{
 question: "If you ....... your enterprise on sand, it's certain to fail eventually.",
 options: ["put", "try", "build", "heap"],
 correctIndex: 2
},
{
 question: "It runs into millions and millions — almost as many as the ....... of sand you can see on this beach.",
 options: ["pieces", "pinches", "grains", "drops"],
 correctIndex: 2
},
{
 question: "All the members of his family were pleased therefore when Henry was ....... as the prospective parliamentary candidate for the constituency in which they were living.",
 options: ["adapted", "added", "adopted", "addicted"],
 correctIndex: 2
},
{
 question: "Every day of the campaign was a .......",
 options: ["trial", "experiment", "challenge", "achievement"],
 correctIndex: 2
},
{
 question: "On a Friday morning at the beginning of the campaign, the phone ....... in the Orpingtons' house at 6.30 in the morning.",
 options: ["ringed", "rung", "rang", "wrung"],
 correctIndex: 2
},
{
 question: "Henry: Hello. <br>Man's voice: Is that Mr. Henry Orpington, the parliamentary candidate? <br>Henry: Yes, ........",
 options: ["talking", "dictating", "speaking", "deciding"],
 correctIndex: 2
},
{
 question: "It was no good. The line had gone ........ As calmly as he could Henry went upstairs to tell his wife the alarming news.",
 options: ["quiet", "dormant", "dead", "still"],
 correctIndex: 2
},
{
 question: "At half past eight Henry was in conference with his election agent, Andrew Higgins, at party headquarters. <br>Andrew: If you want my opinion, I suggest you cancel all your engagements for today and wait until the police get to the ....... of the matter.",
 options: ["base", "end", "bottom", "hind"],
 correctIndex: 2
},
{
 question: "Henry: Certainly not! I'm not going to let ....... be scared by some stupid crank.",
 options: ["himself", "itself", "myself", "themselves"],
 correctIndex: 2
},
{
 question: "Henry: No, I'm going to carry on as usual. Think of the advantage it would give my ....... if I were out of the campaign even for one day.",
 options: ["outsiders", "opposites", "opponents", "onlookers"],
 correctIndex: 2
},
{
 question: "Andrew Higgins kept a close watch on the platform from which Henry was making his speech, while several plainclothes policemen ....... inconspicuously with the crowd.",
 options: ["meddled", "moulded", "mingled", "melded"],
 correctIndex: 2
},
{
 question: "After the speech he shook hands with some of the women. One of them lifted up a baby for him to kiss, but the ....... of Henry's beard must have frightened it because it began to scream its head off.",
 options: ["seeing", "sighting", "sight", "scene"],
 correctIndex: 2
},
{
 question: "Vera: Now I hope you can see the danger of getting mixed up in politics. You and the family will probably ....... get blown up by a bomb. <br>Henry: Don't exaggerate, Vera. I'm sure it's just a joke.",
 options: ["each", "every", "all", "entirely"],
 correctIndex: 2
},
{
 question: "She suddenly stopped speaking to him on the phone and the conversation came to an ....... end.",
 options: ["acute", "arid", "awful", "abrupt"],
 correctIndex: 3
},
{
 question: "Fortunately she took no notice of the reviews of her acting and was quite ....... to some of the more sarcastic comments.",
 options: ["important", "impenetrable", "immediate", "impervious"],
 correctIndex: 3
},
{
 question: "Although her boss knew that she was not telling the truth, her explanations for being late were always so reasonable and totally ....... that he believed her.",
 options: ["pleasant", "perceptive", "penetrating", "plausible"],
 correctIndex: 3
},
{
 question: "He found himself at the edge of the cliff in a ....... position because one wrong step and he would fall into the sea.",
 options: ["precipitate", "peculiar", "pertinent", "precarious"],
 correctIndex: 3
},
{
 question: "Everyone lost their money when the so-called treasurer ....... with all the society's savings.",
 options: ["avoided", "evaded", "absolved", "absconded"],
 correctIndex: 3
},
{
 question: "The police stopped the car because it had followed an ....... course down the road and asked the driver why he was going from side to side.",
 options: ["uneven", "unequal", "unerring", "erratic"],
 correctIndex: 3
},
{
 question: "I've looked everywhere for my key and even carried out an ....... search of my car but I can't find that book.",
 options: ["exhausted", "exhausting", "exhaust", "exhaustive"],
 correctIndex: 3
},
{
 question: "The sound of the waterfall goes on all day and night and in the end the ....... noise gets on your nerves.",
 options: ["interrupting", "inciting", "invading", "incessant"],
 correctIndex: 3
},
{
 question: "Before she knew what had happened a man suddenly fell on her ....... across and stealing her handbag.",
 options: ["lurking", "linking", "limping", "lunging"],
 correctIndex: 3
},
{
 question: "You'll soon get used to his funny ways as it's one of the ....... of his personality.",
 options: ["quibbles", "quills", "quaffs", "quirks"],
 correctIndex: 3
},
{
 question: "If you invest that money, you will find it will grow and ....... interest.",
 options: ["agree", "adapt", "apart", "accrue"],
 correctIndex: 3
},
{
 question: "I find these mathematical puzzles too ....... and prefer the more straightforward type.",
 options: ["abject", "abortive", "abounding", "abstruse"],
 correctIndex: 3
},
{
 question: "There are really too many political parties in this election as there are so many small groups or ........",
 options: ["fictions", "fanatics", "fusion", "factions"],
 correctIndex: 3
},
{
 question: "The sands of ....... are running out and you'll have to hurry up.",
 options: ["moment", "clock", "minute", "time"],
 correctIndex: 3
},
{
 question: "In order to get children to go to sleep, parents sometimes say that the sand ....... will soon come and put sand in their eyes.",
 options: ["person", "human", "wizard", "man"],
 correctIndex: 3
},
{
 question: "When there is a danger of flooding, people often pile up sand ....... outside their houses to stop the water coming in.",
 options: ["pots", "sacks", "packets", "bags"],
 correctIndex: 3
},
{
 question: "There was absolutely no ....... that Henry Orpington liked politics. He talked politics all the time.",
 options: ["belief", "concern", "query", "doubt"],
 correctIndex: 3
},
{
 question: "and he finally ....... a seat in the House of Commons by a very large majority.",
 options: ["chose", "bought", "derived", "won"],
 correctIndex: 3
},
{
 question: "That was the day he thought he was going to be blown ....... by a bomb.",
 options: ["out", "over", "off", "up"],
 correctIndex: 3
},
{
 question: "They decided to get dressed at once and take the two girls to their aunt's house. Henry ....... the police but asked them to keep the news from the press.",
 options: ["instructed", "directed", "said", "informed"],
 correctIndex: 3
},
{
 question: "As most of the men were ....... at work, his audience consisted mainly of women and young children.",
 options: ["off", "over", "under", "out"],
 correctIndex: 3
},
{
 question: "At lunch time he went to his sister's house to see his wife and daughters. They had spent the morning addressing envelopes for the leaflets he was sending out. His sister, Vera, thoroughly ....... of his involvement in politics.",
 options: ["disliked", "discouraged", "disappointed", "disapproved"],
 correctIndex: 3
},
{
 question: "Promise me that at least you'll try this exercise, won't you? Answer: ........",
 options: ["I'll have an effort", "I'll have a trial", "I'll have a go", "I'll have a trial"],
 correctIndex: 2
},
{
 question: "What do you make of this test? Answer: It's quite ........",
 options: ["beyond me", "below me", "behind me", "beside me"],
 correctIndex: 0
},
{
 question: "I don't know about you but I can't make sense of this at all. Answer: ........",
 options: ["Me too, I'm just out of my height", "Me too, I'm just out of my length", "Me too, i'm just out of my depth", "Me too, I'm just out of my size"],
 correctIndex: 2
},
{
 question: "Did you follow all that? Answer: ........",
 options: ["No, my mind's a complete blank", "No, my mind's a complete hole", "No, my mind's a complete space", "No, my mind's a complete void"],
 correctIndex: 0
},
{
 question: "I hope it's all clear now, isn't it? Answer: No, ........",
 options: ["you've left me there", "you've dropped me there", "you've ht me there", "you've lost me there"],
 correctIndex: 3
},
{
 question: "Did you get that? Answer: Well, not really. .......?",
 options: ["Could you float that past me once more", "Could you run that past me once more", "Could you fly that past me once more", "Could you walk that past me once more"],
 correctIndex: 1
},
{
 question: "She looks ....... a famous film star.",
 options: ["as", "like", "similar", "same"],
 correctIndex: 1
},
{
 question: "This television gives you the ....... news.",
 options: ["last", "latest", "least", "later"],
 correctIndex: 1
},
{
 question: "You must not drink and then ....... a car.",
 options: ["lead", "drive", "take", "guide"],
 correctIndex: 1
},
{
 question: "The teacher asked her students to do their ........",
 options: ["housework", "homework", "home duty", "house job"],
 correctIndex: 1
},
{
 question: "I ....... attentively to the lecture on philosophy but I still didn't understand much of it.",
 options: ["heard", "listened", "was hearing", "was listen"],
 correctIndex: 1
},
{
 question: "I ....... what you are saying but that still doesn't make me want to change my mind one little bit.",
 options: ["listen", "hear", "am listing", "am hearing"],
 correctIndex: 1
},
{
 question: "Now will you please ....... me and pay attention to what I'm saying because it's very important.",
 options: ["hear", "listen to", "hearing", "listening to"],
 correctIndex: 1
},
{
 question: "Sadly their marriage of 25 years ....... in divorce.",
 options: ["ends", "ended", "finishes", "finished"],
 correctIndex: 1
},
{
 question: "He thought they would all share the cost of the meal but unfortunately he ....... up paying for everybody.",
 options: ["end", "ended", "finish", "finished"],
 correctIndex: 1
},
{
 question: "I ....... my car to make sure it worked about ten mintues before I drove to work.",
 options: ["began", "started", "begin", "start"],
 correctIndex: 1
},
{
 question: "We ....... off early on the first day of summer so that we could see the sun rise.",
 options: ["began", "started", "starting", "beginning"],
 correctIndex: 1
},
{
 question: "I can't ....... to understand why anyone would want to be cruel to animals.",
 options: ["start", "begin", "starts", "begins"],
 correctIndex: 1
},
{
 question: "Who would like to ....... off the debate?",
 options: ["begin", "start", "begins", "starting"],
 correctIndex: 1
},
{
 question: "I could ....... bought that car but I didn't have enough money to pay for the petrol.",
 options: ["had", "have", "have to"],
 correctIndex: 1
},
{
 question: "I ....... speak French without a problem now because I have had many lessons.",
 options: ["may", "can", "have"],
 correctIndex: 1
},
{
 question: "I ....... help you with your shopping because you have a lot of bags.",
 options: ["ought", "ought to", "thought"],
 correctIndex: 1
},
{
 question: "When will you ....... come and see us in our new house?",
 options: ["can", "be able to", "must"],
 correctIndex: 1
},
{
 question: "I may ....... go to Paris next week because there is a very big exhibition there.",
 options: ["have", "have to", "had"],
 correctIndex: 1
},
{
 question: "It is important sometimes to stop and look around you at all the wonderful things ........",
 options: ["nature", "in nature", "in the nature"],
 correctIndex: 1
},
{
 question: "Can anyone give me ....... please because I have just fallen over?",
 options: ["hand", "a hand", "the hand"],
 correctIndex: 1
},
{
 question: "She always said that when she grew up she wanted to be ........",
 options: ["doctor", "a doctor", "the doctor"],
 correctIndex: 1
},
{
 question: "I don't understand a word ....... you are talking about.",
 options: ["what", "that", "who"],
 correctIndex: 1
},
{
 question: "They have a very large house round ....... there are some lovely gardens.",
 options: ["that", "which", "whose"],
 correctIndex: 1
},
{
 question: "Did you meet the lady ....... uncle works in the library?",
 options: ["who", "whose", "who's"],
 correctIndex: 1
},
{
 question: "Later tonight I ....... my uncle, who is ill in hospital.",
 options: ["visit", "am visiting", "are visiting"],
 correctIndex: 1
},
{
 question: "I ....... to remember your name but I'm afraid I can't remember it.",
 options: ["try", "am trying", "will trying"],
 correctIndex: 1
},
{
 question: "If I win the lottery, I ....... buy you a very big car as a present.",
 options: ["should", "will", "am"],
 correctIndex: 1
},
{
 question: "....... I bought you a new car, would you be very happy?",
 options: ["When", "If", "As"],
 correctIndex: 1
},
{
 question: "If you ....... got that job, would you have been able to move to a new house?",
 options: ["have", "had", "will have"],
 correctIndex: 1
},
{
 question: "If I ....... you, I should work very hard so that I could earn more money.",
 options: ["am", "were", "are"],
 correctIndex: 1
},
{
 question: "I expect you think I'm ....... because I don't understand that.",
 options: ["dumb", "stupid", "deaf", "crazy"],
 correctIndex: 1
},
{
 question: "I'm sure you're quite ....... but many people disagree with you.",
 options: ["write", "right", "all right", "serious"],
 correctIndex: 1
},
{
 question: "Do you know where the President of America .......?",
 options: ["leaves", "lives", "live", "inhabits"],
 correctIndex: 1
},
{
 question: "I've tried those tablets and they haven't done me any ........",
 options: ["benefit", "good", "better", "best"],
 correctIndex: 1
},
{
 question: "I believe it is ....... to hold a door open for a lady.",
 options: ["politic", "polite", "political", "politeness"],
 correctIndex: 1
},
{
 question: "Which of these is a passive sentence? It is ........",
 options: ["He's been there", "He's been taken there", "He's been going there", "He will have been there"],
 correctIndex: 1
},
{
 question: "Which of these is a personal pronoun? It is ........",
 options: ["their", "they", "there", "theirs"],
 correctIndex: 1
},
{
 question: "Which of these is a past participle? It is ........",
 options: ["believing", "believed", "believes", "belief"],
 correctIndex: 1
},
{
 question: "What exercise do you like doing ....... of all?",
 options: ["next", "best", "after", "before"],
 correctIndex: 1
},
{
 question: "Well, I think it is and I ....... it's an impossible question to answer.",
 options: ["deliver", "reckon", "report", "realize"],
 correctIndex: 1
},
{
 question: "All right let me ask you what you like doing least of .......?",
 options: ["everything", "all", "entire", "that"],
 correctIndex: 1
},
{
 question: "I ....... don't know how to learn new words by heart.",
 options: ["some time", "sometimes", "something"],
 correctIndex: 1
},
{
 question: "I think learning ....... be interesting because otherwise you wouldn't ever be able to succeed.",
 options: ["can", "should", "must to"],
 correctIndex: 1
},
{
 question: "We are really glad to have you as our ....... and we will take good care of you.",
 options: ["containers", "customers", "costumiers"],
 correctIndex: 1
},
{
 question: "As of now we still don't know if we will be ....... to fulfil our contract.",
 options: ["reliable", "able", "capable"],
 correctIndex: 1
},
{
 question: "Don't worry, we are quite flexible and can make changes at ....... time whatsoever.",
 options: ["some", "any", "one"],
 correctIndex: 1
},
{
 question: "You must admit flying in a hot air balloon is an amazing ........",
 options: ["expression", "experience", "expertise"],
 correctIndex: 1
},
{
 question: "To be honest, I have never ....... in a balloon.",
 options: ["flowed", "flown", "flying"],
 correctIndex: 1
},
{
 question: "Really, then it's about time you tried it ........",
 options: ["in", "out", "on"],
 correctIndex: 1
},
{
 question: "Why not? There is nothing to be ....... of. After all it won't be just us in the balloon.",
 options: ["fear", "afraid", "fright"],
 correctIndex: 1
},
{
 question: "That's not fair. You know full ....... what it feels like to be worried sick when everyone else is laughing at you.",
 options: ["good", "well", "fine"],
 correctIndex: 1
},
{
 question: "All right you win. I promise I won't bring it ....... again. Why don't just we go white water rafting instead?",
 options: ["on", "up", "in"],
 correctIndex: 1
},
{
 question: "I certainly will if I ........",
 options: ["could", "can", "can't", "should"],
 correctIndex: 1
},
{
 question: "I want to ....... to Nutfield Avenue.",
 options: ["come", "get", "fetch", "find"],
 correctIndex: 1
},
{
 question: "Do you drink a ....... of tea with sugar?",
 options: ["much", "lot", "huge", "many"],
 correctIndex: 1
},
{
 question: "I can't ....... give up drinking tea, doctor.",
 options: ["probably", "possibly", "likely", "impossibly"],
 correctIndex: 1
},
{
 question: "The trouble is that there are some very ....... rain clouds over the north.",
 options: ["fat", "heavy", "weighing", "dragging"],
 correctIndex: 1
},
{
 question: "In the early morning the sun will make an ........",
 options: ["apparition", "appearance", "appearing", "appear"],
 correctIndex: 1
},
{
 question: "This will be a programme presenting that ....... comedian, George Blair.",
 options: ["populated", "popular", "populous", "poplar"],
 correctIndex: 1
},
{
 question: "This will be read by the very pretty ....... Penny Lane.",
 options: ["newsagent", "newscaster", "newsbringer", "newspaper"],
 correctIndex: 1
},
{
 question: "Sorry you'll have to speak ........",
 options: ["to", "up", "along", "through"],
 correctIndex: 1
},
{
 question: "I ....... wanted to say.",
 options: ["closely", "simply", "naturally", "quickly"],
 correctIndex: 1
},
{
 question: "But not in ......., eh?",
 options: ["practices", "practice", "practical", "practicing"],
 correctIndex: 1
},
{
 question: "I'm starting a ....... of swimming lessons.",
 options: ["line", "course", "run", "row"],
 correctIndex: 1
},
{
 question: "Mike: She always goes to work on a bike. <br>Jane: .......",
 options: ["She is very healthy.", "She must be very healthy.", "She can be very healthy.", "She might be very healthy."],
 correctIndex: 1
},
{
 question: "Mike: You know he failed all his examinations? <br>Jane: .......",
 options: ["I must believe it.", "I don't believe it.", "I might believe it.", "I ought to believe it."],
 correctIndex: 1
},
{
 question: "Mike: I wonder if you could help me with this problem. <br>Jane: .......",
 options: ["Probe me.", "Try me.", "Examine me.", "Practise me."],
 correctIndex: 1
},
{
 question: "Mike: 'I just can't make my mind up. What do you think?'<br>Jane: ‘.......’",
 options: ["You're up to it.", "It's up to you.", "You're up for it.", "You're up at it."],
 correctIndex: 1
},
{
 question: "Mike: 'They haven't sent me the bill for a year now. What would you do?'<br>Jane: ‘.......’",
 options: ["I'd simply forgo it.", "I'd simply forget it.", "I'd simply forbid it.", "I'd simply forecast it."],
 correctIndex: 1
},
{
 question: "Mike: 'I'm taking my driving test tomorrow.'<br>Jane: ‘.......’",
 options: ["Good fortune.", "Good luck.", "Good outcome.", "Good success."],
 correctIndex: 1
},
{
 question: "Mike: 'If the party wins the next by-election, things might get better.'<br>Jane: ‘.......’",
 options: ["There's no case of that.", "There's no chance of that.", "There's no promise of that.", "There's no concept of that."],
 correctIndex: 1
},
{
 question: "Mike: 'I wonder what she'll get up to next.'<br>Jane: ‘.......’",
 options: ["There's no finding.", "There's no knowing.", "There's no guessing.", "There's no seeing."],
 correctIndex: 1
},
{
 question: "Mike: 'Do you know how much the bill has come to?'<br>Jane: ‘.......’",
 options: ["I dare think.", "I daren't think.", "I dare to think.", "I will not dare to think."],
 correctIndex: 1
},
{
 question: "Mike: 'I assume you're following the argument, aren't you.'<br>Jane: ‘.......’",
 options: ["No, it's all German to me.", "No, it's all Greek to me.", "No, it's all Spanish to me.", "No, it's all Latin to me."],
 correctIndex: 1
},
{
 question: "Jill: 'I'm so confused, I don't know what to do.'<br>Frank: ‘.......’",
 options: ["Take it free.", "Take it easy.", "Take it light.", "Take it relaxed."],
 correctIndex: 1
},
{
 question: "Jill: 'It's going to cost a lot of money to put right, I'm afraid.'<br>Frank: ‘.......’",
 options: ["It's not the end of the day.", "It's not the end of the world.", "It's not the end of life.", "It's not the end of everything."],
 correctIndex: 1
},
{
 question: "Jill: 'What's your view of what's coming next?'<br>Frank: ‘.......’",
 options: ["Things can only grow better.", "Things can only get better.", "Things can only show better.", "Things can only appear better."],
 correctIndex: 1
},
{
 question: "John: 'That was very thoughtful of you to do that.'<br>Sue: ‘.......’",
 options: ["Forgetful.", "Forget it.", "I've forgotten.", "Don't forget it."],
 correctIndex: 1
},
{
 question: "John: 'Your advice this morning was much appreciated.'<br>Sue: ‘.......’",
 options: ["All to do with service.", "All part of the service.", "All the section of the service.", "The whole of the service."],
 correctIndex: 1
},
{
 question: "John: 'And as a special thank you for all you've done, we're treating you to a meal out.'<br>Sue: ‘.......’",
 options: ["You're very stupid.", "You're really naughty.", "You're really horrible.", "You're really wicked."],
 correctIndex: 1
},
{
 question: "Jill: 'I got that job even though you didn't think I stood a chance.'<br>Frank: ‘.......’",
 options: ["You always did!", "You never did!", "You sometimes did!", "You often did!"],
 correctIndex: 1
},
{
 question: "Jill: 'After all that effort we didn't manage to sell a single one.'<br>Frank: ‘.......’",
 options: ["What a loss!", "What a shame!", "What a job!", "What a crime!"],
 correctIndex: 1
},
{
 question: "Jill: 'Look at all the work I've done, aren't you impressed?'<br>Frank: ‘.......’",
 options: ["I am amazing!", "I am amazed!", "I amaze!", "I am being amazed!"],
 correctIndex: 1
},
{
 question: "It won't hurt .......",
 options: ["does it?", "will it?", "can it?", "did it?"],
 correctIndex: 1
},
{
 question: "She's always late .......",
 options: ["is it?", "isn't she?", "isn't it?", "was she?"],
 correctIndex: 1
},
{
 question: "Sarah: 'She hates the sight of him.'<br>Paul: ‘.......’",
 options: ["She did, did she?", "She does, does she?", "She hates, does she?", "She doesn't hate, does she?"],
 correctIndex: 1
},
{
 question: "Paul: 'I spent thousands on that car.' <br>Sarah: '.......'",
 options: ["Oh, you have, have you?", "Oh you did, did you?", "Oh you do, do you?", "Oh you do, don't you?"],
 correctIndex: 1
},
{
 question: "In that case he'll have to look for a new job .......",
 options: ["shall he?", "won't he?", "isn't he?", "does he?"],
 correctIndex: 1
},
{
 question: "You shouldn't have done that .......",
 options: ["could you?", "should you?", "couldn't you?", "didn't you?"],
 correctIndex: 1
},
{
 question: "So did you give the book to .......?",
 options: ["his", "him", "he"],
 correctIndex: 1
},
{
 question: "Well, he says that he doesn't trust ........",
 options: ["yours", "you", "them"],
 correctIndex: 1
},
{
 question: "I find that difficult to believe. Do you trust .......?",
 options: ["his", "me", "my"],
 correctIndex: 1
},
{
 question: "Well I think you're being very unfair to ........",
 options: ["our", "us", "ours"],
 correctIndex: 1
},
{
 question: "Oh dear, I can see ........ That must be the book I haven't given back.",
 options: ["them", "it", "him"],
 correctIndex: 1
},
{
 question: "That's another way of saying it. I'm talking about the car ....... parked over there.",
 options: ["who's", "that's", "who"],
 correctIndex: 1
},
{
 question: "Yes, it's the best car ....... I've ever had. Why do you ask?",
 options: ["which", "that", "who"],
 correctIndex: 1
},
{
 question: "Oh no! It's a traffic warden putting a parking ticket on my car and I haven't any money to pay the fine ....... I'll have to pay.",
 options: ["whose", "which", "who"],
 correctIndex: 1
},
{
 question: "Once there was a young man who called ....... Icarus.",
 options: ["myself", "himself", "herself"],
 correctIndex: 1
},
{
 question: "He had watched birds fly by throwing ....... into the air.",
 options: ["yourselves", "themselves", "ourselves"],
 correctIndex: 1
},
{
 question: "Icarus said he would try and he promised his father: I will not injure ........",
 options: ["yourself", "myself", "ourselves"],
 correctIndex: 1
},
{
 question: "Every week I work five days and I get two days ........",
 options: ["after", "off", "not", "no"],
 correctIndex: 1
},
{
 question: "Do you like Microsoft ....... Macintosh computers more?",
 options: ["from", "or", "but", "of"],
 correctIndex: 1
},
{
 question: "....... do you like to do on the weekends?",
 options: ["How", "What", "Who", "Where"],
 correctIndex: 1
},
{
 question: "He always works ....... hard.",
 options: ["much", "very", "great", "quietly"],
 correctIndex: 1
},
{
 question: "Yesterday ....... was very sunny outside.",
 options: ["he", "it", "she", "they"],
 correctIndex: 1
},
{
 question: "Do you like hot weather ....... not?",
 options: ["but", "or", "because", "so"],
 correctIndex: 1
},
{
 question: "The sky is ....... cloudy today.",
 options: ["much", "very", "many", "a lot"],
 correctIndex: 1
},
{
 question: "Valerie spilled water ....... my paperwork.",
 options: ["in", "on", "at", "across"],
 correctIndex: 1
},
{
 question: "My boss is very ........",
 options: ["nicer", "nice", "nicest", "much nice"],
 correctIndex: 1
},
{
 question: "She likes ....... running.",
 options: ["go", "to go", "gone", "goes"],
 correctIndex: 1
},
{
 question: "....... one of you is coming to my house later?",
 options: ["Who", "Which", "Why", "How"],
 correctIndex: 1
},
{
 question: "....... would you like on your hamburger?",
 options: ["How", "What", "When", "Which"],
 correctIndex: 1
},
{
 question: "....... shoes are those?",
 options: ["Why", "Whose", "Whom", "Who"],
 correctIndex: 1
},
{
 question: "The milk goes ....... the refrigerator.",
 options: ["on", "in", "of", "at"],
 correctIndex: 1
},
{
 question: "I like to eat ice cream ....... chocolate sauce on top.",
 options: ["at", "with", "in", "to"],
 correctIndex: 1
},
{
 question: "I am ....... work right now.",
 options: ["with", "at", "of", "on"],
 correctIndex: 1
},
{
 question: "....... you please bring me my notebook?",
 options: ["Did", "Would", "Have", "Might"],
 correctIndex: 1
},
{
 question: "....... you please bring me my notebook?",
 options: ["Shall", "Could", "May", "Must"],
 correctIndex: 1
},
{
 question: "....... I ride with you to work?",
 options: ["Would", "Can", "Let", "Have"],
 correctIndex: 1
},
{
 question: "My mom is ....... Africa.",
 options: ["of", "from", "to", "out"],
 correctIndex: 1
},
{
 question: "There are 7 kids ....... my family.",
 options: ["to", "in", "of", "at"],
 correctIndex: 1
},
{
 question: "I really like ....... spaghetti.",
 options: ["of eat", "to eat", "eat", "ate"],
 correctIndex: 1
},
{
 question: "All of the walls are ....... white.",
 options: ["paint", "painted", "to paint", "painting"],
 correctIndex: 1
},
{
 question: "Do you lock the front door ....... night?",
 options: ["for", "at", "on", "from"],
 correctIndex: 1
},
{
 question: "How ....... water do you drink every day?",
 options: ["many", "much", "lots of", "very"],
 correctIndex: 1
},
{
 question: "You are a ....... honest person.",
 options: ["ton", "very", "many", "much"],
 correctIndex: 1
},
{
 question: "Do you have ....... ants in your house?",
 options: ["much", "many", "a lot", "very"],
 correctIndex: 1
},
{
 question: "If you are not taller you are ........",
 options: ["the short", "shorter", "shortest", "short"],
 correctIndex: 1
},
{
 question: "What goes up must come ........",
 options: ["over", "down", "nice", "left"],
 correctIndex: 1
},
{
 question: "Linda: I really want to go ........",
 options: ["shops", "shopping", "shop", "shopped"],
 correctIndex: 1
},
{
 question: "Linda: Yes, I ....... waiting for 30 minutes already.",
 options: ["will be", "have been", "was", "am"],
 correctIndex: 1
},
{
 question: "Linda: I don't like the ....... of that dark cloud over there.",
 options: ["sight", "look", "vision", "sign"],
 correctIndex: 1
},
{
 question: "Mike: Haven't seen you for ........",
 options: ["centuries", "ages", "periods", "times"],
 correctIndex: 1
},
{
 question: "Mike: That can ....... walking very difficult.",
 options: ["do", "make", "cause", "give"],
 correctIndex: 1
},
{
 question: "Linda: Of ....... I mustn't forget the pains in my feet.",
 options: ["way", "course", "path", "lane"],
 correctIndex: 1
},
{
 question: "Linda: Have you ever ....... before? Only it's my first time in a plane and I'm a little nervous.",
 options: ["fled", "flown", "flowed", "flying"],
 correctIndex: 1
},
{
 question: "Linda: I had a ....... drinks before I came on board and that hasn't helped.",
 options: ["lot", "few", "little", "many"],
 correctIndex: 1
},
{
 question: "Mike: That means that the engines are warming ........ It won't be long now.",
 options: ["off", "up", "over", "in"],
 correctIndex: 1
},
{
 question: "Charles: I don't think I've ....... you before in this pub.",
 options: ["see", "seen", "seeing", "saw"],
 correctIndex: 1
},
{
 question: "Charles: That's really ....... I find that difficult to believe.",
 options: ["amaze", "amazing", "amazes", "amazed"],
 correctIndex: 1
},
{
 question: "Deborah: Yes, that's right. He's not talking today because he's got a ....... throat.",
 options: ["sick", "sore", "ill", "hurt"],
 correctIndex: 1
},
{
 question: "Diner: In that ....... I'll try the roast beef.",
 options: ["example", "case", "instance", "situation"],
 correctIndex: 1
},
{
 question: "Diner: Oh this is ........ Do you have anything at all?",
 options: ["ridicule", "ridiculous", "ridiculing", "ridiculed"],
 correctIndex: 1
},
{
 question: "Woman: Me? Oh, I'm doing ......., thank you and you?",
 options: ["good", "fine", "healthy", "fit"],
 correctIndex: 1
},
{
 question: "Woman: Sorry to hear that. What ....... of problems?",
 options: ["species", "kind", "example", "group"],
 correctIndex: 1
},
{
 question: "Woman: By the way I don't know anybody ....... Charlie.",
 options: ["entitled", "called", "headed", "nominated"],
 correctIndex: 1
},
{
 question: "Mary: I do hope so. I'm very ....... of the main actor.",
 options: ["like", "fond", "amiable", "close"],
 correctIndex: 1
},
{
 question: "Mary: I've got it. ....... it's Dobson. Yes, that's it — Michael Dobson.",
 options: ["Certainly", "Surely", "Naturally", "Obviously"],
 correctIndex: 1
},
{
 question: "Michael Dobson: I'm very ......., ladies you know who I am. Now can you stop talking so that we can get on with the play?",
 options: ["certain", "glad", "clear", "clever"],
 correctIndex: 1
},
{
 question: "Old lady: The fact is I just can't ....... that cereal packet on the top shelf.",
 options: ["touch", "reach", "acquire", "access"],
 correctIndex: 1
},
{
 question: "Employee: Just tell me and I'll ....... if I can help.",
 options: ["look", "see", "glance", "watch"],
 correctIndex: 1
},
{
 question: "Mrs Ashton: Excuse me but do you know ....... this train is going to London?",
 options: ["since", "if", "how", "whenever"],
 correctIndex: 1
},
{
 question: "Mr Corp: What ....... you say that, madam?",
 options: ["forces", "makes", "does", "requires"],
 correctIndex: 1
},
{
 question: "Mrs Ashton: It was terrible because I ended ....... miles away from where I wanted to go.",
 options: ["over", "up", "through", "in"],
 correctIndex: 1
},
{
 question: "There are four girls in my apartment. Two are called Casey and Amber. ....... are Joanne and Lindsey.",
 options: ["Others", "The others", "Another", "The other"],
 correctIndex: 1
},
{
 question: "My friend has two cars. One is black and ....... is red.",
 options: ["another", "the other", "the others", "others"],
 correctIndex: 1
},
{
 question: "There are three books in my backpack. One is a maths book and ....... is a chemistry book.",
 options: ["others", "another", "the other", "the others"],
 correctIndex: 1
},
{
 question: "George was worried ....... his father's health.",
 options: ["since", "about", "on", "at"],
 correctIndex: 1
},
{
 question: "I don't have ....... to do today.",
 options: ["nothing", "anything", "everything", "any"],
 correctIndex: 1
},
{
 question: "I know ....... about it!",
 options: ["anything", "nothing", "someone", "any"],
 correctIndex: 1
},
{
 question: "I would eat ....... 24/7 if I could get away with it.",
 options: ["desert", "dessert", "deserts", "assest"],
 correctIndex: 1
},
{
 question: "There are millions of ....... people in Third World Countries.",
 options: ["pur", "poor", "pour", "pore"],
 correctIndex: 1
},
{
 question: "My husband, ....... I love, sent me flowers at work last night.",
 options: ["who", "whom", "which", "whose"],
 correctIndex: 1
},
{
 question: "....... shall I fear, but the ones who hurt me?",
 options: ["Whose", "Whom", "Who", "Which"],
 correctIndex: 1
},
{
 question: "That young man to ....... we owe some thanks, saved our mom's life on that car accident.",
 options: ["which", "whom", "who", "whose"],
 correctIndex: 1
},
{
 question: "Wow! Look at that! How ....... books do you have on your shelf? I have to tell you, it's quite a great collection!",
 options: ["much", "many", "any", "some"],
 correctIndex: 1
},
{
 question: "No, I don't have any. But I have ....... apples, if you'd like to make apple juice instead.",
 options: ["a little", "some", "any", "few"],
 correctIndex: 1
},
{
 question: "How ....... time do you have left before you have to go to school?",
 options: ["some", "much", "many", "any"],
 correctIndex: 1
},
{
 question: "Barbara, your boyfriend is waiting for you ....... in the car.",
 options: ["around", "outside", "above", "against"],
 correctIndex: 1
},
{
 question: "Suzanne who lives ....... that coffee shop place, came over to visit you this morning.",
 options: ["on", "by", "at", "in"],
 correctIndex: 1
},
{
 question: "The temperature in Washington D.C today is eight degrees ....... zero.",
 options: ["beside", "below", "behind", "between"],
 correctIndex: 1
},
{
 question: "I would have ....... all night if I could but we all had to leave early because Carmen didn't feel good.",
 options: ["sing", "sung", "sang", "singed"],
 correctIndex: 1
},
{
 question: "The board meeting was called ....... due to the sudden demise of the chief executive office.",
 options: ["for", "off", "to", "out"],
 correctIndex: 1
},
{
 question: "The finance director has come in ....... a lot of criticism over his unsuccessful handling of the company's investments.",
 options: ["back", "for", "to", "on"],
 correctIndex: 1
},
{
 question: "Low consumer demand has forced the retailer to mark ....... a wide range of goods by as much as 40%.",
 options: ["up", "down", "back", "off"],
 correctIndex: 1
},
{
 question: "He was married fifty years ........",
 options: ["before now", "ago", "long before", "long ago"],
 correctIndex: 1
},
{
 question: "I ....... at six o'clock in the morning every day.",
 options: ["awake", "wake up", "get up from my bed", "leave my bed"],
 correctIndex: 1
},
{
 question: "That book isn't in right now but we can ....... one for you.",
 options: ["book", "order", "instruct", "command"],
 correctIndex: 1
},
{
 question: "....... me as soon as possible. It's urgent.",
 options: ["Phone call", "Call", "Call up", "Telephone call"],
 correctIndex: 1
},
{
 question: "I've been so busy with new clients that I hired new staff just to ........",
 options: ["upkeep", "keep up", "keep", "persist"],
 correctIndex: 1
},
{
 question: "....... people like this area a lot.",
 options: ["Elder", "Older", "The old", "More elder"],
 correctIndex: 1
},
{
 question: "It's one of the nicest countries ........",
 options: ["on the earth", "in the world", "on the globe", "on the world"],
 correctIndex: 1
},
{
 question: "You should ....... after you've finished your lessons.",
 options: ["come to my home", "come over", "come into my home", "get to my home"],
 correctIndex: 1
},
{
 question: "She was hoping the terrible argument would ....... before the wedding.",
 options: ["blow away", "blow over", "carry away", "blow down"],
 correctIndex: 1
},
{
 question: "The movie was very shocking because it is ....... a true story that took place in our state.",
 options: ["based through", "based on", "found through", "coming from"],
 correctIndex: 1
},
{
 question: "The manager was surprised at how many things Ron could ....... at once.",
 options: ["make", "do", "made", "did"],
 correctIndex: 1
},
{
 question: "His mother forced him to ....... his homework every night after supper.",
 options: ["make", "do", "made", "did"],
 correctIndex: 1
},
{
 question: "The teacher suggested they ....... another exercise to understand the problem better.",
 options: ["make", "do", "made", "did"],
 correctIndex: 1
},
{
 question: "We only have one more pot of stew — will it .......?",
 options: ["make", "do", "made", "did"],
 correctIndex: 1
},
{
 question: "He's been suffering ....... migraine headaches again.",
 options: ["with", "from", "of", "about"],
 correctIndex: 1
},
{
 question: "To get a job as a secretary, you must be good ....... typing and answering phones.",
 options: ["for", "at", "with", "about"],
 correctIndex: 1
},
{
 question: "Due to his new shift, he has to wake up ....... 3 a.m. every day.",
 options: ["in", "at", "on", "from"],
 correctIndex: 1
},
{
 question: "Mary is so pleased ....... her students' grades this past year.",
 options: ["for", "with", "at", "along"],
 correctIndex: 1
},
{
 question: "I'm not quite ready yet — I have to ....... my hair.",
 options: ["make", "do", "made", "did"],
 correctIndex: 1
},
{
 question: "....... countries have a coastline on the Mediterranean Sea?",
 options: ["What", "Which", "Where", "Who"],
 correctIndex: 1
},
{
 question: "....... year did the first commercial aviation flight take place?",
 options: ["When", "What", "Where", "Which"],
 correctIndex: 1
},
{
 question: "My uncle died ....... the war.",
 options: ["while", "during", "for"],
 correctIndex: 1
},
{
 question: "I hurt my leg ....... the third quarter of the basketball match.",
 options: ["while", "during", "for"],
 correctIndex: 1
},
{
 question: "....... my stay in hospital, the nurses looked after me very well.",
 options: ["While", "During", "For"],
 correctIndex: 1
},
{
 question: "They ....... leaving for the airport when I last saw them.",
 options: ["was", "were", "did", "had"],
 correctIndex: 1
},
{
 question: "The employees ....... informed last night that their company was going into receivership.",
 options: ["was", "were", "did", "had"],
 correctIndex: 1
},
{
 question: "How many times ....... your travel documents checked before you boarded the airplane?",
 options: ["was", "were", "did", "had"],
 correctIndex: 1
},
{
 question: "He migrated to Istanbul five years ........",
 options: ["since", "ago", "for", "at"],
 correctIndex: 1
},
{
 question: "The artist had been painting ....... two decades before he sold his first painting.",
 options: ["during", "for", "since", "on"],
 correctIndex: 1
},
{
 question: "Shakespeare was born ....... 23 April, 1564.",
 options: ["since", "on", "in", "at"],
 correctIndex: 1
},
{
 question: "We always eat a roast dinner ....... Christmas day.",
 options: ["in", "on", "at", "since"],
 correctIndex: 1
},
{
 question: "I've been studying Italian ....... I was five years old.",
 options: ["for", "since", "ago", "on"],
 correctIndex: 1
},
{
 question: "This morning I received a cheque in the mail ....... one thousand dollars.",
 options: ["about", "for", "on", "with"],
 correctIndex: 1
},
{
 question: "I'm tired of cooking every night. Let's eat out ....... a change.",
 options: ["on", "for", "to", "in"],
 correctIndex: 1
},
{
 question: "Please meet me at the train station in ....... hour from now.",
 options: ["a", "an", "the"],
 correctIndex: 1
},
{
 question: "I couldn't believe my eyes when I saw ....... elephant crossing the road in front of my school yesterday.",
 options: ["a", "an", "the"],
 correctIndex: 1
},
{
 question: "I've got ....... salad sandwiches for my lunch today.",
 options: ["a", "some", "any"],
 correctIndex: 1
},
{
 question: "There are ....... grapes in the fridge.",
 options: ["a", "some", "any"],
 correctIndex: 1
},
{
 question: "We need to buy ....... bread rolls if you want to make hotdogs for your lunch.",
 options: ["a", "some", "any"],
 correctIndex: 1
},
{
 question: "For ....... did Shelia make these cookies.",
 options: ["who", "whom", "which", "what"],
 correctIndex: 1
},
{
 question: "....... of the names did you choose for the puppy?",
 options: ["What", "Which", "Who", "Whom"],
 correctIndex: 1
},
{
 question: "....... has completed the assignment?",
 options: ["Who's", "Who", "Whom", "Which"],
 correctIndex: 1
},
{
 question: "These warm chocolate chip cookies melt in ....... mouth.",
 options: ["its", "your", "yours"],
 correctIndex: 1
},
{
 question: "....... hand shot up when the teacher asked for volunteers.",
 options: ["Their", "Her", "Mine"],
 correctIndex: 1
},
{
 question: "I don't mind helping you bake a cake, but just make sure you ....... everything when you've finished.",
 options: ["put out", "put away", "sort out", "bring up"],
 correctIndex: 1
},
{
 question: "The government wants to ....... a new scheme to encourage people to start their own businesses.",
 options: ["work out", "try out", "find out", "run out"],
 correctIndex: 1
},
{
 question: "Agatha Christie ....... have a happy marriage.",
 options: ["wasn't", "didn't", "isn't"],
 correctIndex: 1
},
{
 question: "She ....... for eleven days in December 1926.",
 options: ["evaporated", "disappeared", "departed"],
 correctIndex: 1
},
{
 question: "Agatha Christie didn't tell ....... why she disappeared in December 1926.",
 options: ["someone", "anyone", "no one"],
 correctIndex: 1
},
{
 question: "My teeth were hurting ....... I made an appointment to go the dentist.",
 options: ["or", "so", "but"],
 correctIndex: 1
},
{
 question: "I wanted to go to the rock concert ....... all the tickets were already sold out.",
 options: ["so", "but", "and"],
 correctIndex: 1
},
{
 question: "I wanted to eat sushi for dinner ....... I went to a Japanese restaurant.",
 options: ["but", "so", "or"],
 correctIndex: 1
},
{
 question: "I wanted to eat fish for lunch ....... the fish and chip shop had closed for the day.",
 options: ["or", "but", "so"],
 correctIndex: 1
},
{
 question: "My wife hates it if I leave the lid off the ....... after I have finished brushing my teeth.",
 options: ["toothbrush", "toothpaste", "tootache"],
 correctIndex: 1
},
{
 question: "My father told me that I will get a ....... if I eat too much chocolate.",
 options: ["toothpaste", "toothache", "toothpick"],
 correctIndex: 1
},
{
 question: "Nora asked the waiter to bring her a ....... after she had finished eating her dessert.",
 options: ["toothbrush", "toothpick", "toothache"],
 correctIndex: 1
},
{
 question: "He takes the optimistic view and talks about a ....... skies scenario.",
 options: ["red", "blue", "white", "yellow"],
 correctIndex: 1
},
{
 question: "The reason why I feel so ....... today is because it's my birthday and no-one has sent me any cards.",
 options: ["red", "blue", "white", "black"],
 correctIndex: 1
},
{
 question: "He tends to forget things very quickly and behaves more and more like the typical ....... professor.",
 options: ["clear-minded", "absent-minded", "well-minded", "cool-minded"],
 correctIndex: 1
},
{
 question: "The one thing my family will always remember about Grace was the many ....... of kindness that she showed us in her long life.",
 options: ["deeds", "acts", "actions", "feats"],
 correctIndex: 1
},
{
 question: "If you're not careful you'll find that because of your generous nature, she'll start taking ....... of you.",
 options: ["part", "advantage", "consideration", "prominence"],
 correctIndex: 1
},
{
 question: "You'll notice that as soon as the children come home from school, the dog will jump up and show its great ....... for them.",
 options: ["infection", "affection", "affectation", "protection"],
 correctIndex: 1
},
{
 question: "They ....... from the fire unhurt.",
 options: ["evaded", "escaped", "avoided", "abstained"],
 correctIndex: 1
},
{
 question: "He has lots of money and ....... two houses in the city.",
 options: ["holds", "owns", "occupies", "possesses"],
 correctIndex: 1
},
{
 question: "What time do you ....... up in the morning?",
 options: ["do", "get", "make", "take"],
 correctIndex: 1
},
{
 question: "They are very good friends and ....... on well with each other.",
 options: ["do", "get", "make", "take"],
 correctIndex: 1
},
{
 question: "Most of the telephone lines were destroyed in the storm last night and so it's almost impossible to ....... through to anybody today.",
 options: ["do", "get", "make", "take"],
 correctIndex: 1
},
{
 question: "A farmer had two sons both of whom were not very ....... and avoided work if they could.",
 options: ["industrial", "industrious", "industry", "industrialist"],
 correctIndex: 1
},
{
 question: "He told them that there was a ....... treasure in the land and they would have to look for it when he had gone.",
 options: ["unseen", "hidden", "concealed", "obscured"],
 correctIndex: 1
},
{
 question: "They worked really hard and dug every single ....... metre of their father's land.",
 options: ["block", "square", "cube", "pure"],
 correctIndex: 1
},
{
 question: "Yesterday I ....... to an archeological site because I want to be an archeologist.",
 options: ["go", "went", "visited"],
 correctIndex: 1
},
{
 question: "If I want to pass my exams, I ....... study very hard.",
 options: ["can", "must", "will"],
 correctIndex: 1
},
{
 question: "When we walked in to the school, we saw that the students were working very ........",
 options: ["hardly", "hard", "easy"],
 correctIndex: 1
},
{
 question: "I've forgotten the name of my teacher but I think it is something like ........",
 options: ["brown", "Smith", "jones"],
 correctIndex: 1
},
{
 question: "What is the name of the ....... you put tea into?",
 options: ["think", "thing", "thinking"],
 correctIndex: 1
},
{
 question: "I'm tired of waiting for buses, I'm going there ....... foot.",
 options: ["with", "on", "to", "by"],
 correctIndex: 1
},
{
 question: "If you want to have your central heating checked, you need a ....... plumber.",
 options: ["knowing", "trained", "learned", "careful"],
 correctIndex: 1
},
{
 question: "When a film is really boring in the cinema, I tend to nod ........",
 options: ["out", "off", "to", "through"],
 correctIndex: 1
},
{
 question: "That ......., they walked out of the room in total silence.",
 options: ["told", "said", "telling", "saying"],
 correctIndex: 1
},
{
 question: "It's no good trying to persuade me because I'm not ....... a word.",
 options: ["tells", "saying", "telling", "told"],
 correctIndex: 1
},
{
 question: "....... us that story again!",
 options: ["Say", "Tell", "Tells", "Says"],
 correctIndex: 1
},
{
 question: "In the ....... moments of the symphony someone's mobile phone started ringing.",
 options: ["close", "closing", "shut", "shutting"],
 correctIndex: 1
},
{
 question: "In view of the limited amount of information and evidence the case was now considered to be ........",
 options: ["closing", "closed", "shutting", "shut"],
 correctIndex: 1
},
{
 question: "The food here is quite good although the menu is quite ........",
 options: ["elementary", "basic", "easy", "fundamental"],
 correctIndex: 1
},
{
 question: "It can be very irritating when the waiter ....... to bring what you have ordered.",
 options: ["forgot", "forgets", "forgetting", "forgotten"],
 correctIndex: 1
},
{
 question: "You can't compare the ....... of watching live theatre with watching a film.",
 options: ["knowledge", "experience", "understanding", "knowing"],
 correctIndex: 1
},
{
 question: "Are you one of those people who never goes to see a play until you've read the ....... in the newspaper?",
 options: ["writers", "reviews", "opinions", "notes"],
 correctIndex: 1
},
{
 question: "There are always special ....... in her tragedies that move you to tears.",
 options: ["constituents", "elements", "particles", "ingredients"],
 correctIndex: 1
},
{
 question: "Lightning never strikes in the same place ........",
 options: ["before", "twice", "secondly", "thrice"],
 correctIndex: 1
},
{
 question: "It's all right to tell a ....... lie.",
 options: ["red", "white", "blue", "black"],
 correctIndex: 1
},
{
 question: "Never let the ....... grow under your feet.",
 options: ["weeds", "grass", "flowers", "bulbs"],
 correctIndex: 1
},
{
 question: "As there are so many dishes on the menu, would you like me to ....... something to eat?",
 options: ["decide", "suggest", "offer", "consider"],
 correctIndex: 1
},
{
 question: "It is always more relaxing to eat in a restaurant where the faces of the staff are ....... and know everyone by name.",
 options: ["familiarized", "familiar", "familiarly", "familiarity"],
 correctIndex: 1
},
{
 question: "The place was so full of people and tables that the waiter had to ....... us through the crowds to our table.",
 options: ["show", "guide", "conduct", "enable"],
 correctIndex: 1
},
{
 question: "The success of a really good meal is that not only must it taste good but it should also look good and thus ....... to your eye.",
 options: ["attract", "appeal", "attend", "appear"],
 correctIndex: 1
},
{
 question: "Although I'd made up my mind to do it last night now I'm not sure and am getting cold ....... about it.",
 options: ["hands", "feet", "legs", "arms"],
 correctIndex: 1
},
{
 question: "Since the argument we've had about the garden hedge, our neighbours take no notice of us and give us the cold ....... when they see us.",
 options: ["ankle", "shoulder", "elbow", "hand"],
 correctIndex: 1
},
{
 question: "The police have set up a special hot ....... so that people can get in touch to find out about the accident.",
 options: ["connection", "line", "communication", "phone"],
 correctIndex: 1
},
{
 question: "That's better I've got a clearer ........",
 options: ["sight now", "view now", "picture now", "vision now"],
 correctIndex: 1
},
{
 question: "There are a lot of people there in the car park and they're ........",
 options: ["sailing their arms about", "waving their arms about", "turning their arms about", "driving their arms about"],
 correctIndex: 1
},
{
 question: "Now I can see quite clearly that the big red car has ........",
 options: ["stricken the little blue one", "struck the little blue one", "stroked the little blue one", "stuck the little blue"],
 correctIndex: 1
},
{
 question: "I think the best way is to tell you a story that ........",
 options: ["clears the difference", "explains the difference", "expounds the difference", "exposes the difference"],
 correctIndex: 1
},
{
 question: "If you say 'I shall' then you are talking ........",
 options: ["on the future", "about the future", "to the future", "for the future"],
 correctIndex: 1
},
{
 question: "The man in the river keeps ........",
 options: ["calling off 'I will drown, I will drown'", "calling out 'I will drown, I will drown'", "calling to 'I will drown, I will drown'", "calling from 'I will drown, I will drown'"],
 correctIndex: 1
},
{
 question: "They found plenty of food and decided to stop and ........",
 options: ["take rest", "take a rest", "take resting", "take rested"],
 correctIndex: 1
},
{
 question: "They panicked and ........",
 options: ["flew for their lives", "fled for their lives", "flowed for their lives", "fleeing for their lives"],
 correctIndex: 1
},
{
 question: "Jane: Sorry you can protest if you like but it doesn't ........",
 options: ["break any ice with me", "cut any ice with me", "freeze any ice with me", "make any ice with me"],
 correctIndex: 1
},
{
 question: "Mike: Give it to me. Very interesting! He says he broke the glass by accident and ........",
 options: ["he's soundly apologetic", "he's deeply apologetic", "he's sorry apologetic", "he's purely apologetic"],
 correctIndex: 1
},
{
 question: "Alan: Well, I only asked — there's no need to bite my ....... off!",
 options: ["nose", "head", "arm", "leg"],
 correctIndex: 1
},
{
 question: "Alan: I see and what is the ....... you are working on?",
 options: ["duty", "task", "work", "goal"],
 correctIndex: 1
},
{
 question: "User: Yes, they would do if you didn't ....... in asking questions.",
 options: ["continue", "persist", "insist", "pursue"],
 correctIndex: 1
},
{
 question: "Did you hear the story about the woman who said she could tell the .......?",
 options: ["coming", "future", "going", "next"],
 correctIndex: 1
},
{
 question: "Her name was Mary Smith and she had a ....... for telling people what was going to happen.",
 options: ["title", "reputation", "description", "idea"],
 correctIndex: 1
},
{
 question: "The strange thing was that she never actually used her ....... to benefit herself.",
 options: ["giving", "gift", "gave", "given"],
 correctIndex: 1
},
{
 question: "The plan was to pretend to ....... her house late one night and see if she was really any good at knowing it was going to happen.",
 options: ["steal", "burgle", "rob", "enter"],
 correctIndex: 1
},
{
 question: "As Mr Andrews was about to leave he found a note pinned to his door. It was from Mary Smith advising him to be careful because she has just bought a ....... young guard dog.",
 options: ["severe", "ferocious", "harsh", "spiteful"],
 correctIndex: 1
},
{
 question: "Well, unfortunately as I had one glass too many last night, I guess I should go for ....... of the dog.",
 options: ["a foot", "a hair", "a nose", "an ear"],
 correctIndex: 1
},
{
 question: "Are you sure your new boss isn't married? — Yes, honestly, I have it straight from the horse's ........",
 options: ["back", "mouth", "foot", "nose"],
 correctIndex: 1
},
{
 question: "One winter's day when the sun was shining you could hear the ....... of great activity.",
 options: ["move", "sound", "moving", "sounding"],
 correctIndex: 1
},
{
 question: "They were so ....... in their work that they didn't notice a grasshopper.",
 options: ["enveloped", "engrossed", "encompassed", "enlarged"],
 correctIndex: 1
},
{
 question: "The ants shook their heads at him and asked him why he hadn't ....... up food in the summer.",
 options: ["stood", "stored", "stoked", "stopped"],
 correctIndex: 1
},
{
 question: "The poor grasshopper ....... he had spent the whole summer enjoying himself singing and dancing.",
 options: ["confused", "confessed", "continued", "contented"],
 correctIndex: 1
},
{
 question: "He told the house dog he found it very ....... having to do all the hard work.",
 options: ["annoyed", "annoying", "annoys", "annoy"],
 correctIndex: 1
},
{
 question: "The house dog asked him not to pick on him if he wanted to ....... someone.",
 options: ["accuse", "blame", "disapprove", "fault"],
 correctIndex: 1
},
{
 question: "One day a hare looked at a tortoise and ....... the short feet of the tortoise.",
 options: ["laughed", "ridiculed", "ridiculous", "laughter"],
 correctIndex: 1
},
{
 question: "The hare shot ahead and then decided to ....... down at the side of the path for a rest.",
 options: ["lay", "lie", "laid", "lain"],
 correctIndex: 1
},
{
 question: "When he woke up, he couldn't ....... his eyes because there was the tortoise crossing the finishing line.",
 options: ["understand", "believe", "comprehend", "follow"],
 correctIndex: 1
},
{
 question: "The detective story is sometimes called 'whodunit' because the reader has to work ....... who did it, who committed the crime.",
 options: ["in", "out", "off", "over"],
 correctIndex: 1
},
{
 question: "As the plot ......., you find yourself agreeing with one character's solution and then another's.",
 options: ["undoes", "unfolds", "unties", "unfurls"],
 correctIndex: 1
},
{
 question: "One of the best known detectives is Agatha Christie's Hercule Poirot who uses what he calls his little grey ....... — his brains.",
 options: ["molecules", "cells", "particles", "atoms"],
 correctIndex: 1
},
{
 question: "The thing that always surprises me is the fact that the murderer bothers to take ....... in the final meeting.",
 options: ["partition", "part", "parting", "parted"],
 correctIndex: 1
},
{
 question: "Anyone seeking ....... of life on Mars is likely to be disappointed.",
 options: ["clarity", "evidence", "witness", "index"],
 correctIndex: 1
},
{
 question: "This ....... in the life on Mars argument comes just when it is closest to Earth in 60.000 years.",
 options: ["turn", "twist", "corner", "angle"],
 correctIndex: 1
},
{
 question: "Researchers are also looking into the possibility of one day launching a manned ....... to Mars.",
 options: ["sending", "mission", "destination", "explore"],
 correctIndex: 1
},
{
 question: "Unfortunately the dust storms tend to ....... the view of the planet.",
 options: ["fog", "obscure", "confuse", "darken"],
 correctIndex: 1
},
{
 question: "One long hot summer I turned ....... waiting as my method of getting cash.",
 options: ["into", "to", "down", "aside from"],
 correctIndex: 1
},
{
 question: "The one hotel that hadn't turned ....... my application was situated right in the middle of a forest.",
 options: ["out", "down", "into", "aside from"],
 correctIndex: 1
},
{
 question: "The tramp turned ....... to be a distant relative but hadn't said anything to the old lady because he knew she was completely deaf.",
 options: ["into", "out", "down", "to"],
 correctIndex: 1
},
{
 question: "When I turned ....... for work on my first day, the hotel had already been flourishing for 5 years.",
 options: ["to", "up", "down", "over"],
 correctIndex: 1
},
{
 question: "Some people had turned ....... on the off chance.",
 options: ["away", "up", "into", "to"],
 correctIndex: 1
},
{
 question: "I suppose breakfast is the most difficult task to turn your hand ....... because there are so many variations of drink, cereal, egg and bread.",
 options: ["down", "to", "over", "in"],
 correctIndex: 1
},
{
 question: "You had to stand there for ages while each guest made up their mind, turning ....... the choices in their minds.",
 options: ["down", "over", "in", "into"],
 correctIndex: 1
},
{
 question: "One morning an old lady turned ....... at the dining room and sat down.",
 options: ["on", "up", "aside", "around"],
 correctIndex: 1
},
{
 question: "'You'll be like that one day' she continued, Just you wait'. I turned ....... to apologize.",
 options: ["around", "back", "on", "against"],
 correctIndex: 1
},
{
 question: "She rather turned ....... me after that.",
 options: ["out", "against", "back", "in"],
 correctIndex: 1
},
{
 question: "I'm afraid you've left that food too long out of the fridge and now it's ........",
 options: ["become flat", "become rotten", "become rich", "become stale"],
 correctIndex: 1
},
{
 question: "George had a very well paid contract with a television advertiser of garden peas and he didn't want to fall out ....... the company.",
 options: ["of", "with", "over", "under"],
 correctIndex: 1
},
{
 question: "In the end the pressure became too much for George and he confessed his ....... secret.",
 options: ["guilt", "guilty", "gilt", "gilded"],
 correctIndex: 1
},
{
 question: "I don't care what you say, I reckon I could beat you at chess ....... day of the week.",
 options: ["some", "any", "each", "every"],
 correctIndex: 1
},
{
 question: "After all the discussions and debates it was our speaker who ....... the day.",
 options: ["scored", "won", "found", "ended"],
 correctIndex: 1
},
{
 question: "I don't know exactly when we'll go but we really must visit them one of ....... days.",
 options: ["this", "these", "that", "those"],
 correctIndex: 1
},
{
 question: "You can ....... on me, have no fear about that!",
 options: ["support", "rely", "hold", "hang"],
 correctIndex: 1
},
{
 question: "When it comes to the vote, you can ....... on me to support you.",
 options: ["stand", "count", "number", "figure"],
 correctIndex: 1
},
{
 question: "He was delighted that she hadn't ....... him down when he proposed to her.",
 options: ["put", "turned", "placed", "switched"],
 correctIndex: 1
},
{
 question: "The police officer asked him why he hadn't reported the matter earlier and he said simply that it had never ....... his mind.",
 options: ["travelled", "crossed", "found", "discovered"],
 correctIndex: 1
},
{
 question: "I tried to show an interest in her future career but she simply told me to mind my own ........",
 options: ["state", "business", "activities", "actions"],
 correctIndex: 1
},
{
 question: "Why didn't you ....... up for work yesterday?",
 options: ["to", "turn", "keep", "make"],
 correctIndex: 1
},
{
 question: "I'm sorry I'm not sure I can ....... it across any better.",
 options: ["show", "put", "pick", "get"],
 correctIndex: 1
},
{
 question: "Right. What's this? Oh no, you're ....... me out of the firm.",
 options: ["leaving", "throwing", "paying", "shutting"],
 correctIndex: 1
},
{
 question: "As it was very late when he came home he was as quiet as a ....... in order not to wake anybody up.",
 options: ["cat", "mouse", "dog", "rat"],
 correctIndex: 1
},
{
 question: "There were lots of rumours about what the son had done but as it was a very wealthy family the father tried very hard to ....... everything up.",
 options: ["quiet", "hush", "stop", "silence"],
 correctIndex: 1
},
{
 question: "In view of the embarrassment that might be caused if the story came out, she promised not to ....... a word about it.",
 options: ["send", "breathe", "mouth", "open"],
 correctIndex: 1
},
{
 question: "It really is a crying ....... that after all that money has been spent, the project is now being abandoned.",
 options: ["shock", "shame", "disgust", "pity"],
 correctIndex: 1
},
{
 question: "For crying out ....... how many times do I have to tell you how to work that machine?",
 options: ["strong", "loud", "full", "hard"],
 correctIndex: 1
},
{
 question: "There was a noisy crowd of about a dozen people in ....... cry chasing after the child who'd stolen an apple from the fruit market.",
 options: ["strong", "full", "loud", "big"],
 correctIndex: 1
},
{
 question: "Ladies and gentlemen, I want to thank you for your ....... of our performance.",
 options: ["appearance", "appreciation", "appeasement", "apparition"],
 correctIndex: 1
},
{
 question: "Don't worry I'm sure it's only ....... and that he'll soon recover before the next performance.",
 options: ["temperate", "temporary", "contemporary", "temporarily"],
 correctIndex: 1
},
{
 question: "I think that the main ....... for all this emotion is probably the way you have reacted to the play.",
 options: ["ratio", "reason", "ration", "rate"],
 correctIndex: 1
},
{
 question: "The reason for this is possibly that you thought it was a ....... but in fact it is a tragedy.",
 options: ["comic", "comedy", "comedian", "comely"],
 correctIndex: 1
},
{
 question: "Will the driver of the blue Ford Fiesta XYZ 343 please ....... their car.",
 options: ["send", "move", "take", "tow"],
 correctIndex: 1
},
{
 question: "This is a customer ........ We have a special offer at the moment on bananas.",
 options: ["audition", "announcement", "statement", "prediction"],
 correctIndex: 1
},
{
 question: "We have to inform our customers that the store will be closing in half an hour's ........",
 options: ["o'clock", "time", "hour", "duration"],
 correctIndex: 1
},
{
 question: "A final ....... for the driver of the Ford Fiesta: there is no need now to repark as our delivery lorry has done that for you!",
 options: ["note", "message", "saying", "hint"],
 correctIndex: 1
},
{
 question: "The train now ....... at the platform 6 is the 10.45 for London.",
 options: ["sitting", "standing", "waiting", "remaining"],
 correctIndex: 1
},
{
 question: "The train for London at platform 6 is still there and is not ....... to leave for at least 20 minutes.",
 options: ["intended", "expected", "proposed", "awaited"],
 correctIndex: 1
},
{
 question: "We thought for a moment that the 10.45 for London might be about to catch fire but it was a ....... alarm.",
 options: ["wrong", "FALSE", "difficult", "general"],
 correctIndex: 1
},
{
 question: "Welcome to Radio News and now over to our ....... who's covering the procession this morning.",
 options: ["reviewer", "reporter", "announcer", "introducer"],
 correctIndex: 1
},
{
 question: "There is a long line of soldiers on horseback marching to the sound of a ....... band.",
 options: ["copper", "brass", "zinc", "aluminium"],
 correctIndex: 1
},
{
 question: "Oh dear, listeners, I shall have to return you to the studio because the policeman says he is going to ....... me.",
 options: ["seize", "arrest", "grasp", "hold"],
 correctIndex: 1
},
{
 question: "I have known Sally and Paul since we were at school ........",
 options: ["towards", "together", "to us", "to them"],
 correctIndex: 1
},
{
 question: "Then they both left school and both started working, as you can ......., for the same company.",
 options: ["vision", "imagine", "credit", "visualize"],
 correctIndex: 1
},
{
 question: "As you probably know the Tranquillity Party stands for peace and ....... in the countryside.",
 options: ["quite", "quiet", "quietly", "quieten"],
 correctIndex: 1
},
{
 question: "Naturally all the ....... are requested to be as peaceful as possible and above all not to shout.",
 options: ["partygoers", "participants", "partakers", "partisans"],
 correctIndex: 1
},
{
 question: "....... this is a very small figure in comparison with the other major political parties.",
 options: ["Confessing", "Admittedly", "Admits", "Confession"],
 correctIndex: 1
},
{
 question: "The critics ....... to praise the work of this director whatever films he makes.",
 options: ["run", "continue", "persist", "insist"],
 correctIndex: 1
},
{
 question: "The theme of the second film is quite simply a ....... of the first.",
 options: ["construction", "continuation", "continuum", "continuing"],
 correctIndex: 1
},
{
 question: "It's very difficult to make him enjoy himself, relax and take it easy because he always behaves like a stuffed ........",
 options: ["suit", "shirt", "jacket", "coat"],
 correctIndex: 1
},
{
 question: "If you really want to lose weight, the only way is to eat less and stop stuffing your ....... every five minutes!",
 options: ["throat", "face", "teeth", "tongue"],
 correctIndex: 1
},
{
 question: "I don't really approve of all this discussion about people behind their backs — it's a bit like ....... stories.",
 options: ["speaking", "telling", "saying", "uttering"],
 correctIndex: 1
},
{
 question: "She did write one or two novels but she is best known for her excellent ....... stories.",
 options: ["brief", "short", "abrupt", "sudden"],
 correctIndex: 1
},
{
 question: "She's ....... a high at the moment because everything is going her way.",
 options: ["in", "on", "for", "at"],
 correctIndex: 1
},
{
 question: "You'll just have to get used to these highs and ....... as it's all part of being in business.",
 options: ["downs", "lows", "falls", "fails"],
 correctIndex: 1
},
{
 question: "The moment she joined the staff you just knew she was a high ....... and it was no surprise when she got promotion within six weeks.",
 options: ["sailor", "flier", "pilot", "goer"],
 correctIndex: 1
},
{
 question: "Nothing unusual you might say but we haven't visited a cinema for ........",
 options: ["periods", "ages", "times", "lengths"],
 correctIndex: 1
},
{
 question: "It will come as no ....... to you I'm sure if I tell you that this interest was in a love affair.",
 options: ["damage", "surprise", "concern", "interest"],
 correctIndex: 1
},
{
 question: "And the sound is much greater too. During the war scenes I was jumping up and down out of my seat like a ....... in the box at every explosion.",
 options: ["John", "Jack", "Jim", "James"],
 correctIndex: 1
},
{
 question: "The burglar also had an assistant with him who clearly didn't want to get involved and have a piece of the ....... and fled.",
 options: ["activity", "action", "act", "acting"],
 correctIndex: 1
},
{
 question: "He told him he was a wicked person and further he was a ....... piece of work.",
 options: ["horrible", "nasty", "disgusting", "bad"],
 correctIndex: 1
},
{
 question: "This castle has been here since the 16th century and hasn't really changed — it has stood the test of ........",
 options: ["duration", "time", "history", "length"],
 correctIndex: 1
},
{
 question: "Obviously before you buy a car, you'll be allowed to test ....... it first.",
 options: ["travel", "drive", "try", "conduct"],
 correctIndex: 1
},
{
 question: "It was one of those sights that you never forget it was ........",
 options: ["fine", "awesome", "interesting", "clear"],
 correctIndex: 1
},
{
 question: "I agree with what you say, ....... but ...",
 options: ["wholly", "basically", "quickly", "simply"],
 correctIndex: 1
},
{
 question: "It's difficult to see how to get out of this situation because we're between a rock and a ....... place.",
 options: ["difficult", "hard", "soft", "firm"],
 correctIndex: 1
},
{
 question: "Yes, it's a slight problem but quite honestly I wouldn't lose any ....... over it if I were you.",
 options: ["rest", "sleep", "time", "slumber"],
 correctIndex: 1
},
{
 question: "To be frank I find these philosophical discussions too deep for me and many of the points are lost ....... me.",
 options: ["to", "on", "for", "by"],
 correctIndex: 1
},
{
 question: "At the very last minute she broke down in tears and lost her ........",
 options: ["skill", "nerve", "sense", "feeling"],
 correctIndex: 1
},
{
 question: "When it came to dividing the profits we lost ....... because we didn't get our fair share.",
 options: ["off", "out", "in", "through"],
 correctIndex: 1
},
{
 question: "There's no harm in trying your luck there because after all you have ....... to lose.",
 options: ["less", "nothing", "a little", "least"],
 correctIndex: 1
},
{
 question: "May I ask you whether you have had a chance to ....... my case?",
 options: ["convene", "consider", "contend", "construct"],
 correctIndex: 1
},
{
 question: "May I make another ....... to ask you to explain the situation more clearly?",
 options: ["assault", "attempt", "attraction", "advice"],
 correctIndex: 1
},
{
 question: "We should be delighted to find out when the new scheme comes into ........",
 options: ["affect", "effect", "infect", "confect"],
 correctIndex: 1
},
{
 question: "When are you thinking of buying a ....... washing machine?",
 options: ["novel", "new", "recent", "actual"],
 correctIndex: 1
},
{
 question: "Look out, there's a car ....... on your left.",
 options: ["driving", "approaching", "guiding", "conducting"],
 correctIndex: 1
},
{
 question: "Watch it, you almost ....... my eye out with that umbrella.",
 options: ["pointed", "poked", "placed", "pumped"],
 correctIndex: 1
},
{
 question: "Hang on, you've given me the wrong ........ I gave you a ten-pound note.",
 options: ["difference", "change", "alternation", "account"],
 correctIndex: 1
},
{
 question: "Excuse me, but you have ....... your car lights on.",
 options: ["placed", "left", "found", "tested"],
 correctIndex: 1
},
{
 question: "You look ....... in that dress, Amanda. How beautiful you are.",
 options: ["startling", "stunning", "stretching", "starting"],
 correctIndex: 1
},
{
 question: "I honestly can't believe that you are ....... enough to have such grown up children.",
 options: ["wise", "old", "grown", "clear"],
 correctIndex: 1
},
{
 question: "You certainly don't look your ........ What's your secret?",
 options: ["old", "age", "worth", "type"],
 correctIndex: 1
},
{
 question: "You really ....... see that film because I know you'll like it.",
 options: ["will", "should", "could"],
 correctIndex: 1
},
{
 question: "I say to myself each morning I really ....... write that letter.",
 options: ["can", "must", "might"],
 correctIndex: 1
},
{
 question: "You should take an umbrella with you today, it ....... rain later.",
 options: ["must", "might", "will"],
 correctIndex: 1
},
{
 question: "And what was more ....... I had got no money.",
 options: ["interesting", "important", "valuable", "vital"],
 correctIndex: 1
},
{
 question: "He was ....... up with people he met every so often",
 options: ["eaten", "fed", "consumed", "digested"],
 correctIndex: 1
},
{
 question: "He described the ....... very carefully.",
 options: ["processing", "sequence", "follows", "followed"],
 correctIndex: 1
},
{
 question: "The next ....... was to draw some cold water, fill the kettle and make a cup of tea.",
 options: ["foot", "step", "pace", "stride"],
 correctIndex: 1
},
{
 question: "At first I got on famously finding the right pigeonholes, checking Ted's list and putting the letters in ........",
 options: ["bounds", "bundles", "bonds", "bounded"],
 correctIndex: 1
},
{
 question: "I had to ....... do with a bicycle that looked as though it had been hit several times.",
 options: ["try", "make", "end", "take"],
 correctIndex: 1
},
{
 question: "I was beginning to feel like a ....... Father Christmas.",
 options: ["sort", "real", "type", "kind"],
 correctIndex: 1
},
{
 question: "I did just that but in my ....... I dropped a small packet that fell into a puddle.",
 options: ["hurry", "haste", "speed", "hasting"],
 correctIndex: 1
},
{
 question: "In my kitchen I looked at the address and saw the recipient was a Master Richard. I was ashamed of my .......",
 options: ["coward", "cowardice", "cowardly", "cowards"],
 correctIndex: 1
},
{
 question: "You have to turn this from left to right — in other words clock........",
 options: ["way", "wise", "path", "route"],
 correctIndex: 1
},
{
 question: "It's an amazing system so that at whatever time of day you can always get a response as the staff are there ....... the clock.",
 options: ["along", "round", "about", "down"],
 correctIndex: 1
},
{
 question: "When do you finish work or more exactly what time do you clock .......?",
 options: ["over", "off", "through", "in"],
 correctIndex: 1
},
{
 question: "One of the indicators of success in any business is how ....... types of communication channels they use.",
 options: ["much", "many", "lot", "lots"],
 correctIndex: 1
},
{
 question: "It goes without ....... that there are more goals that can be achieved with your business than simply generating revenue.",
 options: ["talking", "saying", "asking", "arguing"],
 correctIndex: 1
},
{
 question: "Especially large corporations ....... on an international scale create and pursue a human resources policy covering many different aspects.",
 options: ["operates", "operating", "operation", "operated"],
 correctIndex: 1
},
{
 question: "She soon got to know one of the local big wigs (important people) in a local organisation ....... at stopping cruelty to animals.",
 options: ["shot", "aimed", "hit", "struck"],
 correctIndex: 1
},
{
 question: "They lived in a des res (very attractive house) and her father, John Fortune, who was really a bit of a fat cat (wealthy businessman) thought that all this animal ....... was a lot of hocus pocus (nonsense).",
 options: ["matter", "business", "concerns", "topic"],
 correctIndex: 1
},
{
 question: "After all she thought her brother was enjoying himself and had gone ....... to work in America as a result of the brain drain (talented people leaving their own country to work for better pay in another).",
 options: ["astray", "abroad", "alone", "afar"],
 correctIndex: 1
},
{
 question: "But Cathy had made up her ....... and the next morning wham bam (very quickly) she caught the early train and went off to the rally.",
 options: ["brain", "mind", "thought", "decision"],
 correctIndex: 1
},
{
 question: "and people who had been running about pell mell (in confusion) were now standing ....... and listening to the speeches.",
 options: ["quiet", "still", "upright", "quite"],
 correctIndex: 1
},
{
 question: "But then there are those who are never happy unless they have a problem to ........",
 options: ["dissolve", "solve", "cut", "release"],
 correctIndex: 1
},
{
 question: "Now Andrew doesn't have a romantic ........ He never looks up at the leaves starting to grow, sighs and says: Ah, here comes the spring!",
 options: ["constitution", "disposition", "institution", "position"],
 correctIndex: 1
},
{
 question: "Towards the end of this story I give examples to show the extent of the change he ........",
 options: ["undertook", "underwent", "understood", "underdid"],
 correctIndex: 1
},
{
 question: "She too lives in this ....... and remote village where Andrew has his cottage.",
 options: ["minor", "tiny", "unimportant", "wretched"],
 correctIndex: 1
},
{
 question: "But you must remember that two years ago the two main characters hadn't met, which was surprising when you consider the close ....... of Andrew's cottage and Sally's.",
 options: ["approximation", "proximity", "standing", "placing"],
 correctIndex: 1
},
{
 question: "It was late April and the sun had disappeared behind dark heavy rain clouds but Andrew had already set ....... for the local pub.",
 options: ["up", "off", "to", "by"],
 correctIndex: 1
},
{
 question: "Andrew showed him the headlines: 'Petrol prices rise again' — 'But you haven't got a car' said his friend — 'I know' retorted Andrew — 'still it means everything ....... will go up in price, too.'",
 options: ["too", "else", "other", "also"],
 correctIndex: 1
},
{
 question: "For probably the first time in his life Andrew actually ....... his worry from himself to someone else.",
 options: ["preferred", "transferred", "offered", "differed"],
 correctIndex: 1
},
{
 question: "I'll ....... you know as soon as I come back from London. And then she went.",
 options: ["permit", "let", "allow", "leave"],
 correctIndex: 1
},
{
 question: "....... seconds he rushed out of the pub leaving his coat behind, ran into the pouring rain with no umbrella.",
 options: ["Outside", "Within", "Without", "Inside"],
 correctIndex: 1
},
{
 question: "Six weeks ....... this extraordinary episode Sally got married.",
 options: ["later", "after", "sooner", "through"],
 correctIndex: 1
},
{
 question: "He ....... calm.",
 options: ["stands", "stays", "rests", "relaxes"],
 correctIndex: 1
},
{
 question: "As he says, 'I know what everyone was ........'",
 options: ["dreaming", "thinking", "supposing", "believing"],
 correctIndex: 1
},
{
 question: "She smiled at me when we were standing ....... the altar.",
 options: ["in", "at", "on", "through"],
 correctIndex: 1
},
{
 question: "After the storm ....... finished, many people were found lying in the street.",
 options: ["has", "had", "were", "did"],
 correctIndex: 1
},
{
 question: "Sometimes I wonder if I ....... ever succeed.",
 options: ["do", "shall", "am", "were"],
 correctIndex: 1
},
{
 question: "It's time we ........",
 options: ["go", "went", "are going", "going"],
 correctIndex: 1
},
{
 question: "I've just been ....... here that man has been released.",
 options: ["reads", "reading", "read", "have read"],
 correctIndex: 1
},
{
 question: "When I'm in town, I ....... listening to the birds.",
 options: ["missing", "miss", "misses", "missed"],
 correctIndex: 1
},
{
 question: "Come on tell me honestly what you ....... to do now.",
 options: ["wanted", "want", "are wanting", "will want"],
 correctIndex: 1
},
{
 question: "There's a very informative programme on the radio tonight on ....... affairs.",
 options: ["actual", "current", "positive", "factual"],
 correctIndex: 1
},
{
 question: "Student: Yes, I want to be able to speak ........",
 options: ["good", "well", "goodly", "proper"],
 correctIndex: 1
},
{
 question: "Student: Just because you are a ....... speaker.",
 options: ["natural", "native", "national", "nature"],
 correctIndex: 1
},
{
 question: "Teacher: Well, if you ......., I could give you lessons next week.",
 options: ["love", "like", "would", "desire"],
 correctIndex: 1
},
{
 question: "Student: Well I know that they usually come ....... a noun.",
 options: ["on", "before", "after", "under"],
 correctIndex: 1
},
{
 question: "Student: If I had to choose one, I would ....... in.",
 options: ["turn", "pick", "touch", "pluck"],
 correctIndex: 1
},
{
 question: "Teacher: Excellent. Now if I wanted to describe my time in Paris in 1999 with the verb 'stay', what ....... I say?",
 options: ["am", "would", "ought", "have"],
 correctIndex: 1
},
{
 question: "Student: That's one I never understand ....... hard I try.",
 options: ["whenever", "however", "wherever", "whatever"],
 correctIndex: 1
},
{
 question: "Teacher: Right ....... one more. Tell me which form you use if you are going to leave Paris and you tell someone about the length of time from your arrival till now.",
 options: ["simply", "just", "justly", "alone"],
 correctIndex: 1
},
{
 question: "They've been seeing each other for 6 months now or, as we used to say, they've been walking ....... together.",
 options: ["in", "out", "through", "off"],
 correctIndex: 1
},
{
 question: "He came into the room, shouted at everybody and then left the room walking ....... in a really bad temper.",
 options: ["down", "off", "over", "to"],
 correctIndex: 1
},
{
 question: "knew we shouldn't have trusted them because they suddenly left and walked ....... on us.",
 options: ["in", "out", "above", "to"],
 correctIndex: 1
},
{
 question: "Even when he won the ....... knees competition at a holiday camp he wasn't ashamed — he just loved it.",
 options: ["knobbly", "wobbly", "cobbled", "wobbled"],
 correctIndex: 1
},
{
 question: "His father told him he was special as he dandled him ....... his knee.",
 options: ["by", "on", "up", "through"],
 correctIndex: 1
},
{
 question: "Shortly after that he ....... down on one knee and proposed marriage to her and she accepted him.",
 options: ["threw", "went", "walked", "leant"],
 correctIndex: 1
},
{
 question: "It's almost completed now because all we have to do is sign a few documents and then the paper....... is finished.",
 options: ["job", "work", "task", "function"],
 correctIndex: 1
},
{
 question: "The professor is ....... an important paper on sociolinguistics tonight in the main hall.",
 options: ["speaking", "delivering", "talking", "holding"],
 correctIndex: 1
},
{
 question: "Do you know how many ....... of wallpaper is needed to decorate this room?",
 options: ["strands", "rolls", "strips", "sizes"],
 correctIndex: 1
},
{
 question: "....... all right.",
 options: ["This is", "That's", "There is", "That has"],
 correctIndex: 1
},
{
 question: "Sarah: I know but this time I ....... it.",
 options: ["have meant", "mean", "had meant", "will mean"],
 correctIndex: 1
},
{
 question: "Mike: If I ......., I know I shall regret it.",
 options: ["have", "do", "had", "were"],
 correctIndex: 1
},
{
 question: "Sarah: Thank you very much. I shall be as quiet as a mouse but ....... just put the TV on.",
 options: ["I'd", "I'll", "I've", "I'm"],
 correctIndex: 1
},
{
 question: "....... he been more careful, he would have spotted the mistake.",
 options: ["Were", "Had", "Has", "Is"],
 correctIndex: 1
},
{
 question: "If only I'd invested in that company, I'd ....... a millionaire by now.",
 options: ["became", "have become", "had become", "would become"],
 correctIndex: 1
},
{
 question: "Mr. Wally's class was so monotonous today I couldn't help ....... a few times.",
 options: ["sleeping", "dozing off", "waking up", "resting"],
 correctIndex: 1
},
{
 question: "I feel so ....... today. I should have gone to bed earlier last night.",
 options: ["dreamy", "sleepy", "asleep", "relaxed"],
 correctIndex: 1
},
{
 question: "Every time he gets back from work, my husband likes to sit in his armchair and ....... for a few minutes before dinnertime.",
 options: ["sleep away", "rest", "slumber", "snore"],
 correctIndex: 1
},
{
 question: "My ....... is to explain the different uses of the tenses.",
 options: ["problem", "plan", "situation", "thought"],
 correctIndex: 1
},
{
 question: "The problem is ....... you can tell the difference",
 options: ["what", "how", "which", "where"],
 correctIndex: 1
},
{
 question: "particular tenses ....... I've talked about tenses in general.",
 options: ["since", "before", "although", "if"],
 correctIndex: 1
},
{
 question: "So let's go ....... to the beginning.",
 options: ["on", "back", "for", "over"],
 correctIndex: 1
},
{
 question: "....... are the Simple and the Continuous.",
 options: ["Them", "They", "Their", "Theirs"],
 correctIndex: 1
},
{
 question: "He lives in a small house that's another ........",
 options: ["picture", "illustration", "image", "painting"],
 correctIndex: 1
},
{
 question: "Menopause symptoms may ....... after stopping menopausal hormone therapy.",
 options: ["come by", "come back", "come out", "come across"],
 correctIndex: 1
},
{
 question: "I was just wondering how astronomers ....... their facts when you realise just how far away the stars are.",
 options: ["come out with", "come up with", "come along", "come out"],
 correctIndex: 1
},
{
 question: "It was reported that the Government is expected to ....... stringent norms to prevent 'predatory takeovers' of Indian private banks.",
 options: ["come along", "come up with", "come across", "come out"],
 correctIndex: 1
},
{
 question: "My attorney advised me ....... the terms and conditions of the insurance policy several times so that I was fully aware of what I was getting myself into.",
 options: ["to look after", "to look over", "to look into", "to look up"],
 correctIndex: 1
},
{
 question: "I ....... my laptop in car, in my office and even under the bed, but I couldn't find it anywhere.",
 options: ["looked at", "looked for", "looked after", "looked over"],
 correctIndex: 1
},
{
 question: "Airport authorities advised passengers to ....... suspicious looking people passing through the international terminal.",
 options: ["look for", "look out for", "look after", "look at"],
 correctIndex: 1
},
{
 question: "Students were given five minutes to ....... the examination paper before they were told to start writing.",
 options: ["look after", "look through", "look into", "look up"],
 correctIndex: 1
},
{
 question: "She's going to look after the cat ....... I'm away on holiday.",
 options: ["until", "while", "before", "before"],
 correctIndex: 1
},
{
 question: "Our doctor advised us to have malaria vaccinations ....... we travel to Lombok.",
 options: ["until", "before", "as soon as", "as long as"],
 correctIndex: 1
},
{
 question: "There are some 'natural' methods that you can try to ....... labour if you and your baby are in good health.",
 options: ["bring to", "bring on", "bring out", "bring over"],
 correctIndex: 1
},
{
 question: "U2 will not ....... the online release of the band's new album, following news that it has leaked onto the Internet.",
 options: ["bring out", "bring forward", "bring back", "bring up"],
 correctIndex: 1
},
{
 question: "The slips fieldsman moved quickly to his left and then flung himself further left-wards to ....... a spectacular catch.",
 options: ["bring forward", "bring off", "bring back", "bring up"],
 correctIndex: 1
},
{
 question: "How much money do I need to ....... to your house for the poker game tonight?",
 options: ["bring out", "bring over", "bring to", "bring up"],
 correctIndex: 1
},
{
 question: "What are you going to buy your wife for Christmas? ........",
 options: ["I picked it up yesterday", "A bottle of perfume", "She received jewelry from her mother"],
 correctIndex: 1
},
{
 question: "What is your favorite kind of food? ........",
 options: ["I ate Mexican food yesterday", "I like Italian food", "Korean cuisine is very spicy"],
 correctIndex: 1
},
{
 question: "What are your thoughts on yesterday's meeting? ........",
 options: ["I think the president will be there", "I'm glad we covered the human resources' issue", "We should bring up the workers' concerns"],
 correctIndex: 1
},
{
 question: "Where is the best place to go for a drink? ........",
 options: ["I'll meet you there after work", "The little pub around the corner has great beer on tap", "La Cantina has some great food"],
 correctIndex: 1
},
{
 question: "Joanne left abruptly — without rhyme or ........",
 options: ["verse", "reason", "cause", "record"],
 correctIndex: 1
},
{
 question: "He bent over ....... to please his boss but the manager was never satisfied.",
 options: ["forward", "backwards", "both ways", "sideways"],
 correctIndex: 1
},
{
 question: "Ray: I need a vacation. <br>Toni: How about Mexico? I heard it's beautiful at this time of year. <br>Ray: Maybe, but I was hoping for somewhere a little cooler. <br>Question: Where does Ray want to go? ........",
 options: ["Mexico because it's beautiful at this time of year", "A place that has a cooler climate than Mexico", "The Bahamas"],
 correctIndex: 1
},
{
 question: "Frank: I'm going to take my wife to Table Top Mountain this weekend. <br>Mark: That sounds interesting. Is it far? <br>Frank: Not too far. It will be about a three-hour drive from here. <br>Question: How are Frank and his wife traveling to Table Top Mountain? ........",
 options: ["By plane", "By car", "By ship"],
 correctIndex: 1
},
{
 question: "Ron: Do you think the business conference went well? <br>Sarah: Yes, but next year I think the planners should include more about global technology. <br>Ron: I agree. We should know more about that. <br>Question: What area does Sarah want to include in next year's conference? ........",
 options: ["The environment", "Technology around the world", "Technology and modern business"],
 correctIndex: 1
},
{
 question: "Axel: Do you know anything about Thai cuisine? <br>Caroline: Yes, I love Thai food. Why? <br>Axel: My in-laws are taking my wife and I out to a Thai restaurant tonight. They really like that kind of food. <br>Question: Who is going for dinner at the Thai restaurant? ........",
 options: ["Axel and his wife", "Axel, his wife and her parents", "Axel, his wife and his parents"],
 correctIndex: 1
},
{
 question: "Jane: How many people were at Brad's wedding? <br>Bruce: Oh, there must have been at least 150 people there. The reception hall was really big and it was nearly full of guests. We had a great time. <br>Jane: That's great. <br>Question: How many people were at Brad's wedding? ........",
 options: ["Much more than 150 people", "About 150 people", "Less than 150 people"],
 correctIndex: 1
},
{
 question: "After years of working for a shoddy employer I was finally able to ....... from that company and set up my own business.",
 options: ["break off", "break away", "break out", "break up"],
 correctIndex: 1
},
{
 question: "Teachers in Sydney have decided to call a snap strike next week after negotiations with the State Government over a ten per cent pay increase ....... early this morning.",
 options: ["broke into", "broke down", "broke open", "broke up"],
 correctIndex: 1
},
{
 question: "A rebel Labour Party MP recently decided to ....... from his party and become and independent member for his electorate.",
 options: ["break off", "break away", "break out", "break up"],
 correctIndex: 1
},
{
 question: "I decided to invest in the commodities market as the ....... on offer from bank was at an all time low.",
 options: ["increase", "interest", "rent", "tax"],
 correctIndex: 1
},
{
 question: "Many retailers in Jakarta refuse to exchange purchases unless you can show them your ........",
 options: ["recipe", "receipt", "bill", "change"],
 correctIndex: 1
},
{
 question: "When a fire broke out at the Louvre, at least twenty ....... paintings were destroyed, including two by Henri Matisse.",
 options: ["worthless", "priceless", "valueless", "useless"],
 correctIndex: 1
},
{
 question: "Hillary Clinton has not ruled out ....... president at the next election.",
 options: ["running off", "running for", "running against", "running down"],
 correctIndex: 1
},
{
 question: "It's so nice to ....... you again after all this time. I don't think I've seen you for at least twenty years.",
 options: ["run out", "run into", "run after", "run off"],
 correctIndex: 1
},
{
 question: "My mum had a ....... with my teacher for not allowing me to go to the toilet during class.",
 options: ["run-on", "run-in", "rundown", "run-off"],
 correctIndex: 1
},
{
 question: "There has been a sharp increase in the number of boat people ....... to Australia in the past ten years.",
 options: ["arriving", "traveling", "departing", "transiting"],
 correctIndex: 1
},
{
 question: "Australian citizens who are receiving social security benefits from the government are not permitted to ....... tourists wanting to travel to Australia.",
 options: ["benefactor", "sponsor", "giver", "donor"],
 correctIndex: 1
},
{
 question: "Our English teacher at school is so ........ He is always coming up with new games that help make learning fun.",
 options: ["bland", "creative", "talkative", "trustworthy"],
 correctIndex: 1
},
{
 question: "I told my son that I would take me to the circus next week ....... he keeps his promise not to fight with his sister.",
 options: ["as good as", "as long as", "as soon as", "as much as"],
 correctIndex: 1
},
{
 question: "I will accept your marriage proposal ....... you promise to love me and take care of me forever.",
 options: ["as good as", "as long as", "as soon as", "as much as"],
 correctIndex: 1
},
{
 question: "Rampant corruption in Indonesia will continue to happen ....... the government continues to deny that the problem exists.",
 options: ["as good as", "as long as", "as soon as", "as much as"],
 correctIndex: 1
},
{
 question: "Many anti-war protesters think that the President of the United States should withdraw his troops from Iraq ....... possible.",
 options: ["as long as", "as soon as", "as good as", "as much as"],
 correctIndex: 1
},
{
 question: "I was wondering if you can ....... me to play the violin?",
 options: ["assist", "teach", "learn", "study"],
 correctIndex: 1
},
{
 question: "Would you ....... this letter to the Post Office, please?",
 options: ["send", "take", "retrieve", "fetch"],
 correctIndex: 1
},
{
 question: "I hate doing the ....... — especially cleaning the windows.",
 options: ["homework", "housework", "jobs", "groundwork"],
 correctIndex: 1
},
{
 question: "Childcare is currently available for Kindergarten children on a Tuesday and a Thursday ....... from 1.00 p.m. to 3.00 p.m.",
 options: ["afterthought", "afternoon", "aftertaste", "afterbirth"],
 correctIndex: 1
},
{
 question: "Children who ....... of school face a high risk of sexual exploitation, hazardous labor, and living in the street.",
 options: ["drop off", "drop out", "drop behind", "drop in"],
 correctIndex: 1
},
{
 question: "Students who are required to pass a test to enter the 9th grade are more likely to ....... prior to entering 10th grade.",
 options: ["drop off", "drop out", "drop behind", "drop in"],
 correctIndex: 1
},
{
 question: "Unannounced visits are usual on campus, and guests are always welcome. Friends sometimes ....... one another, but it is mostly relatives who visit each other, and mothers who frequently meet with their daughters.",
 options: ["drop off", "drop in on", "drop behind", "drop in"],
 correctIndex: 1
},
{
 question: "I can make myself ........ I do it by taking in a deep breath and then pushing all that air down. It takes me about 15 seconds.",
 options: ["pass up", "pass out", "pass over", "pass by"],
 correctIndex: 1
},
{
 question: "The ....... game is just a preadolescent version of autoerotic asphyxia paraphilia.",
 options: ["pass through", "pass out", "pass by", "pass over"],
 correctIndex: 1
},
{
 question: "It is the passenger's responsibility to ensure their ....... is valid for entry and theyhave fulfilled all immigration requirements in the country of destination.",
 options: ["endorsement", "passport", "document", "papers"],
 correctIndex: 1
},
{
 question: "Passengers are required to retrieve their ....... as soon as it is available for collection at their place of destination.",
 options: ["ticket", "baggage", "boarding pass", "passport"],
 correctIndex: 1
},
{
 question: "The ....... on your camera may not be able to light the entire subject at distances of less than 40 centimeters.",
 options: ["lens", "flash", "zoom", "microphone"],
 correctIndex: 1
},
{
 question: "To reduce the amount of memory each image occupies, pictures are ....... as they are saved to the memory card.",
 options: ["enlarged", "compressed", "spread out", "deleted"],
 correctIndex: 1
},
{
 question: "Our poor old dog is ........ We've had him for fourteen years. He just sleeps all day long.",
 options: ["dead", "dying", "death", "die"],
 correctIndex: 1
},
{
 question: "Helen is planning to ....... with Michael.",
 options: ["marry", "elope", "engage", "divorce"],
 correctIndex: 1
},
{
 question: "Marriage ceremonies must take place ....... 6 a.m. and 10 p.m. in a room with an open door in Manitoba.",
 options: ["after", "between", "from", "during"],
 correctIndex: 1
},
{
 question: "You can receive, display, edit and/or send text messages on any network that has a ....... agreement.",
 options: ["multimedia messaging service", "roaming", "short message service", "mailbox"],
 correctIndex: 1
},
{
 question: "When you receive an MMS message on your phone, the message ....... is displayed along with a tone, illumination and/or vibration.",
 options: ["box", "icon", "key", "connector"],
 correctIndex: 1
},
{
 question: "President Bush said last Saturday that ....... of Iraq now is not an option and rejected calls by some lawmakers to start bringing U.S. troops home.",
 options: ["pulling off", "pulling out", "pulling through", "pulling in"],
 correctIndex: 1
},
{
 question: "Rescue teams rushed to the site and started ....... bodies from beneath the wreckage of the five-storied Al Ghaza hotel.",
 options: ["pulling in", "pulling out", "pulling through", "pulling down"],
 correctIndex: 1
},
{
 question: "Train passengers wishing to go to the football match were advised to ....... the train at the next stop.",
 options: ["get on with", "get off", "get in", "get on"],
 correctIndex: 1
},
{
 question: "The referee instructed both captains to stop their complaining and ....... the rugby match.",
 options: ["get by with", "get on with", "get through with", "get by with"],
 correctIndex: 1
},
{
 question: "Would you rather ....... for a picnic or a meal at a restaurant?",
 options: ["go off", "go out", "go on", "go over"],
 correctIndex: 1
},
{
 question: "....... the railroad tracks, and at the traffic light, go straight. The street becomes Broad St. as you cross over Main St. Continue to the next stoplight on Broad St. and turn right onto Markham Ave. The library is the first building on the left.",
 options: ["Go back", "Go over", "Go out", "Go off"],
 correctIndex: 1
},
{
 question: "Sherri tries to ....... Marcie all the time.",
 options: ["act up", "act like", "seeming like"],
 correctIndex: 1
},
{
 question: "Lenny didn't ....... when his superior reprimanded him.",
 options: ["back up", "back down", "back over"],
 correctIndex: 1
},
{
 question: "Norman is really aggressive and sometimes he should know when to ........",
 options: ["back up", "back off", "back over"],
 correctIndex: 1
},
{
 question: "After the tragic accident, Lauren's mother had a nervous ........",
 options: ["breakup", "breakdown", "breakthrough"],
 correctIndex: 1
},
{
 question: "No one in the group could believe that Sally and Steve ........",
 options: ["broke over", "broke up", "broke apart"],
 correctIndex: 1
},
{
 question: "Marty often ....... important issues at the meetings.",
 options: ["brought down", "brought up", "brought over"],
 correctIndex: 1
},
{
 question: "Everyone could see by the grimace on his face that he didn't ....... the meal in front of him.",
 options: ["care on", "care for", "care of"],
 correctIndex: 1
},
{
 question: "Due to his illness, he worked hard to ....... with his missed schoolwork.",
 options: ["catch on", "catch up", "catch"],
 correctIndex: 1
},
{
 question: "People have ....... against each other in bowling for thousands of years.",
 options: ["originated", "competed", "enjoyed", "gained"],
 correctIndex: 1
},
{
 question: "Alethea Gibson ....... to play tennis on the streets of New York City.",
 options: ["earned", "learned", "competed", "excelled"],
 correctIndex: 1
},
{
 question: "Please place the umbrella stand ....... the door.",
 options: ["across", "beside", "through", "before"],
 correctIndex: 1
},
{
 question: "You can get extra supplies ....... the stationery store.",
 options: ["with", "from", "about", "during"],
 correctIndex: 1
},
{
 question: "The airplane flew ....... the storm.",
 options: ["about", "above", "along", "ahead"],
 correctIndex: 1
},
{
 question: "....... elephants are sleeping under the shade of the elm tree over there.",
 options: ["These", "Those", "This", "That"],
 correctIndex: 1
},
{
 question: "The pilot calmly steered us through ....... big cloud.",
 options: ["this", "that", "these", "those"],
 correctIndex: 1
},
{
 question: "....... film that dad saw last week seems like an interesting movie to watch.",
 options: ["These", "That", "This", "Those"],
 correctIndex: 1
},
{
 question: "Builders use plywood in the construction of small boats ....... it is easy to shape.",
 options: ["although", "because", "after", "while"],
 correctIndex: 1
},
{
 question: "The concert will end at 10.30 p.m. ....... the audience insists on several encores.",
 options: ["while", "unless", "though", "as"],
 correctIndex: 1
},
{
 question: "One person who made ....... a career based on the sea was Rachel Carson.",
 options: ["himself", "herself", "itself", "myself"],
 correctIndex: 1
},
{
 question: "The bends occurs when divers raise ....... to the top too quickly.",
 options: ["ourselves", "themselves", "yourselves", "itself"],
 correctIndex: 1
},
{
 question: "The candidate ....... many voters when she ran for governor last year.",
 options: ["impress", "impressed", "will impress"],
 correctIndex: 1
},
{
 question: "Next year we ....... in the eighth grade.",
 options: ["are", "will be", "were"],
 correctIndex: 1
},
{
 question: "Her best friend ....... in that apartment building over there.",
 options: ["live", "lives", "lived"],
 correctIndex: 1
},
{
 question: "Last week we ....... 150 newspapers.",
 options: ["delivers", "delivered", "will deliver"],
 correctIndex: 1
},
{
 question: "Using their ....... and extraordinary financial resources and insider dealing, the oligarchs gained control over much of Russia's political apparatus.",
 options: ["ill mannered", "ill gotten", "ill timed", "ill advised"],
 correctIndex: 1
},
{
 question: "Some immigrants of middle-eastern descent currently living in Oregon still feel ....... after the September 11th terrorist attacks.",
 options: ["ill advised", "ill at ease", "ill mannered", "ill gotten"],
 correctIndex: 1
},
{
 question: "Frequent binge drinkers are eight times more likely than non-binge drinkers to miss a class, ....... schoolwork, get hurt or injured, and damage property.",
 options: ["fall behind", "fall behind in", "fall back on", "fall off"],
 correctIndex: 1
},
{
 question: "Our daily habits often force us to ....... all kinds of degrading and destructive events, all in the name of keeping things comfortable or familiar.",
 options: ["put up", "put up with", "put on hold", "put out"],
 correctIndex: 1
},
{
 question: "Park the car behind the van. The instructor ....... him to park the car behind the van.",
 options: ["offered", "told", "asked", "ordered"],
 correctIndex: 1
},
{
 question: "I'll give you a lift to the airport. Michelle ....... to give her husband a lift to the airport.",
 options: ["refused", "offered", "asked", "begged"],
 correctIndex: 1
},
{
 question: "The teacher said to her student: 'You need to study harder.' <br>She ....... him to study harder.",
 options: ["asked", "advised", "ordered", "begged"],
 correctIndex: 1
},
{
 question: "Whether you are looking for a job or running a company, giving out ....... is crucial to marketing your skills or services.",
 options: ["business studies", "business cards", "business hours", "business plans"],
 correctIndex: 1
},
{
 question: "The Economics & Business Education Association represents teachers and lecturers of ....... and related subjects in schools and colleges throughout the UK.",
 options: ["business hours", "business studies", "business parks", "businessmen"],
 correctIndex: 1
},
{
 question: "We offer ....... e-mail services that give you superior spam and fraud protection and a custom domain name in your e-mail, all for a reasonable price.",
 options: ["business card", "business class", "business end", "business plan"],
 correctIndex: 1
},
{
 question: "Australia is located in the Southern Hemisphere, so the ....... are opposite of those in the Northern Hemisphere.",
 options: ["times", "seasons", "months", "years"],
 correctIndex: 1
},
{
 question: "Whether you ....... in the fast pace of big city life or crave the tranquility of the desert, Australia is such a diverse country that you're likely to find exactly what you are seeking.",
 options: ["like", "thrive", "enjoy", "benefit"],
 correctIndex: 1
},
{
 question: "Americans are the greatest ....... and consumers of pizza in the world.",
 options: ["creators", "producers", "inventors", "users"],
 correctIndex: 1
},
{
 question: "Pepperoni is the pizza ....... that Americans like the most.",
 options: ["component", "topping", "part", "element"],
 correctIndex: 1
},
{
 question: "The popularity of pizza really ....... when American soldiers returned from Italy after World War II.",
 options: ["detonated", "exploded", "blasted", "blew up"],
 correctIndex: 1
},
{
 question: "A sailor from Sweden won three million dollars in the lottery and handed it to ....... shipmates and strangers in the street.",
 options: ["previous", "former", "past", "earlier"],
 correctIndex: 1
},
{
 question: "Many people ....... about what they would do with their money if they won the lottery.",
 options: ["plan", "dream", "vision", "hallucinate"],
 correctIndex: 1
},
{
 question: "Picasso's ....... of people were often made up of triangles and squares with their features in the wrong places.",
 options: ["likenesses", "portraits", "descriptions", "images"],
 correctIndex: 1
},
{
 question: "My teacher mumbled so softly that I could only ....... understand him.",
 options: ["persistently", "vaguely", "discreetly", "invariably"],
 correctIndex: 1
},
{
 question: "After I fell down the steps, I felt unsteady and ........",
 options: ["flighty", "giddy", "scatty", "squatty"],
 correctIndex: 1
},
{
 question: "During our walk along the beach we noticed the shifting reflectons on the ....... surface of the water.",
 options: ["unflinching", "undulating", "unfaltering", "undiscriminating"],
 correctIndex: 1
},
{
 question: "Spanish singing ....... Enrique Iglesias has been forced to pull out of concerts in Hong Kong and in the Philippines because of a visa problem in Malaysia.",
 options: ["heartbreak", "heartthrob", "heartbeat", "heartburn"],
 correctIndex: 1
},
{
 question: "Palpitations are ....... sensations that feel like pounding or racing.",
 options: ["heartthrob", "heartbeat", "heartbreak", "heartfelt"],
 correctIndex: 1
},
{
 question: "Bollywood ....... Hrithik Roshan pointed a finger at a gang of camera-happy Indian fans gathered to watch him shooting a film on the south bank of the river Thames.",
 options: ["heartbeat", "heartthrob", "heartache", "heartbreak"],
 correctIndex: 1
},
{
 question: "I usually ....... work at about 4:00 o'clock and run to the station to catch the train to my next job.",
 options: ["knock on", "knock off", "knock up", "knock out"],
 correctIndex: 1
},
{
 question: "Do you want me to ....... some lunch?",
 options: ["knock out", "knock up", "knock on", "knock off"],
 correctIndex: 1
},
{
 question: "A few months ago, James got a ....... his front door.",
 options: ["knock off", "knock on", "knock out", "knock up"],
 correctIndex: 1
},
{
 question: "Professional boxers don't wear head gear because their intent is to ....... their opponent.",
 options: ["knock off", "knock out", "knock up", "knock on"],
 correctIndex: 1
},
{
 question: "There wasn't much food in the cupboard, but I managed to ....... a meal for myself.",
 options: ["knock out", "knock up", "knock off", "knock on"],
 correctIndex: 1
},
{
 question: "....... the doors opened they all noticed a 5 note lying on the floor.",
 options: ["Just over", "Just before", "Just then", "Just about"],
 correctIndex: 1
},
{
 question: "Well, I am ....... 2 months in now with my new venture and business is still going strong.",
 options: ["just as", "just over", "just after", "just then"],
 correctIndex: 1
},
{
 question: "Can I get pregnant ....... my period has finished?",
 options: ["just then", "just after", "just over", "just about"],
 correctIndex: 1
},
{
 question: "Clinton defied his critics by surviving an ....... of personal scandals.",
 options: ["arraign", "array", "arrant", "arrow"],
 correctIndex: 1
},
{
 question: "As President-elect, Clinton vowed to focus on economic issues like a 'laser beam,' working especially to overcome the ....... growth of the American economy.",
 options: ["slugger", "sluggish", "slummy", "slurry"],
 correctIndex: 1
},
{
 question: "Clinton succeeded in brokering peace negotiations in Northern Ireland between ....... Catholics and Protestants.",
 options: ["sparring", "warring", "barring", "jarring"],
 correctIndex: 1
},
{
 question: "Poor people in Australia who are ....... for cash may seek financial assistance from the Salvation Army.",
 options: ["hard core", "hard up", "hard sell", "hard court"],
 correctIndex: 1
},
{
 question: "Applicants for the sales position are required to submit a ....... of their CV by Thursday, May 17th 2006 at the latest.",
 options: ["hard core", "hard copy", "hard cash", "hard court"],
 correctIndex: 1
},
{
 question: "Many amateur tennis players find it much easier to play tennis on a ....... surface as opposed to playing on a surface that is made from grass.",
 options: ["hard core", "hard court", "hard pressed", "hard cash"],
 correctIndex: 1
},
{
 question: "My wife will only let me listen to classical music if I agree to wear my ........",
 options: ["head lamps", "head phones", "head dress", "headlights"],
 correctIndex: 1
},
{
 question: "First time entrants in this years city marathon will be given a ten minute ....... over the rest of the field.",
 options: ["headland", "headstart", "head off", "headwind"],
 correctIndex: 1
},
{
 question: "We were extremely upset when we arrived at the cemetry and discovered that my late grandfather's ....... had been destroyed by vandals.",
 options: ["headset", "headstone", "headphone", "headlight"],
 correctIndex: 1
},
{
 question: "Randy always tried to ....... on rainy days.",
 options: ["cheer everyone on", "cheer everyone up", "cheer everyone"],
 correctIndex: 1
},
{
 question: "He ....... when the police officers started to question him about the robbery.",
 options: ["clammed", "clammed up", "clammed about"],
 correctIndex: 1
},
{
 question: "He wants to ....... as a mean boss so his employees will work hard for him.",
 options: ["come in", "come across", "come about"],
 correctIndex: 1
},
{
 question: "The custody battle ....... for many months.",
 options: ["dragged down", "dragged on", "dragged in"],
 correctIndex: 1
},
{
 question: "The architect ....... some blueprints for you last week.",
 options: ["drew on", "drew up", "drew down"],
 correctIndex: 1
},
{
 question: "Bruce ....... of school when he was only fifteen years old and then took on a job.",
 options: ["dropped", "dropped out", "dropped by"],
 correctIndex: 1
},
{
 question: "Rick's father and mother didn't ....... with his grandparents and were always having disagreements.",
 options: ["get about", "get along", "get"],
 correctIndex: 1
},
{
 question: "They rented a car so it would be easier to ....... the new city.",
 options: ["get on", "get around", "get"],
 correctIndex: 1
},
{
 question: "Lucy was so busy that she didn't ....... fixing the stereo.",
 options: ["get around", "get around to", "get with"],
 correctIndex: 1
},
{
 question: "He worked hard to ....... to Berkeley this past year.",
 options: ["get with", "get in", "get by"],
 correctIndex: 1
},
{
 question: "The students ....... when the teacher left the room.",
 options: ["goofed up", "goofed off", "goofed on"],
 correctIndex: 1
},
{
 question: "The company was experiencing financial problems so they had to ....... fifty employees.",
 options: ["lay on", "lay off", "lay out"],
 correctIndex: 1
},
{
 question: "Karen didn't want to ....... she she went over the wedding list one more time.",
 options: ["leave anyone in", "leave anyone out", "leave anyone over"],
 correctIndex: 1
},
{
 question: "Jeff felt as if he had been ....... when he lost his job.",
 options: ["let on", "let down", "let over"],
 correctIndex: 1
},
{
 question: "The rich family ....... poor people in this area.",
 options: ["looks down in", "looks down on", "looks down back"],
 correctIndex: 1
},
{
 question: "Norma promised she would ....... Cara's children while she was away on a business trip.",
 options: ["look in over", "look in on", "look down on"],
 correctIndex: 1
},
{
 question: "You can't tell them apart — Elena ....... her mother.",
 options: ["looks just alike", "looks just like", "looks just over"],
 correctIndex: 1
},
{
 question: "Before Sheila died from a long cancer battle, she asked her sister to ....... her children.",
 options: ["look down", "look over", "look in"],
 correctIndex: 1
},
{
 question: "He decided to ....... his past mistakes by doing some good in his community.",
 options: ["make up about", "make up for", "make up over"],
 correctIndex: 1
},
{
 question: "The deparment store has ....... its prices since the last time I was here.",
 options: ["marked over", "marked up", "marked about"],
 correctIndex: 1
},
{
 question: "The items are ....... because the manager wants to make more room for the incoming spring line.",
 options: ["marked under", "marked down", "marked over"],
 correctIndex: 1
},
{
 question: "Everyone laughed at the ....... between the twin brothers at the party.",
 options: ["mix in", "mix up", "mix over"],
 correctIndex: 1
},
{
 question: "Her father ....... when she was just a kid.",
 options: ["passed over", "passed away", "passed down"],
 correctIndex: 1
},
{
 question: "Steve was always trying to ....... girls at the nightclub.",
 options: ["pick down", "pick up", "pick by"],
 correctIndex: 1
},
{
 question: "The whole community ....... to make the playground safe and aesthetic.",
 options: ["pitched on", "pitched in", "pitched over"],
 correctIndex: 1
},
{
 question: "That store is really expensive. It's a ........",
 options: ["rip down", "rip off", "rip over"],
 correctIndex: 1
},
{
 question: "The corner store often ....... bread near the end of the week.",
 options: ["runs out over", "runs out of", "runs down on"],
 correctIndex: 1
},
{
 question: "Bob's father taught him to be firm and to ....... for what he believes.",
 options: ["stand down", "stand up", "stand in"],
 correctIndex: 1
},
{
 question: "People are getting tired of Seth because he always ....... late.",
 options: ["shows", "shows up", "shows over"],
 correctIndex: 1
},
{
 question: "Leslie decided to ....... early from the party.",
 options: ["take in", "take off", "take on"],
 correctIndex: 1
},
{
 question: "Leila was feeling blue so she went shopping to ....... some new outfits.",
 options: ["try at", "try on", "try in"],
 correctIndex: 1
},
{
 question: "The teacher asked her students to ....... the assignments by Friday at noon.",
 options: ["turn on", "turn in", "turn with"],
 correctIndex: 1
},
{
 question: "Kevin ....... all of the information and then gave the note to his wife so she could put it into a computer file.",
 options: ["took on", "took down", "took over"],
 correctIndex: 1
},
{
 question: "Ethan asked his girlfriend to ....... the music so he could clearly hear the music they were listening to in the car.",
 options: ["turn over", "turn up", "turn in"],
 correctIndex: 1
},
{
 question: "Neil liked to ....... early on Saturdays.",
 options: ["wake on", "wake up", "wake over"],
 correctIndex: 1
},
{
 question: "Beth is so afraid of flying. I think she should stop being such a ........",
 options: ["freaky cat", "scaredy cat", "afraid bird"],
 correctIndex: 1
},
{
 question: "Everyone told me I'd be ....... if I took that job on Wall Street.",
 options: ["swimming like a jellyfish", "swimming with sharks", "swimming with fish"],
 correctIndex: 1
},
{
 question: "A ....... told me it is your anniversary today. How many years is it now for you two?",
 options: ["talking parrot", "little birdie", "hummingbird"],
 correctIndex: 1
},
{
 question: "During the monsoon season, it rains ....... for nearly one whole month.",
 options: ["birds and bees", "cats and dogs", "pigs and horses"],
 correctIndex: 1
},
{
 question: "Everyone notices Rob's wife when she walks into a room. She's pretty and ........",
 options: ["fox like", "foxy", "doggy"],
 correctIndex: 1
},
{
 question: "Ethan's teachers told him he is the 'cream of the crop' of his graduating class. What does 'cream of the crop' mean? ........",
 options: ["Good", "The best", "Not so good"],
 correctIndex: 1
},
{
 question: "His drama coach 'egged him on' so he'd go onto the stage and perform as well as he did during the rehearsals. What does 'egged him on' mean? ........",
 options: ["To discourage someone", "To encourage someone", "To tell them they should be embarrassed"],
 correctIndex: 1
},
{
 question: "Keira felt like tennis was 'her cup of tea.' What does 'her cup of tea' mean? ........",
 options: ["That it's not the right thing for her", "That it's a perfect match for her", "That she should practice more"],
 correctIndex: 1
},
{
 question: "Most of Kim's teachers wanted her to 'use her noodle' more when it came to exam time. What does 'use her noodle' mean? ........",
 options: ["To act up more", "To think more", "To try more"],
 correctIndex: 1
},
{
 question: "'In a nutshell', the problem was caused by a faulty wire, said the experienced electrician. What does 'in a nutshell' mean? ........",
 options: ["To be blunt about something", "To be concise about something", "To be long and exhaustive about something"],
 correctIndex: 1
},
{
 question: "We hope there won't be much snow ....... this year but you never know.",
 options: ["about", "(none)", "on"],
 correctIndex: 1
},
{
 question: "....... last year, the weather was really bad. This year, the forecast is better.",
 options: ["In", "(none)", "About"],
 correctIndex: 1
},
{
 question: "I'm going hiking ....... the weekend. Do you want to come?",
 options: ["in", "on", "about"],
 correctIndex: 1
},
{
 question: "....... three weeks, I'm going on a camping trip. We're going to a really scenic spot.",
 options: ["On", "In", "(none)"],
 correctIndex: 1
},
{
 question: "We're going to the Botanical Gardens and ....... tomorrow, we're planning to see some more aspects this city has to offer.",
 options: ["in", "(none)", "on"],
 correctIndex: 1
},
{
 question: "....... two weeks, the project should be complete. I hope our clients approve of the new format.",
 options: ["On", "In", "About"],
 correctIndex: 1
},
{
 question: "I finished a very important project ....... two months ago. It was really intense because of the cutting edge technology we used.",
 options: ["on", "(none)", "in"],
 correctIndex: 1
},
{
 question: "I like to eat breakfast ....... the morning but today I had to skip it because I had an early meeting with the Board of Directors.",
 options: ["on", "in", "about"],
 correctIndex: 1
},
{
 question: "....... the seventeenth century, artwork in Europe was quite different from what you see today.",
 options: ["(none)", "In", "On"],
 correctIndex: 1
},
{
 question: "....... one week ago, she was told she couldn't have any more time off.",
 options: ["For", "(none)", "In"],
 correctIndex: 1
},
{
 question: "....... next month, I'm expecting my family to visit from the Virgin Islands.",
 options: ["On", "(none)", "In"],
 correctIndex: 1
},
{
 question: "....... Saturday night, we went to a great movie and then had supper with the Johnsons.",
 options: ["For", "On", "In"],
 correctIndex: 1
},
{
 question: "....... Independence Day, we always go to the fair and watch the fireworks at 11 pm.",
 options: ["About", "On", "(none)"],
 correctIndex: 1
},
{
 question: "....... midnight, the tradition is to sing a traditional song to ring in the New Year.",
 options: ["On", "At", "In"],
 correctIndex: 1
},
{
 question: "....... 2005, I finished my degree and now I'm working with a small accounting firm.",
 options: ["On", "In", "At"],
 correctIndex: 1
},
{
 question: "If you must talk, do it quietly ........",
 options: ["I trust you", "I beg you", "I follow you", "I demand you"],
 correctIndex: 1
},
{
 question: "You don't have to shout ........",
 options: ["I'm not that daft", "I'm not that deaf", "I'm not that dead", "I'm not that dumb"],
 correctIndex: 1
},
{
 question: "If the situation's that bad I suggest ........",
 options: ["you sell in", "you sell up", "you sell on", "you sell off"],
 correctIndex: 1
},
{
 question: "I wouldn't hesitate to accept that offer. If it were me ........",
 options: ["I'd bite his head off", "I'd bite his hand off", "I'd bite his nose off", "I'd bite his finger off"],
 correctIndex: 1
},
{
 question: "You can't agree with both of them ........",
 options: ["make your opinion up", "make your mind up", "make your brain up", "make your thoughts up"],
 correctIndex: 1
},
{
 question: "You're not telling me you didn't laugh once ........",
 options: ["I bet you will", "I bet you did", "I bet you have", "I bet you do"],
 correctIndex: 1
},
{
 question: "If we leave it any longer, ........",
 options: ["we'll catch the bus", "we'll miss the train", "we'll lose the train", "we'll loose the bus"],
 correctIndex: 1
},
{
 question: "As the old saying goes: ........",
 options: ["He who hesitates is found", "He who hesitates is lost", "He who hesitates is late", "He who hesitates is long"],
 correctIndex: 1
},
{
 question: "I'm giving you your last warning. If you're not ready in five minutes, ........",
 options: ["you're on your self", "you're on your own", "you're on your side", "you're on your turn"],
 correctIndex: 1
},
{
 question: "If you want us to follow your argument I suggest you ........",
 options: ["use less conspicuous words", "use less complicated words", "use less confused words", "use less concerned words"],
 correctIndex: 1
},
{
 question: "If you can't actually say the words then why don't you try ........",
 options: ["sing them", "singing them", "to have sung them", "having sung them"],
 correctIndex: 1
},
{
 question: "In her speech she expressed her ....... for all the help she had been given.",
 options: ["thankfulness", "gratitude", "gratefulness", "thanking"],
 correctIndex: 1
},
{
 question: "Start reading the story from page 4 and then go on until you ....... the end of the chapter.",
 options: ["arrive", "reach", "touch", "achieve"],
 correctIndex: 1
},
{
 question: "A useful way to ....... your vocabulary is to read as much as possible.",
 options: ["amass", "increase", "collect", "gather"],
 correctIndex: 1
},
{
 question: "Another important activity is to ....... your spoken language.",
 options: ["train", "practise", "exercise", "emphasise"],
 correctIndex: 1
},
{
 question: "Try to ....... a native speaker to talk to you so that you can record the conversation.",
 options: ["influence", "persuade", "encourage", "impress"],
 correctIndex: 1
},
{
 question: "If you manage to do all these things, it won't be long before you find yourself speaking the language ........",
 options: ["flowingly", "fluently", "knowingly", "frequently"],
 correctIndex: 1
},
{
 question: "If you want to join that club, you have to ....... a form and send it to your secretary.",
 options: ["fill up", "fill out", "fill into", "fill over"],
 correctIndex: 1
},
{
 question: "It's easy to see from the way the garden is looking that winter has ........",
 options: ["set out", "set in", "set up", "set off"],
 correctIndex: 1
},
{
 question: "Time ......., it's difficult to believe that we've been here all day.",
 options: ["flows", "flies", "flees", "files"],
 correctIndex: 1
},
{
 question: "My opinion is that they don't know what to do and are merely playing ....... time.",
 options: ["to", "for", "at", "in"],
 correctIndex: 1
},
{
 question: "The orchestra are meant to ....... time with the conductor.",
 options: ["hold", "keep", "take", "show"],
 correctIndex: 1
},
{
 question: "The parcel eventually arrived six weeks later, and not ....... time!",
 options: ["after", "before", "since", "for"],
 correctIndex: 1
},
{
 question: "In advance of drawing up the job specification and advertisement, you have to sit down and work out the ....... you have in mind for the ideal employee.",
 options: ["portrait", "profile", "picture", "sketch"],
 correctIndex: 1
},
{
 question: "After you've read the details of the job, made some notes and written a draft letter, check the details, write the final letter and then ....... your application.",
 options: ["pursue", "submit", "undergo", "undertake"],
 correctIndex: 1
},
{
 question: "I think that you've chosen a very good area of work to seek employment in because I've heard that jobs are ....... there.",
 options: ["many", "abundant", "frequent", "plenty"],
 correctIndex: 1
},
{
 question: "When you are interviewing someone, it is obviously necessary to ask questions relevant to their job experience but discussing someone's other ....... is also useful.",
 options: ["deeds", "accomplishments", "doings", "holdings"],
 correctIndex: 1
},
{
 question: "As soon as the doctor looked at her, he was able to ....... the cause of her frequent headaches.",
 options: ["decide", "diagnose", "define", "describe"],
 correctIndex: 1
},
{
 question: "He left the surgery feeling a lot better than when he arrived because the doctor had reassured him that his condition was not ........",
 options: ["clear", "serious", "determined", "possible"],
 correctIndex: 1
},
{
 question: "Under the policy of the new health regulations if you decide to cancel your ....... and don't notify the surgery, you will be fined.",
 options: ["meeting", "appointment", "rendezvous", "date"],
 correctIndex: 1
},
{
 question: "It is much easier to ....... an illness than it is to cure it.",
 options: ["prepare", "prevent", "postpone", "prefer"],
 correctIndex: 1
},
{
 question: "Interviewer: Perhaps you could start by telling us why you've ........",
 options: ["obtained for this job", "applied for this job", "intended for this job", "asked for this job"],
 correctIndex: 1
},
{
 question: "Candidate: I'm sorry I don't understand what you're ........",
 options: ["in about", "on about", "for about", "off about"],
 correctIndex: 1
},
{
 question: "Interviewer: I think there must be a mistake, I ........",
 options: ["put it you're Mr Johnson", "take it you're Mr Johnson", "place it you're Mr Johnson", "try it you're Mr Johnson"],
 correctIndex: 1
},
{
 question: "To begin with I would like to take ....... over the name itself.",
 options: ["outcome", "issue", "trouble", "pains"],
 correctIndex: 1
},
{
 question: "'Cut' I should have thought was an essential ....... of any lawnmower.",
 options: ["require", "requirement", "requires", "requiring"],
 correctIndex: 1
},
{
 question: "The first time I tried to use it, your lawnmower simply ....... over the grass but did not cut it.",
 options: ["walked", "rolled", "strode", "tripped"],
 correctIndex: 1
},
{
 question: "Finally I want someone to come and cut my grass at your ........ Yours faithfully, Herb Grass.",
 options: ["expenditure", "expense", "expending", "expends"],
 correctIndex: 1
},
{
 question: "Dear Charles I thought it was ....... time I wrote to you and told you what I've been up to.",
 options: ["in", "about", "at", "by"],
 correctIndex: 1
},
{
 question: "And now I come to a very important ....... I want to ask of you.",
 options: ["favourite", "favour", "favourable", "favouring"],
 correctIndex: 1
},
{
 question: "I can ....... you that the duties are not in any way complicated.",
 options: ["confirm", "assure", "assert", "affirm"],
 correctIndex: 1
},
{
 question: "After all why should you two continue to be free and I have to give up my .......?",
 options: ["latitude", "liberty", "scope", "immunity"],
 correctIndex: 1
},
{
 question: "Let me have your ....... as soon as possible. Your old friend, Mick.",
 options: ["return", "response", "respect", "recur"],
 correctIndex: 1
},
{
 question: "Dear Sir, having read your advertisement, I should like to ....... this letter as my application for the post of marketing manager.",
 options: ["deliver", "submit", "return", "send"],
 correctIndex: 1
},
{
 question: "I am sure I could very easily ....... all the requirements of the job.",
 options: ["complete", "fulfil", "commit", "finish"],
 correctIndex: 1
},
{
 question: "Finally I look forward to ....... from you and as you will understand I don't want to 'wait' very long. Yours faithfully, I.A.M. Hopeful.",
 options: ["hear", "hearing", "heard", "hears"],
 correctIndex: 1
},
{
 question: "I could say that we are having a wonderful time but that would be ....... from the truth.",
 options: ["distant", "far", "long", "further"],
 correctIndex: 1
},
{
 question: "These baggage handlers had decided they didn't want to ....... our cases on to the plane.",
 options: ["lead", "load", "lode", "led"],
 correctIndex: 1
},
{
 question: "On the last day of our holiday the manager of the hotel greeted us ....... from ear to ear to inform us that our luggage had arrived at reception! See you soon Meggy and Tom.",
 options: ["screaming", "beaming", "streaming", "strechting"],
 correctIndex: 1
},
{
 question: "Do you have any idea what BASE jumping .......?",
 options: ["signifies", "means", "says", "tells"],
 correctIndex: 1
},
{
 question: "Felix Baumgartner recently basejumped out of a plane 9,000 metres ....... Dover, a port on the south coast of England.",
 options: ["up", "above", "higher", "at"],
 correctIndex: 1
},
{
 question: "He started very early in the morning so that he was able to ....... commercial flights.",
 options: ["evict", "avoid", "eject", "abject"],
 correctIndex: 1
},
{
 question: "These are amazing achievements but if like me you want comfort, warmth and food on the journey, take the ferry crossing ....... 90 minutes.",
 options: ["during", "lasting", "duration", "while"],
 correctIndex: 1
},
{
 question: "The problem is that if your learner doesn't understand, you can both end up in the ........",
 options: ["side", "ditch", "drain", "floor"],
 correctIndex: 1
},
{
 question: "In my ....... none of this happened — all I did was shout and scream, which made me feel better.",
 options: ["example", "case", "instance", "incident"],
 correctIndex: 1
},
{
 question: "The only ....... to me is as they were successful on the first attempt, how come some years before it had taken me four tries!",
 options: ["confusion", "mystery", "intrigue", "unknown"],
 correctIndex: 1
},
{
 question: "Building Societies currently find themselves in a ....... situation because they try to please the savers and also the borrowers and yet one group is always going to lose.",
 options: ["perfect", "precarious", "pretentious", "pertinent"],
 correctIndex: 1
},
{
 question: "Months go by and most people forget their problems and get used to the idea of paying more and then talks ....... and the whole process starts all over again.",
 options: ["retake", "resume", "repeat", "return"],
 correctIndex: 1
},
{
 question: "They say this but then the difficulty is trying to find out when the measures are coming into effect and when they will be ........",
 options: ["rated", "ratified", "rates", "rating"],
 correctIndex: 1
},
{
 question: "Any arguments he put up in his defence were regarded as a ....... by people who were determined to see him convicted.",
 options: ["cloud", "smokescreen", "confusion", "fog"],
 correctIndex: 1
},
{
 question: "His agent spent a lot of time ....... the press on his background in the hope that they would present a balanced view.",
 options: ["training", "briefing", "showing", "clearing"],
 correctIndex: 1
},
{
 question: "Gradually however as the days went by even his greatest supporters were beginning to ....... him.",
 options: ["destroy", "desert", "despair", "destruct"],
 correctIndex: 1
},
{
 question: "Journalists however love to get hold of a story somehow but they run the risk of facing a ....... if they break the official secrects act.",
 options: ["back whip", "backlash", "backstore", "back strike"],
 correctIndex: 1
},
{
 question: "Once this disclosure is ....... it's the job of the journalist to follow it through to a satisfactory conclusion.",
 options: ["heightened", "highlighted", "high pitched", "hightailed"],
 correctIndex: 1
},
{
 question: "Here is the news read by Alan Townend. Today the Government is ....... plans for a new scheme to help society.",
 options: ["opening", "unveiling", "undoing", "showing"],
 correctIndex: 1
},
{
 question: "If child A steals child B's exercise book, child A will have to stand up in front of the school and ....... to being a thief.",
 options: ["conduce", "confess", "conduct", "conform"],
 correctIndex: 1
},
{
 question: "Last week the Prime Minister had to give an important address to an international ....... when he found his speech had disappeared.",
 options: ["assembled", "assembly", "assembling", "assembles"],
 correctIndex: 1
},
{
 question: "The worst part of the incident was that the audience did not see the funny ....... of his stories.",
 options: ["edge", "side", "line", "part"],
 correctIndex: 1
},
{
 question: "Whatever you do take no notice of him because he's not thinking straight — he's talking ....... his hat.",
 options: ["up", "through", "at", "under"],
 correctIndex: 1
},
{
 question: "At last she's made her mind up and decided to throw her hat in the ....... and become a candidate.",
 options: ["circle", "ring", "round", "middle"],
 correctIndex: 1
},
{
 question: "If you want to keep up with the latest fashion, you shouldn't wear that — it's ....... hat now.",
 options: ["late", "old", "finished", "gone"],
 correctIndex: 1
},
{
 question: "The most difficult part for the salesperson is to ....... potential customers of the usefulness of the product.",
 options: ["consider", "convince", "contract", "confirm"],
 correctIndex: 1
},
{
 question: "That style of dress was once considered to be a ....... but now it is coming back into fashion.",
 options: ["fuss", "fad", "fidget", "fun"],
 correctIndex: 1
},
{
 question: "The main business interest at the moment is to watch the supermarkets ....... for the same clientele.",
 options: ["contrasting", "competing", "concerning", "confusing"],
 correctIndex: 1
},
{
 question: "If you want to keep ....... with the latest developements in your field, you have to read the relevant magazines.",
 options: ["currant", "current", "currents", "currently"],
 correctIndex: 1
},
{
 question: "At least that's what he thought until the press started trying to ....... up something about his past.",
 options: ["push", "dig", "spade", "fork"],
 correctIndex: 1
},
{
 question: "There was even talk that incidents like this one could ....... the Government.",
 options: ["tipple", "topple", "tackle", "tickle"],
 correctIndex: 1
},
{
 question: "My job has gone because my boss has ....... me.",
 options: ["burned", "fired", "lit", "flamed"],
 correctIndex: 1
},
{
 question: "I was handed my ....... yesterday and so today I'm looking for a new job.",
 options: ["tickets", "cards", "books", "papers"],
 correctIndex: 1
},
{
 question: "They told me to go because I was said to be ....... to requirements.",
 options: ["excess", "surplus", "recess", "excessive"],
 correctIndex: 1
},
{
 question: "He just couldn't play fast and ....... with his employees any longer simply because they never knew where he was.",
 options: ["slow", "loose", "weak", "tight"],
 correctIndex: 1
},
{
 question: "He sees financial gain everywhere and never misses an opportunity to make a fast ........",
 options: ["pound", "buck", "pence", "shilling"],
 correctIndex: 1
},
{
 question: "Have you noticed how much more the price of petrol is today? It's really sky ....... now.",
 options: ["up", "high", "through", "on"],
 correctIndex: 1
},
{
 question: "I simply don't believe the scheme will ever succeed, it's just ....... in the sky.",
 options: ["meat", "pie", "food", "meals"],
 correctIndex: 1
},
{
 question: "You can see the sun if you look at the roof through the sky........",
 options: ["space", "light", "opening", "window"],
 correctIndex: 1
},
{
 question: "We're going to the college tonight to hear Professor Kent ....... a paper on language learning on the net.",
 options: ["speak", "deliver", "raise", "talk"],
 correctIndex: 1
},
{
 question: "After the first revolution the dictator no longer had much control and became just a paper ........",
 options: ["lion", "tiger", "elephant", "cat"],
 correctIndex: 1
},
{
 question: "I hung the washing out only two hours ago but it is already bone ....... thanks to the hot sunshine.",
 options: ["parched", "dry", "clear", "dried"],
 correctIndex: 1
},
{
 question: "It's impossible to say exactly why I think that's the case. All I can say is that I ....... it in my bones.",
 options: ["understand", "feel", "see", "follow"],
 correctIndex: 1
},
{
 question: "I won't go into the full details of the proposition, I'll just give you the ....... bones.",
 options: ["naked", "bare", "simple", "stripped"],
 correctIndex: 1
},
{
 question: "He told us the usual things about how everything had gone wrong — it was a typical ....... luck story.",
 options: ["solid", "hard", "stiff", "black"],
 correctIndex: 1
},
{
 question: "Last week they ....... it very lucky because they managed to win the lottery.",
 options: ["hit", "struck", "knocked", "hammered"],
 correctIndex: 1
},
{
 question: "Everyone decided to help him by offering money as they'd heard he was ....... on his luck.",
 options: ["low", "down", "off", "below"],
 correctIndex: 1
},
{
 question: "All the ....... a stage said Shakespeare, meaning life is like a play in the theatre.",
 options: ["earth's", "world's", "land's", "country's"],
 correctIndex: 1
},
{
 question: "You don't have to pay for it all at once as you can buy it in ....... stages.",
 options: ["facile", "easy", "simple", "clear"],
 correctIndex: 1
},
{
 question: "He's always been fascinated by the theatre and has spent many years doing odd jobs as a stage ........",
 options: ["worker", "hand", "man", "holder"],
 correctIndex: 1
},
{
 question: "The whole event seemed very unnatural and had clearly been stage ....... appeal to the voters before the election.",
 options: ["handled", "managed", "controlled", "developed"],
 correctIndex: 1
},
{
 question: "After a great deal of discussion a ....... was eventually found, which seemed to be what was wanted.",
 options: ["sight", "site", "seat", "sighting"],
 correctIndex: 1
},
{
 question: "Invitations were sent out and in ....... the response was quite good.",
 options: ["all", "general", "common", "ordinary"],
 correctIndex: 1
},
{
 question: "It was necessary to telephone ....... enquiries before we could get the number to ring up the railway station.",
 options: ["dictionary", "directory", "survey", "compendium"],
 correctIndex: 1
},
{
 question: "The other advantage of this particular service is that by and large the trains are ........",
 options: ["timely", "punctual", "pointed", "exact"],
 correctIndex: 1
},
{
 question: "I think he'll succeed but it's a lot of work and sometimes he feels he's bitten off more than he can ........",
 options: ["digest", "chew", "taste", "swallow"],
 correctIndex: 1
},
{
 question: "I'm very sorry to tell you that your scheme has failed and it has well and truly bitten the ........",
 options: ["powder", "dust", "fluff", "ground"],
 correctIndex: 1
},
{
 question: "I agree in general with what you have said but I'm not happy about one point and I must ....... issue with you over that.",
 options: ["bring", "take", "find", "put"],
 correctIndex: 1
},
{
 question: "The police are very keen to talk to one particular man and have issued a ....... of him.",
 options: ["naming", "description", "calling", "describing"],
 correctIndex: 1
},
{
 question: "This is going to be a difficult task but we'll get there in the end although it is a ....... nut to crack.",
 options: ["rigid", "hard", "solid", "heavy"],
 correctIndex: 1
},
{
 question: "For goodness' sake hurry up because if we don't ....... cracking soon we'll miss the bus.",
 options: ["find", "get", "use", "put"],
 correctIndex: 1
},
{
 question: "Well, I must admit that I was a bit disappointed with the exhibition after all the praise it's received — it isn't all it's cracked ....... to be.",
 options: ["off", "up", "over", "in"],
 correctIndex: 1
},
{
 question: "The other night we went to a French restaurant and it ....... to Charles to translate everything on the menu for us.",
 options: ["went", "fell", "dropped", "took"],
 correctIndex: 1
},
{
 question: "I'm afraid I don't like this sherry because I find it too ....... and I prefer something nice and dry.",
 options: ["soft", "sweet", "gentle", "tart"],
 correctIndex: 1
},
{
 question: "There was a terrible storm on the night we first stayed at the campsite but we were all right with our tent and were as dry as a ........",
 options: ["cover", "bone", "coat", "sheet"],
 correctIndex: 1
},
{
 question: "As a result of the very long heat wave last summer many of the rivers have now completely dried ........",
 options: ["off", "up", "over", "through"],
 correctIndex: 1
},
{
 question: "I'm suspicious really because at the back of my ....... I don't trust them.",
 options: ["brain", "mind", "idea", "thought"],
 correctIndex: 1
},
{
 question: "He's having trouble with his mother-in-law because she likes to control everything rather like a backseat ........",
 options: ["conductor", "driver", "doer", "goer"],
 correctIndex: 1
},
{
 question: "There's still some way to go with this latest project but I think we've ....... the back of it.",
 options: ["smashed", "broken", "hit", "crashed"],
 correctIndex: 1
},
{
 question: "He's one of those irritating people who manages within a few minutes of meeting someone to ....... their back up.",
 options: ["shift", "put", "place", "turn"],
 correctIndex: 1
},
{
 question: "I fully understand your comments and bearing those in ......., I have made the appropriate decision.",
 options: ["brain", "mind", "thought", "sense"],
 correctIndex: 1
},
{
 question: "There is really nothing much you can do to stop it and I'm afraid you'll just have to ....... and bear it.",
 options: ["scorn", "grin", "laugh", "smile"],
 correctIndex: 1
},
{
 question: "The judge dismissed the new evidence completely because it had no bearing ....... the trial.",
 options: ["to", "on", "into", "by"],
 correctIndex: 1
},
{
 question: "It's very hard trying to get the tenses right in English. In fact it's the ....... devil to know whether it's simple or continuous.",
 options: ["same", "very", "usual", "actual"],
 correctIndex: 1
},
{
 question: "She likes to take the opposite point of view and play the devil's ........",
 options: ["lawyer", "advocate", "support", "attitude"],
 correctIndex: 1
},
{
 question: "When your parents find out what you've done, you'll be in serious trouble and there'll be the devil to ........",
 options: ["show", "pay", "credit", "hold"],
 correctIndex: 1
},
{
 question: "It took me ages to set up my computer because I spent the devil of a ....... trying to understand the notes.",
 options: ["duration", "time", "length", "space"],
 correctIndex: 1
},
{
 question: "I promise I'll be very quick indeed and I'll be back in two ....... of a lamb's tail.",
 options: ["moves", "shakes", "twitches", "wags"],
 correctIndex: 1
},
{
 question: "I honestly wouldn't trust either of them. They both think the same way and they're two of a ........",
 options: ["type", "kind", "genre", "sort"],
 correctIndex: 1
},
{
 question: "some who take ....... to wake up and some who jump straight out of bed first thing,",
 options: ["long time", "ages", "periods", "lengths"],
 correctIndex: 1
},
{
 question: "To start with there is a special ....... for children.",
 options: ["talk", "language", "speak", "chat"],
 correctIndex: 1
},
{
 question: "and parents of a musical ....... of mind can speed their children on their way to this land of sleep with a lullaby.",
 options: ["twist", "turn", "corner", "state"],
 correctIndex: 1
},
{
 question: "A more basic expression of this ....... is to have a little shuteye.",
 options: ["trend", "sort", "tendency", "variety"],
 correctIndex: 1
},
{
 question: "The strange ....... is that few people announce boldly:",
 options: ["matter", "thing", "point", "event"],
 correctIndex: 1
},
{
 question: "More ....... than not as a guest we'll say:",
 options: ["possible", "likely", "probably", "possibly"],
 correctIndex: 1
},
{
 question: "Somehow it sounds just a bit more ........",
 options: ["dignity", "dignified", "dignify", "dignitary"],
 correctIndex: 1
},
{
 question: "But if you have no ....... at all, the best thing is to drop off or nod off in the middle of the conversation.",
 options: ["restrictions", "inhibitions", "prohibitions", "conditions"],
 correctIndex: 1
},
{
 question: "There are several ....... that describe the state of being asleep",
 options: ["impressions", "expressions", "conditions", "digressions"],
 correctIndex: 1
},
{
 question: "There are also some ....... describing deep sleep: to sleep like a top, like a baby, like a log",
 options: ["likenesses", "comparisons", "similarities", "synonyms"],
 correctIndex: 1
},
{
 question: "but just assuming you are ....... awake and in the land of the living",
 options: ["clear", "wide", "broad", "high"],
 correctIndex: 1
},
{
 question: "Well I think I'll be off now and ....... my rest in the arms of Morpheus. Happy dreams!",
 options: ["fetch", "take", "bring", "let"],
 correctIndex: 1
},
{
 question: "I'm afraid I shan't be ....... to come on Tuesday because of a prior engagement.",
 options: ["capable", "able", "can", "possible"],
 correctIndex: 1
},
{
 question: "The main quality that is required of someone holding that kind of job is to have the ....... to get on with people.",
 options: ["task", "ability", "requirement", "need"],
 correctIndex: 1
},
{
 question: "Under the new regulations no one is allowed to smoke inside the building but you are ....... to smoke outside.",
 options: ["arranged", "permitted", "granted", "let"],
 correctIndex: 1
},
{
 question: "The ....... over the rights and wrongs of this issue has been a never- ending discussion inside parliament.",
 options: ["chatter", "debate", "gossip", "rumour"],
 correctIndex: 1
},
{
 question: "They first of all refused to stop their strike but in the end after much negotiation they were ....... to go back to work.",
 options: ["pursued", "persuaded", "prevented", "perceived"],
 correctIndex: 1
},
{
 question: "He finds himself in a very difficult situation since you could say he's ....... a rock and a hard place.",
 options: ["against", "between", "across", "over"],
 correctIndex: 1
},
{
 question: "Eventually they made their minds up and ....... to appoint the outsider to the job.",
 options: ["considered", "decided", "maintained", "took"],
 correctIndex: 1
},
{
 question: "The charity is finding it very difficult to continue operating and that's why it's ....... for the government to help.",
 options: ["crying", "calling", "shouting", "hailing"],
 correctIndex: 1
},
{
 question: "As a new employee she's very anxious to do the right thing and hopes that her new project ....... with the approval of her boss.",
 options: ["reaches", "meets", "accepts", "holds"],
 correctIndex: 1
},
{
 question: "You can take it or leave it as there is absolutely no ....... to accept my proposal.",
 options: ["push", "pressure", "pushing", "leaning"],
 correctIndex: 1
},
{
 question: "They say that pregnant women develop a ....... for certain foods and must eat them all the time.",
 options: ["appetite", "craving", "thirst", "eating"],
 correctIndex: 1
},
{
 question: "It doesn't matter what position you hold in society everyone is ....... to the same laws.",
 options: ["object", "subject", "controlled", "restricted"],
 correctIndex: 1
},
{
 question: "I think you can clearly see now what I mean as that incident ....... that I am obviously right.",
 options: ["decides", "demonstrates", "protests", "highlights"],
 correctIndex: 1
},
{
 question: "All cyclists must now wear some kind of helmet in order to ....... their heads against injury in the event of an accident.",
 options: ["proffer", "protect", "produce", "prevent"],
 correctIndex: 1
},
{
 question: "It's quite obvious that whatever you like to call his remarks they are impolite and ....... to slander.",
 options: ["same", "amount", "total", "extend"],
 correctIndex: 1
},
{
 question: "It's not that I don't trust you ....... I must have some evidence of your identity.",
 options: ["although", "but", "also", "because"],
 correctIndex: 1
},
{
 question: "Not only did he pay for them to go on holiday but he ....... provided them with spending money.",
 options: ["addition", "also", "either", "too"],
 correctIndex: 1
},
{
 question: "You needn't worry about that regulation as it has nothing to do with you and doesn't ....... to your situation.",
 options: ["adhere", "apply", "attract", "attach"],
 correctIndex: 1
},
{
 question: "Television can give you a very good idea of how people live in different countries as it can ....... scenes from every day life.",
 options: ["deter", "depict", "delineate", "defer"],
 correctIndex: 1
},
{
 question: "The teacher found it quite ....... to try and teach the children because they refused to listen to a word she was saying.",
 options: ["festive", "futile", "feeble", "fatuous"],
 correctIndex: 1
},
{
 question: "He realized that he had to say something quickly to ....... the crowd over to his side. 'Thank you for your generous gift, but I really prefer them in sandwiches. And now let's get on with the meeting.'",
 options: ["acquire", "win", "gain", "control"],
 correctIndex: 1
},
{
 question: "Harris: Oh, dear! I'm afraid there's been a misunderstanding. I didn't have time to finish my sentence. You see, I ....... some farmers planning to break up your meeting. <br>Henry: I don't see what all this has got to do with a bomb. <br>Harris: Well, if we hadn't been cut off I was going to warn you about a bombardment of tomatoes!",
 options: ["listened", "overheard", "attended", "understood"],
 correctIndex: 1
},
{
 question: "When he was only thirty years old, he ....... already experienced what most people only experience when they are much older.",
 options: ["has", "had", "is", "was"],
 correctIndex: 1
},
{
 question: "I must admit I ....... thought how the story would finish before I read the book.",
 options: ["haven't", "hadn't", "aren't", "couldn't"],
 correctIndex: 1
},
{
 question: "I really hope I ....... see you again.",
 options: ["did", "shall", "should", "would"],
 correctIndex: 1
},
{
 question: "He asked me what I ....... with the paint brush.",
 options: ["did do", "had done", "will do", "have done"],
 correctIndex: 1
},
{
 question: "Quite honestly all I was doing was simply ....... polite conversation.",
 options: ["made", "making", "having made", "makes"],
 correctIndex: 1
},
{
 question: "I was asking myself what in all honesty she ....... do next.",
 options: ["will", "would", "shall", "had"],
 correctIndex: 1
},
{
 question: "There's no question that they ....... delighted when they see her tomorrow.",
 options: ["have been", "will be", "had been", "will have been"],
 correctIndex: 1
},
{
 question: "How many times have you ....... your house broken into?",
 options: ["been", "had", "be", "have"],
 correctIndex: 1
},
{
 question: "Try ....... these irregular verbs by next week.",
 options: ["learned", "to learn", "learns", "learning"],
 correctIndex: 1
},
{
 question: "By the end of this year I realize I ....... writing tests for three years now.",
 options: ["shall be", "shall have been", "will be", "shall have"],
 correctIndex: 1
},
{
 question: "....... ever heard of this writer before?",
 options: ["Did you", "Have you", "Do you", "Will you"],
 correctIndex: 1
},
{
 question: "....... any one object if I turn the heating down?",
 options: ["Do", "Does", "Did", "Doing"],
 correctIndex: 1
},
{
 question: "She ....... working on that manuscript for 2 years now.",
 options: ["will be", "has been", "had been", "is"],
 correctIndex: 1
},
{
 question: "I ....... complete silence now while I try this experiment.",
 options: ["am wanting", "want", "did want", "have wanted"],
 correctIndex: 1
},
{
 question: "Finland and the Finnish upper secondary education system constitute a good example of the fact that it is possible to ....... very extensive readjustments with a view to making a system more flexible and adapted to individualized learning.",
 options: ["carry off", "carry through", "carry on with", "carry away"],
 correctIndex: 1
},
{
 question: "Items such as pointed scissors and ice skates are examples of articles that are not permitted in your ....... baggage when boarding an aircraft.",
 options: ["carry off", "carry on", "carry on with", "carry away"],
 correctIndex: 1
},
{
 question: "Thai cuisine is one of the most romantic of the Asian cuisines as it still ....... an element of mystery and exoticism.",
 options: ["remains", "retains", "refrains", "regains"],
 correctIndex: 1
},
{
 question: "America is ....... at the front of the race to become the world's most obese country.",
 options: ["undecidedly", "undeniably", "underbelly", "underling"],
 correctIndex: 1
},
{
 question: "Many people drink wine, but many wine consumers know little about wine ....... or wine and food pairing because they are intimidated or put off by the pretensions often associated with wine.",
 options: ["appropriation", "appreciation", "apportion", "apprehension"],
 correctIndex: 1
},
{
 question: "She hasn't come home ........",
 options: ["still", "already", "yet", "till"],
 correctIndex: 2
},
{
 question: "When your train arrives, I'll ....... you from the station.",
 options: ["take", "bring", "fetch", "remove"],
 correctIndex: 2
},
{
 question: "I have never ....... her before.",
 options: ["saw", "seeing", "seen", "see"],
 correctIndex: 2
},
{
 question: "I'm terribly sorry but I ....... what you said just now and I wonder if you could repeat it.",
 options: ["wasn't listen to", "wasn't hearing", "didn't hear", "didn't hearing"],
 correctIndex: 2
},
{
 question: "You've been making so much noise with your music that people at the far end of the road can ....... you.",
 options: ["listen to", "listening to", "hear", "hearing"],
 correctIndex: 2
},
{
 question: "He sometimes pretends he can't ....... a single word you are saying but all the time he's taking it all in.",
 options: ["listen to", "listening to", "hear", "hearing"],
 correctIndex: 2
},
{
 question: "The brothers will ....... school both together at the end of this year.",
 options: ["end", "ending", "finish", "finishes"],
 correctIndex: 2
},
{
 question: "It didn't take long for the children to ....... off the cakes and pastries that had not been eaten at the party.",
 options: ["end", "ending", "finish", "finishing"],
 correctIndex: 2
},
{
 question: "I read the ....... of that book but I couldn't possibly read the whole story.",
 options: ["starting", "start", "beginning", "begin"],
 correctIndex: 2
},
{
 question: "I won a lot of money by betting on that horse but it was simply a case of ....... luck.",
 options: ["start's", "starter's", "beginner's", "beginning's"],
 correctIndex: 2
},
{
 question: "I ....... go to see the doctor last week because I was very ill.",
 options: ["must", "must to", "had to"],
 correctIndex: 2
},
{
 question: "Do you ....... clean the house every day or every week?",
 options: ["must", "have", "have to"],
 correctIndex: 2
},
{
 question: "They ....... do their homework today because it is a holiday at the school.",
 options: ["must not", "don't have", "don't have to"],
 correctIndex: 2
},
{
 question: "It is ....... book that I have ever read.",
 options: ["funniest", "a funniest", "the funniest"],
 correctIndex: 2
},
{
 question: "The interesting thing about ....... is all the roads that they built in Britain.",
 options: ["Romans", "a Romans", "the Romans"],
 correctIndex: 2
},
{
 question: "I have left my book in ....... and I would like you to get it for me.",
 options: ["kitchen", "a kitchen", "the kitchen"],
 correctIndex: 2
},
{
 question: "There is a new television programme called: '....... wants to be a millionaire?'.",
 options: ["Which", "What", "Who"],
 correctIndex: 2
},
{
 question: "The grass, ....... I cut every week, seems to grow very quickly.",
 options: ["who", "who's", "which"],
 correctIndex: 2
},
{
 question: "What is the name of that picture which you ....... on the wall.",
 options: ["look at", "is looking at", "are looking at"],
 correctIndex: 2
},
{
 question: "....... to see that film that is on at the cinema next week?",
 options: ["Do you go", "Is you going", "Are you going"],
 correctIndex: 2
},
{
 question: "I would want very much to move to a new house if I ....... that job.",
 options: ["have", "having", "had"],
 correctIndex: 2
},
{
 question: "Will you come to dinner with us if we ....... a babysitter for you?",
 options: ["had found", "will find", "find"],
 correctIndex: 2
},
{
 question: "If I ....... very hard, I would have been able to stop smoking.",
 options: ["try", "would have tried", "had tried"],
 correctIndex: 2
},
{
 question: "Does anyone honestly ....... what a politician says nowadays?",
 options: ["discover", "think", "believe", "credit"],
 correctIndex: 2
},
{
 question: "If you can't reach me at home, send me a ........",
 options: ["postscript", "email", "letter", "brief"],
 correctIndex: 2
},
{
 question: "It is considered bad ....... to shout at someone.",
 options: ["habits", "ways", "manners", "custom"],
 correctIndex: 2
},
{
 question: "Which of these is a preposition? It is ........",
 options: ["thorough", "trough", "through", "throng"],
 correctIndex: 2
},
{
 question: "Which of these tenses is Present Simple? It is ........",
 options: ["He spoke", "He is speaking", "He speaks", "He will speak"],
 correctIndex: 2
},
{
 question: "Which of these is a gerund? It is ........",
 options: ["go", "goes", "going", "gone"],
 correctIndex: 2
},
{
 question: "Don't worry, there's no need to answer ....... I'm not in a hurry.",
 options: ["firstly", "fairly", "immediately", "easily"],
 correctIndex: 2
},
{
 question: "Yes, I'd very much ....... that.",
 options: ["understand", "consider", "appreciate", "appear"],
 correctIndex: 2
},
{
 question: "I often read short articles ....... pets in my favourite magazine.",
 options: ["for", "at", "about"],
 correctIndex: 2
},
{
 question: "If you have a question please feel ....... to ask.",
 options: ["good", "well", "free"],
 correctIndex: 2
},
{
 question: "Thank you very much indeed, that's very kind ....... you.",
 options: ["from", "for", "of"],
 correctIndex: 2
},
{
 question: "Can you remember the last time you ....... such an exciting time?",
 options: ["have", "having", "had"],
 correctIndex: 2
},
{
 question: "Are you really suggesting that we ....... actually get into one of those ridiculous things?",
 options: ["shall", "will", "should"],
 correctIndex: 2
},
{
 question: "You must be joking. Have you forgotten how terrible I felt the last time we went somewhere ....... plane?",
 options: ["in", "with", "by"],
 correctIndex: 2
},
{
 question: "I see you have a ....... in your car.",
 options: ["card", "route", "map", "drawing"],
 correctIndex: 2
},
{
 question: "Why do you ....... that?",
 options: ["tell", "announce", "say", "speak"],
 correctIndex: 2
},
{
 question: "What ....... to be the trouble?",
 options: ["ought", "looks", "seems", "tries"],
 correctIndex: 2
},
{
 question: "Can you give me a little more .......?",
 options: ["exact", "particular", "detail", "fact"],
 correctIndex: 2
},
{
 question: "Yes, I ........",
 options: ["did", "have", "do", "done"],
 correctIndex: 2
},
{
 question: "Yes, doctor I'm sorry I ....... you.",
 options: ["intervened", "intersected", "interrupted", "interfered"],
 correctIndex: 2
},
{
 question: "Now let's go ....... to our weather forecaster, Mary.",
 options: ["on", "out", "over", "against"],
 correctIndex: 2
},
{
 question: "These will ....... some rainfall later this morning.",
 options: ["bear", "carry", "produce", "present"],
 correctIndex: 2
},
{
 question: "And of course after that our old friend rain ........",
 options: ["repeats", "reports", "returns", "reacts"],
 correctIndex: 2
},
{
 question: "Good evening. Let me tell you what's in ....... for you on television tonight",
 options: ["shop", "market", "store", "screen"],
 correctIndex: 2
},
{
 question: "After that we have the ....... show on the latest hits.",
 options: ["regimented", "regulated", "regular", "ruled"],
 correctIndex: 2
},
{
 question: "Because after the news Penny and I are ....... on a date.",
 options: ["doing", "making", "going", "taking"],
 correctIndex: 2
},
{
 question: "Don't you ....... those bells..?",
 options: ["ponder", "elaborate", "think", "educate"],
 correctIndex: 2
},
{
 question: "I'll have one more ....... and then..",
 options: ["come", "find", "go", "leave"],
 correctIndex: 2
},
{
 question: "Oh, it was a complete .......!",
 options: ["accident", "happening", "disaster", "event"],
 correctIndex: 2
},
{
 question: "Well, the ....... was to go sailing.",
 options: ["picture", "sketch", "plan", "drawing"],
 correctIndex: 2
},
{
 question: "In ....... I agree.",
 options: ["idea", "philosophy", "theory", "belief"],
 correctIndex: 2
},
{
 question: "Mike: I like anything to do with sport. .......",
 options: ["Have you?", "Did you?", "Do you?", "Are you?"],
 correctIndex: 2
},
{
 question: "Mike: It's getting very late, we must hurry up. <br>Jane: .......",
 options: ["Point got.", "Point received.", "Point taken.", "Point held."],
 correctIndex: 2
},
{
 question: "Mike: 'I need some support, right now.'<br>Jane: ‘.......’",
 options: ["Well, you can number me.", "Well, I'm your number.", "Well, you can count on me.", "Well, you can add on me."],
 correctIndex: 2
},
{
 question: "Mike: 'That's the 16th job interview I've failed. What should I do?'<br>Jane: ‘.......’",
 options: ["Don't give over.", "Don't give out.", "Don't give up.", "Don't give on."],
 correctIndex: 2
},
{
 question: "Mike: 'I suppose they might get the contract.'<br>Jane: ‘.......’",
 options: ["There's little notice of that.", "There's little dream of that.", "There's little chance of that.", "There's little thought of that."],
 correctIndex: 2
},
{
 question: "Mike: 'I hope I haven't left it too late to apply.'<br>Jane: ‘.......’",
 options: ["There's still opportunity.", "There's still try.", "There's still time.", "There's yet time."],
 correctIndex: 2
},
{
 question: "Mike: 'You just can't believe what they'll think up next, can you?'<br>Jane: ‘.......’",
 options: ["There's no believing.", "There's no crediting.", "There's no saying.", "There's no announcing."],
 correctIndex: 2
},
{
 question: "Mike: 'Then you add the square root and multiply by 67, do you follow?'<br>Jane: ‘.......’",
 options: ["Sorry, it's over me.", "Sorry, it's past me.", "Sorry, it's beyond me.", "Sorry, it's after me."],
 correctIndex: 2
},
{
 question: "Jill: 'I'm afraid I've just broken the handle.'<br>Frank: ‘.......’",
 options: ["Don't brood.", "Don't annoy.", "Don't worry.", "Don't anger."],
 correctIndex: 2
},
{
 question: "Jill: 'I don't think I can stand much more of this.'<br>Frank: ‘.......’",
 options: ["The worst is by.", "The worst is through.", "The worst is over.", "The worst is gone."],
 correctIndex: 2
},
{
 question: "John: 'I am most grateful.'<br>Sue: ‘.......’",
 options: ["You are welcoming.", "You welcome.", "You're welcome.", "You are welcomed."],
 correctIndex: 2
},
{
 question: "John: 'I really appreciate your kindness this last week.'<br>Sue: ‘.......’",
 options: ["It pleased me.", "It was pleasing.", "It was my pleasure.", "It was pleasant."],
 correctIndex: 2
},
{
 question: "John: 'By the way, I've paid the taxi driver.'<br>Sue: ‘.......’",
 options: ["You mustn't have.", "You couldn't have.", "You shouldn't have.", "You can't have."],
 correctIndex: 2
},
{
 question: "Frank: 'You know I put money in that company — well it's gone bankrupt.'<br>Jill: ‘.......’",
 options: ["Stiff luck!", "Solid luck!", "Hard luck!", "Thick luck!"],
 correctIndex: 2
},
{
 question: "Frank: 'They say that all this rubbish is going to be taken away tomorrow.'<br>Jill: ‘.......’",
 options: ["I believe when I see it.", "I'll believe it when seen.", "I'll believe it when I see it.", "I see it when I believe."],
 correctIndex: 2
},
{
 question: "She's definitely not coming .......",
 options: ["will she?", "isn't she?", "is she?", "can she?"],
 correctIndex: 2
},
{
 question: "It drives you mad .......",
 options: ["is it?", "does it?", "doesn't it?", "won't it?"],
 correctIndex: 2
},
{
 question: "I think you ought to go .......",
 options: ["ought you?", "do I?", "don't you?", "do you?"],
 correctIndex: 2
},
{
 question: "It happened yesterday .......",
 options: ["had it?", "has it?", "didn't it?", "did it?"],
 correctIndex: 2
},
{
 question: "They're selling their house .......",
 options: ["will they?", "haven't they?", "aren't they?", "have they?"],
 correctIndex: 2
},
{
 question: "Sarah: 'I want you to give me some more money.'<br>Paul: ‘.......’",
 options: ["Oh you want, do you?", "Oh you'd like, would you?", "Oh you do, do you?", "Oh you give, do you?"],
 correctIndex: 2
},
{
 question: "Sarah: 'You're being very rude!'<br>Paul: ‘.......’",
 options: ["Oh I have, have I?", "I am, you think?", "Oh I am, am I?", "Oh it is, is it?"],
 correctIndex: 2
},
{
 question: "Sarah: 'I can't take any more.'<br>Paul: ‘.......’",
 options: ["Oh you can, can you?", "Oh you could, could you?", "Oh, you can't, can you?", "Oh you could, could you?"],
 correctIndex: 2
},
{
 question: "Sarah: 'I won't listen to you any more.'<br>Paul: ‘.......’",
 options: ["So you will, will you?", "So you don't, do you?", "So you won't, will you?", "So you do, don't you?"],
 correctIndex: 2
},
{
 question: "Sarah: 'That's not allowed you know.'<br>Paul: ‘.......’",
 options: ["Oh you do, don't you?", "Oh it is, isn't it?", "Oh it isn't, is it?", "Oh it won't, will it?"],
 correctIndex: 2
},
{
 question: "You'd rather I kept quiet about it .......",
 options: ["did you?", "had you?", "wouldn't you?", "do you?"],
 correctIndex: 2
},
{
 question: "Come back in the morning .......",
 options: ["do you?", "have you?", "will you?", "don't you?"],
 correctIndex: 2
},
{
 question: "You like milk in your tea .......",
 options: ["can you?", "have you?", "don't you?", "did you?"],
 correctIndex: 2
},
{
 question: "Of course I did. I gave ....... back on Tuesday.",
 options: ["them", "its", "it"],
 correctIndex: 2
},
{
 question: "He doesn't trust .......?",
 options: ["I", "it", "me"],
 correctIndex: 2
},
{
 question: "Well you and your wife have borrowed things sometimes and not given ....... back.",
 options: ["they", "theirs", "them"],
 correctIndex: 2
},
{
 question: "In that case just look at the table and tell ....... what you see.",
 options: ["my", "I", "me"],
 correctIndex: 2
},
{
 question: "Excuse me but shouldn't you say to ....... does that car belong?",
 options: ["which", "that", "whom"],
 correctIndex: 2
},
{
 question: "....... do you think would have a car like that?",
 options: ["Whom", "That", "Who"],
 correctIndex: 2
},
{
 question: "The car to ....... you are referring happens to be mine!",
 options: ["that", "whom", "which"],
 correctIndex: 2
},
{
 question: "Well, I think you ought to speak to that man ....... standing with a notebook in front of the car.",
 options: ["which", "whom", "who's"],
 correctIndex: 2
},
{
 question: "The trouble was that Icarus always wanted to put ....... into danger.",
 options: ["herself", "itself", "himself"],
 correctIndex: 2
},
{
 question: "His father said again and again if we don't take care, we'd hurt ........",
 options: ["themselves", "yourselves", "ourselves"],
 correctIndex: 2
},
{
 question: "His sister said she would like to push ....... into the air and fly but she was too frightened.",
 options: ["itself", "himself", "herself"],
 correctIndex: 2
},
{
 question: "Unfortunately Icarus went too near the sun and the wax on his wings melted and the feathers worked ....... free and he fell on the ground and died.",
 options: ["itself", "yourselves", "themselves"],
 correctIndex: 2
},
{
 question: "Anna is ........",
 options: ["teacher", "teachers", "a teacher", "one teacher"],
 correctIndex: 2
},
{
 question: "Do you have ....... children?",
 options: ["much", "very", "any", "all"],
 correctIndex: 2
},
{
 question: "Who won the soccer .......?",
 options: ["sport", "gain", "game", "throw"],
 correctIndex: 2
},
{
 question: "The pencils and paper ....... on your desk.",
 options: ["to be", "is", "are", "be"],
 correctIndex: 2
},
{
 question: "Do you ....... time to go to the store for me?",
 options: ["like", "go", "have", "give"],
 correctIndex: 2
},
{
 question: "There are 12 ....... in a year.",
 options: ["days", "weeks", "months", "hours"],
 correctIndex: 2
},
{
 question: "Have you ....... made a snowman?",
 options: ["forever", "always", "ever", "every"],
 correctIndex: 2
},
{
 question: "It looks ....... a storm is coming.",
 options: ["as", "that", "like", "of"],
 correctIndex: 2
},
{
 question: "My desk is a ......., I should clean it.",
 options: ["messy", "slob", "mess", "sloppy"],
 correctIndex: 2
},
{
 question: "I like pencils ....... than pens.",
 options: ["best", "the best", "better", "more good"],
 correctIndex: 2
},
{
 question: "This is the ....... assignment I have ever had.",
 options: ["difficult", "more difficult", "most difficult", "diffultest"],
 correctIndex: 2
},
{
 question: "The janitor cleans the office ....... night.",
 options: ["total", "all of", "every", "very"],
 correctIndex: 2
},
{
 question: "John ....... his bicycle every day.",
 options: ["ride", "ridden", "rides", "to ride"],
 correctIndex: 2
},
{
 question: "Do you like .......?",
 options: ["dance", "of dance", "to dance", "danced"],
 correctIndex: 2
},
{
 question: "There ....... a race next week.",
 options: ["to be", "was", "will be", "are"],
 correctIndex: 2
},
{
 question: "....... are you going to get home from work?",
 options: ["Which", "Who", "How", "What"],
 correctIndex: 2
},
{
 question: "....... is that guy talking to your sister?",
 options: ["Which", "Whose", "Who", "Whom"],
 correctIndex: 2
},
{
 question: "....... dog is that?",
 options: ["Who", "When", "Whose", "Where"],
 correctIndex: 2
},
{
 question: "My mother is the one ....... sings on TV every morning.",
 options: ["whom", "which", "who", "whose"],
 correctIndex: 2
},
{
 question: "My son goes ....... English classes 5 days a week.",
 options: ["with", "by", "to", "from"],
 correctIndex: 2
},
{
 question: "My car will not start because it is ....... gas.",
 options: ["full of", "out with", "out of", "with no"],
 correctIndex: 2
},
{
 question: "....... you please bring me my notebook?",
 options: ["Should", "Do", "Can", "Haven't"],
 correctIndex: 2
},
{
 question: "....... you like some water?",
 options: ["Can", "May", "Would", "Do"],
 correctIndex: 2
},
{
 question: "....... I ride with you to work?",
 options: ["Will you mind if", "Could you mind if", "Would you mind if", "Can you mind if"],
 correctIndex: 2
},
{
 question: "Flowers ....... good.",
 options: ["stink", "feel", "smell", "watch"],
 correctIndex: 2
},
{
 question: "....... 4 of my grandparents are still alive.",
 options: ["Both", "None", "All", "Many"],
 correctIndex: 2
},
{
 question: "Our house ....... 3 bedrooms.",
 options: ["is of", "is with", "has", "have"],
 correctIndex: 2
},
{
 question: "There is a rug ....... the floor in the living room.",
 options: ["in", "under", "on", "next to"],
 correctIndex: 2
},
{
 question: "The ....... gets 6 channels.",
 options: ["cat", "tree", "television", "microwave"],
 correctIndex: 2
},
{
 question: "Do you need ....... milk for this recipe?",
 options: ["many", "big", "much", "much of"],
 correctIndex: 2
},
{
 question: "You are ....... smart.",
 options: ["much", "many", "very", "lots"],
 correctIndex: 2
},
{
 question: "I have ....... of friends.",
 options: ["much", "very", "lots", "many"],
 correctIndex: 2
},
{
 question: "The car is not ......., it is slow.",
 options: ["speed", "unhurried", "fast", "powerful"],
 correctIndex: 2
},
{
 question: "I do not get up ......., I get up early.",
 options: ["night", "day", "late", "first"],
 correctIndex: 2
},
{
 question: "My mom's hair is not straight, it is ........",
 options: ["long", "short", "curly", "grey"],
 correctIndex: 2
},
{
 question: "Mike: Where are you ....... today?",
 options: ["go", "gone", "going", "goes"],
 correctIndex: 2
},
{
 question: "Mike: That's true but you have to ....... a long time for a bus.",
 options: ["attend", "expect", "wait", "await"],
 correctIndex: 2
},
{
 question: "Linda: No. I've just ....... it's Sunday and there are no buses today.",
 options: ["understood", "followed", "realised", "believed"],
 correctIndex: 2
},
{
 question: "Mike: I'm sorry to hear that. Tell me ....... it.",
 options: ["through", "of", "about", "with"],
 correctIndex: 2
},
{
 question: "Mike: Suddenly I'm ....... much better. I won't see the doctor today. Good bye.",
 options: ["going", "trying", "feeling", "making"],
 correctIndex: 2
},
{
 question: "Mike: All you have to do is take it ....... and relax.",
 options: ["back", "cool", "easy", "straight"],
 correctIndex: 2
},
{
 question: "Mike: Don't get too excited! We're still on the runway and haven't taken ....... yet.",
 options: ["through", "by", "off", "in"],
 correctIndex: 2
},
{
 question: "Charles: And I see you've ....... your little dog with you.",
 options: ["brining", "brings", "brought", "bought"],
 correctIndex: 2
},
{
 question: "Deborah: Believe me — he's a really wonderful dog and can do ....... things that people do.",
 options: ["much", "more", "most", "lots"],
 correctIndex: 2
},
{
 question: "Waiter: What would you like to ....... with, sir?",
 options: ["engage", "consume", "start", "tackle"],
 correctIndex: 2
},
{
 question: "Diner: Oh that's a ........ Perhaps I could have the pork.",
 options: ["crime", "blame", "shame", "short"],
 correctIndex: 2
},
{
 question: "Charlie: Well, to be ....... I've had a few problems recently.",
 options: ["open", "overt", "honest", "correct"],
 correctIndex: 2
},
{
 question: "Woman: Sorry to hear that. That must have been a ........",
 options: ["hit", "strike", "blow", "knock"],
 correctIndex: 2
},
{
 question: "Charlie: Sorry about that I must have ....... the wrong number. Have a nice day.",
 options: ["selected", "directed", "dialled", "done"],
 correctIndex: 2
},
{
 question: "Alice: Me too. Just listen to the ....... of his voice now.",
 options: ["noise", "speech", "sound", "roar"],
 correctIndex: 2
},
{
 question: "Alice: Yes, you're ....... right. I've seen him on tv loads of times.",
 options: ["fully", "alive", "dead", "clear"],
 correctIndex: 2
},
{
 question: "Mary: Yes, Michael Dobson he was in that new ....... as the detective.",
 options: ["killer", "filler", "thriller", "tiller"],
 correctIndex: 2
},
{
 question: "Employee: Are you ....... problems, madam?",
 options: ["feeling", "trying", "having", "knowing"],
 correctIndex: 2
},
{
 question: "Old lady: Yes. I wonder if you could ....... help me, young man.",
 options: ["probably", "likely", "possibly", "easily"],
 correctIndex: 2
},
{
 question: "Old lady: There is just one other ....... you can help me with if you have a moment.",
 options: ["article", "try", "thing", "heading"],
 correctIndex: 2
},
{
 question: "Old lady: Well you see this supermarket is so big I can't find the way ....... I've been here since Tuesday!",
 options: ["on", "off", "out", "through"],
 correctIndex: 2
},
{
 question: "Mr Corp: Oh yes, madam. She's ....... going to London.",
 options: ["precisely", "exactly", "definitely", "always"],
 correctIndex: 2
},
{
 question: "Mr Corp: What ....... to you then?",
 options: ["occurred", "transpired", "happened", "developed"],
 correctIndex: 2
},
{
 question: "Mr Corp: Don't you ....... madam. It is going to London but not for another 4 hours!",
 options: ["concern", "think", "worry", "consider"],
 correctIndex: 2
},
{
 question: "There are ten pieces of fruit in my basket. One is an orange, one is a grape and ....... is an apple.",
 options: ["others", "the other", "another", "the others"],
 correctIndex: 2
},
{
 question: "My mom speaks three languages. One is English and ....... one is French.",
 options: ["others", "the other", "another", "the others"],
 correctIndex: 2
},
{
 question: "There are 50 states in the United States. One is North Carolina and ....... are Virginia and Kentucky.",
 options: ["another", "the others", "some others", "the other"],
 correctIndex: 2
},
{
 question: "My son is afraid ....... the dark.",
 options: ["from", "on", "of", "by"],
 correctIndex: 2
},
{
 question: "Maria is married ....... my cousin.",
 options: ["with", "for", "to", "into"],
 correctIndex: 2
},
{
 question: "I'm tired ....... waiting for the bus. Let's take a taxi.",
 options: ["to", "on", "of", "from"],
 correctIndex: 2
},
{
 question: "Are there ....... dogs in the house?",
 options: ["something", "nothing", "any", "anybody"],
 correctIndex: 2
},
{
 question: "My friend doesn't know ....... about her Birthday Party!",
 options: ["something", "nothing", "anything", "anyone"],
 correctIndex: 2
},
{
 question: "I think there is ....... wrong with my VCR. It is not working very well.",
 options: ["anything", "nothing", "something", "everything"],
 correctIndex: 2
},
{
 question: "My friend said she doesn't ....... any foreign languages.",
 options: ["no", "knew", "know", "now"],
 correctIndex: 2
},
{
 question: "The chocolate chip cookies are on ....... five.",
 options: ["I'll", "isle", "aisle", "island"],
 correctIndex: 2
},
{
 question: "Christina loves to .......!",
 options: ["so", "soul", "sew", "sow"],
 correctIndex: 2
},
{
 question: "This is the girl ....... car hit that tree down last week.",
 options: ["who", "which", "whose", "whom"],
 correctIndex: 2
},
{
 question: "....... is going to take the dog for a walk?",
 options: ["Which", "Whose", "Who", "Whom"],
 correctIndex: 2
},
{
 question: "....... house is it, anyway? Are we allowed to stay in here?",
 options: ["Who's", "Whom", "Whose", "Which"],
 correctIndex: 2
},
{
 question: "Would you like ....... juice?",
 options: ["a", "an", "some", "much"],
 correctIndex: 2
},
{
 question: "I want to make orange juice. Have you got ....... oranges?",
 options: ["much", "many", "any", "few"],
 correctIndex: 2
},
{
 question: "Jessica spent a lot of money on her car. Now she only has ....... money left to pay for her living expenses.",
 options: ["many", "a few", "a little", "much"],
 correctIndex: 2
},
{
 question: "I was jogging in the park this morning and saw this dog coming ....... me. It looked like he was going attack me, but he was just trying to reach out for his owner who was running right behind me.",
 options: ["onto", "after", "towards", "below"],
 correctIndex: 2
},
{
 question: "As soon as Bob heard his boss coming, he jumped ....... his chair and prentended he was working.",
 options: ["inside", "under", "for", "down"],
 correctIndex: 2
},
{
 question: "Adrian should have never ....... home. If he hadn't, he'd be in a better situation right now.",
 options: ["leave", "leaved", "left", "leaving"],
 correctIndex: 2
},
{
 question: "Last night, I ....... I was calling the police and really did it.",
 options: ["dream", "dreaming", "dreamed", "have dreamed"],
 correctIndex: 2
},
{
 question: "I'm glad to know that you have ....... me for what I have done.",
 options: ["forgive", "forgives", "forgiven", "forgave"],
 correctIndex: 2
},
{
 question: "After looking for him all day, Jeremy finally found his dog ....... under a cave.",
 options: ["hid", "hide", "hidden", "hit"],
 correctIndex: 2
},
{
 question: "I would have ....... pictures from my trip, if I had a camera.",
 options: ["took", "take", "taken", "had took"],
 correctIndex: 2
},
{
 question: "There are many ....... of jobs in Oregon right now.",
 options: ["sorts", "brands", "kinds", "forms"],
 correctIndex: 2
},
{
 question: "I'm worried about her because she ....... more pills than usual.",
 options: ["eats", "munches", "is taking", "is eating"],
 correctIndex: 2
},
{
 question: "I'm so busy — I hope you'll ....... my messy office space.",
 options: ["forgive", "absolve", "excuse", "acquit"],
 correctIndex: 2
},
{
 question: "We decided to ....... bed this morning because last night wore us out.",
 options: ["be in our", "stay in our", "stay in", "stay on our"],
 correctIndex: 2
},
{
 question: "I ....... some great books from the library this past weekend.",
 options: ["lent", "had a loan of", "borrowed", "loaned"],
 correctIndex: 2
},
{
 question: "You're an asset to our team. .......",
 options: ["Stay it up!", "Remain doing it!", "Keep it up!", "Continue it up!"],
 correctIndex: 2
},
{
 question: "As soon as I picked up the rare object, it ........",
 options: ["was not together", "came to be apart", "came apart", "was separated"],
 correctIndex: 2
},
{
 question: "The world needs to depend on other energy sources, ....... oil and other natural resources.",
 options: ["beside", "likewise", "besides", "also beside"],
 correctIndex: 2
},
{
 question: "Her mother ....... when she was just a little girl.",
 options: ["is dead", "dead", "died", "was dead"],
 correctIndex: 2
},
{
 question: "If my back starts ......., I can't go anywhere with you next week.",
 options: ["acting out", "performing", "acting up", "becoming bad"],
 correctIndex: 2
},
{
 question: "Due to his age, everyone thinks he should find a suitable mate and settle ........",
 options: ["on", "along", "down", "up"],
 correctIndex: 2
},
{
 question: "His speech was articulate and I asked him to ....... his ideas.",
 options: ["make bigger", "spread out", "expand on", "expand about"],
 correctIndex: 2
},
{
 question: "I ....... with the book quickly.",
 options: ["fed up", "bored", "got bored", "became bored up"],
 correctIndex: 2
},
{
 question: "A swarm of ....... gathered around the swamp.",
 options: ["sheep", "birds", "insects", "cows"],
 correctIndex: 2
},
{
 question: "A crowd of ....... lined up to see what was happening.",
 options: ["cows", "sheep", "people", "birds"],
 correctIndex: 2
},
{
 question: "The herd of ....... kept eating as the wind blew past them.",
 options: ["people", "birds", "cows", "crows"],
 correctIndex: 2
},
{
 question: "At the show, we saw many different schools of ........",
 options: ["birds", "cattle", "fish", "beads"],
 correctIndex: 2
},
{
 question: "She ....... him a solemn promise that she would never steal again.",
 options: ["make", "do", "made", "did"],
 correctIndex: 2
},
{
 question: "The business ....... a lot of money this year.",
 options: ["make", "do", "made", "did"],
 correctIndex: 2
},
{
 question: "The university research department stumbled upon something new and ....... a big discovery because of it.",
 options: ["make", "did", "made", "do"],
 correctIndex: 2
},
{
 question: "Ralph was late ....... work again. He may be fired.",
 options: ["on", "at", "for", "to"],
 correctIndex: 2
},
{
 question: "Naomi is keen ....... working in Africa this coming year.",
 options: ["of", "for", "on", "at"],
 correctIndex: 2
},
{
 question: "All of Chris' teachers agree that he is very good ....... math.",
 options: ["with", "for", "at", "on"],
 correctIndex: 2
},
{
 question: "His mother was late because she ....... the beds before she left the house.",
 options: ["make", "do", "made", "did"],
 correctIndex: 2
},
{
 question: "They ....... up quickly after the silly argument.",
 options: ["make", "do", "made", "did"],
 correctIndex: 2
},
{
 question: "....... does the word 'alphabet' come from?",
 options: ["What", "Which", "Where", "When"],
 correctIndex: 2
},
{
 question: "I lived in Denpasar ....... several years.",
 options: ["while", "during", "for"],
 correctIndex: 2
},
{
 question: "Last week I was held up ....... four hours because of the traffic.",
 options: ["while", "during", "for"],
 correctIndex: 2
},
{
 question: "A game of rugby usually lasts ....... eighty minutes.",
 options: ["while", "during", "for"],
 correctIndex: 2
},
{
 question: "I was traveling through Mumbai ....... six weeks last summer.",
 options: ["while", "during", "for"],
 correctIndex: 2
},
{
 question: "....... you do much sightseeing when you were on vacation in Madrid?",
 options: ["Was", "Were", "Did", "had"],
 correctIndex: 2
},
{
 question: "I graduated from college ....... 2002.",
 options: ["since", "on", "in", "at"],
 correctIndex: 2
},
{
 question: "His pet anaconda died five months ....... and he still misses it.",
 options: ["for", "since", "ago", "on"],
 correctIndex: 2
},
{
 question: "The chairman of the board has been employed in the finance industry ....... 1984.",
 options: ["in", "on", "since", "at"],
 correctIndex: 2
},
{
 question: "Simon isn't at school this week. He's ....... vacation.",
 options: ["in", "between", "on", "to"],
 correctIndex: 2
},
{
 question: "We're out ....... coffee. Could you please go the supermarket and pick up some more.",
 options: ["for", "in", "of", "to"],
 correctIndex: 2
},
{
 question: "You're really annoying me. You're doing it ....... purpose, aren't you?",
 options: ["about", "of", "on", "in"],
 correctIndex: 2
},
{
 question: "Can you tell the difference ....... butter and margarine?",
 options: ["in", "with", "between", "about"],
 correctIndex: 2
},
{
 question: "There have been many complaints ....... your behavior.",
 options: ["with", "of", "about", "for"],
 correctIndex: 2
},
{
 question: "Have you got any photos ....... your girlfriend?",
 options: ["about", "between", "of", "which"],
 correctIndex: 2
},
{
 question: "Can you please go to ....... grocery store on fifth street and buy 2 cartons of milk?",
 options: ["a", "an", "the"],
 correctIndex: 2
},
{
 question: "My brother won an award for being ....... best speller in our school.",
 options: ["a", "an", "the"],
 correctIndex: 2
},
{
 question: "....... President of the United States will be visiting Australia next week.",
 options: ["A", "An", "The"],
 correctIndex: 2
},
{
 question: "Have you got ....... water?",
 options: ["a", "some", "any"],
 correctIndex: 2
},
{
 question: "I haven't got ....... tea. Can you go to the corner store and buy some more?",
 options: ["a", "some", "any"],
 correctIndex: 2
},
{
 question: "Is there ....... orange juice left in the fridge?",
 options: ["a", "some", "any"],
 correctIndex: 2
},
{
 question: "I need ....... money to go shopping.",
 options: ["a", "any", "some"],
 correctIndex: 2
},
{
 question: "....... is the highest ranking official in the United States?",
 options: ["Who's", "Whom", "Who", "What"],
 correctIndex: 2
},
{
 question: "To ....... did Mark lend his video game?",
 options: ["who", "who's", "whom", "what"],
 correctIndex: 2
},
{
 question: "To ....... should the check be made payable?",
 options: ["who", "who's", "whom", "which"],
 correctIndex: 2
},
{
 question: "The colorful picture of the flowers is ........",
 options: ["their", "your", "mine"],
 correctIndex: 2
},
{
 question: "The proud parents brought home ....... new baby girl.",
 options: ["his", "her", "their"],
 correctIndex: 2
},
{
 question: "The computer quickly stores information on ....... huge memory.",
 options: ["yours", "theirs", "its"],
 correctIndex: 2
},
{
 question: "The fluffy brown puppy is ........",
 options: ["its", "my", "theirs"],
 correctIndex: 2
},
{
 question: "I didn't get a cheeseburger, so I tasted ........",
 options: ["mine", "its", "hers"],
 correctIndex: 2
},
{
 question: "You've borrowed such a great deal of money from me lately. I need to ....... exactly how much you owe me.",
 options: ["make up", "put out", "work out", "clear up"],
 correctIndex: 2
},
{
 question: "Can you ....... the time of the next train to Munich?",
 options: ["sort out", "put out", "find out", "try out"],
 correctIndex: 2
},
{
 question: "That maths exam was incredibly difficult. It took me ages to ....... some of the answers.",
 options: ["sort out", "put out", "work out", "find out"],
 correctIndex: 2
},
{
 question: "Agatha Christie was a very successful writer of detective ........",
 options: ["yarns", "fairy-tales", "stories"],
 correctIndex: 2
},
{
 question: "Agatha Christie wrote more than 80 mysteries and sold ....... 300 million books.",
 options: ["more", "extra", "over"],
 correctIndex: 2
},
{
 question: "People all over the world have ....... Agatha Christie's stories.",
 options: ["grasped", "realized", "read"],
 correctIndex: 2
},
{
 question: "Agatha Christie wrote her first detective story in 1920 and became very ........",
 options: ["success", "successor", "successful"],
 correctIndex: 2
},
{
 question: "Have you seen ....... heard the latest musical by Andrew Lloyd Webber?",
 options: ["but", "so", "or"],
 correctIndex: 2
},
{
 question: "Mum, can you please buy me a new ....... when you go the supermarket this afternoon?",
 options: ["toothpaste", "toothache", "toothbrush"],
 correctIndex: 2
},
{
 question: "My daughter woke up screaming in the middle of the night because she had a terrible ........",
 options: ["toothpick", "toothbrush", "toothache"],
 correctIndex: 2
},
{
 question: "I can't seem to find the new tube of ....... that I purchased from the supermarket yesterday.",
 options: ["toothbrush", "toothpick", "toothpaste"],
 correctIndex: 2
},
{
 question: "My old ....... is looking very shaggy. I think it's about time to buy a new one.",
 options: ["toothpick", "toothpaste", "toothbrush"],
 correctIndex: 2
},
{
 question: "Don't talk to him about politics because it's like a ....... rag to a bull.",
 options: ["blue", "white", "red", "black"],
 correctIndex: 2
},
{
 question: "In this business you cannot afford to make any mistake and must be seen to be lily ........",
 options: ["red", "blue", "white", "green"],
 correctIndex: 2
},
{
 question: "They were ....... of having broken into the stately home and stolen several famous paintings.",
 options: ["charged", "described", "accused", "blamed"],
 correctIndex: 2
},
{
 question: "Are you going ....... for your holidays this year?",
 options: ["outside", "absent", "abroad", "external"],
 correctIndex: 2
},
{
 question: "After two rings of the bell she suddenly ....... in the doorway.",
 options: ["seemed", "looked", "appeared", "viewed"],
 correctIndex: 2
},
{
 question: "You must decide and ....... up your mind.",
 options: ["do", "get", "make", "take"],
 correctIndex: 2
},
{
 question: "At the moment we are trying to ....... for the town centre.",
 options: ["do", "get", "make", "take"],
 correctIndex: 2
},
{
 question: "After they had shouted at each other, they decided to ....... it up.",
 options: ["do", "get", "make", "take"],
 correctIndex: 2
},
{
 question: "She's good at writing stories for children and is always keen to ....... up new plots.",
 options: ["do", "get", "make", "take"],
 correctIndex: 2
},
{
 question: "He wanted his sons to pay as much ....... to the cultivation of the farm as he had done many years.",
 options: ["thought", "care", "attention", "management"],
 correctIndex: 2
},
{
 question: "The sons assured their father that they would work hard to ....... out the treasure.",
 options: ["find", "sort", "seek", "try"],
 correctIndex: 2
},
{
 question: "Clearly their father had been a wise man because all the work the sons had done on the land ensured that they had the best ....... for years.",
 options: ["gathering", "yielding", "crop", "production"],
 correctIndex: 2
},
{
 question: "The problems I have ....... the language are to do with spelling.",
 options: ["on", "to", "with"],
 correctIndex: 2
},
{
 question: "I have been ....... English for 5 years.",
 options: ["study", "trying", "learning"],
 correctIndex: 2
},
{
 question: "Most people don't want to study Latin because it is a ....... language.",
 options: ["death", "old", "dead"],
 correctIndex: 2
},
{
 question: "Don't be put ....... by his manner, he is really kind hearted.",
 options: ["through", "up", "off", "in"],
 correctIndex: 2
},
{
 question: "As she had made such an impression on her employers, she was soon offered ........",
 options: ["progress", "preferment", "promotion", "position"],
 correctIndex: 2
},
{
 question: "As they always tell you the value of shares can go ....... as well as up.",
 options: ["across", "over", "down", "in"],
 correctIndex: 2
},
{
 question: "What I ....... and what I do are not necessarily the same.",
 options: ["said", "saying", "say", "tell"],
 correctIndex: 2
},
{
 question: "Now that would be ....... but my lips are sealed.",
 options: ["told", "saying", "telling", "said"],
 correctIndex: 2
},
{
 question: "I'm afraid I can't ....... for sure but I think it's safe.",
 options: ["said", "says", "say", "telling"],
 correctIndex: 2
},
{
 question: "The detectives had no problems in solving the crimes as it was clearly an open and ....... case.",
 options: ["closed", "closing", "shut", "shutting"],
 correctIndex: 2
},
{
 question: "I promise you that dining here will be really an ....... experience for you.",
 options: ["excitable", "excited", "exciting", "excite"],
 correctIndex: 2
},
{
 question: "As they're special ....... of the restaurant, they always get a good table.",
 options: ["partners", "customers", "patrons", "visitors"],
 correctIndex: 2
},
{
 question: "There are different ways of ....... Shakespeare's plays and each director makes an individual choice.",
 options: ["meeting", "welcoming", "approaching", "showing"],
 correctIndex: 2
},
{
 question: "As always his latest play has been a huge success and all the tickets are ....... until August.",
 options: ["taken out", "put out", "sold out", "bought out"],
 correctIndex: 2
},
{
 question: "If you watch a kettle, it never ........",
 options: ["cooks", "stew", "boils", "heats"],
 correctIndex: 2
},
{
 question: "Don't count your chickens before they are ........",
 options: ["born", "fed", "hatched", "stolen"],
 correctIndex: 2
},
{
 question: "Strike while the iron is ........",
 options: ["heating", "heated", "hot", "soft"],
 correctIndex: 2
},
{
 question: "The grass is always ....... on the other side.",
 options: ["blacker", "further", "greener", "longer"],
 correctIndex: 2
},
{
 question: "Poor Mary was a bit of a ....... at the dance.",
 options: ["cornflower", "cauliflower", "wallflower", "wildflower"],
 correctIndex: 2
},
{
 question: "Money doesn't grow on ........",
 options: ["plants", "bulbs", "trees", "bushes"],
 correctIndex: 2
},
{
 question: "A bird in the hands is worth ....... in the bush.",
 options: ["four", "three", "two", "one"],
 correctIndex: 2
},
{
 question: "They simply couldn't decide which restaurant to choose and so in the end they took a vote and the ....... decided on a Chinese one.",
 options: ["most", "more", "majority", "main"],
 correctIndex: 2
},
{
 question: "There was a great discussion about which particular type of cuisine the guests would choose and finally they reached a ....... and settled on the set menu.",
 options: ["compromising", "compromised", "compromise", "compromisingly"],
 correctIndex: 2
},
{
 question: "It doesn't matter how late you arrive at this restaurant you can always ....... on a warm welcome from the owner.",
 options: ["trust", "confide", "rely", "believe"],
 correctIndex: 2
},
{
 question: "They like to think they're very important people but politicians just talk a lot of hot ....... most of the time.",
 options: ["words", "steam", "air", "stuff"],
 correctIndex: 2
},
{
 question: "The accused was sentenced to life imprisonment after it had been established that he had committed the murder in cold ........",
 options: ["attack", "feeling", "blood", "passion"],
 correctIndex: 2
},
{
 question: "The trouble is somebody is ........",
 options: ["standing to me", "standing from me", "standing in front of me", "standing about me"],
 correctIndex: 2
},
{
 question: "The best thing I suppose is to ask him ........",
 options: ["to disappear", "to vanish", "to move", "to depart"],
 correctIndex: 2
},
{
 question: "Yes, now he's gone I can see that there are two cars in the car park that have ........",
 options: ["gone through each one", "gone by one another", "gone into one another", "gone into each one"],
 correctIndex: 2
},
{
 question: "I'm walking right up to the crowd now to see ........",
 options: ["what's happen", "what's happens", "what's happened", "what's occuring"],
 correctIndex: 2
},
{
 question: "I can see from the expression on your face that you haven't ........",
 options: ["got a thought", "got a view", "got a clue", "got a suggestion"],
 correctIndex: 2
},
{
 question: "There is a man in the river fully clothed who is ........",
 options: ["in problems", "in hardships", "in difficulties", "in hazards"],
 correctIndex: 2
},
{
 question: "The man on the river bank, who is good at grammar, thinks the man really wants to drown, walks on and ........",
 options: ["allows him drown", "permits him drown", "lets him drown", "lets him to drown"],
 correctIndex: 2
},
{
 question: "They had never left their pond before and to them it was a very big ........",
 options: ["advent", "adventurous", "adventure", "adventurer"],
 correctIndex: 2
},
{
 question: "The weather was perfect and the sun never ........",
 options: ["stopped to shine", "stopped to burn", "stopped shining", "stopped shone"],
 correctIndex: 2
},
{
 question: "In the hot sun they started to feel sleepy and very soon ........",
 options: ["fell into asleep", "fell into sleep", "fell asleep", "fell into sleepy"],
 correctIndex: 2
},
{
 question: "Sadly the smaller frog grew tired and drowned but the older one kept on moving about and in the morning ........",
 options: ["found he was sat on a barrel of butter", "found he sat on a barrel of butter", "found he was sitting on a barrel of butter", "found he sits on a barrel of butter"],
 correctIndex: 2
},
{
 question: "Jane: Did you know you broke the glass when you ....... the door last night?",
 options: ["smashed", "crashed", "slammed", "slashed"],
 correctIndex: 2
},
{
 question: "Mike: That doesn't prove anything. Actually I heard the sound of glass ....... in the night.",
 options: ["creaking", "crackling", "breaking", "broken"],
 correctIndex: 2
},
{
 question: "Alan: Excuse me ....... but what are you doing?",
 options: ["intervening", "interviewing", "interrupting", "intercepting"],
 correctIndex: 2
},
{
 question: "User: Sorry I didn't mean to be rude but I'm trying to ........",
 options: ["deliberate", "ruminate", "concentrate", "cogitate"],
 correctIndex: 2
},
{
 question: "User: I'm working on those ....... English tests, which I find very interesting.",
 options: ["notorious", "fabled", "famous", "infamous"],
 correctIndex: 2
},
{
 question: "Alan: Oh, yes I've heard of them. Do they ....... you with your English?",
 options: ["aid", "support", "help", "comfort"],
 correctIndex: 2
},
{
 question: "Alan: If that's how you feel, I'll leave you ........",
 options: ["lonely", "lonesome", "alone", "apart"],
 correctIndex: 2
},
{
 question: "I hope you haven't because I'm about to ....... it to you now.",
 options: ["restore", "repeat", "relate", "regain"],
 correctIndex: 2
},
{
 question: "Somebody once used her advice and made a ....... out of buying shares in a small company that did well.",
 options: ["heap", "gold", "fortune", "amount"],
 correctIndex: 2
},
{
 question: "Some others wanted to try and ....... her out and prove that she didn't have this special ability.",
 options: ["make", "take", "catch", "do"],
 correctIndex: 2
},
{
 question: "Mike Andrews, whose idea it was, intended to give everything back but he just wanted to ....... her ability.",
 options: ["discover", "try", "test", "examine"],
 correctIndex: 2
},
{
 question: "I can't ....... those silly people who always go around with their mobile phones glued to their ears.",
 options: ["head", "hand", "stomach", "finger"],
 correctIndex: 2
},
{
 question: "Come on, shake a ....... we're running late.",
 options: ["nose", "hand", "leg", "foot"],
 correctIndex: 2
},
{
 question: "As she's such a nasty little thing, I can see it won't take her long to wrap you round her little ........",
 options: ["shoulder", "body", "finger", "tongue"],
 correctIndex: 2
},
{
 question: "Could you please give me a ....... I'm afraid I can't handle it by myself.",
 options: ["tooth", "foot", "hand", "finger"],
 correctIndex: 2
},
{
 question: "What you could hear was the ants who were ....... drying grain.",
 options: ["active", "doing", "busy", "business"],
 correctIndex: 2
},
{
 question: "The grasshopper was so weak he was practically ....... because he hadn't eaten for ages.",
 options: ["straining", "stalking", "starving", "streaming"],
 correctIndex: 2
},
{
 question: "Whenever the hunter came home, he always gave the house dog a large ....... of what he caught.",
 options: ["section", "slice", "portion", "quantity"],
 correctIndex: 2
},
{
 question: "What made things worse, he continued, was that the house dog never ....... part in any of the hunting.",
 options: ["did", "put", "took", "had"],
 correctIndex: 2
},
{
 question: "The house dog felt he had to ....... himself in the face of all this criticism.",
 options: ["display", "detect", "defend", "distend"],
 correctIndex: 2
},
{
 question: "The tortoise agreed that the hare ran as fast as the wind but claimed that he could easily ....... him in a race.",
 options: ["strike", "hit", "beat", "knock"],
 correctIndex: 2
},
{
 question: "The tortoise never stopped and continued walking at a ....... pace all the time to the end of the race.",
 options: ["steadying", "steadied", "steady", "steadily"],
 correctIndex: 2
},
{
 question: "It wasn't long before the hare fell into a ....... sleep.",
 options: ["profound", "steep", "deep", "full"],
 correctIndex: 2
},
{
 question: "At the end of the race the tortoise, ....... by all his hard work, was quietly slumbering on the line.",
 options: ["destroyed", "excavated", "exhausted", "evacuated"],
 correctIndex: 2
},
{
 question: "The skill of course of the writing is how many times a reader can be sent up ....... alleys.",
 options: ["short", "twisted", "blind", "long"],
 correctIndex: 2
},
{
 question: "As a result you feel as if you are walking in a ....... since at each turning you come to a block end.",
 options: ["muddle", "mess", "maze", "mist"],
 correctIndex: 2
},
{
 question: "One by one he ....... the innocent until finally the murderer is unmasked.",
 options: ["extinguishes", "excludes", "eliminates", "exerts"],
 correctIndex: 2
},
{
 question: "Because it is coming so close observers are hoping to settle the argument about life on the planet once and for ........",
 options: ["everything", "every", "all", "altogether"],
 correctIndex: 2
},
{
 question: "A spacecraft is heading for the planet with a device that will ....... into the soil to sniff for proof of any life.",
 options: ["hole", "swim", "burrow", "turn"],
 correctIndex: 2
},
{
 question: "Everyone hopes that Mars will remain dust free otherwise people will only be able to see an orange ........",
 options: ["blot", "block", "blob", "blab"],
 correctIndex: 2
},
{
 question: "Most students have to try and earn extra money by taking a holiday job. They turn ....... their studies and experience the real world for a while.",
 options: ["into", "down", "aside from", "to"],
 correctIndex: 2
},
{
 question: "Perhaps I should turn that word 'waiting' ....... a more specific explanation: I mean being a waiter in a hotel.",
 options: ["down", "to", "into", "aside from"],
 correctIndex: 2
},
{
 question: "It had been a very large private house that had been turned ....... a small hotel for twenty-five guests.",
 options: ["out", "down", "into", "to"],
 correctIndex: 2
},
{
 question: "Most of the residents were elderly and so they all invariably turned ....... early most evenings.",
 options: ["down", "over", "in", "into"],
 correctIndex: 2
},
{
 question: "However, as she told me frequently, she had no intention of turning ....... an old fogey herself.",
 options: ["over", "down", "into", "in"],
 correctIndex: 2
},
{
 question: "Sadly Doris had already turned her back ....... me and gone back to the kitchen.",
 options: ["against", "out", "on", "in"],
 correctIndex: 2
},
{
 question: "I'm now ready to turn ....... for the night but the worrying thing is I just can't remember what I had for supper.",
 options: ["up", "on", "in", "out"],
 correctIndex: 2
},
{
 question: "I'm sorry that looks awful — those two colours ........",
 options: ["smash", "crash", "clash", "hash"],
 correctIndex: 2
},
{
 question: "My advice to you is to make your mind up before it's too late and simply ........",
 options: ["take the opportunity soon", "take the opportunity fairly", "take the opportunity now", "take the opportunity slowly"],
 correctIndex: 2
},
{
 question: "If petrol prices ....... any more, I shall have to use a bicycle.",
 options: ["ascend", "raise", "increase", "develop"],
 correctIndex: 2
},
{
 question: "George denied everything and said he would ....... any newspaper which dared to print stories about him.",
 options: ["sow", "see", "sue", "sew"],
 correctIndex: 2
},
{
 question: "Wherever George went, journalists would follow him to try and find a way to ....... him.",
 options: ["exhort", "exercise", "expose", "extract"],
 correctIndex: 2
},
{
 question: "As it turned out these were not sausages but in fact very big carrots and the photographer had to pay enormous ........",
 options: ["harms", "hurts", "damages", "injuries"],
 correctIndex: 2
},
{
 question: "It's getting late now and I'm very tired so I think we'll ....... it a day.",
 options: ["name", "describe", "call", "label"],
 correctIndex: 2
},
{
 question: "After a very long engagement Mike and Mary decided at last to ....... the day.",
 options: ["state", "mention", "name", "hold"],
 correctIndex: 2
},
{
 question: "Despite all the problems and difficulties Charlie turned up at last minute and ....... the day.",
 options: ["caught", "hit", "saved", "took"],
 correctIndex: 2
},
{
 question: "No matter what happens, you must remember that I'm ....... you all the way.",
 options: ["in", "from", "with", "by"],
 correctIndex: 2
},
{
 question: "Even if things get difficult, I will not ....... or hesitate to stand up for you.",
 options: ["quiver", "tremble", "waver", "waiver"],
 correctIndex: 2
},
{
 question: "The pair of you have my ....... and I hope you have a happy marriage together.",
 options: ["wishing", "praying", "blessing", "hoping"],
 correctIndex: 2
},
{
 question: "She was slowly going ....... her mind with worry until she heard her daughter was safe and well.",
 options: ["past by", "in to", "out of", "straight through"],
 correctIndex: 2
},
{
 question: "I'm inclined to give her a ....... of my mind considering all the trouble she has caused this month.",
 options: ["section", "slice", "piece", "portion"],
 correctIndex: 2
},
{
 question: "I just can't decide whether to go on holiday this week or later in the year. I'm really in ....... minds about it.",
 options: ["twice", "double", "two", "dual"],
 correctIndex: 2
},
{
 question: "Now, I must insist as your supervisor if you really want to ....... on in your career, you must tell me the truth.",
 options: ["take", "break", "get", "hold"],
 correctIndex: 2
},
{
 question: "Now, you're being sensible — ....... on.",
 options: ["catch", "find", "carry", "join"],
 correctIndex: 2
},
{
 question: "Thank you for your honesty. Now ....... up that piece of paper.",
 options: ["take", "show", "pick", "hold"],
 correctIndex: 2
},
{
 question: "The so-called ....... majority are the vast number of people who don't actually go out on the street and protest.",
 options: ["quiet", "noiseless", "silent", "still"],
 correctIndex: 2
},
{
 question: "The villagers complained about the noise from the daily bell ringing practice from the church and asked if it could somehow be ........",
 options: ["suppressed", "stifled", "muffled", "wrapped"],
 correctIndex: 2
},
{
 question: "As a child she would burst into tears at every problem and so she soon got known as a regular ....... at school.",
 options: ["crychild", "cryinfant", "crybaby", "crygirl"],
 correctIndex: 2
},
{
 question: "George is now 70 and he reckons that working conditions for the average office clerk today are a ....... cry from when he first started work.",
 options: ["distant", "long", "far", "further"],
 correctIndex: 2
},
{
 question: "Our leading actor is unable to come on the stage at the moment because he is ....... with emotion.",
 options: ["overtaken", "overdrawn", "overcome", "overturned"],
 correctIndex: 2
},
{
 question: "You see throughout our ....... season we have never received so much laughter as we have from you.",
 options: ["currant", "curious", "current", "curtain"],
 correctIndex: 2
},
{
 question: "The reason for this is that the Fiesta is ....... our delivery lorry from leaving the premises.",
 options: ["holding", "keeping", "preventing", "promoting"],
 correctIndex: 2
},
{
 question: "Further to our ....... for the Ford Fiesta to be reparked, this matter is now very urgent. Our lorry cannot get out.",
 options: ["saying", "asking", "request", "question"],
 correctIndex: 2
},
{
 question: "The small cafe situated near platform 6 is now ....... free cups of tea to those waiting for the London train.",
 options: ["discharging", "dispensing", "offering", "disposing"],
 correctIndex: 2
},
{
 question: "This is a general notice for all passengers: the restaurant in the main ....... is now open.",
 options: ["concord", "conduit", "concourse", "condition"],
 correctIndex: 2
},
{
 question: "Hi listeners, I should explain that I have a ....... eye view of this magnificent sight as the parade passes underneath me.",
 options: ["cat's", "dog's", "bird's", "rat's"],
 correctIndex: 2
},
{
 question: "It really is quite uncomfortable up here and there's a policeman ....... at me, which I don't like.",
 options: ["spying", "guiding", "staring", "starring"],
 correctIndex: 2
},
{
 question: "Next I can see some pensioners slowly moving along the road and some can't walk and are in ........",
 options: ["highchairs", "low chairs", "wheelchairs", "pushchairs"],
 correctIndex: 2
},
{
 question: "Most people considered that they were ....... for each other even in those days.",
 options: ["done", "making", "made", "makes"],
 correctIndex: 2
},
{
 question: "The teachers had a ....... spot for them too and were sympathetic if there was any trouble between them.",
 options: ["gentle", "simple", "soft", "quiet"],
 correctIndex: 2
},
{
 question: "When the announcement was made about their ......., there was a big celebration.",
 options: ["engage", "engages", "engagement", "engaged"],
 correctIndex: 2
},
{
 question: "In our publicity, unlike our political ......., we do not make a lot of noise about our policies.",
 options: ["attackers", "destroyers", "opponents", "hitters"],
 correctIndex: 2
},
{
 question: "At the moment we are trying very hard to increase our membership which ....... stands at 500.",
 options: ["presence", "presents", "presently", "presenting"],
 correctIndex: 2
},
{
 question: "But then you all have turned ....... tonight and that proves there is growing interest in our ideals.",
 options: ["in", "over", "up", "into"],
 correctIndex: 2
},
{
 question: "Her latest film ....... its object in a very short space of time, which was to shock.",
 options: ["acquired", "got", "attained", "controlled"],
 correctIndex: 2
},
{
 question: "The director's intention in making the film was to try and ....... simplicity as seen by a child.",
 options: ["report", "reprehend", "represent", "comprehend"],
 correctIndex: 2
},
{
 question: "The delay in ....... the film to the general public was because certain scenes were considered tasteless.",
 options: ["replacing", "repeating", "releasing", "reporting"],
 correctIndex: 2
},
{
 question: "Personally I don't believe a word of it and if you want my opinion I think it's all stuff and ........",
 options: ["garbage", "trash", "nonsense", "rubbish"],
 correctIndex: 2
},
{
 question: "You shouldn't really have any difficulties with the work they're doing as it's very basic in fact you could call it ....... stuff.",
 options: ["babies'", "children's", "kids'", "juniors'"],
 correctIndex: 2
},
{
 question: "....... the stuff! I want to hear it loud and clear and as much of it as you can manage. Well done!",
 options: ["Here", "There", "That's", "More"],
 correctIndex: 2
},
{
 question: "It came as a great shock to him when he heard the news and quite ....... the stuffing out of him for days.",
 options: ["hit", "pulled", "knocked", "threw"],
 correctIndex: 2
},
{
 question: "Personally I don't believe a word he told us because I think it was just a ....... story.",
 options: ["big", "high", "tall", "long"],
 correctIndex: 2
},
{
 question: "I have high ....... that we will succeed with our project in view of all the interest we have received.",
 options: ["feelings", "sensations", "hopes", "views"],
 correctIndex: 2
},
{
 question: "He left the safe door unlocked last night so I reckon he'll be for the high ....... this morning.",
 options: ["leap", "go", "jump", "try"],
 correctIndex: 2
},
{
 question: "They wanted to make sure that their small daughter shared in the meal and so they asked the restaurant to provide a high ........",
 options: ["place", "seat", "chair", "position"],
 correctIndex: 2
},
{
 question: "The young couple in the story only meet about three times but still manage to ....... deeply in love.",
 options: ["go", "drop", "fall", "feel"],
 correctIndex: 2
},
{
 question: "Everything is so much bigger than you expect and you are constantly ....... your head from side to side.",
 options: ["tipping", "testing", "turning", "trying"],
 correctIndex: 2
},
{
 question: "Charlie didn't have much in the way of property — just ....... and pieces.",
 options: ["things", "dots", "bits", "section"],
 correctIndex: 2
},
{
 question: "Charlie came home when the burglar was still there but he didn't ....... to pieces, he stayed calm.",
 options: ["find", "come", "go", "try"],
 correctIndex: 2
},
{
 question: "The burglar explained that he didn't have a proper job and only did piece ........",
 options: ["works", "working", "work", "worker"],
 correctIndex: 2
},
{
 question: "No-one knows whether he'll succeed in his attempt to get compensation as it's a bit of a test ........",
 options: ["theme", "process", "case", "example"],
 correctIndex: 2
},
{
 question: "These are indeed ....... times for the government as people are deciding whether to vote for them in the next election.",
 options: ["tested", "tester", "testing", "testable"],
 correctIndex: 2
},
{
 question: "The aircraft engine had to be placed in a test ....... to make sure that it worked properly.",
 options: ["pit", "hole", "bed", "centre"],
 correctIndex: 2
},
{
 question: "I really think we should talk about the subject we wanted to in the first place and ....... the issue.",
 options: ["advise", "speak", "address", "talk"],
 correctIndex: 2
},
{
 question: "We don't know precisely how much it will cost but I could give a ....... figure of 6 million dollars.",
 options: ["ball field", "ball place", "ball park", "ball game"],
 correctIndex: 2
},
{
 question: "I hope you will be patient and ....... with me a minute.",
 options: ["stay", "hold", "bear", "maintain"],
 correctIndex: 2
},
{
 question: "He's one of those people who can't bear being seen to be wrong in fact of losing ........",
 options: ["looks", "appearance", "face", "looking"],
 correctIndex: 2
},
{
 question: "She panicked when she skidded on the ice, lost her ....... and crashed into the tree.",
 options: ["control", "brain", "head", "skull"],
 correctIndex: 2
},
{
 question: "After he'd wasted all his money, got into debt and then ended up in prison, his family began to regard him as a bit of a lost ........",
 options: ["case", "reason", "cause", "argument"],
 correctIndex: 2
},
{
 question: "The trouble with him is that if you push him too far, he's likely to shout at you and lose his ........",
 options: ["cold", "coldness", "cool", "ice"],
 correctIndex: 2
},
{
 question: "Despite his great age we realized that he'd not lost his ....... because he was still able to deliver a wonderful speech.",
 options: ["feel", "contact", "touch", "feeling"],
 correctIndex: 2
},
{
 question: "As she was walking across the tight rope at the circus she lost her ....... and fell to the ground.",
 options: ["control", "direction", "balance", "sense"],
 correctIndex: 2
},
{
 question: "Could I know why the business has ....... so long to conclude?",
 options: ["lasted", "endured", "taken", "found"],
 correctIndex: 2
},
{
 question: "What has ....... to your New Year resolution to stop smoking?",
 options: ["occurred", "fallen", "happened", "occasioned"],
 correctIndex: 2
},
{
 question: "Mind, the doors are ........",
 options: ["finishing", "ending", "closing", "falling"],
 correctIndex: 2
},
{
 question: "Hallo, do you see what you did to that ....... of books when you walked past?",
 options: ["hill", "mount", "pile", "store"],
 correctIndex: 2
},
{
 question: "I can honestly say I haven't had such a ....... meal for ages.",
 options: ["delight", "delighted", "delightful", "delighting"],
 correctIndex: 2
},
{
 question: "I must ....... you on your performance in the play — it was remarkable.",
 options: ["impress", "advise", "congratulate", "enquire"],
 correctIndex: 2
},
{
 question: "Even if I ....... for a hundred years, I couldn't possibly reach your standard.",
 options: ["perfected", "pursued", "practised", "polished"],
 correctIndex: 2
},
{
 question: "I know I ....... do it because I have done it before.",
 options: ["ought", "must", "can"],
 correctIndex: 2
},
{
 question: "It's quite clear that you ....... to visit their house, so why don't you?",
 options: ["have been able", "may", "want"],
 correctIndex: 2
},
{
 question: "It's the right thing to do in this situation and it's my belief that you ....... to go.",
 options: ["should", "might", "ought"],
 correctIndex: 2
},
{
 question: "....... I have your permission to leave the meeting early?",
 options: ["Will", "Would", "May"],
 correctIndex: 2
},
{
 question: "Now there's no argument here. You ....... to finish on time because you have no choice.",
 options: ["must", "can", "have"],
 correctIndex: 2
},
{
 question: "Was because I had amassed some rather large ........",
 options: ["sums", "amounts", "bills", "totals"],
 correctIndex: 2
},
{
 question: "My trainer was a postman by the ....... of Ted.",
 options: ["title", "label", "name", "sign"],
 correctIndex: 2
},
{
 question: "He didn't want any of his ....... to imagine that being a postman was an easy job.",
 options: ["trainers", "training", "trainees", "trains"],
 correctIndex: 2
},
{
 question: "who ....... it was a part-time job because it was all finished by mid-day.",
 options: ["tested", "criticised", "claimed", "held"],
 correctIndex: 2
},
{
 question: "Sometimes you found some ....... handwriting and didn't know where the letter should go.",
 options: ["wonderful", "meticulous", "terrible", "beautiful"],
 correctIndex: 2
},
{
 question: "Ted was always calm and optimistic. He never let himself get ....... by the job.",
 options: ["doomed", "downgraded", "depressed", "downed"],
 correctIndex: 2
},
{
 question: "The post office in this country district didn't use vans because of the ........",
 options: ["costing", "monies", "expense", "expenses"],
 correctIndex: 2
},
{
 question: "The shouts of joy coming from some houses as I put the mail through the letter ....... made up for the discomfort and.",
 options: ["space", "line", "box", "opening"],
 correctIndex: 2
},
{
 question: "I knew if I told Ted he would talk a lot about being strictly against the rules but I was convinced it didn't ........",
 options: ["concern", "affect", "matter", "worry"],
 correctIndex: 2
},
{
 question: "clutching the precious bundle in my hand I ....... it through the letter box",
 options: ["gave", "took", "thrust", "turned"],
 correctIndex: 2
},
{
 question: "to the sound of the ....... dog, I knocked by accident the garden gate just in time to hear a voice shouting:",
 options: ["braying", "breathing", "barking", "hooting"],
 correctIndex: 2
},
{
 question: "I'm afraid you can't make yourself any younger and turn the clock ........",
 options: ["to", "by", "back", "down"],
 correctIndex: 2
},
{
 question: "I've clocked ....... about an additional 20 hours this week in overtime pay.",
 options: ["on", "for", "up", "with"],
 correctIndex: 2
},
{
 question: "Yesterday the project manager suddenly announced that the launch of the new promotion campaign had been ....... because of software problems.",
 options: ["transcended", "created", "postponed", "founded"],
 correctIndex: 2
},
{
 question: "Because of their expertise the two young engineers have been ....... the opportunity to join our staff.",
 options: ["offer", "offering", "offered", "offers"],
 correctIndex: 2
},
{
 question: "From a very early age Cathy had been passionate ....... animals.",
 options: ["of", "to", "about", "through"],
 correctIndex: 2
},
{
 question: "In fact because he had refused to kow tow to (accept without question) some of the official regulations, he had been forced to take ....... retirement.",
 options: ["busy", "easy", "early", "quick"],
 correctIndex: 2
},
{
 question: "Cathy and her father had several pow wows (conversations) about her decision but it usually ....... up with a lot of argy bargy (arguments).",
 options: ["concluded", "terminated", "ended", "lasted"],
 correctIndex: 2
},
{
 question: "who was also ....... by some as a bit of a wheeler dealer (someone who does business in an underhand way).",
 options: ["looked", "pictured", "regarded", "believed"],
 correctIndex: 2
},
{
 question: "One morning there was quite a hubbub (loud noise and activity) in the Fortune ....... when Cathy came rushing into the sitting room helter skelter (running at great speed),",
 options: ["housework", "housebound", "household", "housetops"],
 correctIndex: 2
},
{
 question: "As far as he was concerned this would be a ....... of time because the speakers at the rally would just talk mumbo jumbo (nonsense).",
 options: ["waist", "wasting", "waste", "worst"],
 correctIndex: 2
},
{
 question: "On the train journey she began to think about what her father had said with his ....... to the rag bag (muddled collection) of ideas in her organisation.",
 options: ["direction", "referral", "reference", "referred"],
 correctIndex: 2
},
{
 question: "And if she was really ....... with herself she was beginning to have a teenie weenie (very small) feeling of doubt as to whether she was doing the right thing.",
 options: ["honoured", "honourable", "honest", "honourably"],
 correctIndex: 2
},
{
 question: "At the beginning it was a bit harum scarum (disorganised) and people were running higgledy piggledy (in different and chaotic directions) but soon everything ....... down,",
 options: ["set", "seated", "settled", "setting"],
 correctIndex: 2
},
{
 question: "And then one incident at the end of the rally convinced her that she had ....... the right decision to work for the organisation.",
 options: ["done", "got", "taken", "brought"],
 correctIndex: 2
},
{
 question: "Andrew worried about the weather, the state of the pound, his health, the cost of ....... and once he even worried because he thought he wasn't worrying enough.",
 options: ["life", "existence", "living", "existing"],
 correctIndex: 2
},
{
 question: "He simply thinks to himself: 'I live in a small village by a little stream and ....... this time of year lots of creatures start to wake up and make a lot of noise.'",
 options: ["across", "through", "around", "against"],
 correctIndex: 2
},
{
 question: "The other ....... in this anecdote is a young woman called Sally Fairweather.",
 options: ["feature", "part", "character", "principal"],
 correctIndex: 2
},
{
 question: "The next participant in this village drama is the weather, which ....... a very significant part in English life.",
 options: ["holds", "manages", "plays", "controls"],
 correctIndex: 2
},
{
 question: "Everyone in the pub looks ....... depressed at this remark and begins to think of all the price increases that will follow.",
 options: ["ideally", "conveniently", "suitably", "easily"],
 correctIndex: 2
},
{
 question: "He walks over to her and asks if she is ....... right.",
 options: ["everything", "some", "all", "total"],
 correctIndex: 2
},
{
 question: "The conversation went as follows: 'I hear you live in this village, too' — 'How do you .......?' asked Andrew.",
 options: ["discover", "find", "know", "realise"],
 correctIndex: 2
},
{
 question: "I always keep those two ....... with me when I go out at night.",
 options: ["particles", "parts", "ingredients", "contents"],
 correctIndex: 2
},
{
 question: "Immediately Andrew started to worry. He didn't know her name. He didn't know her address and he felt strange. He ....... his pulse. He tests his mental faculties: 'Two and two make four.'",
 options: ["detects", "investigates", "checks", "ticks"],
 correctIndex: 2
},
{
 question: "He jumps down from the platform onto the ....... and waves at the train driver to stop. The train stops and Andrew gets onto it.",
 options: ["path", "road", "track", "lane"],
 correctIndex: 2
},
{
 question: "The obvious time when people ....... him to start worrying was.",
 options: ["waited", "awaited", "expected", "stood"],
 correctIndex: 2
},
{
 question: "But I was perfectly relaxed and I ....... it all to Sally. She is certainly a wonderful wife.",
 options: ["debt", "lend", "owe", "borrow"],
 correctIndex: 2
},
{
 question: "You can see me ....... relaxed in the newspaper pictures especially that one with the caption: 'ANDREW SMODLEY HANDS THE RING TO SALLY FAIRWEATHER'S FUTURE HUSBAND.'",
 options: ["trying", "seeing", "looking", "watching"],
 correctIndex: 2
},
{
 question: "I ....... come if I had had time.",
 options: ["have", "had", "would have", "did"],
 correctIndex: 2
},
{
 question: "Where did you ....... for your holiday in the end?",
 options: ["went", "gone", "go", "going"],
 correctIndex: 2
},
{
 question: "How many times ....... you been there?",
 options: ["has", "will", "have", "did"],
 correctIndex: 2
},
{
 question: "I honestly couldn't follow a word you ........",
 options: ["are saying", "will say", "were saying", "did say"],
 correctIndex: 2
},
{
 question: "I've just ....... that the price has gone up again.",
 options: ["am told", "have told", "been told", "was told"],
 correctIndex: 2
},
{
 question: "Ah there you .......! I wondered where you were.",
 options: ["be", "were", "are", "have been"],
 correctIndex: 2
},
{
 question: "He told them he ....... starting work the next day.",
 options: ["will be", "will have been", "would be", "would have been"],
 correctIndex: 2
},
{
 question: "Don't worry even if you make a mistake because if you ......., it doesn't matter.",
 options: ["were doing", "had done", "do", "will do"],
 correctIndex: 2
},
{
 question: "The man who ....... walking down the road just then, lives next door.",
 options: ["is", "will be", "was", "has been"],
 correctIndex: 2
},
{
 question: "I didn't think he looked very well when we last saw him — in fact he was really out of ........",
 options: ["order", "form", "sorts", "trend"],
 correctIndex: 2
},
{
 question: "I don't know what's the matter with me today I suppose I'm feeling under the ........",
 options: ["clouds", "rain", "weather", "tiles"],
 correctIndex: 2
},
{
 question: "Now remember don't be late with your thesis and don't forget the ....... is Tuesday week.",
 options: ["sideline", "by line", "deadline", "lifeline"],
 correctIndex: 2
},
{
 question: "Teacher: So you want to learn ....... English?",
 options: ["speak", "speaking", "to speak", "speaks"],
 correctIndex: 2
},
{
 question: "Yes, that's ....... for you to say.",
 options: ["facile", "straight", "easy", "interesting"],
 correctIndex: 2
},
{
 question: "Student: So what am I ....... to do?",
 options: ["being", "asking", "going", "beginning"],
 correctIndex: 2
},
{
 question: "Teacher: So what do you know ....... prepositions?",
 options: ["from", "at", "about", "in"],
 correctIndex: 2
},
{
 question: "Student: I see. But what's the difference ....... in and into?",
 options: ["from", "among", "between", "for"],
 correctIndex: 2
},
{
 question: "Student: Another problem is I don't understand ....... there are two words sounding the same — T and one O and T double O.",
 options: ["because", "whenever", "why", "that's why"],
 correctIndex: 2
},
{
 question: "Teacher: Absolutely perfect. Now what ....... the Present Perfect Continuous?",
 options: ["through", "into", "about", "concerning"],
 correctIndex: 2
},
{
 question: "Student: Oh, that's easy. I say: I have lived here for 6 years. I can see from the ....... on your face I am right.",
 options: ["depression", "impression", "expression", "derision"],
 correctIndex: 2
},
{
 question: "He never looks where he's going and as a result is always walking ....... things.",
 options: ["up", "on", "into", "beyond"],
 correctIndex: 2
},
{
 question: "A total stranger walked ....... to me and asked if I could lend him some money.",
 options: ["along", "by", "up", "under"],
 correctIndex: 2
},
{
 question: "The manager was terrified that his employees would stop work and walk ....... without warning.",
 options: ["over", "about", "out", "at"],
 correctIndex: 2
},
{
 question: "Charlie always thought he was the ....... knees because he had a very good opinion of himself.",
 options: ["cat's", "dog's", "bee's", "mouse's"],
 correctIndex: 2
},
{
 question: "Then he met Maria as a grown up and fell in love as a sort of knee ....... reaction almost without thinking.",
 options: ["leap", "jump", "jerk", "trip"],
 correctIndex: 2
},
{
 question: "If you keep the window open all the time, you'll need something heavy like a paper-....... to stop things blowing away.",
 options: ["stone", "rock", "weight", "block"],
 correctIndex: 2
},
{
 question: "As soon as the story about the scandal became known, it didn't take long to ....... the papers.",
 options: ["strike", "attack", "hit", "thump"],
 correctIndex: 2
},
{
 question: "Where ....... tonight?",
 options: ["you go", "going", "are you going", "had you gone"],
 correctIndex: 2
},
{
 question: "I hope I ....... offended you.",
 options: ["didn't", "won't", "haven't", "couldn't"],
 correctIndex: 2
},
{
 question: "So, ....... got an idea.",
 options: ["I'd", "I'll", "I've", "I'm"],
 correctIndex: 2
},
{
 question: "That ....... a good idea to me.",
 options: ["has sounded", "will sound", "sounds", "shall sound"],
 correctIndex: 2
},
{
 question: "Mike: Please go away. I'm ....... a letter. I need some quiet.",
 options: ["written", "wrote", "writing", "will write"],
 correctIndex: 2
},
{
 question: "Mike: I don't honestly think you ....... telling the truth.",
 options: ["were", "had been", "are", "will be"],
 correctIndex: 2
},
{
 question: "Mike: All right. You ....... stay as long as you don't make any noise.",
 options: ["will", "could", "can", "will"],
 correctIndex: 2
},
{
 question: "If they had waited another month, they could probably ....... a better price for their house",
 options: ["would get", "had got", "have got", "could get"],
 correctIndex: 2
},
{
 question: "It's quite simple really. When it's cold, water ........",
 options: ["froze", "has frozen", "freezes", "had frozen"],
 correctIndex: 2
},
{
 question: "If he hadn't been driving so fast, he ....... have hit the motorcyclist.",
 options: ["didn't", "hadn't", "wouldn't", "hasn't"],
 correctIndex: 2
},
{
 question: "If I pay you twice as much, will you ....... to finish by Tuesday?",
 options: ["are able", "is able", "be able", "can be able"],
 correctIndex: 2
},
{
 question: "Janine! Where were you? I've been looking all over for you. — Sorry, mom! I was reading a book by the tree over the lake, fell ....... and lost track of the time.",
 options: ["sleep", "sleepy", "asleep", "slept"],
 correctIndex: 2
},
{
 question: "What time do you usually go to ....... at night? — Hmm... usually at about midnight.",
 options: ["sleepy", "asleep", "sleep", "dream"],
 correctIndex: 2
},
{
 question: "My neighbor likes ....... every day after lunch.",
 options: ["to hibernate", "to doze off", "to take a nap", "to snore"],
 correctIndex: 2
},
{
 question: "The main question is knowing where you .......?",
 options: ["commence", "initiate", "start", "activate"],
 correctIndex: 2
},
{
 question: "But I should ....... myself from talking about",
 options: ["control", "halt", "stop", "exact"],
 correctIndex: 2
},
{
 question: "that each tense has two ........",
 options: ["shapes", "figures", "forms", "outlines"],
 correctIndex: 2
},
{
 question: "This is something he ....... every day.",
 options: ["did", "doing", "does", "done"],
 correctIndex: 2
},
{
 question: "We say: he is walking home now and that means at this ....... and is the Present continuous tense.",
 options: ["day", "period", "moment", "occasion"],
 correctIndex: 2
},
{
 question: "When disaster strikes, will your insurer ....... for you?",
 options: ["come out", "come over", "come through", "come to"],
 correctIndex: 2
},
{
 question: "If you have eaten a banana in the last 2-3 days and ....... a fever followed by a skin infection, you should seek urgent medical attention!",
 options: ["come across", "come up with", "come down with", "come out with"],
 correctIndex: 2
},
{
 question: "Making the decision to ....... about your sexual preferences can sometimes be scary and stressful.",
 options: ["come along", "come back", "come out", "come over"],
 correctIndex: 2
},
{
 question: "I have always ....... my grandfather because he has lived such an amazing life.",
 options: ["looked at", "looked for", "looked up to", "looked after"],
 correctIndex: 2
},
{
 question: "The view from the penthouse suite of the five star hotel ....... over the Pacific Ocean.",
 options: ["looks for", "looks at", "looks out", "looks after"],
 correctIndex: 2
},
{
 question: "When I blamed the hospital for giving me the wrong medicine, the managment ....... the matter very carefully.",
 options: ["looked at", "looked for", "looked into", "looked after"],
 correctIndex: 2
},
{
 question: "I want to finish my work ....... we go out.",
 options: ["until", "while", "before", "as soon as"],
 correctIndex: 2
},
{
 question: "We'll find a hotel ....... we arrive in Jakarta.",
 options: ["until", "while", "when", "as long as"],
 correctIndex: 2
},
{
 question: "I'll give you a ring ....... we get back from our vacation.",
 options: ["while", "until", "when", "as long as"],
 correctIndex: 2
},
{
 question: "When do you have to pick John up at the airport? ........",
 options: ["He flew into the international airport", "I don't think she's coming", "I should be there at about five o'clock"],
 correctIndex: 2
},
{
 question: "How many people are coming to the birthday party? ........",
 options: ["There were about 70 people at the restaurant around the corner", "Fifty people were there", "We're expecting about 25 people"],
 correctIndex: 2
},
{
 question: "What are you doing tonight? ........",
 options: ["We had a great time", "I went to that new Asian restaurant", "I think I'm going to a movie with Susan"],
 correctIndex: 2
},
{
 question: "When are you going to the party? ........",
 options: ["Cindy is coming with me", "We arrived at 7 pm", "We're going right after work"],
 correctIndex: 2
},
{
 question: "On Jen and Brad's very first date, she could tell he was as cunning as a ........",
 options: ["puppy", "bear", "fox", "wolf"],
 correctIndex: 2
},
{
 question: "Boy: I want to buy a fish. <br>Woman: Do you want a tropical fish or a cold water one? <br>Boy: I want a really colorful fish. Can you show me some of the tropical fish you have? <br>Question: What is the boy looking for? ........",
 options: ["A red and yellow fish", "A cold water Goldfish", "A tropical fish"],
 correctIndex: 2
},
{
 question: "Mary: Did you have fun at the barbeque last night? <br>Linda: Yes, I thought the games were a great touch. <br>Mary: Me too. I especially liked the three-legged race. <br>Question: What did Linda like about the barbeque? ........",
 options: ["The three-legged race", "The food", "The games"],
 correctIndex: 2
},
{
 question: "Michael: My wife and I bought some great house plants yesterday. <br>Maria: Really. Do you have a lot of sunlight in your house? <br>Michael: No, so we bought some plants that have low-light requirements. <br>Question: What kind of plants did Michael buy? ........",
 options: ["Small, house plants", "Plants that need a lot of sunlight", "Plants that don't need a lot of sunlight"],
 correctIndex: 2
},
{
 question: "Anne: Do you know the new girl in the mailroom? Richard: No, but I think she's Cathy's friend. <br>Anne: We should ask Cathy to introduce us at lunch. <br>Question: What department is the new girl in? ........",
 options: ["Cathy's department", "The reception area", "The mailroom"],
 correctIndex: 2
},
{
 question: "You're face looks horribly familiar. Haven't I seen you ....... before?",
 options: ["anywhere", "nowhere", "somewhere", "everywhere"],
 correctIndex: 2
},
{
 question: "Who was at the party? ........ Pete, Anne. Mark, Barry, all the Pearsons, Sally Masters and Sally Bennett.",
 options: ["Anyone", "Someone", "Everyone", "No one"],
 correctIndex: 2
},
{
 question: "I felt so embarrassed. I was sure that ....... was looking at me.",
 options: ["anyone", "someone", "everyone", "no one"],
 correctIndex: 2
},
{
 question: "Residents living in the immediate vicinity of the prison were told to be on the look out for a group of criminals who recently ....... out of gaol.",
 options: ["broke-off", "brpke-away", "broke-out", "broke-up"],
 correctIndex: 2
},
{
 question: "Be careful not to spill the yolk when you ....... the egg.",
 options: ["break out", "break off", "break open", "break down"],
 correctIndex: 2
},
{
 question: "My wife has a ....... job at the department store.",
 options: ["half-time", "spare-time", "part-time", "over-time"],
 correctIndex: 2
},
{
 question: "The psychiatrist gave his patient a ....... for some medicine.",
 options: ["recipe", "statement", "prescription", "receipt"],
 correctIndex: 2
},
{
 question: "Can you take this money to the bank and make a ....... for me?",
 options: ["loan", "transaction", "deposit", "withdrawal"],
 correctIndex: 2
},
{
 question: "The Australian Labour Party doesn't currently have any politicians that would be capable of successfully ....... the Prime Minister at the next federal election.",
 options: ["running away with", "running for", "running against", "running down"],
 correctIndex: 2
},
{
 question: "Can you please ....... our marketing campaign with me one more time? I don't quite fully understand it yet.",
 options: ["run off", "run into", "run through", "run after"],
 correctIndex: 2
},
{
 question: "Our dog loves to ....... the mail truck.",
 options: ["run through", "run over", "run after", "run in"],
 correctIndex: 2
},
{
 question: "The Australian government has decided to increase the number of ....... available to skilled workers next year.",
 options: ["passports", "documents", "visas", "passes"],
 correctIndex: 2
},
{
 question: "Newly arrived migrants must live in Australia for a period of two years before they are eligible to become permanent ........",
 options: ["nationalities", "populations", "residents", "inhabitants"],
 correctIndex: 2
},
{
 question: "Students at the school where I teach are so ........ They always hand in their homework on time.",
 options: ["patient", "lazy", "reliable", "friendly"],
 correctIndex: 2
},
{
 question: "Our new teacher is so ........ If we don't understand something, she goes over it again and again until we do.",
 options: ["lazy", "shy", "patient", "friendly"],
 correctIndex: 2
},
{
 question: "Barry loves to talk a lot, doesn't he? In fact, I don't think I've ever met anyone quite as ....... as him.",
 options: ["reserved", "cantankerous", "chatty", "liberal"],
 correctIndex: 2
},
{
 question: "Mary's husband is so ........ He never helps her with any of the chores around the house.",
 options: ["vigorous", "dependable", "lazy", "tolerant"],
 correctIndex: 2
},
{
 question: "You need to go to the hospital ....... possible. An erratic heartbeart can be very dangerous.",
 options: ["as good as", "as long as", "as soon as", "as much as"],
 correctIndex: 2
},
{
 question: "I had to keep my daughter home from school today because she had a ....... of 38 degrees.",
 options: ["fever", "headache", "temperature", "warmth"],
 correctIndex: 2
},
{
 question: "I usually ....... up six at 6.30 a.m. every morning.",
 options: ["awake", "rise", "get", "go"],
 correctIndex: 2
},
{
 question: "I'm sorry but I haven't ....... today.",
 options: ["read my lesson", "done my lesson", "done my homework", "studied my homework"],
 correctIndex: 2
},
{
 question: "After experiencing too many late ....... 'sinking spells', The Duchess of Bedford arrived upon the idea of having tea and finger food at about 5 p.m.",
 options: ["afterwards", "afterbirth", "afternoon", "aftertaste"],
 correctIndex: 2
},
{
 question: "I'm not convinced that the Christian ....... would mean much to me if I had to lie and cheat in order to attain it.",
 options: ["afternoon", "aftertaste", "afterlife", "afterbirth"],
 correctIndex: 2
},
{
 question: "It is better to halt mass murder than to clean it up ........",
 options: ["afterthought", "aftermath", "afterwards", "afterlife"],
 correctIndex: 2
},
{
 question: "The fruity tones of this mild balanced brew produce a delightful ........",
 options: ["afterthought", "afternoon", "aftertaste", "afterlife"],
 correctIndex: 2
},
{
 question: "Please ....... between 4:30 and 6:30 p.m. this coming Wednesday November 16 for drinks, hors d'oeuvres, and conversation.",
 options: ["drop off", "drop in on", "drop in", "drop behind"],
 correctIndex: 2
},
{
 question: "The World Congress of Georgian Jews yesterday announced the ....... of their head rabbi.",
 options: ["passing through", "passing by", "passing away", "passing round"],
 correctIndex: 2
},
{
 question: "If you were to ....... suddenly, your business could be tied up in probate court for several years.",
 options: ["pass up", "pass out", "pass away", "pass over"],
 correctIndex: 2
},
{
 question: "Foreign companies will have to ....... the hat to pay for the extra costs of doing business in Indonesia.",
 options: ["pass up", "pass by", "pass round", "pass over"],
 correctIndex: 2
},
{
 question: "Check-in counters are open two hours before the scheduled flight ....... time.",
 options: ["going", "arrival", "departure", "transit"],
 correctIndex: 2
},
{
 question: "If you fail to check in on time or fail to board the aircraft by the time the aircraft departs, the fare you paid will not be ....... to you for any reason whatsoever.",
 options: ["returned", "remunerated", "refunded", "rewarded"],
 correctIndex: 2
},
{
 question: "Children below age 12 will not be accepted for ....... unless they are accompanied by a person of at least 18 years of age.",
 options: ["journey", "voyage", "carriage", "trip"],
 correctIndex: 2
},
{
 question: "Passengers must ....... at the airport sufficiently in advance of the scheduled flight departure time to permit completion of government formalities and check-in procedures.",
 options: ["depart", "transit", "arrive", "transfer"],
 correctIndex: 2
},
{
 question: "One key to cleaning the ....... of your camera is not to touch it with your fingers.",
 options: ["zoom", "eyelet", "lens", "tripod"],
 correctIndex: 2
},
{
 question: "Pictures can be ....... by inserting a memory card containing images into a printer or having prints made at a digital photo lab.",
 options: ["taken", "shot", "printed", "exposed"],
 correctIndex: 2
},
{
 question: "Pictures are stored in ....... created automatically by the camera.",
 options: ["memory", "displays", "folders", "focus"],
 correctIndex: 2
},
{
 question: "If your camera fails to ....... as expected, you should check the troubleshooting section of your instruction manual.",
 options: ["photograph", "snapshot", "function", "display"],
 correctIndex: 2
},
{
 question: "Her father's ....... came as great shock to all those who knew him.",
 options: ["dead", "died", "death", "die"],
 correctIndex: 2
},
{
 question: "Did you hear? James and Beth ....... last week.",
 options: ["get married", "been married", "got married", "married"],
 correctIndex: 2
},
{
 question: "We had a lovely ....... in a small country church. The ceremony was presided over by our parish priest.",
 options: ["reception", "marriage", "wedding", "honeymoon"],
 correctIndex: 2
},
{
 question: "It is ....... for drivers to exercise proper control of their vehicle at all times whilst using the mobile phone.",
 options: ["irrelevant", "illegal", "imperative", "inconsequential"],
 correctIndex: 2
},
{
 question: "You can transfer data between two cellular phones by using the ....... connection located on the front of your phone.",
 options: ["hands free", "main", "infra red", "charger"],
 correctIndex: 2
},
{
 question: "I was told that his chances for ....... the surgery were slim and if he did make it, he was given little hope for the next 24 hours.",
 options: ["pulling in", "pulling out", "pulling through", "pulling down"],
 correctIndex: 2
},
{
 question: "....... this period has given me the confidence and courage to pursue anything I want to despite the hard times.",
 options: ["Pulling off", "Pulling out", "Pulling through", "Pulling in"],
 correctIndex: 2
},
{
 question: "After the small talk was over, it was time for the two heads of state to ....... discussions concerning bilateral relations between the two countries.",
 options: ["get through with", "get by with", "get down to", "get around"],
 correctIndex: 2
},
{
 question: "The days when Americans can ....... in the world on English only will soon be gone.",
 options: ["get in", "get off", "get by", "get on"],
 correctIndex: 2
},
{
 question: "I knew that I had to ....... early the next morning so I set my alarm for 4.30 a.m.",
 options: ["get on", "get off", "get up", "get out"],
 correctIndex: 2
},
{
 question: "Two out of every five companies struck by disaster ....... of business.",
 options: ["go back", "go over", "go out", "go off"],
 correctIndex: 2
},
{
 question: "A chiropractor who claims he can treat anyone by ....... in time to when an injury occurred has attracted the attention of State regulators.",
 options: ["going out", "going off", "going back", "going over"],
 correctIndex: 2
},
{
 question: "Earlier this morning the wind was blowing at about 25 mph and the temperature was -5 F. It was way too cold to ....... jogging.",
 options: ["go back", "go over", "go out", "go off"],
 correctIndex: 2
},
{
 question: "When he tried to balance his checkbook, he found that things just didn't ........",
 options: ["add on", "add right", "add up"],
 correctIndex: 2
},
{
 question: "No one at the office expected him to lose his temper and ....... the way he did.",
 options: ["blow away", "blow over", "blow up"],
 correctIndex: 2
},
{
 question: "Sue felt she should ....... on her math skills before she started school.",
 options: ["brush on", "brush over", "brush up"],
 correctIndex: 2
},
{
 question: "He could feel the back of his neck ....... when they started talking about the tragedy.",
 options: ["burn on", "burn in", "burn up"],
 correctIndex: 2
},
{
 question: "The guard had to ....... the dogs when Henry approached the locked gate.",
 options: ["call on", "call down", "call off"],
 correctIndex: 2
},
{
 question: "Martina Navratilova ....... into one of the world's greatest tennis players.",
 options: ["excelled", "played", "developed", "established"],
 correctIndex: 2
},
{
 question: "Michael Schumacher has ....... Formula 1 racing over the past decade.",
 options: ["competed", "invented", "dominated", "excelled"],
 correctIndex: 2
},
{
 question: "In Germany during the Middle Ages, people ....... bowling at village dances.",
 options: ["competed", "gained", "enjoyed", "brought"],
 correctIndex: 2
},
{
 question: "Ellen Hanson ....... the first singles crown at the U.S. Open in 1887.",
 options: ["developed", "dominated", "earned", "starred"],
 correctIndex: 2
},
{
 question: "In 1926 Suzanne Lenglen ....... in the first U.S. professional tennis tour.",
 options: ["invented", "learned", "starred", "enjoyed"],
 correctIndex: 2
},
{
 question: "We ran five laps ....... the gym and then practiced our jump shots.",
 options: ["against", "across", "around", "among"],
 correctIndex: 2
},
{
 question: "Will you please write about John Cabot ....... Abigail Adams?",
 options: ["in front of", "in spite of", "instead of", "into"],
 correctIndex: 2
},
{
 question: "Miriam told ....... same joke yesterday.",
 options: ["these", "this", "that", "those"],
 correctIndex: 2
},
{
 question: "I haven't spoken with Jane ....... she moved.",
 options: ["unless", "while", "since", "although"],
 correctIndex: 2
},
{
 question: "Elena will groom the horse in the morning ....... she can ride it in the afternoon.",
 options: ["until", "unless", "so that", "when"],
 correctIndex: 2
},
{
 question: "You will receive extra credit ....... you turn in your project early.",
 options: ["although", "than", "if", "unless"],
 correctIndex: 2
},
{
 question: "....... they feel threatened, dogs sometimes display aggressive behavior.",
 options: ["Until", "Where", "When", "Before"],
 correctIndex: 2
},
{
 question: "Deep-sea divers wear wetsuits to protect ....... under the water.",
 options: ["ourselves", "yourselves", "themselves", "itself"],
 correctIndex: 2
},
{
 question: "If you were a diver, you would buy ....... a JIM suit or helmet.",
 options: ["myself", "himself", "yourself", "herself"],
 correctIndex: 2
},
{
 question: "Decompression sickness manifests ....... with joint pain, and it can be fatal.",
 options: ["myself", "herself", "itself", "himself"],
 correctIndex: 2
},
{
 question: "Rachel Carson's first book, Under the Sea-Wind, described struggles sea creatures find ....... facing.",
 options: ["ourselves", "yourselves", "themselves", "itself"],
 correctIndex: 2
},
{
 question: "Rachel Carson put on a diver's helmet and explored the reefs of the Florida Keys for ........",
 options: ["myself", "himself", "herself", "ourself"],
 correctIndex: 2
},
{
 question: "Janelle ....... for the neighbours next Saturday night.",
 options: ["baby-sat", "baby-sit", "will baby-sit"],
 correctIndex: 2
},
{
 question: "When she was younger, my grandmother ....... in a mortuary.",
 options: ["works", "will work", "worked"],
 correctIndex: 2
},
{
 question: "The athlete ....... with the college track team next month.",
 options: ["trains", "trained", "will train"],
 correctIndex: 2
},
{
 question: "Impolite, foul-mouthed parents invariably produce ......., foul-mouthed children.",
 options: ["ill timed", "ill advised", "ill mannered", "ill gotten"],
 correctIndex: 2
},
{
 question: "The president clearly felt a little ....... with some of the protesters' rhetoric, but he eventually agreed to talk to them.",
 options: ["ill gotten", "ill mannered", "ill at ease", "ill advised"],
 correctIndex: 2
},
{
 question: "The decision of the Sri Lankan selectors to rest Marvan Atapattu for the third test match was ....... and dangerous.",
 options: ["ill gotten", "ill at ease", "ill timed", "ill mannered"],
 correctIndex: 2
},
{
 question: "Today's youth is far more disorderly and ....... than in the past and it is not just a minority but the vast majority.",
 options: ["ill gotten", "ill timed", "ill mannered", "ill at ease"],
 correctIndex: 2
},
{
 question: "Don't always ....... creating another database or a workaround program because there may actually be a better business solution for the problem.",
 options: ["fall through", "fall behind in", "fall back on", "fall ou with"],
 correctIndex: 2
},
{
 question: "She had no family support system to ......., and she couldn't afford daycare.",
 options: ["fall behind", "fall behind in", "fall back on", "fall off"],
 correctIndex: 2
},
{
 question: "The Government has decided to ....... the recent Cabinet decision to cut the food subsidy bill by 30 per cent, following protests from a section of Congress.",
 options: ["put up", "put out", "put on hold", "put in"],
 correctIndex: 2
},
{
 question: "....... your garbage at the designated pickup point by 8 a.m. on the collection days scheduled for your area.",
 options: ["Put off", "Put in", "Put out", "Put on"],
 correctIndex: 2
},
{
 question: "Sweaters are easy to ......., comfortable, warm and above all stylish.",
 options: ["put off", "put in", "put on", "put out"],
 correctIndex: 2
},
{
 question: "A Betawi couple hoping to marry last weekend were forced to ....... their wedding ceremony until law and order had been restored in the city.",
 options: ["put on", "put in", "put off", "put out"],
 correctIndex: 2
},
{
 question: "Would you like to spend the weekend with us? They ....... her to spend the weekend with them.",
 options: ["advised", "ordered", "invited", "begged"],
 correctIndex: 2
},
{
 question: "Could you open the window please? She ....... him to open the window.",
 options: ["reminded", "ordered", "asked", "warned"],
 correctIndex: 2
},
{
 question: "Don't play with the matches. They're very dangerous. The teacher ....... the children not to play with the matches.",
 options: ["ordered", "asked", "warned", "begged"],
 correctIndex: 2
},
{
 question: "I won't lend you any more money. Matthew ....... to lend me any more money.",
 options: ["offered", "asked", "refused", "invited"],
 correctIndex: 2
},
{
 question: "....... passengers have a lavatory reserved for their exclusive use.",
 options: ["Business hours", "Business park", "Business class", "Business card"],
 correctIndex: 2
},
{
 question: "Today, it is rare to see a ....... worn with a waistcoat in North America, although it is still popular among conservative-minded businessmen in the rest of the world.",
 options: ["business park", "business card", "business suit", "business plan"],
 correctIndex: 2
},
{
 question: "Well here we are rapidly approaching the ....... of the season.",
 options: ["business card", "business park", "business end", "business suit"],
 correctIndex: 2
},
{
 question: "Data marts can be a good way to serve the data needs of a particular set of ....... users, allowing specialized functions such as data cleansing, joining, formatting and transformations to be performed automatically.",
 options: ["business plan", "business card", "business end", "business suit"],
 correctIndex: 2
},
{
 question: "Australia is roughly the same ....... as the United States with less than a tenth of the people.",
 options: ["bulk", "landmass", "size", "volume"],
 correctIndex: 2
},
{
 question: "Melbourne is Australia's second largest town and was recently ....... the best city in the world in which to live.",
 options: ["decided", "given", "voted", "awarded"],
 correctIndex: 2
},
{
 question: "If you're looking for a spectacular ....... of life in a diverse country then Australia is well worth serious consideration.",
 options: ["quantity", "superiority", "quality", "meaning"],
 correctIndex: 2
},
{
 question: "There are 61,269 ....... in the United States.",
 options: ["pizza users", "pizzas", "pizzerias", "pizza pies"],
 correctIndex: 2
},
{
 question: "October is national pizza ....... in the United States.",
 options: ["day", "year", "month", "week"],
 correctIndex: 2
},
{
 question: "The world's ....... pizzeria opened in Naples in 1830.",
 options: ["latest", "last", "first", "newest"],
 correctIndex: 2
},
{
 question: "Pizza Hut has over 12,000 restaurants ....... the world.",
 options: ["through", "all through", "throughout", "all the way through"],
 correctIndex: 2
},
{
 question: "Many people have ....... about winning a big prize in the lottery.",
 options: ["imagined", "visualized", "fantasized", "discovered"],
 correctIndex: 2
},
{
 question: "There are many stories about people who couldn't ....... how to be rich.",
 options: ["teach", "cram", "learn", "revise"],
 correctIndex: 2
},
{
 question: "In 1989, a woman from Los Angeles won 7 million dollars in the lottery and immediately went on a ....... spree.",
 options: ["indulging", "gorging", "spending", "fussing"],
 correctIndex: 2
},
{
 question: "Picasso's work ....... ideas about art around the world.",
 options: ["misused", "ruined", "changed", "tainted"],
 correctIndex: 2
},
{
 question: "Picasso's genius as an artist was ....... by many people.",
 options: ["famous", "familiar", "recognized", "distinguished"],
 correctIndex: 2
},
{
 question: "When Picasso was 90 years old, he was honored by an ....... at the Louvre in Paris.",
 options: ["explanation", "display", "exhibition", "museum"],
 correctIndex: 2
},
{
 question: "Please take these separate lists and ....... them into one document.",
 options: ["specify", "maneuver", "merge", "divulge"],
 correctIndex: 2
},
{
 question: "I guarantee that your hot temper will ....... cause you trouble.",
 options: ["ironically", "gradually", "inevitably", "wholeheartedly"],
 correctIndex: 2
},
{
 question: "If the cookie recipe is complete, it will ....... the ingredients you need.",
 options: ["divulge", "elicit", "specify", "emerge"],
 correctIndex: 2
},
{
 question: "Getting over a break-up is hard to do. Instead of wallowing in your ......., try to take positive steps to put your failed relationship behind you.",
 options: ["heartbeat", "heartburn", "heartache", "heartbreak"],
 correctIndex: 2
},
{
 question: "The Burgundy countryside is fast becoming the Islamic ....... of France.",
 options: ["heartthrob", "heartfelt", "heartland", "heartburn"],
 correctIndex: 2
},
{
 question: "England ....... South Africa in the Singapore Sevens tournament at Singapore's National Stadium, beating them 33-14 in the semi-final yesterday.",
 options: ["knocked on", "knocked in", "knocked off", "knocked out"],
 correctIndex: 2
},
{
 question: "People who ....... their neighbor's doors and ask if anyone has seen their pet instead of just calling are more likely to find it.",
 options: ["knock off", "knock out", "knock on", "knock up"],
 correctIndex: 2
},
{
 question: "The Gulshan is a good honest curry house renowned for its abilitly to ....... a rather good curry.",
 options: ["knock out", "knock off", "knock up", "knock on"],
 correctIndex: 2
},
{
 question: "Jack Wheeler is ....... the most interesting man I know.",
 options: ["just over", "just then", "just about", "just as"],
 correctIndex: 2
},
{
 question: "Old-fashioned toothbrushes are ....... good as electric ones at reducing plaque.",
 options: ["just over", "just about", "just as", "just then"],
 correctIndex: 2
},
{
 question: "....... the guy behind us leaned over and said, almost hysterically happy, 'That's one terrific baby you've got there!'",
 options: ["Just about", "Just the thing", "Just then", "Just over"],
 correctIndex: 2
},
{
 question: "Bill Clinton, whose father ....... a few months before he was born, wanted to be President from a very early age.",
 options: ["passed out", "passed through", "passed away", "passed up"],
 correctIndex: 2
},
{
 question: "Clinton suffered two major ....... during his administration.",
 options: ["quarterbacks", "outbacks", "setbacks", "comebacks"],
 correctIndex: 2
},
{
 question: "Future history books may well begin by noting that Bill Clinton was the second President to have been ....... by the U.S. House of Representatives.",
 options: ["beseeched", "reached", "impeached", "preached"],
 correctIndex: 2
},
{
 question: "Clinton had a significant influence on the ....... of the Democratic Party.",
 options: ["road", "path", "direction", "course"],
 correctIndex: 2
},
{
 question: "Yesterday I taught my daughter how to cook a ....... egg for breakfast.",
 options: ["hard hearted", "hard pressed", "hard boiled", "hard headed"],
 correctIndex: 2
},
{
 question: "James needed to go to the ....... store to purchase a new door for his holiday house.",
 options: ["hard core", "hardboard", "hardware", "hard court"],
 correctIndex: 2
},
{
 question: "Jimmy wanted to go to the Halloween party in an Indian costume but was unable to find a ....... to complete his outfit.",
 options: ["head phone", "head set", "head dress", "head light"],
 correctIndex: 2
},
{
 question: "The flight from Sydney to Singapore will take two hours longer than usual this morning as the plane is flying into a strong ........",
 options: ["headlong", "headway", "headwind", "headland"],
 correctIndex: 2
},
{
 question: "I was very disappointed to find out that the new car that I wanted to buy had insufficient ........",
 options: ["headlight", "head set", "headroom", "headlamp"],
 correctIndex: 2
},
{
 question: "Mixing spirits and beer is not a very good idea. I usually wake up with a very bad ....... the next morning.",
 options: ["headset", "headlight", "headache", "headland"],
 correctIndex: 2
},
{
 question: "The supervisor asked everyone to ....... for the manager's birthday present.",
 options: ["chip", "chip over", "chip in"],
 correctIndex: 2
},
{
 question: "Rick ....... a terrible cold this week.",
 options: ["came up with", "came about with", "came down with"],
 correctIndex: 2
},
{
 question: "Lisa was ....... her friends to help her move.",
 options: ["counting down", "counting about", "counting on"],
 correctIndex: 2
},
{
 question: "I ....... on my friend yesterday to surprise her.",
 options: ["dropped", "dropped over", "dropped in"],
 correctIndex: 2
},
{
 question: "Cathy ....... her mother's house for a visit this past week.",
 options: ["dropped", "dropped in", "dropped by"],
 correctIndex: 2
},
{
 question: "The manager was so afraid the multi-million dollar deal would ........",
 options: ["fall up", "fall down", "fall through"],
 correctIndex: 2
},
{
 question: "Karen had to ....... for Dave while he was away on vacation.",
 options: ["fill up", "fill", "fill in"],
 correctIndex: 2
},
{
 question: "The couple ....... many forms before they could immigrate to England.",
 options: ["filled", "filled about", "filled out"],
 correctIndex: 2
},
{
 question: "His salary is low so he's just ....... right now.",
 options: ["getting in", "getting about", "getting by"],
 correctIndex: 2
},
{
 question: "You'll need to ....... your assignments by Friday.",
 options: ["hand by", "hand", "hand in"],
 correctIndex: 2
},
{
 question: "Beth's father is too proud to ask for ........",
 options: ["hand-ins", "hand-overs", "hand-outs"],
 correctIndex: 2
},
{
 question: "We still have to ....... the finer details about our upcoming trip to Scotland.",
 options: ["iron in", "iron on", "iron out"],
 correctIndex: 2
},
{
 question: "Most of the service stations decided to ....... their gas prices after the gas war between them.",
 options: ["jack in", "jack out", "jack up"],
 correctIndex: 2
},
{
 question: "Trent was ....... of school for bad behavior.",
 options: ["kicked in", "kicked over", "kicked out"],
 correctIndex: 2
},
{
 question: "Just look at that gorgeous girl — She's a ........",
 options: ["knock in", "knock over", "knock out"],
 correctIndex: 2
},
{
 question: "At long last the storm is starting to look like it's going to ........",
 options: ["let in", "let down", "let up"],
 correctIndex: 2
},
{
 question: "The sheriff said he would ....... the crime a bit more thoroughly.",
 options: ["look down", "look on", "look into"],
 correctIndex: 2
},
{
 question: "He is different so many children ....... him.",
 options: ["made fun at", "made fun over", "make fun of"],
 correctIndex: 2
},
{
 question: "The couple decided to kiss and ....... after the day long argument.",
 options: ["make out", "make on", "make up"],
 correctIndex: 2
},
{
 question: "Billy was so tired that he was ....... in class.",
 options: ["nodding in", "nodding on", "nodding off"],
 correctIndex: 2
},
{
 question: "Ken ....... the best fruit at the supermarket.",
 options: ["picked in", "picked down", "picked out"],
 correctIndex: 2
},
{
 question: "Jeremy didn't want to ....... the wedding any longer.",
 options: ["put over", "put by", "put off"],
 correctIndex: 2
},
{
 question: "If you ....... the numbers, it will be easier to calculate the estimate.",
 options: ["round with", "round over", "round off"],
 correctIndex: 2
},
{
 question: "Heidi ....... an old friend while she was shopping last week.",
 options: ["ran over", "ran down", "ran into"],
 correctIndex: 2
},
{
 question: "The assembly line problem was a minor ....... for the company last week.",
 options: ["set about", "set down", "set back"],
 correctIndex: 2
},
{
 question: "The 'T' in the acronym ....... Time.",
 options: ["stands about", "stands over", "stands for"],
 correctIndex: 2
},
{
 question: "Kristie was ....... at Matt because of the things he said to her last week.",
 options: ["ticked on", "ticked about", "ticked off"],
 correctIndex: 2
},
{
 question: "Bryan tapped Pauline on her shoulder so she would ....... and see the parade approaching behind them.",
 options: ["turn in", "turn over", "turn around"],
 correctIndex: 2
},
{
 question: "John tried to ask Cara out on a date but she ........",
 options: ["turned him over", "turned him through", "turned him down"],
 correctIndex: 2
},
{
 question: "Keira can't bear people who can't make up their minds and is ....... by procrastinators.",
 options: ["turned in", "turned up", "turned off"],
 correctIndex: 2
},
{
 question: "Chris was afraid the inexpensive tires would ....... quickly.",
 options: ["wear on", "wear over", "wear out"],
 correctIndex: 2
},
{
 question: "Lilly likes to ....... early in the morning so that she's fit for work.",
 options: ["work on", "work over", "work out"],
 correctIndex: 2
},
{
 question: "Rob looks ....... because he's working two jobs at the moment.",
 options: ["worn on", "worn in", "worn out"],
 correctIndex: 2
},
{
 question: "We are getting close to ....... the meeting so are there any final questions or concerns?",
 options: ["wrapping down", "wrapping over", "wrapping up"],
 correctIndex: 2
},
{
 question: "Jim didn't have much time to ....... the contract.",
 options: ["write about", "write over", "write up"],
 correctIndex: 2
},
{
 question: "Hollywood is so competitive that it seems like a ....... world, doesn't it?",
 options: ["shark eat shark", "wolf eat wolf", "dog eat dog"],
 correctIndex: 2
},
{
 question: "He's so nervous. I wish for once he'd stop being such a ........",
 options: ["fish", "rabbit", "chicken"],
 correctIndex: 2
},
{
 question: "Ray was as 'cool as a cucumber' about his exam because he studied all week for it. What does 'cool as a cucumber' mean? ........",
 options: ["To be scared and cold about something", "To be very embarrassed about something", "To be very calm and relaxed about something"],
 correctIndex: 2
},
{
 question: "The king was so rich, arrogant and mean that when he was overthrown by his people, most of his subjects thought it was about time he 'ate some humble pie.' What does to 'eat humble pie' mean? ........",
 options: ["To get upset/angry about something", "To be vengeful", "To accept shame"],
 correctIndex: 2
},
{
 question: "Mary was going through a rough time and her family felt like they had to 'walk on eggshells' around her. What does to 'walk on eggshells' mean? ........",
 options: ["To be very messy", "To be very loud", "To be very cautious and/or sensitive about something"],
 correctIndex: 2
},
{
 question: "I wouldn't want his shift — he has to wake up ....... 3 am everyday.",
 options: ["(none)", "on", "at"],
 correctIndex: 2
},
{
 question: "I don't know what time they'll be back ....... this evening, if at all. It all depends on the road conditions today.",
 options: ["for", "in", "(none)"],
 correctIndex: 2
},
{
 question: "I have to go for a check-up ....... next week. I go for a check-up once a year.",
 options: ["about", "on", "(none)"],
 correctIndex: 2
},
{
 question: "I called in to make an appointment and I can see the doctor ....... 3 pm. Can you come with me?",
 options: ["(none)", "on", "at"],
 correctIndex: 2
},
{
 question: "I'm meeting an old friend for lunch ....... noon. I haven't seen her for a long time.",
 options: ["on", "in", "at"],
 correctIndex: 2
},
{
 question: "....... yesterday, I went shopping and found some great outfits for spring.",
 options: ["On", "In", "(none)"],
 correctIndex: 2
},
{
 question: "The meeting is ....... Monday morning at 9:30 am sharp. Don't be late.",
 options: ["in", "with", "on"],
 correctIndex: 2
},
{
 question: "My birthday is ....... April. Can you come to my birthday party?",
 options: ["on", "(none)", "in"],
 correctIndex: 2
},
{
 question: "I love swimming ....... the summer months I usually swim at outdoor pool as much as I can and sometimes we go the lake.",
 options: ["about", "(none)", "in"],
 correctIndex: 2
},
{
 question: "After our hiking trip, I'm going to be really sore ....... Monday morning.",
 options: ["about", "in", "on"],
 correctIndex: 2
},
{
 question: "....... the day after tomorrow, I'm going to Bora Bora. I can't wait!",
 options: ["In", "On", "(none)"],
 correctIndex: 2
},
{
 question: "....... 2002, I got a promotion and I'm hoping for another one this year.",
 options: ["On", "(none)", "In"],
 correctIndex: 2
},
{
 question: "Someday, ....... the future, we're going to build the house of our dreams.",
 options: ["on", "about", "in"],
 correctIndex: 2
},
{
 question: "....... yesterday, we went to the Royal Alberta Museum they had some really interesting exhibits.",
 options: ["On", "For", "(none)"],
 correctIndex: 2
},
{
 question: "I love going for walks ....... the spring everything is so fresh and beautiful.",
 options: ["about", "(none)", "in"],
 correctIndex: 2
},
{
 question: "I'm going to finish reading this great book ....... today — it's really captivating.",
 options: ["in", "on", "(none)"],
 correctIndex: 2
},
{
 question: "....... 2004, I'm getting a raise so we'll be able to afford more things like tropical vacations.",
 options: ["On", "(none)", "In"],
 correctIndex: 2
},
{
 question: "....... Wednesday night, I'm going to take the staff out for dinner.",
 options: ["About", "In", "On"],
 correctIndex: 2
},
{
 question: "I'm very tired so I think I'll ........",
 options: ["go out", "turn off", "turn in", "turn over"],
 correctIndex: 2
},
{
 question: "It must be at least a year since ........",
 options: ["you are here", "you will be here", "you were here", "you had been here"],
 correctIndex: 2
},
{
 question: "I'm desperate. All I need really is someone to ........",
 options: ["take me a hand", "put me a hand", "give me a hand", "show me a hand"],
 correctIndex: 2
},
{
 question: "Did you hear that noise? I'm sure there must be ........",
 options: ["a bugler in the house", "a bungler", "a burglar in the house", "a bowler in the house"],
 correctIndex: 2
},
{
 question: "I can't make head nor tail of this — ........",
 options: ["it's utter destruction", "it's utter paperwork", "it's utter rubbish", "it's utter cheese"],
 correctIndex: 2
},
{
 question: "If you can't get this right, then ........",
 options: ["there's no sense for you", "there's no thought for you", "there's no hope for you", "there's no idea for you"],
 correctIndex: 2
},
{
 question: "We can safely say that the business is now concluded so ........",
 options: ["that's him", "that's us", "that's it", "that's them"],
 correctIndex: 2
},
{
 question: "There are several ways of looking at this and ........",
 options: ["you'll have to opt", "you'll have to take", "you'll have to choose", "you'll have to accept"],
 correctIndex: 2
},
{
 question: "If you could be serious for just one moment ........",
 options: ["I'd accept it", "I'd believe it", "I'd appreciate it", "I'd understand it"],
 correctIndex: 2
},
{
 question: "It's getting very late ........",
 options: ["I'll have to speed you", "I'll have to accelerate you", "I'll have to hurry", "I'll have to push you"],
 correctIndex: 2
},
{
 question: "They arrived in the middle of the night ........",
 options: ["because their flight was detained", "because their flight was despatched", "because their flight was delayed", "because their flight was defused"],
 correctIndex: 2
},
{
 question: "You should always check the sell ....... date of things you buy in the supermarket.",
 options: ["in", "through", "by", "off"],
 correctIndex: 2
},
{
 question: "Newspapers are ....... to people's doors every day.",
 options: ["taken", "distributed", "delivered", "handed"],
 correctIndex: 2
},
{
 question: "In ....... nothing much happened at the meeting.",
 options: ["quick", "briefly", "short", "shortly"],
 correctIndex: 2
},
{
 question: "Answer the questions at the back of the book and make ....... that you check your answers carefully.",
 options: ["obvious", "definite", "sure", "clear"],
 correctIndex: 2
},
{
 question: "Last week I ....... that book you wanted in a small shop.",
 options: ["came up", "came into", "came across", "came by"],
 correctIndex: 2
},
{
 question: "I need to find some kind of chemical that will ....... the weeds in the garden.",
 options: ["keep off", "keep out", "keep down", "keep on"],
 correctIndex: 2
},
{
 question: "When spring comes, people often feel inclined to ....... their houses.",
 options: ["do over", "do through", "do up", "do in"],
 correctIndex: 2
},
{
 question: "You need not worry that you'll be left on your own because I'll always ....... you.",
 options: ["stand for", "stand to", "stand by", "stand from"],
 correctIndex: 2
},
{
 question: "The station isn't far away and the train leaves in about ten minutes so there is no need to worry — we have time to ........",
 options: ["save", "store", "spare", "place"],
 correctIndex: 2
},
{
 question: "I told him time and ....... not to do it but he takes no notice.",
 options: ["often", "already", "again", "frequently"],
 correctIndex: 2
},
{
 question: "It's ....... time she learnt to look after herself.",
 options: ["of", "in", "about", "through"],
 correctIndex: 2
},
{
 question: "Time will ....... whether we have made the right decision.",
 options: ["say", "know", "tell", "find"],
 correctIndex: 2
},
{
 question: "The business has lost a lot of orders recently and is going through a ....... time.",
 options: ["slender", "poor", "thin", "acute"],
 correctIndex: 2
},
{
 question: "His invention showed that he understood what was going to happen in the future and proved he was ....... of his time.",
 options: ["in front", "before", "ahead", "forward"],
 correctIndex: 2
},
{
 question: "As soon as the ....... arrive, it will be your job to show them round the work place and give them a general history of the company for which they want to work.",
 options: ["chosen", "selected", "candidates", "appliers"],
 correctIndex: 2
},
{
 question: "Interviewing applicants for an important job can be a very time ....... process but it's worth it in the end.",
 options: ["lasting", "developing", "consuming", "taking"],
 correctIndex: 2
},
{
 question: "Treatment of this particular disorder was beyond the doctor's capability and he ....... the patient to a specialist.",
 options: ["referenced", "returned", "referred", "reduced"],
 correctIndex: 2
},
{
 question: "I must confess I feel much better today, as I have found that the medication prescribed has been most ........",
 options: ["effecting", "effects", "effective", "affective"],
 correctIndex: 2
},
{
 question: "Before she was allowed to leave the hospital, a physiotherapist had to ....... the extent of her mobility.",
 options: ["assume", "accept", "assess", "assert"],
 correctIndex: 2
},
{
 question: "Before they could start any kind of treatment, they had to write to the previous hospital in order to obtain her ........",
 options: ["writings", "prescriptions", "records", "recordings"],
 correctIndex: 2
},
{
 question: "Interviewer: You mean you like the idea of an office with ........",
 options: ["air control", "air managment", "air conditioning", "air condition"],
 correctIndex: 2
},
{
 question: "Interviewer: I should have thought this was ........",
 options: ["clear obvious", "mostly obvious", "pretty obvious", "mainly obvious"],
 correctIndex: 2
},
{
 question: "Candidate: No, sorry as I said I like working outside, I want to be a gardener, ........",
 options: ["if you don't care", "if you don't agree", "if you don't mind", "if you don't see"],
 correctIndex: 2
},
{
 question: "Dear Sir, I am writing this letter to describe the ....... I've been having with one of your products.",
 options: ["incidents", "instances", "problems", "examples"],
 correctIndex: 2
},
{
 question: "Unfortunately this does not ....... to 'Supercut'.",
 options: ["concern", "attribute", "apply", "confer"],
 correctIndex: 2
},
{
 question: "This brings me to another point: why aren't you and Sara tying the .......?",
 options: ["noose", "rope", "knot", "string"],
 correctIndex: 2
},
{
 question: "As you will see from my ....... C.V., I am currently working as a waiter.",
 options: ["endorsed", "included", "attached", "appeared"],
 correctIndex: 2
},
{
 question: "As I see it, a restaurant is a market and it is the job of a waiter to ....... the clients into choosing products from the menu.",
 options: ["push", "pervade", "tempt", "instruct"],
 correctIndex: 2
},
{
 question: "For example some of my clients cannot decide whether to have ....... fruit or tiramisu.",
 options: ["picked", "wet", "fresh", "plucked"],
 correctIndex: 2
},
{
 question: "On such an occasion like that I market well and always make them ....... the one we have most of.",
 options: ["decide", "believe", "select", "effect"],
 correctIndex: 2
},
{
 question: "By the time the plane took off as you can ......., we were all tired, hungry and miserable.",
 options: ["believe", "anticipate", "imagine", "think"],
 correctIndex: 2
},
{
 question: "Our first day was spent in the local shops ....... all the things that we believed we had brought with us.",
 options: ["finding", "looking", "purchasing", "searching"],
 correctIndex: 2
},
{
 question: "In other words the letters ....... building, antennae, span and earth, all of which you can jump from.",
 options: ["stand up", "stand in", "stand for", "stand by"],
 correctIndex: 2
},
{
 question: "During the flight his supporters ....... that he will have reached 200 kmh.",
 options: ["attain", "argue", "claim", "dispute"],
 correctIndex: 2
},
{
 question: "Teaching someone to drive is one of the ....... experiences you can have.",
 options: ["cruellest", "heaviest", "scariest", "latest"],
 correctIndex: 2
},
{
 question: "The situation is more ....... if the learner is a member of your family.",
 options: ["confirmed", "contorted", "complicated", "confused"],
 correctIndex: 2
},
{
 question: "I am proud to say that I taught my wife and my two sons and they all ....... first time.",
 options: ["past", "passing", "passed", "pass"],
 correctIndex: 2
},
{
 question: "Whenever there is a meeting between the finance minister and the governor of the bank, people start asking questions and rumours ........",
 options: ["abut", "about", "abound", "abide"],
 correctIndex: 2
},
{
 question: "The government then has to show that it is involved in the whole business of saving and lending and tries to convince everyone that it is ....... of both savers and lenders.",
 options: ["supporting", "supporter", "supportive", "supported"],
 correctIndex: 2
},
{
 question: "The government next announces that measures are due to come into ....... that will change the whole process.",
 options: ["forces", "forced", "force", "forcing"],
 correctIndex: 2
},
{
 question: "Imagine an ....... public figure attacked by press and public, who is facing an inquiry into allegations of having obtained money by deception.",
 options: ["empowered", "endangered", "embattled", "engrossed"],
 correctIndex: 2
},
{
 question: "There was very strong support for the police who were determined to ....... this kind of crime.",
 options: ["restrain", "manage", "curb", "kill"],
 correctIndex: 2
},
{
 question: "Views as to his guilt or innocence even before the trial started ....... from utter conviction that he was guilty to wild support for his innocence.",
 options: ["started", "began", "ranged", "swept"],
 correctIndex: 2
},
{
 question: "We often hear that such and such a piece of information cannot be released into the public ....... in the interest of national security.",
 options: ["dominion", "domination", "domain", "domestic"],
 correctIndex: 2
},
{
 question: "Sometimes a journalist will get hold of sensitive information knowing that he will get ....... by government agencies if he dares reveal it.",
 options: ["wild", "torn", "savaged", "ravaged"],
 correctIndex: 2
},
{
 question: "Mind you it has to be a convincing article because the reading public can soon see through the ....... of a weak argument.",
 options: ["clarity", "clearness", "transparency", "transparent"],
 correctIndex: 2
},
{
 question: "The last possible thing that anyone wants to happen to their country is to turn it into a ....... for troublemakers.",
 options: ["port", "harbour", "haven", "location"],
 correctIndex: 2
},
{
 question: "This was of course very embarrassing for the P.M. and ....... of the speech he told funny stories.",
 options: ["in spite", "in case", "instead", "intend"],
 correctIndex: 2
},
{
 question: "It was one of those society weddings you know when the men wear ....... hats and tails.",
 options: ["tall", "long", "top", "full"],
 correctIndex: 2
},
{
 question: "I don't think she stands a chance in the election and if she does win, I'll ....... my hat.",
 options: ["bite", "consume", "eat", "chew"],
 correctIndex: 2
},
{
 question: "In his present job there are so many different responsibilities involved that he has to ....... several hats.",
 options: ["take", "put", "wear", "dress"],
 correctIndex: 2
},
{
 question: "One of the first things to do when you want to ....... a new product is to ascertain its potential demand.",
 options: ["maintain", "master", "market", "muster"],
 correctIndex: 2
},
{
 question: "Her ability to ....... facts and figures quickly was the main reason for her rapid rise in the business.",
 options: ["consumer", "consumption", "consume", "consuming"],
 correctIndex: 2
},
{
 question: "Mathew Smith was a highly respected member of parliament with no ....... on his character.",
 options: ["sign", "indication", "stain", "point"],
 correctIndex: 2
},
{
 question: "Other papers asked the question: How can we trust our politicians if they ....... on society?",
 options: ["chat", "chafe", "cheat", "chance"],
 correctIndex: 2
},
{
 question: "At last Mathew decided to speak ....... for himself and tell the truth.",
 options: ["on", "to", "up", "off"],
 correctIndex: 2
},
{
 question: "I was ....... this morning and had to empty my desk this afternoon.",
 options: ["departed", "deterred", "dismissed", "disliked"],
 correctIndex: 2
},
{
 question: "I have been made ....... because my work here is no longer needed.",
 options: ["repellent", "reduced", "redundant", "repeated"],
 correctIndex: 2
},
{
 question: "It was quite clear they didn't want me because I was told not to ....... to come back to work tomorrow.",
 options: ["care", "concern", "bother", "worry"],
 correctIndex: 2
},
{
 question: "There was absolutely no hesitation on her part and quick as a ....... she paid the bill.",
 options: ["spark", "light", "flash", "switch"],
 correctIndex: 2
},
{
 question: "You'll have to be quick off the ....... if you want to buy one of those houses because they're selling very fast.",
 options: ["point", "stage", "mark", "spot"],
 correctIndex: 2
},
{
 question: "I appreciate your hard work but sometimes you're so fast that you miss the details and I think it's a case of more ....... less speed.",
 options: ["hurry", "hasty", "haste", "hurried"],
 correctIndex: 2
},
{
 question: "I was asked how many tests I would write and I said the sky's the ....... — in other words as many as possible.",
 options: ["end", "finish", "limit", "top"],
 correctIndex: 2
},
{
 question: "The rocket was fired and quickly took off sky........",
 options: ["long", "broad", "wards", "length"],
 correctIndex: 2
},
{
 question: "You can hear everything that's going on next door because the walls are paper ........",
 options: ["long", "wide", "thin", "tall"],
 correctIndex: 2
},
{
 question: "Some countries have some very interesting designs on their paper ........",
 options: ["cash", "coinage", "money", "pay"],
 correctIndex: 2
},
{
 question: "The main work has just been completed and all we have to do now is finish the paper ........",
 options: ["task", "job", "work", "function"],
 correctIndex: 2
},
{
 question: "Her first novel was a huge success and it was only a few weeks after publication that the paper ....... came out.",
 options: ["side", "edition", "back", "book"],
 correctIndex: 2
},
{
 question: "It was quite simple really — he never did any work at all and was sacked for being bone ........",
 options: ["lazy", "useless", "idle", "inactive"],
 correctIndex: 2
},
{
 question: "Although the TV programme was funny, my aunt was a bit shocked because some of the jokes were a bit ....... the bone.",
 options: ["next", "close", "near", "by"],
 correctIndex: 2
},
{
 question: "I thought the best thing was to wish them both ....... luck and hope that everything worked out well.",
 options: ["best", "all", "good", "fine"],
 correctIndex: 2
},
{
 question: "We've now ....... the stage where it's time to make our minds up.",
 options: ["acquired", "found", "reached", "got"],
 correctIndex: 2
},
{
 question: "It's quite normal when you make your first speech in public to suffer from stage ........",
 options: ["fear", "nerves", "fright", "anxiety"],
 correctIndex: 2
},
{
 question: "The first ....... was to hold the event in the open air but that posed many problems.",
 options: ["ideal", "notion", "plan", "sketch"],
 correctIndex: 2
},
{
 question: "The first thing she recommended was for us to ....... all the people who were involved.",
 options: ["combine", "conduct", "coordinate", "conduce"],
 correctIndex: 2
},
{
 question: "Unfortunately the event was never ....... because no one had considered the reaction of the local people to the noise of a loud pop concert.",
 options: ["put up", "given", "staged", "taken"],
 correctIndex: 2
},
{
 question: "Mind you the cost of travel is very high and ....... went up again last month.",
 options: ["stages", "periods", "fares", "admissions"],
 correctIndex: 2
},
{
 question: "Before we knew what had happened we had left our ....... village behind and were in the middle of the big city.",
 options: ["removed", "far", "remote", "released"],
 correctIndex: 2
},
{
 question: "She certainly won't invest in that company again having lost a fortune — it's a case of once bitten twice ........",
 options: ["nervous", "coy", "shy", "reserved"],
 correctIndex: 2
},
{
 question: "It must have come as a great shock to get the sack but I'm afraid you'll just have to accept it and bite the ........",
 options: ["shot", "knife", "bullet", "blow"],
 correctIndex: 2
},
{
 question: "My advice to you is to resist saying anything at the moment and simply bite your ........",
 options: ["mouth", "teeth", "lip", "gums"],
 correctIndex: 2
},
{
 question: "I wish we could stick to the subject and just consider the topic ....... issue.",
 options: ["on", "by", "at", "in"],
 correctIndex: 2
},
{
 question: "We panicked when we got near the house because we could see smoke issuing ....... the top bedroom window.",
 options: ["against", "on", "out of", "into"],
 correctIndex: 2
},
{
 question: "In celebration at passing his examinations he invited everyone round to crack a ....... and have a drink with him.",
 options: ["glass", "flask", "bottle", "jug"],
 correctIndex: 2
},
{
 question: "They spent a huge amount of time and money to deal with that small problem and it's like taking a sledgehammer to crack a ........",
 options: ["pea", "bean", "nut", "seed"],
 correctIndex: 2
},
{
 question: "I strongly recommend that restaurant as I was very ....... with how quickly they brought the food.",
 options: ["influenced", "interested", "impressed", "induced"],
 correctIndex: 2
},
{
 question: "Nowadays you can even order your lunch online and your food will be ....... to your office.",
 options: ["handed", "reached", "delivered", "transported"],
 correctIndex: 2
},
{
 question: "There is nothing worse when you take important clients out for lunch to find that the choice of dishes is very ........",
 options: ["isolated", "lonely", "narrow", "weak"],
 correctIndex: 2
},
{
 question: "She studies some very obscure things to do with ancient Greek documents — to most people a really dry as ....... subject.",
 options: ["powder", "earth", "dust", "soil"],
 correctIndex: 2
},
{
 question: "As it's still very warm outside I recommend you leave your swimming things in the garden to let them dry ........",
 options: ["in", "to", "out", "under"],
 correctIndex: 2
},
{
 question: "She was a very famous film star some 40 years ago but now she's regarded as unimportant — a sort of back ........",
 options: ["figure", "digit", "number", "person"],
 correctIndex: 2
},
{
 question: "She's the sort of person who can't bear being secretive and will never talk about you ....... your back.",
 options: ["on", "over", "behind", "across"],
 correctIndex: 2
},
{
 question: "Try and be a little more cheerful because if you don't bear ....... soon, you'll make everyone else miserable.",
 options: ["through", "along", "up", "to"],
 correctIndex: 2
},
{
 question: "We all have our ....... to bear so I should be grateful if you would stop complaining all the time.",
 options: ["problems", "situations", "crosses", "results"],
 correctIndex: 2
},
{
 question: "Many people have been made redundant in the takeover and those who joined last were the first to go. The principle of devil take the ....... applied.",
 options: ["final list", "old list", "hindmost", "youngest"],
 correctIndex: 2
},
{
 question: "A bird in the hand is worth two in the ....... as they say when you have at least one definite thing in contrast to two uncertain things.",
 options: ["hedge", "tree", "bush", "plant"],
 correctIndex: 2
},
{
 question: "I'll see to that in two ....... and it'll be all over in a minute.",
 options: ["times", "crosses", "ticks", "strikes"],
 correctIndex: 2
},
{
 question: "I worked out the answer in the end by putting two and two ........",
 options: ["aside", "apart", "together", "through"],
 correctIndex: 2
},
{
 question: "but whatever the required ......., all of us need sleep at some time during the day or night.",
 options: ["sum", "total", "amount", "lot"],
 correctIndex: 2
},
{
 question: "following the old story about that strange man who ....... to drop sand in their eyes near bed time.",
 options: ["is required", "is told", "is supposed", "is needed"],
 correctIndex: 2
},
{
 question: "Of course as you grow older, you ....... in the luxury of short sleeps during the day.",
 options: ["enter", "fall", "indulge", "incur"],
 correctIndex: 2
},
{
 question: "which all describe the kind of sleep that can be ....... at a moment's notice.",
 options: ["intervened", "interacted", "interrupted", "invaded"],
 correctIndex: 2
},
{
 question: "Forty apparently is the ....... allowed for this kind of sleep.",
 options: ["major", "majority", "maximum", "macrocosm"],
 correctIndex: 2
},
{
 question: "Well, I think if you don't ......., I'll turn in now.",
 options: ["care", "say", "mind", "look"],
 correctIndex: 2
},
{
 question: "I think it's time for me to hit the sack, which need be no ....... of the softness of the mattress.",
 options: ["criterion", "critique", "criticism", "critical"],
 correctIndex: 2
},
{
 question: "and you have a strong desire to be ....... of them and go to sleep",
 options: ["riddance", "ridden", "rid", "ride"],
 correctIndex: 2
},
{
 question: "And if all else ....... go upstairs and come down again in your pyjamas.",
 options: ["falls", "fell", "fails", "feels"],
 correctIndex: 2
},
{
 question: "When the sleeper totally refuses to be ......., we say they are sleeping like the dead.",
 options: ["deterred", "defused", "disturbed", "disgruntled"],
 correctIndex: 2
},
{
 question: "give the rest of the house a surprise by showing ....... your classical education and say:",
 options: ["up", "on", "off", "in"],
 correctIndex: 2
},
{
 question: "This story is ....... on an incident that actually happened.",
 options: ["founded", "grounded", "based", "established"],
 correctIndex: 2
},
{
 question: "I'm sorry to tell you but she is simply ....... that this will be the result but she has no actual proof.",
 options: ["daydreaming", "hallucinating", "hypothesizing", "dithering"],
 correctIndex: 2
},
{
 question: "I asked you to bring back a different one but you've brought a similar one back that's exactly the ....... as the first one.",
 options: ["equivalent", "apparent", "same", "identical"],
 correctIndex: 2
},
{
 question: "The local residents in this seaside village are very worried about the constant erosion of the cliff face, which is in ....... of falling into the sea.",
 options: ["risk", "chance", "danger", "likelihood"],
 correctIndex: 2
},
{
 question: "I don't believe it myself but ....... to the newspapers he is supposed to have exaggerated the firm's profits.",
 options: ["following", "regarding", "according", "concerning"],
 correctIndex: 2
},
{
 question: "The boss wants you to explain why there is a discrepancy in the figures and ....... for the sudden drop in profits.",
 options: ["talk", "speak", "account", "decide"],
 correctIndex: 2
},
{
 question: "You couldn't find a more loyal bunch of people who have a ....... of reliability so strong that they will never let you down.",
 options: ["wish", "desire", "sense", "sensing"],
 correctIndex: 2
},
{
 question: "I wouldn't believe everything she says because it's my belief that she is ....... to exaggerate.",
 options: ["designated", "declined", "inclined", "tended"],
 correctIndex: 2
},
{
 question: "As I was a stranger in that country I was not ....... with some of their customs and didn't understand why people were laughing at me.",
 options: ["addicted", "attracted", "acquainted", "acquired"],
 correctIndex: 2
},
{
 question: "As the hospital had been careless with its hygiene procedures, the patient found she had been ....... with a harmful virus.",
 options: ["detected", "rejected", "infected", "suspected"],
 correctIndex: 2
},
{
 question: "As a ....... of the district she had absolutely no difficulty in understanding the local dialect.",
 options: ["inhabitant", "relation", "native", "newcomer"],
 correctIndex: 2
},
{
 question: "He finds breathing very difficult in restricted spaces as he ....... from asthma.",
 options: ["refers", "defers", "suffers", "differs"],
 correctIndex: 2
},
{
 question: "You can have whichever one you want as I'll let you ....... from these examples here.",
 options: ["consider", "deliberate", "choose", "enable"],
 correctIndex: 2
},
{
 question: "....... for his age and he is after all only 12, I think his achievement is remarkable.",
 options: ["Permitting", "Discerning", "Allowing", "Regarding"],
 correctIndex: 2
},
{
 question: "No one had a clue what had actually happened neither the police ....... the public.",
 options: ["or", "either", "nor", "never"],
 correctIndex: 2
},
{
 question: "He ....... to have sailed single-handed round the world but personally I don't believe him.",
 options: ["says", "believes", "claims", "intends"],
 correctIndex: 2
},
{
 question: "The General made absolutely sure his troops were ready for battle and ....... with the latest equipment.",
 options: ["invested", "created", "provided", "tested"],
 correctIndex: 2
},
{
 question: "Although he hadn't actually done anything, he looked as if he might and he was arrested for being outside the house with ....... to burgle it.",
 options: ["purpose", "reason", "intent", "inclination"],
 correctIndex: 2
},
{
 question: "I know you trust him but I have my doubts about him and must admit to being ....... of him.",
 options: ["suspect", "suspecting", "suspicious", "suspected"],
 correctIndex: 2
},
{
 question: "Like all good philosophers in ....... of truth she is always looking for new perspectives.",
 options: ["sight", "reach", "search", "enquiry"],
 correctIndex: 2
},
{
 question: "This is a sort of shortened version of what happened and has been ....... to fit into the newspaper.",
 options: ["adopted", "attuned", "abbreviated", "added"],
 correctIndex: 2
},
{
 question: "The university decided to give their ....... an honorary degree because she had always been most generous in her financial help.",
 options: ["believer", "benefit", "benefactor", "beholder"],
 correctIndex: 2
},
{
 question: "The crowd remained good-natured for the first part of his speech and Henry was feeling pleased with himself. And then, ....... half a dozen tractors roared onto the field.",
 options: ["automatically", "particularly", "suddenly", "especially"],
 correctIndex: 2
},
{
 question: "'Well, we can't sell them at a profit,' said the tractor driver, 'because the imported ones are too cheap. So instead of letting them go to ......., you can have them!'",
 options: ["loss", "disaster", "waste", "rubbish"],
 correctIndex: 2
},
{
 question: "Vera: I've got some supper ready. I'm sure you must be ........",
 options: ["fasting", "eating", "starving", "munching"],
 correctIndex: 2
},
{
 question: "By the time I had reached the bottom of the mountain, I ....... extremely tired.",
 options: ["feel", "have felt", "felt", "am feeling"],
 correctIndex: 2
},
{
 question: "The witness ....... everyone that he hadn't had anything to do with the crime.",
 options: ["convinces", "is convincing", "convinced", "has convinced"],
 correctIndex: 2
},
{
 question: "I'd had scarcely any time to think about it before they ....... me for my opinion.",
 options: ["had asked", "did ask", "asked", "have asked"],
 correctIndex: 2
},
{
 question: "It ....... a great shock to everyone because he hadn't said a word for 10 years.",
 options: ["is", "will be", "was", "are"],
 correctIndex: 2
},
{
 question: "....... go if you like because I have to do some shopping.",
 options: ["I'm", "I'd", "I'll", "I've"],
 correctIndex: 2
},
{
 question: "I ....... simply wait until she comes back.",
 options: ["was", "am", "shall", "do"],
 correctIndex: 2
},
{
 question: "What ....... happen to the family if he loses all his money?",
 options: ["does", "did", "will", "is"],
 correctIndex: 2
},
{
 question: "I'm sure they ....... get married and live happily ever afterwards.",
 options: ["did", "have", "will", "would"],
 correctIndex: 2
},
{
 question: "I told them I ....... just going out for a short walk.",
 options: ["would", "am", "was", "will"],
 correctIndex: 2
},
{
 question: "She told me ....... carefully on the icy roads.",
 options: ["to be driven", "to have driven", "to drive", "to be driven"],
 correctIndex: 2
},
{
 question: "He was wondering what ....... prompted him to take no notice at all.",
 options: ["has", "have", "had", "having"],
 correctIndex: 2
},
{
 question: "Is he ....... arrested as we speak?",
 options: ["be", "been", "being", "will be"],
 correctIndex: 2
},
{
 question: "That building ....... left unoccupied since 1950.",
 options: ["would be", "would being", "has been", "will be"],
 correctIndex: 2
},
{
 question: "That ceremony ....... enacted on Tuesday next.",
 options: ["has been", "is", "is being", "have"],
 correctIndex: 2
},
{
 question: "Sometimes I wish I ....... what the future holds.",
 options: ["know", "known", "knew", "knows"],
 correctIndex: 2
},
{
 question: "Let's ....... there tomorrow if it's fine.",
 options: ["going", "gone", "go", "goes"],
 correctIndex: 2
},
{
 question: "Please come back soon and ....... the work you started two weeks ago.",
 options: ["finished", "finishing", "finish", "finishes"],
 correctIndex: 2
},
{
 question: "That programme is so boring that it's like watching paint ........",
 options: ["dries", "dried", "dry", "has dried"],
 correctIndex: 2
},
{
 question: "How anyone ....... to live in those conditions in the 18th century is difficult to imagine.",
 options: ["manages", "will manage", "managed", "is managing"],
 correctIndex: 2
},
{
 question: "They were eating dinner when the lights ....... out.",
 options: ["go", "are going", "went", "goes"],
 correctIndex: 2
},
{
 question: "No matter what happens next I ....... help you.",
 options: ["am", "have", "will", "would"],
 correctIndex: 2
},
{
 question: "....... get tired of answering the same questions every day?",
 options: ["Have you ever", "Had you ever", "Do you ever", "Are you ever"],
 correctIndex: 2
},
{
 question: "India and Iran will continue to deepen ties and ....... bilateral projects, including the tri-nation pipeline and a multi-billion dollar gas deal.",
 options: ["carry off", "carry through", "carry on with", "carry away"],
 correctIndex: 2
},
{
 question: "When irrigation has no ....... system, the evaporating water deposits a gradual build-up of salinization, which is eventually damaging to plant life.",
 options: ["carry over", "carry on", "carry off", "carry out"],
 correctIndex: 2
},
{
 question: "Middle Eastern restaurants often have a way of whisking you away to a far off land of belly dancers, exotic spices and ....... drink.",
 options: ["incriminating", "intimidating", "intoxicating", "instigating"],
 correctIndex: 2
},
{
 question: "Indonesia has an ....... range of Japanese restaurants as Japan has long been the biggest investor in the country",
 options: ["ecliptic", "ecstatic", "eclectic", "eccentric"],
 correctIndex: 2
},
{
 question: "European cuisine always ....... a sense of nostalgia and romance, like running into an old flame.",
 options: ["evolves", "evinces", "evokes", "evicts"],
 correctIndex: 2
},
{
 question: "I ....... TV yesterday evening.",
 options: ["saw", "looked", "viewed", "watched"],
 correctIndex: 3
},
{
 question: "I want you to tell me the ....... truth.",
 options: ["all", "exact", "real", "whole"],
 correctIndex: 3
},
{
 question: "Please be ....... when you cross this road.",
 options: ["careless", "carefree", "caring", "careful"],
 correctIndex: 3
},
{
 question: "Do what you like, I really don't ........",
 options: ["concern", "interested", "dislike", "mind"],
 correctIndex: 3
},
{
 question: "When you first meet someone, you usually shake them ....... the hand.",
 options: ["with", "on", "in", "by"],
 correctIndex: 3
},
{
 question: "The police officer told the children always to tell the ........",
 options: ["TRUE", "facts", "information", "truth"],
 correctIndex: 3
},
{
 question: "Can you ....... me all right over there because you are rather a long way away?",
 options: ["listening", "hearing", "listen", "hear"],
 correctIndex: 3
},
{
 question: "I should explain that he finds it very difficult to follow your conversation because he is very hard of ........",
 options: ["listen to", "listening", "to hear", "hearing"],
 correctIndex: 3
},
{
 question: "I have been ....... strange stories about you recently but I do hope that there is no substance in them.",
 options: ["listened to", "listening to", "heard", "hearing"],
 correctIndex: 3
},
{
 question: "They wanted their daughter to improve her social skills and sent her to the famous ....... school in Switzerland.",
 options: ["ends", "ending", "finishes", "finishing"],
 correctIndex: 3
},
{
 question: "After the children had ....... doing their homework, the whole family watched television.",
 options: ["ends", "ended", "fnishes", "finished"],
 correctIndex: 3
},
{
 question: "You could tell the time by him because he always ....... work at exactly the same time every day.",
 options: ["ends", "ended", "finish", "finished"],
 correctIndex: 3
},
{
 question: "To most people it seemed like a long and successful relationship and so it was a great surprise to learn that they had ....... with each other.",
 options: ["ends", "ended", "finishes", "finished"],
 correctIndex: 3
},
{
 question: "My car very rarely ....... first time when the weather is really cold.",
 options: ["begins", "beginning", "starting", "starts"],
 correctIndex: 3
},
{
 question: "As far as I was concerned when the accident happened, it was the ....... of the end.",
 options: ["start", "begin", "starting", "beginning"],
 correctIndex: 3
},
{
 question: "I'm going ....... for a few days so don't send me any more work.",
 options: ["off", "out", "over", "away"],
 correctIndex: 3
},
{
 question: "There are so many things that it's difficult to ........",
 options: ["put", "follow", "find", "choose"],
 correctIndex: 3
},
{
 question: "Oh, come on it's ....... not that difficult.",
 options: ["quickly", "hardly", "always", "surely"],
 correctIndex: 3
},
{
 question: "Excuse me I ....... if you can help me.",
 options: ["expect", "hope", "believe", "wonder"],
 correctIndex: 3
},
{
 question: "Yes, I have but I can't ....... it.",
 options: ["pursue", "chase", "control", "follow"],
 correctIndex: 3
},
{
 question: "Now, where are you ....... for?",
 options: ["doing", "going", "driving", "making"],
 correctIndex: 3
},
{
 question: "Because you're in that road ....... now.",
 options: ["simply", "obviously", "absolutely", "right"],
 correctIndex: 3
},
{
 question: "Well, I get a ....... in my right eye every time I drink a cup of tea.",
 options: ["hurt", "shoot", "feel", "pain"],
 correctIndex: 3
},
{
 question: "I'm not ....... you to do that but next time you drink tea with sugar...",
 options: ["placing", "indicating", "speaking", "asking"],
 correctIndex: 3
},
{
 question: "Next time you drink tea with sugar, don't forget to ....... the spoon.",
 options: ["reject", "replace", "repeat", "remove"],
 correctIndex: 3
},
{
 question: "Yes, thank you and I'm afraid it's not ....... very bright at the moment.",
 options: ["seeming", "appearing", "seeing", "looking"],
 correctIndex: 3
},
{
 question: "Then the clouds will ....... further south in the afternoon.",
 options: ["transport", "convey", "direct", "move"],
 correctIndex: 3
},
{
 question: "But things will ....... tomorrow.",
 options: ["better", "improvise", "increase", "improve"],
 correctIndex: 3
},
{
 question: "But you'll have to be quick because it soon ........",
 options: ["despairs", "disappoints", "deserts", "disappears"],
 correctIndex: 3
},
{
 question: "It will be a bit of a mixed ........",
 options: ["sack", "holder", "container", "bag"],
 correctIndex: 3
},
{
 question: "At ....... I think she's very pretty.",
 options: ["last", "lost", "less", "least"],
 correctIndex: 3
},
{
 question: "I'm ....... sorry I can't hear a word you're saying.",
 options: ["horribly", "considerably", "definitely", "awfully"],
 correctIndex: 3
},
{
 question: "It's no ....... I can't hear you.",
 options: ["try", "point", "idea", "use"],
 correctIndex: 3
},
{
 question: "Ah that's ....... better now I can't hear those awful bells. Now what was it you wanted to say?",
 options: ["more", "most", "mostly", "much"],
 correctIndex: 3
},
{
 question: "....... me what did you do at the weekend?",
 options: ["Say", "Speak", "Announce", "Tell"],
 correctIndex: 3
},
{
 question: "That ....... interesting.",
 options: ["rings", "looks", "hears", "sounds"],
 correctIndex: 3
},
{
 question: "Exactly, in fact I almost ........",
 options: ["downed", "dropped", "dripped", "drowned"],
 correctIndex: 3
},
{
 question: "Mike: We went to Paris last summer. <br>Jane: .......",
 options: ["I never go there too.", "I never went there.", "I never did there.", "I've never been there."],
 correctIndex: 3
},
{
 question: "Mike: More people die from eating fatty food than from smoking. <br>Jane: .......",
 options: ["You must be ridiculous!", "You must be laughing!", "You must be smiling!", "You must be joking!"],
 correctIndex: 3
},
{
 question: "Mike: You know the boss will be angry with you. <br>Jane: .......",
 options: ["I'm not caring.", "I'm not at all caring.", "I care nothing.", "I don't care."],
 correctIndex: 3
},
{
 question: "Mike: 'He offered me a 50% discount. What should I do?'<br>Jane: ‘.......’",
 options: ["Hold his hand down.", "Bite his hand down.", "Hold your hand in.", "Bite his hand off."],
 correctIndex: 3
},
{
 question: "Mike: 'Can you explain why she did that?'<br>Jane: ‘.......’",
 options: ["Heaven alone will say.", "Heaven only says.", "Heaven alone speaks.", "Heaven only knows."],
 correctIndex: 3
},
{
 question: "Boss: 'And this is our new employee.'<br>Jane: ‘.......’",
 options: ["How are you doing?", "How did you do?", "How do you?", "How do you do?"],
 correctIndex: 3
},
{
 question: "Mike: 'I could give you a lift to the station.'<br>Jane: ‘.......’",
 options: ["There's no requirement.", "There's no practicality.", "There's no aim.", "There's no need."],
 correctIndex: 3
},
{
 question: "Mike: 'What do you think are the chances of finding people still alive?'<br>Jane: ‘.......’",
 options: ["There's little picture, really.", "There's little imagination, really.", "There's little perception, really.", "There's little hope, really."],
 correctIndex: 3
},
{
 question: "Mike: 'I just think they've wasted their time, don't you?'<br>Jane: ‘.......’",
 options: ["There's no admitting it.", "There's no assigning it.", "There's no decrying it.", "There's no denying it."],
 correctIndex: 3
},
{
 question: "Mike: 'I bet you don't know what happened at the party?'<br>Jane: ‘.......’",
 options: ["I will not imagine.", "I do not imagine.", "I must not imagine.", "I can't imagine."],
 correctIndex: 3
},
{
 question: "Mike: 'Guess how much income tax I pay.'<br>Jane: ‘.......’",
 options: ["I haven't a thought.", "I haven't a belief.", "I haven't a point.", "I haven't a clue."],
 correctIndex: 3
},
{
 question: "Mike: 'Do you understand what he's on about?'<br>Jane: ‘.......’",
 options: ["No, it's long above my head.", "No, it's road above my head.", "No, it's route above my head.", "No, it's way above my head."],
 correctIndex: 3
},
{
 question: "Mike: 'It's amazing when you learn what technology can do, isn't it?'<br>Jane: ‘.......’",
 options: ["The mind trembles.", "The mind wobbles.", "The mind stumbles.", "The mind boggles."],
 correctIndex: 3
},
{
 question: "Mike: 'Then you take away the first number — are you with me?'<br>Jane: ‘.......’",
 options: ["No, you've thrown me.", "No, you've hit me.", "No, you've turned me.", "No, you've lost me."],
 correctIndex: 3
},
{
 question: "Jill: 'What shall I do — I'm in a terrible state!'<br>Frank: ‘.......’",
 options: ["Calm on.", "Calm up.", "Calm along.", "Calm down."],
 correctIndex: 3
},
{
 question: "Jill: 'I do hope they make it tonight — it's very late you know.'<br>Frank: ‘.......’",
 options: ["They're tied to come.", "They're destined to come.", "They're forced to come.", "They're bound to come."],
 correctIndex: 3
},
{
 question: "Jill: 'I'm very depressed at the moment, sorry.'<br>Frank: ‘.......’",
 options: ["Face up.", "Cheek up.", "Nose up.", "Chin up."],
 correctIndex: 3
},
{
 question: "John: 'Thank you very much for helping me.'<br>Sue: ‘.......’",
 options: ["You don't mention it.", "No mention of it.", "You mention it.", "Don't mention it."],
 correctIndex: 3
},
{
 question: "John: 'We'd like to give you this small present to show our gratitude.'<br>Sue: ‘.......’",
 options: ["It's really not needed.", "It's really not wanted.", "It's really not demanded.", "It's really not necessary."],
 correctIndex: 3
},
{
 question: "Jill: 'We've collected thousands of pounds this week for charity.'<br>Frank: ‘.......’",
 options: ["Goodness you!", "Goodness them!", "Goodness us!", "Goodness me!"],
 correctIndex: 3
},
{
 question: "Jill: 'She came top in the exam grades this summer.'<br>Frank: ‘.......’",
 options: ["Well made.", "Well held.", "Well got.", "Well done."],
 correctIndex: 3
},
{
 question: "Frank: 'I hear that the Government is going to abolish income tax.'<br>Jill: ‘.......’",
 options: ["That is the day!", "That could be the day!", "That may be the day!", "That'll be the day!"],
 correctIndex: 3
},
{
 question: "You said you would .......",
 options: ["would you?", "did you?", "had you?", "didn't you?"],
 correctIndex: 3
},
{
 question: "No-one understood that word .......",
 options: ["does he?", "did you?", "didn't they?", "did they?"],
 correctIndex: 3
},
{
 question: "Sarah: 'I've torn up your homework essay!'<br>Paul: ‘.......’",
 options: ["That'll be nice, will it?", "That's nice, is it?", "That would be nice, wouldn't it?", "That's nice, isn't it?"],
 correctIndex: 3
},
{
 question: "Sarah: 'You mustn't eat with your mouth full.'<br>Paul: ‘.......’",
 options: ["Oh I must, must I?", "Oh I can't, can I?", "Oh I have to, have I?", "Oh I mustn't, must I?"],
 correctIndex: 3
},
{
 question: "He used to work in the city .......",
 options: ["had he?", "does he?", "has he?", "didn't he?"],
 correctIndex: 3
},
{
 question: "He has his lunch at the office .......",
 options: ["had he?", "did he?", "hadn't he?", "doesn't he?"],
 correctIndex: 3
},
{
 question: "He really didn't need to speak to me like that .......",
 options: ["does he?", "has he?", "will he?", "did he?"],
 correctIndex: 3
},
{
 question: "You are just the sort of person who would say that .......",
 options: ["would you?", "wouldn't you?", "don't you?", "aren't you?"],
 correctIndex: 3
},
{
 question: "His ....... will not write. It is out of ink.",
 options: ["pencil", "friend", "television", "pen"],
 correctIndex: 3
},
{
 question: "Your ....... break is from noon to 1 pm.",
 options: ["supper", "breakfast", "dinner", "lunch"],
 correctIndex: 3
},
{
 question: "....... am an engineer.",
 options: ["You", "He", "We", "I"],
 correctIndex: 3
},
{
 question: "She is ....... athlete.",
 options: ["good", "well", "a", "an"],
 correctIndex: 3
},
{
 question: "In some countries it never ........",
 options: ["snow", "snowing", "had snowed", "snows"],
 correctIndex: 3
},
{
 question: "Laura wears gloves ....... her hands will stay warm.",
 options: ["or", "that", "why", "so"],
 correctIndex: 3
},
{
 question: "My old job was ....... than this one.",
 options: ["more easier", "easiest", "most easy", "easier"],
 correctIndex: 3
},
{
 question: "Do you walk ....... take the bus to work?",
 options: ["because", "from", "but", "or"],
 correctIndex: 3
},
{
 question: "....... play guitar all the time.",
 options: ["She", "He", "Us", "They"],
 correctIndex: 3
},
{
 question: "We went ....... every day in our neighbors' swimming pool.",
 options: ["swim", "swam", "had swam", "swimming"],
 correctIndex: 3
},
{
 question: "Soccer ....... now a popular sport in most countries.",
 options: ["was", "has been", "am", "is"],
 correctIndex: 3
},
{
 question: "Let me know ....... you hear from your mother.",
 options: ["who", "which", "whose", "when"],
 correctIndex: 3
},
{
 question: "This is ....... I want to be when I grow up.",
 options: ["why", "when", "which", "what"],
 correctIndex: 3
},
{
 question: "My friend Anna lives ....... England.",
 options: ["from", "at", "on", "in"],
 correctIndex: 3
},
{
 question: "Please put the plates ....... the table.",
 options: ["over", "for", "to", "on"],
 correctIndex: 3
},
{
 question: "....... you want some water?",
 options: ["Can", "Have", "May", "Do"],
 correctIndex: 3
},
{
 question: "....... I ride with you to work?",
 options: ["Does", "Haven't", "Allow", "May"],
 correctIndex: 3
},
{
 question: "My ....... colour is green.",
 options: ["preferred", "like", "most liked", "favourite"],
 correctIndex: 3
},
{
 question: "....... of my parents live in the United States of America.",
 options: ["Lots", "The two", "All", "Both"],
 correctIndex: 3
},
{
 question: "It is a rule: if you ride in my car you ....... wear your seatbelt.",
 options: ["may", "might", "can", "have to"],
 correctIndex: 3
},
{
 question: "Does your dog live inside ....... outside?",
 options: ["but", "because", "though", "or"],
 correctIndex: 3
},
{
 question: "Does your ....... have a dishwasher?",
 options: ["living room", "bathroom", "dining room", "kitchen"],
 correctIndex: 3
},
{
 question: "Our table is ....... for 8 people.",
 options: ["big", "enough big", "a lot big", "big enough"],
 correctIndex: 3
},
{
 question: "How ....... people are coming?",
 options: ["lots", "much", "a lot", "many"],
 correctIndex: 3
},
{
 question: "I need to practice piano ....... before the concert.",
 options: ["much", "very", "many", "a lot"],
 correctIndex: 3
},
{
 question: "If I am not weak I am ........",
 options: ["weaker", "pretty", "bright", "strong"],
 correctIndex: 3
},
{
 question: "At the stop sign do not turn right, turn ........",
 options: ["light", "wrong", "straight", "left"],
 correctIndex: 3
},
{
 question: "Linda: Nothing really but there is more ....... in the town.",
 options: ["choosing", "choose", "chosen", "choice"],
 correctIndex: 3
},
{
 question: "Mike: Oh dear. Are you going to wait any ........",
 options: ["quicker", "slower", "former", "longer"],
 correctIndex: 3
},
{
 question: "Linda: No, I've been ....... a lot of pain the last few months.",
 options: ["over", "off", "across", "in"],
 correctIndex: 3
},
{
 question: "Linda: Then ....... the pain in my back.",
 options: ["there are", "there will be", "there should be", "there's"],
 correctIndex: 3
},
{
 question: "Mike: I know what that's ........",
 options: ["same", "as", "similar", "like"],
 correctIndex: 3
},
{
 question: "Linda: But you can't go ....... I haven't described my other pains.",
 options: ["still", "again", "till", "yet"],
 correctIndex: 3
},
{
 question: "Linda: That's easy for you to ....... but I feel very anxious.",
 options: ["dictate", "speak", "call", "say"],
 correctIndex: 3
},
{
 question: "Linda: Yes, you're right. It's as ....... everything on the plane is shaking.",
 options: ["when", "like", "but", "if"],
 correctIndex: 3
},
{
 question: "Deborah: No, this is my first ........",
 options: ["stay", "encounter", "meeting", "visit"],
 correctIndex: 3
},
{
 question: "Charles: It's very good the way he sits at the table and eats his ....... with a knife and fork.",
 options: ["substance", "content", "sustenance", "food"],
 correctIndex: 3
},
{
 question: "Charles: The one thing I've ....... is that he doesn't say anything.",
 options: ["remarked", "connected", "commented", "noticed"],
 correctIndex: 3
},
{
 question: "Diner: I was thinking I ....... try the soup.",
 options: ["can", "will", "ought to", "might"],
 correctIndex: 3
},
{
 question: "Waiter: It's really not your ........ We don't have any pork now.",
 options: ["moment", "time", "hour", "day"],
 correctIndex: 3
},
{
 question: "Diner: Right then. If it's not too much ........ Please bring me a cup of coffee.",
 options: ["difficulty", "problem", "hardship", "trouble"],
 correctIndex: 3
},
{
 question: "Charlie: Yes, hello it's Charlie here. I wanted to ....... how you are.",
 options: ["discover", "detect", "uncover", "know"],
 correctIndex: 3
},
{
 question: "Charlie: Well, it all started when my wife ....... out on me.",
 options: ["strolled", "rushed", "paced", "walked"],
 correctIndex: 3
},
{
 question: "Alice: I think the play is just on the ....... of starting.",
 options: ["tip", "peak", "top", "point"],
 correctIndex: 3
},
{
 question: "Alice: I think his first name is Michael but I can't remember the ........",
 options: ["brand name", "proper name", "pet name", "surname"],
 correctIndex: 3
},
{
 question: "Employee: Of course. In what .......?",
 options: ["direction", "path", "road", "way"],
 correctIndex: 3
},
{
 question: "Employee: It's Thursday of course. What do you want to know .......?",
 options: ["to", "at", "up", "for"],
 correctIndex: 3
},
{
 question: "Mrs Ashton: Well, that's good ........",
 options: ["information", "knowledge", "knowing", "news"],
 correctIndex: 3
},
{
 question: "Mr Corp: Well, you'll have no such ....... today, madam.",
 options: ["puzzle", "situation", "condition", "problem"],
 correctIndex: 3
},
{
 question: "I have two pencils. One is black, ....... is blue.",
 options: ["another", "the others", "others", "the other"],
 correctIndex: 3
},
{
 question: "There are eight pets in my house. Six are cats and ....... are dogs.",
 options: ["others", "another", "the other", "the others"],
 correctIndex: 3
},
{
 question: "Venice is famous ....... its canals.",
 options: ["about", "in", "with", "for"],
 correctIndex: 3
},
{
 question: "The second hotel was different ....... the first.",
 options: ["to", "for", "with", "from"],
 correctIndex: 3
},
{
 question: "Why are you angry ....... him?",
 options: ["of", "from", "on", "with"],
 correctIndex: 3
},
{
 question: "There is ....... I need to do tomorrow afternoon.",
 options: ["any", "anything", "yet", "something"],
 correctIndex: 3
},
{
 question: "Did you bring ....... you needed for the trip?",
 options: ["no", "any", "nothing", "everything"],
 correctIndex: 3
},
{
 question: "My mom asked me how I was and I said ....... was fine.",
 options: ["anything", "something", "any", "everything"],
 correctIndex: 3
},
{
 question: "My friend's dog always chases ....... tail.",
 options: ["their", "theirs", "it's", "its"],
 correctIndex: 3
},
{
 question: "Every time I go on a trip I leave my dog in a ........",
 options: ["channel", "cannel", "canal", "kennel"],
 correctIndex: 3
},
{
 question: "Hey Tom, how's the ....... in Tulsa today?",
 options: ["wither", "whether", "feather", "weather"],
 correctIndex: 3
},
{
 question: "This is the teacher ....... told me my son has been misbehaving in class.",
 options: ["which", "whose", "whom", "who"],
 correctIndex: 3
},
{
 question: "I asked you ....... one of these shoes you think would go with my outfit.",
 options: ["whose", "who", "whom", "which"],
 correctIndex: 3
},
{
 question: "I only have ....... dollars.",
 options: ["some", "any", "a little", "a few"],
 correctIndex: 3
},
{
 question: "How many gallons of water did you bring for the trip? — I just have ....... gallons.",
 options: ["much", "any", "a little", "a few"],
 correctIndex: 3
},
{
 question: "I heard a glass breaking noise in the living room and ran to see what happened. A pigeon flew ....... the window and broke it.",
 options: ["for", "from", "by", "against"],
 correctIndex: 3
},
{
 question: "My house is ....... the grocery store and the gas station.",
 options: ["under", "off", "among", "between"],
 correctIndex: 3
},
{
 question: "Frederick lives ....... the hill, where all the mansions are.",
 options: ["above", "unto", "onto", "up"],
 correctIndex: 3
},
{
 question: "Perhaps she would have been ....... by that dog if its owner hadn't been faster and caught him right on time.",
 options: ["bit", "bite", "bitted", "bitten"],
 correctIndex: 3
},
{
 question: "When he finally arrived, his date had already ........",
 options: ["going", "go", "went", "gone"],
 correctIndex: 3
},
{
 question: "The director was drummed ....... of office for life when it was discovered that she had been involved in insider trading.",
 options: ["up", "in", "on", "out"],
 correctIndex: 3
},
{
 question: "She ran over to the commotion to ....... what was happening.",
 options: ["know about", "find more", "find", "find out"],
 correctIndex: 3
},
{
 question: "Don't forget about your daughter's soccer game — she'll never ....... you!",
 options: ["absolve", "exonerate", "excuse", "forgive"],
 correctIndex: 3
},
{
 question: "I haven't ....... from anyone lately.",
 options: ["hear", "listened", "informed", "heard"],
 correctIndex: 3
},
{
 question: "It's difficult to understand what she ....... in her job — it seems very boring.",
 options: ["distinguishes in", "looks in", "observes in", "sees in"],
 correctIndex: 3
},
{
 question: "After visiting several galaxies, the aliens found themselves captivated by life on ........",
 options: ["world", "the world", "the earth", "earth"],
 correctIndex: 3
},
{
 question: "Our friends — who we haven't seen in a long time — ....... last night.",
 options: ["appeared in our home", "came in our home", "came to our home", "came by"],
 correctIndex: 3
},
{
 question: "After the car accident, Bob had to ....... his endurance during his rehabilitation classes.",
 options: ["make", "build more", "build forward", "build up"],
 correctIndex: 3
},
{
 question: "My uncle has a long beard and a ....... chest.",
 options: ["furred chest", "furry", "many hair", "hairy"],
 correctIndex: 3
},
{
 question: "Our nanny has always been ....... to us.",
 options: ["very kindly", "kindly", "being kindly", "kind"],
 correctIndex: 3
},
{
 question: "Over by the railroad tracks, there was a heap of ........",
 options: ["houses", "flowers", "stairs", "stones"],
 correctIndex: 3
},
{
 question: "In the distance, the onlookers could see a fleet of ........",
 options: ["players", "insects", "stairs", "ships"],
 correctIndex: 3
},
{
 question: "As she looked up, she saw a flight of ........",
 options: ["birds", "insects", "crows", "stairs"],
 correctIndex: 3
},
{
 question: "There was a long row of ....... near the beach.",
 options: ["cows", "insects", "stairs", "houses"],
 correctIndex: 3
},
{
 question: "We had so much fun in Chicago — we ....... it in three days.",
 options: ["make", "do", "made", "did"],
 correctIndex: 3
},
{
 question: "Such bad behavior is typical ....... the spoiled child.",
 options: ["for", "with", "about", "of"],
 correctIndex: 3
},
{
 question: "He was so proud of his car yesterday because during the race it ....... 260 km/hr.",
 options: ["make", "do", "made", "did"],
 correctIndex: 3
},
{
 question: "No one knows why he ....... those terrible things in the past.",
 options: ["make", "do", "made", "did"],
 correctIndex: 3
},
{
 question: "....... was the first man in space?",
 options: ["When", "Where", "Which", "Who"],
 correctIndex: 3
},
{
 question: "....... was the youngest person to be elected as President of the United States?",
 options: ["Which", "What", "Where", "Who"],
 correctIndex: 3
},
{
 question: "I ....... forgotten to set my alarm clock, so I was late for my train.",
 options: ["was", "were", "did", "had"],
 correctIndex: 3
},
{
 question: "The police located the art work which ....... been stolen from the gallery.",
 options: ["was", "were", "did", "had"],
 correctIndex: 3
},
{
 question: "She was surprised that he knew her name. She ....... never met him before.",
 options: ["was", "were", "did", "had"],
 correctIndex: 3
},
{
 question: "I like to go to bed ....... midnight on Saturdays.",
 options: ["since", "on", "during", "at"],
 correctIndex: 3
},
{
 question: "I had a crash yesterday afternoon. Fortunately I didn't do too much damage ....... my car.",
 options: ["with", "in", "about", "to"],
 correctIndex: 3
},
{
 question: "We've run ....... of sugar. Could you please buy some more?",
 options: ["down on", "away from", "on with", "out of"],
 correctIndex: 3
},
{
 question: "I'm broke. I have to ....... an idea for making money.",
 options: ["get on with", "put up with", "run out of", "come up with"],
 correctIndex: 3
},
{
 question: "She hasn't worked here very long and is therefore a little ....... on matters of procedure.",
 options: ["red", "blue", "white", "green"],
 correctIndex: 3
},
{
 question: "Now that they have read it in ......., they believe me.",
 options: ["red and blue", "blue and red", "white and black", "black and white"],
 correctIndex: 3
},
{
 question: "She lost the company a lot of money last week and as a result has got a ....... mark against her name.",
 options: ["red", "blue", "white", "black"],
 correctIndex: 3
},
{
 question: "As they turned round and ran away, people thought they were ........",
 options: ["red", "blue", "white", "yellow"],
 correctIndex: 3
},
{
 question: "I know he doesn't like you because the moment you came in the room I saw him give you a ....... look.",
 options: ["red", "blue", "white", "black"],
 correctIndex: 3
},
{
 question: "This is a very expensive holiday intended for those with plenty of money as it involves a trip ....... the world.",
 options: ["through", "along", "about", "around"],
 correctIndex: 3
},
{
 question: "There's a huge ....... in the local paper about the special offers available in the store this weekend.",
 options: ["announcement", "display", "notice", "advertisement"],
 correctIndex: 3
},
{
 question: "He is very lucky to have got himself a ....... job.",
 options: ["pear", "banana", "lemon", "plum"],
 correctIndex: 3
},
{
 question: "One of that child's teeth is very ....... and will soon fall out.",
 options: ["lost", "losing", "lose", "loose"],
 correctIndex: 3
},
{
 question: "The firm has expanded and they want to ....... on extra staff.",
 options: ["do", "get", "make", "take"],
 correctIndex: 3
},
{
 question: "We mustn't be late this morning because today is when the new boss is going to ....... over.",
 options: ["do", "get", "make", "take"],
 correctIndex: 3
},
{
 question: "One day the father knew that he was dying and called his two sons to his bed ........",
 options: ["corner", "wall", "table", "side"],
 correctIndex: 3
},
{
 question: "As soon as their father had died and been ......., the sons took out all their farming tools and started to dig the land.",
 options: ["grounded", "earthed", "confined", "buried"],
 correctIndex: 3
},
{
 question: "However long they dug and however hard they worked, they ....... to find the smallest bit of treasure.",
 options: ["lacked", "missed", "avoided", "failed"],
 correctIndex: 3
},
{
 question: "The moment the lights went out, there were scences of ........",
 options: ["madness", "insanity", "attack", "panic"],
 correctIndex: 3
},
{
 question: "I dare ....... you're right.",
 options: ["tell", "told", "tells", "say"],
 correctIndex: 3
},
{
 question: "You shouldn't take any notice of that because it's only hear........",
 options: ["telling", "says", "tells", "say"],
 correctIndex: 3
},
{
 question: "That's what people are always ........",
 options: ["say", "said", "telling", "saying"],
 correctIndex: 3
},
{
 question: "In the interest of safety the main valve on the machine had to be ....... off.",
 options: ["shutting", "closing", "closed", "shut"],
 correctIndex: 3
},
{
 question: "The police officer warned us that the road ahead was ........",
 options: ["shut", "shutting", "closing", "closed"],
 correctIndex: 3
},
{
 question: "Everything in that shop is now very cheap because they are having a ....... down sale.",
 options: ["shuts", "shutting", "closes", "closing"],
 correctIndex: 3
},
{
 question: "I'm afraid that tree will have to come down as it ....... out the light in the sitting room.",
 options: ["close", "closes", "shut", "shuts"],
 correctIndex: 3
},
{
 question: "We got very bad service today and had to ....... the waiter three times about the drinks.",
 options: ["remember", "order", "reminder", "remind"],
 correctIndex: 3
},
{
 question: "The restaurant was listed in the guide as it had been ....... to be of the appropriate standard.",
 options: ["valued", "esteemed", "respected", "judged"],
 correctIndex: 3
},
{
 question: "It was one of those plays where the ....... moved at great speed.",
 options: ["acting", "act", "actor", "action"],
 correctIndex: 3
},
{
 question: "One of the greatest actors of the century ....... an unforgettable character in the part of Scrooge from the novel by Charles Dickens.",
 options: ["developed", "manufactured", "moulded", "created"],
 correctIndex: 3
},
{
 question: "The ....... were so carried away with the acting that at the end of the play they all stood up and applauded.",
 options: ["spectators", "watchers", "listeners", "audience"],
 correctIndex: 3
},
{
 question: "There's no fool like an ....... fool.",
 options: ["aged", "ancient", "elderly", "old"],
 correctIndex: 3
},
{
 question: "Politeness costs ........",
 options: ["a lot", "a little", "much", "nothing"],
 correctIndex: 3
},
{
 question: "Everything in the ....... is lovely.",
 options: ["roses", "flowers", "grass", "garden"],
 correctIndex: 3
},
{
 question: "Come to the point and stop beating about the ........",
 options: ["tree", "flower", "hedge", "bush"],
 correctIndex: 3
},
{
 question: "If you really want to enjoy the full flavour of that particular meal, you must remember to ....... the right balance of sauces together.",
 options: ["join", "stick", "attach", "mix"],
 correctIndex: 3
},
{
 question: "I've just received his latest detective novel from the publisher so it's what you might call hot ....... the press.",
 options: ["by", "from", "with", "off"],
 correctIndex: 3
},
{
 question: "After a few minutes he ........",
 options: ["attains a river", "acquires a river", "nears a river", "reaches a river"],
 correctIndex: 3
},
{
 question: "At first they thoroughly enjoyed themselves and for the first time in their lives experienced ........",
 options: ["a sense of free", "a sense of freeing", "a sense of freed", "a sense of freedom"],
 correctIndex: 3
},
{
 question: "Suddenly the sound of a cat meowing ........",
 options: ["made them awake", "made them waken", "made them waking", "made them wake up"],
 correctIndex: 3
},
{
 question: "Frank: It couldn't possibly have been me I always shut doors ........",
 options: ["still", "hardly", "scarcely", "quietly"],
 correctIndex: 3
},
{
 question: "Jane: You're just making that up — I know you're not ........",
 options: ["saying the truth", "speaking the truth", "talking the truth", "telling the truth"],
 correctIndex: 3
},
{
 question: "Mike: Just a minute what's that note .......?",
 options: ["gummed on the door", "adhered on the door", "glued on the door", "stuck on the door"],
 correctIndex: 3
},
{
 question: "User: What an excellent idea! Leave me in ....... and go and write another test.",
 options: ["piece", "peacetime", "peaceful", "peace"],
 correctIndex: 3
},
{
 question: "People started to be ....... of her and thought that perhaps she had a secret source of information.",
 options: ["suspect", "suspecting", "suspicion", "suspicious"],
 correctIndex: 3
},
{
 question: "If you think I didn't catch you ....... that young waitress, you're quite mistaken.",
 options: ["fingering", "heading", "handing", "eying"],
 correctIndex: 3
},
{
 question: "Don't you think it's about time you put your ....... down and told them what you really think?",
 options: ["finger", "hand", "head", "foot"],
 correctIndex: 3
},
{
 question: "Sensibly as all ants do, they had ....... the grain during the summer.",
 options: ["assembled", "assumed", "brought", "collected"],
 correctIndex: 3
},
{
 question: "All the ants laughed and said in that case he would have to dance ....... to bed in the winter.",
 options: ["famous", "familiar", "faded", "famished"],
 correctIndex: 3
},
{
 question: "The hound dog was very ....... about this.",
 options: ["overturned", "set up", "upturned", "upset"],
 correctIndex: 3
},
{
 question: "The house dog told him to criticize their master who had taught him not how to work but how to ....... on the work of others.",
 options: ["hang", "support", "attach", "depend"],
 correctIndex: 3
},
{
 question: "It was ....... that the tortoise should choose the course and also the end of the race.",
 options: ["consented", "permitted", "allowed", "agreed"],
 correctIndex: 3
},
{
 question: "Another way of putting this is how many red ....... the author can throw in the reader's path.",
 options: ["fish", "sharks", "cod", "herrings"],
 correctIndex: 3
},
{
 question: "Invariably Poirots calls all the ....... together in the last part of the story.",
 options: ["suspicions", "suspecting", "suspected", "suspects"],
 correctIndex: 3
},
{
 question: "It seems that Mars has always been cold and icy and that it's not true that oceans have ....... on the planet in its early history.",
 options: ["shaped", "figured", "contoured", "formed"],
 correctIndex: 3
},
{
 question: "As the planet gets nearer to the Sun, enormous dust storms can be whipped ........",
 options: ["over", "on", "in", "up"],
 correctIndex: 3
},
{
 question: "You turned ....... the drive and saw only hills all around you so it felt like the middle of nowhere.",
 options: ["out", "aside from", "down", "into"],
 correctIndex: 3
},
{
 question: "The new owners had had to turn ....... all the rooms which were full of rubbish.",
 options: ["to", "down", "into", "out"],
 correctIndex: 3
},
{
 question: "They were so successful that they were even turning ....... bookings.",
 options: ["away", "into", "in", "down"],
 correctIndex: 3
},
{
 question: "The waiting was done by me and Doris, who should have turned it ....... years ago and by rights have been a guest herself because of the great age.",
 options: ["to", "away", "into", "in"],
 correctIndex: 3
},
{
 question: "She sniffed at the air full of breakfast smells, got up, turned ....... and walked out again.",
 options: ["up", "against", "aside", "around"],
 correctIndex: 3
},
{
 question: "Apparently she had completely forgotten that she'd already eaten breakfast that day. I turned ....... to hide my smile.",
 options: ["back", "around", "up", "aside"],
 correctIndex: 3
},
{
 question: "These days I wish I could turn the clock ....... and tell Doris how right she was!",
 options: ["out", "in", "on", "back"],
 correctIndex: 3
},
{
 question: "After what you've ......., I'm sure you need a holiday.",
 options: ["felt", "sensed", "acted", "experienced"],
 correctIndex: 3
},
{
 question: "....... now that I've heard what he has done to his family.",
 options: ["I think often of him", "I think a lot of him", "I don't think at all of him", "I don't think much of him"],
 correctIndex: 3
},
{
 question: "There were so many members of the political party who had ....... the leader that he resigned.",
 options: ["insisted", "invited", "apposed", "opposed"],
 correctIndex: 3
},
{
 question: "George Turnip was a highly respected vegetarian but the press were making serious ....... about him.",
 options: ["accusations", "insinuations", "intimations", "allegations"],
 correctIndex: 3
},
{
 question: "Once he was photographed eating in his dining room and the caption read: 'A picture of a ....... eating sausages'.",
 options: ["freak", "frump", "frame", "fraud"],
 correctIndex: 3
},
{
 question: "At the ....... of the day it's what you believe in that's important.",
 options: ["start", "beginning", "finish", "end"],
 correctIndex: 3
},
{
 question: "It just didn't stop raining throughout our holiday, day in day ........",
 options: ["over", "under", "up", "out"],
 correctIndex: 3
},
{
 question: "It wasn't long ago when I last saw her — it was only the ....... day.",
 options: ["recent", "last", "final", "other"],
 correctIndex: 3
},
{
 question: "I am sure you made the right choice and I ....... support your decision.",
 options: ["fairly", "quite", "considerably", "wholly"],
 correctIndex: 3
},
{
 question: "I know that they have all abandoned you one by one but I hope you won't forget I've ....... by you from the beginning.",
 options: ["adhered", "fastened", "joined", "stuck"],
 correctIndex: 3
},
{
 question: "I do think you should ....... this in mind before you seriously think about changing jobs.",
 options: ["carry", "stand", "hold", "bear"],
 correctIndex: 3
},
{
 question: "It's clear as they say that great minds think ....... because we have both come to exactly the same conclusion.",
 options: ["same", "similar", "like", "alike"],
 correctIndex: 3
},
{
 question: "There, I knew there was something I had to do today and now it's completely ....... my mind.",
 options: ["slid", "glided", "sailed", "slipped"],
 correctIndex: 3
},
{
 question: "To be honest I was feeling a bit ....... down.",
 options: ["pushed", "pulled", "switched", "run"],
 correctIndex: 3
},
{
 question: "All right I ....... up, I'll tell you the truth.",
 options: ["try", "bring", "call", "give"],
 correctIndex: 3
},
{
 question: "As she was on a very dangerous mission for the government she had to keep ....... about what she did for a living.",
 options: ["dad", "aunt", "uncle", "mum"],
 correctIndex: 3
},
{
 question: "If you want me to say nothing about it, I promise that if anybody asks then my lips are ........",
 options: ["stuck", "closed", "shut", "sealed"],
 correctIndex: 3
},
{
 question: "The rescuers tried desperately to listen out for people trapped in the wreckage but sadly the cries of those trapped were ........",
 options: ["unhearing", "auditory", "audited", "inaudible"],
 correctIndex: 3
},
{
 question: "It's no good worrying about that now because the damage is done and it's no good crying over spilled ........",
 options: ["sauce", "water", "beer", "milk"],
 correctIndex: 3
},
{
 question: "We had great hopes of being able to invite the distinguished writer to our meeting but he cried ....... at the last moment.",
 options: ["on", "through", "with", "off"],
 correctIndex: 3
},
{
 question: "I'm all in favour of ambition but I think when he says he'll be a millionaire by the time he's 25, he's simply crying for the ........",
 options: ["stars", "sun", "earth", "moon"],
 correctIndex: 3
},
{
 question: "We have done this play many times in different towns but your ....... has been the greatest so far.",
 options: ["appointment", "application", "apposition", "applause"],
 correctIndex: 3
},
{
 question: "That is the reason why I am standing here and making this short ........",
 options: ["speak", "speaking", "spoke", "speech"],
 correctIndex: 3
},
{
 question: "We ask the ....... of this vehicle to go back to their car as soon as possible and park their car in another space.",
 options: ["possessor", "possessing", "ownership", "owner"],
 correctIndex: 3
},
{
 question: "We would like to ....... our customers that over the Christmas period we will be closing an hour earlier than usual.",
 options: ["remember", "retake", "repeat", "remind"],
 correctIndex: 3
},
{
 question: "Unfortunately it is now 11 o'clock and so there is a ....... of 15 minutes already.",
 options: ["waiting", "lateness", "space", "delay"],
 correctIndex: 3
},
{
 question: "There was in fact a small fire in the train on platform 6 but we're glad to tell you that the flames have been ........",
 options: ["distinguished", "dampened", "saturated", "extinguished"],
 correctIndex: 3
},
{
 question: "To tell you the truth I shouldn't be ....... up here on top of this large statue of Field Marshal Smith.",
 options: ["caught", "catching", "cornered", "perched"],
 correctIndex: 3
},
{
 question: "After the soldiers I can see a group of circus ....... who are jumping and dancing as they go.",
 options: ["members", "doers", "actors", "performers"],
 correctIndex: 3
},
{
 question: "It has started to rain and I shall get ....... to the skin if I stay much longer up here.",
 options: ["sunk", "suited", "stuck", "soaked"],
 correctIndex: 3
},
{
 question: "Ladies and gentlemen it is a very great privilege for me to be asked to make a speech about the bride and her ........",
 options: ["grant", "grade", "groan", "groom"],
 correctIndex: 3
},
{
 question: "The other students described them as Romeo and Juliet and used to make fun of them behind their ........",
 options: ["heads", "eyes", "ears", "backs"],
 correctIndex: 3
},
{
 question: "No one was surprised because everyone took it for ....... that one day they would marry.",
 options: ["grasped", "understood", "granting", "granted"],
 correctIndex: 3
},
{
 question: "Fellow citizens I am honoured to be ....... to speak to you tonight about my party.",
 options: ["demanded", "forced", "enquired", "invited"],
 correctIndex: 3
},
{
 question: "We want people to live in harmony with each other and to settle ....... amicably.",
 options: ["distastes", "disasters", "disturbs", "disputes"],
 correctIndex: 3
},
{
 question: "The only reason for them going to the cinema on that day was to find some form of ........",
 options: ["internment", "involvement", "engrossment", "entertainment"],
 correctIndex: 3
},
{
 question: "The fans outside the cinema on the first showing of the film were unwilling to ....... until all the stars had gone home.",
 options: ["dispose", "displace", "discover", "disperse"],
 correctIndex: 3
},
{
 question: "Very often someone will give a ....... of a film and when you see it for yourself, it's quite different.",
 options: ["describing", "describes", "described", "description"],
 correctIndex: 3
},
{
 question: "You know the kind of things politicians talk about: health care, education, welfare and stuff ....... that.",
 options: ["as", "with", "on", "like"],
 correctIndex: 3
},
{
 question: "Now remember when you get up to speak, we're all relying on you to impress everyone and we expect you to ....... your stuff.",
 options: ["make", "say", "take", "do"],
 correctIndex: 3
},
{
 question: "It was a bit of a ....... story really because she told us how her boyfriend had left her, she'd lost her job and she had nowhere to live.",
 options: ["cry", "weep", "tear", "sob"],
 correctIndex: 3
},
{
 question: "The story ....... that he's just married for the fourth time but I don't really believe it.",
 options: ["says", "works", "sends", "goes"],
 correctIndex: 3
},
{
 question: "It's a brilliant film as far as the images are concerned but the story ....... is a bit weak.",
 options: ["theme", "thread", "tendency", "line"],
 correctIndex: 3
},
{
 question: "In early civilisations it was the story ....... to whom everyone went to hear what had happened in the past.",
 options: ["speaker", "talker", "announcer", "teller"],
 correctIndex: 3
},
{
 question: "It's high ....... we left if we really want to be there on time.",
 options: ["hour", "minute", "tempo", "time"],
 correctIndex: 3
},
{
 question: "The really high ....... of the evening's entertainment was when two clowns came into the ring and started throwing things at each other.",
 options: ["thing", "feature", "place", "spot"],
 correctIndex: 3
},
{
 question: "It's always the same when you break one of the rules of the office, she gets on her high ....... and starts shouting at you.",
 options: ["camel", "pony", "donkey", "horse"],
 correctIndex: 3
},
{
 question: "The other night we went out to the cinema or the ....... as they would say in the USA.",
 options: ["goings", "doings", "moves", "movies"],
 correctIndex: 3
},
{
 question: "At least that was ....... to be the background although the main interest was in something else.",
 options: ["inferred", "implied", "suggested", "supposed"],
 correctIndex: 3
},
{
 question: "When you see the first kiss on the ....... and you are sitting in row four, it can be very dramatic.",
 options: ["slide", "picture", "board", "screen"],
 correctIndex: 3
},
{
 question: "In fact this was a piece of ....... for Charlie as it happened.",
 options: ["fortune", "gratitude", "thanks", "luck"],
 correctIndex: 3
},
{
 question: "Charlie decided he would say exactly what he thought of the burglar and give him a piece of his ........",
 options: ["thoughts", "brain", "thinking", "mind"],
 correctIndex: 3
},
{
 question: "Charlie laughed and said he was doing the same now — it was ....... of a piece with burgling.",
 options: ["some", "same", "complete", "all"],
 correctIndex: 3
},
{
 question: "The law that has just been passed may be useful but we don't know until we've ....... it to the test.",
 options: ["placed", "struck", "started", "put"],
 correctIndex: 3
},
{
 question: "He was one of the most experienced of the company's test ....... who decided whether a plane was safe to fly.",
 options: ["drivers", "travellers", "operations", "pilots"],
 correctIndex: 3
},
{
 question: "In order to make sure that your television is tuned properly there is a coloured test ....... on the screen.",
 options: ["paper", "sheet", "place", "card"],
 correctIndex: 3
},
{
 question: "She's got the kind of job that seems to keep her occupied all the time — 24-........",
 options: ["4", "5", "6", "7"],
 correctIndex: 3
},
{
 question: "......., I couldn't agree with you more.",
 options: ["Totally", "Clearly", "Finally", "Absolutely"],
 correctIndex: 3
},
{
 question: "You fill in those forms on a weekly ........",
 options: ["stand", "base", "size", "basis"],
 correctIndex: 3
},
{
 question: "We haven't made any progress this year and are in a sense going backwards and losing ........",
 options: ["terrain", "space", "land", "ground"],
 correctIndex: 3
},
{
 question: "The important key to success in this business is strong management because if you lose your ......., then you're in real trouble.",
 options: ["hold", "stay", "grab", "grip"],
 correctIndex: 3
},
{
 question: "I followed as much as I could of his arguments but then I gave up because I'd completely lost ....... of what he was saying.",
 options: ["pace", "route", "path", "track"],
 correctIndex: 3
},
{
 question: "Putting all your money in that enterprise is futile it's like playing a losing ........",
 options: ["part", "role", "section", "game"],
 correctIndex: 3
},
{
 question: "There's no hope for him now because he's lost his ....... and has gone completely crazy.",
 options: ["glasses", "stones", "jewels", "marbles"],
 correctIndex: 3
},
{
 question: "Do you mind repeating that last bit again as I seem to have lost the ....... of your argument?",
 options: ["length", "string", "cord", "thread"],
 correctIndex: 3
},
{
 question: "After a while I got fed up with the film and began to lose ....... in the story.",
 options: ["thought", "following", "thinking", "interest"],
 correctIndex: 3
},
{
 question: "Can I ....... it to you that the delay you have caused is not reasonable?",
 options: ["place", "send", "hold", "put"],
 correctIndex: 3
},
{
 question: "How much is the new car ....... to cost me?",
 options: ["trying", "doing", "finding", "going"],
 correctIndex: 3
},
{
 question: "Why do you always ....... me when I try to ask a question?",
 options: ["interpose", "intercede", "interfere", "interrupt"],
 correctIndex: 3
},
{
 question: "I say, you've just ....... on my foot!",
 options: ["stuck", "stode", "struck", "trodden"],
 correctIndex: 3
},
{
 question: "Just a minute, you have just ....... my case.",
 options: ["burst", "bundled", "braced", "broken"],
 correctIndex: 3
},
{
 question: "I must get to know the name of your ....... so that I can buy a suit like that.",
 options: ["maker's", "dresser's", "warder's", "tailor's"],
 correctIndex: 3
},
{
 question: "One can tell immediately that you are a ....... by the accomplished way you perform.",
 options: ["amateur", "worker", "tyro", "professional"],
 correctIndex: 3
},
{
 question: "It's always a ....... talking to you — you know so much!",
 options: ["please", "pleased", "pleasing", "pleasure"],
 correctIndex: 3
},
{
 question: "My main ....... for becoming a temporary postman during the Christmas holiday period.",
 options: ["cause", "incident", "rational", "reason"],
 correctIndex: 3
},
{
 question: "It was all a question of ......., he said and then he explained",
 options: ["ruling", "straightening", "tidying", "order"],
 correctIndex: 3
},
{
 question: "the moment I got into the ....... office.",
 options: ["selecting", "dividing", "choosing", "sorting"],
 correctIndex: 3
},
{
 question: "Immediately you arrived you had to start sorting the mail into different pigeon ........",
 options: ["parts", "gaps", "slots", "holes"],
 correctIndex: 3
},
{
 question: "He was always criticising teachers for not teaching children to write ........",
 options: ["personally", "privately", "proper", "properly"],
 correctIndex: 3
},
{
 question: "As he had been very busy in his house since two that morning ....... of a burst water pipe, he went to have a rest.",
 options: ["through", "for", "on", "because"],
 correctIndex: 3
},
{
 question: "After about two hours of this my internal battery started to get low and I found myself losing ........",
 options: ["patients", "patents", "patters", "patience"],
 correctIndex: 3
},
{
 question: "It was at this stage that Ted came in quickly ....... me to finish and get on the road.",
 options: ["demanding", "taking", "giving", "encouraging"],
 correctIndex: 3
},
{
 question: "Once out in the open air I experienced a violent ....... but soon the sun came out.",
 options: ["wet", "raining", "rains", "shower"],
 correctIndex: 3
},
{
 question: "The only way to ....... with this one, Ted recommended, was to rush at the door, shove the letters through the door and go away as quickly as possible.",
 options: ["tackle", "manage", "handle", "deal"],
 correctIndex: 3
},
{
 question: "I didn't have the courage to make another assault on the house. Instead I took it home to ....... it out.",
 options: ["make", "do", "try", "dry"],
 correctIndex: 3
},
{
 question: "I rubbed the package with a towel and went quickly again to number 56 hurrying down the path in the true ....... of the season,",
 options: ["sense", "ghost", "taste", "spirit"],
 correctIndex: 3
},
{
 question: "Master Richard! When will that woman realise I'm over fifty and can't ....... knitted socks!",
 options: ["hate", "dislike", "sit", "stand"],
 correctIndex: 3
},
{
 question: "They're trying very hard to finish in time and they're working ....... the clock.",
 options: ["up", "through", "on", "against"],
 correctIndex: 3
},
{
 question: "You can always be sure that there'll be a delivery today as the service is as regular as clock........",
 options: ["time", "task", "job", "work"],
 correctIndex: 3
},
{
 question: "The competition is very strong as each team wants to be fastest and ....... the clock.",
 options: ["hit", "knock", "strike", "beat"],
 correctIndex: 3
},
{
 question: "How long do you think it will take ....... we'll be in a position to implement the changes to our distribution system?",
 options: ["upon", "about", "to", "before"],
 correctIndex: 3
},
{
 question: "In addition to an organisation's vision and ability to set goals it is also ....... that every team member feels part of a unit.",
 options: ["lively", "strict", "vivid", "vital"],
 correctIndex: 3
},
{
 question: "She used to hob nob (socialise) with people who ....... the same way as she did.",
 options: ["considered", "held", "approved", "thought"],
 correctIndex: 3
},
{
 question: "He had been in his hey day (at his most successful time) an important ....... in a government department for agriculture.",
 options: ["character", "puppet", "personage", "figure"],
 correctIndex: 3
},
{
 question: "But as far ....... Cathy was concerned, he was the bee's knees (someone to admire) and when she left school, she went to work as his assistant in the Society for the Protection of Animals.",
 options: ["so", "more", "than", "as"],
 correctIndex: 3
},
{
 question: "What her mother and father ....... to most was the endless tittle tattle (gossip) in the village about a young woman working for this hot shot (well known entrepreneur),",
 options: ["subjected", "dejected", "rejected", "objected"],
 correctIndex: 3
},
{
 question: "The rest of the organisation thought that she and Winton were a dream team (ideal partners) because she was enthusiastic and he was very ........",
 options: ["expertise", "empirical", "expert", "experienced"],
 correctIndex: 3
},
{
 question: "and announced what she thought was a cheerful earful (a good piece of news) and that was she had been invited to attend a ....... in the capital.",
 options: ["demarcation", "denuciation", "depression", "demonstration"],
 correctIndex: 3
},
{
 question: "But as soon as she reached the meeting point for the rally, there was no time for day ........",
 options: ["thinking", "musing", "sleeping", "dreaming"],
 correctIndex: 3
},
{
 question: "She felt ....... and was pleased she had come to the demonstration.",
 options: ["returned", "restored", "refreshed", "reassured"],
 correctIndex: 3
},
{
 question: "As it drew near she found she was asking herself ....... whether she had done the right thing. She looked at the horse and it was actually nodding its head and she could have sworn it said okie dokie (all right).",
 options: ["allowed", "loudly", "loud", "aloud"],
 correctIndex: 3
},
{
 question: "Andrew Smodley is a natural worrier. It is something he has ....... from his father — the king of all worriers.",
 options: ["received", "left", "earned", "inherited"],
 correctIndex: 3
},
{
 question: "It was in the spring when leaves appear on trees and nature prepares herself for renewal. Other things happen too — people ....... in love.",
 options: ["tumble", "drop", "decline", "fall"],
 correctIndex: 3
},
{
 question: "I apologise for the simplicity of these ....... but I want to illustrate the unimaginative nature which Andrew possesses.",
 options: ["declamations", "requirements", "mentions", "statements"],
 correctIndex: 3
},
{
 question: "Now Sally is an entirely different kettle of fish. Her philosophy runs as follows: 'Worrying never gets you anywhere and life is too short to ....... time imagining the worst.;",
 options: ["pass", "spend", "expend", "waste"],
 correctIndex: 3
},
{
 question: "If you take the first left after the post office, you come to Sally's place and if you take the second ....... to the right after that you come to the cottage where Andrew lives.",
 options: ["turn", "turn up", "turn in", "turning"],
 correctIndex: 3
},
{
 question: "Naturally he had his umbrella with him and a heavy coat ....... that aphorism his mother always used: 'Never cast a clout (remove an article of clothing) before May is out.'",
 options: ["pursuing", "chasing", "running after", "following"],
 correctIndex: 3
},
{
 question: "The moment he crossed the doorstep, an old school friend comes up to Andrew, ....... to buy him a drink and tells him not to look so worried.",
 options: ["begs", "requests", "asks", "offers"],
 correctIndex: 3
},
{
 question: "The ....... is palpable. Then suddenly the door bursts open and in walks our heroine, Sally looking like a drowned rat.",
 options: ["boom", "bloom", "room", "gloom"],
 correctIndex: 3
},
{
 question: "And he mixes her a ....... drink to protect her from a possible cold.",
 options: ["unusual", "speciality", "specialised", "special"],
 correctIndex: 3
},
{
 question: "Don't forget to take those two tablets I ....... and let me know how you are.",
 options: ["digested", "congested", "ingested", "suggested"],
 correctIndex: 3
},
{
 question: "It was a different sort of worry that was ....... a concern. He wants to see her again.",
 options: ["exactly", "fairly", "usually", "almost"],
 correctIndex: 3
},
{
 question: "Andrew doesn't ....... any more now.",
 options: ["concern", "disturb", "regret", "worry"],
 correctIndex: 3
},
{
 question: "They thought I would go to ........",
 options: ["parts", "sections", "particles", "pieces"],
 correctIndex: 3
},
{
 question: "This time tomorrow you ....... sitting in a deck chair on the beach.",
 options: ["are", "were", "will", "will be"],
 correctIndex: 3
},
{
 question: "Tomorrow we ....... taking the day off.",
 options: ["will", "have", "were", "are"],
 correctIndex: 3
},
{
 question: "I must admit you ....... tried but I'm afraid the answer is still no.",
 options: ["did", "will", "do", "have"],
 correctIndex: 3
},
{
 question: "She's ....... working there since she left school.",
 options: ["had", "done", "have", "been"],
 correctIndex: 3
},
{
 question: "He asked me what I ....... doing there.",
 options: ["am", "did", "will be", "was"],
 correctIndex: 3
},
{
 question: "If you were stopped by the police for speeding, what ....... you do?",
 options: ["will", "shall", "do", "would"],
 correctIndex: 3
},
{
 question: "If I get there early enough, I ....... you a seat.",
 options: ["did save", "do save", "am saving", "shall save"],
 correctIndex: 3
},
{
 question: "I had instructions that I ....... to leave the door unlocked when I came home.",
 options: ["will being", "were", "am", "was"],
 correctIndex: 3
},
{
 question: "He ....... silly things like this. Take no notice now.",
 options: ["always did", "will always do", "had always done", "is always doing"],
 correctIndex: 3
},
{
 question: "It doesn't make sense. I can't understand why he ....... at you last night.",
 options: ["had shouted", "is shouting", "has should", "shouted"],
 correctIndex: 3
},
{
 question: "As we've got plenty of time to ....... before the train comes, let's have a coffee.",
 options: ["waste", "lose", "spend", "kill"],
 correctIndex: 3
},
{
 question: "He's the sort of person who never worries about anything and has a happy ....... disposition.",
 options: ["over-heels", "tempered", "disposed", "go-lucky"],
 correctIndex: 3
},
{
 question: "He didn't reveal his name with his first book and published it under a ........",
 options: ["synonym", "homonym", "acronym", "pseudonym"],
 correctIndex: 3
},
{
 question: "He spoke the language in a regional ......., which made it impossible for me to understand him.",
 options: ["voice", "accent", "jargon", "dialect"],
 correctIndex: 3
},
{
 question: "Teacher: I don't see that as a ........",
 options: ["situation", "puzzle", "answer", "problem"],
 correctIndex: 3
},
{
 question: "Teacher: I understand what you ........",
 options: ["intend", "signify", "show", "mean"],
 correctIndex: 3
},
{
 question: "Student: That ....... very good to me. I'll see you next week.",
 options: ["strikes", "hits", "falls", "sounds"],
 correctIndex: 3
},
{
 question: "Teacher: Very good. Which do you find the ....... difficult?",
 options: ["worst", "best", "less", "most"],
 correctIndex: 3
},
{
 question: "Teacher: Ah you see whereas in means you are there inside ....... into means you enter as: You go into the room.",
 options: ["how", "when", "ever", "however"],
 correctIndex: 3
},
{
 question: "Teacher: Good question. T and one O is the preposition and T and double O often means extra as in: This exercise is too difficult. And don't forget the third word also sounding the same — the ....... two.",
 options: ["finger", "figurine", "thumb", "number"],
 correctIndex: 3
},
{
 question: "Teacher: Can you explain to me when you ....... the Past Simple and when the Present Perfect?",
 options: ["employ", "utilise", "exercise", "use"],
 correctIndex: 3
},
{
 question: "Student: I think it is I stayed in Paris in 1999. Is that all .......?",
 options: ["correct", "accurate", "fine", "right"],
 correctIndex: 3
},
{
 question: "Student: Yes, I see I think I understand but you have ....... many tenses in English!",
 options: ["to", "in", "also", "too"],
 correctIndex: 3
},
{
 question: "The trouble with you is you let your boss do exactly what he wants and let him walk all ....... you.",
 options: ["across", "under", "by", "over"],
 correctIndex: 3
},
{
 question: "I'm sorry to say that the safe has been broken into and someone's walked ....... with all the money.",
 options: ["along", "into", "of", "off"],
 correctIndex: 3
},
{
 question: "They have an expression in Australia when a famous person mixes with the crowd, they say they're going on a walk........",
 options: ["across", "along", "out", "about"],
 correctIndex: 3
},
{
 question: "He'd learnt to think he was important from an early age ....... his mother's knee.",
 options: ["from", "to", "over", "at"],
 correctIndex: 3
},
{
 question: "They met at a mutual friend's party where everyone was having a great time in a kind of knees ........",
 options: ["under", "on", "in", "up"],
 correctIndex: 3
},
{
 question: "What poor Charlie didn't know before was that Maria loved telling others what to do and so he had to do as he was told and ....... the knee.",
 options: ["stretch", "pull", "lower", "bend"],
 correctIndex: 3
},
{
 question: "They've tried to keep the truth from you but nothing's changed as all they've done is paper ....... the cracks.",
 options: ["across", "in", "up", "over"],
 correctIndex: 3
},
{
 question: "The reason why I knew all about the story in the village is because it was on the front page of the ....... paper.",
 options: ["near", "nearby", "neighbouring", "local"],
 correctIndex: 3
},
{
 question: "She makes a loaf of bread last a very long time because she cuts each slice paper ........",
 options: ["slight", "long", "tight", "thin"],
 correctIndex: 3
},
{
 question: "Sorry, I ....... mean to be rude.",
 options: ["haven't", "can't", "won't", "don't"],
 correctIndex: 3
},
{
 question: "No, I promise you. You ....... offend me at all.",
 options: ["shouldn't", "wouldn't", "hadn't", "didn't"],
 correctIndex: 3
},
{
 question: "I ....... possibly we could go out together, tonight.",
 options: ["think", "have thought", "did think", "thought"],
 correctIndex: 3
},
{
 question: "Mike: That's what you always ........",
 options: ["said", "are saying", "had said", "say"],
 correctIndex: 3
},
{
 question: "Sarah: No, you ........",
 options: ["didn't", "haven't", "couldn't", "won't"],
 correctIndex: 3
},
{
 question: "If I ....... you, I wouldn't risk it.",
 options: ["had been", "am", "would be", "were"],
 correctIndex: 3
},
{
 question: "If he decides to accept that job, he ....... it for the rest of his life.",
 options: ["has regretted", "had regretted", "is regretting", "will regret"],
 correctIndex: 3
},
{
 question: "If she goes on passing her exams, ....... soon be qualified to practise as a lawyer.",
 options: ["she's", "she had", "she has", "she'll"],
 correctIndex: 3
},
{
 question: "Cold medicines usually make me feel ....... I feel like I don't have energy to do anything.",
 options: ["asleep", "hyper", "awake", "drowsy"],
 correctIndex: 3
},
{
 question: "My daughter is having a ....... party tonight at our house.",
 options: ["night", "sleepy", "snooze", "slumber"],
 correctIndex: 3
},
{
 question: "I want to try and carry out an ........",
 options: ["experience", "endeavour", "endurance", "experiment"],
 correctIndex: 3
},
{
 question: "between, for ......., the Present and Present Perfect.",
 options: ["case", "sample", "instant", "example"],
 correctIndex: 3
},
{
 question: "when I should be thinking about the ........",
 options: ["initial", "genesis", "first", "beginning"],
 correctIndex: 3
},
{
 question: "The ....... thing to remember is",
 options: ["superior", "premier", "premium", "first"],
 correctIndex: 3
},
{
 question: "In this way we describe what is ....... now.",
 options: ["going", "elapsing", "taking", "happening"],
 correctIndex: 3
},
{
 question: "First impressions are important because how you ....... initially can be as important as what you say.",
 options: ["come by", "come back", "come out", "come across"],
 correctIndex: 3
},
{
 question: "My boyfriend wants to ....... when nobody is at home, and I'm scared it might well lead to something else!",
 options: ["come along", "come back", "come out", "come over"],
 correctIndex: 3
},
{
 question: "Students were instructed to use the Internet to ....... some information about Australia for the class project.",
 options: ["to look after", "to look over", "to look into", "to look up"],
 correctIndex: 3
},
{
 question: "My family finally made the painful decision of admitting my grandmother to a nursing home as she is no longer capable of ....... herself.",
 options: ["looking into", "looking out", "looking at", "looking after"],
 correctIndex: 3
},
{
 question: "I'll cook supper ....... I come home.",
 options: ["until", "while", "before", "as soon as"],
 correctIndex: 3
},
{
 question: "She won't speak to her boyfriend ....... he apologizes.",
 options: ["while", "as long as", "when", "until"],
 correctIndex: 3
},
{
 question: "Drink your coffee ....... it gets cold.",
 options: ["when", "as soon as", "while", "before"],
 correctIndex: 3
},
{
 question: "Don't cross the road ....... you see the green man.",
 options: ["as long as", "as soon as", "while", "until"],
 correctIndex: 3
},
{
 question: "I want to ....... the dinner tonight so that you don't have to worry about feeding your kids.",
 options: ["bring to", "bring on", "bring out", "bring over"],
 correctIndex: 3
},
{
 question: "The Central Coast of New South Wales has been described as a great place to ....... children.",
 options: ["bring out", "bring off", "bring to", "bring up"],
 correctIndex: 3
},
{
 question: "The Super Bowl champion Steelers have decided to ....... fullback Verron Haynes for at least another two seasons.",
 options: ["bring out", "bring forward", "bring up", "bring back"],
 correctIndex: 3
},
{
 question: "After their argument, John didn't know if Rick was a friend or ........",
 options: ["blood", "rival", "fiend", "foe"],
 correctIndex: 3
},
{
 question: "He is head over ....... about his new girlfriend.",
 options: ["heart", "body", "backwards", "heels"],
 correctIndex: 3
},
{
 question: "Nicole's promotion and added workload kept her as busy as a ........",
 options: ["fox", "bird", "horse", "bee"],
 correctIndex: 3
},
{
 question: "Before Tom headed into the forest, he made sure he had packed his bow and ........",
 options: ["shotgun", "back pack", "canteen", "arrows"],
 correctIndex: 3
},
{
 question: "She left the room without saying ........",
 options: ["nothing", "something", "everything", "anything"],
 correctIndex: 3
},
{
 question: "What would you like to eat for lunch? ........ I don't mind.",
 options: ["Nothing", "Something", "Everything", "Anything"],
 correctIndex: 3
},
{
 question: "Nasa is currently in the process of trying to work out how to avoid any more of its spaceships from ....... on re- entry to Earth.",
 options: ["breaking off", "breaking away", "breaking out", "breaking up"],
 correctIndex: 3
},
{
 question: "It can be very difficult for youg couples to ....... a marriage when there are young children involved.",
 options: ["break off", "break away", "break out", "break up"],
 correctIndex: 3
},
{
 question: "I am always very worried that my car will ....... because it is already twenty years old.",
 options: ["break off", "break away", "break out", "break down"],
 correctIndex: 3
},
{
 question: "I saw a very good ....... advertised in the newspaper this week.",
 options: ["employment", "occupation", "work", "job"],
 correctIndex: 3
},
{
 question: "The ....... apartment block failed to attact any buyers and was taken off the market so renovations could be carried out.",
 options: ["run off", "run through", "run after", "run down"],
 correctIndex: 3
},
{
 question: "The Australian minister for ....... has come under alot of scrutiny lately for her department's decision to issue refugee status to boat people from Papua.",
 options: ["immigrant", "emigrant", "colonization", "immigration"],
 correctIndex: 3
},
{
 question: "Australia is a ....... country and therefore has the right to choose whether or not tourists are granted with visas.",
 options: ["independent", "governing", "autonomous", "sovereign"],
 correctIndex: 3
},
{
 question: "People with a known history oftuberculosis will automatically be ....... from entering Australia.",
 options: ["refused", "rejected", "discarded", "disqualified"],
 correctIndex: 3
},
{
 question: "My wife is always ....... when she gets her period and becomes angry at me for no reason at all.",
 options: ["jealous", "talkative", "content", "bad-tempered"],
 correctIndex: 3
},
{
 question: "Glenn is so ........ He always helps out the underprivileged people in our community.",
 options: ["creative", "reticent", "sociable", "generous"],
 correctIndex: 3
},
{
 question: "Teenage girls smoke almost ....... boys in many of the villages in West Java.",
 options: ["as good as", "as long as", "as soon as", "as much as"],
 correctIndex: 3
},
{
 question: "I bet you don't love me ....... I love you. That would be impossible!",
 options: ["as good as", "as long as", "as soon as", "as much as"],
 correctIndex: 3
},
{
 question: "Many British housewives cannot understand why many British men love watching football twice ....... their women.",
 options: ["as good as", "as soon as", "as long as", "as much as"],
 correctIndex: 3
},
{
 question: "When we were in Bali last year we ....... at a marvelous hotel overlooking the beach.",
 options: ["stopped", "lived", "rented", "stayed"],
 correctIndex: 3
},
{
 question: "Good afternoon. I ....... see the manager, please.",
 options: ["will", "wish", "like to", "want to"],
 correctIndex: 3
},
{
 question: "I thought Nancy said she ....... spend the weekend with her parents.",
 options: ["should", "will", "is", "was going to"],
 correctIndex: 3
},
{
 question: "I got married ....... years ago.",
 options: ["for two", "in two", "at two", "two"],
 correctIndex: 3
},
{
 question: "In the ....... of World War I the political, cultural, and social order of the world was drastically changed in many places, even outside the areas directly involved in the war.",
 options: ["afterwards", "afterbirth", "afternoon", "aftermath"],
 correctIndex: 3
},
{
 question: "The ....... is delivered during the third stage of labour.",
 options: ["afterthought", "afterlife", "aftertaste", "afterbirth"],
 correctIndex: 3
},
{
 question: "Contrary to popular opinion, Judaism does believe in an ......., but it is not the primary focus of the religion.",
 options: ["afterthought", "afternoon", "aftertaste", "afterlife"],
 correctIndex: 3
},
{
 question: "The Emergency Response and Transitional Recovery Programme commenced activities in January 2005 in the immediate ....... of the Tsunami disaster of 26 December 2004.",
 options: ["afterthought", "aftertaste", "afternoon", "aftermath"],
 correctIndex: 3
},
{
 question: "Many parents assume that their children will ....... in school if they spend too much time playing video games.",
 options: ["drop off", "drop out", "drop over", "drop behind"],
 correctIndex: 3
},
{
 question: "It is not necessary to attend every class in order to participate, so please ....... and join the fun!",
 options: ["drop off", "drop in on", "drop behind", "drop in"],
 correctIndex: 3
},
{
 question: "Visitors attending the annual Open House have the option of either participating in information sessions for their entire duration or ....... portions of the seminars based on their schedule and interest.",
 options: ["dropping out", "dropping in", "dropping behind", "dropping in on"],
 correctIndex: 3
},
{
 question: "Senior Constable Smith asked the suspect to ....... the police station at lunch time in order to answer some questions regarding his alleged involvement in a bank robbery.",
 options: ["drop over", "drop off", "drop out", "drop by"],
 correctIndex: 3
},
{
 question: "Entrepreneurs have several options when it comes to ....... a family business to their children.",
 options: ["passing over", "passing out", "passing by", "passing on"],
 correctIndex: 3
},
{
 question: "Once you ....... Prospect Street, we will be on the right hand side of the block, directly across the street from the museum.",
 options: ["pass up", "pass out", "pass away", "pass over"],
 correctIndex: 3
},
{
 question: "Passengers are required to produce appropriate ....... at the check-in counter.",
 options: ["passport", "visa", "ticket", "identification"],
 correctIndex: 3
},
{
 question: "It is the passenger's responsibility to ....... all outgoing flights at least 72 hours prior to departure.",
 options: ["rebook", "reorder", "reserve", "reconfirm"],
 correctIndex: 3
},
{
 question: "Pictures stored on the ....... can be printed in the same way as photos taken with a film camera.",
 options: ["memory", "zoom", "flash", "memory card"],
 correctIndex: 3
},
{
 question: "When the ....... is on, pictures are taken ten seconds after the shutter-release button is pressed.",
 options: ["tripod", "view finder", "power switch", "self-timer"],
 correctIndex: 3
},
{
 question: "My great grandfather's body was lost at sea in a horrific boat accident yesterday. A ....... will be held for him at the Presbyterian church next Thursday.",
 options: ["funeral", "burial", "cremation", "memorial service"],
 correctIndex: 3
},
{
 question: "Recently ....... phone numbers, answered calls and missed calls are stored in the call log.",
 options: ["deleted", "added", "fixed", "dialed"],
 correctIndex: 3
},
{
 question: "The message centre number for your network ....... should be preprogrammed on your SIM card.",
 options: ["contributor", "supplier", "contractor", "provider"],
 correctIndex: 3
},
{
 question: "Some hand phones are designed to be ....... with certain multimedia messaging services.",
 options: ["communicable", "comfortable", "comparable", "compatible"],
 correctIndex: 3
},
{
 question: "Children should never be allowed to play in driveways because one never knows when someone may ........",
 options: ["pull over", "pull off", "pull through", "pull in"],
 correctIndex: 3
},
{
 question: "The M4 dissects the Downs and the rest of the county from east to west. The noise affects a wide area either side of the motorway and can ....... real estate prices.",
 options: ["pull over", "pull out", "pull through", "pull down"],
 correctIndex: 3
},
{
 question: "Cyclists should always remember that motorists will frequently cross the bike lane to park and ....... and out of driveways.",
 options: ["pull over", "pull out", "pull through", "pull in"],
 correctIndex: 3
},
{
 question: "One of the most memorable images of the war was created when U.S. troops ....... the statue of Saddam Hussein in Fardus Square.",
 options: ["pulled over", "pulled out", "pulled through", "pulled down"],
 correctIndex: 3
},
{
 question: "My accountant advised me that one of the best ways to ....... paying taxes in my own country was to set up an offshore bank account.",
 options: ["get away with", "get by with", "get down to", "get around"],
 correctIndex: 3
},
{
 question: "Please mind your step when you ....... the train.",
 options: ["get on with", "get by with", "get by", "get on"],
 correctIndex: 3
},
{
 question: "The families of the seven astronauts lost aboard the space shuttle Columbia told NASA last Monday that space exploration must ........",
 options: ["go out", "go over", "go off", "go on"],
 correctIndex: 3
},
{
 question: "The French probably ....... tennis in about 1150.",
 options: ["developed", "originated", "competed", "invented"],
 correctIndex: 3
},
{
 question: "Mary E. Outerbridge ....... the first tennis court in New York City in 1874.",
 options: ["originated", "competed", "dominated", "established"],
 correctIndex: 3
},
{
 question: "Eileen and Miranda have been best friends ....... third grade.",
 options: ["after", "during", "from", "since"],
 correctIndex: 3
},
{
 question: "During my study time, I came ....... this beautiful poem.",
 options: ["past", "over", "onto", "upon"],
 correctIndex: 3
},
{
 question: "May I buy five of ....... pictures hanging over there, please?",
 options: ["this", "that", "these", "those"],
 correctIndex: 3
},
{
 question: "Please read the book ....... it's still available from the library.",
 options: ["before", "although", "since", "while"],
 correctIndex: 3
},
{
 question: "Everybody had dessert ....... they finished eating the main course.",
 options: ["while", "because", "until", "after"],
 correctIndex: 3
},
{
 question: "Divers use external air supplies to enable ....... to breathe under water.",
 options: ["ourselves", "yourselves", "himself", "themselves"],
 correctIndex: 3
},
{
 question: "According to the Small Business Association (SBA), 'Inadequate or ....... financing is a major reason for small- business failure.'",
 options: ["ill mannered", "ill at ease", "ill advised", "ill timed"],
 correctIndex: 3
},
{
 question: "David Beckham's ....... Sir Alex Ferguson originated from his decision to stay at home and tend his ailing son rather than attend training on that particular Friday.",
 options: ["fall-through", "fall behind in", "fallback on", "fallout with"],
 correctIndex: 3
},
{
 question: "The northeastern state of Assam could ....... the Indian map soon.",
 options: ["fall behind", "fall behind in", "fall back on", "fall off"],
 correctIndex: 3
},
{
 question: "Some married couples ....... each other over differences of opinion on how things could or should be done.",
 options: ["fall through", "fall behind in", "fall back on", "fall out with"],
 correctIndex: 3
},
{
 question: "Deciduous trees send messages to leaves telling them when to ........",
 options: ["fall through", "fall behind", "fall back on", "fall off"],
 correctIndex: 3
},
{
 question: "Homeowners ....... a kitchen fire last Sunday night, only to soon notice the fire was spreading inside the walls of their home.",
 options: ["put off", "put in", "put on", "put out"],
 correctIndex: 3
},
{
 question: "Go to bed immediately! Mary's mother ....... her to go to bed immediately.",
 options: ["advised", "begged", "asked", "ordered"],
 correctIndex: 3
},
{
 question: "Please, please, turn down the radio! Mark's sister ....... him to turn the radio down.",
 options: ["reminded", "ordered", "asked", "begged"],
 correctIndex: 3
},
{
 question: "A ....... represents written documentation of the vital issues necessary to convince investors that a particular opportunity is worthy of investment.",
 options: ["business class", "business card", "business park", "business plan"],
 correctIndex: 3
},
{
 question: "Our ....... attitude is reserved entirely for the way we behave at work.",
 options: ["business wise", "business card", "businesswoman", "businesslike"],
 correctIndex: 3
},
{
 question: "In a 2003 survey conducted by the United Nations, Australia came in fourth among the best ....... in the world to live based on based on income, education and life expectancy.",
 options: ["regions", "provinces", "territories", "countries"],
 correctIndex: 3
},
{
 question: "Perth is the most westerntown of Australia and holds the ....... of having more sun filled hours than most of Australia's other capital cities.",
 options: ["peculiarity", "admiration", "notoriety", "distinction"],
 correctIndex: 3
},
{
 question: "Perth offers an eclectic ....... within the breathtaking backdrop of grassy parks, towering palm trees and endless waterways.",
 options: ["daily life", "life", "everyday life", "lifestyle"],
 correctIndex: 3
},
{
 question: "Pizza ....... to America with the Italians at the end of the nineteenth century.",
 options: ["roamed", "wandered", "drifted", "migrated"],
 correctIndex: 3
},
{
 question: "Most people like the ....... of not having to work.",
 options: ["scheme", "suggestion", "design", "idea"],
 correctIndex: 3
},
{
 question: "People who win the lottery are usually advised not to ....... their address and phone number.",
 options: ["douse", "screen", "transmit", "publicize"],
 correctIndex: 3
},
{
 question: "All over the world, lotteries ....... new millionaires every week.",
 options: ["construct", "craft", "build", "create"],
 correctIndex: 3
},
{
 question: "A 45 year old cook from Sydney ....... three weeks after winning 10 million dollars in the lottery.",
 options: ["dropped away", "dropped out", "dropped off", "dropped dead"],
 correctIndex: 3
},
{
 question: "Picasso hated school and often ....... to go unless he could take his pet with him.",
 options: ["rebuked", "rebuffed", "rejected", "refused"],
 correctIndex: 3
},
{
 question: "Picasso ....... over 6,000 paintings, drawings and sculptures.",
 options: ["painted", "formed", "shaped", "created"],
 correctIndex: 3
},
{
 question: "This pet store sells rare tropical fish and other ....... creatures.",
 options: ["chaotic", "erotic", "robotic", "exotic"],
 correctIndex: 3
},
{
 question: "Peter was the best swimmer, but ....... he lost the final of the swimming competition.",
 options: ["vaguely", "surly", "inevitably", "ironically"],
 correctIndex: 3
},
{
 question: "Our final idea for the product was much better than our ....... one.",
 options: ["illuminated", "intellectual", "intense", "initial"],
 correctIndex: 3
},
{
 question: "Nighttime ....... not only disrupts your sleep, but it may lead to other health risks such as raising your risk of cancer or aggravating asthma.",
 options: ["heartbeat", "heartland", "heartfelt", "heartburn"],
 correctIndex: 3
},
{
 question: "Allow me to express my ....... sorrow at the immense tragedy that has been perpetrated upon the American people by the wicked evildoers who were responsible for the September 11th terrorist attacks.",
 options: ["heartache", "heartburn", "heartthrob", "heartfelt"],
 correctIndex: 3
},
{
 question: "The UK has one of the highest rates of death from ....... in the world.",
 options: ["heartbreak", "heartbeat", "heartthrob", "heart disease"],
 correctIndex: 3
},
{
 question: "President Bush thanked his hosts for a warm welcome ....... addressing the 25th annual conference.",
 options: ["just about", "just over", "just then", "just before"],
 correctIndex: 3
},
{
 question: "The bill that Congress has produced is monstrous in ....... every way.",
 options: ["just then", "just as", "just over", "just about"],
 correctIndex: 3
},
{
 question: "Fog machines can be ....... to get you into the partying mood.",
 options: ["just then", "just over", "just above", "just the thing"],
 correctIndex: 3
},
{
 question: "Many small businesses just starting choose to accept cold ....... as their only method of payment.",
 options: ["hard court", "hard core", "hard sell", "hard cash"],
 correctIndex: 3
},
{
 question: "Employees at the garment factory were forced to work twelve hour shifts as they were ....... for time to complete the order.",
 options: ["hard bitten", "hard headed", "hard hearted", "hard pressed"],
 correctIndex: 3
},
{
 question: "I just don't follow a single word — I'm afraid it's all ........",
 options: ["Spanish to me", "German to me", "Welsh to me", "Greek to me"],
 correctIndex: 3
},
{
 question: "As far as I'm concerned they can all go ........",
 options: ["jump in the oven", "jump in the bin", "jump in the field", "jump in the lake"],
 correctIndex: 3
},
{
 question: "I don't know about you but I'm so hungry ........",
 options: ["I could eat a mountain", "I could eat the table", "I could eat a cow", "I could eat a horse"],
 correctIndex: 3
},
{
 question: "I have tried, honestly but ........",
 options: ["I just can't get across to her", "I just can't get up to her", "I just can't get in between her", "I just can't get through to her"],
 correctIndex: 3
},
{
 question: "There's no rush for an answer so just ........",
 options: ["spend your time", "give your time", "waste your time", "take your time"],
 correctIndex: 3
},
{
 question: "Nobody's going to call me names and ........",
 options: ["get on with it", "get up with it", "get away from it", "get away with it"],
 correctIndex: 3
},
{
 question: "Nobody ever got in his way ........",
 options: ["he'd just stride all over them", "he'd just stroll all over them", "he'd just hop all over them", "he'd just walk all over them"],
 correctIndex: 3
},
{
 question: "Don't worry what other people think ........",
 options: ["just take no note of them", "just take no sign of them", "just take no hint of them", "just take no notice of them"],
 correctIndex: 3
},
{
 question: "We should have been there 2 hours ago, ........",
 options: ["so we're well back", "so we're well off", "so we're well backward", "so we're well behind"],
 correctIndex: 3
},
{
 question: "I'm being as quick as I can. Just don't ........",
 options: ["hug me", "tug me", "lug me", "bug me"],
 correctIndex: 3
},
{
 question: "Do you mind repeating that? I didn't quite ........",
 options: ["grab it the first time", "snatch it the first time", "seize it the first time", "grasp it the first time"],
 correctIndex: 3
},
{
 question: "Some people only read the ....... lines in a newspaper.",
 options: ["top", "big", "main", "head"],
 correctIndex: 3
},
{
 question: "The boss was good enough to ....... my mistake.",
 options: ["oversee", "overtake", "overdo", "overlook"],
 correctIndex: 3
},
{
 question: "Politicians pretend to ignore opinion ........",
 options: ["votes", "figures", "numbers", "polls"],
 correctIndex: 3
},
{
 question: "Play the tape back as many times as you like and ....... everything that the native speaker has said.",
 options: ["hold", "take", "hear", "repeat"],
 correctIndex: 3
},
{
 question: "What you have to do is to ....... a new idea that will enable us to make a lot of money.",
 options: ["think over", "think out", "think about", "think up"],
 correctIndex: 3
},
{
 question: "You can tell by the way she talks and behaves that she ....... her mother.",
 options: ["takes to", "takes in", "takes back", "takes after"],
 correctIndex: 3
},
{
 question: "There's no need to worry we shall get to the station long before the train leaves as we have ....... of time.",
 options: ["sacks", "packets", "parcels", "bags"],
 correctIndex: 3
},
{
 question: "We're not living here for good but just for the time ........",
 options: ["seeing", "trying", "going", "being"],
 correctIndex: 3
},
{
 question: "The railways system is very efficient as the trains always arrive ....... time.",
 options: ["up", "at", "for", "on"],
 correctIndex: 3
},
{
 question: "You can tell she has hit the ....... time because of the huge car she drives.",
 options: ["high", "massive", "large", "big"],
 correctIndex: 3
},
{
 question: "Before you start applying for any job, you must be absolutely sure you have the right paper ........",
 options: ["qualities", "qualifiers", "qualifying", "qualifications"],
 correctIndex: 3
},
{
 question: "I think you were asking too much of that new member of staff when you expected her to ....... with a cost- cutting scheme.",
 options: ["come over", "come through", "come by", "come up"],
 correctIndex: 3
},
{
 question: "We can offer you a salary that will be ....... with the duties and responsibilities that the job demands.",
 options: ["level", "equal", "connected", "commensurate"],
 correctIndex: 3
},
{
 question: "The doctor took out of her bag an unusual ....... but promised her young patient that it would not hurt her.",
 options: ["utensil", "method", "control", "instrument"],
 correctIndex: 3
},
{
 question: "The treatment has proved very successful but to check progress he has to arrange to visit the doctor's ........",
 options: ["usually", "always", "principally", "annually"],
 correctIndex: 3
},
{
 question: "Candidate: I think the main reason is because I like working in ........",
 options: ["the free air", "the clear air", "the pure air", "the open air"],
 correctIndex: 3
},
{
 question: "Candidate: I'm Mr Jensen. I'm afraid it's a case of ........",
 options: ["mistaken personality", "mistaken character", "mistaken person", "mistaken identity"],
 correctIndex: 3
},
{
 question: "'Super' to my mind suggests ......., which it does not possess.",
 options: ["outstanding", "wonderful", "excellent", "excellence"],
 correctIndex: 3
},
{
 question: "....... the grass was flat but it was still as long as when I had started.",
 options: ["Confessing", "Confessed", "Admitted", "Admittedly"],
 correctIndex: 3
},
{
 question: "My main news is that Mary has at long last ....... to marry me.",
 options: ["concerned", "convened", "concerted", "consented"],
 correctIndex: 3
},
{
 question: "Putting it ....... I should be delighted if you would agree to be my best man at our wedding.",
 options: ["easily", "quietly", "fairly", "simply"],
 correctIndex: 3
},
{
 question: "Perhaps I should explain the ....... reason for working in a restaurant as a waiter in preparation for a marketing job.",
 options: ["underground", "undercover", "understanding", "underlying"],
 correctIndex: 3
},
{
 question: "Dear all, just to let you know that we reached our ....... after a dramatic start.",
 options: ["goal", "aim", "end", "destination"],
 correctIndex: 3
},
{
 question: "Everything started to go wrong the moment we arrived at the airport because of the industrial ....... taken by the baggage handlers.",
 options: ["activity", "acts", "acting", "action"],
 correctIndex: 3
},
{
 question: "The big problem was that our luggage wasn't there — it had simply ........",
 options: ["disintegrated", "distorted", "dislodged", "disappeared"],
 correctIndex: 3
},
{
 question: "Apparently it is an ....... where the letters in the word are the first letters of a group of words.",
 options: ["abbreviation", "addition", "anomaly", "acronym"],
 correctIndex: 3
},
{
 question: "The fact remains that he ....... and managed with the help of oxygen supplies to complete the crossing in ten minutes.",
 options: ["lived", "continued", "achieved", "survived"],
 correctIndex: 3
},
{
 question: "You sit in the passenger seat and ....... your learner to do what you would normally do.",
 options: ["learn", "perform", "compose", "instruct"],
 correctIndex: 3
},
{
 question: "The secret of being a good driving teacher is never on any occasion to lose your temper or your ........",
 options: ["brain", "thought", "idea", "head"],
 correctIndex: 3
},
{
 question: "Invariably if interest rates go up, the building societies pay more to their savers and borrowers complain at the increase they have to pay and maintain the societies are ....... their affairs.",
 options: ["mistaking", "misplacing", "misfiring", "mishandling"],
 correctIndex: 3
},
{
 question: "This is all very disappointing for the ....... house buyer who doesn't really know what's going to happen next and how much the interest rate will be.",
 options: ["would-go", "would-try", "would-see", "would-be"],
 correctIndex: 3
},
{
 question: "People tended not to believe a word he said and maintained that his protestations of innocence were wearing a bit ........",
 options: ["scarce", "bare", "scant", "thin"],
 correctIndex: 3
},
{
 question: "By then of course it was too late because the damage had already been done to his career, which ....... everything else he did for the rest of his life.",
 options: ["overtook", "overcame", "overran", "overshadowed"],
 correctIndex: 3
},
{
 question: "The more the authorities try to conceal what is happening, the more it fuels ....... about what might be happening.",
 options: ["speculative", "spectacle", "speciality", "speculation"],
 correctIndex: 3
},
{
 question: "The question must always be in the mind of the writer whether what is being written is likely to ....... a threat to the safety of the community at large.",
 options: ["place", "put", "start", "pose"],
 correctIndex: 3
},
{
 question: "The scheme will be ....... into the school curriculum at the beginning of next academic year.",
 options: ["entered", "presented", "welcomed", "introduced"],
 correctIndex: 3
},
{
 question: "The Government ....... said the Prime Minister was sick and tired of papers disappearing from his office.",
 options: ["speaking person", "speak person", "spoken person", "spokesperson"],
 correctIndex: 3
},
{
 question: "I do take my hat ....... to the new director for having pulled the company back from bankruptcy.",
 options: ["by", "on", "to", "off"],
 correctIndex: 3
},
{
 question: "You simply can't trust that politician because he changes his mind every five minutes at the ....... of a hat.",
 options: ["fall", "tumble", "jump", "drop"],
 correctIndex: 3
},
{
 question: "In view of the special efforts our coach driver has made today, I think it would be nice to ....... round the hat for him.",
 options: ["offer", "give", "place", "hand"],
 correctIndex: 3
},
{
 question: "A ....... customer will always return to the same firm and buy again.",
 options: ["interested", "encouraged", "satisfactory", "satisfied"],
 correctIndex: 3
},
{
 question: "The success of our website is due to the fact that customers can ....... different prices for the same article.",
 options: ["continue", "conclude", "confer", "compare"],
 correctIndex: 3
},
{
 question: "Apparently when he was still at school, he didn't have a ticket for his train journey one day and he was ........",
 options: ["found", "founded", "funded", "fined"],
 correctIndex: 3
},
{
 question: "Headlines appeared maintaining that Mathew was a dishonest ....... thief.",
 options: ["laying", "liar", "lain", "lying"],
 correctIndex: 3
},
{
 question: "The reporter had got it ....... wrong because he found his ticket and he wasn't 'fined', he was simply 'fine'.",
 options: ["fully", "fairly", "complete", "completely"],
 correctIndex: 3
},
{
 question: "I shan't be working tomorrow because I've just been given the ........",
 options: ["bag", "case", "container", "sack"],
 correctIndex: 3
},
{
 question: "The firm has decided to ....... which means they don't want me.",
 options: ["resize", "upsize", "in size", "downsize"],
 correctIndex: 3
},
{
 question: "No, I didn't ask the boss for more money today because he gave me one month's ........",
 options: ["information", "news", "facts", "notice"],
 correctIndex: 3
},
{
 question: "As a child he had no problems learning foreign languages mainly because he was very quick on the ........",
 options: ["downturn", "upstart", "downfall", "uptake"],
 correctIndex: 3
},
{
 question: "Since he left the army, he misses the excitement and danger and still wants to live life in the fast ........",
 options: ["track", "path", "street", "lane"],
 correctIndex: 3
},
{
 question: "Now that the company has made its first million, there's no stopping it and it's full ....... ahead.",
 options: ["power", "vapour", "strength", "steam"],
 correctIndex: 3
},
{
 question: "Her boss thought she was wonderful and always ....... her to the skies.",
 options: ["complimented", "congratulated", "flattered", "praised"],
 correctIndex: 3
},
{
 question: "I think you're either mad or very brave to jump out of a plane and wait some time before opening your parachute in a sky........",
 options: ["drop", "fall", "crash", "dive"],
 correctIndex: 3
},
{
 question: "I can't see the point of trying to settle the dispute between those two institutions because you'll just be papering over the ........",
 options: ["fissures", "splits", "divisions", "cracks"],
 correctIndex: 3
},
{
 question: "Not that it has happened yet but the age of the computer was meant to introduce the idea of the paper....... office.",
 options: ["minus", "few", "least", "less"],
 correctIndex: 3
},
{
 question: "They came straight out with their complaint ....... no bones about it whatsoever.",
 options: ["saying", "trying", "doing", "making"],
 correctIndex: 3
},
{
 question: "We're expecting a visit from a French couple soon so I'll have to bone ....... on my French.",
 options: ["in", "to", "with", "up"],
 correctIndex: 3
},
{
 question: "Her children were very ungrateful for all she'd done for them as she had really worked her ....... to the bone for them.",
 options: ["elbows", "arms", "legs", "fingers"],
 correctIndex: 3
},
{
 question: "With a little ....... of luck I think she'll pass her driving test first time.",
 options: ["section", "particle", "parcel", "bit"],
 correctIndex: 3
},
{
 question: "You really couldn't blame anyone for the accident because it was just a case of ....... luck.",
 options: ["worse", "worst", "foul", "bad"],
 correctIndex: 3
},
{
 question: "She always seems to come out of any crisis unharmed and I'm convinced she was born under a lucky ........",
 options: ["planet", "asteroid", "moon", "star"],
 correctIndex: 3
},
{
 question: "After all his failures in the business world he decided to ....... his luck in the casino.",
 options: ["turn", "endeavour", "attempt", "try"],
 correctIndex: 3
},
{
 question: "This project has only just been started and is in its ....... stages at the moment.",
 options: ["first", "beginning", "starting", "early"],
 correctIndex: 3
},
{
 question: "I've seen her act in many films but never live ....... stage.",
 options: ["at", "in", "through", "on"],
 correctIndex: 3
},
{
 question: "From childhood she has been stage ....... and was delighted when she got her first major part in the play at the national theatre.",
 options: ["hit", "shocked", "slapped", "struck"],
 correctIndex: 3
},
{
 question: "After a lot of discussion we decided to hire a professional to ....... us.",
 options: ["enable", "empower", "devote", "assist"],
 correctIndex: 3
},
{
 question: "The next thing we needed to work out was the exact ....... of the area that we needed in order to present the event.",
 options: ["diversions", "directions", "diagonals", "dimensions"],
 correctIndex: 3
},
{
 question: "At this stage it was clear that they had to know the ....... number of people who were going to attend.",
 options: ["full", "defined", "determined", "exact"],
 correctIndex: 3
},
{
 question: "We thought it was a good idea to take some sandwiches with us so that we'd have something to eat for the ....... of the journey.",
 options: ["lasting", "period", "timing", "duration"],
 correctIndex: 3
},
{
 question: "As one of our party was over 60 she was ....... to a reduction in the price of the ticket.",
 options: ["allowed", "given", "granted", "entitled"],
 correctIndex: 3
},
{
 question: "All you can say is that the high price is somewhat ....... by being able to get to a large city quickly.",
 options: ["upset", "overturned", "highlighted", "offset"],
 correctIndex: 3
},
{
 question: "On the day we travelled most people had decided to stay at home as the train was ....... empty.",
 options: ["considerably", "related", "reliable", "relatively"],
 correctIndex: 3
},
{
 question: "They were so angry with me they practically bit my ....... off.",
 options: ["nose", "hand", "fingers", "head"],
 correctIndex: 3
},
{
 question: "In view of the way things have improved I now feel confident enough to have another bite at the ........",
 options: ["banana", "apple", "pear", "cherry"],
 correctIndex: 3
},
{
 question: "I can't believe that he's turning against his own parents — it's like biting the hand that ....... you.",
 options: ["brought", "nourished", "helped", "fed"],
 correctIndex: 3
},
{
 question: "I know she would really like to say exactly what she feels but I believe she should bite her ........",
 options: ["cheek", "nails", "ear", "tongue"],
 correctIndex: 3
},
{
 question: "The trouble with her is that she always exaggerates and ....... an issue out of everything.",
 options: ["pulls", "tries", "gets", "makes"],
 correctIndex: 3
},
{
 question: "The value of one of the early copies of that book can be considerable if it happens to be a ....... issue.",
 options: ["premier", "prime", "beginning", "first"],
 correctIndex: 3
},
{
 question: "All the reporters of the war were issued ....... bulletproof jackets to give them better protection.",
 options: ["on", "by", "at", "with"],
 correctIndex: 3
},
{
 question: "He always believed in giving his children the same opportunities in life so that each one would have a fair crack of the ........",
 options: ["strike", "blow", "hit", "whip"],
 correctIndex: 3
},
{
 question: "In view of the falling standards the company decided to appoint a very ....... office manager who would be able to crack the whip a bit.",
 options: ["stiff", "severe", "serious", "strict"],
 correctIndex: 3
},
{
 question: "They haven't really put matters right at all because they've simply papered ....... the cracks.",
 options: ["through", "along", "beside", "over"],
 correctIndex: 3
},
{
 question: "Of course if speed is the most important thing, you can always ....... up your lunch from the take away cafe.",
 options: ["hand", "hold", "keep", "pick"],
 correctIndex: 3
},
{
 question: "What you like in the way of lunch very much depends on your ....... taste.",
 options: ["separate", "strange", "distinguished", "individual"],
 correctIndex: 3
},
{
 question: "Personally I find that although the taste of your lunch is important, it should also look ....... on the plate.",
 options: ["content", "rested", "prettily", "elegant"],
 correctIndex: 3
},
{
 question: "Mind you if there is a very long menu for lunch, it can be a problem for the waiter to deal with a ....... order.",
 options: ["various", "multiply", "multifaceted", "multiple"],
 correctIndex: 3
},
{
 question: "We're not quite sure how it will work so today we're having a dry ....... to find out if there are any problems.",
 options: ["go", "try", "attempt", "run"],
 correctIndex: 3
},
{
 question: "We all set out together early in the morning in different cars but ours broke down and nobody bothered to look for us so we were left ....... and dry.",
 options: ["up", "top", "on", "high"],
 correctIndex: 3
},
{
 question: "She's very subtle in the comments she makes and she has a wonderfully dry ....... of humour.",
 options: ["feeling", "opinion", "meaning", "sense"],
 correctIndex: 3
},
{
 question: "If you want to keep your customers coming in on a regular basis you mustn't let your stocks ....... dry.",
 options: ["go", "turn", "take", "run"],
 correctIndex: 3
},
{
 question: "He said he'd read my funny story and had laughed twice, which was a sort of back ....... compliment.",
 options: ["slapped", "hit", "thrown", "handed"],
 correctIndex: 3
},
{
 question: "Where we live is a sort of back....... because nobody here knows what's going on in the world.",
 options: ["stream", "river", "pond", "water"],
 correctIndex: 3
},
{
 question: "I've lived here all my life and know every single road and street like the back of my ........",
 options: ["finger", "palm", "thumb", "hand"],
 correctIndex: 3
},
{
 question: "As we have all worked very hard this year, I'm hoping that our efforts will bear ........",
 options: ["produce", "benefits", "yields", "fruit"],
 correctIndex: 3
},
{
 question: "I hope you can be patient for a little longer and bear ....... me while I try and solve the problem.",
 options: ["by", "on", "at", "with"],
 correctIndex: 3
},
{
 question: "Quite honestly the two cases are so completely different that they really don't bear ........",
 options: ["confirmation", "contrast", "comprehension", "comparison"],
 correctIndex: 3
},
{
 question: "In a way it's probably just as well the deputy has become the new chief. It's a case of ....... the devil you know.",
 options: ["easier", "rather", "harder", "better"],
 correctIndex: 3
},
{
 question: "We don't really get on with the new boss but he has some good ideas so we must give the devil his ........",
 options: ["owing", "right", "share", "due"],
 correctIndex: 3
},
{
 question: "....... of the devil. We were just talking about you before you came in the room.",
 options: ["Quote", "Announce", "Utter", "Speak"],
 correctIndex: 3
},
{
 question: "It wouldn't take much for me to cancel that trip in fact for two ....... I think I will.",
 options: ["needles", "nails", "points", "pins"],
 correctIndex: 3
},
{
 question: "You honestly can't tell one twin from another as they are like as two ....... in a pod.",
 options: ["potatoes", "tomatoes", "bananas", "peas"],
 correctIndex: 3
},
{
 question: "I'm sorry I can't accept any other explanation. My mind is made up and there are no two ....... about it.",
 options: ["roads", "paths", "routes", "ways"],
 correctIndex: 3
},
{
 question: "There are late risers and early risers, those who need a lot of sleep and those who need only a .......,",
 options: ["less", "nothing", "few", "little"],
 correctIndex: 3
},
{
 question: "The sandman is coming is what we say to ....... children",
 options: ["dreamy", "torpid", "stagnant", "sleepy"],
 correctIndex: 3
},
{
 question: "....... we talk of the need for a child to start on his journey to slumber land or the land of nod",
 options: ["Differently", "Alternately", "Adversely", "Alternatively"],
 correctIndex: 3
},
{
 question: "You can take a cat nap beside the fire or doze off on a train .......",
 options: ["route", "travel", "voyage", "journey"],
 correctIndex: 3
},
{
 question: "Should you wish for a little peace and ....... at the office,",
 options: ["quite", "still", "halt", "quiet"],
 correctIndex: 3
},
{
 question: "Without offending the ....... of your host, you could also say:",
 options: ["hostelry", "hospital", "hospitable", "hospitality"],
 correctIndex: 3
},
{
 question: "Of course should your guests be ....... to go home to their own beds",
 options: ["uncertain", "unclear", "ungrateful", "unwilling"],
 correctIndex: 3
},
{
 question: "look at your watch ....... or even yawn.",
 options: ["anxious", "anxiety", "anxiousness", "anxiously"],
 correctIndex: 3
},
{
 question: "and most seem to ....... to deep sleep like being sound asleep or fast asleep",
 options: ["direct", "deter", "defer", "refer"],
 correctIndex: 3
},
{
 question: "More colloquial expressions speak of someone being out like a light, spark out or for a very ....... sleeper dead to the world",
 options: ["big", "huge", "large", "heavy"],
 correctIndex: 3
},
{
 question: "let me leave you with a ....... expression. Next time you're off upstairs to bed",
 options: ["end", "last", "lasting", "final"],
 correctIndex: 3
},
{
 question: "You can easily tell that this document ....... from the 12th century because of a distinctive script.",
 options: ["holds", "trails", "lasts", "dates"],
 correctIndex: 3
},
{
 question: "It's a waste of time asking them for their opinion as they're bound to object because they've been ....... against the idea from the start.",
 options: ["subjective", "derogative", "conscious", "prejudiced"],
 correctIndex: 3
},
{
 question: "I always let her handle that kind of situation because she's very good at ....... with difficult clients.",
 options: ["taking", "bringing", "tackling", "dealing"],
 correctIndex: 3
},
{
 question: "Some people who have been made redundant make no further effort to get employment in complete ....... to those who decide to retrain.",
 options: ["comparison", "difference", "attitude", "contrast"],
 correctIndex: 3
},
{
 question: "She is ....... as a possible future first minister.",
 options: ["looked", "observed", "glanced", "seen"],
 correctIndex: 3
},
{
 question: "It's not yet been fully certified yet but the recently discovered bones are ....... to be those of the missing link.",
 options: ["credited", "argued", "required", "believed"],
 correctIndex: 3
},
{
 question: "I think you have been overcharged for that work because it's more ....... twice what I had to pay.",
 options: ["as", "at", "like", "than"],
 correctIndex: 3
},
{
 question: "As a troubleshooter he was often ....... to sort out problems in different area offices.",
 options: ["transmitted", "delivered", "attached", "sent"],
 correctIndex: 3
},
{
 question: "With a view to providing a better environment for their children the couple decided to move ....... from the city to the countryside.",
 options: ["along", "afar", "near", "away"],
 correctIndex: 3
},
{
 question: "It wasn't really a serious crime but it was pointed out to him that by parking there he was in ....... of a local byelaw.",
 options: ["vindication", "virement", "visitation", "violation"],
 correctIndex: 3
},
{
 question: "It's just not within his character and I would never say that he was ....... to that kind of behaviour.",
 options: ["presented", "prepared", "pre-empted", "predisposed"],
 correctIndex: 3
},
{
 question: "The department has ....... so much money on administration that there is little left for employing sales personnel.",
 options: ["devoted", "exhausted", "developed", "spent"],
 correctIndex: 3
},
{
 question: "You must choose the right description for each word and I would ....... this one as an adjective.",
 options: ["delineate", "decipher", "decide", "define"],
 correctIndex: 3
},
{
 question: "Thanks to the crash barrier in the middle of the motorway cars are ....... from hitting those on the other side in the event of an accident.",
 options: ["distracted", "diverted", "directed", "prevented"],
 correctIndex: 3
},
{
 question: "The theatre was ....... to display in the entrance some of the excellent newspaper reviews the play had received.",
 options: ["deluded", "developed", "demanded", "delighted"],
 correctIndex: 3
},
{
 question: "I am very pleased to be working with you because I think the same way and ....... with your policies.",
 options: ["accept", "conform", "confer", "agree"],
 correctIndex: 3
},
{
 question: "You can tell that this piece of furniture is ....... to America because of the strong colonial style.",
 options: ["born", "inherent", "special", "native"],
 correctIndex: 3
},
{
 question: "If you ....... to take that step in your career, you have only yourself to blame if it all goes wrong.",
 options: ["have", "believe", "experiment", "choose"],
 correctIndex: 3
},
{
 question: "It was a totally new experience for us visiting that factory abroad as we were ....... to all sorts of new techniques.",
 options: ["involved", "intended", "invested", "introduced"],
 correctIndex: 3
},
{
 question: "You can tell that this car has been very well made and is certainly ....... to the other makes in this garage.",
 options: ["better", "clearer", "above", "superior"],
 correctIndex: 3
},
{
 question: "He had to be ....... from all the other patients in the hospital because he had a highly contagious disease.",
 options: ["outcast", "eliminated", "extracted", "isolated"],
 correctIndex: 3
},
{
 question: "People used to think the cinema would be ....... by television but it never happened because people still go to the pictures.",
 options: ["supposed", "surrounded", "suppressed", "supplanted"],
 correctIndex: 3
},
{
 question: "There's little point in those two firms competing for the same market as they would be much better ....... with one another.",
 options: ["consuming", "convincing", "convening", "collaborating"],
 correctIndex: 3
},
{
 question: "We sometimes find it difficult to imagine where we come from and believe that we are in fact ....... from apes.",
 options: ["directed", "departed", "devolved", "descended"],
 correctIndex: 3
},
{
 question: "They are in fact twins but are not at all alike physically but are not ....... from one another in attitude.",
 options: ["separate", "divided", "diverse", "different"],
 correctIndex: 3
},
{
 question: "In some 19th century novels you see the very poor conditions people lived in that can only be described as ....... misery.",
 options: ["dejected", "object", "reject", "abject"],
 correctIndex: 3
},
{
 question: "It was a remarkable performance because the actor seemed to convey the whole range of human emotions , what you might call the complete ....... from beginning to end.",
 options: ["gamble", "grasp", "granting", "gamut"],
 correctIndex: 3
},
{
 question: "The telephone connection was very poor and we only heard a ....... account of what the reporter was describing.",
 options: ["gesticulated", "gambled", "garrulous", "garbled"],
 correctIndex: 3
},
{
 question: "His attempt to make fun of the situation was considered to be in bad taste and ....... in the extreme.",
 options: ["fertile", "frequent", "febrile", "facetious"],
 correctIndex: 3
},
{
 question: "Henry: Ladies and gentlemen, I appreciate the anxiety you must all feel about support for your farms. I too have been a farmer and I know the difficulties you are experiencing, and so... <br>Voice from the crowd: ... and so you've decided to become an M.P. and get rich! <br>Henry: No, my friend. I want to give the farmers a ....... in the House of Commons.",
 options: ["sound", "speech", "noise", "voice"],
 correctIndex: 3
},
{
 question: "'Do you like tomatoes?' shouted one of the tractor drivers. Henry ....... for a moment and then replied: 'Yes, I like them very much.'",
 options: ["delayed", "stumbled", "stated", "hesitated"],
 correctIndex: 3
},
{
 question: "The crowd started to ....... and Henry managed to finish his speech without further interruptions. In the meantime the police had made a thorough search of Henry's house and assured him that there were no hidden bombs. He went back to his sister's house to collect his family.",
 options: ["cry", "call", "weep", "cheer"],
 correctIndex: 3
},
{
 question: "After supper, Henry and his family went home. Later that evening the phone rang. <br>Man's voice: Oh, Mr. Orpington. I've been trying to reach you all day. This is Paul Harris. I called you this morning but I was cut off. It was a bad line or something. <br>Henry: Well, what about the bomb? <br>Harris: The bomb? What on ....... do you mean? <br>Henry: That's what I'd like to know. You said, I want to warn you about a bomb.",
 options: ["land", "ground", "mud", "earth"],
 correctIndex: 3
},
{
 question: "No sooner ....... I shut the door, when the telephone rang.",
 options: ["have", "did", "will", "had"],
 correctIndex: 3
},
{
 question: "Actually I had ....... it to her before we set out.",
 options: ["mention", "mentions", "mentioning", "mentioned"],
 correctIndex: 3
},
{
 question: "He realized he ....... left it in the car before he reported it lost.",
 options: ["has", "didn't", "wouldn't", "had"],
 correctIndex: 3
},
{
 question: "What ....... be doing this time tomorrow?",
 options: ["were you", "did you", "have you", "will you"],
 correctIndex: 3
},
{
 question: "He was quite definite about it and assured me he ....... come.",
 options: ["will", "shall", "should", "would"],
 correctIndex: 3
},
{
 question: "....... be buying the house or haven't you decided yet?",
 options: ["Did you", "Have you", "Were you", "Will you"],
 correctIndex: 3
},
{
 question: "What do you ....... to do when you leave school?",
 options: ["wanted", "wanting", "wants", "want"],
 correctIndex: 3
},
{
 question: "I wonder what ....... happened while I was away.",
 options: ["will have", "has", "was", "had"],
 correctIndex: 3
},
{
 question: "He actually denied ....... anything of the sort.",
 options: ["to do", "done", "did", "doing"],
 correctIndex: 3
},
{
 question: "All these houses ....... neglected for decades.",
 options: ["will be", "are being", "has been", "have been"],
 correctIndex: 3
},
{
 question: "I can assure you that this box ....... never been opened before I opened this morning.",
 options: ["was", "will", "is", "had"],
 correctIndex: 3
},
{
 question: "I'm sorry you can't come in at the moment because we ....... the house decorated right now.",
 options: ["have had", "will have", "had", "are having"],
 correctIndex: 3
},
{
 question: "....... me if I've told you this before.",
 options: ["Stopping", "Stopped", "Stops", "Stop"],
 correctIndex: 3
},
{
 question: "And at other times I'm glad I ....... know what the future holds.",
 options: ["didn't", "doesn't", "hadn't", "don't"],
 correctIndex: 3
},
{
 question: "I really appreciate your ....... me at this difficult time.",
 options: ["helps", "help", "helped", "helping"],
 correctIndex: 3
},
{
 question: "Many people ....... tried but no-one has succeeded so far.",
 options: ["did", "have been", "were", "have"],
 correctIndex: 3
},
{
 question: "Do you mind ....... the door as I find it very hot in here?",
 options: ["to open", "opened", "opens", "opening"],
 correctIndex: 3
},
{
 question: "That stupid dog ....... all day long.",
 options: ["does always bark", "always is barking", "had always barked", "is always barking"],
 correctIndex: 3
},
{
 question: "I ....... come to the conclusion that nowadays nobody cares about anything.",
 options: ["will", "had", "do", "have"],
 correctIndex: 3
},
{
 question: "I assumed you ....... paying for the repairs until the end of last year.",
 options: ["have been", "was been", "are being", "had been"],
 correctIndex: 3
},
{
 question: "She ....... trying to pass her driving test but fails every time.",
 options: ["kept", "is keeping", "had kept", "keeps"],
 correctIndex: 3
},
{
 question: "China's cultural industry was given a boost last week after the government announced its plan to ....... cultural reform in more than 20 provincial areas.",
 options: ["carry away", "carry through", "carry off", "carry out"],
 correctIndex: 3
},
{
 question: "The Scottish Parliament has appointed Mr. Maley to ....... an assessment of the current cost estimate and likely completion date of a new information technology project.",
 options: ["carry over", "carry on", "carry off", "carry out"],
 correctIndex: 3
},
{
 question: "International restaurants in Singapore are ....... adept at simultaneously perfecting both eastern and western dishes on their menues",
 options: ["partially", "particularity", "partly", "particularly"],
 correctIndex: 3
},
{
 question: "One of the most beautiful things about Jakarta is its ....... wealth from both within the archipelago and around the world.",
 options: ["cursory", "cautionary", "coronary", "culinary"],
 correctIndex: 3
},
];
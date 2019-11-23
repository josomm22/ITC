score = {'oven': 0, 'fridge': 0, 'dishwasher': 0, 'eggslicer': 0, 'standmixer': 0}
ans1 = {'A': 'oven', 'B': 'fridge', 'C': 'dishwasher', 'D': 'eggslicer', 'E': 'standmixer'}
ans2 = {'A': 'standmixer', 'B': 'oven', 'C': 'fridge', 'D': 'dishwasher', 'E': 'eggslicer'}
ans3 = {'A': 'eggslicer', 'B': 'standmixer', 'C': 'oven', 'D': 'fridge', 'E': 'dishwasher'}
ans4 = {'A': 'standmixer', 'B': 'eggslicer', 'C': 'dishwasher', 'D': 'oven', 'E': 'fridge'}
ans5 = {'A': 'fridge', 'B': 'dishwasher', 'C': 'standmixer', 'D': 'eggslicer', 'E': 'oven'}
oven = 'You are an oven, you like to keep things hot. You constantly worry and make sure that your loved ones do not get food poisoning.'
fridge = 'You are a fridge, keeping it cool is your moto. Everything stays fresh, mostly. You and oven types are best friends who complement each other despite being polar opposite.'
dishwasher = 'You are a dishwasher. You get things done, no job is much and you are not scared of getting your hands a little dirty'
eggslicer = "You are the egg slicer. Essential part of every kitchen, people don't realize how useful you are until they need. Have you ever tried to slice an egg with a knife?"
standmixer = "You are a stand mixer. You are the star of every kitchen, useful and pretty to look at. People know you are there without you having to do anything. "
import operator
#this gets the result
def result_calculator():
    global result
    result = max(score, key=lambda key: score[key])
    print(eval(result))


def add_point(resp, ans):
    appliance = ans[resp]
    y = score[appliance]
    y+=1
    score[appliance] = y


def quizz():
    print('welcome to my get to know yourself questionnaire')
    print('we are going to find out which home appliance is your spirit animal')
    #question 1
    print('Question 1')
    print('If you had to only eat one of these for the rest of your life which one would you choose')
    print('A - Lightbulbs')
    print('B - Broken dreams')
    print('C - Tuna')
    print('D- Peanut butter sandwich')
    print('E -Tide pods')
    answer_1 = str(input('Choose an answer from A to E: '))
    answer_1 = answer_1.upper()
    print('you chose', answer_1)
    add_point(answer_1, ans1)
#    print(score)
    # question 2
    print('Question 2')
    print('When with a group of friends...')
    print('A - I am the quiet one')
    print('B - I am the funny one that makes people laugh')
    print('C - I am the one that leads and adds things to the table')
    print('D- I need to be the center of attention')
    print('E -I am the one that gently cycles through my washing program')
    answer_2 = str(input('Choose an answer from A to E: '))
    answer_2 = answer_2.upper()
    print('you chose', answer_2)
    add_point(answer_2, ans2)
    # question 3
    print('Question 3')
    print("What is your favourite drink(imagine you're at an open bar)?")
    print('A - Water')
    print('B - Jack& coke')
    print('C - Wine')
    print('D- A shot of vodka')
    print('E -yes')
    answer_3 = str(input('Choose an answer from A to E: '))
    answer_3 = answer_3.upper()
    print('you chose', answer_3)
    add_point(answer_3, ans3)
    # question 4
    print('Question 4')
    print("What is your spirit animal?")
    print('A - The elephant')
    print('B - The lion')
    print('C - The tiger')
    print('D- The doplhin')
    print('E -The Roomba 890')
    answer_4 = str(input('Choose an answer from A to E: '))
    answer_4 = answer_4.upper()
    print('you chose', answer_4)
    add_point(answer_4, ans4)
    # question 5
    print('Question 5')
    print("Which situation would be more embarrassing to you?")
    print('A - Forgetting a loved ones birthday')
    print('B - Being under dressed at an event')
    print('C - Having to be escorted out of a place')
    print('D- Slipping on the sidewalk')
    print('E -Forgetting to say "bless you" when someone sneezes')
    answer_5 = str(input('Choose an answer from A to E: '))
    answer_5 = answer_5.upper()
    print('you chose', answer_5)
    add_point(answer_5, ans5)
    print(score)
    result_calculator()

quizz()
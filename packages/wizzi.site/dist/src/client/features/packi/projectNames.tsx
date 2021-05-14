/*
    artifact generator: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi-js\dist\lib\artifacts\ts\module\gen\main.js
    package: wizzi-js@0.7.8
    primary source IttfDocument: C:\My\wizzi\stfnbssl\wizzi\packages\wizzi.site\.wizzi\client\src\features\packi\projectNames.tsx.ittf
    utc time: Tue, 11 May 2021 04:47:43 GMT
*/
import sample from 'lodash/sample';
const emotions = [
    'mad', 
    'ashamed', 
    'bad', 
    'blissful', 
    'joyous', 
    'fascinated', 
    'intrigued', 
    'curious', 
    'amused', 
    'thoughtful', 
    'playful', 
    'courageous', 
    'frisky', 
    'thrilled', 
    'funny', 
    'great', 
    'intelligent', 
    'excited', 
    'spunky', 
    'vigorous', 
    'bold', 
    'brave', 
    'eager', 
    'upbeat', 
    'privileged', 
    'calm', 
    'quiet', 
    'surprised', 
    'carefree', 
    'adequate', 
    'authentic', 
    'blessed', 
    'tenacious', 
    'honest', 
    'supportive', 
    'insane', 
    'mature', 
    'smiling', 
    'grounded', 
    'trusting', 
    'sponaneous', 
    'healthy', 
    'laughing', 
    'graceful', 
    'thankful', 
    'petrified', 
    'suspicious', 
    'humiliated', 
    'lonely', 
    'groaning', 
    'forlorn', 
    'bossy', 
    'rude', 
    'shallow', 
    'arrogant', 
    'tactless', 
    'frowning', 
    'ranting', 
    'belligerent', 
    'moody', 
    'crabby', 
    'rebellious', 
    'vengeful', 
    'sadistic', 
    'jealous', 
    'disrespectful', 
    'cranky', 
    'awkward', 
    'trembling', 
    'anxious', 
    'nervous', 
    'restless', 
    'paranoid', 
    'grumpy', 
    'hazardous', 
    'uplifting', 
    'happy', 
    'gnarly', 
    'smart', 
    'smelly', 
    'juicy', 
    'hot', 
    'delicious', 
    'talking', 
    'witty', 
    'biased', 
    'greedy', 
    'ludicrous'
];
const snacks = [
    'beef jerky', 
    'crackers', 
    'cashew', 
    'peanut', 
    'popcorn', 
    'hummus', 
    'cookie', 
    'cookies', 
    'edamame', 
    'almond', 
    'apple', 
    'apples', 
    'chip', 
    'chips', 
    'yogurt', 
    'mixed nuts', 
    'cheese', 
    'cereal', 
    'donut', 
    'donuts', 
    'pizza', 
    'pretzel', 
    'pretzels', 
    'waffle', 
    'waffles', 
    'candy', 
    'candies', 
    'chocolate', 
    'chocolates', 
    'truffle', 
    'truffles', 
    'fudge', 
    'bubblegum', 
    'marshmallows', 
    'pudding', 
    'turkish delight', 
    'toffee', 
    'graham crackers', 
    'raisins', 
    'cake', 
    'churros', 
    'scone', 
    'scones', 
    'pastry', 
    'coffee', 
    'juice box', 
    'milkshake', 
    'soda', 
    'tea', 
    'ice cream', 
    'popsicle', 
    'banana', 
    'bananas', 
    'carrot', 
    'celery', 
    'peach', 
    'orange', 
    'kiwi', 
    'salsa', 
    'strawberries', 
    'raspberries', 
    'blueberries', 
    'watermelon', 
    'macaroni and cheese', 
    'ramen', 
    'french fries', 
    'bagel', 
    'croissant', 
    'sandwich', 
    'tortilla', 
    'tortillas', 
    'nachos', 
    'bacon', 
    'soylent', 
    'stroopwafel', 
    'stroopwafels'
];
export const getPackiName = () => `${sample(emotions)} ${sample(snacks)}`
;
export const isIntentionallyNamed = (name: string) => {

    const [first, ...rest] = name.split(' ');
    return !emotions.includes(first) || !snacks.includes(rest.join(' '));
}
;

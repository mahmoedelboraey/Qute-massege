/* function getQute(){
    var userText = ["“Be yourself; everyone else is already taken.”" ,
        "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”" , 
        "“So many books, so little time.”" ,
        "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"];
    var uthour = ["― Oscar Wilde" ,"― Marilyn Monroe" , "― Frank Zappa" ,"― Albert Einstein"];
    var num = Math.trunc(Math.random()* userText.length);
    document.getElementById("quoteOutput").innerHTML =userText[num]
    document.getElementById("authorOutput").innerHTML =uthour[num]
    console.log(userText[num])
    console.log(uthour[num])
} */
var lastNum = null;

function getQute() {
    var userText = [
        "“Be yourself; everyone else is already taken.”",
        "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        "“So many books, so little time.”",
        "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        "“Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.”"
    ];
    var uthour = [
        "― Oscar Wilde",
        "― Marilyn Monroe",
        "― Frank Zappa",
        "― Albert Einstein",
        "― Steve Jobs"
    ];

    var num;
    do {
        num = Math.trunc(Math.random() * userText.length);
    } while (num === lastNum); // إعادة التوليد إذا كان الرقم هو نفسه الرقم السابق

    lastNum = num; // تحديث الرقم الأخير

    document.getElementById("quoteOutput").innerHTML = userText[num];
    document.getElementById("authorOutput").innerHTML = uthour[num];

    console.log(userText[num]);
    console.log(uthour[num]);
}

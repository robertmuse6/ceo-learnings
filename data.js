// CEO Learnings library data.
// One record per learning, tagged with person, themes, quote and source.
// All three views (sources / people / themes) render from these records,
// so they can never drift apart. Add a source = add records here.

const SOURCES = [
    {
        id: "chesky-hibt",
        person: "chesky",
        title: "Airbnb CEO Brian Chesky: 'I Was a Great Founder and a Terrible CEO'",
        show: "How I Built This with Guy Raz",
        url: "https://youtu.be/ZYf-DfxJg1c",
        captured: "9 Nov 2026",
        abstract: "Chesky's retrospective on the founder-CEO gap: post-IPO emptiness, loneliness at the top, the pandemic near-death that forced him into the details, and the hands-on management system he built after, which cost him his executive team.",
        transcriptNote: "Full auto-generated transcript captured 9 Nov 2026, kept unchanged and stored privately (auto-transcripts contain errors; the original video is the authority).",
        transcriptUrl: "https://files.instinct.com/e1i4jzwjuz7z-raw-transcript-chesky-on-how-i"
    }
];

const PEOPLE = [
    {
        id: "chesky",
        name: "Brian Chesky",
        role: "Co-founder and CEO, Airbnb",
        sources: ["chesky-hibt"],
        summary: "Chesky's core claim is that early companies need presence, not absence. Founding and running the company are different jobs; the second is counterintuitive and learned in the details. Hire people slightly ahead of you, stay close, keep one direction, say no often, and clear the path for your people's ideas. He pairs this with the personal cost of the job: the emptiness that followed the IPO, the loneliness of performing strength, and the slow rebuild of a life outside the company.",
        context: "A retrospective told after the pandemic turnaround worked. Survivor stories make the surviving choice look inevitable, so read his lessons as one founder's account, not laws."
    }
];

const THEMES = [
    { id: "worth-scoreboard", name: "Worth and the scoreboard", question: "Where does a founder's sense of worth come from?" },
    { id: "purpose-identity", name: "Purpose and identity", question: "What survives success, and who are you without the company?" },
    { id: "connection-support", name: "Connection and support", question: "What keeps a founder from loneliness?" },
    { id: "conviction-stubbornness", name: "Conviction vs stubbornness", question: "When do you push through objections, and when do you listen?" },
    { id: "founder-vs-ceo", name: "Founder vs CEO", question: "How is leading a company different from founding one?" },
    { id: "hiring-stage", name: "Hiring for the stage", question: "Who do you hire, and how closely do you work with them?" },
    { id: "hard-conversations", name: "Hard conversations", question: "How do you handle underperformance?" },
    { id: "one-direction", name: "One direction", question: "How does a team stay one team?" },
    { id: "staying-close", name: "Staying close to the work", question: "How do you know what is actually happening?" },
    { id: "empowerment-autonomy", name: "Empowerment vs autonomy", question: "What do people on a team actually need?" },
    { id: "trust", name: "Trust", question: "Do you trust first or make people earn it?" },
    { id: "hubris-success", name: "Success and hubris", question: "What does success do to judgment?" }
];

const LEARNINGS = [
    {
        person: "chesky", source: "chesky-hibt",
        themes: ["worth-scoreboard"],
        claim: "A bigger win does not fix insecure worth. The morning after the IPO, with the company worth over $100 billion, nothing inside had moved.",
        quote: "My life really isn't any different, and I don't feel that much happier than I did the day before."
    },
    {
        person: "chesky", source: "chesky-hibt",
        themes: ["worth-scoreboard"],
        claim: "External validation behaves like a drug: rising dose, short effect.",
        quote: "You need more and more and more of it, and it wears off very, very quickly."
    },
    {
        person: "chesky", source: "chesky-hibt",
        themes: ["worth-scoreboard", "trust"],
        claim: "Being believed in before there is proof is fuel. He credits co-founders, his board and a friend at a pizza dinner for carrying him before the results existed.",
        quote: "One of the greatest gifts you can give to somebody is believe in them and see something in them."
    },
    {
        person: "chesky", source: "chesky-hibt",
        themes: ["purpose-identity"],
        claim: "A goal that ends at the mountaintop leaves you lost at the top. The purpose has to survive both failure and success.",
        quote: "You spent your whole life trying to climb the mountaintop, and you realize this is not going to change how I feel inside. What do I do now?"
    },
    {
        person: "chesky", source: "chesky-hibt",
        themes: ["purpose-identity"],
        claim: "Dedication without identity separation lets the company eat the self, and he says it made him a worse, more iterative leader.",
        quote: "I can dedicate my life to something, but that doesn't make me that."
    },
    {
        person: "chesky", source: "chesky-hibt",
        themes: ["connection-support"],
        claim: "The day after the IPO was one of the loneliest of his life. Connection runs in rings: self, family, a dozen confidants, community, something bigger. He was disconnected from nearly all of them.",
        quote: "I think it's pretty simple. You're really lonely."
    },
    {
        person: "chesky", source: "chesky-hibt",
        themes: ["connection-support"],
        claim: "Performing strength is what kept him lonely, and the fix was unglamorous: scheduled calls and annual trips with old friends, because shared memories need new experiences.",
        quote: "I wasn't very vulnerable around my employees. I wanted to look strong... I wouldn't let people in."
    },
    {
        person: "chesky", source: "chesky-hibt",
        themes: ["conviction-stubbornness"],
        claim: "Deference to experienced hires was his mirror-image mistake. Neither blind defiance nor blind deference; work the disagreement together and let evidence arbitrate.",
        quote: "Usually I deferred, and that was usually a mistake."
    },
    {
        person: "chesky", source: "chesky-hibt",
        themes: ["conviction-stubbornness", "staying-close"],
        claim: "His gauge for overrule rate: around 10% is healthy. Overrule half the time and you have the wrong people or you are wrong; never overrule and you are adding no value.",
        quote: "If I'm overruling them 50% of the time, I'm wrong or I have the wrong people. And if I'm never overruling them, I'm adding no value."
    },
    {
        person: "chesky", source: "chesky-hibt",
        themes: ["conviction-stubbornness"],
        claim: "When the whole executive team left over his hands-on style, what made the disapproval absorbable was evidence and results, not belief alone.",
        quote: "I don't need everyone to work for me. I just need 10."
    },
    {
        person: "chesky", source: "chesky-hibt",
        themes: ["founder-vs-ceo"],
        claim: "Founding and CEO-ing are different jobs. Founding felt intuitive because he had practiced it since childhood; the CEO job is counterintuitive and has to be learned, and the company cannot outgrow his learning curve.",
        quote: "A company can't grow faster than a CEO's learning curve."
    },
    {
        person: "chesky", source: "chesky-hibt",
        themes: ["hiring-stage"],
        claim: "'Hire great people and get out of their way' is mature-company advice. Early on, hire people slightly ahead of you, smart and hungry, and stay close. Big-company managers managed what others built; that scale does not transfer.",
        quote: "That is a death sentence to a young company."
    },
    {
        person: "chesky", source: "chesky-hibt",
        themes: ["hard-conversations"],
        claim: "Own your people's performance early. Most people think they are doing well, and you convinced them to take the job, so the honest conversation is your responsibility. Silence is delayed information, not kindness.",
        quote: "A pitcher never takes themselves off the mound."
    },
    {
        person: "chesky", source: "chesky-hibt",
        themes: ["hard-conversations", "empowerment-autonomy"],
        claim: "Never do someone's job for them. It hides whether they can do it and props up something unsustainable.",
        quote: ""
    },
    {
        person: "chesky", source: "chesky-hibt",
        themes: ["one-direction"],
        claim: "Five execs pulling five directions is not one team. Saying no to good people on wrong directions is what keeps it one, and you inherit every direction long after the person who chose it leaves.",
        quote: "The right way is one way and one way has to be your way."
    },
    {
        person: "chesky", source: "chesky-hibt",
        themes: ["staying-close"],
        claim: "When chaos grows, the temptation is to step away because you must be the problem. He found the opposite.",
        quote: "The best leadership is presence, not absence."
    },
    {
        person: "chesky", source: "chesky-hibt",
        themes: ["staying-close"],
        claim: "Get the truth from where the work happens: skip-level two or three layers down, and put the whole chain of command in one room for key projects so decisions do not crawl through layers. Be in the details to know, not to dictate.",
        quote: "I'm not going to tell you what to do, but you're not going to tell me to back off. We're going to be in the foxhole together."
    },
    {
        person: "chesky", source: "chesky-hibt",
        themes: ["hubris-success"],
        claim: "A hit breeds hubris. Constraints made the early company disciplined; abundance made its thinking sloppy. He forgot the first website took thirty iterations.",
        quote: "I can do anything, therefore I can do everything."
    },
    {
        person: "chesky", source: "chesky-hibt",
        themes: ["founder-vs-ceo", "hubris-success"],
        claim: "A great business model can hide weak management for years. His read: for a stretch Airbnb succeeded in spite of his leadership, the way eBay's model masked execution while Amazon's forced it.",
        quote: ""
    },
    {
        person: "chesky", source: "chesky-hibt",
        themes: ["empowerment-autonomy"],
        claim: "People want empowerment, not autonomy. The company owns direction; people own how they do the work. Empowerment means resources immediately, blockers removed, the weight of the company behind a good idea.",
        quote: "You're the running back, I'm the offensive line. I stand in front and I clear the path for your idea."
    },
    {
        person: "chesky", source: "chesky-hibt",
        themes: ["trust"],
        claim: "Trust by default and let people show you who they are; the risk of a few betrayals beats the certainty of isolation. His character test: how someone treats people who can do nothing for them.",
        quote: "I would assume good intent."
    }
];

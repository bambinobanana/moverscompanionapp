import { useState, useEffect } from "react";

function useGlobalStyles() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `* { -webkit-tap-highlight-color: transparent; } button { -webkit-tap-highlight-color: transparent; outline: none; } @media print { .no-print { display: none !important; } }`;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
}

const C = {
  red:"#fa4e50",teal:"#009c93",cream:"#fefff1",dark:"#1a1a1a",mid:"#4a4a4a",
  muted:"#8a8a8a",border:"#e5e5d8",redLight:"#fff0f0",tealLight:"#e6f7f6",
  redBg:"#fa4e5018",tealBg:"#009c9318",
};

const T = {
  en: {
    back:"← Back", appTitle:"💥 Movers Companion",
    headline1:"Find your next", headline2:"icebreaker", headline3:"or", headline4:"energizer",
    filterTitle:"Tell us what you need!", filterSub:"Answer 5 quick questions → get the most relevant activities", filterTag:"Recommended",
    browseTitle:"Browse all", browseSub:(n)=>`Explore all ${n} activities freely`,
    favTitle:(n)=>`My favourites${n>0?` (${n})`:""}`, favSubEmpty:"Tap the heart on any activity to save it here",
    feedbackTitle:"Feedback & Suggestions", feedbackSub:"Got an idea or activity to share? Let us know!",
    allActivities:"All Activities", all:(n)=>`All (${n})`, icebreakers:(n)=>`Icebreakers (${n})`, energizers:(n)=>`Energizers (${n})`,
    anySize:"Any", activities:(n)=>`${n} activit${n===1?"y":"ies"}`,
    noMatch:"No activities match these filters.", noMatchResults:"No matches",
    tapToSee:"Tap any card to see full instructions", adjustFilters:"Try adjusting your filters", adjustBtn:"Adjust filters",
    onlineOK:"💻 Online OK", howToRun:"How to run it", facilScript:"Facilitator script", facilTip:"Facilitator tip", outcome:"Expected outcome",
    copy:"📋 Copy", copied:"✅ Copied!", savePDF:"🖨️ Save as PDF", close:"Close", print:"Print / Save as PDF",
    skipFilters:"Skip remaining filters →", favEmpty:"Your favourites will appear here.",
    favNone:"No favourites yet — tap the heart on any activity to save it here.",
    saved:(n)=>`${n} saved activit${n===1?"y":"ies"}`, myFavourites:"❤️ My favourites",
    step:(a,b)=>`Step ${a} of ${b}`, people:"people", min:"min", materials:"Materials",
    q1:"How many participants?", q1o:[{value:"5",label:"Up to 5",sub:"Very small"},{value:"15",label:"6–15",sub:"Small group"},{value:"30",label:"16–30",sub:"Medium group"},{value:"60",label:"31+",sub:"Large group"}],
    q2:"Do participants know each other?", q2o:[{value:"strangers",label:"Complete strangers",sub:"First time meeting"},{value:"acquaintances",label:"Met briefly",sub:"Know each other a little"},{value:"colleagues",label:"Know each other well",sub:"Regular team"}],
    q3:"What is the main goal?", q3o:[{value:"get-to-know",label:"Get to know each other",sub:"👋"},{value:"energy",label:"Boost the level of energy",sub:"⚡"}],
    q4:"How much time do you have?", q4o:[{value:"5",label:"5 min",sub:"Quick burst"},{value:"10",label:"10 min",sub:"Standard"},{value:"15",label:"15 min",sub:"Extended"},{value:"30",label:"30 min+",sub:"Deep dive"}],
    q5:"What is your space like?", q5o:[{value:"seated",label:"Seated — can't move",sub:"Restaurant, tight classroom"},{value:"limited",label:"Meeting room",sub:"Can stand and move a little"},{value:"open",label:"Open space",sub:"Venue, hall — room to move"},{value:"online",label:"Online / virtual",sub:"Zoom, Teams, etc."}],
  },
  fr: {
    back:"← Retour", appTitle:"💥 Movers Companion",
    headline1:"Trouvez votre prochain", headline2:"brise-glace", headline3:"ou", headline4:"énergisant",
    filterTitle:"Dites-nous ce qu'il vous faut !", filterSub:"Répondez à 5 questions → obtenez les activités les plus pertinentes", filterTag:"Recommandé",
    browseTitle:"Tout parcourir", browseSub:(n)=>`Explorer librement les ${n} activités`,
    favTitle:(n)=>`Mes favoris${n>0?` (${n})`:""}`, favSubEmpty:"Appuyez sur le coeur d'une activité pour la sauvegarder ici",
    feedbackTitle:"Retours & Suggestions", feedbackSub:"Une idée ou une activité à partager ? Ecrivez-nous !",
    allActivities:"Toutes les activités", all:(n)=>`Tout (${n})`, icebreakers:(n)=>`Brise-glaces (${n})`, energizers:(n)=>`Energisants (${n})`,
    anySize:"Tous", activities:(n)=>`${n} activite${n>1?"s":""}`,
    noMatch:"Aucune activité ne correspond à ces filtres.", noMatchResults:"Aucun résultat",
    tapToSee:"Appuyez sur une carte pour voir les instructions complètes", adjustFilters:"Essayez de modifier vos filtres", adjustBtn:"Modifier les filtres",
    onlineOK:"💻 En ligne OK", howToRun:"Comment animer", facilScript:"Script du facilitateur", facilTip:"Conseil du facilitateur", outcome:"Résultat attendu",
    copy:"📋 Copier", copied:"✅ Copié !", savePDF:"🖨️ Enregistrer en PDF", close:"Fermer", print:"Imprimer / Enregistrer en PDF",
    skipFilters:"Passer les filtres restants →", favEmpty:"Vos favoris apparaîtront ici.",
    favNone:"Pas encore de favoris — appuyez sur le coeur d'une activité pour la sauvegarder.",
    saved:(n)=>`${n} activite${n>1?"s":""} sauvegardee${n>1?"s":""}`, myFavourites:"❤️ Mes favoris",
    step:(a,b)=>`Etape ${a} sur ${b}`, people:"personnes", min:"min", materials:"Materiel",
    q1:"Combien de participants ?", q1o:[{value:"5",label:"Jusqu'a 5",sub:"Tres petit groupe"},{value:"15",label:"6–15",sub:"Petit groupe"},{value:"30",label:"16–30",sub:"Groupe moyen"},{value:"60",label:"31+",sub:"Grand groupe"}],
    q2:"Les participants se connaissent-ils ?", q2o:[{value:"strangers",label:"Parfaits inconnus",sub:"Premiere rencontre"},{value:"acquaintances",label:"Se connaissent un peu",sub:"Quelques interactions"},{value:"colleagues",label:"Se connaissent bien",sub:"Equipe reguliere"}],
    q3:"Quel est l'objectif principal ?", q3o:[{value:"get-to-know",label:"Apprendre a se connaitre",sub:"👋"},{value:"energy",label:"Booster le niveau d'energie",sub:"⚡"}],
    q4:"Combien de temps avez-vous ?", q4o:[{value:"5",label:"5 min",sub:"Rapide"},{value:"10",label:"10 min",sub:"Standard"},{value:"15",label:"15 min",sub:"Etendu"},{value:"30",label:"30 min+",sub:"Approfondi"}],
    q5:"Quel est votre espace ?", q5o:[{value:"seated",label:"Assis — sans bouger",sub:"Restaurant, salle de classe"},{value:"limited",label:"Salle de reunion",sub:"Peut se lever et bouger un peu"},{value:"open",label:"Espace ouvert",sub:"Salle de conference, hall"},{value:"online",label:"En ligne / virtuel",sub:"Zoom, Teams, etc."}],
  }
};

const SPACE_META = {
  en: {seated:{label:"Seated",emoji:"🪑"},limited:{label:"Meeting room",emoji:"🏢"},open:{label:"Open space",emoji:"🏟️"},online:{label:"Online",emoji:"💻"}},
  fr: {seated:{label:"Assis",emoji:"🪑"},limited:{label:"Salle de reunion",emoji:"🏢"},open:{label:"Espace ouvert",emoji:"🏟️"},online:{label:"En ligne",emoji:"💻"}},
};

const TYPE={Icebreaker:{color:C.teal,bg:C.tealBg,lightBg:C.tealLight},Energizer:{color:C.red,bg:C.redBg,lightBg:C.redLight}};
const ENERGY={low:{label:{en:"Low energy",fr:"Energie basse"},emoji:"🧘",color:C.teal},medium:{label:{en:"Medium energy",fr:"Energie moyenne"},emoji:"🚶",color:"#e07b00"},high:{label:{en:"High energy",fr:"Haute energie"},emoji:"🏃",color:C.red}};
const TYPE_LABEL={en:{Icebreaker:"Icebreaker",Energizer:"Energizer"},fr:{Icebreaker:"Brise-glace",Energizer:"Energisant"}};

const ACTIVITIES = {
en: [
  {id:9,name:"Power 8",type:"Energizer",minPeople:15,maxPeople:200,duration:4,objective:["energy"],familiarity:["strangers","acquaintances","colleagues"],energy:"high",online:true,space:["seated","limited","open","online"],description:"A countdown shake-out to release tension and reset the room's energy. Fast, universal, and works for any size.",instructions:["Stand up (or stay seated if needed).","Shake your right hand counting down from 8: 8-7-6-5-4-3-2-1!","Repeat with left hand, right foot, left foot — 8 counts each.","Repeat the whole sequence from 4, then 2, then 1.","End with a big jump, clap, or cheer!"],facilTip:"Works brilliantly online — everyone does it at their desk. Zero awkwardness, instant energy.",facilScript:"Stand up — or stay seated if you need to. We are going to shake out the energy. Right hand, shake it 8 times — count with me: 8, 7, 6, 5, 4, 3, 2, 1! Left hand! Right foot! Left foot! Now from 4... now from 2... now from 1! [Big finish cheer]",materials:"None",outcome:"Participants will feel physically activated, mentally present, and ready to engage with full energy."},
  {id:17,name:"Giant Rock-Paper-Scissors",type:"Energizer",minPeople:15,maxPeople:200,duration:10,objective:["energy"],familiarity:["strangers","acquaintances","colleagues"],energy:"high",online:false,space:["limited","open"],description:"A whole-room Rock-Paper-Scissors tournament where losers become passionate cheerleaders — building into an epic, crowd-fueled final.",instructions:["Everyone raises their right hand to signal availability. Find someone else with their hand up and play Rock-Paper-Scissors.","The loser immediately becomes the winner's personal cheerleader — following them, chanting their name, hyping them up.","Winners keep their hand up and find new opponents. Cheer squads grow bigger with every round.","When only 2 finalists remain, pause everyone. Do some crowd work — interview the finalists, build the hype.","Count down to the grand final: best of 3 or best of 5. The crowd erupts!"],facilTip:"Your energy as facilitator sets the ceiling. Go all-in during the final — give it a sports commentator vibe. The bigger the drama, the more memorable it is.",facilScript:"Everyone raise your right hand — that means you are in. Find someone else with their hand up and play Rock-Paper-Scissors. Winner stays in, hand stays up. Loser? You are now their BIGGEST FAN. Follow them. Scream their name. The louder the better. Last two standing face off in the grand final. Ready? GO!",materials:"None",outcome:"Participants will feel physically activated, mentally present, and ready to engage with full energy."},
  {id:18,name:"Human Knot",type:"Energizer",minPeople:6,maxPeople:200,duration:10,objective:["energy"],familiarity:["acquaintances","colleagues"],energy:"high",online:false,space:["open"],description:"Everyone grabs random hands across a tight circle, creating a human knot the group must untangle without ever letting go.",instructions:["Stand in a circle, then step inward until it is tight and shoulders are almost touching.","Everyone raises their right hand and grabs someone else's hand across the circle — not a neighbor's.","Everyone raises their left hand and grabs a different person's hand — again, not a neighbor's.","Without releasing any grip, untangle back into a circle by stepping over, under, and through each other.","If completely stuck, allow one emergency break: one pair may release and reconnect once. A clean circle or two interlocked circles both count!","For 20+ people: split into multiple circles and race — first group to untangle wins!"],facilTip:"Rich debrief potential for team dynamics and communication. Works best when people resist the urge to over-direct and instead experiment together. With larger groups, the competition format adds great energy.",facilScript:"Everyone stand in a circle — now step in until it is tight. Raise your right hand and grab someone's hand across the circle. Not your neighbor's! Now raise your left hand and grab a different person's hand. Got it? Good. Without letting go, untangle yourselves back into a circle. Step over, duck under, twist around. Go!",materials:"None",outcome:"Participants will feel physically activated, mentally present, and ready to engage with full energy."},
  {id:19,name:"Walk Around the Room",type:"Energizer",minPeople:8,maxPeople:100,duration:8,objective:["energy"],familiarity:["strangers","acquaintances","colleagues"],energy:"high",online:false,space:["open"],description:"A deceptively simple movement game — the facilitator calls numbers with actions, then sneaks in a trick that catches everyone off guard and triggers real laughter.",instructions:["Everyone walks freely around the room filling the space. The facilitator calls numbered actions.","Number 1 = high five the nearest person. Practice a few times until it flows.","Number 2 = everyone jumps. But right after announcing 2, immediately call 1 again — some people will jump on instinct. Enjoy the chaos!","Build the repertoire: 3 = sit down fast, 4 = form a group of exactly 4, and so on.","The facilitator can invent new numbers on the fly. Keep the pace quick and the surprises coming."],facilTip:"The trick only works if you keep a completely straight face. The moment of confusion when people realize they have been tricked is the whole payoff.",facilScript:"Start walking around the room — fill every corner. When I call a number, do the action. 1 = high five the nearest person. Let's try it: ONE! [repeat]. Great. Now, 2 = everyone jumps. Ready? ONE! [pause one beat] ONE! [watch the chaos]. TWO! Ha! Let's keep going...",materials:"None",outcome:"Participants will feel physically activated, mentally present, and ready to engage with full energy."},
  {id:10,name:"Zip Zap Zop",type:"Energizer",minPeople:8,maxPeople:40,duration:5,objective:["energy"],familiarity:["strangers","acquaintances","colleagues"],energy:"high",online:false,space:["limited","open"],description:"A fast-paced attention game where energy passes around the circle with words and eye contact.",instructions:["Stand in a circle. One person points to someone and says Zip!","That person points to another and says Zap!","That person points to someone else and says Zop!","Continue cycling: Zip, Zap, Zop, Zip... Speed up gradually.","Anyone who hesitates or says the wrong word is out — or does a fun forfeit!"],facilTip:"Demonstrate with exaggerated enthusiasm. Perfect right after lunch to re-energize the room.",facilScript:"Stand in a circle. We are going to pass energy around using three words: Zip, Zap, Zop — in that order, always. Point at someone and say ZIP. They point at someone else and say ZAP. That person says ZOP. Then it restarts. Got it? Speed increases. Anyone who hesitates is out. Let's go!",materials:"None",outcome:"Participants will feel physically activated, mentally present, and ready to engage with full energy."},
  {id:11,name:"Soundball",type:"Energizer",minPeople:6,maxPeople:30,duration:7,objective:["energy"],familiarity:["strangers","acquaintances","colleagues"],energy:"high",online:true,space:["seated","limited","open","online"],description:"An imaginary ball is thrown around with a sound effect. Add more balls to increase the chaos!",instructions:["Stand or sit in a circle. One person throws an invisible ball with a sound (WHOOSH!).","The receiver catches it with a sound and throws to someone else.","After 1 min, add a 2nd ball of a different type: super heavy, hot potato, bouncy...","Challenge: keep all balls going simultaneously!"],facilTip:"Works online too — throw with a camera gesture and sound. Great focus-builder for virtual sessions.",facilScript:"We have an invisible ball. To throw it, make eye contact with someone, point, and make a sound — any sound. The louder and weirder the better. The catcher makes a catch sound then throws to someone else. Now I am adding a second ball — this one is SUPER heavy. Ready?",materials:"None",outcome:"Participants will feel physically activated, mentally present, and ready to engage with full energy."},
  {id:12,name:"Mirror",type:"Energizer",minPeople:6,maxPeople:40,duration:7,objective:["energy","get-to-know"],familiarity:["strangers","acquaintances","colleagues"],energy:"medium",online:true,space:["seated","limited","open","online"],description:"Pairs mirror each other's slow movements — with no designated leader in the final round.",instructions:["Pair up. Face each other or use cameras online.","One person leads slow movements; the other mirrors exactly.","After 90 seconds, swap roles.","Round 3: no designated leader — try to move as one.","Debrief: what did it feel like to lead vs follow vs share leadership?"],facilTip:"The third round with no leader is the magic. Soft background music enhances the effect.",facilScript:"Find a partner, face each other. One of you leads — move slowly, like slow motion. The other mirrors every movement exactly. After 90 seconds I will say switch. Then for the last round: no leader. Try to move as one. Let's begin.",materials:"None (calm music optional)",outcome:"Participants will feel re-energized and more connected to the people around them."},
  {id:14,name:"Ninja",type:"Energizer",minPeople:6,maxPeople:25,duration:10,objective:["energy"],familiarity:["acquaintances","colleagues"],energy:"high",online:false,space:["open"],description:"A dramatic elimination game of frozen poses and single strikes — high energy, huge laughs.",instructions:["Stand in a circle. On 3-2-1-NINJA! everyone jumps into a frozen ninja pose.","Going clockwise, each player makes ONE strike motion toward a neighbor's hand.","The target can dodge with ONE move. If hit, that hand goes behind their back.","Two hands lost = eliminated. Last ninja standing wins!"],facilTip:"Model it with maximum seriousness for maximum laughs. The dramatic posing sets the whole vibe.",facilScript:"Everyone stand in a circle. On my count of 3-2-1, jump into your most powerful ninja pose and freeze. Each person makes ONE strike at a neighbor's hand. They can dodge with ONE move. Two hands lost = eliminated. This is serious business. 3... 2... 1... NINJA!",materials:"None",outcome:"Participants will feel physically activated, mentally present, and ready to engage with full energy."},
  {id:20,name:"Ho Ha He (Butcher)",type:"Energizer",minPeople:8,maxPeople:40,duration:8,objective:["energy"],familiarity:["acquaintances","colleagues"],energy:"high",online:false,space:["limited","open"],description:"A circle game of sharp mimes and synchronized sounds — HO, HA, HE — that gets faster, louder, and more chaotic with every round.",instructions:["Stand in a circle. One person starts: yell HO! while miming a chopping motion — both hands together, swinging top to bottom — aimed at someone across the circle.","The targeted person responds: yell HA! while lifting both hands upward (bottom to top).","That person's two neighbors simultaneously yell HE! and mime slicing inward from each side.","The targeted person now becomes the new sender — pick someone else and repeat. Speed up with each round.","Optional elimination: anyone who hesitates, mimes wrong, or says the wrong sound is out. Last three standing win."],facilTip:"Teach it slowly and clearly first — the three-part chain HO-HA-HE must click before you accelerate. Once it does, the energy builds itself. Encourage maximum volume.",facilScript:"Watch carefully — HO! [mime chopping downward toward someone]. That person: HA! [hands shoot up]. Their two neighbors: HE! [slice inward from each side]. Then it starts again. Let's go slow first... good! Now faster. Louder. GO!",materials:"None",outcome:"Participants will feel physically activated, mentally present, and ready to engage with full energy."},
  {id:16,name:"Everybody Up",type:"Energizer",minPeople:4,maxPeople:30,duration:5,objective:["energy"],familiarity:["acquaintances","colleagues"],energy:"high",online:false,space:["open"],description:"Pairs try to stand up together from seated back-to-back — then scale to bigger groups.",instructions:["Find a partner. Sit back-to-back on the floor, knees bent, arms linked.","Try to stand up together WITHOUT using your hands.","Once successful, join another pair (group of 4) and try again.","Keep adding people until the whole group attempts it together.","Debrief: what changed as the group got larger?"],facilTip:"Beautiful metaphor for interdependence and scaling. Check for mobility limitations beforehand.",facilScript:"Find a partner. Sit back-to-back on the floor, link arms, knees bent. Your challenge: stand up together — without using your hands. Once you are up, grab another pair and try as a group of 4. Keep growing. Let's see how far we get!",materials:"None (clear floor space needed)",outcome:"Participants will feel physically activated, mentally present, and ready to engage with full energy."},
  {id:21,name:"Circle of Introductions",type:"Icebreaker",minPeople:3,maxPeople:20,duration:15,objective:["get-to-know"],familiarity:["strangers","acquaintances"],energy:"low",online:true,space:["seated","limited","open","online"],description:"The classic round of introductions — elevated with a thoughtful prompt. Works in any setting, even when no one can move.",instructions:["Ask everyone to introduce themselves with a standard opener: name, where they are from, what they do.","Add one or two targeted prompts tailored to your audience — something personal, forward-looking, or reflective.","Go around the circle. For larger groups (15+), give each person a strict time limit (e.g. 60 seconds).","After everyone has shared, invite the group to notice patterns, surprises, or things in common."],facilTip:"The prompt is everything. What is one thing people would not guess about you from your job title? will yield far richer sharing than tell us about your role. Set the bar high.",facilScript:"Let's take a few minutes to meet each other. Share your name, where you are from — and [your prompt]. About a minute each. I'll go first: my name is...",materials:"None",outcome:"Participants will feel more at ease, discover something new about each other, and build early connection."},
  {id:2,name:"Human Bingo",type:"Icebreaker",minPeople:10,maxPeople:50,duration:15,objective:["get-to-know"],familiarity:["strangers","acquaintances"],energy:"medium",online:false,space:["limited","open"],description:"Participants mingle to find people matching descriptions on their bingo card — a high-energy way to discover what makes each person unique.",instructions:["Hand out bingo cards with traits like speaks 3 languages or has lived in 3 countries.","Set a timer. Participants mingle and ask each other questions to fill their card.","First to complete a line (or full card) shouts BINGO!","Debrief: share the most surprising thing you discovered."],facilTip:"Customize traits to your group context — SDG-related traits work great for development workers.",facilScript:"You each have a bingo card. Your mission: find someone who matches each description and write their name in the box. You can only use each person once! First to complete a line shouts BINGO. You have 10 minutes — go!",materials:"Printed bingo cards, pens",outcome:"Participants will feel more at ease, discover something new about each other, and build early connection."},
  {id:3,name:"4 Corners",type:"Icebreaker",minPeople:10,maxPeople:100,duration:10,objective:["get-to-know","energy"],familiarity:["strangers","acquaintances","colleagues"],energy:"medium",online:false,space:["open"],description:"Participants move to room corners based on their preferences — surfaces similarities and differences in a playful, physical way.",instructions:["Label 4 corners of the room (e.g. Early Bird / Night Owl / Depends / Both).","Ask a question and everyone walks to their corner.","People briefly chat with others in their corner (1 min).","Repeat 4-6 times, mixing fun and work-relevant questions."],facilTip:"Mix playful questions (tea vs coffee) with meaningful ones (solo vs collaborative work) for a well-rounded warm-up.",facilScript:"See the four corners of the room? Each one has an option. When I read a statement, walk to the corner that best represents you. No right or wrong answers — you'll have 1 minute to chat with your corner. Ready? First question...",materials:"4 corner labels (printed or flipchart paper)",outcome:"Participants will feel more comfortable, learn about each other, and arrive energized for the session ahead."},
  {id:22,name:"Life Line",type:"Icebreaker",minPeople:4,maxPeople:30,duration:20,objective:["get-to-know"],familiarity:["strangers","acquaintances","colleagues"],energy:"low",online:true,space:["seated","limited","open","online"],description:"In pairs or trios, participants share the story of their life — from birth to today — choosing whatever moments feel worth telling. One of the most powerful connection exercises there is.",instructions:["Pair up or form groups of 3. Each person shares their life journey — key moments, turning points, highs and lows — in whatever form feels natural.","Optional but powerful: both the sharer and the listener draw the life line on paper simultaneously — a visual arc of the story being told.","Give each person 5-8 minutes. The listener can ask one or two questions at the end, but mostly just listens.","If time allows, invite a few volunteers to share one thing they discovered about their partner with the wider group."],facilTip:"Vulnerability is contagious. If you model genuine openness in your instructions — even sharing a fragment of your own story — the room will follow. There is no right way to tell a life story.",facilScript:"We are going to do something a little different. In pairs, you'll share your life — from birth to now. Not everything, just what feels important. You have about 7 minutes each. Your partner listens fully. You can draw it on paper if that helps. I'll keep time. Find your partner.",materials:"Paper and pens (optional)",outcome:"Participants will feel more at ease, discover something new about each other, and build early connection."},
  {id:5,name:"Desert Island",type:"Icebreaker",minPeople:4,maxPeople:20,duration:10,objective:["get-to-know"],familiarity:["strangers","acquaintances"],energy:"low",online:true,space:["seated","limited","open","online"],description:"Stranded on a desert island for a month — what 3 items do you bring? A timeless classic that reveals personality and sparks great conversation.",instructions:["You are stranded on a deserted island for one month — 3 items only. What do you choose?","Give 2 min for individual thinking.","Go around — each person shares their 3 items and why.","Debrief: notice patterns — practical vs creative vs emotional choices."],facilTip:"Add a twist: one item must be useful for the group, one personal, one surprising.",facilScript:"Picture this: you are stranded on a deserted island for one month. You can bring exactly 3 items — anything you want. Take 2 minutes to decide. Then we'll go around and share. I am curious what you'll choose...",materials:"None",outcome:"Participants will feel more at ease, discover something new about each other, and build early connection."},
  {id:4,name:"My Superpower",type:"Icebreaker",minPeople:5,maxPeople:25,duration:10,objective:["get-to-know"],familiarity:["strangers","acquaintances","colleagues"],energy:"low",online:true,space:["seated","limited","open","online"],description:"Each person identifies and shares one unique strength — framed as their team superpower. A confidence-building opener that surfaces the room's collective talent.",instructions:["Prompt: If you had to name one unique superpower you bring to a team, what would it be?","Give everyone 1 min to think (can jot it down).","Go around — each person shares their superpower in one sentence.","Optional: the group votes on the most powerful team combo."],facilTip:"Frame it lightly — some people feel shy about self-promotion. Humor is very welcome!",facilScript:"Think about this: if you had a superpower — one unique strength you bring to a team — what would it be? Take 1 minute to think. It can be serious or funny. We'll go around and each share ours in one sentence.",materials:"None (sticky notes optional)",outcome:"Participants will feel more at ease, discover something new about each other, and build early connection."},
  {id:23,name:"Item Share",type:"Icebreaker",minPeople:4,maxPeople:20,duration:10,objective:["get-to-know"],familiarity:["strangers","acquaintances","colleagues"],energy:"low",online:true,space:["seated","limited","open","online"],description:"Each person brings one meaningful object to the session and shares the story behind it. Simple, personal, and surprisingly moving.",instructions:["Before the session, ask participants to bring one object that means something to them — personal, symbolic, or professional.","Go around — each person holds up their item and shares what it is and why they chose it (30-60 seconds each).","Invite one or two reactions or questions from the group after each share.","Optional debrief: what patterns or themes emerged across the objects?"],facilTip:"Send the prompt at least 24 hours before — people need time to find something meaningful. Share your own object first to set the tone.",facilScript:"Before we started, I asked you to bring one object that means something to you. It could be anything — personal, professional, symbolic. Let's go around. Hold it up, tell us what it is, and why you brought it. About 45 seconds each. Who wants to go first?",materials:"Participants bring their own item (pre-workshop prompt required)",outcome:"Participants will feel more at ease, discover something new about each other, and build early connection."},
  {id:24,name:"Word Association",type:"Icebreaker",minPeople:2,maxPeople:5,duration:15,objective:["get-to-know"],familiarity:["strangers","acquaintances","colleagues"],energy:"low",online:true,space:["seated","limited","open","online"],description:"Everyone says one word that a person makes them think of — then that person responds with stories connected to each word. Intimate, revealing, and often surprising.",instructions:["Focus on one person at a time. Everyone else says one word this person makes them think of — instinctive, no filtering.","The person in the hot seat takes the words one by one and shares a story, memory, or reflection connected to each.","Rotate until everyone has had their turn.","Optional extended version (30 min): allow more words and deeper storytelling per person."],facilTip:"The words people choose reveal as much about the speakers as about the person in the hot seat. Point this out in the debrief.",facilScript:"We are going to do a word association exercise. One person is in the hot seat — everyone else gives them one word. Just the first word that comes to mind when you think of them. Then the person responds to each word with a story or reflection. I'll go first in the hot seat. What word comes to mind when you think of me?",materials:"None",outcome:"Participants will feel more at ease, discover something new about each other, and build early connection."},
  {id:25,name:"Powerful Questions",type:"Icebreaker",minPeople:6,maxPeople:100,duration:15,objective:["get-to-know"],familiarity:["strangers","acquaintances","colleagues"],energy:"medium",online:false,space:["limited","open"],description:"Each person crafts one powerful question, then mingles to ask and answer with different partners — sparking genuine, memorable one-on-one conversations.",instructions:["Explain what makes a question powerful: open-ended, thought-provoking, not transactional. Give a clear good and bad example.","Give 2 minutes for everyone to write their question (sticky note optional).","Everyone raises their hand to signal availability. Find a partner, ask each other your questions, and really listen.","When done, raise your hand and find a new partner. Repeat for 3-5 rounds.","Debrief: what was the most powerful question you heard? What surprised you?"],facilTip:"Bad example: What do you do? Good example: What is a belief you hold that most people in your field would disagree with? The contrast helps people aim higher.",facilScript:"Everyone write one powerful question — something that makes people think, reflect, go somewhere real. Not where are you from. Something that matters. Two minutes. Now raise your hand. Find someone else with their hand up. Ask each other your questions and actually listen. When done, hand up again. Go!",materials:"Sticky notes and pens (optional)",outcome:"Participants will feel more at ease, discover something new about each other, and build early connection."},
  {id:26,name:"Silent Lines",type:"Icebreaker",minPeople:8,maxPeople:200,duration:10,objective:["get-to-know"],familiarity:["strangers","acquaintances","colleagues"],energy:"medium",online:false,space:["limited","open"],description:"Participants take a silent position on a spectrum between two extremes — then explain their choice. Surfaces diversity of thought without groupthink.",instructions:["Mark an imaginary line across the room: one end = Strongly Agree, other = Strongly Disagree.","Read a statement. Everyone moves silently to their position on the spectrum — no talking.","Once settled, invite a few people at different positions to explain their thinking.","Repeat 4-6 times, mixing lighter questions with ones tied to your workshop theme."],facilTip:"The silence before sharing is key — it prevents groupthink and makes people commit to their real position before hearing others. Do not rush it.",facilScript:"Imagine a line across the room — Strongly Agree on this side, Strongly Disagree on that side. When I read a statement, find your position on the line. Silently — no peeking at where others go first. Then I'll ask a few of you to explain. First statement...",materials:"None (masking tape optional)",outcome:"Participants will feel more at ease, discover something new about each other, and build early connection."},
  {id:27,name:"Silent Hands",type:"Icebreaker",minPeople:6,maxPeople:30,duration:8,objective:["get-to-know"],familiarity:["strangers","acquaintances","colleagues"],energy:"low",online:false,space:["seated","limited","open"],description:"The spectrum exercise using hand height instead of moving. Best in groups of 6-10; split by table for larger groups. For big seated venues, use Silent Lines instead.",instructions:["Explain the scale: hand fully raised = Strongly Agree, hand fully lowered = Strongly Disagree, anywhere in between = honest position.","Read a statement. Everyone silently places their hand at their position — no talking.","Invite a few people to share why their hand is where it is.","Repeat 4-6 times. The visual of hands at different heights is striking and worth pausing on."],facilTip:"In restaurants or formal settings, this is the most dignified way to run a spectrum. For 20+ people, assign a facilitator per table.",facilScript:"We are doing a quick spectrum — but with your hands. Fully up = strongly agree. Fully down = strongly disagree. Anywhere in between is your honest position. Silently — no looking around first. Ready? First statement...",materials:"None",outcome:"Participants will feel more at ease, discover something new about each other, and build early connection."},
  {id:28,name:"Adjective + Name",type:"Icebreaker",minPeople:5,maxPeople:15,duration:10,objective:["get-to-know"],familiarity:["strangers","acquaintances"],energy:"medium",online:false,space:["seated","limited","open"],description:"Each person pairs their name with an alliterative adjective and a mime — the group memorizes everyone's combo, then a fast-paced passing game begins.",instructions:["Each person picks an adjective starting with the same letter as their first name, adds a mime, and introduces themselves (e.g. Daring Dinh with arms wide).","Go around the circle — after each person, everyone repeats all previous combos from memory before adding the new one.","Once everyone is introduced, start the game: say your own combo, then immediately say someone else's. That person must respond and pass it on.","Speed up gradually. Optional elimination for hesitations or mistakes — last few standing win."],facilTip:"Do not skip the memorization round — it is the foundation that makes the game work. The repetition also helps quieter participants feel seen before the competitive part begins.",facilScript:"Think of an adjective starting with the same letter as your first name — and a mime to bring it to life. I'll go first: Daring Dinh [mime]. Now everyone repeat after me. Then the next person goes — and we repeat all of them before adding theirs. Ready? Let's go.",materials:"None",outcome:"Participants will feel more at ease, discover something new about each other, and build early connection."},
],
fr: [
  {id:9,name:"Power 8",type:"Energizer",minPeople:15,maxPeople:200,duration:4,objective:["energy"],familiarity:["strangers","acquaintances","colleagues"],energy:"high",online:true,space:["seated","limited","open","online"],description:"Un compte a rebours pour liberer les tensions et recharger l'energie du groupe. Rapide, universel, fonctionne pour toutes les tailles.",instructions:["Debout (ou assis si necessaire).","Secouez la main droite en comptant depuis 8 : 8-7-6-5-4-3-2-1 !","Repetez avec la main gauche, le pied droit, le pied gauche — 8 comptes chacun.","Repetez la sequence depuis 4, puis 2, puis 1.","Terminez avec un grand saut, un applaudissement ou un cri !"],facilTip:"Fonctionne brillamment en ligne — tout le monde le fait a son bureau. Zero gene, energie instantanee.",facilScript:"Levez-vous — ou restez assis si necessaire. Nous allons evacuer l'energie. Main droite, secouez-la 8 fois — comptez avec moi : 8, 7, 6, 5, 4, 3, 2, 1 ! Main gauche ! Pied droit ! Pied gauche ! Maintenant depuis 4... depuis 2... depuis 1 ! [Grand final !]",materials:"Aucun",outcome:"Les participants se sentiront physiquement actives, mentalement presents et prets a s'engager pleinement."},
  {id:17,name:"Pierre-Papier-Ciseaux Geant",type:"Energizer",minPeople:15,maxPeople:200,duration:10,objective:["energy"],familiarity:["strangers","acquaintances","colleagues"],energy:"high",online:false,space:["limited","open"],description:"Un tournoi de Pierre-Papier-Ciseaux a l'echelle de la salle, ou les perdants deviennent des supporters passionnes — culminant en une finale epique.",instructions:["Tout le monde leve la main droite pour signaler sa disponibilite. Trouvez quelqu'un avec la main levee et jouez.","Le perdant devient immediatement le supporter du gagnant — le suit, scande son nom, l'encourage.","Les gagnants gardent la main levee et trouvent de nouveaux adversaires. Les equipes de supporters grossissent.","Quand il ne reste que 2 finalistes, pausez. Faites du show — interviewez les finalistes, creez le suspense.","Compte a rebours vers la grande finale : au meilleur des 3 ou des 5 !"],facilTip:"Votre energie fixe le niveau. Allez a fond pendant la finale — adoptez le style commentateur sportif.",facilScript:"Tout le monde leve la main droite — ca veut dire que vous etes dans la partie. Trouvez quelqu'un d'autre et jouez. Le gagnant reste, main levee. Le perdant ? Vous etes maintenant leur PLUS GRAND FAN. Suivez-les. Criez leur nom. Les deux derniers s'affrontent en grande finale. Prets ? GO !",materials:"Aucun",outcome:"Les participants se sentiront physiquement actives, mentalement presents et prets a s'engager pleinement."},
  {id:18,name:"Le Noeud Humain",type:"Energizer",minPeople:6,maxPeople:200,duration:10,objective:["energy"],familiarity:["acquaintances","colleagues"],energy:"high",online:false,space:["open"],description:"Tout le monde attrape des mains au hasard dans un cercle serre, creant un noeud humain que le groupe doit demeler sans jamais lacher.",instructions:["Formez un cercle serre jusqu'a ce que les epaules se touchent presque.","Tout le monde leve la main droite et attrape la main de quelqu'un en face — pas d'un voisin.","Tout le monde leve la main gauche et attrape la main d'une autre personne — toujours pas un voisin.","Sans lacher, demelez-vous pour reformer un cercle en passant par-dessus, par-dessous et a travers les autres.","Pause d'urgence : une paire peut se lacher et se reconnecter une fois. Deux cercles imbriques comptent aussi !","Pour 20+ personnes : plusieurs cercles en competition — le premier a se demeler gagne !"],facilTip:"Potentiel de debrief riche sur la dynamique d'equipe. Fonctionne mieux quand les gens resistant a trop diriger.",facilScript:"En cercle — rapprochez-vous jusqu'a ce que ce soit serre. Levez la main droite et attrapez la main de quelqu'un en face. Pas votre voisin ! Maintenant la main gauche, une autre personne. Sans lacher, demelez-vous. Par-dessus, par-dessous, tournez. Go !",materials:"Aucun",outcome:"Les participants se sentiront physiquement actives, mentalement presents et prets a s'engager pleinement."},
  {id:19,name:"Marchez dans la Salle",type:"Energizer",minPeople:8,maxPeople:100,duration:8,objective:["energy"],familiarity:["strangers","acquaintances","colleagues"],energy:"high",online:false,space:["open"],description:"Un jeu de mouvement simple en apparence — le facilitateur donne des instructions numerotees, puis glisse une blague qui prend tout le monde par surprise.",instructions:["Tout le monde marche dans la salle. Le facilitateur appelle des actions numerotees.","1 = faire un high five a la personne la plus proche. Pratiquez quelques fois.","2 = tout le monde saute. Mais juste apres avoir annonce 2, appelez immediatement 1 — certains sauteront par instinct !","Enrichissez : 3 = s'asseoir vite, 4 = former un groupe de 4 exactement, etc.","Inventez de nouveaux numeros. Gardez le rythme rapide et les surprises vives."],facilTip:"La blague ne fonctionne que si vous gardez un visage totalement impassible.",facilScript:"Commencez a marcher — remplissez chaque coin. 1 = high five a la personne la plus proche. Essayons : UN ! [repetez]. Super. Maintenant, 2 = tout le monde saute. Prets ? UN ! [pause] UN ! [regardez le chaos]. DEUX ! Ha ! Continuons...",materials:"Aucun",outcome:"Les participants se sentiront physiquement actives, mentalement presents et prets a s'engager pleinement."},
  {id:10,name:"Zip Zap Zop",type:"Energizer",minPeople:8,maxPeople:40,duration:5,objective:["energy"],familiarity:["strangers","acquaintances","colleagues"],energy:"high",online:false,space:["limited","open"],description:"Un jeu d'attention rapide ou l'energie circule dans le cercle avec des mots et du contact visuel.",instructions:["En cercle. Une personne pointe quelqu'un et dit Zip !","Cette personne pointe quelqu'un d'autre et dit Zap !","Cette personne pointe quelqu'un et dit Zop !","Continuez : Zip, Zap, Zop, Zip... Accelerez progressivement.","Quiconque hesite ou dit le mauvais mot est elimine — ou fait un gage !"],facilTip:"Demontrez avec un enthousiasme exagere. Parfait apres le dejeuner pour recharger la salle.",facilScript:"En cercle. Nous allons faire circuler l'energie avec trois mots : Zip, Zap, Zop — dans cet ordre, toujours. Pointez quelqu'un et dites ZIP. Il pointe quelqu'un et dit ZAP. Cette personne dit ZOP. Compris ? La vitesse augmente. Allons-y !",materials:"Aucun",outcome:"Les participants se sentiront physiquement actives, mentalement presents et prets a s'engager pleinement."},
  {id:11,name:"Ballon Sonore",type:"Energizer",minPeople:6,maxPeople:30,duration:7,objective:["energy"],familiarity:["strangers","acquaintances","colleagues"],energy:"high",online:true,space:["seated","limited","open","online"],description:"Un ballon imaginaire circule accompagne d'effets sonores. Ajoutez des ballons pour augmenter le chaos !",instructions:["En cercle. Une personne lance un ballon invisible avec un son (WHOOSH !).","Le receveur l'attrape avec un son et le lance a quelqu'un d'autre.","Apres 1 min, ajoutez un 2e ballon : super lourd, patate chaude, rebondissant...","Defi : gardez tous les ballons en l'air simultanement !"],facilTip:"Fonctionne en ligne aussi — lancez avec un geste vers la camera et un son.",facilScript:"Nous avons un ballon invisible. Faites contact visuel, pointez, et faites un son — n'importe lequel. Plus c'est fort et bizarre, mieux c'est. Maintenant j'ajoute un deuxieme ballon — celui-la est SUPER lourd. Prets ?",materials:"Aucun",outcome:"Les participants se sentiront physiquement actives, mentalement presents et prets a s'engager pleinement."},
  {id:12,name:"Miroir",type:"Energizer",minPeople:6,maxPeople:40,duration:7,objective:["energy","get-to-know"],familiarity:["strangers","acquaintances","colleagues"],energy:"medium",online:true,space:["seated","limited","open","online"],description:"Les paires se refletent mutuellement dans des mouvements lents — sans chef designe au dernier tour.",instructions:["En paires. Face a face (ou via cameras en ligne).","Une personne guide des mouvements lents ; l'autre reflete exactement.","Apres 90 secondes, changez de roles.","Tour 3 : pas de chef — essayez de bouger comme un seul.","Debrief : qu'avez-vous ressenti en guidant, en suivant, en partageant le leadership ?"],facilTip:"Le troisieme tour sans chef est la magie. Une musique douce en fond amplifie l'effet.",facilScript:"Face a face. L'un de vous guide — bougez lentement, au ralenti. L'autre reflete chaque mouvement exactement. Apres 90 secondes je dis changez. Puis pour le dernier tour : pas de chef. Essayez de bouger comme un seul. Commençons.",materials:"Aucun (musique calme optionnelle)",outcome:"Les participants se sentiront dynamises et plus connectes aux personnes qui les entourent."},
  {id:14,name:"Ninja",type:"Energizer",minPeople:6,maxPeople:25,duration:10,objective:["energy"],familiarity:["acquaintances","colleagues"],energy:"high",online:false,space:["open"],description:"Un jeu d'elimination dramatique de poses figees et de frappes uniques — haute energie, fous rires garantis.",instructions:["En cercle. Sur 3-2-1-NINJA ! tout le monde saute dans une pose ninja figee.","Dans le sens des aiguilles d'une montre, chaque joueur fait UNE frappe vers la main d'un voisin.","La cible peut esquiver avec UN mouvement. Si touchee, cette main va dans le dos.","Deux mains perdues = elimine. Le dernier ninja debout gagne !"],facilTip:"Modelisez avec un maximum de serieux pour un maximum de rires.",facilScript:"En cercle. Sur mon compte de 3-2-1, sautez dans votre pose ninja la plus puissante et figez. Chaque personne fait UNE frappe vers la main d'un voisin. Il peut esquiver avec UN mouvement. Deux mains perdues = elimine. 3... 2... 1... NINJA !",materials:"Aucun",outcome:"Les participants se sentiront physiquement actives, mentalement presents et prets a s'engager pleinement."},
  {id:20,name:"Ho Ha He (Le Bucheron)",type:"Energizer",minPeople:8,maxPeople:40,duration:8,objective:["energy"],familiarity:["acquaintances","colleagues"],energy:"high",online:false,space:["limited","open"],description:"Un jeu en cercle de mimes precis et de sons synchronises — HO, HA, HE — qui devient de plus en plus rapide, fort et chaotique.",instructions:["En cercle. Une personne crie HO ! en mimant un mouvement de hache de haut en bas vers quelqu'un en face.","La personne ciblee repond : crie HA ! en levant les deux mains de bas en haut.","Les deux voisins crient HE ! et miment une coupe de chaque cote.","La personne ciblee devient le nouvel envoyeur. Accelerez a chaque round.","Elimination optionnelle : quiconque hesite ou se trompe est elimine."],facilTip:"Enseignez lentement d'abord — la chaine HO-HA-HE doit etre comprise avant d'accelerer. Encouragez le volume maximum.",facilScript:"Regardez bien — HO ! [mime de hache vers quelqu'un]. Cette personne : HA ! [mains qui montent]. Ses deux voisins : HE ! [coupe de chaque cote]. Puis ca recommence. Doucement d'abord... bien ! Maintenant plus vite. Plus fort. GO !",materials:"Aucun",outcome:"Les participants se sentiront physiquement actives, mentalement presents et prets a s'engager pleinement."},
  {id:16,name:"Tout le Monde Debout",type:"Energizer",minPeople:4,maxPeople:30,duration:5,objective:["energy"],familiarity:["acquaintances","colleagues"],energy:"high",online:false,space:["open"],description:"Des paires essaient de se lever ensemble dos a dos — puis elargissent progressivement aux groupes.",instructions:["Trouvez un partenaire. Asseyez-vous dos a dos, genoux plies, bras lies.","Essayez de vous lever ensemble SANS utiliser vos mains.","Une fois reussi, rejoignez une autre paire (groupe de 4) et reessayez.","Continuez a ajouter des personnes jusqu'au groupe entier.","Debrief : qu'est-ce qui a change ?"],facilTip:"Belle metaphore de l'interdependance. Verifiez les limitations de mobilite au prealable.",facilScript:"Dos a dos sur le sol, liez les bras, genoux plies. Votre defi : se lever ensemble — sans utiliser vos mains. Une fois debout, rejoignez une autre paire. Continuez a grandir. Voyons jusqu'ou nous arrivons !",materials:"Aucun (espace au sol necessaire)",outcome:"Les participants se sentiront physiquement actives, mentalement presents et prets a s'engager pleinement."},
  {id:21,name:"Tour de Presentation",type:"Icebreaker",minPeople:3,maxPeople:20,duration:15,objective:["get-to-know"],familiarity:["strangers","acquaintances"],energy:"low",online:true,space:["seated","limited","open","online"],description:"Le classique tour de presentations — enrichi d'une question ciblee. Fonctionne dans n'importe quel contexte.",instructions:["Demandez a chacun de se presenter : nom, d'ou il vient, ce qu'il fait.","Ajoutez une ou deux questions ciblees — quelque chose de personnel, prospectif ou reflexif.","Faites le tour. Pour 15+, fixez une limite de temps (ex. 60 secondes).","Invitez le groupe a noter les points communs ou les surprises."],facilTip:"La qualite de la question fait toute la difference. Visez quelque chose de personnel et reflechissant.",facilScript:"Prenons quelques minutes pour nous rencontrer. Partagez votre nom, d'ou vous venez — et [votre question]. Environ une minute chacun. Je commence : je m'appelle...",materials:"Aucun",outcome:"Les participants se sentiront plus a l'aise, decouvriront quelque chose de nouveau et creeront une connexion initiale."},
  {id:2,name:"Bingo Humain",type:"Icebreaker",minPeople:10,maxPeople:50,duration:15,objective:["get-to-know"],familiarity:["strangers","acquaintances"],energy:"medium",online:false,space:["limited","open"],description:"Les participants circulent pour trouver des personnes correspondant aux descriptions — une facon dynamique de decouvrir ce qui rend chacun unique.",instructions:["Distribuez des cartes bingo avec des traits comme parle 3 langues ou a vecu dans 3 pays.","Lancez un minuteur. Les participants circulent et posent des questions pour remplir leur carte.","Le premier a completer une ligne crie BINGO !","Debrief : partagez la chose la plus surprenante que vous avez decouverte."],facilTip:"Personnalisez les traits selon le contexte.",facilScript:"Vous avez chacun une carte bingo. Votre mission : trouvez quelqu'un qui correspond a chaque description et ecrivez son nom. Vous ne pouvez utiliser chaque personne qu'une seule fois ! Premier a completer une ligne crie BINGO. Vous avez 10 minutes — go !",materials:"Cartes bingo imprimees, stylos",outcome:"Les participants se sentiront plus a l'aise, decouvriront quelque chose de nouveau et creeront une connexion initiale."},
  {id:3,name:"4 Coins",type:"Icebreaker",minPeople:10,maxPeople:100,duration:10,objective:["get-to-know","energy"],familiarity:["strangers","acquaintances","colleagues"],energy:"medium",online:false,space:["open"],description:"Les participants se deplacent vers les coins de la salle selon leurs preferences — fait emerger similarites et differences de facon ludique.",instructions:["Etiquetez 4 coins (ex. Leve-tot / Couche-tard / Selon les jours / Les deux).","Posez une question et tout le monde marche vers son coin.","Les gens discutent brievement avec les autres dans leur coin (1 min).","Repetez 4-6 fois, en melangeant questions legeres et liees au travail."],facilTip:"Melangez des questions ludiques avec des questions significatives pour un echauffement complet.",facilScript:"Voyez les quatre coins de la salle ? Quand je lis une affirmation, allez dans le coin qui vous represente le mieux. Pas de bonne ou mauvaise reponse. Premiere question...",materials:"4 etiquettes de coins",outcome:"Les participants se sentiront plus a l'aise, decouvriront quelque chose de nouveau et arriveront energises."},
  {id:22,name:"La Ligne de Vie",type:"Icebreaker",minPeople:4,maxPeople:30,duration:20,objective:["get-to-know"],familiarity:["strangers","acquaintances","colleagues"],energy:"low",online:true,space:["seated","limited","open","online"],description:"En paires ou trios, les participants partagent l'histoire de leur vie — de leur naissance a aujourd'hui. L'un des exercices de connexion les plus puissants qui soit.",instructions:["En paires ou groupes de 3. Chaque personne partage son parcours de vie — moments cles, tournants, hauts et bas.","Optionnel : le narrateur et l'auditeur dessinent simultanement la ligne de vie sur papier.","Donnez 5-8 minutes par personne. L'auditeur peut poser une ou deux questions a la fin.","Invitez quelques volontaires a partager une chose qu'ils ont decouverte sur leur partenaire."],facilTip:"La vulnerabilite est contagieuse. Si vous modelisez une vraie ouverture dans vos instructions, la salle suivra.",facilScript:"Nous allons faire quelque chose d'un peu different. En paires, vous allez partager votre vie — de la naissance a aujourd'hui. Pas tout, juste ce qui vous semble important. Environ 7 minutes chacun. Votre partenaire ecoute pleinement. Trouvez votre partenaire.",materials:"Papier et stylos (optionnel)",outcome:"Les participants se sentiront plus a l'aise, decouvriront quelque chose de nouveau et creeront une connexion initiale."},
  {id:5,name:"L'Ile Deserte",type:"Icebreaker",minPeople:4,maxPeople:20,duration:10,objective:["get-to-know"],familiarity:["strangers","acquaintances"],energy:"low",online:true,space:["seated","limited","open","online"],description:"Naufrage sur une ile deserte pendant un mois — quels 3 objets emportez-vous ? Un grand classique qui revele la personnalite.",instructions:["Vous etes naufrage sur une ile deserte pendant un mois — 3 objets seulement. Que choisissez-vous ?","Donnez 2 minutes de reflexion individuelle.","Faites le tour — chaque personne partage ses 3 objets et pourquoi.","Debrief : notez les patterns — pratiques vs creatifs vs emotionnels."],facilTip:"Ajoutez une contrainte : un objet utile au groupe, un personnel, un surprenant.",facilScript:"Imaginez : vous etes naufrage sur une ile deserte pendant un mois. Vous pouvez emporter exactement 3 objets. Prenez 2 minutes pour decider. Puis nous ferons le tour.",materials:"Aucun",outcome:"Les participants se sentiront plus a l'aise, decouvriront quelque chose de nouveau et creeront une connexion initiale."},
  {id:4,name:"Mon Superpouvoir",type:"Icebreaker",minPeople:5,maxPeople:25,duration:10,objective:["get-to-know"],familiarity:["strangers","acquaintances","colleagues"],energy:"low",online:true,space:["seated","limited","open","online"],description:"Chaque personne identifie et partage une force unique — presentee comme son superpouvoir d'equipe.",instructions:["Question : Si vous deviez nommer un superpouvoir unique que vous apportez a une equipe, lequel serait-ce ?","Donnez 1 minute a chacun pour reflechir.","Faites le tour — chaque personne partage son superpouvoir en une phrase.","Optionnel : le groupe vote pour le combo d'equipe le plus puissant."],facilTip:"Cadrez-le legerement — certaines personnes sont genees de se mettre en avant.",facilScript:"Si vous aviez un superpouvoir — une force unique que vous apportez a une equipe — lequel serait-ce ? Prenez 1 minute. Ca peut etre serieux ou drole. Nous ferons le tour.",materials:"Aucun (post-its optionnels)",outcome:"Les participants se sentiront plus a l'aise, decouvriront quelque chose de nouveau et creeront une connexion initiale."},
  {id:23,name:"Partage d'Objet",type:"Icebreaker",minPeople:4,maxPeople:20,duration:10,objective:["get-to-know"],familiarity:["strangers","acquaintances","colleagues"],energy:"low",online:true,space:["seated","limited","open","online"],description:"Chaque personne apporte un objet significatif a la session et partage l'histoire derriere. Simple, personnel et etonnamment touchant.",instructions:["Demandez aux participants d'apporter un objet qui signifie quelque chose pour eux.","Faites le tour — chaque personne montre son objet et explique (30-60 secondes).","Invitez une ou deux reactions ou questions.","Debrief optionnel : quels patterns ont emerge ?"],facilTip:"Envoyez la consigne au moins 24h avant. Partagez votre propre objet en premier pour donner le ton.",facilScript:"Je vous avais demande d'apporter un objet qui signifie quelque chose pour vous. Faisons le tour. Montrez-le, dites-nous ce que c'est et pourquoi vous l'avez apporte. Environ 45 secondes chacun.",materials:"Les participants apportent leur propre objet (consigne pre-atelier requise)",outcome:"Les participants se sentiront plus a l'aise, decouvriront quelque chose de nouveau et creeront une connexion initiale."},
  {id:24,name:"Association de Mots",type:"Icebreaker",minPeople:2,maxPeople:5,duration:15,objective:["get-to-know"],familiarity:["strangers","acquaintances","colleagues"],energy:"low",online:true,space:["seated","limited","open","online"],description:"Tout le monde dit un mot que fait penser une personne — puis cette personne repond avec des histoires liees a chaque mot. Intime, revelateur et souvent surprenant.",instructions:["Concentrez-vous sur une personne a la fois. Tous les autres disent un mot que cette personne leur evoque.","La personne au centre partage une histoire ou reflexion liee a chaque mot.","Tournez jusqu'a ce que tout le monde soit passe.","Version etendue (30 min) : plus de mots et de narration approfondie."],facilTip:"Les mots que les gens choisissent revelent autant sur les locuteurs que sur la personne au centre.",facilScript:"Un exercice d'association de mots. Une personne est sur le siege chaud — tous les autres lui donnent un mot. Le premier qui vous vient. Puis la personne repond a chaque mot avec une histoire. Je commence sur le siege chaud.",materials:"Aucun",outcome:"Les participants se sentiront plus a l'aise, decouvriront quelque chose de nouveau et creeront une connexion initiale."},
  {id:25,name:"Questions Puissantes",type:"Icebreaker",minPeople:6,maxPeople:100,duration:15,objective:["get-to-know"],familiarity:["strangers","acquaintances","colleagues"],energy:"medium",online:false,space:["limited","open"],description:"Chaque personne formule une question puissante, puis circule pour poser et repondre avec differents partenaires.",instructions:["Expliquez ce qui rend une question puissante : ouverte, stimulante. Donnez un bon et un mauvais exemple.","Donnez 2 minutes pour ecrire sa question (post-it optionnel).","Tout le monde leve la main. Trouvez un partenaire, posez-vous vos questions et ecoutez vraiment.","Quand c'est termine, main levee et nouveau partenaire. Repetez 3-5 rounds.","Debrief : quelle etait la question la plus puissante ? Qu'est-ce qui vous a surpris ?"],facilTip:"Mauvais exemple : Que faites-vous ? Bon exemple : Quelle conviction avez-vous avec laquelle la plupart desaccorderaient ?",facilScript:"Tout le monde ecrit une question puissante — quelque chose qui fait reflechir. Pas d'ou venez-vous. Deux minutes. Levez la main. Trouvez quelqu'un. Posez-vous vos questions et ecoutez. Quand fini, main levee. Go !",materials:"Post-its et stylos (optionnel)",outcome:"Les participants se sentiront plus a l'aise, decouvriront quelque chose de nouveau et creeront une connexion initiale."},
  {id:26,name:"La Ligne Silencieuse",type:"Icebreaker",minPeople:8,maxPeople:200,duration:10,objective:["get-to-know"],familiarity:["strangers","acquaintances","colleagues"],energy:"medium",online:false,space:["limited","open"],description:"Les participants prennent silencieusement position sur un spectre entre deux extremes — puis expliquent leur choix.",instructions:["Tracez une ligne imaginaire : un bout = Tout a fait d'accord, l'autre = Pas du tout d'accord.","Lisez une affirmation. Tout le monde se place silencieusement sur le spectre.","Invitez quelques personnes a expliquer leur choix.","Repetez 4-6 fois, en melangeant questions legeres et liees au theme."],facilTip:"Le silence avant de partager est cle — il previent la pensee de groupe.",facilScript:"Imaginez une ligne — Tout a fait d'accord de ce cote, Pas du tout d'accord de l'autre. Quand je lis une affirmation, trouvez votre position. Silencieusement. Premiere affirmation...",materials:"Aucun (ruban adhesif optionnel)",outcome:"Les participants se sentiront plus a l'aise, decouvriront quelque chose de nouveau et creeront une connexion initiale."},
  {id:27,name:"Les Mains Silencieuses",type:"Icebreaker",minPeople:6,maxPeople:30,duration:8,objective:["get-to-know"],familiarity:["strangers","acquaintances","colleagues"],energy:"low",online:false,space:["seated","limited","open"],description:"L'exercice de spectre adapte a tout contexte — les participants repondent avec la hauteur de leur main. Pour les grandes salles assises, preferez La Ligne Silencieuse.",instructions:["Expliquez l'echelle : main completement levee = Tout a fait d'accord, baissee = Pas du tout d'accord.","Lisez une affirmation. Tout le monde place silencieusement sa main a sa position.","Invitez quelques personnes a expliquer.","Repetez 4-6 fois."],facilTip:"En restaurant ou contexte formel, c'est la facon la plus elegante d'animer un spectre.",facilScript:"Un spectre rapide — avec vos mains. Completement levee = tout a fait d'accord. Baissee = pas du tout. Entre les deux, c'est votre position honnete. Silencieusement. Prets ?",materials:"Aucun",outcome:"Les participants se sentiront plus a l'aise, decouvriront quelque chose de nouveau et creeront une connexion initiale."},
  {id:28,name:"Adjectif + Prenom",type:"Icebreaker",minPeople:5,maxPeople:15,duration:10,objective:["get-to-know"],familiarity:["strangers","acquaintances"],energy:"medium",online:false,space:["seated","limited","open"],description:"Chaque personne associe son prenom a un adjectif alliteratif et un mime — le groupe memorise les combos, puis un jeu de vitesse commence.",instructions:["Chaque personne choisit un adjectif commencant par la meme lettre que son prenom, ajoute un mime et se presente.","Faites le tour — apres chaque personne, tout le groupe repete tous les combos precedents.","Une fois tout le monde presente, demarrez le jeu : dites votre combo puis celui de quelqu'un d'autre.","Accelerez. Elimination optionnelle pour hesitations ou erreurs."],facilTip:"Ne sautez pas le tour de memorisation — c'est la base qui fait fonctionner le jeu.",facilScript:"Pensez a un adjectif commencant par la meme lettre que votre prenom — et un mime. Je commence : Dynamique Dinh [mime]. Maintenant tout le monde repete. Puis la personne suivante — et nous repetons tout avant d'ajouter le sien. Prets ?",materials:"Aucun",outcome:"Les participants se sentiront plus a l'aise, decouvriront quelque chose de nouveau et creeront une connexion initiale."},
]
};

const STORAGE_KEY = "movers_favourites";
const LANG_KEY = "movers_lang";

function useFavourites() {
  const [favs, setFavs] = useState([]);
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    (async () => {
      try { const res = await window.storage.get(STORAGE_KEY); if (res && res.value) setFavs(JSON.parse(res.value)); } catch(e) {}
      setLoaded(true);
    })();
  }, []);
  const toggle = async (id) => {
    const next = favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id];
    setFavs(next);
    try { await window.storage.set(STORAGE_KEY, JSON.stringify(next)); } catch(e) {}
  };
  return { favs, toggle, loaded };
}

export default function App() {
  useGlobalStyles();
  const [lang, setLang] = useState("en");
  const [view, setView] = useState("home");
  const [results, setResults] = useState([]);
  const [selected, setSelected] = useState(null);
  const [prevView, setPrevView] = useState(null);
  const { favs, toggle, loaded } = useFavourites();
  const t = T[lang];
  const acts = ACTIVITIES[lang];

  const go = (to) => { setPrevView(view); setView(to); };
  const applyFilters = (f) => {
    let list = acts;
    if (f.people) { const n = parseInt(f.people); list = list.filter(a => n >= a.minPeople && n <= a.maxPeople); }
    if (f.duration) list = list.filter(a => a.duration <= parseInt(f.duration));
    if (f.objective) list = list.filter(a => a.objective.includes(f.objective));
    if (f.familiarity) list = list.filter(a => a.familiarity.includes(f.familiarity));
    if (f.space) list = list.filter(a => a.space.includes(f.space));
    if (f.format === "online") list = list.filter(a => a.online);
    setResults(list); go("results");
  };
  const openActivity = (a) => { setSelected(a); setPrevView(view); setView("detail"); };
  const back = () => { setView(prevView || "home"); setPrevView(null); };
  const favList = acts.filter(a => favs.includes(a.id));

  const LangToggle = () => (
    <div style={{display:"flex",gap:4}}>
      {["en","fr"].map(l => (
        <button key={l} onClick={()=>setLang(l)} style={{background:lang===l?C.red:"transparent",border:`1.5px solid ${lang===l?C.red:C.border}`,borderRadius:20,padding:"4px 10px",cursor:"pointer",color:lang===l?"#fff":C.muted,fontSize:12,fontWeight:700}}>
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <div style={{minHeight:"100vh",background:C.cream,fontFamily:"'DM Sans','Segoe UI',sans-serif",color:C.dark}}>
      <div className="no-print" style={{background:C.cream,borderBottom:`1px solid ${C.border}`,position:"sticky",top:0,zIndex:10}}>
        <div style={{maxWidth:390,margin:"0 auto",padding:"10px 16px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
          <div style={{width:70}}>
            {view !== "home" && <button onClick={back} style={{background:"none",border:`1px solid ${C.border}`,color:C.mid,borderRadius:20,padding:"6px 12px",cursor:"pointer",fontSize:12,fontWeight:600}}>{t.back}</button>}
          </div>
          <span style={{fontWeight:900,fontSize:15,color:C.red,textAlign:"center"}}>{t.appTitle}</span>
          <LangToggle/>
        </div>
      </div>

      <div style={{maxWidth:390,margin:"0 auto",padding:"0 16px 60px"}}>
        {view === "home" && (
          <div>
            <div style={{textAlign:"center",padding:"36px 0 28px"}}>
              <h1 style={{margin:0,fontSize:26,fontWeight:900,letterSpacing:-0.8,color:C.dark,lineHeight:1.3}}>
                {t.headline1}<br/>
                <span style={{color:C.red}}>{t.headline2}</span> {t.headline3} <span style={{color:C.teal}}>{t.headline4}</span>
              </h1>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:12}}>
              <HomeCard emoji="🎯" title={t.filterTitle} subtitle={t.filterSub} tag={t.filterTag} tagColor={C.red} bg={C.redLight} border={`${C.red}30`} titleColor={C.red} onClick={() => go("filter")}/>
              <HomeCard emoji="📚" title={t.browseTitle} subtitle={t.browseSub(acts.length)} bg={C.tealLight} border={`${C.teal}30`} titleColor={C.teal} onClick={() => go("directory")}/>
              <HomeCard emoji="❤️" title={t.favTitle(loaded ? favList.length : 0)} subtitle={favList.length === 0 ? t.favSubEmpty : favList.map(a => a.name).join(", ")} bg="#fff5f5" border={`${C.red}20`} titleColor={C.red} onClick={() => go("favourites")}/>
              <a href="mailto:dinhlong.pham93@gmail.com?subject=Movers Companion — Feedback & Suggestions" style={{background:"none",border:`1.5px solid ${C.border}`,borderRadius:20,padding:"16px 22px",textAlign:"center",color:C.mid,width:"100%",textDecoration:"none",display:"block",boxSizing:"border-box"}}>
                <div style={{fontSize:16,marginBottom:4}}>💬</div>
                <div style={{fontWeight:700,fontSize:14,marginBottom:2,color:C.dark}}>{t.feedbackTitle}</div>
                <div style={{fontSize:12}}>{t.feedbackSub}</div>
              </a>
            </div>
          </div>
        )}

        {view === "filter" && <FilterFlow t={t} onApply={applyFilters}/>}

        {view === "results" && (
          <div style={{paddingTop:28}}>
            <h2 style={{margin:"0 0 4px",fontSize:20,fontWeight:900}}>{results.length > 0 ? t.activities(results.length) : t.noMatchResults}</h2>
            <p style={{margin:"0 0 20px",color:C.muted,fontSize:13}}>{results.length > 0 ? t.tapToSee : t.adjustFilters}</p>
            {results.length === 0 ? <EmptyState t={t} onRetry={() => go("filter")}/> : <ActivityList activities={results} onSelect={openActivity} favs={favs} onToggleFav={toggle} t={t} lang={lang}/>}
          </div>
        )}

        {view === "directory" && <DirectoryView activities={acts} onSelect={openActivity} favs={favs} onToggleFav={toggle} t={t} lang={lang}/>}

        {view === "favourites" && (
          <div style={{paddingTop:28}}>
            <h2 style={{margin:"0 0 4px",fontSize:20,fontWeight:900}}>{t.myFavourites}</h2>
            <p style={{margin:"0 0 20px",color:C.muted,fontSize:13}}>{favList.length === 0 ? t.favNone : t.saved(favList.length)}</p>
            {favList.length === 0 ? (
              <div style={{textAlign:"center",padding:"48px 0",color:C.muted}}>
                <div style={{fontSize:44,marginBottom:14}}>♡</div>
                <p style={{fontSize:15}}>{t.favEmpty}</p>
              </div>
            ) : <ActivityList activities={favList} onSelect={openActivity} favs={favs} onToggleFav={toggle} t={t} lang={lang}/>}
          </div>
        )}

        {view === "detail" && selected && <ActivityDetail activity={selected} isFav={favs.includes(selected.id)} onToggleFav={() => toggle(selected.id)} t={t} lang={lang}/>}
      </div>
    </div>
  );
}

function HomeCard({emoji,title,subtitle,onClick,bg,border,tag,tagColor,titleColor}) {
  const [hover,setHover] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{background:hover?bg.replace("f6","ee").replace("f0","e8").replace("f5","ee"):bg,border:`1.5px solid ${border}`,borderRadius:20,padding:"20px 18px",cursor:"pointer",textAlign:"left",color:C.dark,width:"100%",transition:"all 0.2s",position:"relative"}}>
      {tag && <div style={{position:"absolute",top:14,right:14,background:`${tagColor}18`,border:`1px solid ${tagColor}40`,color:tagColor,borderRadius:20,padding:"2px 10px",fontSize:11,fontWeight:700}}>{tag}</div>}
      <div style={{fontSize:24,marginBottom:8}}>{emoji}</div>
      <div style={{fontSize:16,fontWeight:900,marginBottom:4,color:titleColor||C.dark}}>{title}</div>
      <div style={{color:C.muted,fontSize:13}}>{subtitle}</div>
    </button>
  );
}

function FilterFlow({t, onApply}) {
  const [step,setStep] = useState(0);
  const [filters,setFilters] = useState({people:"",duration:"",objective:"",familiarity:"",space:"",format:""});
  const steps = [
    {key:"people",emoji:"👥",label:t.q1,options:t.q1o},
    {key:"familiarity",emoji:"🤝",label:t.q2,options:t.q2o},
    {key:"objective",emoji:"🎯",label:t.q3,options:t.q3o},
    {key:"duration",emoji:"⏱️",label:t.q4,options:t.q4o},
    {key:"space",emoji:"📍",label:t.q5,options:t.q5o},
  ];
  const current = steps[step];
  const pct = Math.round((step/steps.length)*100);
  const select = (val) => {
    const nf = {...filters,[current.key]:val};
    if (current.key === "space" && val === "online") nf.format = "online";
    setFilters(nf);
    if (step < steps.length-1) setStep(s=>s+1);
    else onApply(nf);
  };
  return (
    <div style={{paddingTop:28}}>
      <div style={{display:"flex",justifyContent:"space-between",marginBottom:6}}>
        <span style={{fontSize:12,color:C.muted}}>{t.step(step+1,steps.length)}</span>
        <span style={{fontSize:12,color:C.muted}}>{pct}%</span>
      </div>
      <div style={{height:5,background:C.border,borderRadius:4,marginBottom:32,overflow:"hidden"}}>
        <div style={{height:"100%",width:`${pct}%`,background:C.red,borderRadius:4,transition:"width 0.3s"}}/>
      </div>
      <div style={{fontSize:30,marginBottom:8}}>{current.emoji}</div>
      <h2 style={{margin:"0 0 22px",fontSize:22,fontWeight:900}}>{current.label}</h2>
      <div style={{display:"flex",flexDirection:"column",gap:10}}>
        {current.options.map(opt => (
          <button key={opt.value} onClick={()=>select(opt.value)}
            onMouseEnter={e=>{e.currentTarget.style.background=C.redLight;e.currentTarget.style.borderColor=`${C.red}60`;e.currentTarget.style.color=C.red;}}
            onMouseLeave={e=>{e.currentTarget.style.background="#fff";e.currentTarget.style.borderColor=C.border;e.currentTarget.style.color=C.dark;}}
            style={{background:"#fff",border:`1.5px solid ${C.border}`,borderRadius:14,padding:"14px 18px",cursor:"pointer",color:C.dark,textAlign:"left",display:"flex",justifyContent:"space-between",alignItems:"center",transition:"all 0.15s"}}>
            <div>
              <div style={{fontSize:15,fontWeight:700}}>{opt.label}</div>
              {opt.sub && <div style={{fontSize:12,color:C.muted,marginTop:2}}>{opt.sub}</div>}
            </div>
            <span style={{color:C.border,fontSize:16}}>→</span>
          </button>
        ))}
      </div>
      <button onClick={()=>onApply(filters)} style={{marginTop:20,background:"none",border:"none",color:C.muted,cursor:"pointer",fontSize:13,width:"100%",textAlign:"center"}}>{t.skipFilters}</button>
    </div>
  );
}

function DirectoryView({activities, onSelect, favs, onToggleFav, t, lang}) {
  const [typeTab, setTypeTab] = useState("All");
  const [peopleFilter, setPeopleFilter] = useState("");
  const PEOPLE_OPTIONS = [{value:"",label:t.anySize},{value:"5",label:"≤5"},{value:"15",label:"6-15"},{value:"30",label:"16-30"},{value:"60",label:"31+"}];
  const filtered = activities.filter(a => {
    if (typeTab !== "All" && a.type !== typeTab) return false;
    if (peopleFilter) { const n = parseInt(peopleFilter); return n >= a.minPeople && n <= a.maxPeople; }
    return true;
  });
  const chip = (active, color) => ({background:active?color:"transparent",border:`1.5px solid ${active?color:C.border}`,borderRadius:20,padding:"6px 12px",cursor:"pointer",color:active?"#fff":C.mid,fontSize:12,fontWeight:700,whiteSpace:"nowrap"});
  return (
    <div style={{paddingTop:28}}>
      <h2 style={{margin:"0 0 14px",fontSize:20,fontWeight:900}}>{t.allActivities}</h2>
      <div style={{display:"flex",gap:6,marginBottom:10,flexWrap:"wrap"}}>
        {[{key:"All",label:t.all(activities.length),color:C.dark},{key:"Icebreaker",label:t.icebreakers(activities.filter(a=>a.type==="Icebreaker").length),color:C.teal},{key:"Energizer",label:t.energizers(activities.filter(a=>a.type==="Energizer").length),color:C.red}].map(tab => (
          <button key={tab.key} onClick={() => setTypeTab(tab.key)} style={chip(typeTab===tab.key,tab.color)}>{tab.label}</button>
        ))}
      </div>
      <div style={{display:"flex",gap:6,marginBottom:18,flexWrap:"wrap",alignItems:"center"}}>
        <span style={{fontSize:12,color:C.muted,fontWeight:600,paddingRight:2}}>👥</span>
        {PEOPLE_OPTIONS.map(o => (
          <button key={o.value} onClick={() => setPeopleFilter(o.value)} style={chip(peopleFilter===o.value,C.dark)}>{o.label}</button>
        ))}
      </div>
      <p style={{margin:"0 0 14px",fontSize:12,color:C.muted}}>{t.activities(filtered.length)}</p>
      {filtered.length === 0
        ? <div style={{textAlign:"center",padding:"40px 0",color:C.muted}}><div style={{fontSize:40,marginBottom:12}}>🔍</div><p>{t.noMatch}</p></div>
        : <ActivityList activities={filtered} onSelect={onSelect} favs={favs} onToggleFav={onToggleFav} t={t} lang={lang}/>}
    </div>
  );
}

function ActivityList({activities,onSelect,favs,onToggleFav,t,lang}) {
  return <div style={{display:"flex",flexDirection:"column",gap:12,paddingBottom:20}}>{activities.map(a=><ActivityCard key={a.id} activity={a} onClick={()=>onSelect(a)} isFav={favs.includes(a.id)} onToggleFav={()=>onToggleFav(a.id)} t={t} lang={lang}/>)}</div>;
}

function ActivityCard({activity,onClick,isFav,onToggleFav,t,lang}) {
  const [hover,setHover] = useState(false);
  const tp = TYPE[activity.type]; const en = ENERGY[activity.energy];
  const typeLabel = TYPE_LABEL[lang][activity.type];
  return (
    <div style={{position:"relative"}}>
      <button onClick={onClick} onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
        style={{background:hover?tp.lightBg:"#fff",border:`1.5px solid ${hover?tp.color+"50":C.border}`,borderRadius:18,padding:"16px 18px",cursor:"pointer",textAlign:"left",color:C.dark,width:"100%",transition:"all 0.18s",boxShadow:hover?`0 4px 16px ${tp.color}18`:"none"}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",marginBottom:10}}>
          <span style={{background:tp.bg,border:`1px solid ${tp.color}40`,color:tp.color,borderRadius:20,padding:"3px 11px",fontSize:11,fontWeight:800}}>{typeLabel}</span>
          <div style={{display:"flex",gap:6,alignItems:"center",paddingRight:24}}>
            {activity.online && <span style={{fontSize:11,color:"#e07b00",background:"#fff8e6",border:"1px solid #e07b0030",borderRadius:20,padding:"3px 8px",fontWeight:700}}>{t.onlineOK}</span>}
            <span style={{fontSize:12,color:C.muted}}>⏱ {activity.duration}{t.min}</span>
          </div>
        </div>
        <div style={{fontSize:15,fontWeight:900,marginBottom:6}}>{activity.name}</div>
        <p style={{margin:"0 0 10px",color:C.mid,fontSize:13,lineHeight:1.55}}>{activity.description}</p>
        <div style={{margin:"0 0 12px",background:tp.lightBg,borderLeft:`3px solid ${tp.color}`,borderRadius:"0 8px 8px 0",padding:"8px 12px",fontSize:12,color:C.mid,lineHeight:1.5}}>
          ✨ {activity.outcome}
        </div>
        <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
          <span style={{fontSize:11,color:C.muted,background:C.cream,border:`1px solid ${C.border}`,borderRadius:20,padding:"3px 10px"}}>👥 {activity.minPeople}–{activity.maxPeople}</span>
          <span style={{fontSize:11,color:en.color,background:en.color+"15",border:`1px solid ${en.color}30`,borderRadius:20,padding:"3px 10px",fontWeight:600}}>{en.emoji} {en.label[lang]}</span>
          {activity.space.map(s=>(
            <span key={s} style={{fontSize:11,color:C.muted,background:C.cream,border:`1px solid ${C.border}`,borderRadius:20,padding:"3px 10px"}}>{SPACE_META[lang][s].emoji} {SPACE_META[lang][s].label}</span>
          ))}
        </div>
      </button>
      <button onClick={e=>{e.stopPropagation();onToggleFav();}} style={{position:"absolute",top:12,right:12,background:"none",border:"none",cursor:"pointer",fontSize:20,lineHeight:1,padding:4,zIndex:2}}>
        {isFav ? "❤️" : "🤍"}
      </button>
    </div>
  );
}

function ActivityDetail({activity,isFav,onToggleFav,t,lang}) {
  const tp = TYPE[activity.type]; const en = ENERGY[activity.energy];
  const [copied,setCopied] = useState(false);
  const typeLabel = TYPE_LABEL[lang][activity.type];

  const copyToClipboard = async () => {
    const txt = [`${activity.name}`,``,`${activity.duration} ${t.min} | 👥 ${activity.minPeople}-${activity.maxPeople} ${t.people} | ${en.label[lang]}`,`${t.materials}: ${activity.materials}`,``,activity.description,``,activity.instructions.map((s,i)=>`${i+1}. ${s}`).join("\n"),``,activity.facilScript,``,activity.facilTip,``,activity.outcome,``,`— Movers Companion`].join("\n");
    try { await navigator.clipboard.writeText(txt); } catch(e) { const ta=document.createElement("textarea");ta.value=txt;ta.style.cssText="position:fixed;opacity:0;top:0;left:0;";document.body.appendChild(ta);ta.focus();ta.select();document.execCommand("copy");document.body.removeChild(ta); }
    setCopied(true); setTimeout(()=>setCopied(false),2000);
  };

  const printAsPDF = () => {
    const content = [`${activity.name}`,``,`${activity.duration} ${t.min} | ${activity.minPeople}-${activity.maxPeople} ${t.people} | ${en.label[lang]}`,`${t.materials}: ${activity.materials}`,``,`-- ${t.howToRun.toUpperCase()} --`,activity.instructions.map((s,i)=>`${i+1}. ${s}`).join("\n"),``,`-- ${t.facilScript.toUpperCase()} --`,activity.facilScript,``,`-- ${t.facilTip.toUpperCase()} --`,activity.facilTip,``,`-- ${t.outcome.toUpperCase()} --`,activity.outcome,``,`— Movers Companion`].join("\n");
    const ta=document.createElement("textarea");ta.value=content;ta.style.cssText="position:fixed;top:0;left:0;width:100%;height:100%;z-index:9999;font-family:monospace;font-size:13px;padding:24px;box-sizing:border-box;background:#fff;color:#000;border:none;resize:none;";
    const closeBtn=document.createElement("button");closeBtn.innerText=t.close;closeBtn.style.cssText="position:fixed;top:16px;right:16px;z-index:10000;background:#fa4e50;color:#fff;border:none;border-radius:20px;padding:8px 18px;font-size:14px;font-weight:700;cursor:pointer;";
    const printBtn=document.createElement("button");printBtn.innerText=t.print;printBtn.style.cssText="position:fixed;top:16px;right:130px;z-index:10000;background:#009c93;color:#fff;border:none;border-radius:20px;padding:8px 18px;font-size:14px;font-weight:700;cursor:pointer;";
    document.body.appendChild(ta);document.body.appendChild(closeBtn);document.body.appendChild(printBtn);ta.select();
    closeBtn.onclick=()=>{document.body.removeChild(ta);document.body.removeChild(closeBtn);document.body.removeChild(printBtn);};
    printBtn.onclick=()=>window.print();
  };

  return (
    <div style={{paddingTop:28}}>
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:14}}>
        <span style={{background:tp.bg,border:`1px solid ${tp.color}40`,color:tp.color,borderRadius:20,padding:"4px 14px",fontSize:12,fontWeight:800}}>{typeLabel}</span>
        <button onClick={onToggleFav} style={{background:"none",border:"none",cursor:"pointer",fontSize:24,padding:4}} className="no-print">{isFav?"❤️":"🤍"}</button>
      </div>
      <h1 style={{margin:"0 0 8px",fontSize:24,fontWeight:900,lineHeight:1.2}}>{activity.name}</h1>
      <p style={{margin:"0 0 20px",color:C.mid,fontSize:14,lineHeight:1.65}}>{activity.description}</p>
      <div style={{display:"flex",gap:8,flexWrap:"wrap",marginBottom:24}}>
        {[{icon:"⏱",label:`${activity.duration} ${t.min}`},{icon:"👥",label:`${activity.minPeople}–${activity.maxPeople} ${t.people}`},{icon:en.emoji,label:en.label[lang],color:en.color,bg:en.color+"12"},{icon:"🎒",label:activity.materials}].map((c,i)=>(
          <div key={i} style={{background:c.bg||C.cream,border:`1px solid ${(c.color||C.border)}30`,borderRadius:12,padding:"8px 12px",fontSize:12,color:c.color||C.mid,display:"flex",alignItems:"center",gap:6,fontWeight:600}}>{c.icon} {c.label}</div>
        ))}
        {activity.space.map(s=>(
          <div key={s} style={{background:C.cream,border:`1px solid ${C.border}`,borderRadius:12,padding:"8px 12px",fontSize:12,color:C.mid,display:"flex",alignItems:"center",gap:6,fontWeight:600}}>{SPACE_META[lang][s].emoji} {SPACE_META[lang][s].label}</div>
        ))}
      </div>
      <div className="no-print" style={{display:"flex",gap:10,marginBottom:28}}>
        <button onClick={copyToClipboard} style={{flex:1,background:copied?"#e6f7f6":"#fff",border:`1.5px solid ${copied?C.teal:C.border}`,borderRadius:12,padding:"11px 16px",cursor:"pointer",fontSize:13,fontWeight:700,color:copied?C.teal:C.mid,transition:"all 0.2s"}}>{copied?t.copied:t.copy}</button>
        <button onClick={printAsPDF} style={{flex:1,background:"#fff",border:`1.5px solid ${C.border}`,borderRadius:12,padding:"11px 16px",cursor:"pointer",fontSize:13,fontWeight:700,color:C.mid}}>{t.savePDF}</button>
      </div>
      <Section title={t.howToRun}>
        {activity.instructions.map((s,i)=>(
          <div key={i} style={{display:"flex",gap:14,marginBottom:16}}>
            <div style={{minWidth:28,height:28,borderRadius:"50%",background:tp.color,color:"#fff",display:"flex",alignItems:"center",justifyContent:"center",fontSize:13,fontWeight:900,flexShrink:0}}>{i+1}</div>
            <div style={{color:C.mid,fontSize:14,lineHeight:1.65,paddingTop:4}}>{s}</div>
          </div>
        ))}
      </Section>
      <Section title={t.facilScript}>
        <div style={{background:"#fffff4",border:`1.5px solid ${C.border}`,borderLeft:"4px solid #e07b00",borderRadius:"0 12px 12px 0",padding:"14px 18px",fontSize:14,color:C.mid,lineHeight:1.8,fontStyle:"italic"}}>🎤 {activity.facilScript}</div>
      </Section>
      <Section title={t.facilTip}>
        <div style={{background:tp.lightBg,border:`1.5px solid ${tp.color}30`,borderLeft:`4px solid ${tp.color}`,borderRadius:"0 12px 12px 0",padding:"14px 18px",fontSize:14,color:C.mid,lineHeight:1.65}}>💡 {activity.facilTip}</div>
      </Section>
      <Section title={t.outcome}>
        <div style={{background:C.cream,border:`1.5px solid ${C.border}`,borderLeft:`4px solid ${C.teal}`,borderRadius:"0 12px 12px 0",padding:"14px 18px",fontSize:14,color:C.mid,lineHeight:1.65}}>✨ {activity.outcome}</div>
      </Section>
    </div>
  );
}

function Section({title,children}) {
  return <div style={{marginBottom:28}}><h3 style={{margin:"0 0 14px",fontSize:11,fontWeight:800,color:C.muted,textTransform:"uppercase",letterSpacing:1.2}}>{title}</h3>{children}</div>;
}

function EmptyState({onRetry,t}) {
  return (
    <div style={{textAlign:"center",padding:"48px 0",color:C.muted}}>
      <div style={{fontSize:44,marginBottom:14}}>🔍</div>
      <p style={{margin:"0 0 20px",fontSize:15}}>{t.noMatch}</p>
      <button onClick={onRetry} style={{background:C.red,border:"none",color:"#fff",borderRadius:20,padding:"11px 24px",cursor:"pointer",fontSize:14,fontWeight:800}}>{t.adjustBtn}</button>
    </div>
  );
}

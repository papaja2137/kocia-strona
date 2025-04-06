// Dane o kotach
const catsData = [
    {
        id: 1,
        name: "Maine Coon",
        image: "assets/images/pobrane.webp",
        lifespan: "12-15 lat",
        colors: ["Brązowy tabby", "Czarny", "Biały", "Rudy", "Kremowy"],
        diseases: ["Kardiomiopatia przerostowa", "Dysplazja stawu biodrowego", "Niedobór enzymów trzustkowych"],
        size: "Duży",
        additionalInfo: "Maine Coon to jedna z największych ras kotów domowych. Charakteryzują się przyjaznym usposobieniem, są towarzyskie i inteligentne. Posiadają gęste, długie futro, a zimą ich sierść staje się jeszcze gęstsza. Mają charakterystyczne pędzelki na końcach uszu."
    },
    {
        id: 2,
        name: "Brytyjski krótkowłosy",
        image: "assets/images/pobrane (1).webp",
        lifespan: "14-20 lat",
        colors: ["Niebieski", "Czarny", "Biały", "Czekoladowy", "Lilowy", "Rudy"],
        diseases: ["Kardiomiopatia przerostowa", "Choroba wielotorbielowata nerek", "Problemy z moczem"],
        size: "Średni",
        additionalInfo: "Koty brytyjskie krótkowłose mają charakterystyczną okrągłą twarz i duże, okrągłe oczy. Są spokojne, niezależne i zazwyczaj dobrze dogadują się z dziećmi. Ich sierść jest gęsta, ale krótka i łatwa w pielęgnacji."
    },
    {
        id: 3,
        name: "Perski",
        image: "assets/images/pobrane.jpg",
        lifespan: "10-17 lat",
        colors: ["Biały", "Czarny", "Niebieski", "Kremowy", "Czerwony", "Srebrny"],
        diseases: ["Zespół płaskiej twarzy", "Choroba wielotorbielowata nerek", "Problemy z oddychaniem"],
        size: "Średni",
        additionalInfo: "Koty perskie mają charakterystycznie spłaszczoną twarz i długą, gęstą sierść. Są spokojne, delikatne i lubią ciszę. Wymagają codziennej pielęgnacji futra, aby uniknąć kołtunów."
    },
    {
        id: 4,
        name: "Sfinks kanadyjski",
        image: "assets/images/pobrane (1).jpg",
        lifespan: "8-14 lat",
        colors: ["Nagi", "Różne odcienie skóry"],
        diseases: ["Kardiomiopatia przerostowa", "Problemy skórne", "Nadwrażliwość na słońce"],
        size: "Mały do średniego",
        additionalInfo: "Sfinks kanadyjski to kot bezwłosy, choć czasem może mieć delikatny meszek. Jest bardzo towarzyski, energiczny i uwielbia ciepło. Ze względu na brak futra wymaga ochrony przed słońcem i niskimi temperaturami."
    },
    {
        id: 5,
        name: "Syberyjski",
        image: "assets/images/pobrane (3).jpg",
        lifespan: "11-18 lat",
        colors: ["Brązowy tabby", "Czarny", "Biały", "Rudy", "Niebieski"],
        diseases: ["Hipertroficzna kardiomiopatia", "Dysplazja stawu biodrowego"],
        size: "Duży",
        additionalInfo: "Koty syberyjskie pochodzą z Rosji i są przystosowane do zimnego klimatu. Mają gęste, wodoodporne futro i są dobrymi łowcami. Są aktywne, inteligentne i przywiązują się do właścicieli."
    },
    {
        id: 6,
        name: "Ragdoll",
        image: "assets/images/pobrane (2).jpg",
        lifespan: "12-17 lat",
        colors: ["Seal point", "Blue point", "Chocolate point", "Lilac point", "Flame point"],
        diseases: ["Kardiomiopatia przerostowa", "Choroba wielotorbielowata nerek", "Dysplazja stawu biodrowego"],
        size: "Duży",
        additionalInfo: "Ragdoll to rasa dużych, łagodnych kotów, które mają tendencję do rozluźniania mięśni, gdy są podnoszone (stąd nazwa). Są bardzo spokojne, ciche i przywiązują się do właścicieli. Mają półdługie futro i niebieskie oczy."
    },
    {
        id: 7,
        name: "Bengalski",
        image: "assets/images/pobrane (4).jpg",
        lifespan: "12-16 lat",
        colors: ["Spotted (cętkowany)", "Marble (marmurkowy)", "Snow (śnieżny)"],
        diseases: ["Choroba wielotorbielowata nerek", "Kardiomiopatia przerostowa", "Postępujący zanik siatkówki"],
        size: "Średni do dużego",
        additionalInfo: "Koty bengalskie mają charakterystyczne cętki lub marmurkowe wzory na futrze, przypominające dzikie koty. Są bardzo aktywne, inteligentne i uwielbiają wspinaczkę. Niektóre bengale lubią wodę i mogą nawet pływać."
    },
    {
        id: 8,
        name: "Syjamski",
        image: "assets/images/pobrane (5).jpg",
        lifespan: "15-20 lat",
        colors: ["Seal point", "Blue point", "Chocolate point", "Lilac point"],
        diseases: ["Zez", "Amyloidoza", "Astma"],
        size: "Średni",
        additionalInfo: "Koty syjamskie mają charakterystyczne punktowe umaszczenie i niebieskie oczy. Są bardzo towarzyskie, gadatliwe i inteligentne. Przywiązują się silnie do właścicieli i wymagają dużo uwagi."
    },
    {
        id: 9,
        name: "Rosyjski niebieski",
        image: "assets/images/pobrane (6).jpg",
        lifespan: "15-20 lat",
        colors: ["Niebieski"],
        diseases: ["Choroba dziąseł", "Rzadko choruje"],
        size: "Średni",
        additionalInfo: "Rosyjski niebieski to elegancki kot o charakterystycznej srebrzysto-niebieskiej sierści i zielonych oczach. Jest spokojny, inteligentny i nieco nieśmiały wobec obcych. Ma krótkie, gęste futro, które prawie nie gubi włosów."
    },
    {
        id: 10,
        name: "Devon Rex",
        image: "assets/images/pobrane (7).jpg",
        lifespan: "10-15 lat",
        colors: ["Wszystkie kolory i wzory"],
        diseases: ["Dystrofia mięśniowa", "Niedobór enzymu pirydoksynowego", "Łysienie"],
        size: "Mały do średniego",
        additionalInfo: "Devon Rex ma charakterystyczne, kręcone, bardzo krótkie futro i duże uszy. Jest bardzo aktywny, zabawny i towarzyski. Z wyglądu przypomina nieco elfa lub kosmitę."
    }
];

// Eksportuje dane
if (typeof module !== 'undefined') {
    module.exports = catsData;
} 
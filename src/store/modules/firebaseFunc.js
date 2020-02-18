import axios from "axios";

const state = {
    timezones: ["Standart (GMT +2)", "Yaz Uygulaması(GMT +3)"],
    cities: [
        "Adana",
        "Adıyaman",
        "Afyon",
        "Ağrı",
        "Amasya",
        "Ankara",
        "Antalya",
        "Aksaray",
        "Ardahan",
        "Artvin",
        "Aydın",
        "Balıkesir",
        "Bartın",
        "Batman",
        "Bayburt",
        "Bilecik",
        "Bingöl",
        "Bitlis",
        "Bolu",
        "Burdur",
        "Bursa",
        "Çanakkale",
        "Çankırı",
        "Çorum",
        "Denizli",
        "Diyarbakır",
        "Düzce",
        "Edirne",
        "Elazığ",
        "Erzincan",
        "Erzurum",
        "Eskişehir",
        "Gaziantep",
        "Giresun",
        "Gümüşhane",
        "Hakkari",
        "Hatay",
        "Iğdır",
        "Isparta",
        "İstanbul",
        "İzmir",
        "Kahramanmaraş",
        "Karabük",
        "Karaman",
        "Kars",
        "Kastamonu",
        "Kayseri",
        "Kırıkkale",
        "Kilis",
        "Kırklareli",
        "Kırşehir",
        "Kocaeli",
        "Konya",
        "Kütahya",
        "Malatya",
        "Manisa",
        "Mardin",
        "Mersin",
        "Muğla",
        "Muş",
        "Nevşehir",
        "Niğde",
        "Ordu",
        "Osmaniye",
        "Rize",
        "Sakarya",
        "Samsun",
        "Şanlıurfa",
        "Siirt",
        "Sinop",
        "Sivas",
        "Şırnak",
        "Tekirdağ",
        "Tokat",
        "Trabzon",
        "Tunceli",
        "Uşak",
        "Van",
        "Yalova",
        "Yozgat",
        "Zonguldak"
    ],
    cityValues: [
        "adana",
        "adiyaman",
        "afyon",
        "agri",
        "amasya",
        "ankara",
        "antalya",
        "anksaray",
        "ardahan",
        "artvin",
        "aydin",
        "balikesir",
        "bartin",
        "batman",
        "bayburt",
        "bilecik",
        "bingol",
        "bitlis",
        "bolu",
        "burdur",
        "bursa",
        "canakkale",
        "cankiri",
        "corum",
        "denizli",
        "diyarbakir",
        "duzce",
        "edirne",
        "elazig",
        "erzincan",
        "erzurum",
        "eskisehir",
        "gaziantep",
        "giresun",
        "gümüshane",
        "hakkari",
        "hatay",
        "igdir",
        "isparta",
        "istanbul",
        "izmir",
        "kahramanmaras",
        "karabuk",
        "karaman",
        "kars",
        "kastamonu",
        "kayseri",
        "kırıkkale",
        "kilis",
        "kirklareli",
        "kirsehir",
        "kocaeli",
        "konya",
        "kutahya",
        "malatya",
        "manisa",
        "mardin",
        "mersin",
        "mugla",
        "mus",
        "nevsehir",
        "nigde",
        "ordu",
        "osmaniye",
        "rize",
        "sakarya",
        "samsun",
        "sanliurfa",
        "siirt",
        "sinop",
        "sivas",
        "sirnak",
        "tekirdag",
        "tokat",
        "trabzon",
        "tunceli",
        "usak",
        "van",
        "yalova",
        "yozgat",
        "zonguldak"
    ],
    stats: {
        "Aries":
            'Canlılık ve hareketin üstün yetenek olarak ortaya çıktığı Koç’lar dünyada bulunmanın bir macera olduğunun farkındadır. Var oluşun bilinciyle dolu olan bu kişilik kendini gerçekleştirmek için büyük gayret gösterebilir. Yeni girişimler, cesaret ve atılganlığın sürekli peşindedir. Sürekli başarmak ve zafer elde etmek onun için vazgeçilmezdir. Olumsuz bir huyu varsa o da sabırsızlığıdır.',
        "Taurus":
            'Sıcakkanlı olan ve ne istediğini bilen Boğa burcu var olmayı bir lezzet ve sakinlik hali olarak benimser. Hayatı korunması gereken dinginlik ve kalıcılık, tadına varılması gereken hoşluk ve güvenlik olarak görür. Herkese karşı dostça bir yaklaşıma sahiptir. Doğuştan getirdiği koruyuculuk özelliği vardır. Alınganlık ve bencillik kötü huylarıdır.',
        "Gemini":
            'İkizler insanı, sürekli hareket ve haber arar; insanlar arası ilişkilerde girişkendir, iletişimi rahattır. İkizler burcunun üstün yeteneği zekâsını iyi bir şekilde kullanmasıdır. Yardımseverlik ve iyi niyet onda belirgindir. Çok konuşmaları, onların yenmesi gereken huyu olabilir.',
        "Cancer":
            'Duygusallığın ve teferruatın burcu olan Yengeç hızla değişen duyguları ifade eder. Merhametli, yumuşak huylu ve iyi niyetli olan Yengeç burcunun olumsuz özelliği dikkatsizliktir. Anaçlık ve koruyuculuk burcun temelinde vardır.',
        "Leo":
            'İyi bir organizeci olan Aslan burcu yüksek takdir kabiliyetiyle herkesi ve her şeyi yerli yerinde değerlendirmeyi bilir. Planlama yapabilme ve cömertlik Aslan bucunun üstün özellikleridir. Pek çok şeye kavuşma arzusu ve bu konudaki yaratıcı fikirleri onu diğerlerinden ayırır. Bu burcun olumsuz özelliği kendini beğenmişliktir.',
        "Libra":
            'Uzlaştırıcı ve barıştan yana olan Terazi burcu, adaleti ve her konuda orta yolun güzelliğini bulur. Dengeli ve ölçülü olmanın üstün birer yetenek olduğu Terazi burcu saygı ve zariflik timsalidir. Gösterişten çok hoşlandığı için dengesizliği bu noktada ortaya çıkabilir.',
        "Scorpio":
            'Akrep fedakârlığın temsilcisidir. Güçlü ihtirasların, dayanıklılığın ve enerjinin burcu da sayılır. Kendini gerçekleştirmesi için bilinç seviyesinin çok açık olması gerekmektedir. Üstün yeteneği sezgi olan Akrep burcu kararlılık, inceleme yapma ve tutkulu olma yönünde öncüdür. İhmalkârlık ve acıma duysundan yoksunluk negatif özelliklerindendir.',
        "Sagittarius":
            'Asil ve cömert bir dost olan Yay burçları hareketlidir ve heyecan doludur. Hoşgörülüdür ve yeniliklere açıktır. Kendine güvenin üstün bir yetenek olarak göründüğü Yay burcu iyimserlik ve girişimcilikte öncüdür. Başkalarını küçümsemek kötü huyu olarak ortaya çıkabilir.  ',
        "Capricorn":
            'Sabrın, mantığın temsilcisi olan Oğlak burcu sorumluluk duygusunu da sonuna kadar taşımasını bilir. İnançları ve değer yargıları sağlamdır. Kararlı olma, üstün bir yetenek olarak Oğlak burçlarında ön plana çıkar. Yükselmek ve bu yolda önlemler alarak devam etmek onun özelliğidir. Fazla meraklı oluşu bazen kötü bir huy olarak ortaya çıkabilir.',
        "Aquarius":
            'Haksızlığa ve ayrımcılığa karşı olan Kova burcu vicdanı üst seviyede yaşayan insancıl bir burçtur. Kendi aklına göre ve bağımsızca hareket etmek ister. Sağduyu Kova’nın üstün yeteneğidir. İnsancıl ve iradeli olmasının yanı sıra ilerlemeyi sağlayıcı imkânlar sağlamak da onun temel görevidir. İhmalci davranması ve paraya önem vermemesi bazı Kova’ların başına dert açabilir.',
        "Pisces":
            'Sınır çizmeyi sevmeyen Balık burcunun gerçek hayatla ilgili idealleri çok yüksektir. Duygusaldır, hisleri kuvvetlidir ve empati yeteneği yüksektir. Başkalarına karşı duyarlı oluşu ve şefkat duygusu üstün yetenekleridir. Servete ve mutluluğa ulaşmak yolunda huzurundan ve canlılığından ödün vermez. Kendi değerini çoğu zaman küçümsemesi yenmesi gereken huyudur.  ',
        "Virgo":
            'Başak burçları pratik zekaya sahip, çalışkan kişilerdir. Oldukça işkolik oldukları söylenebilir. Detaycı ve ayrıntılara önem veren yapıları iş yaşamlarında ne kadar titiz çalıştıklarının bir göstergesidir. Yaptıkları işlerde hataya yer yoktur. Yanıldıklarını hiçbir zaman kabul etmezler.',
    },
    entrance: true,
    loading: false,
    infoPage: false,
    golge: null,
    sentez: null,
    golgeEnglish: null,
    sentezEnglish: null,
    golgeText: null,
    sentezText: null
}

const getters = {
    cities: (state) => state.cities,
    cityValues: (state) => state.cityValues,
    timezones: (state) => state.timezones,
    entrance: (state) => state.entrance,
    loading: (state) => state.loading,
    infoPage: (state) => state.infoPage,
    golge: (state) => state.golge,
    golgeEnglish: (state) => state.golgeEnglish,
    sentez: (state) => state.sentez,
    sentezEnglish: (state) => state.sentezEnglish,
    sentezText: (state) => state.sentezText,
    golgeText: (state) => state.golgeText,
}

const actions = {
    async calculate({ commit }, query) {
        commit("changeToLoading");
        let queryStr = `https://us-central1-flaskapp-78b67.cloudfunctions.net/golgeSentez?name=${query.name}&month=${query.month}&day=${query.day}&year=${query.year}&hour=${query.hour}&minute=${query.minute}&timezone=${query.timezone}&city=${query.city}`;
        let res = await axios.get(queryStr);
        commit("changeToInfoPage", res.data);
    }
}

const mutations = {
    changeToLoading() {
        state.entrance = false;
        state.loading = true;
    },
    changeToInfoPage(state, data) {
        state.loading = false;
        state.infoPage = true;
        state.golge = data.gölge;
        state.sentez = data.sentez;
        let golgeEnglish = mutations.englishDef(data.gölge);
        state.golgeEnglish = golgeEnglish;
        state.golgeText = state.stats[golgeEnglish];
        let sentezEnglish = mutations.englishDef(data.sentez);
        state.sentezEnglish = sentezEnglish; 
        state.sentezText = state.stats[sentezEnglish];
    },
    englishDef(horoscope) {
        switch (horoscope) {
            case "Kova":
                return "Aquarius";
            case "Koç":
                return "Aries";
            case "Yengeç":
                return "Cancer";
            case "Oğlak":
                return "Capricorn";
            case "İkizler":
                return "Gemini";
            case "Aslan":
                return "Leo";
            case "Terazi":
                return "Libra";
            case "Balık":
                return "Pisces";
            case "Yay":
                return "Sagittarius";
            case "Akrep":
                return "Scorpio";
            case "Boğa":
                return "Taurus";
            case "Başak":
                return "Virgo";
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
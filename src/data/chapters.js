export const chapters = [
  {
    id: 1,
    icon: '📝',
    title: 'Kayıp Sınav Kâğıtları',
    description:
      'Okulda sınav kâğıtları kayboldu. Öğretmenler odasında herkes panik içinde. Bu işte gerçekten bir bit yeniği var mı?',
    story:
      'Sabahın ilk dersinden önce Türkçe öğretmeni sınav kâğıtlarının yerinde olmadığını fark etti. Öğretmenler odasında herkes telaşla dolapları, klasörleri ve masaların üzerini aramaya başladı. Bir öğretmen, ‘Bu işte bir bit yeniği var.’ dedi. Başka biri ise ‘Biri bu işten paçayı sıyırmaya çalışıyor olabilir.’ diye fısıldadı. Deyim Dedektifi olarak görevin, bu sözlerin gerçek anlamlarını çözmek ve sınav kâğıtlarının izini bulmak.',
    badge: 'İlk İpucu',
    questions: [
      {
        questionType: 'multipleChoice',
        question: '‘Bu işte bir bit yeniği var.’ deyimi ne anlama gelir?',
        options: [
          'Bu işte şüpheli bir durum var.',
          'Bu işte gerçekten böcek var.',
          'Bu iş çok kolay.',
        ],
        answer: 'Bu işte şüpheli bir durum var.',
        explanation:
          'Bir bit yeniği var deyimi, bir olayda şüpheli veya gizli bir durum olduğunu anlatır.',
      },
      {
        questionType: 'fillBlank',
        question:
          'Cümleyi uygun deyimle tamamla: Öğretmenler bu olayda gizli bir durum olduğunu düşününce “Bu işte ______.” dedi.',
        answer: 'bir bit yeniği var',
        acceptedAnswers: [
          'bir bit yeniği var',
          'bit yeniği var',
          'bu işte bir bit yeniği var',
        ],
        explanation:
          'Bir olayda şüpheli veya gizli bir durum olduğunu anlatmak için “bir bit yeniği var” deyimi kullanılır.',
      },
      {
        questionType: 'shortAnswer',
        question:
          '“Paçayı sıyırmak” deyiminin kullanılabileceği bir okul olayı örneği yaz.',
        answerKeywords: ['kurtulmak', 'zarar görmeden', 'ceza', 'zor durum'],
        sampleAnswer:
          'Öğrenci yaptığı hatadan zarar görmeden veya ceza almadan kurtulursa paçayı sıyırmış olur.',
        explanation:
          'Paçayı sıyırmak, zor veya kötü bir durumdan zarar görmeden kurtulmak anlamına gelir.',
      },
    ],
  },
  {
    id: 2,
    icon: '🥪',
    title: 'Kantindeki Büyük Tartışma',
    description:
      'Son tost yüzünden kantinde ortalık karıştı. Öğrenciler deyimleri gerçek anlamlarıyla anlamaya başlayınca işler iyice büyüdü.',
    story:
      'Öğle arasında kantinde son tost kalmıştı. Üç öğrenci aynı anda tostu almak isteyince tartışma başladı. Kantinci, ‘Çocuklar, pire için yorgan yakmayın.’ dedi. Ama öğrenciler gerçekten pire ve yorgan aramaya başladı. Bir öğrenci sinirlenip bağırınca arkadaşı, ‘Bak, yine küplere bindi.’ dedi. Deyim Dedektifi olarak görevin, bu karmaşayı çözmek.',
    badge: 'Anlam Avcısı',
    questions: [
      {
        questionType: 'multipleChoice',
        question: '‘Pire için yorgan yakmak’ ne demektir?',
        options: [
          'Ev temizliği yapmak.',
          'Bir eşyayı bilerek yakmak.',
          'Küçük bir sorun için büyük tepki göstermek.',
        ],
        answer: 'Küçük bir sorun için büyük tepki göstermek.',
        explanation:
          'Pire için yorgan yakmak, küçük bir mesele yüzünden büyük ve gereksiz bir tepki vermek anlamına gelir.',
      },
      {
        questionType: 'fillBlank',
        question:
          'Cümleyi tamamla: Son tost yüzünden bu kadar kavga etmek, ______ gibiydi.',
        answer: 'pire için yorgan yakmak',
        acceptedAnswers: [
          'pire için yorgan yakmak',
          'pire için yorgan yakmaktır',
          'pire için yorgan yakmak gibiydi',
        ],
        explanation:
          'Küçük bir sorun için çok büyük tepki gösterildiğinde bu deyim kullanılır.',
      },
      {
        questionType: 'shortAnswer',
        question:
          '“Küplere binmek” deyimini kantindeki olayla ilişkilendirerek açıkla.',
        answerKeywords: ['öfkelenmek', 'sinirlenmek', 'kızmak', 'bağırmak'],
        sampleAnswer:
          'Bir öğrenci son tost yüzünden çok sinirlenip bağırınca küplere binmiş olur.',
        explanation:
          'Küplere binmek, çok öfkelenmek ve sinirlenmek anlamında kullanılan bir deyimdir.',
      },
    ],
  },
  {
    id: 3,
    icon: '📓',
    title: 'Sessiz Öğrencinin Sırrı',
    description:
      'Sınıfta kimsenin fark etmediği sessiz bir öğrenci, defterinde bambaşka bir dünya saklıyor.',
    story:
      'Sınıfta çok sessiz bir öğrenci vardı. Arkadaşları onun derse ilgisiz olduğunu sanıyordu. Bir gün öğretmen, öğrencinin defterinde harika hikâyeler yazdığını gördü. Öğretmen, ‘Demek ki içinde fırtınalar kopuyormuş.’ dedi. Arkadaşları ise ‘Biz onu gözden kaçırmışız.’ diye düşündü. Deyim Dedektifi olarak bu sözlerin anlamlarını bulmalısın.',
    badge: 'Söz Ustası',
    questions: [
      {
        questionType: 'multipleChoice',
        question: '‘İçinde fırtınalar kopmak’ ne anlama gelir?',
        options: [
          'Gerçekten kötü hava şartları oluşmak.',
          'Dışarıdan belli etmese de yoğun duygular yaşamak.',
          'Çok hızlı koşmak.',
        ],
        answer: 'Dışarıdan belli etmese de yoğun duygular yaşamak.',
        explanation:
          'İçinde fırtınalar kopmak, kişinin iç dünyasında güçlü duygular yaşadığını anlatır.',
      },
      {
        questionType: 'fillBlank',
        question:
          'Cümleyi tamamla: Arkadaşları onun yeteneğini fark etmemiş, onu ______.',
        answer: 'gözden kaçırmış',
        acceptedAnswers: [
          'gözden kaçırmış',
          'gözden kaçırmışlar',
          'gözden kaçırmak',
        ],
        explanation:
          'Gözden kaçırmak, bir şeyi ya da bir durumu fark etmemek anlamına gelir.',
      },
      {
        questionType: 'shortAnswer',
        question:
          'Sessiz bir öğrencinin “içinde fırtınalar kopması” nasıl bir durum olabilir?',
        answerKeywords: ['duygu', 'iç dünya', 'üzüntü', 'heyecan', 'düşünce'],
        sampleAnswer:
          'Öğrenci dışarıdan sakin görünse de içinde yoğun duygular, düşünceler veya heyecanlar yaşayabilir.',
        explanation:
          'Bu deyim, dışarıdan belli edilmeyen güçlü iç duyguları anlatır.',
      },
    ],
  },
  {
    id: 4,
    icon: '⚖️',
    title: 'Pazardaki Kurnaz Esnaf',
    description:
      'Sözler Şehri Pazarı’nda bazı işler yolunda gitmiyor. Yalanlar, atasözlerinin ışığında ortaya çıkacak.',
    story:
      'Sözler Şehri Pazarı’nda bir esnaf, tartısının doğru olduğunu söylüyordu. Fakat müşterilerden biri tartıda bir gariplik fark etti. Esnaf hemen kendini savundu ama yaşlı bir müşteri, ‘Yalancının mumu yatsıya kadar yanar.’ dedi. Bir başka müşteri de ‘Doğru söz yemin istemez.’ diye ekledi. Deyim Dedektifi olarak hangi atasözünün hangi duruma uygun olduğunu bulmalısın.',
    badge: 'Atasözü Hâkimi',
    questions: [
      {
        questionType: 'multipleChoice',
        question:
          '‘Yalancının mumu yatsıya kadar yanar.’ atasözü ne anlatır?',
        options: [
          'Yalanın er ya da geç ortaya çıkacağını.',
          'Mumların gece daha iyi yandığını.',
          'Yalancıların karanlıktan korktuğunu.',
        ],
        answer: 'Yalanın er ya da geç ortaya çıkacağını.',
        explanation:
          'Bu atasözü, yalanın uzun süre gizli kalamayacağını anlatır.',
      },
      {
        questionType: 'fillBlank',
        question:
          'Cümleyi tamamla: Esnafın yalanı kısa sürede ortaya çıktı; çünkü ______.',
        answer: 'yalancının mumu yatsıya kadar yanar',
        acceptedAnswers: [
          'yalancının mumu yatsıya kadar yanar',
          'yalancının mumu yatsıya kadar yanar.',
        ],
        explanation:
          'Bu atasözü, yalanın bir süre sonra mutlaka ortaya çıkacağını anlatır.',
      },
      {
        questionType: 'shortAnswer',
        question:
          '“Doğru söz yemin istemez.” atasözünü pazardaki olayla ilişkilendirerek açıkla.',
        answerKeywords: ['doğru', 'kanıt', 'yemin', 'gerçek', 'açık'],
        sampleAnswer:
          'Söz doğru ve açıksa onu kanıtlamak için sürekli yemin etmeye gerek yoktur.',
        explanation:
          'Bu atasözü, gerçek olan bir sözün ayrıca yeminle desteklenmesine gerek olmadığını anlatır.',
      },
    ],
  },
  {
    id: 5,
    icon: '🕵️',
    title: 'Anlam Hırsızı’nın İzinde',
    description:
      'Anlamlar Kitabı’nı kimin aldığına dair son ipuçları seni Büyük Sözlük Kulesi’ne götürüyor.',
    story:
      'Deyim Dedektifi, Büyük Sözlük Kulesi’ne ulaştığında Anlam Hırsızı ile karşılaştı. Hırsız kötü biri değildi. Küçükken deyim ve atasözlerini anlayamadığı için herkes ona gülmüştü. Bu yüzden Anlamlar Kitabı’nı alıp şehrin sözlerini karıştırmıştı. Dedektif ona, ‘Damlaya damlaya göl olur.’ diyerek öğrenmenin zamanla gerçekleştiğini anlattı. Sonra ‘Sakla samanı, gelir zamanı.’ sözünün de bilgiyi küçümsememek gerektiğini gösterdiğini söyledi.',
    badge: 'Büyük Deyim Dedektifi',
    questions: [
      {
        questionType: 'multipleChoice',
        question: '‘Damlaya damlaya göl olur.’ atasözü ne anlama gelir?',
        options: [
          'Yağmur yağınca göller oluşur.',
          'Su her zaman değerlidir.',
          'Küçük birikimler zamanla büyük sonuçlar doğurur.',
        ],
        answer: 'Küçük birikimler zamanla büyük sonuçlar doğurur.',
        explanation:
          'Bu atasözü, küçük ama düzenli çabaların zamanla büyük sonuçlara ulaşacağını anlatır.',
      },
      {
        questionType: 'fillBlank',
        question:
          'Cümleyi tamamla: Küçük küçük öğrenmeler zamanla büyür; çünkü ______.',
        answer: 'damlaya damlaya göl olur',
        acceptedAnswers: ['damlaya damlaya göl olur'],
        explanation:
          'Bu atasözü, küçük ve düzenli birikimlerin zamanla büyük sonuçlar doğuracağını anlatır.',
      },
      {
        questionType: 'shortAnswer',
        question:
          '“Sakla samanı, gelir zamanı.” atasözü bilgiyi küçümsememekle nasıl ilişkilidir?',
        answerKeywords: ['işe yarar', 'zamanı gelir', 'önemsiz', 'gerekli'],
        sampleAnswer:
          'Bugün önemsiz görünen bir bilgi ya da şey, ileride gerekli ve işe yarar hale gelebilir.',
        explanation:
          'Bu atasözü, değersiz görünen şeylerin zamanı geldiğinde işe yarayabileceğini anlatır.',
      },
    ],
  },
  {
    id: 6,
    icon: '📚',
    title: 'Kütüphanedeki Sessiz Alarm',
    description:
      'Kütüphanedeki kitaplar yanlış raflara yerleşmeye başladı. Her kitap, içindeki atasözünü kaybetmiş gibi davranıyor.',
    story:
      'Sözler Şehri Kütüphanesi her zaman sessizdi. Fakat o gün raflardaki kitaplar kendi kendine yer değiştirmeye başladı. Kütüphaneci, ‘Kitapları gözden geçirmek gerekiyordu ama biz bu işi ağırdan aldık.’ dedi. Bir öğrenci ise kaybolan kitabı bulunca ‘Arayan Mevla’sını da bulur, belasını da.’ sözünü yanlış anlayıp korkuya kapıldı. Deyim Dedektifi olarak kütüphanedeki anlam karmaşasını çözmelisin.',
    badge: 'Kitap İzcisi',
    questions: [
      {
        questionType: 'multipleChoice',
        question: '‘Ağırdan almak’ deyimi ne anlama gelir?',
        options: [
          'Ağır bir eşya taşımak.',
          'Bir işi yavaş yapmak veya geciktirmek.',
          'Bir kitabı yere düşürmek.',
        ],
        answer: 'Bir işi yavaş yapmak veya geciktirmek.',
        explanation:
          'Ağırdan almak, bir işi isteyerek veya istemeyerek yavaş yapmak, geciktirmek anlamına gelir.',
      },
      {
        questionType: 'fillBlank',
        question:
          'Cümleyi uygun deyimle tamamla: Kütüphaneci işleri zamanında yapmadığı için bu işi biraz ______.',
        answer: 'ağırdan aldı',
        acceptedAnswers: ['ağırdan aldı', 'ağırdan almak', 'ağırdan almış'],
        explanation:
          'Cümlede bir işin geciktirilmesi anlatıldığı için “ağırdan almak” deyimi uygundur.',
      },
      {
        questionType: 'shortAnswer',
        question:
          '‘Arayan Mevla’sını da bulur, belasını da.’ atasözü hangi durumlarda kullanılabilir? Kısaca açıkla.',
        answerKeywords: ['aramak', 'sonuç', 'iyi', 'kötü', 'karşılaşmak'],
        sampleAnswer:
          'Bu atasözü, bir şeyi arayan kişinin arayışının sonunda iyi ya da kötü bir sonuçla karşılaşabileceğini anlatır.',
        explanation:
          'Atasözü, arayışın her zaman beklenen sonucu vermeyebileceğini belirtir.',
      },
    ],
  },
  {
    id: 7,
    icon: '🏀',
    title: 'Spor Salonunda Büyük Rekabet',
    description:
      'Okul takımında herkes kazanmak istiyor ama bazıları hırsını kontrol edemiyor.',
    story:
      'Spor salonunda final maçı yaklaşırken takım ikiye bölünmüştü. Bir öğrenci sürekli arkadaşlarını suçluyor, bir diğeri ise ‘Birlikten kuvvet doğar.’ diyerek takımı toparlamaya çalışıyordu. Koç, ‘Hırsına yenilen, oyunu da arkadaşını da kaybeder.’ dedi. Deyim Dedektifi olarak takımın sadece maçı değil, anlamı da kazanmasına yardım etmelisin.',
    badge: 'Takım Ruhu',
    questions: [
      {
        questionType: 'multipleChoice',
        question: '‘Birlikten kuvvet doğar.’ atasözü ne anlatır?',
        options: [
          'Herkes tek başına daha başarılı olur.',
          'Spor yapan herkes kazanır.',
          'Birlikte hareket edenler daha güçlü olur.',
        ],
        answer: 'Birlikte hareket edenler daha güçlü olur.',
        explanation:
          'Bu atasözü, dayanışma ve birlikte hareket etmenin gücünü anlatır.',
      },
      {
        questionType: 'fillBlank',
        question:
          'Cümleyi tamamla: Takım birlikte hareket edince anladılar ki ______.',
        answer: 'birlikten kuvvet doğar',
        acceptedAnswers: ['birlikten kuvvet doğar'],
        explanation:
          'Takım çalışmasını anlatan en uygun atasözü “Birlikten kuvvet doğar.” sözüdür.',
      },
      {
        questionType: 'shortAnswer',
        question:
          'Bir maçta “birlikten kuvvet doğar” atasözüne uygun bir davranış örneği yaz.',
        answerKeywords: ['yardım', 'takım', 'birlikte', 'pas', 'destek'],
        sampleAnswer:
          'Oyuncuların birbirine pas vermesi, hata yapan arkadaşını suçlamaması ve birlikte savunma yapması bu atasözüne uygundur.',
        explanation:
          'Atasözü, bireysel başarıdan çok dayanışmanın önemini vurgular.',
      },
    ],
  },
  {
    id: 8,
    icon: '🚲',
    title: 'Mahalledeki Kayıp Bisiklet',
    description:
      'Mahallede kaybolan bir bisiklet, dedikoduların ve yanlış anlamaların büyümesine neden olur.',
    story:
      'Sözler Şehri Mahallesi’nde bir bisiklet kayboldu. Herkes farklı birini suçlamaya başladı. Yaşlı bir komşu, ‘Ateş olmayan yerden duman çıkmaz.’ deyince çocuklar gerçekten duman aradı. Fakat Deyim Dedektifi hemen anladı: Her duyulan söz doğru olmayabilirdi. Çünkü bazen insanlar lafı ağızlarında geveleyerek gerçeği saklar.',
    badge: 'İz Sürücü',
    questions: [
      {
        questionType: 'multipleChoice',
        question: '‘Lafı ağzında gevelemek’ deyimi ne anlama gelir?',
        options: [
          'Yemek yerken konuşmak.',
          'Söylemek istediğini açıkça söylememek.',
          'Çok hızlı konuşmak.',
        ],
        answer: 'Söylemek istediğini açıkça söylememek.',
        explanation:
          'Lafı ağzında gevelemek, düşünceyi açık ve net biçimde söylememek anlamına gelir.',
      },
      {
        questionType: 'fillBlank',
        question:
          'Cümleyi uygun deyimle tamamla: Gerçeği bildiği hâlde açıkça konuşmadı, lafı ağzında ______.',
        answer: 'geveledi',
        acceptedAnswers: ['geveledi', 'lafı ağzında geveledi', 'ağzında geveledi'],
        explanation:
          'Cümlede açık konuşmamak anlamı olduğu için “lafı ağzında gevelemek” deyimi uygundur.',
      },
      {
        questionType: 'shortAnswer',
        question:
          '‘Ateş olmayan yerden duman çıkmaz.’ atasözünü bu olayla ilişkilendirerek açıkla.',
        answerKeywords: ['belirti', 'şüphe', 'dedikodu', 'gerçek', 'olay'],
        sampleAnswer:
          'Bu atasözü, ortada bir söylenti veya belirti varsa bunun bir sebebi olabileceğini anlatır. Ancak kesin kanıt olmadan kimse suçlanmamalıdır.',
        explanation:
          'Atasözü şüpheyi anlatır fakat tek başına kesin kanıt sayılmaz.',
      },
    ],
  },
  {
    id: 9,
    icon: '🏛️',
    title: 'Sözler Şehri Meclisi',
    description:
      'Şehirde herkes anlamların nasıl korunacağı konusunda tartışır. Son kararı Deyim Dedektifi verecektir.',
    story:
      'Sözler Şehri Meclisi acil toplandı. Bazıları deyim ve atasözlerinin artık kullanılmaması gerektiğini savundu. Bazıları ise ‘Geçmişini bilmeyen geleceğine yön veremez.’ diyerek sözlerin korunmasını istedi. Başkan, ‘Taşıma suyla değirmen dönmez.’ diyerek kalıcı bir çözüm bulunması gerektiğini söyledi. Deyim Dedektifi artık sadece ipucu toplamıyor, şehrin geleceğine de karar veriyordu.',
    badge: 'Söz Koruyucusu',
    questions: [
      {
        questionType: 'multipleChoice',
        question: '‘Taşıma suyla değirmen dönmez.’ atasözü ne anlama gelir?',
        options: [
          'Geçici çözümlerle kalıcı başarı sağlanamaz.',
          'Değirmenler sadece suyla çalışır.',
          'Su taşımak çok zordur.',
        ],
        answer: 'Geçici çözümlerle kalıcı başarı sağlanamaz.',
        explanation:
          'Bu atasözü, bir işi sürdürebilmek için kalıcı ve sağlam kaynaklara ihtiyaç olduğunu anlatır.',
      },
      {
        questionType: 'fillBlank',
        question:
          'Cümleyi tamamla: Şehrin anlamlarını sadece birkaç günlüğüne düzeltmek yetmez, çünkü ______.',
        answer: 'taşıma suyla değirmen dönmez',
        acceptedAnswers: ['taşıma suyla değirmen dönmez'],
        explanation:
          'Kalıcı çözüm gerektiğini anlatan atasözü “Taşıma suyla değirmen dönmez.” sözüdür.',
      },
      {
        questionType: 'shortAnswer',
        question:
          'Sence deyim ve atasözleri neden korunmalıdır? Kısa bir cevap yaz.',
        answerKeywords: ['kültür', 'geçmiş', 'dil', 'anlam', 'deneyim', 'öğüt'],
        sampleAnswer:
          'Deyim ve atasözleri kültürümüzü, geçmiş deneyimleri ve dilimizin zenginliğini yansıttığı için korunmalıdır.',
        explanation:
          'Deyim ve atasözleri yalnızca kalıplaşmış sözler değil, toplumun kültürel hafızasıdır.',
      },
    ],
  },
  {
    id: 10,
    icon: '🗝️',
    title: 'Büyük Sözlük Kulesi',
    description:
      'Anlamlar Kitabı’nın son sayfası hâlâ boştur. Bu sayfayı ancak gerçek bir Deyim Dedektifi tamamlayabilir.',
    story:
      'Deyim Dedektifi sonunda Büyük Sözlük Kulesi’nin en üst katına çıktı. Anlam Hırsızı oradaydı. Elinde Anlamlar Kitabı vardı ama kitabın son sayfası bomboştu. Hırsız, ‘Ben bu sözleri hiç anlayamadım. Herkes bildi, ben bilemedim.’ dedi. Dedektif ona kızmadı. ‘Damlaya damlaya göl olur.’ diyerek öğrenmenin zamanla gerçekleştiğini anlattı. Sonra kitabın son sayfasına şunu yazdı: ‘Sözleri ezberleyen değil, anlamını yerinde kullanan kişi gerçek söz ustasıdır.’ O anda şehirdeki bütün tabelalar, kitaplar ve konuşmalar eski anlamına kavuştu.',
    badge: 'Büyük Söz Ustası',
    questions: [
      {
        questionType: 'multipleChoice',
        question:
          'Final hikâyesine göre Deyim Dedektifi’nin asıl başarısı nedir?',
        options: [
          'Anlam Hırsızı’nı cezalandırmak.',
          'Anlamları ezberlemek değil, doğru yerde kullanmayı öğrenmek.',
          'Bütün kitapları saklamak.',
        ],
        answer: 'Anlamları ezberlemek değil, doğru yerde kullanmayı öğrenmek.',
        explanation:
          'Finalde asıl vurgu, deyim ve atasözlerini ezberlemekten çok bağlamına uygun kullanmaktır.',
      },
      {
        questionType: 'fillBlank',
        question:
          'Cümleyi tamamla: Küçük küçük öğrenmeler zamanla büyür, çünkü ______.',
        answer: 'damlaya damlaya göl olur',
        acceptedAnswers: ['damlaya damlaya göl olur'],
        explanation:
          'Bu atasözü, küçük ve düzenli çabaların zamanla büyük sonuçlar doğuracağını anlatır.',
      },
      {
        questionType: 'shortAnswer',
        question:
          'Bu oyunun sonunda Anlam Hırsızı’na deyim ve atasözleri hakkında ne söylemek isterdin?',
        answerKeywords: ['öğrenmek', 'anlamak', 'zaman', 'sabır', 'kullanmak', 'anlam'],
        sampleAnswer:
          'Ona bu sözleri hemen ezberlemek zorunda olmadığını, zamanla ve örneklerle öğrenebileceğini söylerdim.',
        explanation:
          'Bu soru, öğrencinin oyunun ana fikrini kendi cümlesiyle ifade etmesini sağlar.',
      },
    ],
  },
];

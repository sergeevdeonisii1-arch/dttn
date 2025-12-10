const themes = [
  { id: "eq", title: "Эмоциональный интеллект", tag: "EQ / эмоции", mood: "спокойствие", accent: "#8a7cff" },
  { id: "cog-bias", title: "Когнитивные искажения", tag: "мышление", mood: "острота", accent: "#5fe4ff" },
  { id: "dreams", title: "Сновидения и сны", tag: "бессознательное", mood: "глубина", accent: "#ff7ee2" },
  { id: "memory", title: "Память и внимание", tag: "нейро", mood: "фокус", accent: "#7cf7c2" },
  { id: "stress", title: "Стресс и регуляция", tag: "самоконтроль", mood: "баланс", accent: "#ff9f6e" },
  { id: "mindfulness", title: "Осознанность", tag: "mindfulness", mood: "тихо", accent: "#6ee7ff" },
  { id: "flow", title: "Состояние потока", tag: "опыт", mood: "драйв", accent: "#9eff6e" },
  { id: "negotiation", title: "Переговоры и влияние", tag: "soft skills", mood: "уверенность", accent: "#ffb347" },
  { id: "empathy", title: "Эмпатия", tag: "EQ", mood: "тепло", accent: "#ff7b9c" },
  { id: "charisma", title: "Харизма", tag: "социальность", mood: "яркость", accent: "#f2ff6e" },
  { id: "procrastination", title: "Прокрастинация", tag: "привычки", mood: "дисциплина", accent: "#6effb1" },
  { id: "conflict", title: "Конфликты", tag: "коммуникация", mood: "контроль", accent: "#ff6e6e" },
  { id: "self-control", title: "Самоконтроль", tag: "воля", mood: "тонус", accent: "#7ed5ff" },
  { id: "creativity", title: "Креативность", tag: "идеи", mood: "поток", accent: "#c17bff" },
  { id: "bias", title: "Система 1/2", tag: "Канеман", mood: "скорость", accent: "#7c9bff" },
  { id: "boundaries", title: "Личные границы", tag: "отношения", mood: "ясность", accent: "#6effe7" },
  { id: "attachment", title: "Типы привязанности", tag: "Болби", mood: "близость", accent: "#ffa36e" },
  { id: "leadership", title: "Лидерство", tag: "управление", mood: "сила", accent: "#ffc36e" },
  { id: "anxiety", title: "Тревожность", tag: "саморегуляция", mood: "стабильность", accent: "#6ee0ff" },
  { id: "perfection", title: "Перфекционизм", tag: "установки", mood: "гибкость", accent: "#ff7ec7" },
  { id: "social", title: "Социальная динамика", tag: "группы", mood: "ритм", accent: "#7ef9ff" },
  { id: "narcissism", title: "Нарциссизм", tag: "личность", mood: "осознанность", accent: "#e5ff6e" },
  { id: "communication", title: "Коммуникация", tag: "soft skills", mood: "поток", accent: "#ffa7e8" },
  { id: "jung", title: "Архетипы Юнга", tag: "символы", mood: "глубина", accent: "#8cffe5" },
  { id: "psychosomatics", title: "Психосоматика", tag: "тело", mood: "баланс", accent: "#ffb37e" },
  { id: "energy", title: "Энергоменеджмент", tag: "ритм", mood: "тон", accent: "#7effb3" },
  { id: "self-esteem", title: "Самооценка", tag: "ядро", mood: "стабильность", accent: "#7ed8ff" },
  { id: "career", title: "Карьера", tag: "мотивация", mood: "движ", accent: "#ff7e8a" },
  { id: "meaning", title: "Смысл и цели", tag: "экзистенция", mood: "ясность", accent: "#a8ff6e" },
  { id: "gestalt", title: "Гештальт", tag: "контакты", mood: "осознанность", accent: "#6effff" },
  { id: "patterns", title: "Поведенческие паттерны", tag: "петли", mood: "осознание", accent: "#ff9be0" },
  { id: "psychotypes", title: "Психотипы", tag: "MBTI+", mood: "структура", accent: "#ffd66e" },
  { id: "introvert", title: "Интроверсия", tag: "личность", mood: "глубина", accent: "#9bd3ff" },
  { id: "extrovert", title: "Экстраверсия", tag: "личность", mood: "энергия", accent: "#ffb26e" },
  { id: "sensing", title: "Сенсорика vs интуиция", tag: "MBTI", mood: "контраст", accent: "#8affd1" },
  { id: "thinking", title: "Рациональность", tag: "T/F", mood: "логика", accent: "#a0a7ff" },
  { id: "ego", title: "Эго-состояния", tag: "ТА", mood: "структура", accent: "#ff7ba8" },
  { id: "micro-skills", title: "Микро-навыки общения", tag: "практика", mood: "гибкость", accent: "#7cf9c4" },
  { id: "motivation2", title: "Мотивация 2.0", tag: "драйв", mood: "огонь", accent: "#ffb36e" },
  { id: "habits", title: "Привычки", tag: "поведение", mood: "системность", accent: "#6effab" },
  { id: "resilience", title: "Устойчивость", tag: "стресс", mood: "опора", accent: "#7ed8ff" },
  { id: "coaching", title: "Коучинг", tag: "вопросы", mood: "фокус", accent: "#ff7e9f" },
  { id: "values", title: "Ценности", tag: "ядро", mood: "калибровка", accent: "#c4ff6e" },
  { id: "ethics", title: "Этика", tag: "мораль", mood: "основа", accent: "#7ed5ff" },
  { id: "learning", title: "Как учиться", tag: "метанавыки", mood: "рост", accent: "#6effe1" },
  { id: "sleep", title: "Гигиена сна", tag: "ритмы", mood: "восстановление", accent: "#7c8cff" },
  { id: "burnout", title: "Профвыгорание", tag: "ресурс", mood: "стабильность", accent: "#ff947c" },
  { id: "team", title: "Командные роли", tag: "Белбин", mood: "синергия", accent: "#8dff9a" },
  { id: "focus", title: "Глубокая работа", tag: "концентрация", mood: "режим", accent: "#6fb8ff" },
  { id: "money", title: "Психология денег", tag: "финансовые установки", mood: "реализм", accent: "#ffd36e" }
];

const questionBank = [
  { text: "Кто ввёл понятие классического обусловливания?", options: ["Иван Павлов", "Б. Ф. Скиннер", "Жан Пиаже", "Карл Роджерс"], answer: 0 },
  { text: "Оперантное обусловливание связано с именем...", options: ["Эдвард Толмен", "Б. Ф. Скиннер", "Альберт Бандура", "Курт Левин"], answer: 1 },
  { text: "В теории Джеймса—Ланге эмоции возникают...", options: ["после когнитивной оценки", "после телесной реакции", "одновременно с телесной реакцией", "независимо от физиологии"], answer: 1 },
  { text: "Какой черты нет в Большой пятёрке?", options: ["Экстраверсия", "Добросовестность", "Интуиция", "Нейротизм"], answer: 2 },
  { text: "Как называется эффект лучшего запоминания незавершённых задач?", options: ["Эффект Зейгарник", "Эффект Барнума", "Эффект Пигмалиона", "Эффект первичности"], answer: 0 },
  { text: "Систему 1 и Систему 2 описал...", options: ["Даниэль Канеман", "Соломон Аш", "Лев Выготский", "Джером Брунер"], answer: 0 },
  { text: "Тест Роршаха — это...", options: ["опросник", "проективная методика", "поведенческий эксперимент", "опрос по шкале Лайкерта"], answer: 1 },
  { text: "Средний объём рабочей памяти по Миллеру равен...", options: ["5±2", "7±2", "9±2", "11±2"], answer: 1 },
  { text: "Эффект Пигмалиона — это...", options: ["завышение значимости прошлого", "влияние ожиданий на результат", "склонность к подтверждению", "страх упущенных возможностей"], answer: 1 },
  { text: "Какой нейромедиатор чаще всего связывают с системой вознаграждения?", options: ["Серотонин", "Дофамин", "Норадреналин", "ГАМК"], answer: 1 },
  { text: "Фаза сна с быстрыми движениями глаз называется...", options: ["N1", "N2", "N3", "REM"], answer: 3 },
  { text: "Какая структура мозга критична для реакции страха?", options: ["Гиппокамп", "Миндалевидное тело", "Мозжечок", "Поясная кора"], answer: 1 },
  { text: "16PF создал...", options: ["Г. Айзенк", "Р. Кеттелл", "Г. Олпорт", "Г. Маррей"], answer: 1 },
  { text: "В транзактном анализе эго-состояния — это...", options: ["Родитель, Взрослый, Ребёнок", "Сознание, Подсознание, Сверхсознание", "Ид, Эго, Суперэго", "Интуиция, Сенсорика, Мысль, Чувство"], answer: 0 },
  { text: "Пирамиду потребностей предложил...", options: ["Карл Роджерс", "Абрахам Маслоу", "Виктор Франкл", "Эрик Эриксон"], answer: 1 },
  { text: "Когнитивная реструктуризация — техника направления...", options: ["гештальт-терапии", "когнитивно-поведенческой терапии", "психоанализа", "психодрамы"], answer: 1 },
  { text: "Эвристика доступности — это...", options: ["оценка вероятности по лёгкости вспоминания", "склонность полагаться на первый пример", "использование среднего показателя", "оценка по крайнему случаю"], answer: 0 },
  { text: "Эффект Даннинга—Крюгера описывает...", options: ["рост мотивации при успехе", "занижение способностей экспертами", "завышенную уверенность при низкой компетенции", "эффект новизны"], answer: 2 },
  { text: "Струп-тест измеряет...", options: ["скорость чтения", "объём памяти", "интерференцию внимания и самоконтроль", "уровень тревожности"], answer: 2 },
  { text: "Какой уровень таксономии Блума выше?", options: ["Понимание", "Запоминание", "Применение", "Оценка"], answer: 3 },
  { text: "MBTI опирается на типологию...", options: ["Карла Юнга", "Зигмунда Фрейда", "Уильяма Джеймса", "Германна Эббингауза"], answer: 0 },
  { text: "Автор термина «поток» (flow experience) —", options: ["Дэниел Гоулман", "М. Чиксентмихайи", "Джордж Келли", "Роберт Чалдини"], answer: 1 },
  { text: "Теория привязанности Болби описывает...", options: ["схемы убеждений взрослого", "связь ребёнка и опекуна", "формирование черт характера", "развитие речи"], answer: 1 },
  { text: "Ошибка невозвратных затрат — это...", options: ["избегание потерь", "убеждение, что прошлые вложения обязывают продолжать", "стремление к немедленной награде", "переоценка редких событий"], answer: 1 },
  { text: "Шкала Лайкерта применяется для...", options: ["оценки уровня интеллекта", "измерения физиологических реакций", "оценки согласия с утверждением", "тестирования скорости реакции"], answer: 2 },
  { text: "Кто разработал концепцию зоны ближайшего развития?", options: ["Жан Пиаже", "Лев Выготский", "Джером Брунер", "Эрик Эриксон"], answer: 1 },
  { text: "Что измеряет тест Стэнфорд—Бине?", options: ["Тревожность", "Интеллект", "Память", "Креативность"], answer: 1 },
  { text: "Кто ввёл термин «самоактуализация»?", options: ["Карл Роджерс", "Абрахам Маслоу", "Генри Мюррей", "Ролло Мэй"], answer: 1 },
  { text: "Что такое эффект Барнума?", options: ["Переоценка редких событий", "Восприятие общих описаний как точных", "Гиперфокус на деталях", "Игнорирование контекста"], answer: 1 },
  { text: "Кто автор книги «Влияние. Психология убеждения»?", options: ["Роберт Чалдини", "Филип Зимбардо", "Эллиот Аронсон", "Джон Катц"], answer: 0 },
  { text: "Методика TAT относится к...", options: ["опросникам", "проективным тестам", "шкалам интеллекта", "поведенческим экспериментам"], answer: 1 },
  { text: "Кто ввёл термин «когнитивный диссонанс»?", options: ["Курт Левин", "Леон Фестингер", "Альберт Эллис", "Джулиан Роттер"], answer: 1 },
  { text: "Что такое эвристика репрезентативности?", options: ["Оценка вероятности по похожести", "Оценка по доступности в памяти", "Оценка по крайнему случаю", "Оценка по социальному одобрению"], answer: 0 },
  { text: "Кто известен экспериментом с куклой Бобо?", options: ["Жан Пиаже", "Альберт Бандура", "Джон Уотсон", "Г. Айзенк"], answer: 1 },
  { text: "Какой гормон ассоциируется с привязанностью и доверием?", options: ["Кортизол", "Окситоцин", "Тестостерон", "Адреналин"], answer: 1 },
  { text: "Эйдетическая память — это способность...", options: ["к образному запоминанию", "к мгновенной математике", "к двуязычию", "к музыкальному слуху"], answer: 0 },
  { text: "Кто предложил стадии психосоциального развития?", options: ["Эрик Эриксон", "Зигмунд Фрейд", "Жан Пиаже", "Карен Хорни"], answer: 0 },
  { text: "Эффект свидетеля (bystander effect) описывает...", options: ["рост эмпатии в толпе", "снижение вероятности помощи при большом числе очевидцев", "ускорение реакции в группе", "повышение ответственности"], answer: 1 },
  { text: "Какой из тестов оценивает креативность?", options: ["Равен", "Торренс", "Струп", "MMPI"], answer: 1 },
  { text: "Что такое locus of control по Роттеру?", options: ["Установка на рост", "Внутренний/внешний контроль исходов", "Склонность к риску", "Способность к эмпатии"], answer: 1 },
  { text: "Слепое пятно памяти, вызванное травмой, — это...", options: ["Репрессия", "Фиксация", "Регрессия", "Сублимация"], answer: 0 },
  { text: "Кто провёл тюремный эксперимент в Стэнфорде?", options: ["Ф. Зимбардо", "С. Аш", "Г. Олпорт", "Д. Канеман"], answer: 0 },
  { text: "Техника «я-высказываний» относится к...", options: ["агрессии", "ассертивности", "манипуляции", "изоляции"], answer: 1 },
  { text: "Как называется феномен гиперфокусировки при дефиците сна?", options: ["Сонный паралич", "Микросон", "Туннельное внимание", "Парадоксальный бодряк"], answer: 3 },
  { text: "Модель Big Five включает фактор...", options: ["Интуиция", "Открытость опыту", "Самокритичность", "Альтруизм"], answer: 1 },
  { text: "Кто описал стадии горя (denial → ...)?", options: ["Э. Кюблер-Росс", "В. Франкл", "Д. Аронсон", "Э. Фромм"], answer: 0 },
  { text: "Какой гормон часто называют «гормоном стресса»?", options: ["Окситоцин", "Кортизол", "Дофамин", "Мелатонин"], answer: 1 },
  { text: "Что такое «ядерные убеждения» в КПТ?", options: ["Поверхностные правила", "Глубинные схемы о себе/мире", "Единичные мысли", "Ритуалы безопасности"], answer: 1 },
  { text: "Кто предложил гуманистическую терапию, центрированную на клиенте?", options: ["Карл Роджерс", "Альберт Эллис", "Фриц Перлз", "Бек"], answer: 0 },
  { text: "Эффект прайминга — это...", options: ["Усиление привычки", "Влияние предварительного стимула на последующую реакцию", "Избегание потерь", "Снижение мотивации"], answer: 1 },
  { text: "Что измеряет тест Равена?", options: ["Вербальный интеллект", "Невербальный интеллект", "Память", "Эмоциональность"], answer: 1 },
  { text: "Кто сформулировал теорию выученной беспомощности?", options: ["Селигман", "Эриксон", "Адлер", "Фромм"], answer: 0 },
  { text: "Ключевая техника в ACT —", options: ["диссоциация", "когнитивное слияние", "дефузия и принятие", "нейтрализация"], answer: 2 },
  { text: "Эффект ореола — это...", options: ["склонность к стереотипам", "перенос общего впечатления на оценку частностей", "переоценка редких событий", "отложенная оценка"], answer: 1 },
  { text: "Кто ввёл термин «эмоциональный интеллект» в популярную культуру?", options: ["Д. Гоулман", "П. Саловей", "Д. Майер", "Э. Торндайк"], answer: 0 },
  { text: "Сонный паралич происходит чаще всего в фазе...", options: ["N1", "N2", "N3", "переход REM"], answer: 3 },
  { text: "Проекция — это защита, когда...", options: ["приписываешь свои импульсы другим", "отрицаешь факт", "возвращаешься к детскому поведению", "замещаешь цель"], answer: 0 },
  { text: "Кто разработал теорию социального научения?", options: ["Скиннер", "Бандура", "Фестингер", "Гибсон"], answer: 1 },
  { text: "Мнемотехники чаще всего опираются на...", options: ["моторные навыки", "ассоциации и образы", "случайный выбор", "слуховые ритмы"], answer: 1 },
  { text: "Эффект первичности проявляется...", options: ["лучше запоминаем начало списка", "лучше запоминаем конец списка", "забываем середину", "улучшается внимание"], answer: 0 },
  { text: "Что проверяет тест Айзенка EPQ?", options: ["интеллект", "личностные факторы E/N/P", "тревожность", "креативность"], answer: 1 },
  { text: "Основной медиатор парасимпатической системы —", options: ["ацетилхолин", "дофамин", "серотонин", "глутамат"], answer: 0 },
  { text: "Эффект плацебо — это...", options: ["улучшение из-за активного вещества", "улучшение из-за ожиданий", "ухудшение из-за побочек", "стабильность без терапии"], answer: 1 },
  { text: "Кто предложил концепцию самоэффективности?", options: ["Бандура", "Скиннер", "Кеттелл", "Роджерс"], answer: 0 },
  { text: "Методика MMPI относится к...", options: ["интеллекту", "личностной диагностике", "памяти", "мотивации"], answer: 1 },
  { text: "Что такое катарсис в терапии?", options: ["подавление эмоций", "освобождение эмоций", "избегание эмоций", "перенос эмоций"], answer: 1 },
  { text: "Кто известен экспериментом «Маленький Альберт»?", options: ["Уотсон и Рейнер", "Пиаже", "Бандура", "Зимбардо"], answer: 0 },
  { text: "Рефрейминг — это...", options: ["замещение цели", "переформулирование значения ситуации", "отрицание фактов", "проекция"], answer: 1 },
  { text: "Основной метод в психодраме —", options: ["ролевые игры", "опросники", "нейротесты", "биофидбек"], answer: 0 },
  { text: "Что такое «кортизоловый отклик»?", options: ["выброс дофамина на награду", "повышение кортизола на стресс", "снижение серотонина при сне", "всплеск адреналина при радости"], answer: 1 },
  { text: "Термин «интернализация» описывает...", options: ["приём внешних норм внутрь", "отвержение норм", "рационализацию поведения", "подражание"], answer: 0 },
  { text: "Эффект ложной консенсусности — это вера, что...", options: ["все думают иначе", "большинство разделяет наши взгляды", "никто не замечает нас", "мнение не влияет на поведение"], answer: 1 },
  { text: "Кто разработал теорию черт личности с факторами E/N?", options: ["Айзенк", "Кеттелл", "Олпорт", "МакКрэй"], answer: 0 },
  { text: "Методика СПТЛ (Stroop) оценивает...", options: ["скорость чтения", "интерференцию внимания", "объём памяти", "уровень эмпатии"], answer: 1 },
  { text: "Что такое mirror neurons?", options: ["нейроны сна", "зеркальные нейроны эмпатии/действий", "нейроны боли", "нейроны дофамина"], answer: 1 },
  { text: "Кто предложил ABC-модель в рационально-эмоциональной терапии?", options: ["Эллис", "Бек", "Роджерс", "Адлер"], answer: 0 },
  { text: "Эффект гиперкоррекции — это...", options: ["усиление ошибки", "лучшее запоминание после исправления", "игнорирование фидбека", "отложенное обучение"], answer: 1 },
  { text: "Какой тип памяти опирается на навыки и действия?", options: ["процедурная", "декларативная", "эпизодическая", "рабочая"], answer: 0 },
  { text: "Кто ввёл термин «архетипы»?", options: ["Фрейд", "Юнг", "Адлер", "Скиннер"], answer: 1 },
  { text: "Что такое «социальная желательность» в анкетах?", options: ["тенденция отвечать правдиво", "тенденция искажать ответы к одобряемым", "рандомный ответ", "усталость"], answer: 1 },
  { text: "Мозговая структура, критичная для декларативной памяти:", options: ["гиппокамп", "мозжечок", "миндалина", "таламус"], answer: 0 },
  { text: "Кто автор концепции «потоков сознания»?", options: ["Уильям Джеймс", "Джон Локк", "Жан Пиаже", "Дж. Дьюи"], answer: 0 },
  { text: "Эффект ограниченного времени (scarcity) усиливает...", options: ["безразличие", "мотивацию/ценность", "расфокусировку", "усталость"], answer: 1 },
  { text: "Что такое «якорь» в принятии решений?", options: ["стартовая числовая точка, влияющая на оценку", "убеждение о себе", "эмоциональный триггер", "травматический опыт"], answer: 0 },
  { text: "Как называется смещение к подтверждению своих гипотез?", options: ["confirmation bias", "availability", "anchoring", "framing"], answer: 0 },
  { text: "Фаза сна N3 также известна как...", options: ["глубокий медленный сон", "легкий сон", "REM", "дремота"], answer: 0 },
  { text: "Кто описал «научение посредством инсайта» (обезьяны с ящиками)?", options: ["Кёлер", "Торндайк", "Скиннер", "Павлов"], answer: 0 },
  { text: "Феномен «вкусовой отвращения» изучал...", options: ["Гарсия", "Розенцвейг", "Бек", "Эллис"], answer: 0 },
  { text: "Какой медиатор чаще связывают со стабилизацией настроения?", options: ["серотонин", "адреналин", "глицин", "аспартат"], answer: 0 },
  { text: "Система вознаграждения сильно связана со структурой...", options: ["префронтальной коры", "ядер прилежащего тела", "мозжечка", "таламуса"], answer: 1 },
  { text: "Перфекционизм в КПТ часто разбивают на...", options: ["здоровый/нездоровый", "открытый/закрытый", "простой/сложный", "левый/правый"], answer: 0 },
  { text: "Кто предложил концепцию индивидуальной психологии?", options: ["Адлер", "Юнг", "Роджерс", "Фрейд"], answer: 0 },
  { text: "Что такое «навык диффузии» в ACT?", options: ["слияние с мыслями", "отлипание от мыслей", "подкрепление", "подавление"], answer: 1 },
  { text: "Эффект Зейгарник проявляется как...", options: ["лучшее завершение задач", "лучшее запоминание незавершённых задач", "забывание завершённых задач", "избегание новых задач"], answer: 1 },
  { text: "Какой тест часто используют для скрининга депрессии?", options: ["PHQ-9", "WAIS", "TAT", "Raven"], answer: 0 },
  { text: "В теории самоопределения есть три базовые потребности: автономия, компетентность и...", options: ["безопасность", "связанность", "деньги", "власть"], answer: 1 },
  { text: "Термин «эвристика аффекта» означает...", options: ["решения на основе эмоции здесь-и-сейчас", "решения по памяти", "решения по якорю", "решения по норме"], answer: 0 },
  { text: "Как называется эффект, когда ожидания усиливают результат лечения?", options: ["ноцебо", "плацебо", "ореол", "барнум"], answer: 1 },
  { text: "Что измеряет шкала STAI?", options: ["ситуативную и личностную тревожность", "интеллект", "креативность", "мотивацию"], answer: 0 },
  { text: "Основная идея гештальт-терапии —", options: ["интерпретация снов", "завершение незавершённых гештальтов", "подавление эмоций", "катарсис"], answer: 1 },
  { text: "Термин «перфекционизм избегания» означает...", options: ["делать идеально", "не делать, если нельзя идеально", "делегировать", "делать быстро"], answer: 1 },
  { text: "Что такое «ментальные ловушки» по Карпману?", options: ["интеллектуальные прорывы", "паттерны треугольника: Преследователь-Жертва-Спасатель", "финансовые привычки", "когнитивный резерв"], answer: 1 },
  { text: "Кто автор концепции «выученного оптимизма»?", options: ["Селигман", "Фромм", "Мэй", "Фрейд"], answer: 0 },
  { text: "Какой тест оценивает интеллект у взрослых по шкале вербальных и невербальных субтестов?", options: ["WAIS", "WISC", "Raven", "Benton"], answer: 0 },
  { text: "Эффект «психологической инерции» — это...", options: ["стремление менять решения", "упорство в привычных схемах", "поиск новизны", "гиперфокус"], answer: 1 },
  { text: "В теории мотивации МакКлелланда ключевые драйверы — достижение, власть и...", options: ["безопасность", "принадлежность", "стабильность", "экономия"], answer: 1 },
  { text: "Что такое «эмоциональное выгорание» по Маслах?", options: ["физическая усталость", "эмоциональное истощение, деперсонализация, редукция достижений", "повышение энергии", "острый стресс"], answer: 1 },
  { text: "Феномен «слуховой галлюцинации» при засыпании — это...", options: ["иллюзия Менсона", "гипнагогия", "постгнозия", "супрессия"], answer: 1 },
  { text: "Кто описал «цепочку поведений» в бихевиоральном анализе?", options: ["Скиннер", "Канеман", "Роджерс", "Эриксон"], answer: 0 },
  { text: "Какой опросник оценивает акцентуации характера (в русск. традиции)?", options: ["Леонгард-Шмишек", "MMPI", "EPQ", "BDI"], answer: 0 },
  { text: "Что означает «фрейминг» в решениях?", options: ["эффект формулировки выбора", "эффект толпы", "эффект расфокусировки", "эффект боли"], answer: 0 },
  { text: "Какой показатель отражает вариабельность сердечного ритма и связан со стрессом?", options: ["HRV", "VO2max", "HbA1c", "LDL"], answer: 0 },
  { text: "Кто автор концепции «психологического контракта» в командах?", options: ["Руссо", "Белбин", "Дж. Коттер", "Селье"], answer: 0 }
];

const testsGrid = document.getElementById("testsGrid");
const testLayer = document.getElementById("testLayer");
const testTitle = document.getElementById("testTitle");
const testTag = document.getElementById("testTag");
const questionText = document.getElementById("questionText");
const questionPill = document.getElementById("questionPill");
const questionMark = document.getElementById("questionMark");
const optionsList = document.getElementById("optionsList");
const progressBar = document.getElementById("progressBar");
const progressCount = document.getElementById("progressCount");
const progressMood = document.getElementById("progressMood");
const questionDots = document.getElementById("questionDots");
const resultPanel = document.getElementById("resultPanel");
const resultTitle = document.getElementById("resultTitle");
const resultDesc = document.getElementById("resultDesc");
const questionWrapEl = document.getElementById("questionWrap");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const closeBtn = document.getElementById("closeTest");
const retryBtn = document.getElementById("retryBtn");
const shareBtn = document.getElementById("shareBtn");
const startNowBtn = document.getElementById("startNow");
const randomStartBtn = document.getElementById("randomStart");
const filterButtons = document.querySelectorAll(".filters .chip");

let tests = [];
let visibleTests = [];
let activeTest = null;
let currentQuestion = 0;
let answers = [];
let dotButtons = [];
let currentFilter = "all";

const hardcoreIds = new Set(["flow", "negotiation", "conflict", "thinking", "ego", "resilience", "burnout", "focus"]);
const fastIds = new Set(["mindfulness", "dreams", "sleep", "energy", "habits", "micro-skills", "learning", "fast"]);

const seededRandom = (seed) => {
  let t = seed + 0x6d2b79f5;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
};

const pickQuestions = (seed) => {
  const picked = [];
  const used = new Set();
  let step = 0;
  while (picked.length < 100 && step < 800) {
    const r = seededRandom(seed + step);
    const idx = Math.floor(r * questionBank.length);
    if (!used.has(idx)) {
      used.add(idx);
      picked.push(questionBank[idx]);
    }
    step += 1;
  }
  return picked;
};

const buildTests = () =>
  themes.map((t, index) => ({
    ...t,
    flags: {
      popular: index < 10,
      new: index >= 35,
      hardcore: hardcoreIds.has(t.id),
      fast: fastIds.has(t.id)
    },
    questions: pickQuestions(index * 17 + 3),
    description: `100 вопросов про ${t.tag} и ${t.mood}.`
  }));

const formatMeta = (test) => `${test.tag} • ${test.mood}`;

const renderCards = () => {
  testsGrid.innerHTML = "";
  visibleTests.forEach((test, index) => {
    const card = document.createElement("div");
    card.className = "card";
    card.style.background = `linear-gradient(145deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01)), radial-gradient(circle at 20% 20%, ${test.accent}33, transparent 40%), radial-gradient(circle at 80% 40%, ${test.accent}22, transparent 45%)`;
    card.innerHTML = `
      <span class="pill">${index + 1}/50</span>
      <h3>${test.title}</h3>
      <p>${test.description}</p>
      <div class="meta">
        <span>${formatMeta(test)}</span>
        <span>100 вопросов</span>
      </div>
    `;
    card.addEventListener("click", () => openTest(test.id));
    testsGrid.appendChild(card);
  });
};

const openTest = (testId) => {
  activeTest = visibleTests.find((t) => t.id === testId) || tests.find((t) => t.id === testId);
  if (!activeTest) return;
  answers = Array(activeTest.questions.length).fill(null);
  currentQuestion = 0;
  dotButtons = [];
  testTitle.textContent = activeTest.title;
  testTag.textContent = formatMeta(activeTest);
  progressMood.textContent = activeTest.mood;
  resultPanel.classList.add("hidden");
  testLayer.classList.add("open");
  renderDots(true);
  renderQuestion();
};

const renderDots = (initial = false) => {
  if (initial) {
    questionDots.innerHTML = "";
    dotButtons = activeTest.questions.map((_, idx) => {
      const dot = document.createElement("button");
      dot.setAttribute("aria-label", `К вопросу ${idx + 1}`);
      dot.addEventListener("click", () => {
        const allowed = maxAllowedQuestion();
        if (idx > allowed) {
          flashNeedAnswer();
          return;
        }
        currentQuestion = idx;
        renderQuestion();
      });
      questionDots.appendChild(dot);
      return dot;
    });
  }
  const maxAllowed = maxAllowedQuestion();
  dotButtons.forEach((dot, idx) => {
    const answeredIdx = answers[idx];
    const correct = answeredIdx !== null && answeredIdx === activeTest.questions[idx].answer;
    const wrong = answeredIdx !== null && !correct;
    const stateClass = correct ? "correct" : wrong ? "incorrect" : "";
    dot.className = `dot ${stateClass} ${idx === currentQuestion ? "active" : ""}`;
    dot.disabled = idx > maxAllowed;
  });
};

const flashNeedAnswer = () => {
  questionWrapEl.classList.remove("shake");
  // force reflow to restart animation
  void questionWrapEl.offsetWidth;
  questionWrapEl.classList.add("shake");
};

const maxAllowedQuestion = () => {
  let lastAnswered = -1;
  answers.forEach((v, idx) => {
    if (v !== null) lastAnswered = idx;
  });
  return Math.max(currentQuestion, lastAnswered + 1);
};

const renderQuestion = () => {
  const q = activeTest.questions[currentQuestion];
  if (!q) return;
  resultPanel.classList.add("hidden");
  questionPill.textContent = `Вопрос ${currentQuestion + 1}`;
  const answeredIdx = answers[currentQuestion];
  const isAnswered = answeredIdx !== null;
  const isCorrect = isAnswered && answeredIdx === q.answer;
  questionMark.textContent = isAnswered ? (isCorrect ? "✔" : "✖") : "";
  questionMark.className = `pill status-pill ${isAnswered ? "show" : ""}`;
  questionMark.style.background = isCorrect
    ? "linear-gradient(135deg, #2ef3a3, #19c97c)"
    : "linear-gradient(135deg, #ff6b6b, #ff3b3b)";
  questionText.textContent = q.text;
  optionsList.innerHTML = "";
  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    const isSelected = answers[currentQuestion] === idx;
    const optionClasses = ["option"];
    if (isSelected) optionClasses.push("selected");
    if (isAnswered) {
      if (idx === q.answer) {
        optionClasses.push("option-correct");
      } else {
        optionClasses.push("option-wrong");
      }
    }
    btn.className = optionClasses.join(" ");
    btn.textContent = opt;
    btn.addEventListener("click", () => {
      answers[currentQuestion] = idx;
      renderQuestion();
    });
    optionsList.appendChild(btn);
  });
  const answered = answers.filter((v) => v !== null).length;
  const progress = Math.round((answered / activeTest.questions.length) * 100);
  progressBar.style.width = `${progress}%`;
  progressCount.textContent = `${currentQuestion + 1} / ${activeTest.questions.length}`;
  prevBtn.disabled = currentQuestion === 0;
  nextBtn.textContent = currentQuestion === activeTest.questions.length - 1 ? "Завершить" : "Далее";
  nextBtn.disabled = answers[currentQuestion] === null;
  renderDots();
};

const requireAnswered = () => {
  if (answers[currentQuestion] === null) {
    flashNeedAnswer();
    return false;
  }
  return true;
};

const nextQuestionStep = () => {
  if (!activeTest) return;
  if (!requireAnswered()) return;
  const lastIndex = activeTest.questions.length - 1;
  if (currentQuestion >= lastIndex) {
    finishTest();
    return;
  }
  currentQuestion = Math.min(lastIndex, currentQuestion + 1);
  renderQuestion();
};

const prevQuestionStep = () => {
  if (!activeTest) return;
  currentQuestion = Math.max(0, currentQuestion - 1);
  renderQuestion();
};

const finishTest = () => {
  if (!requireAnswered()) return;
  const total = activeTest.questions.length;
  const correct = answers.reduce((acc, val, idx) => acc + (val === activeTest.questions[idx].answer ? 1 : 0), 0);
  resultPanel.classList.remove("hidden");
  resultTitle.textContent = `${String(correct).padStart(2, "0")} / ${total}`;
  const vibe = correct > 80 ? "Ты в топе! Теория на высоте." : correct > 50 ? "Хорошо, но есть пространство для роста." : "Неплохо, попробуй ещё раз и закрепи.";
  resultDesc.textContent = vibe;
  progressBar.style.width = "100%";
};

const closeTest = () => {
  testLayer.classList.remove("open");
  activeTest = null;
};

const shareResult = () => {
  if (!activeTest) return;
  const total = activeTest.questions.length;
  const correct = answers.reduce((acc, val, idx) => acc + (val === activeTest.questions[idx].answer ? 1 : 0), 0);
  const text = `Я прошёл(а) «${activeTest.title}» — ${correct}/${total} правильных!`;
  if (navigator.share) {
    navigator.share({ text, title: "PsycheLab" }).catch(() => {});
  } else {
    navigator.clipboard?.writeText(text);
    shareBtn.textContent = "Скопировано";
    setTimeout(() => (shareBtn.textContent = "Поделиться"), 1600);
  }
};

const startRandom = () => {
  const pool = visibleTests.length ? visibleTests : tests;
  const randomIdx = Math.floor(Math.random() * pool.length);
  openTest(pool[randomIdx].id);
};

const applyFilter = (filter) => {
  currentFilter = filter;
  filterButtons.forEach((btn) => {
    const isActive = btn.dataset.filter === filter;
    btn.classList.toggle("active", isActive);
  });
  visibleTests = tests.filter((t) => filter === "all" || t.flags[filter]);
  renderCards();
};

window.addEventListener("keydown", (e) => {
  if (!activeTest) return;
  if (e.key === "ArrowRight") nextQuestionStep();
  if (e.key === "ArrowLeft") prevQuestionStep();
  if (e.key === "Escape") closeTest();
   if (e.key === "Enter") nextQuestionStep();
});

closeBtn.addEventListener("click", closeTest);
prevBtn.addEventListener("click", prevQuestionStep);
nextBtn.addEventListener("click", nextQuestionStep);
retryBtn.addEventListener("click", () => openTest(activeTest.id));
shareBtn.addEventListener("click", shareResult);
startNowBtn.addEventListener("click", startRandom);
randomStartBtn.addEventListener("click", startRandom);
filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    applyFilter(filter || "all");
  });
});
testLayer.addEventListener("click", (e) => {
  if (e.target === testLayer) closeTest();
});

tests = buildTests();
applyFilter("all");

document.getElementById("statTests").textContent = tests.length;
document.getElementById("statQuestions").textContent = tests.length * 100;


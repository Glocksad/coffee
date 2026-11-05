// Единый доверенный каталог для сайта и Worker. Цены — демонстрационные, в рублях.
const raw=[
['espresso','Эспрессо','coffee',180,'Яркий и насыщенный','30 мл','coffee','ВЫБОР БАРИСТА'],
['americano','Американо','coffee',200,'Эспрессо и горячая вода','250 мл','coffee',''],
['cappuccino','Капучино','coffee',260,'Бархатная молочная пена','250 мл|350 мл','hero','ХИТ'],
['latte','Латте','coffee',280,'Мягкий кофе с молоком','300 мл|400 мл','hero',''],
['flat','Флэт уайт','coffee',290,'Двойной эспрессо и тонкая пена','200 мл','hero',''],
['raf','Раф','coffee',310,'Сливочный и нежный','300 мл','hero',''],
['mocha','Мокка','coffee',310,'Кофе, шоколад и молоко','300 мл','coffee',''],
['filter','Фильтр-кофе','coffee',250,'Чистый вкус зерна','250 мл','process','ВЫБОР БАРИСТА'],
['cortado','Кортадо','coffee',240,'Баланс эспрессо и молока','150 мл','coffee',''],
['pistachio','Pistachio Cloud','signature',370,'Фисташка, эспрессо и нежная пена','300 мл','hero','НОВИНКА'],
['vanilla','Vanilla Cream Latte','signature',350,'Ванильный крем и мягкий эспрессо','300 мл','hero',''],
['caramel','Salted Caramel Espresso','signature',330,'Карамель с лёгкой солёной нотой','200 мл','coffee',''],
['matcha-strawberry','Matcha Strawberry','signature',380,'Матча и клубника','300 мл','hero','ХИТ'],
['matcha','Матча латте','drinks',330,'Зелёная матча и молоко','300 мл','hero',''],
['black-tea','Чёрный чай','drinks',200,'Классический согревающий чай','400 мл','coffee',''],
['green-tea','Зелёный чай','drinks',200,'Лёгкий и свежий','400 мл','coffee',''],
['berry-tea','Чай с ягодами','drinks',290,'Ягоды и пряные ноты','400 мл','coffee',''],
['cocoa','Какао','drinks',270,'Тёплый шоколадный вкус','300 мл','hero',''],
['lemonade','Домашний лимонад','drinks',290,'Освежающий цитрус','350 мл','hero',''],
['croissant','Круассан','food',210,'Слоёный, сливочный','', 'food','ХИТ'],
['almond-croissant','Миндальный круассан','food',270,'С миндальной начинкой','', 'food',''],
['cheesecake','Чизкейк','food',300,'Нежный сливочный десерт','', 'food',''],
['basque','Баскский чизкейк','food',330,'Запечённая корочка, мягкая середина','', 'food',''],
['brownie','Брауни','food',250,'Насыщенный шоколад','', 'food',''],
['sandwich','Сэндвич','food',360,'Сытный перекус к кофе','', 'food',''],
['cookie','Печенье','food',160,'К чаю или кофе','', 'food','']];
export const products=raw.map(([id,name,category,price,description,volumes,image,badge,available=true])=>({id,name,category,price,description,volumes:volumes?volumes.split('|'):[],image,badge,available}));
export const milkOptions={'Обычное':0,'Овсяное':60,'Миндальное':60,'Кокосовое':60};
export const supportsMilk=p=>['cappuccino','latte','flat','raf','mocha','pistachio','vanilla','matcha-strawberry','matcha','cocoa'].includes(p.id);
export const itemPrice=(p,milk)=>p.price+(supportsMilk(p)?(milkOptions[milk]??0):0);

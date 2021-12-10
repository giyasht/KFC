const product = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: "199",
    veg: true,
    description: "Classic delight with 100% real mozzarella cheese and topped with basil leaves",
    photo: "https://static.toiimg.com/thumb/56868564.cms?width=800&height=800&imgsize=1948751",
    category: "Pizza",
  },
  {
    id: 2,
    name: "Peppy Paneer Pizza",
    price: "289",
    veg: true,
    description: "Flavorful trio of juicy paneer, crisp capsicum with spicy red paprika",
    photo: "https://i1.wp.com/www.dominosoffer.co.in/wp-content/uploads/2021/03/Dominos-peppy-paneer-pizza.jpg?fit=800%2C450&ssl=1",
    category: "Pizza",
  },
  {
    id: 3,
    name: "Cheese n Corn Pizza",
    price: "219",
    veg: true,
    description: "A delectable combination of sweet & juicy golden corn",
    photo: "https://gomyoffer.in/wp-content/uploads/2021/06/cheese-corn-pizza-1.jpg",
    category: "Pizza",
  },
  {
    id: 4,
    name: "Pepper Barbecue Chicken Pizza",
    price: "309",
    veg: false,
    description: "Pepper barbecue chicken for that extra zing",
    photo: "https://images.dominos.co.in/new_pepper_barbeque_chicken.jpg",
    category: "Pizza",
  },
  {
    id: 5,
    name: "Chicken Sausage & Sautéed Onion Pizza",
    price: "309",
    veg: false,
    description: "American classic! Spicy, herbed chicken sausage on pizza and topped with Sautéed Onion",
    photo: "https://assets.kraftfoods.com/recipe_images/opendeploy/577795_1_1_retail-a6aac377aa14425ca9bb23ce6523ebf7a40cd427_642x428.jpg",
    category: "Pizza",
  },
  {
    id: 6,
    name: "Veg Zinger Burger",
    price: "89",
    veg: true,
    description: "Filled with the goodness of veggies and delicious mayo sauce",
    photo:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/cvqb24o2vlkd967jzzas",
    category: "Burger",
  },
  {
    id: 7,
    name: "Veg Maharaja Burger",
    price: "209",
    veg: true,
    description: "Enjoy the tallest burgers innovated by us. Created with perfectly fried corn and cheese patty paired along with fresh ingredients like jalapeño, onion, slice of cheese & crunchy lettuce dressed with cocktail sauce.",
    photo:"https://www.mcdonaldsindia.com/images/productview/McMaharaja-veg.png",
    category: "Burger",
  },
  {
    id: 8,
    name: "Veg Downer",
    price: "89",
    veg: true,
    description: "A mixed vegetable patty, crowned with onions, lettuce, liquid cheddar cheese and tandori sauce",
    photo: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_312,h_196,c_fill/tpz0rfnwno8hzrq6hnbr",
    category: "Burger",
  },
  {
    id: 9,
    name: "Veg Snaker",
    price: "59",
    veg: true,
    description: "A mixed vegetable patty with onions and a secret non-spicy sauce!",
    photo:"https://www.burgersinghonline.com/public/upload/1/gallery/Burger/Jai-Veeru-.png",
    category: "Burger",
  },
  {
    id: 10,
    name: "Chicken Maharaja burger",
    price: "229",
    veg: false,
    description: "Enjoy the tallest burgers innovated by us. Created with chunky juicy grilled chicken patty paired along with fresh ingredients like jalapeño, onion, slice of cheese, tomatoes & crunchy lettuce dressed with the classical Habanero sauce.",
    photo:"https://www.mcdonaldsindia.com/images/productview/McMaharaja-nonveg.png",
    category: "Burger",
  },
  {
    id: 11,
    name: "Filet O Fish Double Patty Burger",
    price: "249",
    veg: false,
    description: "Enjoy two Signature fish filet patties, perfectly balanced with a sharp flavour of tartar sauce, a thin slice of cheese served between steamed buns.",
    photo:"https://d1nqx6es26drid.cloudfront.net/app/uploads/2015/04/04033439/product-double-filet-o-fish.png",
    category: "Burger",
  },
  {
    id: 12,
    name: "Chicken Zinger Burger",
    price: "139",
    veg: false,
    description: "Signature chicken burger made with a crunchy chicken fillet, veggies & a delicious mayo sauce",
    photo:"https://b.zmtcdn.com/data/dish_photos/2cd/554a151953be2415e44e3d561e8742cd.jpg",
    category: "Burger",
  },
  {
    id: 13,
    name: "Cheese Injector Burger",
    price: "169",
    veg: false,
    description: "Signature chicken burger made with a crunchy chicken fillet, veggies & overflowing cheese",
    photo:"https://b.zmtcdn.com/data/pictures/chains/8/3301708/6e72fade1ce732c8ace018e1c5b83969.jpg",
    category: "Burger",
  },
  {
    id: 14,
    name: "Idli Sambar",
    price: "29",
    veg: true,
    description: "Steamed to perfection and served with fresh made sambar",
    photo:"https://c.ndtvimg.com/2019-03/g49icpdk_world-idli-day-idli-generic_625x300_29_March_19.jpg",
    category: "South Indian",
  },
  {
    id: 15,
    name: "Masala Dosa",
    price: "39",
    veg: true,
    description: "Enjoy Dosa made by keeping perfect balance between both soft and a bit crunchy, and stuffed with freshly prepared aloo stuffing with in addition to sambar and coconut chutney",
    photo:"https://sukhis.com/app/uploads/2020/01/Dosa.jpg",
    category: "South Indian",
  },
  {
    id: 16,
    name: "Sambar vada",
    price: "35",
    veg: true,
    description: "South Indian fritter made from Vigna mungo (black lentil). It is usually made in a doughnut shape, with a crispy exterior and soft interior",
    photo:"https://malazrestaurants.com/wp-content/uploads/2020/08/vada-sambar.jpg",
    category: "South Indian",
  },
  {
    id: 17,
    name: "Upma",
    price: "24",
    veg: true,
    description: "ooked as a thick porridge from dry-roasted semolina or coarse rice flour.",
    photo:"https://d1uz88p17r663j.cloudfront.net/original/ba32df908435796279e3d79f0d5fbdc1_Rava_Upma_-_Twist.jpg",
    category: "South Indian",
  },
  {
    id: 18,
    name: "Rava Idli",
    price: "35",
    veg: true,
    description: "Enjoy the perfectly made rava idli with 2 secret chutneys",
    photo:"https://cdn3.foodviva.com/static-content/food-images/breakfast-recipes/rava-idli-recipe/rava-idli-recipe.jpg",
    category: "South Indian",
  },
  {
    id: 19,
    name: "Cheese Masala Dosa",
    price: "45",
    veg: true,
    description: "Masala Dosa filled with melted cheese and topped with grated cheese",
    photo:"https://media.istockphoto.com/photos/cheese-masala-dosa-recipe-with-sambar-and-chutney-selective-focus-picture-id1156896083?k=20&m=1156896083&s=170667a&w=0&h=FKiCT45vs38jaQgWADl12j7uUl9pZmIFeiPJ9DfORGM=",
    category: "South Indian",
  },
  {
    id: 20,
    name: "Crispy Veg",
    price: "149",
    veg: true,
    description: "These are crunchy on outside and soft veggies on the inside",
    photo:"https://productimages.withfloats.com/actual/5de2251f292bd9000172b7e8.jpg",
    category: "Chinese",
  },
  {
    id: 21,
    name: "Manchurian",
    price: "159",
    veg: true,
    description: "",
    photo:"https://i2.wp.com/www.angsarap.net/wp-content/uploads/2013/01/vegetable-manchurian.jpg?fit=1080%2C720&ssl=1&resize=1280%2C720",
    category: "Chinese",
  },
  {
    id: 23,
    name: "Hakka Noodles",
    price: "159",
    veg: true,
    description: "Veg Hakka Noodles is a famous Chinese recipe. Made with fresh noodles, it has a strong flavour of soy sauce and garlic, which makes it an apt dish.",
    photo:"https://www.cookwithmanali.com/wp-content/uploads/2014/11/Hakka-Noodles-1-500x375.jpg",
    category: "Chinese",
  },
  {
    id: 24,
    name: "Vegetable Spring Roll",
    price: "169",
    veg: true,
    description: "Yummy and a popular indo chinese snack recipe of veg spring roll. These delicious veg spring rolls are crunchy from outside, with a spiced vegetable filling from inside.",
    photo:"https://5.imimg.com/data5/SELLER/Default/2020/8/GB/QT/KR/67620679/veg-spring-roll-500x500.jpg",
    category: "Chinese",
  },
  {
    id: 25,
    name: "Vegetable Fried Rice",
    price: "139",
    veg: true,
    description: "Nutritious veggies are sauteed with garlic, chilli and steamed rice along with oriental sauces. Flavourful rice in just 20 minutes with goodness of veggies.",
    photo:"https://www.ticklingpalates.com/wp-content/uploads/2020/05/fried-rice-using-veggies.jpg",
    category: "Chinese",
  },
  {
    id: 26,
    name: "Veg Fried Wonton with Garlic Sauce ",
    price: "159",
    veg: true,
    description: "Chinese Fried Vegetable Wontons are quick, easy, and versatile that these wontons are be deep-fried, and are served with garlic sauce.",
    photo:"https://sofabfood.com/wp-content/uploads/2019/02/Chili-Dumplings-6-1024x1024.jpg",
    category: "Chinese",
  },
  {
    id: 27,
    name: "Chicken Fried Wonton with Garlic Sauce",
    price: "169",
    veg: false,
    description: "These chicken wontons are filled with ground chicken and then deep-fried to golden perfection.",
    photo:"https://i0.wp.com/www.the-happy-belly.com/wp-content/uploads/2015/08/image39.jpg?ssl=1",
    category: "Chinese",
  },
  {
    id: 28,
    name: "Special Fried Chilly Chicken",
    price: "259",
    veg: false,
    description: "The quintessential Chinese recipe, Chili Chicken is one of the most popular Indo-Chinese styled chicken appetizer or starter.",
    photo:"https://media.vogue.in/wp-content/uploads/2020/11/Chilli-chicken-1920x1080.jpg",
    category: "Chinese",
  },
  {
    id: 29,
    name: "Chicken Fried Rice",
    price: "219",
    veg: false,
    description: "Chicken and vegetables cooked in a sauce combo and then mixed with rice. One another easy and most popular Indo Chinese style fried rice recipe",
    photo:"https://kfoods.com/images1/newrecipeicon/chicken-fried-rice_7191.jpg",
    category: "Chinese",
  },
  {
    id: 30,
    name: "Spicy Chicken Schezwan Fried Rice",
    price: "239",
    veg: false,
    description: "Schezwan Chicken Fried Rice. It is absolutely hot, spicy & irresistible.",
    photo:"https://www.licious.in/blog/wp-content/uploads/2020/12/Chicken-Fried-Rice-min.jpg",
    category: "Chinese",
  },
  {
    id: 31,
    name: "chicken american chopsuey",
    price: "239",
    veg: false,
    description: "Crispy noodles served with a sweet indo Chinese sauce, mixed vegetables, chicken and a fried egg.",
    photo:"https://hotelaamantran.com/wp-content/uploads/2021/05/CHICKEN-AMERICAN-CHOPSY-1.jpg",
    category: "Chinese",
  },
  {
    id: 32,
    name: "Kung Pao Chicken",
    price: "229",
    veg: true,
    description: "Kung Pao chicken is a highly addictive stir-fried chicken with the perfect combination of salty, sweet and spicy flavor!",
    photo:"https://www.seriouseats.com/thmb/m9bvPpB9FV6-2WYy5D5t8nX00Jk=/1500x844/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2014__07__2021-02-12-Take-Out-Kung-Pao-Chicken-MHOM-11-c46f6c06713c45c5a287ddbf08779d04.jpg",
    category: "Chinese",
  },
  {
    id: 33,
    name: "Veg Hyderabadi Dum Biryani",
    price: "289",
    veg: true,
    description: " Fresh vegetables are marinated in a mixture of freshly ground BBK spices & layered with long grain basmati rice in the handi and slow cooked in the sealed handi. Each biryani order is individually cooked in hand made clay handi and served to you in the same earthenware.",
    photo:"https://d1bj9m7vro2dcz.cloudfront.net/mc_8959178_2020-08-21-21-12-53-000585.jpg",
    category: "Indian Main Course",
  },
  {
    id: 34,
    name: "Chicken Hyderabadi Dum Biryani",
    price: "329",
    veg: false,
    description: "Fresh chicken are marinated in a mixture of freshly ground BBK spices & layered with long grain basmati rice in the handi and slow-cooked in the sealed handi. Each biryani order is individually cooked in hand made clay handi and served to you in the same earthenware.",
    photo:"https://res.cloudinary.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/uznynpxzousohrvzqqpo",
    category: "Indian Main Course",
  },
  {
    id: 35,
    name: "Paneer Dum Biryani",
    price: "299",
    veg: false,
    description: "Fresh Paneer pieces marinated in freshly ground BBK spices and layered with long grain Daawat basmati rice & Dum cooked in sealed handi. This paneer dum biryani is one of those meals that everyone in the family can agree on.",
    photo:"https://assets.limetray.com/assets/user_images/menus/compressed/1636458993_Paneertikka.jpg",
    category: "Indian Main Course",
  },
  {
    id: 36,
    name: "Egg Dum Biryani",
    price: "299",
    veg: false,
    description: "Contains 4 eggs which is marinated in a mixture of freshly ground BBK spices & layered with long grain basmati rice in the handi and slow cooked in the sealed handi. Each biryani order is individually cooked in hand made clay handi and served to you in the same earthenware.",
    photo:"https://i1.wp.com/c.ndtvimg.com/2020-10/d02f3r7o_biryani-by-kilo-_625x300_27_October_20.jpeg?ssl=1&is-pending-load=1",
    category: "Indian Main Course",
  },
  {
    id: 37,
    name: "Paneer Kadai",
    price: "280",
    veg: true,
    description: "",
    photo:"https://i2.wp.com/hattyfoods.com/wp-content/uploads/2020/09/kadai-paneer-recipe.jpg?fit=2134%2C1600&ssl=1",
    category: "Indian Main Course",
  },
  {
    id: 38,
    name: "Paneer Butter Masala",
    price: "285",
    veg: true,
    description: "",
    photo:"https://www.whiskaffair.com/wp-content/uploads/2019/05/Paneer-Butter-Masala-2-3.jpg",
    category: "Indian Main Course",
  },
  {
    id: 39,
    name: "Sarson Ka Saag",
    price: "219",
    veg: true,
    description: "",
    photo:"https://www.teaforturmeric.com/wp-content/uploads/2021/01/Sarson-Ka-Saag-8-960x540.jpg",
    category: "Indian Main Course",
  },
  {
    id: 40,
    name: "Mixed Veg",
    price: "189",
    veg: true,
    description: "",
    photo:"https://i1.wp.com/vegecravings.com/wp-content/uploads/2020/01/Vegetable-Jalfrezi-Recipe-Step-By-Step-Instructions-scaled.jpg?fit=2560%2C2013&quality=65&strip=all&ssl=1",
    category: "Indian Main Course",
  },
  {
    id: 41,
    name: "Bharwan Dum aloo",
    price: "219",
    veg: true,
    description: "Boiled aloon stuffed with panner on the inside in a curry making a amazing mouth dripping combo",
    photo:"https://www.ruchiskitchen.com/wp-content/uploads/2016/04/shahi-dum-aloo-recipe-1.jpg",
    category: "Indian Main Course",
  },
  {
    id: 42,
    name: "Paneer Do Pyaza",
    price: "229",
    veg: true,
    description: "",
    photo:"https://st4.depositphotos.com/19960896/23277/i/600/depositphotos_232775198-stock-photo-paneer-pyaza-popular-punjabi-vegetarian.jpg",
    category: "Indian Main Course",
  },
  {
    id: 43,
    name: "Dal Makhani",
    price: "159",
    veg: true,
    description: "",
    photo:"https://www.whiskaffair.com/wp-content/uploads/2020/10/Dal-Makhani-2-3.jpg",
    category: "Indian Main Course",
  },
  {
    id: 44,
    name: "Dal Fry",
    price: "139",
    veg: true,
    description: "",
    photo:"https://cdn.cdnparenting.com/articles/2020/04/02184918/Dal-Fry-Recipe.jpg",
    category: "Indian Main Course",
  },
  {
    id: 45,
    name: "Butter Chicken Masala",
    price: "219",
    veg: false,
    description: "LONDON STYLE MILD,LITTLE SWEET AFTER TASTE.rich creamy tomato, cashew, magaz gravy topped with fresh cream and butter, with murgh tikka boneless. we recommend cheese chilly naan or steamed rice with this.",
    photo:"https://5.imimg.com/data5/FU/OO/MY-11309687/butter-chicken-masala-500x500.jpg",
    category: "Indian Main Course",
  },
  {
    id: 46,
    name: "Green chilly Delhi Style Butter Chicken with Bone Spicy",
    price: "229",
    veg: false,
    description: "Tandoori chicken cooked in tomato cashew gravy, with makhan and cream. Finely chopped green chillies are added to the gravy to make it perfectly spicy.",
    photo:"https://www.telegraph.co.uk/content/dam/food-and-drink/2016/02/17/butter-chicken-xlarge_trans_NvBQzQNjv4Bqeo_i_u9APj8RuoebjoAHt0k9u7HhRJvuo-ZLenGRumA.jpg?imwidth=640",
    category: "Indian Main Course",
  },
  {
    id: 47,
    name: "Murgh Khurchan",
    price: "225",
    veg: false,
    description: "Boneless chicken, onion, capsicum cooked with smoky spicy red masala, this is cooked on a tawa which gives it a distinct flavor. This khurchan is sure to amaze you with its taste. pair with wheat tandoori roti or cheese naan",
    photo:"https://spiceshanoi.com/wp-content/uploads/2018/12/Chicken-Khurchan.jpg",
    category: "Indian Main Course",
  },
  {
    id: 48,
    name: "Murgh Changhezi Masala",
    price: "259",
    veg: false,
    description: "Juicy with bone chicken cooked in spicy dark brown masala gravy. Topped with egg omelette.this is a traditional recipe from land of changhez khan. order it with butter garlic naan or butter garlic wheat roti. NOTE EGG MAY NOT BE GIVEN IN HALF PORTION",
    photo:"https://blog.travelkhana.com/tkblog/wp-content/uploads/sites/2/2019/05/chicken-changezi-recipe-1000x500.jpg",
    category: "Indian Main Course",
  },
  {
    id: 49,
    name: "Murgh Tikka Masala",
    price: "250",
    veg: false,
    description: "Murgh tikka tossed in spicy tomato,cashew onion gravy. people's favourite. pair with butter garlic naan or jeera garlic rice.",
    photo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsuge-aWEl5qpe3IELl2R1IUzHAMulE0p3YznxP6-1Z5CaSVq35R9_YjG7wjHbR8LXxMI&usqp=CAU",
    category: "Indian Main Course",
  },
  {
    id: 50,
    name: "Shahi Murgh Nizami",
    price: "239",
    veg: false,
    description: "probably our most flavor packed main course. also mild in spicyness which enhances the flavors even more, allowing you to taste the perfect balance of niami spices and traditional way of cooking which gives it its distinct character. Try this Nizami gem to know it yourself.",
    photo:"https://s3-ap-south-1.amazonaws.com/betterbutterbucket-silver/joos-foodhealth15191283705a8c0f31c4bc2.jpeg",
    category: "Indian Main Course",
  },
  {
    id: 51,
    name: "WHEAT Tandoori Roti",
    price: "25",
    veg: true,
    description: "100% Whole wheat",
    photo:"https://i1.wp.com/www.indianrecipeinfo.com/wp-content/uploads/2011/12/Tandoori-Roti.jpg",
    category: "Indian Breads",
  },
  {
    id: 52,
    name: "Butter Garlic Wheat Tandoori Roti",
    price: "35",
    veg: true,
    description: "100% Whole wheat",
    photo:"https://idn.blob.core.windows.net/foodyub/1932317709319754867.jpg",
    category: "Indian Breads",
  },
  {
    id: 53,
    name: "BUTTER Lachha Paratha",
    price: "40",
    veg: true,
    description: "100% Whole wheat",
    photo:"https://www.whiskaffair.com/wp-content/uploads/2020/06/Lachha-Paratha-2-3.jpg",
    category: "Indian Breads",
  },
  {
    id: 54,
    name: "Pudina Butter Lachha Paratha",
    price: "45",
    veg: true,
    description: "100% Whole wheat paratha toped with butter and fresh pudina for the freshest experience.",
    photo:"https://www.cookclickndevour.com/wp-content/uploads/2016/01/pudina-paratha-recipe-d.jpg",
    category: "Indian Breads",
  },
  {
    id: 55,
    name: "Butter Naan",
    price: "35",
    veg: true,
    description: "",
    photo:"https://lejnaskitchen.com/wp-content/uploads/2021/01/Butter-Naan.jpg",
    category: "Indian Breads",
  },
  {
    id: 56,
    name: "Plain Naan",
    price: "30",
    veg: true,
    description: "",
    photo:"https://www.vegrecipesofindia.com/wp-content/uploads/2013/07/naan-recipe-2-500x500.jpg",
    category: "Indian Breads",
  },
  {
    id: 57,
    name: "Butter Kulcha",
    price: "35",
    veg: true,
    description: "",
    photo:"https://pbs.twimg.com/media/DCSck2xXUAILhfR.jpg",
    category: "Indian Breads",
  },
  {
    id: 58,
    name: "Kulcha",
    price: "30",
    veg: true,
    description: "",
    photo:"https://www.vegrecipesofindia.com/wp-content/uploads/2018/10/kulcha-recipe-1-500x500.jpg",
    category: "Indian Breads",
  },
  {
    id: 59,
    name: "Steamed Rice",
    price: "110",
    veg: true,
    description: "",
    photo:"https://static.toiimg.com/thumb/54504752.cms?width=1200&height=900",
    category: "Indian Main Course",
  },
  {
    id: 60,
    name: "Jeera Rice",
    price: "120",
    veg: true,
    description: "",
    photo:"https://i.ytimg.com/vi/Yaw05jPJ7Gs/hqdefault.jpg",
    category: "Indian Main Course",
  },
  {
    id: 61,
    name: "Steamed Momos",
    price: "80",
    veg: true,
    description: "https://recipeblog.in/wp-content/uploads/2019/11/Easy-Steamed-Vegetable-Dumplings.jpeg",
    photo:"",
    category: "Chinese",
  },
  {
    id: 62,
    name: "Fried Momos",
    price: "90",
    veg: true,
    description: "",
    photo:"https://b.zmtcdn.com/data/dish_photos/f51/6b106be2fe5ad0b986a3450a20b94f51.jpg",
    category: "Chinese",
  },
  {
    id: 63,
    name: "Chicken Steamed Momos",
    price: "100",
    veg: false,
    description: "",
    photo:"https://www.tiffinboxfood.com/wp-content/uploads/2020/03/chicken-momo-1.jpg",
    category: "Chinese",
  },
  {
    id: 64,
    name: "Chicken Fried Momos",
    price: "110",
    veg: false,
    description: "",
    photo:"https://b.zmtcdn.com/data/dish_photos/f51/6b106be2fe5ad0b986a3450a20b94f51.jpg",
    category: "Chinese",
  },
  {
    id: 65,
    name: "Blueberry Cheesecake",
    price: "169",
    veg: true,
    description: "",
    photo:"https://hips.hearstapps.com/vidthumb/images/delish-blueberry-cheesecake-still003-1557335639.jpg",
    category: "Desserts",
  },
  {
    id: 66,
    name: "Mississippi Mud Pie",
    price: "169",
    veg: true,
    description: "",
    photo:"https://static01.nyt.com/images/2017/04/11/dining/11COOKING-MISSISSIPPI-MUD-PIE2/11COOKING-MISSISSIPPI-MUD-PIE2-articleLarge.jpg",
    category: "Desserts",
  },
  {
    id: 67,
    name: "Chocolate Chip Dense Brownie",
    price: "119",
    veg: true,
    description: "",
    photo:"https://cdn.sallysbakingaddiction.com/wp-content/uploads/2016/12/homemade-fudge-brownies.jpg",
    category: "Desserts",
  },
  {
    id: 68,
    name: "Walnut Brownie",
    price: "100",
    veg: true,
    description: "",
    photo:"https://www.thespruceeats.com/thmb/V-c3zKXGMkNA9WxGauobbjWlEVU=/1600x1200/smart/filters:no_upscale()/brownies-nr-18-57bb90b45f9b58cdfd70b045.jpg",
    category: "Desserts",
  },
  {
    id: 69,
    name: "American Cheesecake",
    price: "149",
    veg: true,
    description: "",
    photo:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fassets.marthastewart.com%2Fstyles%2Fwmax-750%2Fd28%2Fnew-york-cheesecake-mhlb2030%2Fnew-york-cheesecake-mhlb2030_horiz.jpg%3Fitok%3DTzQ4YbmH",
    category: "Desserts",
  },
  {
    id: 70,
    name: "Honey Butter Waffle",
    price: "107",
    veg: true,
    description: "Classic crispy waffle and warm melted butter with a golden honey drizzle. An American classic!",
    photo:"https://thestayathomechef.com/wp-content/uploads/2015/02/Cornbread2BWaffles2Bwith2BHoney2BButter2BSyrup2B2.jpg",
    category: "Desserts",
  },
  {
    id: 71,
    name: "Maple Butter Waffle",
    price: "102",
    veg: true,
    description: "Classic crispy waffle and warm melted butter with maple syrup drizzle. An American classic!",
    photo:"https://i3.wp.com/lmld.org/wp-content/uploads/2015/03/golden-butter-waffles-1.jpg",
    category: "Desserts",
  },
  {
    id: 72,
    name: "Belgian Milk Chocolate Waffle",
    price: "132",
    veg: true,
    description: "Classic crispy waffle and melted Belgian milk chocolate. Simplicity at its best!",
    photo:"https://lh3.googleusercontent.com/Ogw0WEox61qA4Z1Mr8m76y1IjgtAKAyifCeiR50GxL4P1N1DEB_bjdfG0cfHHMCO9jwj9dTpraPs7gj8FicEchnRpaEus5CppUXqyUDw",
    category: "Desserts",
  },
  {
    id: 73,
    name: "Kiki and Oreo Cream Waffle",
    price: "129",
    veg: true,
    description: "Signature black velvet waffle and our special blue cookie and cream crunch filling. Kiki do you love me?",
    photo:"https://media-cdn.tripadvisor.com/media/photo-s/19/64/4d/c0/kiki-cream-waffle.jpg",
    category: "Desserts",
  },
  {
    id: 74,
    name: "Red Velvet Waffle",
    price: "145",
    veg: true,
    description: "Original red velvet waffle and Philadelphia style cream cheese and melted Belgian white chocolate. A true original!",
    photo:"https://hips.hearstapps.com/delish/assets/17/39/1506615898-red-velvet-waffles-still-01.jpg",
    category: "Desserts",
  },
  {
    id: 75,
    name: "Belgium Truffle Shake",
    price: "120",
    veg: true,
    description: "One of our darker chocolate shake made with Belgian chocolate!",
    photo:"https://www.richs.in/wp-content/uploads/2020/02/belgium-truffle-shake.jpg",
    category: "Beverages",
  },
  {
    id: 76,
    name: "Blueberry White Chocolate Shake",
    price: "140",
    veg: true,
    description: "A smoothie blended with blueberries and white chocolate.",
    photo:"https://www.washingtonpost.com/rf/image_982w/2010-2019/WashingtonPost/2018/08/21/Food/Images/VORACIOUSLYroundupsAug205.JPG",
    category: "Beverages",
  },
  {
    id: 77,
    name: "Banana Peanut Butter Shake",
    price: "142",
    veg: true,
    description: "Healthier indulgence-a delicious smoothie blended with bananas and roasted peanut butter.",
    photo:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/peanut-butter-banana-smoothie-1521645473.jpg",
    category: "Beverages",
  },
  {
    id: 78,
    name: "Lemon Iced Tea",
    price: "103",
    veg: true,
    description: "Refreshing lemon iced tea.",
    photo:"https://www.thedinnerbite.com/wp-content/uploads/2021/05/iced-tea-recipe-img-4-500x500.jpg",
    category: "Beverages",
  },
  {
    id: 79,
    name: "Berry Lemonade",
    price: "120",
    veg: true,
    description: "Pink lemonade shaken with blueberries.",
    photo:"https://vaya.in/recipes/wp-content/uploads/2019/10/Blueberry-Lemonade.jpg",
    category: "Beverages",
  },
  {
    id: 80,
    name: "KitKat Blast Milkshake",
    price: "135",
    veg: true,
    description: "",
    photo:"https://scontent.fbom26-2.fna.fbcdn.net/v/t1.18169-9/23905276_1908284409196619_5812323114746518558_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=VmCvqSl8SpAAX92Giz4&_nc_ht=scontent.fbom26-2.fna&oh=eac51d0bc1b3a03b970c39a196d00b33&oe=61D6AD85",
    category: "Beverages",
  },
  {
    id: 81,
    name: "Classica Bueno Milkshake",
    price: "125",
    veg: true,
    description: "Blend of kinder joy bueno bar with a2 milk.",
    photo:"https://i.ytimg.com/vi/pgf0FxKBQag/maxresdefault.jpg",
    category: "Beverages",
  },
  {
    id: 82,
    name: "La Caramello Thick Shake",
    price: "135",
    veg: true,
    description: "Joyous italian caramel with belgian caramel chocolate.",
    photo:"https://drizzleanddip.com/wp-content/uploads/2014/11/IMG_8506.jpg",
    category: "Beverages",
  },
  {
    id: 83,
    name: "Cold coffee",
    price: "120",
    veg: true,
    description: "",
    photo:"https://images.news18.com/ibnkhabar/uploads/2021/04/cold-coffee.jpg?im=FitAndFill,width=1200,height=1200",
    category: "Beverages",
  },
  {
    id: 84,
    name: "Raspberry Mojito",
    price: "120",
    veg: true,
    description: "",
    photo:"https://heatherchristo.com/wp-content/uploads/2015/09/Raspberry-Mojitos.jpg",
    category: "Beverages",
  },
  {
    id: 85,
    name: "Green Apple Mojito",
    price: "120",
    veg: true,
    description: "",
    photo:"https://static.toiimg.com/photo/60258570.cms",
    category: "Beverages",
  },
  {
    id: 86,
    name: "Kiwi Mojito",
    price: "120",
    veg: true,
    description: "",
    photo:"https://mindfulmocktail.com/wp-content/uploads/2020/06/mocktail-recipes-kiwi-1024x683.jpg",
    category: "Beverages",
  },
  {
    id: 87,
    name: "Virgin Mojito",
    price: "110",
    veg: true,
    description: "",
    photo:"https://www.cleaneatingmag.com/wp-content/uploads/2013/04/virgin-mojito.jpg?crop=4:3&width=1600",
    category: "Beverages",
  },
  {
    id: 88,
    name: "Hot Cascara",
    price: "80",
    veg: true,
    description: "",
    photo:"https://cdn.shopify.com/s/files/1/0065/6182/files/steaming_cascara_large.jpeg?283",
    category: "Speaciality Tea",
  },
  {
    id: 89,
    name: "Lemon Honey Hot Cascara",
    price: "90",
    veg: true,
    description: "",
    photo:"http://kalbe.com.kh/files/Health/HoneyLemonTea.jpg",
    category: "Speaciality Tea",
  },
  {
    id: 90,
    name: "Tandoori Tea",
    price: "30",
    veg: true,
    description: "",
    photo:"https://www.thehindu.com/life-and-style/food/9zqh17/article29930582.ece/alternates/FREE_435/KIMPTANDOORITEA",
    category: "Speaciality Tea",
  },
  {
    id: 91,
    name: "Cold Cascara",
    price: "100",
    veg: true,
    description: "",
    photo:"https://imgix.bustle.com/uploads/image/2018/4/17/cc586581-c264-4145-97e4-5e2f53733e89-cold-foam-cascara-cold-brew.jpg?w=414&h=390&fit=crop&crop=faces&auto=format%2Ccompress",
    category: "Speaciality Tea",
  },
];

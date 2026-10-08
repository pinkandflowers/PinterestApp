export type Pin = {
    id: string;
    title: string;
    image: string;
    height: number;
    author: string;
    category: string;
  };
  
  export const PINS: Pin[] = [
    // =========================
    // CHRISTMAS BAKING
    // =========================
  
    {
      id: 'christmas-1',
      title: 'Christmas Cookie Ideas',
      image:
        'https://images.unsplash.com/photo-1486427944299-d1955d23e34d',
      height: 220,
      author: 'Holiday Baking',
      category: 'Christmas Baking',
    },
    {
      id: 'christmas-2',
      title: 'Holiday Baking',
      image:
        'https://images.unsplash.com/photo-1558961363-fa8fdf82db35',
      height: 260,
      author: 'Baking Inspiration',
      category: 'Christmas Baking',
    },
    {
      id: 'christmas-3',
      title: 'Christmas Desserts',
      image:
        'https://images.unsplash.com/photo-1578985545062-69928b1d9587',
      height: 230,
      author: 'Sweet Ideas',
      category: 'Christmas Baking',
    },
    {
      id: 'christmas-4',
      title: 'Festive Treats',
      image:
        'https://images.unsplash.com/photo-1481391032119-d89fee407e44',
      height: 280,
      author: 'Holiday Recipes',
      category: 'Christmas Baking',
    },
    {
      id: 'christmas-5',
      title: 'Gingerbread Cookies',
      image:
        'https://images.unsplash.com/photo-1519869325930-281384150729',
      height: 240,
      author: 'Christmas Kitchen',
      category: 'Christmas Baking',
    },
    {
      id: 'christmas-6',
      title: 'Holiday Cupcakes',
      image:
        'https://images.unsplash.com/photo-1488477181946-6428a0291777',
      height: 250,
      author: 'Baking Ideas',
      category: 'Christmas Baking',
    },
    {
      id: 'christmas-7',
      title: 'Christmas Cake Ideas',
      image:
        'https://images.unsplash.com/photo-1571115177098-24ec42ed204d',
      height: 300,
      author: 'Cake Inspiration',
      category: 'Christmas Baking',
    },
    {
      id: 'christmas-8',
      title: 'Cozy Holiday Desserts',
      image:
        'https://images.unsplash.com/photo-1551024506-0bccd828d307',
      height: 220,
      author: 'Dessert Ideas',
      category: 'Christmas Baking',
    },
  
    // =========================
    // COZY FALL
    // =========================
  
    {
      id: 'fall-1',
      title: 'Cozy Fall Decor',
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
      height: 250,
      author: 'Fall Inspiration',
      category: 'Cozy Fall',
    },
    {
      id: 'fall-2',
      title: 'Fall Coffee',
      image:
        'https://images.unsplash.com/photo-1509042239860-f550ce710b93',
      height: 220,
      author: 'Coffee Lovers',
      category: 'Cozy Fall',
    },
    {
      id: 'fall-3',
      title: 'Autumn Outfits',
      image:
        'https://images.unsplash.com/photo-1483985988355-763728e1935b',
      height: 280,
      author: 'Fall Fashion',
      category: 'Cozy Fall',
    },
    {
      id: 'fall-4',
      title: 'Autumn Inspiration',
      image:
        'https://images.unsplash.com/photo-1473445361085-b9a07f55608b',
      height: 230,
      author: 'Autumn Ideas',
      category: 'Cozy Fall',
    },
    {
      id: 'fall-5',
      title: 'Fall Leaves',
      image:
        'https://images.unsplash.com/photo-1476820865390-c52aeebb9891',
      height: 300,
      author: 'Nature Inspiration',
      category: 'Cozy Fall',
    },
    {
      id: 'fall-6',
      title: 'Cozy Sweater Weather',
      image:
        'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f',
      height: 270,
      author: 'Fall Style',
      category: 'Cozy Fall',
    },
    {
      id: 'fall-7',
      title: 'Pumpkin Decor',
      image:
        'https://images.unsplash.com/photo-1509316785289-025f5b846b35',
      height: 240,
      author: 'Autumn Home',
      category: 'Cozy Fall',
    },
    {
      id: 'fall-8',
      title: 'Autumn Home Decor',
      image:
        'https://images.unsplash.com/photo-1504198453319-5ce911bafcde',
      height: 260,
      author: 'Home Inspiration',
      category: 'Cozy Fall',
    },
  
    // =========================
    // VINTAGE HALLOWEEN
    // =========================
  
    {
      id: 'halloween-1',
      title: 'Vintage Halloween Decor',
      image:
        'https://images.unsplash.com/photo-1509557965875-b88c97052f0e',
      height: 260,
      author: 'Halloween Ideas',
      category: 'Vintage Halloween',
    },
    {
      id: 'halloween-2',
      title: 'Halloween Party Ideas',
      image:
        'https://images.unsplash.com/photo-1508361001413-7a9c9b8c1c5d',
      height: 230,
      author: 'Party Inspiration',
      category: 'Vintage Halloween',
    },
    {
      id: 'halloween-3',
      title: 'Spooky Decorations',
      image:
        'https://images.unsplash.com/photo-1604017011826-d3b4c23f8e3b',
      height: 280,
      author: 'Spooky Home',
      category: 'Vintage Halloween',
    },
    {
      id: 'halloween-4',
      title: 'Halloween Inspiration',
      image:
        'https://images.unsplash.com/photo-1604134628747-3f5e7f4f0b8e',
      height: 250,
      author: 'Halloween Style',
      category: 'Vintage Halloween',
    },
    {
      id: 'halloween-5',
      title: 'Vintage Halloween Cards',
      image:
        'https://images.unsplash.com/photo-1570303345338-ea5b3d842d36',
      height: 220,
      author: 'Vintage Ideas',
      category: 'Vintage Halloween',
    },
    {
      id: 'halloween-6',
      title: 'Spooky Vintage Decor',
      image:
        'https://images.unsplash.com/photo-1604537466573-5e94508fd243',
      height: 300,
      author: 'Vintage Halloween',
      category: 'Vintage Halloween',
    },
    {
      id: 'halloween-7',
      title: 'Halloween Pumpkins',
      image:
        'https://images.unsplash.com/photo-1509557965875-b88c97052f0e',
      height: 240,
      author: 'Halloween Decor',
      category: 'Vintage Halloween',
    },
  
    // =========================
    // MOVIES TO WATCH
    // =========================
  
    {
      id: 'movies-1',
      title: 'Movie Night Ideas',
      image:
        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba',
      height: 220,
      author: 'Movie Lovers',
      category: 'Movies to Watch',
    },
    {
      id: 'movies-2',
      title: 'Classic Movies',
      image:
        'https://images.unsplash.com/photo-1485846234645-a62644f84728',
      height: 280,
      author: 'Film Inspiration',
      category: 'Movies to Watch',
    },
    {
      id: 'movies-3',
      title: 'Cozy Movie Night',
      image:
        'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0',
      height: 240,
      author: 'Movie Night',
      category: 'Movies to Watch',
    },
    {
      id: 'movies-4',
      title: 'Movies Everyone Should See',
      image:
        'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c',
      height: 260,
      author: 'Cinema Ideas',
      category: 'Movies to Watch',
    },
    {
      id: 'movies-5',
      title: 'Movie Theater Inspiration',
      image:
        'https://images.unsplash.com/photo-1485095329183-d0797cdc5676',
      height: 300,
      author: 'Cinema Lovers',
      category: 'Movies to Watch',
    },
    {
      id: 'movies-6',
      title: 'Popcorn Movie Night',
      image:
        'https://images.unsplash.com/photo-1585647347384-2593bc35786b',
      height: 220,
      author: 'Movie Night Ideas',
      category: 'Movies to Watch',
    },
    {
      id: 'movies-7',
      title: 'Retro Cinema',
      image:
        'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba',
      height: 250,
      author: 'Retro Film',
      category: 'Movies to Watch',
    },
  
    // =========================
    // COZY BEDROOM
    // =========================
  
    {
      id: 'bedroom-1',
      title: 'Cozy Bedroom Ideas',
      image:
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
      height: 260,
      author: 'Bedroom Inspiration',
      category: 'Cozy Bedroom',
    },
    {
      id: 'bedroom-2',
      title: 'Bedroom Decor',
      image:
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
      height: 230,
      author: 'Home Ideas',
      category: 'Cozy Bedroom',
    },
    {
      id: 'bedroom-3',
      title: 'Warm Bedroom Inspiration',
      image:
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0',
      height: 280,
      author: 'Interior Design',
      category: 'Cozy Bedroom',
    },
    {
      id: 'bedroom-4',
      title: 'Minimal Bedroom',
      image:
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
      height: 250,
      author: 'Minimal Home',
      category: 'Cozy Bedroom',
    },
    {
      id: 'bedroom-5',
      title: 'Soft Bedroom Aesthetic',
      image:
        'https://images.unsplash.com/photo-1615874959474-d609969a20ed',
      height: 220,
      author: 'Bedroom Ideas',
      category: 'Cozy Bedroom',
    },
    {
      id: 'bedroom-6',
      title: 'Small Bedroom Ideas',
      image:
        'https://images.unsplash.com/photo-1617104678098-de229db51175',
      height: 300,
      author: 'Small Spaces',
      category: 'Cozy Bedroom',
    },
    {
      id: 'bedroom-7',
      title: 'Warm Neutral Bedroom',
      image:
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
      height: 240,
      author: 'Neutral Home',
      category: 'Cozy Bedroom',
    },
    {
      id: 'bedroom-8',
      title: 'Dream Bedroom',
      image:
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea',
      height: 270,
      author: 'Dream Home',
      category: 'Cozy Bedroom',
    },
  
    // =========================
    // GENERAL HOME / FASHION /
    // TRAVEL PINS
    // =========================
  
    {
      id: '1',
      title: 'Cozy Bedroom Ideas',
      image:
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
      height: 260,
      author: 'Home Inspiration',
      category: 'Home Ideas',
    },
    {
      id: '2',
      title: 'Simple Outfit Ideas',
      image:
        'https://images.unsplash.com/photo-1483985988355-763728e1935b',
      height: 190,
      author: 'Style Ideas',
      category: 'Fashion',
    },
    {
      id: '3',
      title: 'Easy Dinner Recipes',
      image:
        'https://images.unsplash.com/photo-1547592180-85f173990554',
      height: 230,
      author: 'Food Inspiration',
      category: 'Recipes',
    },
    {
      id: '4',
      title: 'Travel Inspiration',
      image:
        'https://images.unsplash.com/photo-1500534623283-312aade485b7',
      height: 300,
      author: 'Travel Ideas',
      category: 'Travel',
    },
    {
      id: '5',
      title: 'Living Room Inspiration',
      image:
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0',
      height: 250,
      author: 'Home Ideas',
      category: 'Home Ideas',
    },
    {
      id: '6',
      title: 'Photography Ideas',
      image:
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32',
      height: 200,
      author: 'Photography',
      category: 'Photography',
    },
    {
      id: '7',
      title: 'Coffee Shop Inspiration',
      image:
        'https://images.unsplash.com/photo-1445116572660-236099ec97a0',
      height: 280,
      author: 'Coffee Lovers',
      category: 'Coffee',
    },
    {
      id: '8',
      title: 'Minimalist Home',
      image:
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d',
      height: 220,
      author: 'Minimal Home',
      category: 'Home Ideas',
    },
    {
      id: '9',
      title: 'Weekend Brunch Ideas',
      image:
        'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666',
      height: 250,
      author: 'Food Inspiration',
      category: 'Recipes',
    },
    {
      id: '10',
      title: 'Summer Outfit Inspiration',
      image:
        'https://images.unsplash.com/photo-1496747611176-843222e1e57c',
      height: 300,
      author: 'Fashion Daily',
      category: 'Fashion',
    },
    {
      id: '11',
      title: 'Beautiful Mountain Views',
      image:
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b',
      height: 220,
      author: 'Travel Ideas',
      category: 'Travel',
    },
    {
      id: '12',
      title: 'Plant Decor Ideas',
      image:
        'https://images.unsplash.com/photo-1485955900006-10f4d324d411',
      height: 270,
      author: 'Home Inspiration',
      category: 'Home Ideas',
    },
    {
      id: '13',
      title: 'Aesthetic Desk Setup',
      image:
        'https://images.unsplash.com/photo-1497215842964-222b430dc094',
      height: 210,
      author: 'Workspace Ideas',
      category: 'Workspace',
    },
    {
      id: '14',
      title: 'Easy Pasta Recipe',
      image:
        'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
      height: 280,
      author: 'Recipe Ideas',
      category: 'Recipes',
    },
    {
      id: '15',
      title: 'Beach Vacation Inspiration',
      image:
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      height: 230,
      author: 'Travel Inspiration',
      category: 'Travel',
    },
    {
      id: '16',
      title: 'Neutral Home Decor',
      image:
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6',
      height: 300,
      author: 'Interior Design',
      category: 'Home Ideas',
    },
    {
      id: '17',
      title: 'Cute Baking Ideas',
      image:
        'https://images.unsplash.com/photo-1551024506-0bccd828d307',
      height: 220,
      author: 'Baking Ideas',
      category: 'Recipes',
    },
    {
      id: '18',
      title: 'Street Style Inspiration',
      image:
        'https://images.unsplash.com/photo-1485968579580-b6d095142e6e',
      height: 270,
      author: 'Style Inspiration',
      category: 'Fashion',
    },
    {
      id: '19',
      title: 'Cozy Coffee Morning',
      image:
        'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
      height: 240,
      author: 'Coffee Lovers',
      category: 'Coffee',
    },
    {
      id: '20',
      title: 'Nature Photography',
      image:
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
      height: 300,
      author: 'Photography Ideas',
      category: 'Photography',
    },
  ];
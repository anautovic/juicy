const menu = [
  {
    id: 1,
    title: 'NATURAL MANGO MIX',
    category: 'Jus cocktails',
    price: '2500 fcfa' ,
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651991/samples/food/jus_mangue_pomme_eprped.jpg',
    desc: `Ananas, goyave, papaye, mangue `,
  },
  {
    id: 2,
    title: 'MINTY WATERMELON',
    category: 'Jus cocktails',
    price: '2000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651990/samples/food/jus_de_pastheque_bdogmw.jpg',
    desc: `Pastèque, citron vert, menthe `,
  },
  {
    id: 3,
    title: 'REFRESHING MORNING',
    category: 'Jus cocktails',
    price: '2000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651990/samples/food/jus_ananas_vskj8i.jpg',
    desc: `Ananas, mangue, citron vert`,
  },
  {
    id: 4,
    title: 'MANGAPPLE',
    category: 'Jus cocktails',
    price: '2000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651991/samples/food/jus_mangue_pomme_eprped.jpg',
    desc: `Mangue, pomme `,
  },
  {
    id: 5,
    title: 'COCO FRUITY',
    category: 'Jus cocktails',
    price: '2000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651991/samples/food/jus_mangue_pomme_eprped.jpg',
    desc: `Mangue, goyage, lait de coco `,
  },
  {
    id: 6,
    title: 'BURNING CALORIES RECIPE',
    category: 'Jus detox',
    price: '2500 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651941/samples/food/detox_ociz8v.jpg',
    desc: `Ananas, banane, pomme,curcuma`,
  },
  {
    id: 7,
    title: 'SPICY PINEAPPLE',
    category: 'Jus detox',
    price: '2000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651941/samples/food/detox_ociz8v.jpg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'SOUR MIX',
    category: 'Jus detox',
    price: '2000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651941/samples/food/detox_ociz8v.jpg',
    desc: `Ananas, citron, orange, cannelle`,
  },
  {
    id: 9,
    title: 'THE',
    category: 'Boissons chaudes',
    price: '1000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627652009/samples/food/the_hntfzf.jpg',
    desc: ``,
  },
  {
    id: 10,
    title: 'CAFE SUR PLACE',
    category: 'Boissons chaudes',
    price: '1000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651940/samples/food/chocolat_lait_nfwdl0.jpg',
    desc: ``,
  },
  {
    id: 11,
    title: 'CITRONELLE',
    category: 'Boissons chaudes',
    price: '1000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651940/samples/food/chocolat_lait_nfwdl0.jpg',
    desc: ``,
  },
  {
    id: 12,
    title: 'CAFE A EMPORTER',
    category: 'Boissons chaudes',
    price: '500 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651939/samples/food/cafe_cluwsg.jpg',
    desc: ``,
  },
  {
    id: 13,
    title: 'CHOCOLAT AU LAIT',
    category: 'Boissons chaudes',
    price: '1000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651940/samples/food/chocolat_lait_nfwdl0.jpg',
    desc: ``,
  },
  {
    id: 14,
    title: 'THE MAROCAIN',
    category: 'Boissons chaudes',
    price: '1000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627652015/samples/food/THE-A-LA-MENTHE-MAROC_p3z0hl.jpg',
    desc: `Thé vert à la menthe fraîche`,
  },
  {
    id: 15,
    title: '1664',
    category: 'Bières',
    price: '1000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651938/samples/food/1664_pz9ziy.jpg',
    desc: ``,
  },
  {
    id: 16,
    title: 'HEINEKEN',
    category: 'Bières',
    price: '1000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651942/samples/food/heineken_ndswyh.jpg',
    desc: ``,
  },
  {
    id: 17,
    title: 'PETITE GUINESS',
    category: 'Bières',
    price: '1000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651942/samples/food/guiness_aceowa.jpg',
    desc: ``,
  },
  {
    id: 18,
    title: '33',
    category: 'Bières',
    price: '1000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651938/samples/food/33-export_iwfote.jpg',
    desc: ``,
  },
  {
    id: 19,
    title: 'CASTEL',
    category: 'Bières',
    price: '1000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651939/samples/food/castel_irjxwq.jpg',
    desc: ``,
  },
  {
    id: 20,
    title: 'BOOSTER',
    category: 'Bières',
    price: '1000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651939/samples/food/booster_epngbx.png',
    desc: ``,
  },
  {
    id: 21,
    title: 'PERRIER',
    category: 'Autres boissons',
    price: '2000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627652006/samples/food/perrier_szutch.jpg',
    desc: ``,
  },
  {
    id: 22,
    title: 'COCA COLA 1L',
    category: 'Autres boissons',
    price: '1000 fcfa',
    img: ' https://res.cloudinary.com/wil/image/upload/v1627651942/samples/food/coca_cola_hcihnf.jpg',
    desc: ``,
  },
  {
    id: 23,
    title: 'EAU 1.5L',
    category: 'Autres boissons',
    price: '1000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651941/samples/food/eau_ivmytn.jpg',
    desc: ``,
  },
  {
    id: 24,
    title: 'VEUVE CLICQUOT',
    category: 'Champagnes',
    price: '60.000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627652016/samples/food/veuve_clicquot_vhzjrf.jpg',
    desc: ``,
  },
  {
    id: 25,
    title: 'LAURENT PERRIER',
    category: 'Champagnes',
    price: '50.000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651993/samples/food/laurent_perrier_wtrklu.png',
    desc: ``,
  },
  {
    id: 26,
    title: 'MOET',
    category: 'Champagnes',
    price: '50.000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627652005/samples/food/Moet_rltas7.png',
    desc: ``,
  },
  {
    id: 27,
    title: 'ABERLOUR',
    category: 'Whiskys',
    price: '40.000 fcfa',
    img: ' https://res.cloudinary.com/wil/image/upload/v1627651938/samples/food/aberlour_sebdvb.jpg',
    desc: `La bouteille`,
  },
  {
    id: 29,
    title: 'ABERLOUR',
    category: 'Whiskys',
    price: '4000 fcfa',
    img: ' https://res.cloudinary.com/wil/image/upload/v1627651938/samples/food/aberlour_sebdvb.jpg',
    desc: `La consomation`,
  },
  {
    id: 28,
    title: 'CARDHU',
    category: 'Whiskys',
    price: '50.000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651939/samples/food/cardhu_km65xc.jpg',
    desc: `La bouteille`,
  },
  {
    id: 30,
    title: 'CARDHU',
    category: 'Whiskys',
    price: '4000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651939/samples/food/cardhu_km65xc.jpg',
    desc: `La consommation`,
  },
  {
    id: 31,
    title: 'BLACK LABEL',
    category: 'Whiskys',
    price: '30.000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651939/samples/food/black_label_iprvzl.png',
    desc: `La bouteille`,
  },
  {
    id: 33,
    title: 'BLACK LABEL',
    category: 'Whiskys',
    price: '2500 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651939/samples/food/black_label_iprvzl.png',
    desc: `La consommation`,
  },
  {
    id: 34,
    title: 'EAU 50 CL',
    category: 'VINS',
    price: '500 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651941/samples/food/eau_ivmytn.jpg',
    desc: ``,
  },
  {
    id: 35,
    title: 'COMTESSE DU BARRECHE',
    category: 'VINS',
    price: '6000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651938/samples/food/comtesse_barreche_zd2sw5.jpg',
    desc: `Vin rouge de bordeaux`,
  },
  {
    id: 36,
    title: 'MONTMEYRAC',
    category: 'VINS',
    price: '7000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627652005/samples/food/montmeyrac-red_fuxa0c.jpg',
    desc: `Vin rouge`,
  },
  {
    id: 37,
    title: 'REFUGE DE LA COMTESSE',
    category: 'VINS',
    price: '6000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627652007/samples/food/refuge_comptesse_jn92fz.jpg',
    desc: `Vin rouge de bordeaux`,
  },
  {
    id: 38,
    title: 'CHEMIN DES ROCHES',
    category: 'VINS',
    price: '7000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651940/samples/food/chemin_des_roches_ccvtb9.jpg',
    desc: `Vin rouge`,
  },
  {
    id: 39,
    title: 'TOUR CANTELLOU',
    category: 'VINS',
    price: '4000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627652015/samples/food/tour_cantellou_mnyvm8.jpg',
    desc: `Vin blanc sec`,
  },
  {
    id: 40,
    title: 'TOUR CANTELLOU',
    category: 'VINS',
    price: '5000 fcfa',
    img: 'https://res.cloudinary.com/wil/image/upload/v1627652015/samples/food/tour_cantellou_mnyvm8.jpg',
    desc: `Vin blanc moelleux`,
  },
  {
    id: 41,
    title: 'CLASSIC ORANGE',
    category: 'Purs jus',
    price: '2000 fcfa' ,
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651990/samples/food/jus_d_orange_ndj95g.jpg',
    desc: `Jus d'orange pressées `,
  },
  {
    id: 42,
    title: 'CLASSIC PINEAPPLE',
    category: 'Purs jus',
    price: '1500 fcfa' ,
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651990/samples/food/jus_ananas_vskj8i.jpg',
    desc: `Jus d'ananas `,
  },
  {
    id: 43,
    title: 'CLASSIC PAPAYA',
    category: 'Purs jus',
    price: '1500 fcfa' ,
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651990/samples/food/jus_d_orange_ndj95g.jpg',
    desc: `Jus de papaye, citron `,
  },
  {
    id: 44,
    title: 'CLASSIC WATERMELON',
    category: 'Purs jus',
    price: '1500 fcfa' ,
    img: 'https://res.cloudinary.com/wil/image/upload/v1627651990/samples/food/jus_de_pastheque_bdogmw.jpg',
    desc: `Jus de pastèques `,
  },
  {
    id: 45,
    title: 'CLASSIC SORREL',
    category: 'Purs jus',
    price:'500 fcfa' ,
    img: ' https://res.cloudinary.com/wil/image/upload/v1627654494/samples/food/folere_ohp1sh.jpg',
    desc: `Jus d'oseilles `,
  },

];
export default menu;

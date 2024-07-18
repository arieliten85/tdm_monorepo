const initialProductData = [
  // BUDINES

  {
    title: "Budín marmolado",
    description: "Budín marmolado de chocolate y vainilla",
    price: "2.50",
    tags: ["Budín", "chocolate", "vainilla"],
    categoryName: "budines",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczMFc1AmIn5lirE7m07hbeITDiG6pNe5A0Lgd3ytl8ZeeNuqknBiOQ_vkWvcNGYmvAu6AyAzxMRjNy-oLvSnFwYa_4RvxcwhBgpHYMAHmqKGrO6eBmvebQXkdyfeOJQHgGX27UQ-NDI-eqci082FP2di=w768-h1024-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Budín de chia",
    description: "Budín de vainilla con semillas de chia",
    price: "2.50",
    tags: ["Budín", "chia", "vainilla"],
    categoryName: "budines",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczPuVY61_Ax0f6b0-PYAbEvlTMwus9mz2LwiKgOJKZiOwTPQzRWidOsleYbJxtsWud-cd1VZuGZGt5snjn9ESZ_i3fro23CN5Khn1WmtjdbzHgs8b3E-eO_NQ75tZff_N53LTuZ5fSfrzJ-8V4yCW5WC=w768-h1024-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Budín de banana",
    description: "Budín de banana",
    price: "2.50",
    tags: ["Budín", "banana", "vainilla"],
    categoryName: "budines",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczMg4lOTqbBysXwCOlfghSI3ZXxhBP37ZYwUB4prrZiUU3Ao-bsCDhJdGjPWt_Ve6FkCp3N8AweFwxFmgIJu1Z5hGmUp5ER_vbqhkOapCNqWgJh4xY-XnJcX_v_KhgbHGR2XvHlZuUig13Z6CVApzpDZ=w768-h1024-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Budín de Vainilla",
    description:
      "Nuestro Budín de Vainilla es una delicia clásica, con una textura suave y un sabor a vainilla que te encantará. Perfecto para acompañar con una taza de té o café.",
    price: "3.50",
    tags: ["Budín", "vainilla", "ventaRapida"],
    categoryName: "budines",
    images: [
      {
        url: "https://www.johaprato.com/files/styles/flexslider_full/public/budin_vainilla.jpg?itok=BjnPfhTA",
      },
    ],
  },
  {
    title: "Budín de chocolate",
    description:
      "Nuestro Budín de Chocolate es una explosión de sabor con cada mordisco. Hecho con chips de chocolate, este budín te transportará a los sabores de tu infancia. ¡Ordénalo y disfruta!",
    price: "4.50",
    tags: ["dulce", "budin", "chocolate", "ventaRapida"],
    categoryName: "budines",
    images: [
      {
        url: "https://cuk-it.com/wp-content/uploads/2021/09/budin-chocolate.webp",
      },
    ],
  },
  // TARTAS

  {
    title: "Tarta de frutilla",
    description: "Tarta de frutilla con pastelera",
    price: "5",
    tags: ["frutilla", "dulce", "Tarta", "pastelera"],
    categoryName: "tartas",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczNUvQHUymi2r7g8VO-Lgf-sCrfM1ySOZg9UFpQlgJwGQqYRS-wUow3rhy9SjOtpzpw-nuaaHBEBymdmx04JYRxKi03nLZywvZqe1HL2E2YBbvjNtKxr0id9xVDADWeyW6itif0O4kj-0TNrFsK9pShT=w768-h1024-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Tarta de Rocher",
    description:
      "Tarta Ferrero Rocher, una base de brownie con crema y dulce de leche",
    price: "4",
    tags: ["frutilla", "dulce", "Tarta", "brownie"],
    categoryName: "tartas",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczMUuLGbBSol2v0cigIAmP_I9cv0Vf7SqR28nIlT2tHoxTwxRafaF9PjzBwSZQLshLTki43D7T56CJixmEeKDPf_V9rQ50hKmp4w1QczWLxozlUYfyusmoLYioo5v4u1b1zMBesioDoAuahNp_MOE7rK=w768-h1024-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Tarta de mousse",
    description:
      "La tarta de mousse tiene una base crujiente de masa de vainilla, coronada con una generosa cantidad de mousse de chocolate.",
    price: "3",
    tags: ["dulce", "Tarta", "mousse"],
    categoryName: "tartas",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczOpPFIZwgaalyCG_Uq2-3PjnVdS5Bmt2GzKHsj0Pm5YrdfdkdtMxNY_VfXvUW2ZVTUcIkpNDDz526U3LX88qCs6GCSGmxkafkwp1oYevvcmRqekc4SYCAnjhqGGfS_Lnke7BNNd6kmsgzwg6BBuxi2W=w768-h1024-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Tarta de manzana",
    description:
      "La tarta de manzana caramelizada cuenta con una base crujiente de masa quebrada, cubierta con rodajas de manzana caramelizadas con azúcar moreno y un toque de canela.",
    price: "2",
    tags: ["dulce", "Tarta", "manzana"],
    categoryName: "tartas",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczN7VTgLc7hoy_0OyNaERX-tbTNtT8Gd6tv9LCkaJDIj3D2bC0mt5C3M8ydGncfKjotIbOAwm7ZhOYsLj4nDRJAVqLP5XT3JuNLS6_22WgqiY1y3UJV3yUAYl-aCFROLDihg-0xUhpzEOI1xbK0bTnpm=w768-h1024-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Pastafrola Artesanal",
    description:
      "Disfruta de nuestra Pastafrola Artesanal, hecha con una crujiente base y un delicioso relleno de dulce de membrillo casero. ¡Cada bocado te transportará a los sabores tradicionales!",
    price: "4.50",
    tags: ["maza", "membrillo", "vainilla", "ventaRapida"],
    categoryName: "tartas",
    images: [
      {
        url: "https://www.locosxelmate.com/wp-content/uploads/2015/11/pasta_frola.jpg",
      },
    ],
  },
  {
    title: "Cuadrados de coco",
    description:
      "Nuestros Cuadrados de Coco combinan una base dulce con un generoso relleno de dulce de leche y una capa superior de coco rallado. ¡Una delicia que no puedes dejar de probar!",
    price: "3.00",
    tags: ["dulce", "coco", "dulce de leche", "ventaRapida"],
    categoryName: "tartas",
    images: [
      {
        url: "https://resizer.glanacion.com/resizer/v2/cuadrados-de-coco-y-dulce-de-leche-por-antonio-MZI5W3E4RNCY5MPRVD3SU45ISA.jpg?auth=8ba6531479a294314554a75b3b32299267b2ff23121947c09968c6fca0c7bb82&width=768&height=512&quality=70&smart=true",
      },
    ],
  },
  {
    title: "Pastafrola de batata Tradicional",
    description:
      "Nuestra Pastafrola de Batata Tradicional, con su base crocante y dulce de batata artesanal, te ofrece una experiencia de sabor auténtica. ¡Ordénala y disfruta cada mordisco!",
    price: "6.50",
    tags: ["dulce", "batata", "ventaRapida"],
    categoryName: "tartas",
    images: [
      {
        url: "https://www.clarin.com/2021/05/14/KmxHFgxit_1200x0__1.jpg",
      },
    ],
  },
  //COOKIES
  {
    title: "Cookies de vanilla",
    description:
      "Las cookies de vainilla con chips de chocolate son irresistibles galletas crujientes y suaves, llenas de trocitos de chocolate que se derriten en cada bocado.",
    price: "5.50",
    tags: ["dulce", "vanilla", "Cookies"],
    categoryName: "cookies",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczMU7tl6xI-z2WmKxNr0-9dGBpoxz5WkO_PKciSyry4GykwOFv2kxIB-0JcbgwT8-kMHwAvx_EtSBK8zG-REK2bmNmiYRTcHJPG8dQ5Rjfxs2iEUQAZfFkrW4mWLfJX8Qw_D8JxCkXwI9VbW_S6QAYHn=w768-h1024-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Cookies de pascuas",
    description:
      "Las cookies de vainilla con un toque de Pascua son dulces y suaves, ideales para disfrutar en esta temporada festiva con cada mordisco lleno de sabor a vainilla.",
    price: "5.50",
    tags: ["pascuas", "vanilla", "Cookies"],
    categoryName: "cookies",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczMul5UvZWEtoxsLnlSnmKNRucwGUf1vzVFPP3NtR_68aP5NCIqtpKLnyFezyvRaqmFeHXR6Wriy03gaLUn1VvXCWD3FapO6PCo0dIiJZq6lk_SJFoRpLZgSw2x4aGAAHVMzJweEyHsk0Fzzx6_PYr3P=w768-h1024-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Cookies de pokemon",
    description:
      "Las cookies de vainilla inspiradas en Pokémon son tiernas y llenas de diversión, perfectas para los entrenadores que buscan un sabor delicioso mientras capturan momentos dulces.",
    price: "5.50",
    tags: ["pokemon", "vanilla", "Cookies"],
    categoryName: "cookies",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczNZa3-YzMveaAk2q_DHB7CqfQcSsUVfVUws2oVjzLCUdESnSQ8cki3mHZgLZ017RJVKK8gbgQFvReTHlthi1MDaSYnIkQ1AMKsPv1JQFZt-ZpsUnjhXIANGfHhL3iyVHYVVQ0vuvjhEvqwS-5WF1MDb=w768-h1024-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Cookies de arcoiris",
    description:
      "Las cookies de vainilla con temática de arcoíris son coloridas y deliciosamente suaves, cada bocado es una explosión de sabores que alegra los sentidos con sus tonos vibrantes y dulces.",
    price: "5.50",
    tags: ["arcoiris", "vanilla", "cookies"],
    categoryName: "cookies",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczObSManK2rIectVKyk8dTtvgeeqk5YlMEw7Nzq92cYm2IBMc4uFDhABjeEZ607qqG_7vweyCwsXJskBDBt5WQ6NtTSUaM5LoJWLPh8ywuuKkiI7-P4mjJfEr4xGVpOT6uaaxszUFZzvXYoIrbEim_Yf=w768-h1024-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Cookies 70 años",
    description:
      "Las cookies de vainilla, decoradas con motivo de 70 años, son una celebración dulce y memorable, perfectas para compartir y disfrutar en esta ocasión especial con un toque de nostalgia y alegría.",
    price: "5.50",
    tags: ["especiale", "vanilla", "eventos"],
    categoryName: "cookies",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczMRqNvRROj30fb7VuiNHO9LWJYd-zVZ9G-1xU37cJ3M7PlLnrHR6vD3fC_ezUSdyx-49A7qvOGf4M-i2HTi3hpG9IN7jNFMV-zgXUVAngEOwuUMmy-F3FIuolSOJ5hdABhUdqx2R6INJ6sb9dOfJsTy=w768-h1024-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Cookies",
    description:
      "Revive tus mejores recuerdos con nuestras Galletitas caseras, llenas de chispas de chocolate y horneadas con amor. Perfectas para acompañar tu café o té. ¡Ordénalas y disfruta del sabor nostálgico!",
    price: "2.50",
    tags: ["dulce", "galletitas", "vainilla", "ventaRapida"],
    categoryName: "cookies",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_V38fYdTpZZZWBKm2zsmdl2TLhkSowMgietl9YwQg65Bz0p2ltsrousuxyvW6aGwTG8c&usqp=CAU",
      },
    ],
  },

  //TORTAS
  {
    title: "Torta KitKat",
    description:
      "La torta de crema con pedacitos de Kit-Kat combina suavidad y crujiente en cada bocado, ofreciendo una experiencia dulce y única para cualquier celebración.",
    price: "5.50",
    tags: ["kit-kat", "crema", "torta", "cumple"],
    categoryName: "tortas",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczMYy7qczX6_Zq5qq3TuNmLIIbk2U7oWI9FEBApnccJcWFR_x5oocMU2CqvhYEFydIwmNCtsUVLeoZZBy4gKhiH9K9UTKwSoOjhQ6oED-WAn0lA77k-h-tJVNhDJg23wwRd9r_bfT-nFSJupPOGY23rB=w768-h1024-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Torta tentacion",
    description:
      "La torta cubierta de chocolate, decorada con bombones Kit Kat y Ferrero Rocher, es una deliciosa tentación que combina sabores intensos y texturas cremosas, perfecta para celebraciones especiales.",
    price: "5.50",
    tags: ["kit-kat", "crema", "torta", "cumple", "Rocher", "Ferrero"],
    categoryName: "tortas",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczPf_yYGkNMafDVt8_9va0FXZAPCWwDaVne4Pu39tokZ0o0DYiouj91D6zGtsphtApt_tHg-Q43PW48K6a9vAUzAgBPZ4M94XHX3t9DTFQiKYCMbqSZX-pLtaVGwDW9IZ8A6P6hS21l1GLQ6biAq4q-0=w768-h1024-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Torta macarons",
    description:
      "La torta de crema con decoraciones de macarons es una elegante delicia donde la suavidad de la crema se complementa con los vibrantes colores y sabores de los macarons, creando una experiencia de postre refinada y exquisita.",
    price: "5.50",
    tags: ["macarons", "crema", "torta", "cumple"],
    categoryName: "tortas",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczMm9Dt6tIbzPdRp-p241C24KUD3MrptKh3m8jIKlKnBaZfgbpbBWiXx3sQKFhM77w3MRC37M30jLcTDNLf_eWO9IsRsEk0S34zM8V_fZG2YM8dpY_XVNyqX3OzpWQM5lr50rxqTriB_SwKwFzYFzY_VRPx=w768-h1024-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Torta efecto mariposa",
    description:
      "La torta decorada con muchas mariposas es un espectáculo visual y delicioso, donde la suavidad de la crema se combina con la belleza y delicadeza de las mariposas, creando un encantador postre para cualquier ocasión especial.",
    price: "5.50",
    tags: ["mariposa", "crema", "torta", "cumple"],
    categoryName: "tortas",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczNldqZDeZCdNxbGIs8-Q1QrgsRB6CUOdOKavuxoXp1i-uUNLm4xF500qcrBaA2qo_USoqyFOtUfl5Z4y70TBgjraZaWmUmw1RT_4cXKhFYNKL_6abLgPyOMXPK4rsBPNP9A7UegrnH-3u4z8xRtw3P-=w768-h1024-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Torta oreo",
    description:
      "La torta con Oreos y KitKat es una irresistible combinación de sabores y texturas, donde la cremosidad se mezcla con la crujiente galleta y el delicioso chocolate, ofreciendo un postre indulgente y lleno de sabor.",
    price: "5.50",
    tags: ["oreo", "crema", "KitKat", "cumple"],
    categoryName: "tortas",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczPy_ywvVjVInSO1MmR7KrTg0fyqr6nMDCVvreEFSKsfQoVP5BpCJCQ5vy4n9kn6bsiUHZKEJsTfUzWyQVdERjiVBIBeUxcakTfMG1JEBN_a6x7U15sCkCwrapOH_QIEC24c1WRL1GJE9P4tfXMlDOf8=w768-h1024-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Torta pasión",
    description:
      "La Torta Pasión, con su crema rojo vibrante, es una explosión de sabor y color que captura la intensidad y el amor por los dulces, perfecta para celebrar momentos especiales con un toque apasionado y delicioso.",
    price: "5.50",
    tags: ["Torta", "crema", "pasión", "cumple"],
    categoryName: "tortas",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczNQuNHC4N5yPhOtA5DFypg-mEsbIB794wXkwpxftsMEQ597lrJZL8Vx_SgTlBvao49CSI0S5JOaT2v7DF0R_iNkjss5SJSCjCEDaQ-jxC6osoVZK5_gvHCig9eXSsX5BQk7FjXMStAgQVSUasAYam9W=w408-h544-s-no?authuser=1",
      },
    ],
  },
  //TEMATICAS
  {
    title: "Harry Potter",
    description:
      "La torta de Harry Potter es un festín mágico que combina muffins, cookies y paletas en una sola obra maestra, evocando el encanto del mundo mágico con sabores y detalles que harán las delicias de cualquier fanático de la serie.",
    price: "Consultar",
    tags: ["Torta", "Harry", "Potter", "cumple"],
    categoryName: "tematicas",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczPeC9VgG8tlEiYQKu_ww2rXUQ5BeWVc8hXLNW1TpROC3PxyMeIasLZmD2R5qBcEJHwa2xaJU4BYIEAdTjBUs-ozR9UEa4y1jom2Vs4yZmySBdZw2OVfzpOE-Q2OWZtqQs84xK_HZeWI9_PFtix8GhRf=w727-h545-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Stitch",
    description:
      "¡Celebra tus momentos especiales con una deliciosa torta temática de Stitch!",
    price: "Consultar",
    tags: ["Torta", "Stitch", "cumple"],
    categoryName: "tematicas",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczPjdvZ2lY-bBMm12QtxtEk4UKgLp6_7Ykbj8w1ZzW9HS0gO-S9F8xi_2KL2ijlC3TFbYbxYA7-0r464E5Pyd7ZU9SVe2BCVvYin4n4iDEe3Sw27pfOVT8FKYFo7GtHW48Qnb7TZsWRD-dkt6lDL_jI7=w409-h545-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Spirit, el corcel indomable",
    description:
      "¡Celebra tus momentos especiales con una deliciosa torta temática de Spirit, el corcel indomable!",
    price: "Consultar",
    tags: ["Torta", "Spirit", "cumple", "corcel indomable"],
    categoryName: "tematicas",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczMp-QMp4T0ZVL-zthfLbRq1Px7GEw0FvPFbSWuj8vr1Zbq1nYrqWTVycCHRgGqnvih6bkPE8PvvRrsogNTkNFa3l5BPSkqV0Zr8yEtgMZJ46wNzTUDfFRcwe_Bh6QBmcVgSdl1acl6P3ykQCWYgPJZi=w727-h545-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Ronaldo",
    description:
      "¡Celebra tus momentos especiales con una deliciosa torta temática de Ronaldo, siuuuu! :)",
    price: "Consultar",
    tags: ["Ronaldo", "cumple", "portugal", "futbol", "fútbol"],
    categoryName: "tematicas",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczOll1LFkcj2Neqvi0lQHSksuLQiHmK6qOvm7TwxoHI8IbRIhQFwhMAMe4iR2w48sLHq_NuUnVPMhPaHQiaXIBaLV9u7hs723XYptgvxUU3HM7xW1STUGakkVUStMZu6ezZa3P0ViGfq8GfttXKgLX6A=w409-h545-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Spider man",
    description:
      "¡Celebra tus momentos especiales con una deliciosa torta temática de Spider-Man.",
    price: "Consultar",
    tags: ["Spider", "cumple", "marvel", "avengers"],
    categoryName: "tematicas",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczN1g_BHAy6ptkjIl4Opk7peayzUDNQuGSF9LqrWhIuXRUvO2sp3MWHQW7-fHy_f3jmvyHVk1I7huKLs3juQqfMLls9Qz_RUnOnn9wkEANq8Nlv2iNg4Rw6y4D2NS91nzQMimrEsN3eH7FQf_9QPEm9f=w727-h545-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Sonic",
    description:
      "¡Celebra tus momentos especiales con una deliciosa torta temática de Sonic.",
    price: "Consultar",
    tags: ["Sonic", "cumple"],
    categoryName: "tematicas",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczNSkqXNafaafEBSwAe0Y-Dz0WatfRLTCUi-6b97Z3bXh_Ihb9_1tTJ91AAqXCQYqV9-kzPHj4_sjRydKlkhnZZNbnm0KPVXkHx6u1Nq7gQzP7Uly8K18H1yNWeyKVlDC9JEL3K81_CrdAjOvC-AGGlY=w409-h545-s-no?authuser=1",
      },
    ],
  },
  //NUMERICAS
  {
    title: "Torta San lorenzo numeral",
    description:
      "¡Celebra tus 50 años con una increíble torta en forma de tus años con San Lorenzo!",
    price: "Consultar",
    tags: ["lorenzo", "cumple", "numeral"],
    categoryName: "numericas",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczMgWY4j_J_pulKOyScFXfheWKP_i0wuuc_MXCNXJotmG2OXo7zv5UnJHRA0Cz1l-SbiY8MgmnHdkBHxpFAjPaiq3Zx2XBtcSPELznu5UdSReSpetmjmX8k9B84DGx7w08z5Sym2SAO-hc_rLxWxuHFw=w766-h575-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Torta super dulce numeral",
    description: "¡Celebra tus 50 años con una increíble torta!",
    price: "Consultar",
    tags: ["lorenzo", "cumple", "numeral"],
    categoryName: "numericas",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczNVBmBgKjJMqqtw1LzYcZSCEpPQ_eWwl4NI7zEptHxyV0kYTjIPGesKqPgutubMMbwWUU98WkU-9RDkS6GVd_Js9dlAQ3My4lsMBLshLtvfjqfXLOZxUh5lzvXajNTC3l9VDZVCgE6uj0BE8uKQn3h9=w766-h575-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Torta super dulce letra S",
    description:
      "¡Celebra tu cumpleaños de una forma única con una torta personalizada con tu inicial!",
    price: "Consultar",
    tags: ["lorenzo", "cumple", "numeral"],
    categoryName: "numericas",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczPAIEXoxYux8MQU_Rc3vfiKJQQOqs-pBcFiI7_zDcitwl3jUFCmtpHenKveJv2-ILyaplzerRBV-L7t6EQKusM1yVWlt4cV_fYMu4Z0392bx2p8K9rsTOSZxa5LJq3Ldtr-FTp5o2iOneLzWBr_jvUu=w486-h648-s-no?authuser=1",
      },
    ],
  },
  //CASAMIENTO
  {
    title: "Torta de casamiento",
    description:
      "Una torta de matrimonio elegante y sencilla, forrada en blanco y detalles florales sutiles",
    price: "Consultar",
    tags: ["casamiento", "torta"],
    categoryName: "casamiento",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczN7JKGDJI4vZA-yOgPH0fr6djO3f_WM6RxWN3K8QDVedAX_g0sPIdo3VU8YM_XGQOTSlgHBjG_pFzVe62w9NkoAsiTx1zf5AWSVt-wX4rXRV7gwmtx4mz5qjQBVD-SiTZHJhG9mn3BAvoNU5b1ElxJT=w486-h648-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Torta de casamiento",
    description:
      "Una torta de matrimonio elegante y sencilla, forrada en blanco y detalles de corazones sutiles",
    price: "Consultar",
    tags: ["casamiento", "torta"],
    categoryName: "casamiento",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczOFovAMh1OXzWR-d6ieRftJuuWKYcGXe5hgj9dpoZIrF4KB7GiVNV-o_1zBIJq1N_OXZmXZ8o7_uGKCkda6v47YsbNoq5rLz8aS3Z8pNvWbdD0_s100adSsNcTXCpL2mqJxraGgVWFLo3dSr76qUp4L=w486-h648-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Torta de casamiento",
    description:
      "Una torta de matrimonio elegante y sencilla, forrada en blanco y detalles florales sutiles",
    price: "Consultar",
    tags: ["casamiento", "torta"],
    categoryName: "casamiento",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczOajMIY6bj1wDzy9n_RnhtFT6UZebFvt5C8ocUtRlSX7VKIoBiPJG0EfwH14NBZL7fixsJAoT_n4PeFiVYZrAEzpelB9ly3ZSnqLgxtTLh0cJsm50kZ_F7eYRW2O3geBN2VscLUSjL97ObCLHPl4M-N=w486-h648-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Torta de casamiento",
    description:
      "Una torta de matrimonio elegante y sencilla, forrada en blanco y detalles florales sutiles",
    price: "Consultar",
    tags: ["casamiento", "torta"],
    categoryName: "casamiento",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczNGFaFE3Dd8kur3re4ETtxaXQ9hhLGqajPZf-5i6_vvwtWQMLjrK4ZknqN4Q2T8jXgr7c8eCIjtAcvp0abxINA-Sv5UitUadOEVEW9A7iDYSY0UNm2SF6IioGIrtdQtevsHD9MCi80YK2lpmDt9CVLX=w486-h648-s-no?authuser=1",
      },
    ],
  },
  //BAUTISMO
  {
    title: "Torta de bautismo",
    description:
      "Una torta de bautismo simple decorada con delicados detalles blancos y azules.",
    price: "Consultar",
    tags: ["bautismo", "torta"],
    categoryName: "bautismo",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczPXUOFuY2zs8dHYEBwa9vQEmT5M89PSukMEXCNnCjnYggwGs7HVnSLXKRymzFjK56lMKwLegJ_H5_NFxFcc8We3iQLBHna9zLgBIXitx9r40eYCuApRF2K_gw8J--hBMXdZ2UpoXHVU5X0XRRl53Qa6=w766-h575-s-no?authuser=1",
      },
    ],
  },
  {
    title: "Torta de bautismo",
    description:
      "Una torta de bautismo simple decorada con delicados detalles.",
    price: "Consultar",
    tags: ["bautismo", "torta"],
    categoryName: "bautismo",
    images: [
      {
        url: "https://lh3.googleusercontent.com/pw/AP1GczPC0q4DeuFJIpAZnWfaoiKt2iczZYdQun0k1gFj-UmGsUOqJ_sGNhUQmMi0GND1kzMNviiAJkjVN5t8JO7tAEIAHu0zgYQZdTVc-wcYf5Jxnkeqsw8-YjGWuisd0tGXDFgSch1pVwlBHnmvlzmY2Ec-=w486-h648-s-no?authuser=1",
      },
    ],
  },
  //ALFAJORES
  {
    title: "Alfajores de maicena",
    description:
      "Nuestros alfajores de maicena combinan la suavidad de la masa con un exquisito relleno de dulce de leche, todo cubierto por una capa de coco rallado. ¡Ordénalos ahora y disfruta de una experiencia de sabor única!",
    price: "$2.50",
    tags: [
      "maicena",
      "coco",
      "dulce",
      "seco",
      "masas",
      "dulce de leche",
      "ventaRapida",
    ],
    categoryName: "alfajores",
    images: [
      {
        url: "https://cuk-it.com/wp-content/uploads/2020/06/alfajores-maicena.webp",
      },
    ],
  },
  //BROWNIES
  {
    title: "Brownie Tentación",
    description:
      "Nuestro Brownie Tentación es una delicia irresistible con una textura densa y rica en chocolate, complementada con chips de chocolate. Perfecto para disfrutar en cualquier momento del día.",
    price: "$3.00",
    tags: ["brownie", "chocolate", "nuez", "ventaRapida"],
    categoryName: "brownies",
    images: [
      {
        url: "https://images.aws.nestle.recipes/resized/2020_06_03T13_21_43_mrs_ImageRecipes_147427lrg_1080_850.jpg",
      },
    ],
  },
];

module.exports = initialProductData;

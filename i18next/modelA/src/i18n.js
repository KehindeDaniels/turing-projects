import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        welcome: "Welcome to our inclusive store",
        cart: "Shopping Cart",
        addToCart: "Add to Cart",
        aria: {
          cartButton: "Add this item to your shopping cart",
          navigation: "Main navigation",
          brailleDescription: "Detailed description of the braille book",
          wheelchairDescription:
            "High-quality wheelchair with ergonomic design",
          walkingStickDescription:
            "Adjustable walking stick for added mobility",
        },
        products: {
          braille: "Braille Book",
          wheelchair: "Wheelchair",
          walkingStick: "Walking Stick",
        },
      },
    },
    fr: {
      translation: {
        welcome: "Bienvenue dans notre magasin inclusif",
        cart: "Panier",
        addToCart: "Ajouter au panier",
        aria: {
          cartButton: "Ajoutez cet article à votre panier",
          navigation: "Navigation principale",
          brailleDescription: "Description détaillée du livre en braille",
          wheelchairDescription:
            "Fauteuil roulant de haute qualité avec design ergonomique",
          walkingStickDescription: "Canne réglable pour une mobilité accrue",
        },
        products: {
          braille: "Livre en braille",
          wheelchair: "Fauteuil roulant",
          walkingStick: "Canne",
        },
      },
    },
    es: {
      translation: {
        welcome: "Bienvenido a nuestra tienda inclusiva",
        cart: "Carrito de compras",
        addToCart: "Agregar al carrito",
        aria: {
          cartButton: "Agregar este artículo a su carrito de compras",
          navigation: "Navegación principal",
          brailleDescription: "Descripción detallada del libro en braille",
          wheelchairDescription:
            "Silla de ruedas de alta calidad con diseño ergonómico",
          walkingStickDescription: "Bastón ajustable para mayor movilidad",
        },
        products: {
          braille: "Libro en braille",
          wheelchair: "Silla de ruedas",
          walkingStick: "Bastón",
        },
      },
    },
    zh: {
      translation: {
        welcome: "",
        cart: "",
        addToCart: "",
        aria: {
          cartButton: "",
          navigation: "",
          brailleDescription: "",
          wheelchairDescription: "",
          walkingStickDescription: "",
        },
        products: {
          braille: "",
          wheelchair: "",
          walkingStick: "",
        },
      },
    },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
